# Weapon Step Redesign — Design

**Date:** 2026-06-10
**Status:** Approved pending user review
**Branch:** feature/character-sheet

## Problem

The wizard's weapon selection step (`StepWeapon.tsx`) renders all 12 Tier 1 weapons in a 3-column grid, with each card dumping the weapon's full multi-sentence mechanics `description`. The result doesn't fit on the page and reads as a wall of text. The `Best:` line shows raw specialization ids — or a literal `—` when `bestWith` is undefined — which is confusing and communicates nothing about what the weapon is for.

## Goals

- Every weapon card fits compactly; all 12 visible without scrolling walls of text.
- Each weapon's combat role is communicated at a glance via badges.
- Full mechanics (description + techniques) remain available for the weapon being considered, in a detail panel.
- Remove the confusing `Best: —` line from cards.

## Design

### 1. Data changes (`src/data/weapons.ts`)

Add three required fields to the `Weapon` type:

```ts
primaryRole: string;    // e.g. 'Melee Damage'
secondaryRole: string;  // e.g. 'Bruiser'
summary: string;        // one-line hook for the wizard card
```

The existing long `description` field is unchanged and remains the source for the detail panel (and any other consumers).

Role assignments (user-defined):

| Weapon         | Primary Role       | Secondary Role      |
| -------------- | ------------------ | ------------------- |
| Greatsword     | Melee Damage       | Bruiser             |
| Claws          | Melee Damage       | Skirmisher          |
| Greatshield    | Tank               | Protector           |
| Spear & Shield | Flex               | Defender/Skirmisher |
| Bow            | Ranged Damage      | Utility             |
| Boomerang      | Ranged Damage      | Skirmisher          |
| Arbalest       | Ranged Damage      | Control             |
| Wand           | Controller         | Damage              |
| Flute          | Support Controller | Support             |
| Whip           | Controller         | Lockdown            |
| Hammer         | Breaker            | Controller          |
| Conduit        | Area Controller    | Support Controller  |

Summary lines: one short sentence per weapon capturing its core mechanic hook, e.g.:

- Greatsword — "Build Momentum with every hit to unlock crushing crits."
- Hammer — "Stack Sunder to crack armor open for the whole party."
- Conduit — "Channel an Aspect field that reshapes the battlefield."

### 2. Component (`src/components/sheet/wizard/StepWeapon.tsx`)

**Compact card** (button, selectable, same `race-pick` interaction pattern):

- Weapon name
- Role badges: primary role as the prominent badge (reuse the `.badge` style from the race step), secondary role as a muted secondary badge
- Meta line: `{primaryStat} · {damageDice} · {range}` (e.g. `STR · 1d12 · Melee 5 ft`)
- One-line `summary`
- No `Best:` line, no full description

**Detail panel** (rendered below the grid only when a weapon is selected):

- Header: weapon name + both roles (e.g. **Hammer — Breaker · Controller**)
- Meta line: stat · damage die · range · power dice
- Full `description`
- Technique list: name, stamina cost, description for each
- "Pairs well with:" specialization names, only when `bestWith` is defined (no `—` fallback)

### 3. CSS (`src/components/sheet/styles/sheet.css`)

- Keep the 3-column `.weapon-grid`; tighten card padding/typography for the compact format.
- Style the secondary (muted) role badge.
- New `.weapon-detail` panel styles consistent with existing wizard panels.

### 4. Verification

- Playwright screenshots of the weapon step (no selection, and with a weapon selected) confirming the grid fits the page and the detail panel renders correctly.
- Type-check passes (the three new required fields force all 12 weapons to be populated).

## Out of Scope

- No changes to weapon mechanics data (descriptions, techniques, stats).
- No changes to other wizard steps or any weapons reference page.
- `bestWith` data is kept as-is (still used by the detail panel's "Pairs well with" line).
