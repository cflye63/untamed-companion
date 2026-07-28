# Race & Subrace Stat Bonuses — Design

**Date:** 2026-06-09
**Status:** Approved
**Files touched:** `src/data/races.ts`, `src/components/sheet/wizard/StepRace.tsx`

## Problem

Two related issues surfaced in the character-creation wizard:

1. **Stat bonuses are invisible for most races.** `StepRace.tsx` renders the racial
   trait and proficiency traits but never displays a race's `bonuses` array.
   Dragonians only *appear* clear because their stat bonus is hand-written into the
   lineage description text (`+1 STR`, etc.). Human (`any +1`), Trolian
   (`choice STR/DEX +1`), and Thalorim (`choice CON/INS +1`) bonuses are shown
   nowhere.

2. **Subrace structure is inconsistent.** Stat bonuses come from the *lineage* for
   Dragonians but from the *race* for Trolian/Thalorim, whose lineages add no stats.
   Thalorim has no subraces at all.

## Decisions

- **Subrace drives stats** (the Dragonian model). Any race that has subraces gets its
  `+1` from the chosen subrace; its race-level `bonuses` array is emptied.
- **Human is the deliberate exception.** It has no subrace, so it keeps its race-level
  `any +1`. This is on-theme — "Adaptable" is Human's identity and the one race where
  the player picks freely.
- **Thalorim gains River / Sea subraces** that share the amphibious water core but each
  add one signature feature.
- The wizard renders stat bonuses **from data**, not from description text.

## Stat model after this change

| Race      | Stat source                 | Subraces                                             |
|-----------|-----------------------------|------------------------------------------------------|
| Human     | race-level `any +1`         | none                                                 |
| Dragonian | subrace                     | unchanged (6 elements)                               |
| Trolian   | subrace                     | Highland +1 CON · Lowland +1 DEX · Grove +1 STR      |
| Thalorim  | subrace                     | River +1 INS · Sea +1 CON                            |

## Trolian lineages — add stats

Each lineage keeps its existing feature and gains a stat matching its theme. This
broadens the old STR/DEX-only choice to all three physical stats.

| Lineage  | Existing feature                                                       | Stat   |
|----------|------------------------------------------------------------------------|--------|
| Highland | Anchored Frame: if you did not Move this turn, gain +1 AR until the start of your next turn. | +1 CON |
| Lowland  | Flowstep: when you Move at least 10 ft on your turn, ignore difficult terrain for that movement. | +1 DEX |
| Grove    | Rooted Resilience: once per round, when you fail a STR, DEX, or CON save, your next Reaction this round costs 1 less Stamina (min 0). | +1 STR |

The Trolian race-level `bonuses` (`choice STR/DEX +1`) is removed.

## Thalorim — add River / Sea subraces

Shared core stays at the race level (swim speed, Pressure Sense, Flowing Renewal, and
the Tide Breath racial trait). The Thalorim race-level `bonuses` (`choice CON/INS +1`)
is removed; the same two stats now live on the subraces.

| Subrace | Stat   | Signature feature                                                                                          |
|---------|--------|------------------------------------------------------------------------------------------------------------|
| River   | +1 INS | **Current Reader:** Gain Advantage on checks to track, navigate, or predict movement patterns in natural environments. |
| Sea     | +1 CON | **Deepborn:** Resist Cold; ignore deep-water / pressure penalties.                                          |

## Wizard UI fix (`StepRace.tsx`)

- Add a `formatBonus(StatBonus)` helper producing labels like `+1 CON`,
  `+1 STR or DEX`, `+1 to any stat`.
- Render each lineage's stat bonus as a badge on its picker button.
- In the side panel, show the race-level bonus (Human) or, once a lineage is chosen,
  the selected lineage's bonus.
- Strip the now-duplicated `+1 STR` / `+1 DEX` / etc. text from the **Dragonian**
  lineage descriptions (the badge renders it). Keep the `Resist X` and `Rider:` text.

## Out of scope

- No changes to Human, Dragonian elements/riders, or any non-stat mechanics.
- No new movement terminology (the discarded "move 1 zone" idea is dropped).
- Balance retuning of stat budgets beyond the 1:1 mapping described above.
