# Weapon Detail Panel Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the dense weapon detail panel in the character wizard with a progressive-disclosure layout — stat chips, a star complexity rating, an unlabeled pitch line, a structured Core Mechanic callout, and tier-grouped collapsible techniques.

**Architecture:** Add `tier` to the `Technique` type and `complexity` + `coreMechanic` to the `Weapon` type, populate all 12 weapons, then rewrite only the `.weapon-detail` block of `StepWeapon.tsx` using native `<details>/<summary>` for collapsibles (no component state). CSS adds chip/star/callout/tier styles. The compact cards in the grid are unchanged.

**Tech Stack:** Astro + Preact, TypeScript, vitest (happy-dom env, globals on) + @testing-library/preact, plain CSS in `sheet.css`.

**Spec:** `docs/superpowers/specs/2026-06-15-weapon-detail-panel-design.md`

---

### Task 1: Weapon data — tier, complexity, core mechanic

**Files:**
- Modify: `src/data/weapons.ts`
- Test: `src/data/weapons.test.ts` (extend)

Context: `src/data/weapons.ts` has a `Technique` type, a `Weapon` type, and a `WEAPONS` array of 12 weapons each with exactly 5 techniques. The `Technique` type currently ends with an unused `unlockedAt?: 'novice' | 'trained' | 'master';` field.

- [ ] **Step 1: Write the failing tests**

Append to `src/data/weapons.test.ts` (inside the file, after the existing `describe` block):

```ts
describe('weapon tiers, complexity & core mechanic', () => {
  it('gives every weapon exactly 5 techniques tiered 1..5 by position', () => {
    for (const w of WEAPONS) {
      expect(w.techniques.length, w.id).toBe(5);
      w.techniques.forEach((t, i) => {
        expect(t.tier, `${w.id} technique ${i}`).toBe(i + 1);
      });
    }
  });

  it('assigns every weapon a complexity in 1..5', () => {
    for (const w of WEAPONS) {
      expect(Number.isInteger(w.complexity), w.id).toBe(true);
      expect(w.complexity, w.id).toBeGreaterThanOrEqual(1);
      expect(w.complexity, w.id).toBeLessThanOrEqual(5);
    }
  });

  it('gives every weapon a core mechanic with a name and at least one bullet', () => {
    for (const w of WEAPONS) {
      expect(w.coreMechanic.name.length, w.id).toBeGreaterThan(0);
      expect(w.coreMechanic.bullets.length, w.id).toBeGreaterThanOrEqual(1);
      for (const b of w.coreMechanic.bullets) {
        expect(b.length, w.id).toBeGreaterThan(0);
      }
    }
  });

  it('assigns the agreed complexity per weapon', () => {
    const EXPECTED: Record<string, number> = {
      greatsword: 1, bow: 2, greatshield: 2, claws: 2,
      hammer: 3, whip: 3, boomerang: 3, arbalest: 3,
      'spear-shield': 4, wand: 4, 'hunting-flute': 4, conduit: 5,
    };
    for (const w of WEAPONS) {
      expect(w.complexity, w.id).toBe(EXPECTED[w.id]);
    }
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run src/data/weapons.test.ts`
Expected: FAIL — `tier`, `complexity`, `coreMechanic` don't exist (TypeScript + runtime errors).

- [ ] **Step 3: Update the types**

In `src/data/weapons.ts`, change the `Technique` type — add `tier`, remove `unlockedAt`:

```ts
export type Technique = {
  name: string;
  staminaCost: number;
  description: string;
  tier: 1 | 2 | 3 | 4 | 5;
};
```

In the `Weapon` type, after `summary: string;` add:

```ts
  complexity: 1 | 2 | 3 | 4 | 5;   // learning-curve rating (stars)
  coreMechanic: { name: string; bullets: string[] };
```

- [ ] **Step 4: Add `tier` to every technique**

For each weapon, add `tier: N` to each technique object by its position in the array: the 1st technique gets `tier: 1`, the 2nd `tier: 2`, … the 5th `tier: 5`. Add it adjacent to `staminaCost` on each technique. Do this for all 12 weapons (60 techniques total). Example (greatsword):

```ts
    techniques: [
      { name: 'Cleave', staminaCost: 2, tier: 1, description: '...' },
      { name: 'Blade Wave', staminaCost: 2, tier: 2, description: '...' },
      { name: "Titan's Guard", staminaCost: 2, tier: 3, description: '...' },
      { name: 'Tremor Strike', staminaCost: 3, tier: 4, description: '...' },
      { name: "Executioner's Strike", staminaCost: 3, tier: 5, description: '...' },
    ],
```

(Keep each technique's existing `name`, `staminaCost`, and `description` exactly as-is — only add `tier`.)

- [ ] **Step 5: Add `complexity` and `coreMechanic` to every weapon**

Insert these two fields immediately after each weapon's `summary` line. Exact values:

**greatsword** (complexity 1):
```ts
    complexity: 1,
    coreMechanic: {
      name: 'Momentum',
      bullets: [
        'Land hits to build Momentum, up to 3; a miss, dodge, or switching targets resets it.',
        'At Momentum 3: +3 damage, crits on 18–20, and +1 power die on every attack.',
      ],
    },
```

**bow** (complexity 2):
```ts
    complexity: 2,
    coreMechanic: {
      name: "Predator's Focus",
      bullets: [
        'Stay still to build Focus, up to 3; moving more than 5 ft, dashing, or being knocked down clears it.',
        'Each Focus adds +1 damage to your next shot, spent when it hits.',
      ],
    },
```

**greatshield** (complexity 2):
```ts
    complexity: 2,
    coreMechanic: {
      name: 'Resolve',
      bullets: [
        'Build Resolve, up to 3, by Blocking or resisting knockdown and stun.',
        'Spend it once per turn to heal, recover Stamina, or reroll a failed save.',
        'Grants an extra Reaction each round, usable only to Block.',
      ],
    },
```

**wand** (complexity 4):
```ts
    complexity: 4,
    coreMechanic: {
      name: 'Magical Clusters',
      bullets: [
        'Place elemental clusters on enemies or terrain, up to 3 active at once.',
        'Detonate them for area damage; extra clusters on one target add damage dice.',
        'The element you choose sets a lingering hex effect.',
      ],
    },
```

**hunting-flute** (complexity 4):
```ts
    complexity: 4,
    coreMechanic: {
      name: 'Ballads',
      bullets: [
        'Play a Ballad (Fast Action) that stays active while you concentrate and pay upkeep.',
        'One Ballad at a time; taking damage can break your concentration.',
        'Empowers allies or disrupts the monster across a 30-ft aura.',
      ],
    },
```

**whip** (complexity 3):
```ts
    complexity: 3,
    coreMechanic: {
      name: 'Restraint',
      bullets: [
        'After a hit, spend a Fast Action to attempt Restraint (the target rolls a DEX save).',
        "A restrained target has Speed 0 and can't Dodge; hold it for 1 Stamina per turn.",
        'If the target resists the attempt, you take a little backlash damage.',
      ],
    },
```

**spear-shield** (complexity 4):
```ts
    complexity: 4,
    coreMechanic: {
      name: 'Stance Switch',
      bullets: [
        'Sentinel Stance: +1 AR and resilience to forced movement, but half Speed.',
        'Assault Stance: +5 ft Speed and a bonus Fast-Action spear jab each turn.',
        'Spear attacks use DEX; shield saves use CON.',
      ],
    },
```

**claws** (complexity 2):
```ts
    complexity: 2,
    coreMechanic: {
      name: 'Predatory Chain',
      bullets: [
        'Land a hit, then make a follow-up swipe; if it lands, chain into one more.',
        'Up to 2 follow-ups per chain; a miss, Dodge, or Parry ends it.',
      ],
    },
```

**boomerang** (complexity 3):
```ts
    complexity: 3,
    coreMechanic: {
      name: 'Wayback Catch',
      bullets: [
        'After a hit, pass a check (DC 13) to catch the returning boomerang and re-throw it.',
        'Move 10+ ft since your last throw and the return throw gains advantage and +1 die.',
        'Up to two catches per turn.',
      ],
    },
```

**arbalest** (complexity 3):
```ts
    complexity: 3,
    coreMechanic: {
      name: 'Tension',
      bullets: [
        'Brace or Load to build Tension; firing spends it all.',
        'Tension bonuses only apply while you stay Braced.',
        'Moving, or being knocked down or stunned, resets Tension to zero.',
      ],
    },
```

**hammer** (complexity 3):
```ts
    complexity: 3,
    coreMechanic: {
      name: 'Sunder',
      bullets: [
        'Each hit adds +1 Sunder to a target, up to 3.',
        'Sunder adds +X to your attack rolls against that target.',
        'At Sunder 3, its saves against your Hammer riders are at disadvantage.',
      ],
    },
```

**conduit** (complexity 5):
```ts
    complexity: 5,
    coreMechanic: {
      name: 'Channeling',
      bullets: [
        'Channel (Action) to project a 15-ft Aspect Field, choosing its element.',
        'While Channeling you can barely move and pay 1 Stamina per turn.',
        'Project the Field up to 40 ft away to control distant ground.',
      ],
    },
```

- [ ] **Step 6: Run tests to verify they pass**

Run: `npx vitest run src/data/weapons.test.ts`
Expected: PASS (all existing tests + 4 new tests).

- [ ] **Step 7: Run the full suite**

Run: `npm test`
Expected: all suites PASS. (If `getWeapon`/`CombatTab`/`StepReview` reference `unlockedAt` anywhere, the build/tests would surface it — they don't; `unlockedAt` was unused.)

- [ ] **Step 8: Commit**

```bash
git add src/data/weapons.ts src/data/weapons.test.ts
git commit -m "feat(weapons): add technique tier, complexity, and structured coreMechanic"
```

---

### Task 2: Detail panel rewrite

**Files:**
- Modify: `src/components/sheet/wizard/StepWeapon.tsx`
- Test: `src/components/sheet/wizard/StepWeapon.test.tsx` (extend + update one existing test)

Context: `StepWeapon.tsx` renders the compact card grid (unchanged) and, when a weapon is selected, a `.weapon-detail` block. Only the `.weapon-detail` block changes. The current block looks like:

```tsx
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
```

- [ ] **Step 1: Update the existing hammer-selected test and add new ones**

In `src/components/sheet/wizard/StepWeapon.test.tsx`, find the existing test titled `'shows a detail panel with description, techniques, and spec pairings when selected'` and REPLACE it entirely with the following block of tests (the old header string `'Hammer — Breaker · Controller'` no longer exists; the panel now uses a two-line header):

```tsx
  it('shows the redesigned detail panel header, chips, complexity, pitch, and pairings', () => {
    const draft = draftCharacter();
    draft.weapons = [{ weaponId: 'hammer', huntsCompleted: 5, isPrimary: true }];
    draft.primaryWeaponId = 'hammer';
    const { getByRole, getByText, container } = render(
      <StepWeapon draft={draft} setDraft={() => {}} />
    );
    // two-line header
    getByRole('heading', { name: 'Hammer', level: 4 });
    getByText('Breaker • Controller');
    // stat chips (exact-text spans, distinct from the card meta paragraph)
    getByText('STR');
    getByText('1d12');
    getByText('+1 Power Die');
    // complexity: hammer is 3 → 3 filled stars
    expect(container.querySelectorAll('.star--filled').length).toBe(3);
    // unlabeled pitch (the summary) — scope to .weapon-pitch since the card repeats the same text
    expect(container.querySelector('.weapon-pitch')?.textContent).toBe(
      'Stack Sunder to crack armor open for the whole party.'
    );
    // pairings (panel-only)
    getByText(/Pairs well with:/);
    getByText(/Juggernaut/);
  });

  it('renders the core mechanic callout with name and bullets', () => {
    const draft = draftCharacter();
    draft.weapons = [{ weaponId: 'hammer', huntsCompleted: 5, isPrimary: true }];
    draft.primaryWeaponId = 'hammer';
    const { getByText } = render(<StepWeapon draft={draft} setDraft={() => {}} />);
    getByText('Core Mechanic — Sunder');
    getByText('Each hit adds +1 Sunder to a target, up to 3.');
  });

  it('shows the Tier 1 technique open and Tiers 2–5 as collapsed future unlocks', () => {
    const draft = draftCharacter();
    draft.weapons = [{ weaponId: 'hammer', huntsCompleted: 5, isPrimary: true }];
    draft.primaryWeaponId = 'hammer';
    const { getByText, container } = render(<StepWeapon draft={draft} setDraft={() => {}} />);
    // Tier 1 technique lives in an open <details>
    const openDetails = container.querySelector('details.technique-row[open]');
    expect(openDetails).not.toBeNull();
    expect(openDetails?.textContent).toContain('Cratering Blow');
    // future tiers present, labelled, and collapsed (no open attribute)
    const future2 = getByText('Tier 2 — Armor Breaker').closest('details');
    expect(future2).not.toBeNull();
    expect(future2?.hasAttribute('open')).toBe(false);
    getByText('Tier 3 — Aftershock');
    getByText('Tier 4 — Seismic Slam');
    getByText('Tier 5 — Shatterfall');
  });

  it('keeps the full rules prose in a collapsed details section', () => {
    const draft = draftCharacter();
    draft.weapons = [{ weaponId: 'hammer', huntsCompleted: 5, isPrimary: true }];
    draft.primaryWeaponId = 'hammer';
    const { getByText } = render(<StepWeapon draft={draft} setDraft={() => {}} />);
    const fullRules = getByText('Full rules').closest('details');
    expect(fullRules).not.toBeNull();
    expect(fullRules?.hasAttribute('open')).toBe(false);
    expect(fullRules?.textContent).toContain('Force multiplier weapon that builds Sunder');
  });
```

(Leave the other existing tests — compact cards, hides-panel-when-unselected, click-selects — unchanged.)

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run src/components/sheet/wizard/StepWeapon.test.tsx`
Expected: FAIL — new header/chips/stars/callout/tier markup doesn't exist yet.

- [ ] **Step 3: Rewrite the `.weapon-detail` block**

In `src/components/sheet/wizard/StepWeapon.tsx`, replace the entire `{selected && ( ... )}` block (shown in the Context above) with:

```tsx
      {selected && (
        <div class="weapon-detail">
          <h4 class="weapon-detail-name">{selected.name}</h4>
          <p class="weapon-detail-roles">{selected.primaryRole} • {selected.secondaryRole}</p>

          <div class="weapon-chips">
            <span class="weapon-chip">{selected.primaryStat}</span>
            <span class="weapon-chip">{selected.damageDice}</span>
            {selected.range.split(' / ').map(seg => (
              <span class="weapon-chip" key={seg}>{seg}</span>
            ))}
            <span class="weapon-chip">+{selected.powerDice} Power {selected.powerDice === 1 ? 'Die' : 'Dice'}</span>
          </div>

          <p class="weapon-complexity">
            Complexity:{' '}
            <span class="stars" aria-label={`Complexity ${selected.complexity} of 5`}>
              {[1, 2, 3, 4, 5].map(n => (
                <span key={n} class={`star ${n <= selected.complexity ? 'star--filled' : 'star--empty'}`}>
                  {n <= selected.complexity ? '★' : '☆'}
                </span>
              ))}
            </span>
          </p>

          <p class="weapon-pitch">{selected.summary}</p>

          {pairings.length > 0 && (
            <p class="weapon-pairs"><strong>Pairs well with:</strong> {pairings.join(', ')}</p>
          )}

          <div class="core-mechanic">
            <h5>Core Mechanic — {selected.coreMechanic.name}</h5>
            <ul>
              {selected.coreMechanic.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
          </div>

          <div class="tier-group">
            <h5>Current Technique (Tier 1)</h5>
            {selected.techniques.filter(t => t.tier === 1).map(t => (
              <details class="technique-row" key={t.name} open>
                <summary>{t.name} <span class="muted">({t.staminaCost} STA)</span></summary>
                <p>{t.description}</p>
              </details>
            ))}
          </div>

          <div class="tier-group">
            <h5>Future Unlocks</h5>
            {selected.techniques.filter(t => t.tier > 1).map(t => (
              <details class="technique-row" key={t.name}>
                <summary>Tier {t.tier} — {t.name} <span class="muted">({t.staminaCost} STA)</span></summary>
                <p>{t.description}</p>
              </details>
            ))}
          </div>

          <details class="full-rules">
            <summary>Full rules</summary>
            <p>{selected.description}</p>
          </details>
        </div>
      )}
```

Note: the `getByText('STR')` etc. tests rely on each chip being its own element whose exact text is the chip value, distinct from the card meta paragraph. The `+1 Power Die` chip text must read exactly `+1 Power Die` for hammer (powerDice 1). The `summary <span class="muted">(N STA)</span>` means the `<summary>` element's text contains the technique name plus the STA note — `getByText('Tier 2 — Armor Breaker')` matches the text node, and `.closest('details')` finds its row.

- [ ] **Step 4: Run tests to verify they pass**

Run: `npx vitest run src/components/sheet/wizard/StepWeapon.test.tsx`
Expected: PASS (all tests in the file).

- [ ] **Step 5: Run the full suite**

Run: `npm test`
Expected: all suites PASS.

- [ ] **Step 6: Commit**

```bash
git add src/components/sheet/wizard/StepWeapon.tsx src/components/sheet/wizard/StepWeapon.test.tsx
git commit -m "feat(wizard): progressive-disclosure weapon detail panel"
```

---

### Task 3: CSS for chips, stars, callout, and tier rows

**Files:**
- Modify: `src/components/sheet/styles/sheet.css`

Context: the existing `.weapon-detail` rules live just after the `.weapon-grid` block (around lines 378–405) and include `.weapon-detail`, `.weapon-detail h4`, `.weapon-detail > p`, `.weapon-pairs`, `.weapon-techniques`, etc. The component no longer emits `.weapon-meta` inside the panel or the old `.weapon-techniques` list, but those selectors are still used by the cards (`.weapon-meta`) — only remove what's panel-specific. CSS variables available: `--amber`, `--moss-green`, `--forest-dark`, `--cream`, `--text-light`, `--earth-brown`.

- [ ] **Step 1: Remove the now-unused panel-only rules**

In `src/components/sheet/styles/sheet.css`, delete these three rules (they styled the old panel markup that no longer exists — `.weapon-detail h4`, `.weapon-detail > p`, and the `.weapon-techniques` list rules):

```css
.weapon-detail h4 { color: var(--amber); margin-bottom: 6px; }
.weapon-detail > p { font-size: 0.9rem; line-height: 1.5; margin-bottom: 8px; }
```

```css
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

Keep `.weapon-detail { ... }` (the container) and `.weapon-pairs { color: var(--cream); }`. Do NOT touch `.weapon-meta` (the cards still use it) or `.race-pick.selected .weapon-meta`.

- [ ] **Step 2: Add the new panel styles**

Immediately after the `.weapon-pairs { color: var(--cream); }` line, insert:

```css
.weapon-detail-name { color: var(--amber); margin-bottom: 2px; }
.weapon-detail-roles { font-size: 0.85rem; color: var(--text-light); opacity: 0.8; margin-bottom: 10px; }
.weapon-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px; }
.weapon-chip {
  background: var(--forest-dark);
  border: 1px solid var(--moss-green);
  border-radius: 999px;
  padding: 2px 10px;
  font-size: 0.75rem;
  color: var(--cream);
}
.weapon-complexity { font-size: 0.85rem; margin-bottom: 8px; color: var(--text-light); }
.weapon-complexity .star { letter-spacing: 1px; }
.weapon-complexity .star--filled { color: var(--amber); }
.weapon-complexity .star--empty { color: var(--moss-green); opacity: 0.6; }
.weapon-pitch { font-size: 0.95rem; line-height: 1.5; margin-bottom: 10px; color: var(--cream); }
.core-mechanic {
  background: rgba(0, 0, 0, 0.18);
  border-left: 3px solid var(--amber);
  border-radius: 4px;
  padding: 10px 14px;
  margin-bottom: 14px;
}
.core-mechanic h5 { color: var(--amber); margin-bottom: 6px; font-size: 0.9rem; }
.core-mechanic ul { margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 4px; }
.core-mechanic li { font-size: 0.85rem; line-height: 1.4; }
.tier-group { margin-bottom: 12px; }
.tier-group h5 { color: var(--amber); font-size: 0.85rem; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; opacity: 0.85; }
.technique-row, .full-rules {
  background: rgba(0, 0, 0, 0.18);
  border-left: 2px solid var(--moss-green);
  border-radius: 3px;
  padding: 8px 10px;
  margin-bottom: 6px;
}
.technique-row > summary, .full-rules > summary {
  cursor: pointer;
  font-size: 0.85rem;
  color: var(--cream);
  font-weight: 600;
}
.technique-row > summary .muted, .full-rules > summary .muted { font-weight: 400; }
.technique-row > p, .full-rules > p { margin-top: 6px; font-size: 0.85rem; line-height: 1.45; opacity: 0.92; }
.full-rules { margin-top: 4px; }
```

- [ ] **Step 3: Verify the build compiles**

Run: `npm run build`
Expected: build succeeds with no errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/sheet/styles/sheet.css
git commit -m "style(wizard): chips, complexity stars, core-mechanic callout, tier rows"
```

---

### Task 4: Full verification

- [ ] **Step 1: Run the full test suite**

Run: `npm test`
Expected: all suites PASS.

- [ ] **Step 2: Type-check**

Run: `npx astro check`
Expected: no NEW errors in `src/data/weapons.ts` or `src/components/sheet/wizard/StepWeapon.tsx`. (Two pre-existing errors in `src/pages/rules/combat.astro:165` are unrelated to this work and may remain.)

- [ ] **Step 3: Visual verification (main session)**

Performed in the main session, not by a subagent: start `npm run dev`, drive the wizard to Step 5 with Playwright MCP (New Character → name → Next through Race/Background/Stats), select Hammer, and screenshot. Confirm: two-line header, stat chips row, 3 filled stars, the pitch sentence, "Pairs well with: Juggernaut", the "Core Mechanic — Sunder" callout with bullets, the Tier 1 technique expanded, four collapsed "Tier N — …" rows, and a collapsed "Full rules". Then expand a future tier and "Full rules" to confirm they open.
