# Player Character Sheet — Design

**Date:** 2026-05-26
**Status:** Draft — awaiting user review before implementation planning

---

## Summary

An interactive digital character sheet for Untamed, built as a Preact island inside the existing Astro static site. Characters persist in browser localStorage with JSON export/import for portability. A guided creation wizard handles new characters; a tabbed sheet layout with a sticky vitals dashboard handles ongoing play. A dedicated print stylesheet renders a paper-friendly version on demand. No backend, no accounts.

---

## Goals

- Let players build, save, and play multiple Untamed hunters entirely in the browser.
- Auto-calculate every derived stat (HP, Stamina, mods, AR, skill bonuses) so players only manage choices and live state.
- Surface guided prompts at level-up milestones so nothing is missed (talents, specs, stat points, free CON).
- Provide quick in-play interactivity: HP/STA trackers, conditions, dice rolling, action economy.
- Print well enough that a player who prefers paper can still use the same data.

## Non-goals (v1)

- Accounts / cloud sync / cross-device sync
- Combat log / automated damage application
- Multi-character party views / GM dashboard
- Real-time GM-to-player sharing
- Party initiative tracker
- Map/location tracking
- Technique cooldown management beyond the action economy basics

---

## Architecture

### Stack

- **Astro page** at `/character/sheet` renders the static shell (nav, container, page title).
- A **Preact island** mounts as the root of the sheet UI and owns all character state.
- **Reference data** (races, backgrounds, weapons, talents, specializations, conditions) lives in `src/data/*.ts` as typed objects, imported by both the new sheet and (during the refactor) the existing `/character/*` pages.
- **Persistence:** `localStorage` under key `untamed_roster_v1` holding `{ characters: Character[] }`. Per-character autosave on state change, debounced ~300 ms.
- **Export/import:** download a single character as JSON; import via file picker with schema validation.

### File layout

```
src/
  data/
    races.ts
    backgrounds.ts
    weapons.ts
    talents.ts
    specializations.ts
    conditions.ts
    skills.ts
    armor.ts
    tools.ts
    recipes.ts
  components/
    sheet/
      Sheet.tsx              # root Preact island
      VitalsHeader.tsx
      tabs/
        IdentityTab.tsx
        StatsSkillsTab.tsx
        CombatTab.tsx
        SpecsTalentsTab.tsx
        InventoryTab.tsx
        CraftingTab.tsx
        BioNotesTab.tsx
      Wizard.tsx              # creation flow modal
      LevelUpModal.tsx
      DiceRoller.tsx
      ActionEconomy.tsx
      Roster.tsx              # character picker
      hooks/
        useCharacter.ts
        useRoster.ts
        useDerived.ts
  pages/
    character/
      sheet.astro             # mounts <Sheet client:load />
      roster.astro            # mounts <Roster client:load />
```

### Reference data refactor

A required pre-step: the existing `src/pages/character/*.astro` files embed race/background/weapon/talent/spec content as HTML markup. The new sheet needs that data in typed form. We will:

1. Extract data from each existing page into `src/data/*.ts` modules.
2. Refactor the existing `.astro` pages to render from those modules.
3. The new sheet imports the same modules. Single source of truth.

---

## Character data model

```ts
type Character = {
  schemaVersion: 1;
  id: string;                // uuid
  createdAt: string;         // ISO
  updatedAt: string;

  // Identity
  name: string;
  pronouns?: string;
  raceId: string;
  lineageId?: string;
  backgroundIds: string[];   // supports race + background combos
  portraitUrl?: string;      // base64 data URL or external URL

  // Progression
  hunterRank: number;
  cxp: number;

  // Stats (base scores before race/background/free-CON bonuses)
  baseStats: {
    STR: number; DEX: number; CON: number;
    INT: number; INS: number; CHA: number;
  };

  // Skill proficiencies (user picks; Master auto-derived when same Trained appears twice)
  skillProficiencies: Record<SkillId, "novice" | "trained" | "master">;

  // Weapons
  weapons: {
    weaponId: string;
    huntsCompleted: number;
    isPrimary: boolean;
    notes?: string;
  }[];
  primaryWeaponId: string;

  // Build picks
  specializations: { specId: string; rankUnlocked: 1 | 2 | 3 }[];
  talentIds: string[];

  // Equipment
  armor: {
    armorId: string;
    tier: 1 | 2 | 3 | 4 | 5 | 6;
    type: "light" | "medium" | "heavy";
  } | null;
  gearSlots: (InventoryItem | null)[];   // length 6
  packSlots: (InventoryItem | null)[];   // length 10
  consumables: { itemId: string; qty: number }[];
  tools: string[];                       // tool ids the character carries

  // Crafting
  knownRecipes: string[];
  monsterParts: { partId: string; monsterId: string; qty: number }[];
  workshopId?: string;

  // Live state (persists between sessions for continuity)
  liveState: {
    currentHp: number;
    currentStamina: number;
    conditions: { conditionId: string; severity?: number; notes?: string }[];
    actionEconomy: {
      actionUsed: boolean;
      fastActionUsed: boolean;
      reactionUsed: boolean;
      breathingTurn: boolean;
    };
    exhausted: boolean;
  };

  // Bio
  bio: {
    personality?: string;
    motivations?: string;
    partyConnections?: string;
    journal: { date: string; text: string }[];
  };
};

type InventoryItem = {
  name: string;
  type: "weapon" | "armor" | "tool" | "consumable" | "monster-part" | "misc";
  qty?: number;
  description?: string;
  isStarterKit?: boolean;
};

type SkillId =
  | "grapple" | "heavy-trap-setup" | "athletics" | "brute-force"
  | "stealth" | "tool-handling" | "acrobatics" | "deftness"
  | "knowledge" | "trap-engineering" | "first-aid" | "resource-identification"
  | "sense" | "tracking" | "creature-analysis" | "survival"
  | "negotiation" | "leadership" | "animal-handling" | "deception";
```

### Derived (computed via `useDerived` hook, not stored)

| Field | Formula |
|---|---|
| `finalStats[X]` | `baseStats[X] + raceBonus + backgroundBonus + (X === "CON" ? freeConFromHR : 0)` |
| `statMods[X]` | `Math.floor(finalStats[X] / 2)` |
| `maxHp` | `finalStats.CON * 8 + hunterRank` |
| `maxStamina` | `Math.max(1, 6 + statMods.CON)` |
| `ar` | sum of armor AR + talent/spec AR bonuses |
| `initiative` | `statMods.DEX` |
| `skillBonus[skill]` | `statMods[skill.stat] + proficiencyBonus(skillProficiencies[skill])` |
| `tier` | derived from HR (HR 0-4 → T1, 5-9 → T2, 10-14 → T3, 15-19 → T4, 20-25 → T5, 26+ → T6) |
| `availableSpecSlots` | `Math.floor(hunterRank / 10)` |
| `availableTalentSlots` | `Math.floor(hunterRank / 5)` |
| `availableStatPoints` | `Math.floor(hunterRank / 4) * 2 - pointsSpent` |
| `freeConFromHR` | `Math.floor(hunterRank / 5)` (the rules grant +1 free CON every 5 HRs; the HR table in the rules document only displays the bands up through HR 20-25 but the underlying "every 5 HRs" rule has no documented cap) |

### Schema versioning

Every saved character carries `schemaVersion: 1`. On load, a `migrations` map runs the chain `oldVersion → currentVersion`. v1 ships with no migrations. Import rejects any JSON missing `schemaVersion` or claiming a version higher than the running app supports.

---

## UI layout

### Sticky vitals header (always visible)

Top bar that stays pinned while tabs scroll below it.

- **Identity strip:** name (gold), race/lineage + background (subtitle), HR + Tier badge
- **Tracker row:**
  - HP bar (current / max, red fill, click-to-edit)
  - Stamina bar (current / max, green fill)
  - AR mini-card
  - Speed mini-card
- **Status row:** conditions as removable chips with "+ add condition" pill; quick action-economy indicators (A · FA · R); Init bonus; Short Rest / Full Heal buttons

### Tabs (7)

#### 1. Identity
- Editable: name, pronouns, portrait upload (saved as base64), HR (with "Level Up" button), CXP
- Race + Lineage picker — selecting a lineage previews its bonuses and traits in a side panel
- Background picker (multi-select up to 2 to support race+background combos)
- Read-only "Bonuses applied" summary card showing the cumulative effects

#### 2. Stats & Skills
- 6 stat cards in a row: editable base score, display final score + mod
- "Spend Points" callout when `availableStatPoints > 0`
- Skills grouped by stat, matching the existing /character/stats-skills.astro structure
- Each skill row: name · proficiency tier · final bonus · 🎲 Roll button
- CON section: no skills, shows the "endurance check" callout from the rules

#### 3. Combat
- **Weapons list:** all owned weapons, primary highlighted; per-weapon: tier, prof tier, hunts logged (+/− steppers), known techniques, "Roll Attack" + "Roll Power Dice" buttons
- **Armor & AR breakdown**
- **Defense reactions:** Dodge / Block / Parry cards with quick-roll buttons and rule reminders
- **Action economy tracker:** 3 used/unused indicators, Breathing Turn toggle, "End Turn" button that handles stamina regen and Exhausted resolution

#### 4. Specs & Talents
- **Specializations:** taken specs as cards with per-rank checkboxes (Core / R2 / R3); empty slots show pickers up to `availableSpecSlots` (locked behind HR thresholds)
- **Talents:** taken talents as cards; empty slots up to `availableTalentSlots`; picker modal groups talents by category (Defensive, Offensive, Ranged, Survival, Magic, Tactical, Crafting, Mobility)

#### 5. Inventory
- Armor row at top
- 6 numbered Gear Slots; 10 numbered Pack Slots (each editable item card with name, qty, description)
- Consumables section with qty steppers (traps, oils, potions)
- Tools checkboxes against the 16 Common Tools list

#### 6. Crafting
- Known Recipes checkboxes against the full recipe list (traps, monster gear, potions, salves)
- Monster Parts inventory with add/remove and qty
- Workshop access dropdown
- Read-only "Craftable now" list derived from owned parts vs. known recipes

#### 7. Bio & Notes
- Personality, Motivations, Party Connections — free-form text
- Journal: append-only entries with date stamps and "Add Entry" button

---

## Creation wizard

Modal launched from the Roster page ("New Character") or via `/character/sheet?new=1`. Six steps with a top progress strip, Back/Next buttons, validation gating Next. Wizard state held in a `WizardDraft` object; only committed to localStorage on completion. Closing mid-flow prompts "Save draft?".

| Step | Purpose | Validation |
|---|---|---|
| 1. Identity | Name (required), pronouns, portrait | Name non-empty |
| 2. Race & Lineage | Card grid → click race → expand → pick lineage; side panel previews bonuses | Race + lineage chosen |
| 3. Background | Searchable card grid; optional second background combo | At least one background |
| 4. Stat distribution | 6 stat steppers starting at 3 each (18 total); side panel previews final stats + HP/Stamina/mods | Exactly 18 distributed |
| 5. Starting Weapon | Card grid of 12 weapons, only Tier 1 selectable; auto-grants Trained (+2) | One weapon chosen |
| 6. Review & Finish | Read-only summary + derived vitals; auto-applies starter kit & armor | "Create Character" → saves, navigates to sheet |

A "Skip wizard" link on each step lets experienced players bypass into a partially-filled sheet for manual entry.

---

## Level-up flow

Triggered by the "Level Up" button on the Identity tab (preferred path) or by manually editing the HR field. Each HR increment runs the milestone check in order:

1. **Every HR:** Max HP recalculates; toast notifies player.
2. **HR % 4 === 0** (HR 4, 8, 12, 16, 20, 24): +2 Stat Points. Modal opens with current stat array and 2 unspent points to allocate. Dismissable; pending points show as a badge on the Stats tab.
3. **HR % 5 === 0** (HR 5, 10, 15, 20, 25): +1 free CON (locked, not redistributable) **and** +1 Talent slot. Modal opens to pick a talent; dismissable, pending pick shows as badge on Specs & Talents tab.
4. **HR % 10 === 0** (HR 10, 20, 30): +1 Specialization slot. Modal offers picking a new spec OR ranking up an existing one.
5. **Tier boundary** (HR 5, 10, 15, 20, 26): toast announcing newly unlocked weapon/monster tier.

**Cascade handling:** if the user jumps multiple HRs at once (e.g., HR 3 → HR 15), the flow walks the first ~5 milestone modals in sequence; remaining milestones are summarized in a single "Catch up your character" panel that lists everything pending.

---

## Dice rolling

A `<DiceRoller>` component appears inline on every rollable element:

- Skills (Stats & Skills tab): d20 + statMod + prof
- Weapons (Combat tab): attack roll + Power Dice for damage
- Defense reactions: Dodge / Block / Parry rolls
- Initiative button (header): d20 + dexMod

Result UI: result chip beside the button shows the latest total; clicking expands a panel with the d20 result, modifier breakdown, total, and crit/fumble highlight for nat 20 / nat 1. A "Recent rolls" drawer shows the last 10 rolls in memory only (not persisted — we explicitly skipped the combat log).

No automated damage application — player applies HP changes manually via the header tracker.

---

## Action economy tracker

Three indicators in the header (mirrored on the Combat tab):

- **Action used** · **Fast Action used** · **Reaction used** (1 each per turn/round)
- **Breathing Turn** toggle — when on, locks Action + Fast Action for the turn and flags +4 stamina at end-of-turn
- **End Turn** button:
  - If Breathing Turn was on → +4 stamina (capped at max), clears toggle
  - Resets Action/Fast/Reaction flags
  - If at 0 stamina → applies Exhausted automatically
  - If Exhausted last turn AND no Action taken → clears Exhausted, +4 stamina

---

## Roster

Page at `/character/roster` (or auto-redirect from `/character/sheet` when no character is selected).

- Card grid of saved characters: portrait, name, race/background, HR
- Per-card actions: Open · Export JSON · Duplicate · Delete (confirm modal)
- Top bar: **New Character** (opens wizard) · **Import JSON** (file picker → schema validate → add to roster)
- Empty state: "No characters yet — create your first hunter"
- Linked from main nav under Characters

---

## Print stylesheet

A "Print View" button on the sheet opens a print-optimized rendering.

- White background, black text, accent borders in forest theme colors for readability without flooding ink
- All tabs expanded into one continuous document, sized for letter paper (typically 2-3 pages)
- Two-column layout where it fits (stats + skills side by side)
- Hidden in print: dice buttons, "+ add" controls, action economy widgets, level-up button, empty journal entries
- Shown in print: every filled-in choice; HP/Stamina shown as max with blank lines for hand-tracking
- Page breaks between major sections so a player can carry just the Combat page if they prefer

---

## Open items

- **Master proficiency rule:** auto-derive (race grants Trained X + background grants Trained X → display Master) but still allow user override for GM-granted edge cases. Implementation detail for `useDerived`.
- **Background combos:** which races/backgrounds permit a "double background"? Need to inventory existing /character.astro content during the data refactor. If no clean rule exists, allow up to 2 backgrounds with a warning that homebrew combos may break balance.
- **Portrait storage:** base64 data URL keeps everything self-contained but inflates JSON exports. Cap upload size (e.g., 256 KB after compression) and downscale to ~512×512 client-side before storing.

---

## Verification approach

- Manual smoke tests on a sample character through: creation → leveling HR 1 → 10 → adding talents/specs → tracking HP/STA in a fake combat round → export → import → print
- Schema validation tested with malformed imports (missing fields, wrong version, junk data) — confirm graceful errors
- Print stylesheet verified in Chrome and Safari print preview
- localStorage quota: verify with 5+ characters carrying portraits, confirm well under 5 MB default
