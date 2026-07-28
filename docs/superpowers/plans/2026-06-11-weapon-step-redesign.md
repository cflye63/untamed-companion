# Weapon Step Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the wall-of-text weapon cards in the character wizard with compact role-badged cards plus a detail panel for the selected weapon.

**Architecture:** Add `primaryRole`/`secondaryRole`/`summary` fields to the `Weapon` data type and populate all 12 weapons; rewrite `StepWeapon.tsx` to render compact cards (name, two role badges, stat meta line, one-line summary) and a detail panel (full description + techniques + spec pairings) below the grid; add supporting CSS. "Pairs well with" is derived by reverse lookup over `SPECIALIZATIONS` (each spec lists weapon ids in `bestWith`) — weapons themselves define no `bestWith` data, which is why the old UI showed `Best: —`.

**Tech Stack:** Astro + Preact, TypeScript, vitest (jsdom env, globals on) + @testing-library/preact, plain CSS in `sheet.css`.

**Spec:** `docs/superpowers/specs/2026-06-10-weapon-step-redesign-design.md`

---

### Task 1: Weapon data — roles and summaries

**Files:**
- Test: `src/data/weapons.test.ts` (create)
- Modify: `src/data/weapons.ts`

- [ ] **Step 1: Write the failing test**

Create `src/data/weapons.test.ts`:

```ts
// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { WEAPONS } from './weapons';

const EXPECTED_ROLES: Record<string, [string, string]> = {
  greatsword: ['Melee Damage', 'Bruiser'],
  claws: ['Melee Damage', 'Skirmisher'],
  greatshield: ['Tank', 'Protector'],
  'spear-shield': ['Flex', 'Defender/Skirmisher'],
  bow: ['Ranged Damage', 'Utility'],
  boomerang: ['Ranged Damage', 'Skirmisher'],
  arbalest: ['Ranged Damage', 'Control'],
  wand: ['Controller', 'Damage'],
  'hunting-flute': ['Support Controller', 'Support'],
  whip: ['Controller', 'Lockdown'],
  hammer: ['Breaker', 'Controller'],
  conduit: ['Area Controller', 'Support Controller'],
};

describe('weapon roles & summaries', () => {
  it('covers exactly the 12 known weapons', () => {
    expect(WEAPONS.map(w => w.id).sort()).toEqual(Object.keys(EXPECTED_ROLES).sort());
  });

  it('assigns the agreed primary/secondary role to every weapon', () => {
    for (const w of WEAPONS) {
      expect([w.primaryRole, w.secondaryRole], w.id).toEqual(EXPECTED_ROLES[w.id]);
    }
  });

  it('gives every weapon a short one-line summary', () => {
    for (const w of WEAPONS) {
      expect(w.summary.length, w.id).toBeGreaterThan(0);
      expect(w.summary.length, w.id).toBeLessThanOrEqual(90);
    }
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/data/weapons.test.ts`
Expected: FAIL — `primaryRole`/`secondaryRole`/`summary` are `undefined` (and TypeScript errors since the fields don't exist on `Weapon`).

- [ ] **Step 3: Add the fields to the `Weapon` type**

In `src/data/weapons.ts`, after the `powerDice: number;` line in the `Weapon` type (around line 21), add:

```ts
  primaryRole: string;    // combat role badge, e.g. 'Melee Damage'
  secondaryRole: string;  // secondary role badge, e.g. 'Bruiser'
  summary: string;        // one-line hook shown on wizard cards
```

- [ ] **Step 4: Populate all 12 weapons**

In each weapon entry, insert the three fields immediately after its `powerDice: 1,` line. Exact values per weapon:

`greatsword`:
```ts
    primaryRole: 'Melee Damage',
    secondaryRole: 'Bruiser',
    summary: 'Build Momentum with every hit to unlock crushing crits.',
```

`bow`:
```ts
    primaryRole: 'Ranged Damage',
    secondaryRole: 'Utility',
    summary: 'Hold your ground to build Focus for deadly precision shots.',
```

`greatshield`:
```ts
    primaryRole: 'Tank',
    secondaryRole: 'Protector',
    summary: 'Block to build Resolve — heal, recover, and hold the line.',
```

`wand`:
```ts
    primaryRole: 'Controller',
    secondaryRole: 'Damage',
    summary: 'Plant elemental Clusters, then detonate them in chain explosions.',
```

`hunting-flute`:
```ts
    primaryRole: 'Support Controller',
    secondaryRole: 'Support',
    summary: 'Play Ballads that empower allies and disrupt the monster.',
```

`whip`:
```ts
    primaryRole: 'Controller',
    secondaryRole: 'Lockdown',
    summary: 'Snare the monster with Restraint and lock down its movement.',
```

`spear-shield`:
```ts
    primaryRole: 'Flex',
    secondaryRole: 'Defender/Skirmisher',
    summary: 'Switch stances between sturdy defense and swift offense.',
```

`claws`:
```ts
    primaryRole: 'Melee Damage',
    secondaryRole: 'Skirmisher',
    summary: 'Chain follow-up swipes for relentless close-range pressure.',
```

`boomerang`:
```ts
    primaryRole: 'Ranged Damage',
    secondaryRole: 'Skirmisher',
    summary: 'Throw, catch, and re-throw on the move with Wayback catches.',
```

`arbalest`:
```ts
    primaryRole: 'Ranged Damage',
    secondaryRole: 'Control',
    summary: 'Brace in place to build Tension for heavy piercing shots.',
```

`hammer`:
```ts
    primaryRole: 'Breaker',
    secondaryRole: 'Controller',
    summary: 'Stack Sunder to crack armor open for the whole party.',
```

`conduit`:
```ts
    primaryRole: 'Area Controller',
    secondaryRole: 'Support Controller',
    summary: 'Channel an Aspect field that reshapes the battlefield.',
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npx vitest run src/data/weapons.test.ts`
Expected: PASS (3 tests)

- [ ] **Step 6: Run the full test suite**

Run: `npm test`
Expected: all suites PASS (data change is additive; no other suite reads these fields yet)

- [ ] **Step 7: Commit**

```bash
git add src/data/weapons.test.ts src/data/weapons.ts
git commit -m "feat(weapons): add primary/secondary roles and one-line summaries"
```

---

### Task 2: StepWeapon component — compact cards + detail panel

**Files:**
- Test: `src/components/sheet/wizard/StepWeapon.test.tsx` (create)
- Modify: `src/components/sheet/wizard/StepWeapon.tsx` (full rewrite, currently 35 lines)

Context for the implementer:
- `draft.weapons[0]?.weaponId` holds the current selection; `choose(id)` sets `weapons` + `primaryWeaponId` (keep the existing `huntsCompleted: 5, isPrimary: true` payload exactly as-is — other steps depend on it).
- `getWeapon(id)` is already exported from `src/data/weapons.ts`.
- `SPECIALIZATIONS` (from `src/data/specializations.ts`) each have `bestWith: string[]` containing weapon ids — reverse-lookup these for the "Pairs well with" line.
- Vitest is configured with `environment: 'jsdom'` and `globals: true`; `@testing-library/preact` is installed.

- [ ] **Step 1: Write the failing test**

Create `src/components/sheet/wizard/StepWeapon.test.tsx`:

```tsx
import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/preact';
import { StepWeapon } from './StepWeapon';
import type { Character } from '../../../types/character';

function draftCharacter(): Character {
  return {
    schemaVersion: 1,
    id: 'test-id',
    createdAt: '2026-06-11T00:00:00.000Z',
    updatedAt: '2026-06-11T00:00:00.000Z',
    name: 'Test Hunter',
    raceId: 'human',
    backgroundIds: [],
    hunterRank: 0,
    cxp: 0,
    baseStats: { STR: 3, DEX: 3, CON: 3, INT: 3, INS: 3, CHA: 3 },
    skillProficiencies: {},
    weapons: [],
    primaryWeaponId: '',
    specializations: [],
    talentIds: [],
    armor: null,
    gearSlots: Array(6).fill(null) as null[],
    packSlots: Array(10).fill(null) as null[],
    consumables: [],
    tools: [],
    knownRecipes: [],
    monsterParts: [],
    liveState: {
      currentHp: 0,
      currentStamina: 0,
      conditions: [],
      actionEconomy: { actionUsed: false, fastActionUsed: false, reactionUsed: false, breathingTurn: false },
      exhausted: false,
    },
    bio: { journal: [] },
  };
}

describe('StepWeapon', () => {
  it('renders compact cards: role badges and summary, no full description, no Best line', () => {
    const { getByText, queryByText } = render(
      <StepWeapon draft={draftCharacter()} setDraft={() => {}} />
    );
    getByText('Greatsword');
    getByText('Bruiser'); // secondary role badge
    getByText('Build Momentum with every hit to unlock crushing crits.');
    expect(queryByText(/Heavy two-handed weapon built for raw strength/)).toBeNull();
    expect(queryByText(/Best:/)).toBeNull();
  });

  it('shows a detail panel with description, techniques, and spec pairings when selected', () => {
    const draft = draftCharacter();
    draft.weapons = [{ weaponId: 'hammer', huntsCompleted: 5, isPrimary: true }];
    draft.primaryWeaponId = 'hammer';
    const { getByText } = render(<StepWeapon draft={draft} setDraft={() => {}} />);
    getByText('Hammer — Breaker · Controller');
    getByText('Cratering Blow');
    getByText(/Force multiplier weapon that builds Sunder/);
    getByText(/Pairs well with:/);
    getByText(/Juggernaut/); // juggernaut spec lists hammer in bestWith
  });

  it('hides the detail panel when nothing is selected', () => {
    const { queryByText } = render(
      <StepWeapon draft={draftCharacter()} setDraft={() => {}} />
    );
    expect(queryByText(/Pairs well with:/)).toBeNull();
    expect(queryByText('Cratering Blow')).toBeNull();
  });

  it('selecting a card calls setDraft with that weapon', () => {
    const calls: Character[] = [];
    const { getByText } = render(
      <StepWeapon draft={draftCharacter()} setDraft={(c) => calls.push(c)} />
    );
    fireEvent.click(getByText('Greatshield'));
    expect(calls[0]?.primaryWeaponId).toBe('greatshield');
    expect(calls[0]?.weapons).toEqual([
      { weaponId: 'greatshield', huntsCompleted: 5, isPrimary: true },
    ]);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/sheet/wizard/StepWeapon.test.tsx`
Expected: FAIL — first test fails on `getByText('Bruiser')` (badges don't exist yet) and `queryByText(/Best:/)` returning a match.

- [ ] **Step 3: Rewrite the component**

Replace the entire contents of `src/components/sheet/wizard/StepWeapon.tsx` with:

```tsx
import type { Character } from '../../../types/character';
import { WEAPONS, getWeapon } from '../../../data/weapons';
import { SPECIALIZATIONS } from '../../../data/specializations';

type Props = {
  draft: Character;
  setDraft: (c: Character) => void;
};

export function StepWeapon({ draft, setDraft }: Props) {
  const choose = (id: string) => setDraft({
    ...draft,
    weapons: [{ weaponId: id, huntsCompleted: 5, isPrimary: true }],
    primaryWeaponId: id,
  });
  const selectedId = draft.weapons[0]?.weaponId;
  const selected = selectedId ? getWeapon(selectedId) : null;
  const pairings = selected
    ? SPECIALIZATIONS.filter(s => s.bestWith.includes(selected.id)).map(s => s.name)
    : [];
  return (
    <div>
      <h3>Step 5 — Starting Weapon</h3>
      <p class="muted">Choose one Tier 1 weapon — you start Trained (+2) with it.</p>
      <div class="weapon-grid">
        {WEAPONS.map(w => (
          <button key={w.id}
                  class={`race-pick ${selectedId === w.id ? 'selected' : ''} ${w.tier > 1 ? 'locked' : ''}`}
                  disabled={w.tier > 1}
                  onClick={() => choose(w.id)}>
            <strong>{w.name}</strong>
            <span class="weapon-roles">
              <span class="badge">{w.primaryRole}</span>
              <span class="badge badge-muted">{w.secondaryRole}</span>
            </span>
            <p class="weapon-meta">{w.primaryStat} · {w.damageDice} · {w.range}</p>
            <p>{w.summary}</p>
          </button>
        ))}
      </div>
      {selected && (
        <div class="weapon-detail">
          <h4>{selected.name} — {selected.primaryRole} · {selected.secondaryRole}</h4>
          <p class="weapon-meta">
            {selected.primaryStat} · {selected.damageDice} · {selected.range} · {selected.powerDice} Power {selected.powerDice === 1 ? 'Die' : 'Dice'}
          </p>
          <p>{selected.description}</p>
          {pairings.length > 0 && (
            <p class="weapon-pairs"><strong>Pairs well with:</strong> {pairings.join(', ')}</p>
          )}
          <ul class="weapon-techniques">
            {selected.techniques.map(t => (
              <li key={t.name}>
                <strong>{t.name}</strong> <span class="muted">({t.staminaCost} STA)</span>
                <p>{t.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/sheet/wizard/StepWeapon.test.tsx`
Expected: PASS (4 tests)

- [ ] **Step 5: Run the full test suite**

Run: `npm test`
Expected: all suites PASS

- [ ] **Step 6: Commit**

```bash
git add src/components/sheet/wizard/StepWeapon.test.tsx src/components/sheet/wizard/StepWeapon.tsx
git commit -m "feat(wizard): compact weapon cards with role badges + detail panel"
```

---

### Task 3: CSS for badges, meta line, and detail panel

**Files:**
- Modify: `src/components/sheet/styles/sheet.css` (insert after the `.weapon-grid` rule, currently line 378)

- [ ] **Step 1: Add the styles**

Immediately after the line:

```css
.weapon-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; margin-top: 12px; }
```

insert:

```css
.weapon-grid .race-pick { padding: 12px 14px; }
.weapon-grid .race-pick strong { margin-bottom: 4px; font-size: 0.95rem; }
.weapon-grid .race-pick p { font-size: 0.8rem; }
.weapon-roles { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 6px; }
.badge-muted { background: var(--earth-brown); color: var(--cream); }
.weapon-meta { font-size: 0.75rem; color: var(--text-light); opacity: 0.7; margin-bottom: 6px; }
.weapon-detail {
  margin-top: 18px;
  background: var(--forest-dark);
  border: 1px solid var(--moss-green);
  border-radius: 8px;
  padding: 16px;
}
.weapon-detail h4 { color: var(--amber); margin-bottom: 6px; }
.weapon-detail > p { font-size: 0.9rem; line-height: 1.5; margin-bottom: 8px; }
.weapon-pairs { color: var(--cream); }
.weapon-techniques { list-style: none; padding: 0; margin: 12px 0 0; display: flex; flex-direction: column; gap: 8px; }
.weapon-techniques li {
  background: rgba(0, 0, 0, 0.18);
  border-left: 2px solid var(--moss-green);
  border-radius: 3px;
  padding: 8px 10px;
  font-size: 0.85rem;
}
.weapon-techniques li strong { color: var(--amber); }
.weapon-techniques li p { margin-top: 4px; line-height: 1.4; opacity: 0.9; }
```

All CSS variables used (`--earth-brown`, `--cream`, `--amber`, `--moss-green`, `--forest-dark`, `--text-light`) already exist in this stylesheet.

- [ ] **Step 2: Verify the build compiles**

Run: `npm run build`
Expected: build succeeds with no errors

- [ ] **Step 3: Commit**

```bash
git add src/components/sheet/styles/sheet.css
git commit -m "style(wizard): compact weapon card and detail panel styles"
```

---

### Task 4: Full verification

- [ ] **Step 1: Run the full test suite**

Run: `npm test`
Expected: all suites PASS

- [ ] **Step 2: Type-check**

Run: `npx astro check`
Expected: 0 errors (warnings/hints acceptable if pre-existing)

- [ ] **Step 3: Visual verification (main session)**

This step is performed in the main session, not by a subagent: start `npm run dev`, navigate to the wizard's weapon step with Playwright MCP, and screenshot (a) the grid with no selection and (b) the grid with Hammer selected showing the detail panel. Confirm the 12 cards fit the page without walls of text and the detail panel renders description + 5 techniques + "Pairs well with: Juggernaut".
