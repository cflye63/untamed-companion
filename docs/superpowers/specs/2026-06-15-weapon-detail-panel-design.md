# Weapon Detail Panel Redesign — Design

**Date:** 2026-06-15
**Status:** Approved pending spec review
**Branch:** feature/character-sheet
**Builds on:** `2026-06-10-weapon-step-redesign-design.md` (compact cards + role badges, already shipped)

## Problem

The weapon-selection detail panel (the `.weapon-detail` block shown when a weapon is selected) presents three levels of information at once — weapon fantasy, mechanical stats, and the full progression — in a single dense chunk. The core-mechanic explanation is buried inside one overloaded paragraph that "reads more like a rules document than a weapon selection screen." Players need a 30-second understanding to choose, not the full ruleset. All five techniques (Tier 1 through Tier 5) are also shown with equal weight, when at character creation only the Tier 1 technique is immediately relevant.

The compact cards in the grid are fine and stay untouched. This redesign is **detail-panel only**.

## Goals

- The panel answers, in order: what is this weapon, what does it do at a glance, what's its core mechanic, what do I get now, what does it become.
- Reduce cognitive load: progressive disclosure instead of one wall of text.
- Preserve full rules depth, but collapsed by default.

## Design

### 1. Data model changes (`src/data/weapons.ts`)

**`Technique` type:**
- Add `tier: 1 | 2 | 3 | 4 | 5` (required). Populated by array position: the 1st technique in each weapon's list is Tier 1, the 5th is Tier 5. This convention already holds in the data (confirmed against the Hammer breakdown: Cratering Blow=T1 … Shatterfall=T5); the field makes it explicit rather than positional.
- Remove the unused `unlockedAt?: 'novice' | 'trained' | 'master'` field — it encoded the same "when does this unlock" idea but was never populated on any weapon. `tier` replaces it.

**`Weapon` type:**
- Add `complexity: 1 | 2 | 3 | 4 | 5` (required) — learning-curve rating, rendered as filled/empty stars.
- Add `coreMechanic: { name: string; bullets: string[] }` (required) — the scannable callout. `name` is the mechanic's short name (e.g. "Sunder", "Stance Switch", "Momentum"); `bullets` is 2–4 short lines authored from each weapon's existing `description` prose.

**Kept and reused (no change):**
- `summary` — the one-sentence pitch (rendered unlabeled).
- `description` — the full prose, now shown only inside the collapsed "Full rules" section.
- `primaryRole`, `secondaryRole`, `primaryStat`, `damageStat`, `damageDice`, `range`, `powerDice`.
- The unused `bestWith?` field stays as previously decided.

### 2. Detail panel layout (`src/components/sheet/wizard/StepWeapon.tsx`)

Only the `.weapon-detail` block changes. The grid of compact cards above it is unchanged.

```
Hammer
Breaker • Controller

[STR] [1d12] [Melee 5 ft] [+1 Power Die]          stat chips
Complexity: ★★★☆☆

Stack Sunder to crack armor open for the whole party.   ← summary, UNLABELED (reads as the pitch)

Pairs well with: Juggernaut

Core Mechanic — Sunder
  • Each hit adds +1 Sunder (max 3) to a target
  • Sunder adds +X to your attack rolls vs that target
  • At Sunder 3, its saves vs your riders are at disadvantage

Current Technique (Tier 1)
  ▼ Cratering Blow (2 STA)            ← <details open> by default
      <technique description>

Future Unlocks
  ▶ Tier 2 — Armor Breaker            ← <details> collapsed
  ▶ Tier 3 — Aftershock
  ▶ Tier 4 — Seismic Slam
  ▶ Tier 5 — Shatterfall

▶ Full rules                          ← <details> collapsed; original description prose
```

**Header rows:** weapon name; `{primaryRole} • {secondaryRole}`.

**Stat chips:** derived from existing fields, no new data. Chips: `{primaryStat}`, `{damageDice}`, one chip per segment of `range` split on `" / "` (so "Reach 10 ft / Thrown 20/60 ft" → two chips), and `+{powerDice} Power {Die|Dice}`. Weapon tags (Heavy, Two-Handed, etc.) are out of scope — no data exists for them.

**Complexity:** label "Complexity:" followed by 5 star glyphs, `complexity` filled and the rest empty.

**Summary:** the `summary` sentence, rendered with no heading/label, directly under the complexity line.

**Pairs well with:** unchanged — specialization names from reverse lookup over `SPECIALIZATIONS.bestWith`, hidden when none.

**Core Mechanic callout:** a titled box — "Core Mechanic — {coreMechanic.name}" — with `coreMechanic.bullets` as a bulleted list.

**Techniques (progressive disclosure):** native `<details>/<summary>` elements, no component state.
- "Current Technique (Tier 1)" heading, then the tier-1 technique in a `<details open>`: summary shows "{name} ({staminaCost} STA)", body shows the description.
- "Future Unlocks" heading, then tiers 2–5 each as a closed `<details>`: summary shows "Tier {tier} — {name}", body shows "({staminaCost} STA)" and the description.

**Full rules:** a closed `<details>` with summary "Full rules" and body containing the weapon's `description` paragraph.

### 3. CSS (`src/components/sheet/styles/sheet.css`)

New rules, reusing existing color vars (`--amber`, `--moss-green`, `--forest-dark`, `--cream`, `--text-light`, `--earth-brown`):
- `.weapon-chips` row + `.weapon-chip` pill styling.
- `.weapon-complexity` row; filled vs empty star color (filled `--amber`, empty dimmed).
- `.weapon-pitch` (the unlabeled summary line).
- `.core-mechanic` callout box (titled, bordered) + its bullet list.
- `.tier-group` headings ("Current Technique", "Future Unlocks") and `<details>`-based `.tier-row` / `.technique-row` styling (summary cursor, marker, expanded body padding).

### 4. Complexity ratings (authored data — confirm during spec review)

| Weapon | Complexity |
| --- | --- |
| Greatsword | 1 |
| Bow | 2 |
| Greatshield | 2 |
| Claws | 2 |
| Hammer | 3 |
| Whip | 3 |
| Boomerang | 3 |
| Hunting Arbalest | 3 |
| Spear & Shield | 4 |
| Wand | 4 |
| Hunting Flute | 4 |
| Conduit | 5 |

### 5. Core Mechanic content

`coreMechanic.name` + 2–4 bullets per weapon, authored from the existing `description` text during implementation (the description already states the core mechanic in prose). Example (Hammer): name "Sunder", bullets as in the layout mockup above. These values are reviewable in the spec/plan before coding.

## Testing

**Data tests (`weapons.test.ts`, extend existing):**
- Every weapon has `complexity` in 1–5.
- Every weapon has a `coreMechanic` with a non-empty `name` and ≥1 bullet.
- Every weapon has exactly 5 techniques, and each technique's `tier` equals its position (index + 1).

**Component tests (`StepWeapon.test.tsx`, extend existing):**
- Selected panel renders the stat chips (e.g. a "STR" chip and a "1d12" chip for Hammer).
- Renders the correct number of filled stars for `complexity`.
- Renders "Core Mechanic — {name}" and the bullets.
- Tier 1 technique is in a `<details open>`; the four future-tier rows are present, labelled "Tier N — {name}", and collapsed (no `open` attribute).
- A collapsed "Full rules" `<details>` contains the weapon's `description`.

## Out of Scope

- The compact weapon cards in the grid (unchanged).
- Other wizard steps.
- Weapon tags (Heavy / Two-Handed / Thrown as discrete data) — no data model for them yet.
