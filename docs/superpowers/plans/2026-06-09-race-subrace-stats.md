# Race & Subrace Stat Bonuses Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make subrace/lineage the source of each race's stat bonus (Human excepted), add Thalorim River/Sea subraces, and render stat bonuses from data in the creation wizard.

**Architecture:** Stat bonuses live in `src/data/races.ts` as `StatBonus` objects on either the race (`bonuses`) or a lineage (`Lineage.bonuses`). `computeFinalStats` in `src/lib/derived.ts` already iterates both race-level and lineage-level bonuses generically, so the behavior change is **data-only** for stats. The wizard (`StepRace.tsx`) gains a pure `formatBonus` helper (exported from `races.ts`) and renders bonus badges instead of relying on hand-written description text.

**Tech Stack:** Astro + Preact, TypeScript, Vitest (`npm test`), Testing Library available but not needed here.

**Spec:** `docs/superpowers/specs/2026-06-09-race-subrace-stats-design.md`

---

### Task 1: Add `formatBonus` helper to races.ts

A pure function that turns a `StatBonus` into a display label. Defined first because the wizard (Task 5) imports it.

**Files:**
- Modify: `src/data/races.ts` (append after `getRace`)
- Test: `src/data/races.test.ts` (create)

- [ ] **Step 1: Write the failing test**

Create `src/data/races.test.ts`:

```ts
import { describe, it, expect } from 'vitest';
import { formatBonus } from './races';

describe('formatBonus', () => {
  it('formats a fixed bonus', () => {
    expect(formatBonus({ kind: 'fixed', stat: 'CON', amount: 1 })).toBe('+1 CON');
  });
  it('formats a choice bonus as "or"', () => {
    expect(formatBonus({ kind: 'choice', stats: ['STR', 'DEX'], amount: 1 })).toBe('+1 STR or DEX');
  });
  it('formats an "any" bonus', () => {
    expect(formatBonus({ kind: 'any', amount: 1 })).toBe('+1 to any stat');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- src/data/races.test.ts`
Expected: FAIL — `formatBonus is not a function` / no export named `formatBonus`.

- [ ] **Step 3: Add the implementation**

Append to `src/data/races.ts` (after the `getRace` function, end of file):

```ts
export function formatBonus(b: StatBonus): string {
  switch (b.kind) {
    case 'fixed':
      return `+${b.amount} ${b.stat}`;
    case 'choice':
      return `+${b.amount} ${b.stats.join(' or ')}`;
    case 'any':
      return `+${b.amount} to any stat`;
  }
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- src/data/races.test.ts`
Expected: PASS (3 passing).

- [ ] **Step 5: Commit**

```bash
git add src/data/races.ts src/data/races.test.ts
git commit -m "feat(races): add formatBonus helper for stat-bonus labels"
```

---

### Task 2: Move Trolian stats from race to lineages

Empty the Trolian race-level `bonuses` and give each of the three lineages its stat (Highland +1 CON, Lowland +1 DEX, Grove +1 STR). `computeFinalStats` already applies lineage bonuses, so no logic change is needed.

**Files:**
- Modify: `src/data/races.ts:80-95` (Trolian `bonuses` + `lineages`)
- Test: `src/lib/derived.test.ts` (add cases inside the existing `describe('computeFinalStats')` block, after the last `it` at ~line 159)

- [ ] **Step 1: Write the failing tests**

Add these `it` blocks inside the existing `describe('computeFinalStats', () => { ... })` in `src/lib/derived.test.ts`:

```ts
  it('applies Trolian lineage stats (Highland +1 CON)', () => {
    const result = computeFinalStats({
      baseStats: { STR: 3, DEX: 3, CON: 3, INT: 3, INS: 3, CHA: 3 },
      raceId: 'trolian',
      lineageId: 'highland',
      backgroundIds: [],
      hunterRank: 0,
    });
    expect(result.CON).toBe(4);
  });
  it('applies Trolian lineage stats (Lowland +1 DEX, Grove +1 STR)', () => {
    const lowland = computeFinalStats({
      baseStats: { STR: 3, DEX: 3, CON: 3, INT: 3, INS: 3, CHA: 3 },
      raceId: 'trolian', lineageId: 'lowland', backgroundIds: [], hunterRank: 0,
    });
    expect(lowland.DEX).toBe(4);
    const grove = computeFinalStats({
      baseStats: { STR: 3, DEX: 3, CON: 3, INT: 3, INS: 3, CHA: 3 },
      raceId: 'trolian', lineageId: 'grove', backgroundIds: [], hunterRank: 0,
    });
    expect(grove.STR).toBe(4);
  });
  it('gives Trolian no stat bonus without a lineage', () => {
    const result = computeFinalStats({
      baseStats: { STR: 3, DEX: 3, CON: 3, INT: 3, INS: 3, CHA: 3 },
      raceId: 'trolian', backgroundIds: [], hunterRank: 0,
    });
    expect(result).toEqual({ STR: 3, DEX: 3, CON: 3, INT: 3, INS: 3, CHA: 3 });
  });
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm test -- src/lib/derived.test.ts`
Expected: FAIL — Highland/Lowland/Grove give no bonus yet (e.g. `result.CON` is `3`, not `4`), and the no-lineage case currently gets `+1` from the race-level choice bonus.

- [ ] **Step 3: Edit the Trolian race data**

In `src/data/races.ts`, replace the Trolian `bonuses` array (currently lines ~80-82):

```ts
    bonuses: [
      { kind: 'choice', stats: ['STR', 'DEX'], amount: 1 },
    ],
```

with:

```ts
    bonuses: [],
```

Then replace the Trolian `lineages` array (currently lines ~91-95):

```ts
    lineages: [
      { id: 'highland', name: 'Highland', description: 'Anchored Frame: if you did not Move this turn, gain +1 AR until the start of your next turn.' },
      { id: 'lowland', name: 'Lowland', description: 'Flowstep: when you Move at least 10 ft on your turn, ignore difficult terrain for that movement.' },
      { id: 'grove', name: 'Grove', description: 'Rooted Resilience: once per round, when you fail a STR, DEX, or CON save, your next Reaction this round costs 1 less Stamina (min 0).' },
    ],
```

with:

```ts
    lineages: [
      { id: 'highland', name: 'Highland', description: 'Anchored Frame: if you did not Move this turn, gain +1 AR until the start of your next turn.', bonuses: [{ kind: 'fixed', stat: 'CON', amount: 1 }] },
      { id: 'lowland', name: 'Lowland', description: 'Flowstep: when you Move at least 10 ft on your turn, ignore difficult terrain for that movement.', bonuses: [{ kind: 'fixed', stat: 'DEX', amount: 1 }] },
      { id: 'grove', name: 'Grove', description: 'Rooted Resilience: once per round, when you fail a STR, DEX, or CON save, your next Reaction this round costs 1 less Stamina (min 0).', bonuses: [{ kind: 'fixed', stat: 'STR', amount: 1 }] },
    ],
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npm test -- src/lib/derived.test.ts`
Expected: PASS (all `computeFinalStats` cases green).

- [ ] **Step 5: Commit**

```bash
git add src/data/races.ts src/lib/derived.test.ts
git commit -m "feat(races): Trolian lineages drive stats (Highland CON / Lowland DEX / Grove STR)"
```

---

### Task 3: Add Thalorim River/Sea subraces

Empty the Thalorim race-level `bonuses` and add two lineages: River (+1 INS, Current Reader) and Sea (+1 CON, Deepborn). The shared water core (swim, Pressure Sense, Flowing Renewal, Tide Breath) stays untouched.

**Files:**
- Modify: `src/data/races.ts:101-116` (Thalorim `bonuses` + `lineages`)
- Test: `src/lib/derived.test.ts` (add cases inside the same `describe('computeFinalStats')` block)

- [ ] **Step 1: Write the failing tests**

Add inside `describe('computeFinalStats', ...)` in `src/lib/derived.test.ts`:

```ts
  it('applies Thalorim River lineage (+1 INS)', () => {
    const result = computeFinalStats({
      baseStats: { STR: 3, DEX: 3, CON: 3, INT: 3, INS: 3, CHA: 3 },
      raceId: 'thalorim', lineageId: 'river', backgroundIds: [], hunterRank: 0,
    });
    expect(result.INS).toBe(4);
  });
  it('applies Thalorim Sea lineage (+1 CON)', () => {
    const result = computeFinalStats({
      baseStats: { STR: 3, DEX: 3, CON: 3, INT: 3, INS: 3, CHA: 3 },
      raceId: 'thalorim', lineageId: 'sea', backgroundIds: [], hunterRank: 0,
    });
    expect(result.CON).toBe(4);
  });
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm test -- src/lib/derived.test.ts`
Expected: FAIL — `river` / `sea` lineages do not exist yet, so no bonus is applied (`INS`/`CON` stay `3`).

- [ ] **Step 3: Edit the Thalorim race data**

In `src/data/races.ts`, replace the Thalorim `bonuses` array (currently lines ~101-103):

```ts
    bonuses: [
      { kind: 'choice', stats: ['CON', 'INS'], amount: 1 },
    ],
```

with:

```ts
    bonuses: [],
```

Then replace the Thalorim `lineages` array (currently `lineages: [],` at ~line 116):

```ts
    lineages: [],
```

with:

```ts
    lineages: [
      { id: 'river', name: 'River', description: 'Current Reader: Gain Advantage on checks to track, navigate, or predict movement patterns in natural environments.', bonuses: [{ kind: 'fixed', stat: 'INS', amount: 1 }] },
      { id: 'sea', name: 'Sea', description: 'Deepborn: Resist Cold; ignore deep-water and pressure penalties.', bonuses: [{ kind: 'fixed', stat: 'CON', amount: 1 }] },
    ],
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npm test -- src/lib/derived.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/data/races.ts src/lib/derived.test.ts
git commit -m "feat(races): add Thalorim River (INS) / Sea (CON) subraces"
```

---

### Task 4: Strip duplicated stat text from Dragonian lineage descriptions

The wizard will render the stat as a badge (Task 5), so the hand-written `+1 STR · ` fragments in Dragonian descriptions become duplicate/drift-prone. Remove only the stat fragment; keep the scale color, `Resist X`, and `Rider:` text. The `bonuses` on each Dragonian lineage are unchanged.

**Files:**
- Modify: `src/data/races.ts:68-73` (Dragonian `lineages` descriptions)

- [ ] **Step 1: Edit the six Dragonian descriptions**

In `src/data/races.ts`, in each Dragonian lineage `description`, delete the `+1 XXX · ` fragment that sits between the scale color and `Resist`:

| id    | Old fragment to delete | Resulting description start |
|-------|------------------------|-----------------------------|
| fire  | `Red scales · +1 STR · Resist Fire`        | `Red scales · Resist Fire` |
| storm | `Violet scales · +1 DEX · Resist Lightning`| `Violet scales · Resist Lightning` |
| earth | `Green-brown scales · +1 CON · Resist Poison` | `Green-brown scales · Resist Poison` |
| ice   | `White scales · +1 INT · Resist Cold`      | `White scales · Resist Cold` |
| air   | `Grey scales · +1 INS · Resist Sonic`      | `Grey scales · Resist Sonic` |
| water | `Blue-seafoam scales · +1 CHA · Resist Cold` | `Blue-seafoam scales · Resist Cold` |

The full lines should become:

```ts
      { id: 'fire', name: 'Fire', description: 'Red scales · Resist Fire. Rider: target gains Burned (1 stack).', bonuses: [{ kind: 'fixed', stat: 'STR', amount: 1 }] },
      { id: 'storm', name: 'Storm', description: 'Violet scales · Resist Lightning. Rider: target cannot take Reactions until the start of its next turn.', bonuses: [{ kind: 'fixed', stat: 'DEX', amount: 1 }] },
      { id: 'earth', name: 'Earth', description: 'Green-brown scales · Resist Poison. Rider: target cannot be pushed or repositioned until the end of its next turn.', bonuses: [{ kind: 'fixed', stat: 'CON', amount: 1 }] },
      { id: 'ice', name: 'Ice', description: 'White scales · Resist Cold. Rider: target gains Chilled.', bonuses: [{ kind: 'fixed', stat: 'INT', amount: 1 }] },
      { id: 'air', name: 'Air', description: 'Grey scales · Resist Sonic. Rider: move 5 ft after the attack without provoking opportunity attacks.', bonuses: [{ kind: 'fixed', stat: 'INS', amount: 1 }] },
      { id: 'water', name: 'Water', description: 'Blue-seafoam scales · Resist Cold. Rider: you or an ally within 5 ft regain 1 Stamina.', bonuses: [{ kind: 'fixed', stat: 'CHA', amount: 1 }] },
```

- [ ] **Step 2: Run the full suite to confirm nothing regressed**

Run: `npm test`
Expected: PASS (the Dragonian `fire → +1 STR` test still passes because `bonuses` is unchanged).

- [ ] **Step 3: Commit**

```bash
git add src/data/races.ts
git commit -m "refactor(races): drop stat text from Dragonian descriptions (badge renders it)"
```

---

### Task 5: Render stat bonuses in the wizard

Show each lineage's stat as a `.badge` on its picker button, and show the active stat bonus (race-level for Human, or the selected lineage's) in the side panel.

**Files:**
- Modify: `src/components/sheet/wizard/StepRace.tsx`

- [ ] **Step 1: Import `formatBonus`**

In `src/components/sheet/wizard/StepRace.tsx`, change the data import (line 2):

```tsx
import { RACES, getRace } from '../../../data/races';
```

to:

```tsx
import { RACES, getRace, formatBonus } from '../../../data/races';
```

- [ ] **Step 2: Compute the active bonus list**

In `StepRace`, just after the existing `const race = ...` line (line 10), add:

```tsx
  const selectedLineage = race?.lineages.find(l => l.id === draft.lineageId);
  const activeBonuses = race ? [...race.bonuses, ...(selectedLineage?.bonuses ?? [])] : [];
```

- [ ] **Step 3: Add a badge to each lineage button**

In the lineage picker map (the `<button>` whose content is `<strong>{l.name}</strong><p>{l.description}</p>`), change the `<strong>` line to append a badge when the lineage carries a bonus:

```tsx
                <strong>{l.name}{l.bonuses && l.bonuses.length > 0 && <span class="badge" style="margin-left:8px">{formatBonus(l.bonuses[0])}</span>}</strong>
```

- [ ] **Step 4: Show the active bonus in the side panel**

In the `<aside class="wizard-side">`, immediately after the `<p class="side-trait">…racialTrait…</p>` line, add:

```tsx
          {activeBonuses.length > 0 && (
            <p class="side-trait"><strong>Stat Bonus:</strong> {activeBonuses.map(formatBonus).join(', ')}</p>
          )}
```

- [ ] **Step 5: Verify the UI manually**

Run: `npm run dev`
Then in the creation wizard, Step 2 — confirm:
- **Human:** side panel shows `Stat Bonus: +1 to any stat`; no lineage picker.
- **Dragonian:** each element button shows a `+1 STR` (etc.) badge; selecting one shows it in the side panel; descriptions no longer contain `+1 STR`.
- **Trolian:** Highland/Lowland/Grove show `+1 CON` / `+1 DEX` / `+1 STR` badges.
- **Thalorim:** River/Sea picker now appears with `+1 INS` / `+1 CON` badges.

- [ ] **Step 6: Build check**

Run: `npm run build`
Expected: build succeeds (TypeScript/astro check passes).

- [ ] **Step 7: Commit**

```bash
git add src/components/sheet/wizard/StepRace.tsx
git commit -m "feat(wizard): render race/lineage stat bonuses from data"
```

---

## Self-Review

**Spec coverage:**
- "Subrace drives stats; race `bonuses` emptied" → Tasks 2 (Trolian) & 3 (Thalorim).
- "Human is the exception (keeps `any +1`)" → untouched in data; verified in Task 5 Step 5.
- "Dragonian unchanged (6 elements)" → `bonuses` untouched; only description text stripped (Task 4).
- "Trolian Highland CON / Lowland DEX / Grove STR" → Task 2.
- "Thalorim River +INS (Current Reader) / Sea +CON (Deepborn)" → Task 3.
- "Wizard renders bonuses from data, badges, strip Dragonian text" → Tasks 1, 4, 5.

**Placeholder scan:** none — every step has concrete code/commands.

**Type consistency:** `formatBonus(b: StatBonus)` defined in Task 1 and imported in Task 5; `StatBonus`/`Lineage.bonuses` already exist in `races.ts`. Lineage bonus objects use `{ kind: 'fixed', stat, amount }`, matching the `StatBonus` union and what `computeFinalStats` consumes.

**Note for executor:** `computeFinalStats` needs no edits — it already loops `lineage.bonuses` (`derived.ts:80-83`). If a test for it fails after Task 2/3, the cause is data, not logic.
