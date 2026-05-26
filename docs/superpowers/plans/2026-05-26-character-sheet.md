# Character Sheet Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an interactive digital character sheet for Untamed: roster of saved characters, guided creation wizard, tabbed sheet with sticky vitals header, level-up prompts, dice rolling, action economy tracker, and print stylesheet. Backed by localStorage + JSON import/export.

**Architecture:** Astro static pages (`/character/sheet`, `/character/roster`) host a Preact island that owns all character state. Reference data (races, backgrounds, etc.) gets extracted from existing `.astro` pages into typed TS modules so the sheet and the existing reference pages share one source of truth. State lives in `localStorage` under `untamed_roster_v1` with debounced autosave.

**Tech Stack:** Astro 5 (existing), Preact (new — via `@astrojs/preact`), TypeScript (existing strict config), Vitest (new — for testing pure logic), localStorage.

**Reference spec:** [docs/superpowers/specs/2026-05-26-character-sheet-design.md](../specs/2026-05-26-character-sheet-design.md)

---

## File map

**New files:**

```
src/
  data/
    races.ts                 # 4 races + lineages + bonuses + traits
    backgrounds.ts           # 15 backgrounds + bonuses + proficiencies
    weapons.ts               # 12 weapons + tiers + techniques
    armor.ts                 # Light/Medium/Heavy tiers + starter sets
    talents.ts               # full talent list grouped by category
    specializations.ts       # 7 specs + 3 ranks each
    conditions.ts            # status conditions + effects
    skills.ts                # 20 skills mapped to stats
    tools.ts                 # 16 common tools
    recipes.ts               # crafting recipes (traps, gear, potions)
  types/
    character.ts             # Character type + InventoryItem + SkillId
  lib/
    derived.ts               # pure derived-stat calculations
    derived.test.ts
    schema.ts                # schema version + validation + migrations
    schema.test.ts
    storage.ts               # localStorage roster CRUD
    storage.test.ts
    dice.ts                  # dice rolling utilities
    dice.test.ts
  components/
    sheet/
      Sheet.tsx              # root Preact island for the sheet
      VitalsHeader.tsx
      TabNav.tsx
      DiceRoller.tsx
      ActionEconomy.tsx
      LevelUpModal.tsx
      ConditionChip.tsx
      tabs/
        IdentityTab.tsx
        StatsSkillsTab.tsx
        CombatTab.tsx
        SpecsTalentsTab.tsx
        InventoryTab.tsx
        CraftingTab.tsx
        BioNotesTab.tsx
      wizard/
        Wizard.tsx
        StepIdentity.tsx
        StepRace.tsx
        StepBackground.tsx
        StepStats.tsx
        StepWeapon.tsx
        StepReview.tsx
      roster/
        Roster.tsx
      hooks/
        useCharacter.ts
        useRoster.ts
        useDerived.ts
      styles/
        sheet.css            # shared sheet styling (forest theme)
        print.css            # @media print rules
  pages/
    character/
      sheet.astro
      roster.astro
```

**Modified files:**

- `package.json` (add `@astrojs/preact`, `preact`, `vitest`, `@testing-library/preact`)
- `astro.config.mjs` (register Preact integration)
- `src/pages/character.astro` (refactor to consume `src/data/*` and add link to roster)
- `tsconfig.json` (add Preact JSX config)

---

## Conventions

- **Commits:** small and frequent. After each task, run tests, then commit with a `feat:` / `refactor:` / `test:` prefix.
- **Forest theme variables:** reuse the existing palette from `src/pages/character.astro`:
  - `--forest-dark: #1a2e1a`, `--forest-green: #2d5016`, `--moss-green: #4a7c2f`, `--leaf-green: #6b9d3a`, `--amber: #d4a257`, `--earth-brown: #5c4033`, `--cream: #f5f1e8`, `--text-light: #e8e4d8`
- **Component style:** Preact function components with hooks. No class components.
- **Type safety:** strict TS throughout. No `any` unless explicitly justified.

---

# Phase 0 — Setup

## Task 0.1: Install Preact integration and Vitest

**Files:**
- Modify: `package.json`
- Modify: `astro.config.mjs`
- Modify: `tsconfig.json`

- [ ] **Step 1: Install dependencies**

```bash
cd "/Users/colby.flye/P. Projects/untamed-companion"
npm install @astrojs/preact preact
npm install -D vitest @testing-library/preact @testing-library/jest-dom jsdom
```

Expected output: packages added without peer dependency conflicts.

- [ ] **Step 2: Register Preact in `astro.config.mjs`**

Replace the file contents with:

```js
// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

export default defineConfig({
  integrations: [preact()],
});
```

- [ ] **Step 3: Update `tsconfig.json` for Preact JSX**

Replace the file contents with:

```json
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"],
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "preact"
  }
}
```

- [ ] **Step 4: Add Vitest config**

Create `vitest.config.ts`:

```ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
  },
  resolve: {
    alias: { react: 'preact/compat', 'react-dom': 'preact/compat' },
  },
});
```

Add a `test` script to `package.json` `scripts` block: `"test": "vitest run"`, `"test:watch": "vitest"`.

- [ ] **Step 5: Verify install + build**

```bash
npm run astro check
npm run build
```

Expected: both succeed with no errors. Build output appears in `dist/`.

- [ ] **Step 6: Commit**

```bash
git add package.json package-lock.json astro.config.mjs tsconfig.json vitest.config.ts
git commit -m "chore: add preact integration and vitest setup"
```

---

# Phase 1 — Reference data extraction

Each task extracts content from existing `.astro` pages into a typed TS module. After Phase 1, the existing pages still render the same content (sourced from the new modules).

## Task 1.1: Extract skills data

**Files:**
- Create: `src/data/skills.ts`

- [ ] **Step 1: Create the skills module**

```ts
// src/data/skills.ts
export type StatId = 'STR' | 'DEX' | 'CON' | 'INT' | 'INS' | 'CHA';

export type SkillId =
  | 'grapple' | 'heavy-trap-setup' | 'athletics' | 'brute-force'
  | 'stealth' | 'tool-handling' | 'acrobatics' | 'deftness'
  | 'knowledge' | 'trap-engineering' | 'first-aid' | 'resource-identification'
  | 'sense' | 'tracking' | 'creature-analysis' | 'survival'
  | 'negotiation' | 'leadership' | 'animal-handling' | 'deception';

export type Skill = {
  id: SkillId;
  name: string;
  stat: StatId;
  description: string;
};

export const SKILLS: readonly Skill[] = [
  // STR
  { id: 'grapple', name: 'Grapple', stat: 'STR', description: 'Holding or restraining a monster to prevent escape.' },
  { id: 'heavy-trap-setup', name: 'Heavy Trap Setup', stat: 'STR', description: 'Deploying massive, weight-based traps.' },
  { id: 'athletics', name: 'Athletics', stat: 'STR', description: 'Feats of strength like climbing, jumping, or swimming.' },
  { id: 'brute-force', name: 'Brute Force', stat: 'STR', description: 'Breaking objects, smashing through barriers.' },
  // DEX
  { id: 'stealth', name: 'Stealth', stat: 'DEX', description: 'Moving quietly, remaining undetected.' },
  { id: 'tool-handling', name: 'Tool Handling', stat: 'DEX', description: 'Manipulating small tools, traps, precision mechanics.' },
  { id: 'acrobatics', name: 'Acrobatics', stat: 'DEX', description: 'Dodging, flipping, balancing.' },
  { id: 'deftness', name: 'Deftness', stat: 'DEX', description: 'Lockpicking, disarming traps.' },
  // INT
  { id: 'knowledge', name: 'Knowledge', stat: 'INT', description: 'Understanding monster weaknesses, lore, behaviors.' },
  { id: 'trap-engineering', name: 'Trap Engineering', stat: 'INT', description: 'Crafting and modifying complex traps.' },
  { id: 'first-aid', name: 'First Aid', stat: 'INT', description: 'Treating injuries, stabilizing allies.' },
  { id: 'resource-identification', name: 'Resource Identification', stat: 'INT', description: 'Recognizing valuable materials, crafting ingredients.' },
  // INS
  { id: 'sense', name: 'Sense', stat: 'INS', description: 'Detecting hidden threats, noticing small details.' },
  { id: 'tracking', name: 'Tracking', stat: 'INS', description: 'Following footprints, identifying movement patterns.' },
  { id: 'creature-analysis', name: 'Creature Analysis', stat: 'INS', description: 'Reading monster body language, predicting attacks.' },
  { id: 'survival', name: 'Survival', stat: 'INS', description: 'Navigating and thriving in extreme conditions.' },
  // CHA
  { id: 'negotiation', name: 'Negotiation', stat: 'CHA', description: 'Persuading NPCs, striking deals.' },
  { id: 'leadership', name: 'Leadership', stat: 'CHA', description: 'Boosting morale, coordinating allies.' },
  { id: 'animal-handling', name: 'Animal Handling', stat: 'CHA', description: 'Calming, training, working with creatures.' },
  { id: 'deception', name: 'Deception', stat: 'CHA', description: 'Lying, misdirecting, disguising intentions.' },
];

export const SKILLS_BY_STAT: Record<StatId, readonly Skill[]> = SKILLS.reduce(
  (acc, s) => {
    (acc[s.stat] ??= []).push(s);
    return acc;
  },
  {} as Record<StatId, Skill[]>
);

export function getSkill(id: SkillId): Skill {
  const s = SKILLS.find(sk => sk.id === id);
  if (!s) throw new Error(`Unknown skill: ${id}`);
  return s;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/data/skills.ts
git commit -m "feat(data): extract skills to typed module"
```

## Task 1.2: Extract races data

**Files:**
- Create: `src/data/races.ts`
- Reference: `src/pages/character.astro:60-327`

- [ ] **Step 1: Read the existing race content**

```bash
sed -n '60,327p' "/Users/colby.flye/P. Projects/untamed-companion/src/pages/character.astro"
```

Capture each race's: name, stat bonus, proficiencies, racial trait, and any lineages.

- [ ] **Step 2: Create the races module**

```ts
// src/data/races.ts
import type { StatId, SkillId } from './skills';

export type StatBonus =
  | { kind: 'fixed'; stat: StatId; amount: number }
  | { kind: 'choice'; stats: StatId[]; amount: number }
  | { kind: 'any'; amount: number };

export type Lineage = {
  id: string;
  name: string;
  description: string;
  bonuses?: StatBonus[];
  traits?: string[];
};

export type Race = {
  id: string;
  name: string;
  summary: string;
  bonuses: StatBonus[];
  proficiencies: {
    skills?: { count: number; from?: SkillId[] };
    traits?: string[];
  };
  racialTrait: { name: string; description: string };
  lineages: Lineage[];
};

export const RACES: readonly Race[] = [
  {
    id: 'human',
    name: 'Humans',
    summary: 'Adaptable, flexible, the default baseline.',
    bonuses: [{ kind: 'any', amount: 1 }],
    proficiencies: { skills: { count: 1 } },
    racialTrait: {
      name: 'Adaptable',
      description: 'Once per round, when you spend Stamina on an Action or Reaction, you may gain a flexible benefit. (Copy exact rules text from character.astro)',
    },
    lineages: [
      // Fill in lineages from character.astro
    ],
  },
  // Dragonian, Trolian, Thalorim — fill out the same way from character.astro
];

export function getRace(id: string): Race {
  const r = RACES.find(r => r.id === id);
  if (!r) throw new Error(`Unknown race: ${id}`);
  return r;
}
```

**Note:** the lineage descriptions and racial trait text in the existing `.astro` file are the source of truth — copy verbatim. Don't summarize.

- [ ] **Step 3: Commit**

```bash
git add src/data/races.ts
git commit -m "feat(data): extract races to typed module"
```

## Task 1.3: Extract backgrounds data

**Files:**
- Create: `src/data/backgrounds.ts`
- Reference: `src/pages/character.astro:328-575`

- [ ] **Step 1: Inspect existing background content**

```bash
sed -n '328,575p' "/Users/colby.flye/P. Projects/untamed-companion/src/pages/character.astro"
```

- [ ] **Step 2: Create the backgrounds module**

```ts
// src/data/backgrounds.ts
import type { SkillId, StatId } from './skills';
import type { StatBonus } from './races';

export type Background = {
  id: string;
  name: string;
  description: string;
  statBonuses: StatBonus[];
  skillProficiencies: SkillId[];
  traits?: string[];
  starterKit?: string[];
};

export const BACKGROUNDS: readonly Background[] = [
  // Extract all 15 backgrounds from character.astro
  // Each card in the file is between <details class="bg-card"> ... </details>
];

export function getBackground(id: string): Background {
  const b = BACKGROUNDS.find(b => b.id === id);
  if (!b) throw new Error(`Unknown background: ${id}`);
  return b;
}
```

- [ ] **Step 3: Commit**

```bash
git add src/data/backgrounds.ts
git commit -m "feat(data): extract backgrounds to typed module"
```

## Task 1.4: Extract weapons data

**Files:**
- Create: `src/data/weapons.ts`
- Reference: `src/pages/character.astro:576-753` and `src/pages/weapons/*` (individual weapon pages)

- [ ] **Step 1: Inventory the weapon pages**

```bash
ls "/Users/colby.flye/P. Projects/untamed-companion/src/pages/weapons"
```

- [ ] **Step 2: Create the weapons module**

```ts
// src/data/weapons.ts
import type { StatId } from './skills';

export type WeaponTier = 1 | 2 | 3 | 4 | 5 | 6;

export type Technique = {
  name: string;
  staminaCost: number;
  description: string;
  unlockedAt?: 'novice' | 'trained' | 'master';
};

export type Weapon = {
  id: string;
  name: string;
  tier: WeaponTier;
  primaryStat: StatId;        // stat for to-hit
  damageStat: StatId;         // stat that scales damage
  range: string;              // e.g., "Melee 5 ft", "Ranged 60/120 ft"
  damageDice: string;         // e.g., "1d10"
  powerDice: number;          // baseline power dice count
  bestWith?: string[];        // recommended specializations
  techniques: Technique[];
  description: string;
};

export const WEAPONS: readonly Weapon[] = [
  // Extract all 12 from /weapons pages and /character.astro weapon grid
];

export function getWeapon(id: string): Weapon {
  const w = WEAPONS.find(w => w.id === id);
  if (!w) throw new Error(`Unknown weapon: ${id}`);
  return w;
}
```

- [ ] **Step 3: Commit**

```bash
git add src/data/weapons.ts
git commit -m "feat(data): extract weapons to typed module"
```

## Task 1.5: Extract armor data

**Files:**
- Create: `src/data/armor.ts`
- Reference: `src/pages/character.astro:754-816`

- [ ] **Step 1: Create the armor module**

```ts
// src/data/armor.ts
export type ArmorType = 'light' | 'medium' | 'heavy';
export type ArmorTier = 1 | 2 | 3 | 4 | 5 | 6;

export type Armor = {
  id: string;
  name: string;
  type: ArmorType;
  tier: ArmorTier;
  ar: number;            // armor rating contribution
  speedPenalty?: number; // movement reduction if any
  description: string;
  isStarter?: boolean;
};

export const ARMORS: readonly Armor[] = [
  // Extract from character.astro armor table
];

export function getArmor(id: string): Armor {
  const a = ARMORS.find(a => a.id === id);
  if (!a) throw new Error(`Unknown armor: ${id}`);
  return a;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/data/armor.ts
git commit -m "feat(data): extract armor to typed module"
```

## Task 1.6: Extract talents data

**Files:**
- Create: `src/data/talents.ts`

- [ ] **Step 1: Create the talents module**

```ts
// src/data/talents.ts
export type TalentCategory =
  | 'Defensive' | 'Offensive' | 'Ranged' | 'Survival'
  | 'Magic' | 'Tactical' | 'Crafting' | 'Mobility';

export type Talent = {
  id: string;
  name: string;
  category: TalentCategory;
  description: string;
  requirements?: string;  // free-form text e.g. "HR 5+"
};

export const TALENTS: readonly Talent[] = [
  // Fill from the OG player doc talent list
  // Eight categories, several talents each
];

export const TALENTS_BY_CATEGORY: Record<TalentCategory, readonly Talent[]> = TALENTS.reduce(
  (acc, t) => {
    (acc[t.category] ??= []).push(t);
    return acc;
  },
  {} as Record<TalentCategory, Talent[]>
);

export function getTalent(id: string): Talent {
  const t = TALENTS.find(t => t.id === id);
  if (!t) throw new Error(`Unknown talent: ${id}`);
  return t;
}
```

**Note:** The talent list is referenced in `docs/superpowers/specs/2026-05-26-character-sheet-design.md` (open items) and in `memory/project_player_doc_status.md`. Talents themselves are not yet on the site. Pull the full list from the original player doc and add to this module.

- [ ] **Step 2: Commit**

```bash
git add src/data/talents.ts
git commit -m "feat(data): add talents typed module"
```

## Task 1.7: Extract specializations data

**Files:**
- Create: `src/data/specializations.ts`
- Reference: `src/pages/character/specializations.astro`

- [ ] **Step 1: Create the specs module**

```ts
// src/data/specializations.ts
export type SpecRank = {
  rank: 1 | 2 | 3;
  label: 'Core Passive' | 'Rank 2' | 'Rank 3';
  name: string;
  description: string;
};

export type Specialization = {
  id: string;
  name: string;
  role: string;         // "Tank", "Ranged", etc.
  quote: string;
  icon: string;         // emoji
  bestWith: string[];   // weapon ids
  ranks: [SpecRank, SpecRank, SpecRank];
};

export const SPECIALIZATIONS: readonly Specialization[] = [
  // Extract all 7 from specializations.astro:
  // Juggernaut, Deadeye, Warblade, Elementalist, Monster Butcher, Evasive Phantom, Tactician
];

export function getSpec(id: string): Specialization {
  const s = SPECIALIZATIONS.find(s => s.id === id);
  if (!s) throw new Error(`Unknown specialization: ${id}`);
  return s;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/data/specializations.ts
git commit -m "feat(data): extract specializations to typed module"
```

## Task 1.8: Extract conditions data

**Files:**
- Create: `src/data/conditions.ts`
- Reference: `content/rules/conditions.md`

- [ ] **Step 1: Create the conditions module**

```ts
// src/data/conditions.ts
export type ConditionCategory = 'elemental' | 'control' | 'positional' | 'physical' | 'mental';

export type Condition = {
  id: string;
  name: string;
  category: ConditionCategory;
  description: string;
  staminaRider?: string;   // e.g., "+1 STA per action" for Poisoned
  color?: string;          // for the chip border in the UI
};

export const CONDITIONS: readonly Condition[] = [
  // Pull all conditions from content/rules/conditions.md
  // Examples: Bleeding, Poisoned, Chilled, Burning, Stunned, Paralyzed, Restrained,
  // Prone, Exhausted, Feared, etc.
];

export function getCondition(id: string): Condition {
  const c = CONDITIONS.find(c => c.id === id);
  if (!c) throw new Error(`Unknown condition: ${id}`);
  return c;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/data/conditions.ts
git commit -m "feat(data): extract conditions to typed module"
```

## Task 1.9: Add tools and recipes data

**Files:**
- Create: `src/data/tools.ts`
- Create: `src/data/recipes.ts`

- [ ] **Step 1: Create `src/data/tools.ts`**

```ts
// src/data/tools.ts
export type ToolCategory = 'Camp' | 'Hunting' | 'Medicine' | 'Water' | 'Utility';

export type Tool = {
  id: string;
  name: string;
  category: ToolCategory;
  description: string;
};

export const TOOLS: readonly Tool[] = [
  // 16 tools across 5 categories per project_player_doc_status.md
];
```

- [ ] **Step 2: Create `src/data/recipes.ts`**

```ts
// src/data/recipes.ts
export type RecipeKind = 'trap' | 'monster-gear' | 'potion' | 'salve';

export type Component = {
  name: string;
  qty: number;
};

export type Recipe = {
  id: string;
  name: string;
  kind: RecipeKind;
  components: Component[];
  description: string;
  workshopRequired?: boolean;
};

export const RECIPES: readonly Recipe[] = [
  // Pull from player doc crafting section
];
```

- [ ] **Step 3: Commit**

```bash
git add src/data/tools.ts src/data/recipes.ts
git commit -m "feat(data): add tools and recipes typed modules"
```

## Task 1.10: Refactor existing pages to consume new data modules

**Files:**
- Modify: `src/pages/character.astro` (replace inline race/background/weapon HTML with renders from data modules)
- Modify: `src/pages/character/specializations.astro` (render from `SPECIALIZATIONS`)
- Modify: `src/pages/character/stats-skills.astro` (render skills from `SKILLS_BY_STAT`)

- [ ] **Step 1: Refactor `character.astro` races section**

Replace the race `<details>` blocks (lines ~100-326) with a loop:

```astro
---
import { RACES } from '../data/races';
---

{RACES.map(race => (
  <details class="race-card">
    <summary>
      <div class="race-summary-header"><h3>{race.name}</h3>...</div>
      <div class="race-quick-info">
        {race.bonuses.map(b => <div class="stat-badge">{formatBonus(b)}</div>)}
      </div>
    </summary>
    <div class="race-details">
      {/* mechanics / trait / lineages — using race fields */}
    </div>
  </details>
))}
```

Apply the same pattern to backgrounds, weapons, armor.

- [ ] **Step 2: Refactor `specializations.astro`**

Replace the 7 hard-coded spec blocks with a `SPECIALIZATIONS.map(...)` render.

- [ ] **Step 3: Refactor `stats-skills.astro`**

Replace the 6 stat-card blocks with a `(['STR','DEX','CON','INT','INS','CHA'] as const).map(stat => ...)` render that pulls skills from `SKILLS_BY_STAT[stat]`.

- [ ] **Step 4: Build and visual diff**

```bash
npm run build
npm run preview
```

Manually load `/character`, `/character/stats-skills`, `/character/specializations`. Compare against the previous version — content should be identical. The site was the canonical source for races/backgrounds/specs/skills, so verbatim match is the success criterion.

- [ ] **Step 5: Commit**

```bash
git add src/pages/character.astro src/pages/character/specializations.astro src/pages/character/stats-skills.astro
git commit -m "refactor(character): render existing pages from typed data modules"
```

---

# Phase 2 — Character types + derived calculations

## Task 2.1: Character types

**Files:**
- Create: `src/types/character.ts`

- [ ] **Step 1: Create the types file**

```ts
// src/types/character.ts
import type { SkillId } from '../data/skills';

export type Proficiency = 'novice' | 'trained' | 'master';

export type InventoryItem = {
  name: string;
  type: 'weapon' | 'armor' | 'tool' | 'consumable' | 'monster-part' | 'misc';
  qty?: number;
  description?: string;
  isStarterKit?: boolean;
};

export type WeaponEntry = {
  weaponId: string;
  huntsCompleted: number;
  isPrimary: boolean;
  notes?: string;
};

export type SpecEntry = {
  specId: string;
  rankUnlocked: 1 | 2 | 3;
};

export type LiveState = {
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

export type BioEntry = {
  date: string;     // ISO
  text: string;
};

export type Bio = {
  personality?: string;
  motivations?: string;
  partyConnections?: string;
  journal: BioEntry[];
};

export type Character = {
  schemaVersion: 1;
  id: string;
  createdAt: string;
  updatedAt: string;

  name: string;
  pronouns?: string;
  raceId: string;
  lineageId?: string;
  backgroundIds: string[];
  portraitUrl?: string;

  hunterRank: number;
  cxp: number;

  baseStats: {
    STR: number; DEX: number; CON: number;
    INT: number; INS: number; CHA: number;
  };

  skillProficiencies: Partial<Record<SkillId, Proficiency>>;

  weapons: WeaponEntry[];
  primaryWeaponId: string;

  specializations: SpecEntry[];
  talentIds: string[];

  armor: {
    armorId: string;
    tier: 1 | 2 | 3 | 4 | 5 | 6;
    type: 'light' | 'medium' | 'heavy';
  } | null;
  gearSlots: (InventoryItem | null)[];   // length 6
  packSlots: (InventoryItem | null)[];   // length 10
  consumables: { itemId: string; qty: number }[];
  tools: string[];

  knownRecipes: string[];
  monsterParts: { partId: string; monsterId: string; qty: number }[];
  workshopId?: string;

  liveState: LiveState;
  bio: Bio;
};

export const STATS = ['STR', 'DEX', 'CON', 'INT', 'INS', 'CHA'] as const;
export type StatKey = typeof STATS[number];
```

- [ ] **Step 2: Commit**

```bash
git add src/types/character.ts
git commit -m "feat(types): add Character type definitions"
```

## Task 2.2: Derived calculations (TDD)

**Files:**
- Create: `src/lib/derived.test.ts`
- Create: `src/lib/derived.ts`

- [ ] **Step 1: Write failing tests**

```ts
// src/lib/derived.test.ts
import { describe, it, expect } from 'vitest';
import {
  statMod, maxHp, maxStamina, profBonus, freeConFromHR, tierFromHR,
  availableSpecSlots, availableTalentSlots, availableStatPoints,
  computeFinalStats,
} from './derived';
import type { Character } from '../types/character';

describe('statMod', () => {
  it('returns floor(score/2)', () => {
    expect(statMod(0)).toBe(0);
    expect(statMod(3)).toBe(1);
    expect(statMod(7)).toBe(3);
    expect(statMod(10)).toBe(5);
  });
});

describe('maxHp', () => {
  it('uses (CON * 8) + HR', () => {
    expect(maxHp(5, 0)).toBe(40);
    expect(maxHp(7, 7)).toBe(63);
    expect(maxHp(10, 0)).toBe(80);
  });
});

describe('maxStamina', () => {
  it('uses 6 + conMod with minimum 1', () => {
    expect(maxStamina(3)).toBe(7);   // conMod 1
    expect(maxStamina(7)).toBe(9);   // conMod 3
    expect(maxStamina(0)).toBe(6);   // conMod 0
  });
  it('clamps to minimum 1', () => {
    // No negative CON in normal play, but the formula must not go below 1.
    // We pass a negative mod via the score input path.
    expect(maxStamina(-20)).toBe(1);
  });
});

describe('profBonus', () => {
  it('maps proficiency to bonus', () => {
    expect(profBonus('novice')).toBe(0);
    expect(profBonus('trained')).toBe(2);
    expect(profBonus('master')).toBe(4);
  });
});

describe('freeConFromHR', () => {
  it('grants +1 CON per 5 HR', () => {
    expect(freeConFromHR(0)).toBe(0);
    expect(freeConFromHR(4)).toBe(0);
    expect(freeConFromHR(5)).toBe(1);
    expect(freeConFromHR(14)).toBe(2);
    expect(freeConFromHR(25)).toBe(5);
  });
});

describe('tierFromHR', () => {
  it('maps HR bands to tiers', () => {
    expect(tierFromHR(0)).toBe(1);
    expect(tierFromHR(4)).toBe(1);
    expect(tierFromHR(5)).toBe(2);
    expect(tierFromHR(14)).toBe(3);
    expect(tierFromHR(19)).toBe(4);
    expect(tierFromHR(25)).toBe(5);
    expect(tierFromHR(26)).toBe(6);
    expect(tierFromHR(50)).toBe(6);
  });
});

describe('slot availability', () => {
  it('spec slots: 1 per 10 HR', () => {
    expect(availableSpecSlots(0)).toBe(0);
    expect(availableSpecSlots(9)).toBe(0);
    expect(availableSpecSlots(10)).toBe(1);
    expect(availableSpecSlots(25)).toBe(2);
  });
  it('talent slots: 1 per 5 HR', () => {
    expect(availableTalentSlots(0)).toBe(0);
    expect(availableTalentSlots(5)).toBe(1);
    expect(availableTalentSlots(20)).toBe(4);
  });
  it('stat points: 2 per 4 HR minus spent', () => {
    expect(availableStatPoints(0, 0)).toBe(0);
    expect(availableStatPoints(4, 0)).toBe(2);
    expect(availableStatPoints(8, 2)).toBe(2);
    expect(availableStatPoints(12, 6)).toBe(0);
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
npm test -- src/lib/derived.test.ts
```

Expected: all imports fail (module not found).

- [ ] **Step 3: Implement `derived.ts`**

```ts
// src/lib/derived.ts
import type { Proficiency, Character, StatKey } from '../types/character';
import { getRace } from '../data/races';
import { getBackground } from '../data/backgrounds';

export function statMod(score: number): number {
  return Math.floor(score / 2);
}

export function maxHp(finalCon: number, hr: number): number {
  return finalCon * 8 + hr;
}

export function maxStamina(finalCon: number): number {
  return Math.max(1, 6 + statMod(finalCon));
}

export function profBonus(p: Proficiency): number {
  return p === 'master' ? 4 : p === 'trained' ? 2 : 0;
}

export function freeConFromHR(hr: number): number {
  return Math.floor(hr / 5);
}

export function tierFromHR(hr: number): 1 | 2 | 3 | 4 | 5 | 6 {
  if (hr <= 4) return 1;
  if (hr <= 9) return 2;
  if (hr <= 14) return 3;
  if (hr <= 19) return 4;
  if (hr <= 25) return 5;
  return 6;
}

export function availableSpecSlots(hr: number): number {
  return Math.floor(hr / 10);
}

export function availableTalentSlots(hr: number): number {
  return Math.floor(hr / 5);
}

export function availableStatPoints(hr: number, pointsSpent: number): number {
  return Math.floor(hr / 4) * 2 - pointsSpent;
}

/**
 * Compute final stat scores from base + race + background + free CON.
 * Race "choice" or "any" bonuses come in via `flexibleAllocations` — a map
 * indicating where the player chose to apply each bonus.
 */
export function computeFinalStats(
  char: Pick<Character, 'baseStats' | 'raceId' | 'backgroundIds' | 'hunterRank'>,
  flexibleAllocations: Partial<Record<StatKey, number>> = {}
): Record<StatKey, number> {
  const result: Record<StatKey, number> = { ...char.baseStats };

  // Race fixed bonuses
  const race = getRace(char.raceId);
  for (const b of race.bonuses) {
    if (b.kind === 'fixed') result[b.stat] += b.amount;
  }
  // Background fixed bonuses
  for (const bgId of char.backgroundIds) {
    const bg = getBackground(bgId);
    for (const b of bg.statBonuses) {
      if (b.kind === 'fixed') result[b.stat] += b.amount;
    }
  }
  // Flexible (choice / any) allocations
  for (const [stat, amount] of Object.entries(flexibleAllocations) as [StatKey, number][]) {
    result[stat] += amount;
  }
  // Free CON from HR
  result.CON += freeConFromHR(char.hunterRank);
  return result;
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npm test -- src/lib/derived.test.ts
```

Expected: all green.

- [ ] **Step 5: Commit**

```bash
git add src/lib/derived.ts src/lib/derived.test.ts
git commit -m "feat(lib): add derived stat calculations with tests"
```

## Task 2.3: Schema validation + migrations (TDD)

**Files:**
- Create: `src/lib/schema.test.ts`
- Create: `src/lib/schema.ts`

- [ ] **Step 1: Write failing tests**

```ts
// src/lib/schema.test.ts
import { describe, it, expect } from 'vitest';
import { validateCharacter, isCharacter, CURRENT_SCHEMA_VERSION } from './schema';

const validChar = {
  schemaVersion: 1,
  id: 'abc',
  createdAt: '2026-01-01T00:00:00Z',
  updatedAt: '2026-01-01T00:00:00Z',
  name: 'Kael',
  raceId: 'human',
  backgroundIds: ['bounty-hunter'],
  hunterRank: 0,
  cxp: 0,
  baseStats: { STR: 3, DEX: 3, CON: 3, INT: 3, INS: 3, CHA: 3 },
  skillProficiencies: {},
  weapons: [],
  primaryWeaponId: '',
  specializations: [],
  talentIds: [],
  armor: null,
  gearSlots: [null, null, null, null, null, null],
  packSlots: [null, null, null, null, null, null, null, null, null, null],
  consumables: [],
  tools: [],
  knownRecipes: [],
  monsterParts: [],
  liveState: {
    currentHp: 24, currentStamina: 7, conditions: [],
    actionEconomy: { actionUsed: false, fastActionUsed: false, reactionUsed: false, breathingTurn: false },
    exhausted: false,
  },
  bio: { journal: [] },
};

describe('validateCharacter', () => {
  it('accepts a valid character', () => {
    const result = validateCharacter(validChar);
    expect(result.ok).toBe(true);
  });

  it('rejects missing schemaVersion', () => {
    const { schemaVersion, ...rest } = validChar;
    const result = validateCharacter(rest);
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.error).toMatch(/schemaVersion/);
  });

  it('rejects future schemaVersion', () => {
    const result = validateCharacter({ ...validChar, schemaVersion: 99 });
    expect(result.ok).toBe(false);
  });

  it('rejects malformed baseStats', () => {
    const result = validateCharacter({ ...validChar, baseStats: { STR: 3 } });
    expect(result.ok).toBe(false);
  });

  it('rejects wrong gear slot count', () => {
    const result = validateCharacter({ ...validChar, gearSlots: [null] });
    expect(result.ok).toBe(false);
  });
});

describe('isCharacter', () => {
  it('type guard returns true for valid', () => {
    expect(isCharacter(validChar)).toBe(true);
  });
  it('returns false for junk', () => {
    expect(isCharacter({})).toBe(false);
    expect(isCharacter(null)).toBe(false);
  });
});

describe('CURRENT_SCHEMA_VERSION', () => {
  it('is 1', () => {
    expect(CURRENT_SCHEMA_VERSION).toBe(1);
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
npm test -- src/lib/schema.test.ts
```

- [ ] **Step 3: Implement `schema.ts`**

```ts
// src/lib/schema.ts
import type { Character } from '../types/character';

export const CURRENT_SCHEMA_VERSION = 1 as const;

export type ValidationResult =
  | { ok: true; character: Character }
  | { ok: false; error: string };

const STAT_KEYS = ['STR', 'DEX', 'CON', 'INT', 'INS', 'CHA'] as const;

export function validateCharacter(data: unknown): ValidationResult {
  if (!data || typeof data !== 'object') return { ok: false, error: 'Not an object' };
  const o = data as Record<string, unknown>;

  if (o.schemaVersion === undefined) return { ok: false, error: 'Missing schemaVersion' };
  if (typeof o.schemaVersion !== 'number') return { ok: false, error: 'schemaVersion must be a number' };
  if (o.schemaVersion > CURRENT_SCHEMA_VERSION) {
    return { ok: false, error: `Unsupported schemaVersion ${o.schemaVersion} (max ${CURRENT_SCHEMA_VERSION})` };
  }

  // Required strings
  for (const field of ['id', 'createdAt', 'updatedAt', 'name', 'raceId', 'primaryWeaponId'] as const) {
    if (typeof o[field] !== 'string') return { ok: false, error: `${field} must be a string` };
  }

  // baseStats
  const bs = o.baseStats as Record<string, unknown> | undefined;
  if (!bs || typeof bs !== 'object') return { ok: false, error: 'baseStats missing' };
  for (const k of STAT_KEYS) {
    if (typeof bs[k] !== 'number') return { ok: false, error: `baseStats.${k} must be a number` };
  }

  // Slot lengths
  if (!Array.isArray(o.gearSlots) || o.gearSlots.length !== 6) {
    return { ok: false, error: 'gearSlots must be length 6' };
  }
  if (!Array.isArray(o.packSlots) || o.packSlots.length !== 10) {
    return { ok: false, error: 'packSlots must be length 10' };
  }

  // hunterRank
  if (typeof o.hunterRank !== 'number') return { ok: false, error: 'hunterRank must be a number' };

  // liveState shape
  const ls = o.liveState as Record<string, unknown> | undefined;
  if (!ls) return { ok: false, error: 'liveState missing' };
  if (typeof ls.currentHp !== 'number' || typeof ls.currentStamina !== 'number') {
    return { ok: false, error: 'liveState.currentHp/currentStamina must be numbers' };
  }

  return { ok: true, character: o as unknown as Character };
}

export function isCharacter(data: unknown): data is Character {
  return validateCharacter(data).ok;
}

type Migration = (data: any) => any;
const migrations: Record<number, Migration> = {
  // Future: 1: (data) => ({ ...data, newField: 'default', schemaVersion: 2 })
};

export function migrateToCurrent(data: any): Character | null {
  let current = data;
  while (current?.schemaVersion < CURRENT_SCHEMA_VERSION) {
    const mig = migrations[current.schemaVersion];
    if (!mig) return null;
    current = mig(current);
  }
  return validateCharacter(current).ok ? (current as Character) : null;
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npm test -- src/lib/schema.test.ts
```

- [ ] **Step 5: Commit**

```bash
git add src/lib/schema.ts src/lib/schema.test.ts
git commit -m "feat(lib): add character schema validation"
```

## Task 2.4: Dice rolling utility (TDD)

**Files:**
- Create: `src/lib/dice.test.ts`
- Create: `src/lib/dice.ts`

- [ ] **Step 1: Write failing tests**

```ts
// src/lib/dice.test.ts
import { describe, it, expect, vi } from 'vitest';
import { rollD20, rollDamage, parseDiceNotation, isCrit, isFumble } from './dice';

describe('parseDiceNotation', () => {
  it('parses NdM', () => {
    expect(parseDiceNotation('1d10')).toEqual({ count: 1, sides: 10 });
    expect(parseDiceNotation('3d6')).toEqual({ count: 3, sides: 6 });
  });
  it('throws on bad input', () => {
    expect(() => parseDiceNotation('garbage')).toThrow();
  });
});

describe('rollD20', () => {
  it('returns object with d20 and total', () => {
    const r = rollD20(3);
    expect(r.d20).toBeGreaterThanOrEqual(1);
    expect(r.d20).toBeLessThanOrEqual(20);
    expect(r.modifier).toBe(3);
    expect(r.total).toBe(r.d20 + 3);
  });

  it('uses provided RNG', () => {
    const rng = vi.fn(() => 0.5);  // 0.5 * 20 = 10, floor = 10, +1 = 11
    const r = rollD20(0, rng);
    expect(r.d20).toBe(11);
  });
});

describe('rollDamage', () => {
  it('rolls multiple dice and sums them', () => {
    const rng = vi.fn(() => 0.999);  // always max
    const r = rollDamage('2d6', 1, rng);
    expect(r.rolls).toEqual([6, 6]);
    expect(r.total).toBe(13);
  });
});

describe('isCrit / isFumble', () => {
  it('crit on nat 20', () => {
    expect(isCrit({ d20: 20, modifier: 0, total: 20 })).toBe(true);
    expect(isCrit({ d20: 19, modifier: 5, total: 24 })).toBe(false);
  });
  it('fumble on nat 1', () => {
    expect(isFumble({ d20: 1, modifier: 0, total: 1 })).toBe(true);
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
npm test -- src/lib/dice.test.ts
```

- [ ] **Step 3: Implement `dice.ts`**

```ts
// src/lib/dice.ts
export type D20Roll = {
  d20: number;
  modifier: number;
  total: number;
};

export type DamageRoll = {
  notation: string;
  rolls: number[];
  modifier: number;
  total: number;
};

export type Rng = () => number;
const defaultRng: Rng = Math.random;

function rollDie(sides: number, rng: Rng = defaultRng): number {
  return Math.floor(rng() * sides) + 1;
}

export function rollD20(modifier: number, rng: Rng = defaultRng): D20Roll {
  const d20 = rollDie(20, rng);
  return { d20, modifier, total: d20 + modifier };
}

export function parseDiceNotation(s: string): { count: number; sides: number } {
  const m = /^(\d+)d(\d+)$/.exec(s.trim().toLowerCase());
  if (!m) throw new Error(`Invalid dice notation: ${s}`);
  return { count: parseInt(m[1], 10), sides: parseInt(m[2], 10) };
}

export function rollDamage(notation: string, modifier: number, rng: Rng = defaultRng): DamageRoll {
  const { count, sides } = parseDiceNotation(notation);
  const rolls: number[] = [];
  for (let i = 0; i < count; i++) rolls.push(rollDie(sides, rng));
  const total = rolls.reduce((s, n) => s + n, 0) + modifier;
  return { notation, rolls, modifier, total };
}

export function isCrit(r: D20Roll): boolean { return r.d20 === 20; }
export function isFumble(r: D20Roll): boolean { return r.d20 === 1; }
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npm test -- src/lib/dice.test.ts
```

- [ ] **Step 5: Commit**

```bash
git add src/lib/dice.ts src/lib/dice.test.ts
git commit -m "feat(lib): add dice rolling utilities"
```

---

# Phase 3 — Storage layer

## Task 3.1: Roster storage (TDD)

**Files:**
- Create: `src/lib/storage.test.ts`
- Create: `src/lib/storage.ts`

- [ ] **Step 1: Write failing tests**

```ts
// src/lib/storage.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import {
  loadRoster, saveRoster, addCharacter, updateCharacter,
  deleteCharacter, getCharacter, ROSTER_KEY,
} from './storage';
import type { Character } from '../types/character';

const sample = (id: string, name: string): Character => ({
  schemaVersion: 1, id, createdAt: '2026-01-01T00:00:00Z', updatedAt: '2026-01-01T00:00:00Z',
  name, raceId: 'human', backgroundIds: [], hunterRank: 0, cxp: 0,
  baseStats: { STR: 3, DEX: 3, CON: 3, INT: 3, INS: 3, CHA: 3 },
  skillProficiencies: {}, weapons: [], primaryWeaponId: '',
  specializations: [], talentIds: [],
  armor: null,
  gearSlots: [null, null, null, null, null, null],
  packSlots: [null, null, null, null, null, null, null, null, null, null],
  consumables: [], tools: [], knownRecipes: [], monsterParts: [],
  liveState: {
    currentHp: 24, currentStamina: 7, conditions: [],
    actionEconomy: { actionUsed: false, fastActionUsed: false, reactionUsed: false, breathingTurn: false },
    exhausted: false,
  },
  bio: { journal: [] },
});

beforeEach(() => {
  localStorage.clear();
});

describe('roster CRUD', () => {
  it('returns empty roster initially', () => {
    expect(loadRoster()).toEqual({ characters: [] });
  });

  it('saves and reloads a roster', () => {
    saveRoster({ characters: [sample('a', 'Kael')] });
    expect(loadRoster().characters[0].name).toBe('Kael');
  });

  it('adds a character', () => {
    addCharacter(sample('a', 'Kael'));
    expect(loadRoster().characters).toHaveLength(1);
  });

  it('updates an existing character by id', () => {
    addCharacter(sample('a', 'Kael'));
    updateCharacter({ ...sample('a', 'Kael Renamed'), updatedAt: '2026-02-01T00:00:00Z' });
    expect(getCharacter('a')?.name).toBe('Kael Renamed');
  });

  it('deletes a character', () => {
    addCharacter(sample('a', 'Kael'));
    addCharacter(sample('b', 'Mira'));
    deleteCharacter('a');
    const roster = loadRoster();
    expect(roster.characters).toHaveLength(1);
    expect(roster.characters[0].id).toBe('b');
  });

  it('survives corrupt localStorage gracefully', () => {
    localStorage.setItem(ROSTER_KEY, 'not json');
    expect(loadRoster()).toEqual({ characters: [] });
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
npm test -- src/lib/storage.test.ts
```

- [ ] **Step 3: Implement `storage.ts`**

```ts
// src/lib/storage.ts
import type { Character } from '../types/character';

export const ROSTER_KEY = 'untamed_roster_v1';

export type Roster = { characters: Character[] };

export function loadRoster(): Roster {
  try {
    const raw = localStorage.getItem(ROSTER_KEY);
    if (!raw) return { characters: [] };
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.characters)) return { characters: [] };
    return parsed as Roster;
  } catch {
    return { characters: [] };
  }
}

export function saveRoster(roster: Roster): void {
  localStorage.setItem(ROSTER_KEY, JSON.stringify(roster));
}

export function addCharacter(c: Character): void {
  const r = loadRoster();
  r.characters.push(c);
  saveRoster(r);
}

export function updateCharacter(c: Character): void {
  const r = loadRoster();
  const i = r.characters.findIndex(x => x.id === c.id);
  if (i === -1) r.characters.push(c);
  else r.characters[i] = c;
  saveRoster(r);
}

export function deleteCharacter(id: string): void {
  const r = loadRoster();
  r.characters = r.characters.filter(c => c.id !== id);
  saveRoster(r);
}

export function getCharacter(id: string): Character | null {
  return loadRoster().characters.find(c => c.id === id) ?? null;
}

export function exportCharacter(c: Character): string {
  return JSON.stringify(c, null, 2);
}

export function newCharacterId(): string {
  return crypto.randomUUID();
}

export function nowIso(): string {
  return new Date().toISOString();
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npm test -- src/lib/storage.test.ts
```

- [ ] **Step 5: Commit**

```bash
git add src/lib/storage.ts src/lib/storage.test.ts
git commit -m "feat(lib): add roster localStorage CRUD"
```

## Task 3.2: useCharacter and useRoster hooks

**Files:**
- Create: `src/components/sheet/hooks/useCharacter.ts`
- Create: `src/components/sheet/hooks/useRoster.ts`
- Create: `src/components/sheet/hooks/useDerived.ts`

- [ ] **Step 1: Create `useCharacter.ts`**

```ts
// src/components/sheet/hooks/useCharacter.ts
import { useEffect, useRef, useState, useCallback } from 'preact/hooks';
import type { Character } from '../../../types/character';
import { getCharacter, updateCharacter, nowIso } from '../../../lib/storage';

const SAVE_DEBOUNCE_MS = 300;

export function useCharacter(id: string | null) {
  const [character, setCharacter] = useState<Character | null>(
    id ? getCharacter(id) : null
  );
  const saveTimer = useRef<number | null>(null);

  useEffect(() => {
    if (!character) return;
    if (saveTimer.current !== null) clearTimeout(saveTimer.current);
    saveTimer.current = window.setTimeout(() => {
      updateCharacter({ ...character, updatedAt: nowIso() });
    }, SAVE_DEBOUNCE_MS);
    return () => {
      if (saveTimer.current !== null) clearTimeout(saveTimer.current);
    };
  }, [character]);

  const update = useCallback((mutator: (c: Character) => Character) => {
    setCharacter(prev => (prev ? mutator(prev) : prev));
  }, []);

  return { character, update };
}
```

- [ ] **Step 2: Create `useRoster.ts`**

```ts
// src/components/sheet/hooks/useRoster.ts
import { useState, useCallback } from 'preact/hooks';
import { loadRoster, addCharacter, deleteCharacter as del } from '../../../lib/storage';
import type { Character } from '../../../types/character';

export function useRoster() {
  const [roster, setRoster] = useState(loadRoster());

  const refresh = useCallback(() => setRoster(loadRoster()), []);

  const add = useCallback((c: Character) => {
    addCharacter(c);
    refresh();
  }, [refresh]);

  const remove = useCallback((id: string) => {
    del(id);
    refresh();
  }, [refresh]);

  return { roster, refresh, add, remove };
}
```

- [ ] **Step 3: Create `useDerived.ts`**

```ts
// src/components/sheet/hooks/useDerived.ts
import { useMemo } from 'preact/hooks';
import type { Character, StatKey } from '../../../types/character';
import {
  computeFinalStats, statMod, maxHp, maxStamina, freeConFromHR, tierFromHR,
  availableSpecSlots, availableTalentSlots, availableStatPoints, profBonus,
} from '../../../lib/derived';
import { SKILLS } from '../../../data/skills';
import { getArmor } from '../../../data/armor';

export function useDerived(character: Character) {
  return useMemo(() => {
    const finalStats = computeFinalStats(character);
    const statMods: Record<StatKey, number> = {
      STR: statMod(finalStats.STR),
      DEX: statMod(finalStats.DEX),
      CON: statMod(finalStats.CON),
      INT: statMod(finalStats.INT),
      INS: statMod(finalStats.INS),
      CHA: statMod(finalStats.CHA),
    };
    const maxH = maxHp(finalStats.CON, character.hunterRank);
    const maxS = maxStamina(finalStats.CON);
    const ar = character.armor ? getArmor(character.armor.armorId).ar : 0;
    const skillBonus: Record<string, number> = {};
    for (const s of SKILLS) {
      const prof = character.skillProficiencies[s.id] ?? 'novice';
      skillBonus[s.id] = statMods[s.stat] + profBonus(prof);
    }
    return {
      finalStats,
      statMods,
      maxHp: maxH,
      maxStamina: maxS,
      ar,
      initiative: statMods.DEX,
      tier: tierFromHR(character.hunterRank),
      freeConFromHR: freeConFromHR(character.hunterRank),
      availableSpecSlots: availableSpecSlots(character.hunterRank),
      availableTalentSlots: availableTalentSlots(character.hunterRank),
      availableStatPoints: availableStatPoints(
        character.hunterRank,
        // Points spent = base-stat sum above the starting baseline of 18.
        Math.max(0, (Object.values(character.baseStats) as number[]).reduce((s, n) => s + n, 0) - 18)
      ),
      skillBonus,
    };
  }, [character]);
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/sheet/hooks/
git commit -m "feat(hooks): add useCharacter, useRoster, useDerived"
```

---

# Phase 4 — Sheet shell + vitals header

## Task 4.1: Shared sheet styles

**Files:**
- Create: `src/components/sheet/styles/sheet.css`

- [ ] **Step 1: Add the base stylesheet**

```css
/* src/components/sheet/styles/sheet.css */
.sheet-root {
  --forest-dark: #1a2e1a;
  --forest-green: #2d5016;
  --moss-green: #4a7c2f;
  --leaf-green: #6b9d3a;
  --amber: #d4a257;
  --earth-brown: #5c4033;
  --cream: #f5f1e8;
  --text-light: #e8e4d8;
  --hp-red: #c54a4a;
  --chill-blue: #6ba0d4;

  color: var(--text-light);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.vitals-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--forest-green);
  border: 2px solid var(--amber);
  border-radius: 8px;
  padding: 12px 16px;
  margin-bottom: 12px;
}

.tab-bar {
  display: flex;
  gap: 4px;
  border-bottom: 2px solid var(--earth-brown);
  flex-wrap: wrap;
}

.tab {
  background: var(--forest-green);
  border: 1px solid var(--earth-brown);
  border-bottom: none;
  padding: 8px 16px;
  border-radius: 6px 6px 0 0;
  cursor: pointer;
  color: var(--text-light);
  font-size: 0.9rem;
}

.tab[aria-selected='true'] {
  background: var(--moss-green);
  border-color: var(--amber);
  color: var(--amber);
  font-weight: 700;
}

.tab-panel {
  background: var(--forest-green);
  border: 2px solid var(--amber);
  border-top: none;
  border-radius: 0 8px 8px 8px;
  padding: 16px;
  min-height: 300px;
}

.btn {
  background: var(--moss-green);
  border: 1px solid var(--amber);
  color: var(--cream);
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85rem;
}
.btn:hover { background: var(--leaf-green); }
.btn-secondary { background: var(--forest-dark); }
.btn-danger { background: var(--hp-red); border-color: var(--hp-red); }

.input {
  background: var(--forest-dark);
  border: 1px solid var(--moss-green);
  color: var(--text-light);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.9rem;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sheet/styles/sheet.css
git commit -m "feat(sheet): add shared sheet stylesheet"
```

## Task 4.2: VitalsHeader component

**Files:**
- Create: `src/components/sheet/VitalsHeader.tsx`

- [ ] **Step 1: Implement the component**

```tsx
// src/components/sheet/VitalsHeader.tsx
import type { Character } from '../../types/character';
import { getRace } from '../../data/races';
import { getBackground } from '../../data/backgrounds';
import { useDerived } from './hooks/useDerived';

type Props = {
  character: Character;
  onUpdateLive: (updater: (c: Character) => Character) => void;
};

export function VitalsHeader({ character, onUpdateLive }: Props) {
  const derived = useDerived(character);
  const race = getRace(character.raceId);
  const bgs = character.backgroundIds.map(id => getBackground(id).name).join(' / ');

  const setHp = (v: number) => onUpdateLive(c => ({
    ...c,
    liveState: { ...c.liveState, currentHp: Math.max(0, Math.min(derived.maxHp, v)) },
  }));
  const setSta = (v: number) => onUpdateLive(c => ({
    ...c,
    liveState: { ...c.liveState, currentStamina: Math.max(0, Math.min(derived.maxStamina, v)) },
  }));

  const shortRest = () => onUpdateLive(c => ({
    ...c,
    liveState: { ...c.liveState, currentStamina: derived.maxStamina, exhausted: false },
  }));
  const fullHeal = () => onUpdateLive(c => ({
    ...c,
    liveState: {
      ...c.liveState,
      currentHp: derived.maxHp, currentStamina: derived.maxStamina,
      conditions: [], exhausted: false,
    },
  }));

  return (
    <header class="vitals-header">
      <div class="vitals-top">
        <div>
          <div class="v-name">{character.name || 'Unnamed Hunter'}</div>
          <div class="v-sub">{race.name}{bgs ? ` / ${bgs}` : ''}</div>
        </div>
        <div class="v-hr">HR {character.hunterRank} · Tier {derived.tier}</div>
      </div>

      <div class="vitals-grid">
        <Tracker label="Health" current={character.liveState.currentHp} max={derived.maxHp}
                 onChange={setHp} fillClass="hp" />
        <Tracker label="Stamina" current={character.liveState.currentStamina} max={derived.maxStamina}
                 onChange={setSta} fillClass="sta" />
        <MiniStat label="AR" value={derived.ar} />
        <MiniStat label="Speed" value={30} />
      </div>

      <div class="vitals-row2">
        <ConditionStrip character={character} onUpdate={onUpdateLive} />
        <div class="qref">
          <span>Init <strong>{formatBonus(derived.initiative)}</strong></span>
          <button class="btn btn-secondary" onClick={shortRest}>Short Rest</button>
          <button class="btn btn-secondary" onClick={fullHeal}>Full Heal</button>
        </div>
      </div>
    </header>
  );
}

function formatBonus(n: number): string {
  return n >= 0 ? `+${n}` : `${n}`;
}

function Tracker(props: { label: string; current: number; max: number; onChange: (v: number) => void; fillClass: string }) {
  const pct = props.max === 0 ? 0 : (props.current / props.max) * 100;
  return (
    <div class="v-tracker">
      <div class="v-label">
        <span>{props.label}</span>
        <span>
          <button class="step" onClick={() => props.onChange(props.current - 1)}>-</button>
          {props.current} / {props.max}
          <button class="step" onClick={() => props.onChange(props.current + 1)}>+</button>
        </span>
      </div>
      <div class="v-bar"><div class={`v-bar-fill ${props.fillClass}`} style={{ width: `${pct}%` }} /></div>
    </div>
  );
}

function MiniStat(props: { label: string; value: number }) {
  return (
    <div class="v-stat-mini">
      <div class="v-stat-mini-label">{props.label}</div>
      <div class="v-stat-mini-value">{props.value}</div>
    </div>
  );
}

function ConditionStrip({ character, onUpdate }: { character: Character; onUpdate: Props['onUpdateLive'] }) {
  // Implemented in Task 4.3 below — ConditionChip + add menu
  return <div class="conds">{/* see Task 4.3 */}</div>;
}
```

Append to `sheet.css`:

```css
.vitals-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; }
.v-name { color: var(--amber); font-weight: 700; font-size: 1.2rem; letter-spacing: 0.05em; }
.v-sub { color: var(--leaf-green); font-style: italic; font-size: 0.85rem; }
.v-hr { background: var(--forest-dark); border: 1px solid var(--moss-green); padding: 4px 10px; border-radius: 4px; color: var(--amber); font-weight: 700; }
.vitals-grid { display: grid; grid-template-columns: 2fr 2fr 1fr 1fr; gap: 10px; margin: 10px 0 8px; }
.v-tracker, .v-stat-mini { background: var(--forest-dark); border: 1px solid var(--moss-green); border-radius: 5px; padding: 6px 8px; }
.v-stat-mini { text-align: center; }
.v-label { display: flex; justify-content: space-between; font-size: 0.7rem; color: var(--amber); text-transform: uppercase; }
.v-bar { background: #0d1a0d; height: 7px; border-radius: 4px; overflow: hidden; margin-top: 4px; }
.v-bar-fill { height: 100%; transition: width 0.2s; }
.v-bar-fill.hp { background: var(--hp-red); }
.v-bar-fill.sta { background: var(--leaf-green); }
.v-stat-mini-label { font-size: 0.65rem; color: var(--amber); }
.v-stat-mini-value { font-size: 1.2rem; font-weight: 700; color: var(--cream); }
.vitals-row2 { display: flex; gap: 14px; align-items: center; flex-wrap: wrap; border-top: 1px solid var(--moss-green); padding-top: 8px; }
.qref { display: flex; gap: 8px; align-items: center; font-size: 0.8rem; color: var(--leaf-green); }
.step { background: transparent; border: 1px solid var(--moss-green); color: var(--cream); width: 20px; height: 20px; border-radius: 3px; cursor: pointer; }
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sheet/VitalsHeader.tsx src/components/sheet/styles/sheet.css
git commit -m "feat(sheet): add vitals header with HP/STA trackers"
```

## Task 4.3: ConditionChip + condition strip

**Files:**
- Create: `src/components/sheet/ConditionChip.tsx`
- Modify: `src/components/sheet/VitalsHeader.tsx` (replace the placeholder `ConditionStrip`)

- [ ] **Step 1: Create `ConditionChip.tsx`**

```tsx
// src/components/sheet/ConditionChip.tsx
import { getCondition } from '../../data/conditions';

type Props = {
  conditionId: string;
  onRemove?: () => void;
  title?: string;
};

export function ConditionChip({ conditionId, onRemove, title }: Props) {
  const cond = getCondition(conditionId);
  return (
    <span class={`cond cond-${cond.category}`} title={title ?? cond.description}>
      {cond.name}
      {onRemove && (
        <button class="cond-remove" onClick={onRemove} aria-label={`Remove ${cond.name}`}>×</button>
      )}
    </span>
  );
}
```

- [ ] **Step 2: Wire the condition strip into VitalsHeader**

Replace the `ConditionStrip` placeholder body with:

```tsx
function ConditionStrip({ character, onUpdate }: { character: Character; onUpdate: Props['onUpdateLive'] }) {
  const [adding, setAdding] = useState(false);

  const remove = (id: string) => onUpdate(c => ({
    ...c,
    liveState: {
      ...c.liveState,
      conditions: c.liveState.conditions.filter(x => x.conditionId !== id),
    },
  }));
  const add = (id: string) => {
    onUpdate(c => ({
      ...c,
      liveState: {
        ...c.liveState,
        conditions: [...c.liveState.conditions, { conditionId: id }],
      },
    }));
    setAdding(false);
  };

  return (
    <div class="conds">
      {character.liveState.conditions.map(c => (
        <ConditionChip key={c.conditionId} conditionId={c.conditionId} onRemove={() => remove(c.conditionId)} />
      ))}
      {adding ? (
        <select class="input" onChange={(e: any) => add(e.target.value)} autoFocus>
          <option value="">— pick a condition —</option>
          {CONDITIONS.filter(c => !character.liveState.conditions.some(lc => lc.conditionId === c.id))
            .map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
      ) : (
        <button class="cond cond-add" onClick={() => setAdding(true)}>+ add</button>
      )}
    </div>
  );
}
```

Imports to add at the top of VitalsHeader.tsx:

```tsx
import { useState } from 'preact/hooks';
import { CONDITIONS } from '../../data/conditions';
import { ConditionChip } from './ConditionChip';
```

Append to `sheet.css`:

```css
.conds { display: flex; gap: 6px; flex-wrap: wrap; flex: 1; align-items: center; }
.cond { background: var(--forest-dark); border: 1px solid var(--hp-red); color: var(--cream); padding: 3px 8px; border-radius: 12px; font-size: 0.75rem; display: inline-flex; align-items: center; gap: 4px; }
.cond.cond-elemental { border-color: var(--amber); }
.cond.cond-positional { border-color: var(--leaf-green); }
.cond.cond-control { border-color: var(--chill-blue); }
.cond-remove { background: transparent; border: 0; color: inherit; cursor: pointer; padding: 0 2px; font-size: 0.9rem; }
.cond-add { border-style: dashed; border-color: var(--moss-green); cursor: pointer; opacity: 0.7; }
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sheet/ConditionChip.tsx src/components/sheet/VitalsHeader.tsx src/components/sheet/styles/sheet.css
git commit -m "feat(sheet): add condition chips to vitals header"
```

## Task 4.4: TabNav and Sheet shell

**Files:**
- Create: `src/components/sheet/TabNav.tsx`
- Create: `src/components/sheet/Sheet.tsx`
- Create: `src/pages/character/sheet.astro`

- [ ] **Step 1: Create `TabNav.tsx`**

```tsx
// src/components/sheet/TabNav.tsx
type TabId = 'identity' | 'stats' | 'combat' | 'specs' | 'inventory' | 'crafting' | 'bio';

const TABS: { id: TabId; label: string }[] = [
  { id: 'identity', label: 'Identity' },
  { id: 'stats', label: 'Stats & Skills' },
  { id: 'combat', label: 'Combat' },
  { id: 'specs', label: 'Specs & Talents' },
  { id: 'inventory', label: 'Inventory' },
  { id: 'crafting', label: 'Crafting' },
  { id: 'bio', label: 'Bio & Notes' },
];

type Props = {
  activeTab: TabId;
  onChange: (tab: TabId) => void;
};

export function TabNav({ activeTab, onChange }: Props) {
  return (
    <nav class="tab-bar" role="tablist">
      {TABS.map(t => (
        <button
          key={t.id}
          class="tab"
          role="tab"
          aria-selected={t.id === activeTab}
          onClick={() => onChange(t.id)}
        >
          {t.label}
        </button>
      ))}
    </nav>
  );
}

export type { TabId };
```

- [ ] **Step 2: Create `Sheet.tsx`**

```tsx
// src/components/sheet/Sheet.tsx
import { useState, useEffect } from 'preact/hooks';
import { useCharacter } from './hooks/useCharacter';
import { VitalsHeader } from './VitalsHeader';
import { TabNav, type TabId } from './TabNav';
import { IdentityTab } from './tabs/IdentityTab';
import { StatsSkillsTab } from './tabs/StatsSkillsTab';
import { CombatTab } from './tabs/CombatTab';
import { SpecsTalentsTab } from './tabs/SpecsTalentsTab';
import { InventoryTab } from './tabs/InventoryTab';
import { CraftingTab } from './tabs/CraftingTab';
import { BioNotesTab } from './tabs/BioNotesTab';
import './styles/sheet.css';
import './styles/print.css';

type Props = {
  characterId: string;
};

export function Sheet({ characterId }: Props) {
  const { character, update } = useCharacter(characterId);
  const [activeTab, setActiveTab] = useState<TabId>('identity');

  if (!character) {
    return (
      <div class="sheet-root">
        <p>Character not found. <a href="/character/roster">Back to Roster</a></p>
      </div>
    );
  }

  return (
    <div class="sheet-root">
      <VitalsHeader character={character} onUpdateLive={update} />
      <TabNav activeTab={activeTab} onChange={setActiveTab} />
      <div class="tab-panel" role="tabpanel">
        {activeTab === 'identity' && <IdentityTab character={character} update={update} />}
        {activeTab === 'stats' && <StatsSkillsTab character={character} update={update} />}
        {activeTab === 'combat' && <CombatTab character={character} update={update} />}
        {activeTab === 'specs' && <SpecsTalentsTab character={character} update={update} />}
        {activeTab === 'inventory' && <InventoryTab character={character} update={update} />}
        {activeTab === 'crafting' && <CraftingTab character={character} update={update} />}
        {activeTab === 'bio' && <BioNotesTab character={character} update={update} />}
      </div>
      <div class="sheet-footer">
        <button class="btn" onClick={() => window.print()}>Print View</button>
        <a class="btn btn-secondary" href="/character/roster">Back to Roster</a>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Create stub tab components**

For each of `IdentityTab`, `StatsSkillsTab`, `CombatTab`, `SpecsTalentsTab`, `InventoryTab`, `CraftingTab`, `BioNotesTab` — create a stub file at `src/components/sheet/tabs/<Name>.tsx`:

```tsx
import type { Character } from '../../../types/character';

type Props = {
  character: Character;
  update: (updater: (c: Character) => Character) => void;
};

export function IdentityTab({ character }: Props) {
  return <div>Identity tab (Task 5.x)</div>;
}
```

Do this for all 7 tabs — they will be filled in during Phase 5.

- [ ] **Step 4: Create `src/pages/character/sheet.astro`**

```astro
---
import { Sheet } from '../../components/sheet/Sheet';

const url = new URL(Astro.request.url);
const characterId = url.searchParams.get('id') ?? '';
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Character Sheet — Untamed</title>
  </head>
  <body>
    <nav class="nav">
      <div class="container">
        <a href="/" class="logo">UNTAMED</a>
        <div class="nav-links">
          <a href="/rules">Rules</a>
          <a href="/quick-reference">Quick Reference</a>
          <a href="/character" class="active">Characters</a>
          <a href="/bestiary">Bestiary</a>
          <a href="/gm-guide">GM Guide</a>
        </div>
      </div>
    </nav>
    <main>
      <div class="container">
        <Sheet client:load characterId={characterId} />
      </div>
    </main>
    <style>
      /* Reuse the nav/container styles from other character pages */
      body { background: #1a2e1a; color: #e8e4d8; font-family: -apple-system, sans-serif; margin: 0; min-height: 100vh; }
      .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
      .nav { background: #2d5016; border-bottom: 2px solid #d4a257; padding: 1rem 0; position: sticky; top: 0; z-index: 100; }
      .nav .container { display: flex; justify-content: space-between; align-items: center; }
      .logo { font-size: 1.5rem; font-weight: 900; color: #d4a257; text-decoration: none; letter-spacing: 0.2rem; }
      .nav-links { display: flex; gap: 2rem; }
      .nav-links a { color: #f5f1e8; text-decoration: none; font-weight: 500; }
      .nav-links a:hover, .nav-links a.active { color: #d4a257; }
      main { padding: 1rem 0 4rem; }
    </style>
  </body>
</html>
```

- [ ] **Step 5: Create the print stylesheet stub**

```css
/* src/components/sheet/styles/print.css */
@media print {
  /* Filled in during Phase 9 */
}
```

- [ ] **Step 6: Verify build**

```bash
npm run build
```

Expected: no errors.

- [ ] **Step 7: Commit**

```bash
git add src/components/sheet/TabNav.tsx src/components/sheet/Sheet.tsx src/components/sheet/tabs/ src/components/sheet/styles/print.css src/pages/character/sheet.astro
git commit -m "feat(sheet): scaffold tabs, sheet shell, and astro page"
```

---

# Phase 5 — Tab implementations

## Task 5.1: IdentityTab

**Files:**
- Modify: `src/components/sheet/tabs/IdentityTab.tsx`

- [ ] **Step 1: Implement IdentityTab**

```tsx
// src/components/sheet/tabs/IdentityTab.tsx
import type { Character } from '../../../types/character';
import { RACES, getRace } from '../../../data/races';
import { BACKGROUNDS, getBackground } from '../../../data/backgrounds';

type Props = {
  character: Character;
  update: (updater: (c: Character) => Character) => void;
};

export function IdentityTab({ character, update }: Props) {
  const setName = (e: any) => update(c => ({ ...c, name: e.target.value }));
  const setPronouns = (e: any) => update(c => ({ ...c, pronouns: e.target.value }));
  const setHR = (e: any) => update(c => ({ ...c, hunterRank: parseInt(e.target.value, 10) || 0 }));
  const setCxp = (e: any) => update(c => ({ ...c, cxp: parseInt(e.target.value, 10) || 0 }));
  const setRace = (e: any) => update(c => ({ ...c, raceId: e.target.value, lineageId: undefined }));
  const setLineage = (e: any) => update(c => ({ ...c, lineageId: e.target.value || undefined }));

  const addBackground = (id: string) => update(c => ({ ...c, backgroundIds: [...c.backgroundIds, id] }));
  const removeBackground = (id: string) => update(c => ({
    ...c, backgroundIds: c.backgroundIds.filter(b => b !== id)
  }));

  const onPortraitFile = (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 256 * 1024) {
      alert('Portrait too large (max 256 KB). Please resize.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      update(c => ({ ...c, portraitUrl: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  const race = getRace(character.raceId);

  return (
    <div class="identity-tab">
      <section class="tab-section">
        <h4>Identity</h4>
        <div class="form-grid">
          <label>Name <input class="input" value={character.name} onInput={setName} /></label>
          <label>Pronouns <input class="input" value={character.pronouns ?? ''} onInput={setPronouns} /></label>
          <label>Hunter Rank <input class="input" type="number" min="0" value={character.hunterRank} onInput={setHR} /></label>
          <label>CXP <input class="input" type="number" min="0" value={character.cxp} onInput={setCxp} /></label>
          <label>Portrait <input class="input" type="file" accept="image/*" onChange={onPortraitFile} /></label>
        </div>
        {character.portraitUrl && (
          <img src={character.portraitUrl} alt="" class="portrait-preview" />
        )}
      </section>

      <section class="tab-section">
        <h4>Race & Lineage</h4>
        <label>Race
          <select class="input" value={character.raceId} onChange={setRace}>
            {RACES.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
          </select>
        </label>
        {race.lineages.length > 0 && (
          <label>Lineage
            <select class="input" value={character.lineageId ?? ''} onChange={setLineage}>
              <option value="">— pick a lineage —</option>
              {race.lineages.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
            </select>
          </label>
        )}
        <p class="muted">{race.racialTrait.name}: {race.racialTrait.description}</p>
      </section>

      <section class="tab-section">
        <h4>Backgrounds</h4>
        <div class="bg-list">
          {character.backgroundIds.map(id => {
            const bg = getBackground(id);
            return (
              <div class="bg-row" key={id}>
                <strong>{bg.name}</strong>
                <span class="muted">{bg.description}</span>
                <button class="btn btn-danger" onClick={() => removeBackground(id)}>Remove</button>
              </div>
            );
          })}
        </div>
        {character.backgroundIds.length < 2 && (
          <select class="input" value="" onChange={(e: any) => e.target.value && addBackground(e.target.value)}>
            <option value="">+ Add background</option>
            {BACKGROUNDS.filter(b => !character.backgroundIds.includes(b.id))
              .map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
          </select>
        )}
      </section>
    </div>
  );
}
```

Append to `sheet.css`:

```css
.tab-section { margin-bottom: 18px; }
.tab-section h4 { color: var(--amber); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid var(--earth-brown); padding-bottom: 4px; margin-bottom: 8px; }
.form-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
.form-grid label { display: flex; flex-direction: column; gap: 4px; font-size: 0.8rem; color: var(--leaf-green); }
.muted { color: var(--leaf-green); font-style: italic; font-size: 0.85rem; }
.portrait-preview { max-width: 128px; max-height: 128px; border-radius: 8px; border: 1px solid var(--moss-green); margin-top: 10px; }
.bg-row { display: flex; gap: 8px; align-items: center; padding: 6px 8px; background: var(--forest-dark); border-radius: 4px; margin-bottom: 4px; }
.bg-row strong { color: var(--cream); }
.bg-row .muted { flex: 1; }
```

- [ ] **Step 2: Manual smoke test**

```bash
npm run dev
```

Open `http://localhost:4321/character/sheet` with a test character id (we'll add one via roster in Phase 7 — for now just verify the tab renders without crashing for a non-existent id, showing the "not found" message).

- [ ] **Step 3: Commit**

```bash
git add src/components/sheet/tabs/IdentityTab.tsx src/components/sheet/styles/sheet.css
git commit -m "feat(sheet): implement IdentityTab"
```

## Task 5.2: StatsSkillsTab with dice rolls

**Files:**
- Modify: `src/components/sheet/tabs/StatsSkillsTab.tsx`
- Create: `src/components/sheet/DiceRoller.tsx`

- [ ] **Step 1: Implement `DiceRoller.tsx`**

```tsx
// src/components/sheet/DiceRoller.tsx
import { useState } from 'preact/hooks';
import { rollD20, isCrit, isFumble, type D20Roll } from '../../lib/dice';

type Props = {
  label: string;
  modifier: number;
  onRoll?: (result: D20Roll) => void;
};

export function DiceRoller({ label, modifier, onRoll }: Props) {
  const [last, setLast] = useState<D20Roll | null>(null);

  const click = () => {
    const r = rollD20(modifier);
    setLast(r);
    onRoll?.(r);
  };

  return (
    <span class="dice-roller">
      <button class="btn" onClick={click} title={`Roll ${label}: d20 + ${modifier}`}>🎲</button>
      {last && (
        <span class={`roll-result ${isCrit(last) ? 'crit' : ''} ${isFumble(last) ? 'fumble' : ''}`}>
          {last.total} <small>({last.d20}{modifier >= 0 ? `+${modifier}` : modifier})</small>
        </span>
      )}
    </span>
  );
}
```

Append to `sheet.css`:

```css
.dice-roller { display: inline-flex; gap: 6px; align-items: center; }
.roll-result { color: var(--cream); font-weight: 700; }
.roll-result.crit { color: var(--amber); }
.roll-result.fumble { color: var(--hp-red); }
.roll-result small { opacity: 0.7; font-weight: normal; }
```

- [ ] **Step 2: Implement `StatsSkillsTab.tsx`**

```tsx
// src/components/sheet/tabs/StatsSkillsTab.tsx
import type { Character, StatKey } from '../../../types/character';
import { STATS } from '../../../types/character';
import { SKILLS_BY_STAT } from '../../../data/skills';
import { useDerived } from '../hooks/useDerived';
import { DiceRoller } from '../DiceRoller';

type Props = {
  character: Character;
  update: (updater: (c: Character) => Character) => void;
};

export function StatsSkillsTab({ character, update }: Props) {
  const derived = useDerived(character);

  const setBase = (stat: StatKey, value: number) => update(c => ({
    ...c, baseStats: { ...c.baseStats, [stat]: value },
  }));

  const setProf = (skillId: string, prof: 'novice' | 'trained' | 'master') => update(c => ({
    ...c, skillProficiencies: { ...c.skillProficiencies, [skillId]: prof },
  }));

  return (
    <div class="stats-skills-tab">
      <section class="tab-section">
        <h4>Core Stats</h4>
        <div class="stat-grid">
          {STATS.map(stat => (
            <div class="stat-card" key={stat}>
              <div class="stat-card-label">{stat}</div>
              <div class="stat-card-edit">
                <button class="step" onClick={() => setBase(stat, Math.max(1, character.baseStats[stat] - 1))}>-</button>
                <input
                  class="input stat-score"
                  type="number" min="1" max="20"
                  value={character.baseStats[stat]}
                  onInput={(e: any) => setBase(stat, parseInt(e.target.value, 10) || 1)}
                />
                <button class="step" onClick={() => setBase(stat, character.baseStats[stat] + 1)}>+</button>
              </div>
              <div class="stat-card-final">Final: <strong>{derived.finalStats[stat]}</strong> ({derived.statMods[stat] >= 0 ? '+' : ''}{derived.statMods[stat]})</div>
            </div>
          ))}
        </div>
      </section>

      <section class="tab-section">
        <h4>Skills</h4>
        {STATS.map(stat => {
          if (stat === 'CON') {
            return (
              <div class="skill-group" key={stat}>
                <h5>CON — Endurance</h5>
                <p class="muted">CON has no skill list. Roll CON + mod for endurance, breath, marching, etc.</p>
                <DiceRoller label="CON check" modifier={derived.statMods.CON} />
              </div>
            );
          }
          const skills = SKILLS_BY_STAT[stat];
          if (!skills?.length) return null;
          return (
            <div class="skill-group" key={stat}>
              <h5>{stat} skills</h5>
              <div class="skills-list">
                {skills.map(s => {
                  const prof = character.skillProficiencies[s.id] ?? 'novice';
                  return (
                    <div class="skill-row" key={s.id}>
                      <span class="skill-name">{s.name}</span>
                      <select class="input" value={prof} onChange={(e: any) => setProf(s.id, e.target.value)}>
                        <option value="novice">Novice +0</option>
                        <option value="trained">Trained +2</option>
                        <option value="master">Master +4</option>
                      </select>
                      <span class="skill-bonus">{derived.skillBonus[s.id] >= 0 ? '+' : ''}{derived.skillBonus[s.id]}</span>
                      <DiceRoller label={s.name} modifier={derived.skillBonus[s.id]} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
```

Append to `sheet.css`:

```css
.stat-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; }
.stat-card { background: var(--forest-dark); border: 1px solid var(--moss-green); border-radius: 6px; padding: 8px; text-align: center; }
.stat-card-label { font-size: 0.75rem; color: var(--amber); font-weight: 700; }
.stat-card-edit { display: flex; gap: 4px; justify-content: center; align-items: center; margin: 6px 0; }
.stat-score { width: 50px; text-align: center; }
.stat-card-final { font-size: 0.75rem; color: var(--leaf-green); }
.skill-group { margin-top: 14px; }
.skill-group h5 { color: var(--amber); font-size: 0.85rem; margin-bottom: 6px; }
.skills-list { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
.skill-row { display: grid; grid-template-columns: 1fr auto auto auto; gap: 8px; align-items: center; padding: 4px 8px; background: var(--forest-dark); border-radius: 4px; }
.skill-name { color: var(--cream); font-size: 0.85rem; }
.skill-bonus { color: var(--amber); font-weight: 700; min-width: 28px; text-align: right; }
@media (max-width: 768px) { .stat-grid { grid-template-columns: repeat(3, 1fr); } .skills-list { grid-template-columns: 1fr; } }
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sheet/DiceRoller.tsx src/components/sheet/tabs/StatsSkillsTab.tsx src/components/sheet/styles/sheet.css
git commit -m "feat(sheet): implement StatsSkillsTab and DiceRoller"
```

## Task 5.3: CombatTab

**Files:**
- Modify: `src/components/sheet/tabs/CombatTab.tsx`

- [ ] **Step 1: Implement CombatTab**

```tsx
// src/components/sheet/tabs/CombatTab.tsx
import type { Character } from '../../../types/character';
import { WEAPONS, getWeapon } from '../../../data/weapons';
import { useDerived } from '../hooks/useDerived';
import { DiceRoller } from '../DiceRoller';
import { rollDamage } from '../../../lib/dice';
import { useState } from 'preact/hooks';

type Props = {
  character: Character;
  update: (updater: (c: Character) => Character) => void;
};

export function CombatTab({ character, update }: Props) {
  const derived = useDerived(character);
  const [lastDamage, setLastDamage] = useState<string | null>(null);

  const addWeapon = (weaponId: string) => update(c => ({
    ...c,
    weapons: [...c.weapons, { weaponId, huntsCompleted: 0, isPrimary: c.weapons.length === 0 }],
    primaryWeaponId: c.weapons.length === 0 ? weaponId : c.primaryWeaponId,
  }));
  const removeWeapon = (weaponId: string) => update(c => ({
    ...c, weapons: c.weapons.filter(w => w.weaponId !== weaponId),
  }));
  const bumpHunts = (weaponId: string, delta: number) => update(c => ({
    ...c,
    weapons: c.weapons.map(w => w.weaponId === weaponId
      ? { ...w, huntsCompleted: Math.max(0, w.huntsCompleted + delta) }
      : w),
  }));
  const makePrimary = (weaponId: string) => update(c => ({
    ...c,
    weapons: c.weapons.map(w => ({ ...w, isPrimary: w.weaponId === weaponId })),
    primaryWeaponId: weaponId,
  }));

  const weaponProf = (hunts: number): 'novice' | 'trained' | 'master' =>
    hunts >= 10 ? 'master' : hunts >= 5 ? 'trained' : 'novice';

  const rollWeaponDamage = (notation: string) => {
    const r = rollDamage(notation, 0);
    setLastDamage(`${notation}: ${r.total} [${r.rolls.join(', ')}]`);
  };

  return (
    <div class="combat-tab">
      <section class="tab-section">
        <h4>Weapons</h4>
        {character.weapons.map(w => {
          const wep = getWeapon(w.weaponId);
          const prof = weaponProf(w.huntsCompleted);
          const profBonus = prof === 'master' ? 4 : prof === 'trained' ? 2 : 0;
          const toHit = derived.statMods[wep.primaryStat] + profBonus;
          return (
            <div class="weapon-card" key={w.weaponId}>
              <div class="weapon-head">
                <strong>{wep.name}</strong>
                <span class="muted">Tier {wep.tier} · {prof} (+{profBonus})</span>
                {w.isPrimary
                  ? <span class="badge">Primary</span>
                  : <button class="btn btn-secondary" onClick={() => makePrimary(w.weaponId)}>Set Primary</button>}
              </div>
              <div class="weapon-body">
                <div>Hunts:
                  <button class="step" onClick={() => bumpHunts(w.weaponId, -1)}>-</button>
                  <strong>{w.huntsCompleted}</strong>
                  <button class="step" onClick={() => bumpHunts(w.weaponId, 1)}>+</button>
                </div>
                <div class="weapon-rolls">
                  <DiceRoller label="Attack" modifier={toHit} />
                  <button class="btn" onClick={() => rollWeaponDamage(wep.damageDice)}>Roll Damage ({wep.damageDice})</button>
                </div>
                {wep.techniques.length > 0 && (
                  <details class="techniques">
                    <summary>{wep.techniques.length} techniques</summary>
                    <ul>
                      {wep.techniques.map(t => (
                        <li key={t.name}><strong>{t.name}</strong> ({t.staminaCost} STA) — {t.description}</li>
                      ))}
                    </ul>
                  </details>
                )}
                <button class="btn btn-danger" onClick={() => removeWeapon(w.weaponId)}>Remove</button>
              </div>
            </div>
          );
        })}
        <select class="input" value="" onChange={(e: any) => e.target.value && addWeapon(e.target.value)}>
          <option value="">+ Add weapon</option>
          {WEAPONS.filter(w => !character.weapons.some(cw => cw.weaponId === w.id))
            .map(w => <option key={w.id} value={w.id}>{w.name} (T{w.tier})</option>)}
        </select>
        {lastDamage && <p class="last-damage">{lastDamage}</p>}
      </section>

      <section class="tab-section">
        <h4>Armor &amp; AR</h4>
        <div>AR: <strong>{derived.ar}</strong></div>
        {character.armor && (
          <div class="muted">Wearing: {character.armor.armorId} (T{character.armor.tier} {character.armor.type})</div>
        )}
        <p class="muted">Set armor on the Inventory tab.</p>
      </section>

      <section class="tab-section">
        <h4>Defense Reactions</h4>
        <div class="defense-row">
          <DefenseCard name="Dodge" desc="d20 + DEX, success negates damage." modifier={derived.statMods.DEX} />
          <DefenseCard name="Block" desc="d20 + STR/CON, success halves damage (then reduced by AR)." modifier={derived.statMods.STR} />
          <DefenseCard name="Parry" desc="d20 + DEX/STR, success deflects and may riposte." modifier={derived.statMods.DEX} />
        </div>
      </section>

      <ActionEconomySection character={character} update={update} maxStamina={derived.maxStamina} />
    </div>
  );
}

function DefenseCard(props: { name: string; desc: string; modifier: number }) {
  return (
    <div class="defense-card">
      <strong>{props.name}</strong>
      <p class="muted">{props.desc}</p>
      <DiceRoller label={props.name} modifier={props.modifier} />
    </div>
  );
}

function ActionEconomySection({ character, update, maxStamina }: { character: Character; update: Props['update']; maxStamina: number }) {
  const ae = character.liveState.actionEconomy;
  const toggle = (key: keyof typeof ae) => update(c => ({
    ...c,
    liveState: { ...c.liveState, actionEconomy: { ...c.liveState.actionEconomy, [key]: !c.liveState.actionEconomy[key] } },
  }));
  const endTurn = () => update(c => {
    const ls = c.liveState;
    let sta = ls.currentStamina;
    let exhausted = ls.exhausted;
    if (ls.actionEconomy.breathingTurn) {
      sta = Math.min(maxStamina, sta + 4);
    }
    if (exhausted && !ls.actionEconomy.actionUsed && !ls.actionEconomy.fastActionUsed) {
      sta = Math.min(maxStamina, sta + 4);
      exhausted = false;
    } else if (sta === 0) {
      exhausted = true;
    }
    return {
      ...c,
      liveState: {
        ...ls,
        currentStamina: sta,
        exhausted,
        actionEconomy: { actionUsed: false, fastActionUsed: false, reactionUsed: false, breathingTurn: false },
      },
    };
  });
  return (
    <section class="tab-section">
      <h4>Action Economy (this turn)</h4>
      <div class="ae-row">
        <Pill on={ae.actionUsed} onToggle={() => toggle('actionUsed')}>Action</Pill>
        <Pill on={ae.fastActionUsed} onToggle={() => toggle('fastActionUsed')}>Fast Action</Pill>
        <Pill on={ae.reactionUsed} onToggle={() => toggle('reactionUsed')}>Reaction</Pill>
        <Pill on={ae.breathingTurn} onToggle={() => toggle('breathingTurn')}>Breathing Turn</Pill>
      </div>
      <button class="btn" onClick={endTurn}>End Turn</button>
      {character.liveState.exhausted && <p class="warning">⚠ Exhausted</p>}
    </section>
  );
}

function Pill(props: { on: boolean; onToggle: () => void; children: any }) {
  return <button class={`pill ${props.on ? 'on' : ''}`} onClick={props.onToggle}>{props.children}</button>;
}
```

Append to `sheet.css`:

```css
.weapon-card { background: var(--forest-dark); border: 1px solid var(--moss-green); border-radius: 6px; padding: 10px; margin-bottom: 8px; }
.weapon-head { display: flex; gap: 10px; align-items: center; }
.badge { background: var(--amber); color: var(--forest-dark); font-size: 0.7rem; padding: 2px 6px; border-radius: 4px; font-weight: 700; }
.weapon-body { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; margin-top: 6px; }
.weapon-rolls { display: flex; gap: 8px; }
.techniques summary { cursor: pointer; color: var(--leaf-green); font-size: 0.85rem; }
.techniques ul { padding-left: 20px; margin-top: 4px; }
.defense-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
.defense-card { background: var(--forest-dark); border: 1px solid var(--moss-green); border-radius: 6px; padding: 10px; }
.ae-row { display: flex; gap: 8px; margin-bottom: 8px; flex-wrap: wrap; }
.pill { background: var(--forest-dark); border: 1px solid var(--moss-green); color: var(--text-light); padding: 6px 12px; border-radius: 16px; cursor: pointer; font-size: 0.85rem; }
.pill.on { background: var(--moss-green); border-color: var(--amber); color: var(--amber); }
.warning { color: var(--hp-red); font-weight: 700; }
.last-damage { color: var(--amber); margin-top: 6px; }
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sheet/tabs/CombatTab.tsx src/components/sheet/styles/sheet.css
git commit -m "feat(sheet): implement CombatTab with weapons, defenses, action economy"
```

## Task 5.4: SpecsTalentsTab

**Files:**
- Modify: `src/components/sheet/tabs/SpecsTalentsTab.tsx`

- [ ] **Step 1: Implement SpecsTalentsTab**

```tsx
// src/components/sheet/tabs/SpecsTalentsTab.tsx
import type { Character } from '../../../types/character';
import { SPECIALIZATIONS, getSpec } from '../../../data/specializations';
import { TALENTS, TALENTS_BY_CATEGORY, getTalent, type TalentCategory } from '../../../data/talents';
import { useDerived } from '../hooks/useDerived';

type Props = {
  character: Character;
  update: (updater: (c: Character) => Character) => void;
};

export function SpecsTalentsTab({ character, update }: Props) {
  const derived = useDerived(character);

  const addSpec = (specId: string) => update(c => ({
    ...c, specializations: [...c.specializations, { specId, rankUnlocked: 1 }],
  }));
  const setRank = (specId: string, rank: 1 | 2 | 3) => update(c => ({
    ...c,
    specializations: c.specializations.map(s => s.specId === specId ? { ...s, rankUnlocked: rank } : s),
  }));
  const removeSpec = (specId: string) => update(c => ({
    ...c, specializations: c.specializations.filter(s => s.specId !== specId),
  }));

  const addTalent = (talentId: string) => update(c => ({
    ...c, talentIds: [...c.talentIds, talentId],
  }));
  const removeTalent = (talentId: string) => update(c => ({
    ...c, talentIds: c.talentIds.filter(t => t !== talentId),
  }));

  const usedSpecSlots = character.specializations.length;
  const usedTalentSlots = character.talentIds.length;

  return (
    <div class="specs-talents-tab">
      <section class="tab-section">
        <h4>Specializations ({usedSpecSlots} / {derived.availableSpecSlots})</h4>
        {character.specializations.map(se => {
          const s = getSpec(se.specId);
          return (
            <div class="spec-card" key={s.id}>
              <div class="spec-head">
                <span class="spec-icon">{s.icon}</span>
                <strong>{s.name}</strong>
                <span class="muted">— {s.role}</span>
                <button class="btn btn-danger" onClick={() => removeSpec(s.id)}>Remove</button>
              </div>
              <div class="rank-checks">
                {s.ranks.map(r => (
                  <label key={r.rank}>
                    <input
                      type="checkbox"
                      checked={se.rankUnlocked >= r.rank}
                      onChange={(e: any) => {
                        const v = (e.target.checked ? r.rank : (r.rank - 1)) as 1 | 2 | 3;
                        setRank(s.id, Math.max(1, v) as 1 | 2 | 3);
                      }}
                    />
                    <span class="rank-label">{r.label}</span> — <strong>{r.name}</strong>: {r.description}
                  </label>
                ))}
              </div>
            </div>
          );
        })}
        {usedSpecSlots < derived.availableSpecSlots && (
          <select class="input" value="" onChange={(e: any) => e.target.value && addSpec(e.target.value)}>
            <option value="">+ Add specialization</option>
            {SPECIALIZATIONS.filter(s => !character.specializations.some(cs => cs.specId === s.id))
              .map(s => <option key={s.id} value={s.id}>{s.name} — {s.role}</option>)}
          </select>
        )}
      </section>

      <section class="tab-section">
        <h4>Talents ({usedTalentSlots} / {derived.availableTalentSlots})</h4>
        <div class="talent-list">
          {character.talentIds.map(id => {
            const t = getTalent(id);
            return (
              <div class="talent-card" key={id}>
                <strong>{t.name}</strong>
                <span class="badge">{t.category}</span>
                <p class="muted">{t.description}</p>
                <button class="btn btn-danger" onClick={() => removeTalent(id)}>Remove</button>
              </div>
            );
          })}
        </div>
        {usedTalentSlots < derived.availableTalentSlots && (
          <details class="talent-picker">
            <summary class="btn">+ Add talent</summary>
            {(Object.keys(TALENTS_BY_CATEGORY) as TalentCategory[]).map(cat => (
              <div class="talent-group" key={cat}>
                <h5>{cat}</h5>
                {TALENTS_BY_CATEGORY[cat].filter(t => !character.talentIds.includes(t.id)).map(t => (
                  <button class="talent-option" key={t.id} onClick={() => addTalent(t.id)}>
                    <strong>{t.name}</strong>: {t.description}
                  </button>
                ))}
              </div>
            ))}
          </details>
        )}
      </section>
    </div>
  );
}
```

Append to `sheet.css`:

```css
.spec-card, .talent-card { background: var(--forest-dark); border: 1px solid var(--moss-green); border-radius: 6px; padding: 10px; margin-bottom: 8px; }
.spec-head { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
.spec-icon { font-size: 1.2rem; }
.rank-checks { display: flex; flex-direction: column; gap: 6px; margin-top: 6px; }
.rank-checks label { display: flex; gap: 8px; align-items: flex-start; font-size: 0.85rem; }
.rank-label { color: var(--amber); font-weight: 700; }
.talent-list { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.talent-card { display: flex; flex-direction: column; gap: 4px; }
.talent-picker summary { display: inline-block; margin-bottom: 8px; }
.talent-group { margin-bottom: 10px; }
.talent-group h5 { color: var(--amber); margin-bottom: 4px; }
.talent-option { display: block; width: 100%; background: var(--forest-green); border: 1px solid var(--moss-green); color: var(--text-light); padding: 6px 8px; border-radius: 4px; text-align: left; cursor: pointer; margin-bottom: 4px; font-size: 0.85rem; }
.talent-option:hover { background: var(--moss-green); }
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sheet/tabs/SpecsTalentsTab.tsx src/components/sheet/styles/sheet.css
git commit -m "feat(sheet): implement SpecsTalentsTab"
```

## Task 5.5: InventoryTab

**Files:**
- Modify: `src/components/sheet/tabs/InventoryTab.tsx`

- [ ] **Step 1: Implement InventoryTab**

```tsx
// src/components/sheet/tabs/InventoryTab.tsx
import type { Character, InventoryItem } from '../../../types/character';
import { ARMORS, getArmor } from '../../../data/armor';
import { TOOLS } from '../../../data/tools';

type Props = {
  character: Character;
  update: (updater: (c: Character) => Character) => void;
};

export function InventoryTab({ character, update }: Props) {
  const setSlot = (which: 'gearSlots' | 'packSlots', idx: number, item: InventoryItem | null) => update(c => {
    const arr = [...c[which]];
    arr[idx] = item;
    return { ...c, [which]: arr };
  });

  const setArmor = (armorId: string) => update(c => {
    if (!armorId) return { ...c, armor: null };
    const a = getArmor(armorId);
    return { ...c, armor: { armorId, tier: a.tier, type: a.type } };
  });

  const toggleTool = (toolId: string) => update(c => ({
    ...c,
    tools: c.tools.includes(toolId) ? c.tools.filter(t => t !== toolId) : [...c.tools, toolId],
  }));

  return (
    <div class="inventory-tab">
      <section class="tab-section">
        <h4>Armor</h4>
        <select class="input" value={character.armor?.armorId ?? ''} onChange={(e: any) => setArmor(e.target.value)}>
          <option value="">— No armor —</option>
          {ARMORS.map(a => <option key={a.id} value={a.id}>{a.name} ({a.type} T{a.tier}) AR {a.ar}</option>)}
        </select>
      </section>

      <section class="tab-section">
        <h4>Gear Slots (6)</h4>
        <SlotGrid slots={character.gearSlots} onChange={(i, item) => setSlot('gearSlots', i, item)} />
      </section>

      <section class="tab-section">
        <h4>Pack Slots (10)</h4>
        <SlotGrid slots={character.packSlots} onChange={(i, item) => setSlot('packSlots', i, item)} />
      </section>

      <section class="tab-section">
        <h4>Tools</h4>
        <div class="tools-grid">
          {TOOLS.map(t => (
            <label key={t.id} class="tool-row">
              <input type="checkbox" checked={character.tools.includes(t.id)} onChange={() => toggleTool(t.id)} />
              <strong>{t.name}</strong>
              <span class="muted">— {t.category} — {t.description}</span>
            </label>
          ))}
        </div>
      </section>
    </div>
  );
}

function SlotGrid({ slots, onChange }: { slots: (InventoryItem | null)[]; onChange: (idx: number, item: InventoryItem | null) => void }) {
  return (
    <div class="slot-grid">
      {slots.map((item, i) => (
        <SlotRow key={i} item={item} onChange={item => onChange(i, item)} index={i + 1} />
      ))}
    </div>
  );
}

function SlotRow({ item, onChange, index }: { item: InventoryItem | null; onChange: (i: InventoryItem | null) => void; index: number }) {
  if (!item) {
    return (
      <div class="slot empty">
        <span class="slot-idx">{index}.</span>
        <button class="btn btn-secondary" onClick={() => onChange({ name: 'New item', type: 'misc', qty: 1 })}>+ Empty</button>
      </div>
    );
  }
  return (
    <div class="slot filled">
      <span class="slot-idx">{index}.</span>
      <input class="input" value={item.name} onInput={(e: any) => onChange({ ...item, name: e.target.value })} />
      <input class="input slot-qty" type="number" min="1" value={item.qty ?? 1} onInput={(e: any) => onChange({ ...item, qty: parseInt(e.target.value, 10) || 1 })} />
      <select class="input" value={item.type} onChange={(e: any) => onChange({ ...item, type: e.target.value })}>
        <option value="misc">Misc</option>
        <option value="weapon">Weapon</option>
        <option value="armor">Armor</option>
        <option value="tool">Tool</option>
        <option value="consumable">Consumable</option>
        <option value="monster-part">Monster Part</option>
      </select>
      <button class="btn btn-danger" onClick={() => onChange(null)}>×</button>
    </div>
  );
}
```

Append to `sheet.css`:

```css
.slot-grid { display: flex; flex-direction: column; gap: 4px; }
.slot { display: flex; gap: 8px; align-items: center; padding: 6px; background: var(--forest-dark); border-radius: 4px; }
.slot-idx { color: var(--amber); min-width: 24px; font-weight: 700; }
.slot.empty { opacity: 0.6; }
.slot-qty { width: 60px; }
.slot.filled .input { flex: 1; }
.tools-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
.tool-row { display: flex; gap: 6px; align-items: baseline; font-size: 0.85rem; padding: 4px; }
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sheet/tabs/InventoryTab.tsx src/components/sheet/styles/sheet.css
git commit -m "feat(sheet): implement InventoryTab"
```

## Task 5.6: CraftingTab

**Files:**
- Modify: `src/components/sheet/tabs/CraftingTab.tsx`

- [ ] **Step 1: Implement CraftingTab**

```tsx
// src/components/sheet/tabs/CraftingTab.tsx
import type { Character } from '../../../types/character';
import { RECIPES } from '../../../data/recipes';
import { useState } from 'preact/hooks';

type Props = {
  character: Character;
  update: (updater: (c: Character) => Character) => void;
};

export function CraftingTab({ character, update }: Props) {
  const toggleRecipe = (recipeId: string) => update(c => ({
    ...c,
    knownRecipes: c.knownRecipes.includes(recipeId)
      ? c.knownRecipes.filter(r => r !== recipeId)
      : [...c.knownRecipes, recipeId],
  }));

  const addPart = (partId: string, monsterId: string, qty: number) => update(c => ({
    ...c,
    monsterParts: [...c.monsterParts, { partId, monsterId, qty }],
  }));
  const updatePart = (idx: number, qty: number) => update(c => ({
    ...c,
    monsterParts: c.monsterParts.map((p, i) => i === idx ? { ...p, qty } : p),
  }));
  const removePart = (idx: number) => update(c => ({
    ...c,
    monsterParts: c.monsterParts.filter((_, i) => i !== idx),
  }));

  const [draftPart, setDraftPart] = useState({ partId: '', monsterId: '', qty: 1 });

  return (
    <div class="crafting-tab">
      <section class="tab-section">
        <h4>Known Recipes</h4>
        <div class="recipe-list">
          {RECIPES.map(r => (
            <label key={r.id} class="recipe-row">
              <input type="checkbox" checked={character.knownRecipes.includes(r.id)} onChange={() => toggleRecipe(r.id)} />
              <strong>{r.name}</strong>
              <span class="badge">{r.kind}</span>
              <span class="muted">— {r.components.map(c => `${c.qty}× ${c.name}`).join(' + ')}</span>
            </label>
          ))}
        </div>
      </section>

      <section class="tab-section">
        <h4>Monster Parts</h4>
        <div class="part-add">
          <input class="input" placeholder="Part name" value={draftPart.partId} onInput={(e: any) => setDraftPart({ ...draftPart, partId: e.target.value })} />
          <input class="input" placeholder="From monster" value={draftPart.monsterId} onInput={(e: any) => setDraftPart({ ...draftPart, monsterId: e.target.value })} />
          <input class="input" type="number" min="1" value={draftPart.qty} onInput={(e: any) => setDraftPart({ ...draftPart, qty: parseInt(e.target.value, 10) || 1 })} />
          <button class="btn" onClick={() => {
            if (!draftPart.partId) return;
            addPart(draftPart.partId, draftPart.monsterId, draftPart.qty);
            setDraftPart({ partId: '', monsterId: '', qty: 1 });
          }}>Add</button>
        </div>
        <div class="part-list">
          {character.monsterParts.map((p, i) => (
            <div class="part-row" key={i}>
              <strong>{p.partId}</strong> <span class="muted">from {p.monsterId}</span>
              <input class="input" type="number" min="0" value={p.qty} onInput={(e: any) => updatePart(i, parseInt(e.target.value, 10) || 0)} />
              <button class="btn btn-danger" onClick={() => removePart(i)}>×</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
```

Append to `sheet.css`:

```css
.recipe-list, .part-list { display: flex; flex-direction: column; gap: 4px; }
.recipe-row, .part-row { display: flex; gap: 8px; align-items: center; padding: 4px 8px; background: var(--forest-dark); border-radius: 4px; font-size: 0.85rem; }
.part-add { display: flex; gap: 6px; margin-bottom: 8px; }
.part-add .input { flex: 1; }
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sheet/tabs/CraftingTab.tsx src/components/sheet/styles/sheet.css
git commit -m "feat(sheet): implement CraftingTab"
```

## Task 5.7: BioNotesTab

**Files:**
- Modify: `src/components/sheet/tabs/BioNotesTab.tsx`

- [ ] **Step 1: Implement BioNotesTab**

```tsx
// src/components/sheet/tabs/BioNotesTab.tsx
import type { Character } from '../../../types/character';
import { useState } from 'preact/hooks';
import { nowIso } from '../../../lib/storage';

type Props = {
  character: Character;
  update: (updater: (c: Character) => Character) => void;
};

export function BioNotesTab({ character, update }: Props) {
  const setField = (field: 'personality' | 'motivations' | 'partyConnections', value: string) => update(c => ({
    ...c, bio: { ...c.bio, [field]: value },
  }));
  const [entry, setEntry] = useState('');
  const addEntry = () => {
    if (!entry.trim()) return;
    update(c => ({ ...c, bio: { ...c.bio, journal: [...c.bio.journal, { date: nowIso(), text: entry }] } }));
    setEntry('');
  };
  const removeEntry = (idx: number) => update(c => ({
    ...c, bio: { ...c.bio, journal: c.bio.journal.filter((_, i) => i !== idx) },
  }));

  return (
    <div class="bio-tab">
      <section class="tab-section">
        <h4>Personality</h4>
        <textarea class="input bio-text" value={character.bio.personality ?? ''} onInput={(e: any) => setField('personality', e.target.value)} />
      </section>
      <section class="tab-section">
        <h4>Motivations</h4>
        <textarea class="input bio-text" value={character.bio.motivations ?? ''} onInput={(e: any) => setField('motivations', e.target.value)} />
      </section>
      <section class="tab-section">
        <h4>Party Connections</h4>
        <textarea class="input bio-text" value={character.bio.partyConnections ?? ''} onInput={(e: any) => setField('partyConnections', e.target.value)} />
      </section>
      <section class="tab-section">
        <h4>Journal</h4>
        <div class="journal-entry">
          <textarea class="input bio-text" placeholder="What happened on the hunt?" value={entry} onInput={(e: any) => setEntry(e.target.value)} />
          <button class="btn" onClick={addEntry}>Add Entry</button>
        </div>
        <ul class="journal">
          {character.bio.journal.slice().reverse().map((e, i) => {
            const realIdx = character.bio.journal.length - 1 - i;
            return (
              <li key={realIdx}>
                <time>{new Date(e.date).toLocaleString()}</time>
                <p>{e.text}</p>
                <button class="btn btn-danger" onClick={() => removeEntry(realIdx)}>×</button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
```

Append to `sheet.css`:

```css
.bio-text { width: 100%; min-height: 80px; resize: vertical; font-family: inherit; }
.journal-entry { display: flex; flex-direction: column; gap: 6px; margin-bottom: 12px; }
.journal { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 8px; }
.journal li { background: var(--forest-dark); border: 1px solid var(--moss-green); border-radius: 4px; padding: 8px; position: relative; }
.journal time { color: var(--amber); font-size: 0.75rem; }
.journal p { margin: 4px 0 0; }
.journal .btn-danger { position: absolute; top: 6px; right: 6px; }
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sheet/tabs/BioNotesTab.tsx src/components/sheet/styles/sheet.css
git commit -m "feat(sheet): implement BioNotesTab"
```

---

# Phase 6 — Creation wizard

## Task 6.1: Wizard shell + step navigation

**Files:**
- Create: `src/components/sheet/wizard/Wizard.tsx`

- [ ] **Step 1: Implement the wizard shell**

```tsx
// src/components/sheet/wizard/Wizard.tsx
import { useState } from 'preact/hooks';
import type { Character } from '../../../types/character';
import { newCharacterId, nowIso, addCharacter } from '../../../lib/storage';
import { StepIdentity } from './StepIdentity';
import { StepRace } from './StepRace';
import { StepBackground } from './StepBackground';
import { StepStats } from './StepStats';
import { StepWeapon } from './StepWeapon';
import { StepReview } from './StepReview';

const STEPS = ['Identity', 'Race', 'Background', 'Stats', 'Weapon', 'Review'] as const;

function emptyCharacter(): Character {
  return {
    schemaVersion: 1,
    id: newCharacterId(),
    createdAt: nowIso(),
    updatedAt: nowIso(),
    name: '',
    raceId: '',
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
      currentHp: 0, currentStamina: 0,
      conditions: [],
      actionEconomy: { actionUsed: false, fastActionUsed: false, reactionUsed: false, breathingTurn: false },
      exhausted: false,
    },
    bio: { journal: [] },
  };
}

type Props = {
  onClose: () => void;
};

export function Wizard({ onClose }: Props) {
  const [stepIdx, setStepIdx] = useState(0);
  const [draft, setDraft] = useState<Character>(emptyCharacter());

  const next = () => setStepIdx(i => Math.min(STEPS.length - 1, i + 1));
  const back = () => setStepIdx(i => Math.max(0, i - 1));

  const finish = () => {
    // Set primary weapon (Trained at creation)
    const finalChar: Character = {
      ...draft,
      updatedAt: nowIso(),
      liveState: {
        ...draft.liveState,
        currentHp: draft.baseStats.CON * 8 + draft.hunterRank,
        currentStamina: Math.max(1, 6 + Math.floor(draft.baseStats.CON / 2)),
      },
    };
    addCharacter(finalChar);
    window.location.href = `/character/sheet?id=${finalChar.id}`;
  };

  const step = STEPS[stepIdx];
  return (
    <div class="wizard-modal">
      <div class="wizard-progress">
        {STEPS.map((label, i) => (
          <div key={label} class={`wizard-step ${i === stepIdx ? 'active' : i < stepIdx ? 'done' : ''}`}>
            <span class="step-num">{i + 1}</span>
            <span class="step-label">{label}</span>
          </div>
        ))}
      </div>
      <div class="wizard-body">
        {step === 'Identity'   && <StepIdentity draft={draft} setDraft={setDraft} />}
        {step === 'Race'       && <StepRace draft={draft} setDraft={setDraft} />}
        {step === 'Background' && <StepBackground draft={draft} setDraft={setDraft} />}
        {step === 'Stats'      && <StepStats draft={draft} setDraft={setDraft} />}
        {step === 'Weapon'     && <StepWeapon draft={draft} setDraft={setDraft} />}
        {step === 'Review'     && <StepReview draft={draft} />}
      </div>
      <div class="wizard-nav">
        <button class="btn btn-secondary" onClick={onClose}>Cancel</button>
        <button class="btn btn-secondary" onClick={back} disabled={stepIdx === 0}>Back</button>
        {stepIdx < STEPS.length - 1 ? (
          <button class="btn" onClick={next} disabled={!isStepValid(step, draft)}>Next</button>
        ) : (
          <button class="btn" onClick={finish} disabled={!isStepValid(step, draft)}>Create Character</button>
        )}
      </div>
    </div>
  );
}

function isStepValid(step: typeof STEPS[number], draft: Character): boolean {
  switch (step) {
    case 'Identity':   return !!draft.name.trim();
    case 'Race':       return !!draft.raceId;
    case 'Background': return draft.backgroundIds.length > 0;
    case 'Stats':      return statSum(draft.baseStats) === 18;
    case 'Weapon':     return draft.weapons.length > 0;
    case 'Review':     return true;
  }
}

function statSum(s: Character['baseStats']): number {
  return s.STR + s.DEX + s.CON + s.INT + s.INS + s.CHA;
}
```

Append to `sheet.css`:

```css
.wizard-modal { background: var(--forest-green); border: 2px solid var(--amber); border-radius: 8px; padding: 16px; max-width: 800px; margin: 20px auto; }
.wizard-progress { display: flex; gap: 4px; margin-bottom: 16px; }
.wizard-step { flex: 1; padding: 6px; background: var(--forest-dark); border-radius: 4px; text-align: center; opacity: 0.5; font-size: 0.85rem; }
.wizard-step.active { background: var(--moss-green); border: 1px solid var(--amber); opacity: 1; color: var(--amber); }
.wizard-step.done { opacity: 0.8; }
.step-num { display: inline-block; width: 22px; height: 22px; line-height: 22px; background: var(--moss-green); border-radius: 50%; margin-right: 6px; font-weight: 700; }
.wizard-step.active .step-num { background: var(--amber); color: var(--forest-dark); }
.wizard-body { min-height: 300px; margin-bottom: 16px; }
.wizard-nav { display: flex; gap: 8px; justify-content: flex-end; }
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sheet/wizard/Wizard.tsx src/components/sheet/styles/sheet.css
git commit -m "feat(wizard): scaffold creation wizard shell"
```

## Task 6.2: Wizard steps 1-3 (Identity, Race, Background)

**Files:**
- Create: `src/components/sheet/wizard/StepIdentity.tsx`
- Create: `src/components/sheet/wizard/StepRace.tsx`
- Create: `src/components/sheet/wizard/StepBackground.tsx`

- [ ] **Step 1: StepIdentity**

```tsx
// src/components/sheet/wizard/StepIdentity.tsx
import type { Character } from '../../../types/character';

type Props = {
  draft: Character;
  setDraft: (c: Character) => void;
};

export function StepIdentity({ draft, setDraft }: Props) {
  return (
    <div>
      <h3>Step 1 — Identity</h3>
      <p class="muted">Your hunter's name and basics. You can change all of this later.</p>
      <label>Name <input class="input" value={draft.name} onInput={(e: any) => setDraft({ ...draft, name: e.target.value })} /></label>
      <label>Pronouns (optional) <input class="input" value={draft.pronouns ?? ''} onInput={(e: any) => setDraft({ ...draft, pronouns: e.target.value })} /></label>
    </div>
  );
}
```

- [ ] **Step 2: StepRace**

```tsx
// src/components/sheet/wizard/StepRace.tsx
import type { Character } from '../../../types/character';
import { RACES, getRace } from '../../../data/races';

type Props = {
  draft: Character;
  setDraft: (c: Character) => void;
};

export function StepRace({ draft, setDraft }: Props) {
  const race = draft.raceId ? getRace(draft.raceId) : null;
  return (
    <div class="wizard-step-grid">
      <div>
        <h3>Step 2 — Race & Lineage</h3>
        <div class="race-cards">
          {RACES.map(r => (
            <button key={r.id} class={`race-pick ${r.id === draft.raceId ? 'selected' : ''}`}
                    onClick={() => setDraft({ ...draft, raceId: r.id, lineageId: undefined })}>
              <strong>{r.name}</strong>
              <p>{r.summary}</p>
            </button>
          ))}
        </div>
        {race && race.lineages.length > 0 && (
          <div class="lineage-picker">
            <h4>Lineage</h4>
            {race.lineages.map(l => (
              <button key={l.id} class={`race-pick small ${l.id === draft.lineageId ? 'selected' : ''}`}
                      onClick={() => setDraft({ ...draft, lineageId: l.id })}>
                <strong>{l.name}</strong>
                <p>{l.description}</p>
              </button>
            ))}
          </div>
        )}
      </div>
      {race && (
        <aside class="wizard-side">
          <h4>{race.name}</h4>
          <p>{race.racialTrait.name}: {race.racialTrait.description}</p>
        </aside>
      )}
    </div>
  );
}
```

- [ ] **Step 3: StepBackground**

```tsx
// src/components/sheet/wizard/StepBackground.tsx
import type { Character } from '../../../types/character';
import { BACKGROUNDS, getBackground } from '../../../data/backgrounds';
import { useState } from 'preact/hooks';

type Props = {
  draft: Character;
  setDraft: (c: Character) => void;
};

export function StepBackground({ draft, setDraft }: Props) {
  const [filter, setFilter] = useState('');
  const filtered = BACKGROUNDS.filter(b => b.name.toLowerCase().includes(filter.toLowerCase()));

  const toggle = (id: string) => {
    const has = draft.backgroundIds.includes(id);
    if (has) setDraft({ ...draft, backgroundIds: draft.backgroundIds.filter(b => b !== id) });
    else if (draft.backgroundIds.length < 2) setDraft({ ...draft, backgroundIds: [...draft.backgroundIds, id] });
  };

  return (
    <div>
      <h3>Step 3 — Background</h3>
      <p class="muted">Pick one (or up to two) backgrounds. They grant stat and skill bonuses.</p>
      <input class="input" placeholder="Search backgrounds…" value={filter} onInput={(e: any) => setFilter(e.target.value)} />
      <div class="bg-grid">
        {filtered.map(b => (
          <button key={b.id} class={`race-pick ${draft.backgroundIds.includes(b.id) ? 'selected' : ''}`} onClick={() => toggle(b.id)}>
            <strong>{b.name}</strong>
            <p>{b.description}</p>
          </button>
        ))}
      </div>
      <div class="selected-bg">
        Selected: {draft.backgroundIds.map(id => getBackground(id).name).join(', ') || 'None'}
      </div>
    </div>
  );
}
```

Append to `sheet.css`:

```css
.wizard-step-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 16px; }
.wizard-side { background: var(--forest-dark); border: 1px solid var(--moss-green); border-radius: 6px; padding: 12px; }
.race-cards, .bg-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 8px; }
.race-pick { background: var(--forest-dark); border: 2px solid var(--moss-green); color: var(--text-light); padding: 10px; border-radius: 6px; cursor: pointer; text-align: left; }
.race-pick:hover { border-color: var(--leaf-green); }
.race-pick.selected { border-color: var(--amber); background: var(--moss-green); }
.race-pick strong { color: var(--amber); display: block; margin-bottom: 4px; }
.race-pick.small { padding: 6px 10px; }
.lineage-picker { margin-top: 12px; }
.selected-bg { margin-top: 10px; color: var(--leaf-green); font-style: italic; }
```

- [ ] **Step 4: Commit**

```bash
git add src/components/sheet/wizard/
git commit -m "feat(wizard): steps 1-3 (identity, race, background)"
```

## Task 6.3: Wizard steps 4-6 (Stats, Weapon, Review)

**Files:**
- Create: `src/components/sheet/wizard/StepStats.tsx`
- Create: `src/components/sheet/wizard/StepWeapon.tsx`
- Create: `src/components/sheet/wizard/StepReview.tsx`

- [ ] **Step 1: StepStats**

```tsx
// src/components/sheet/wizard/StepStats.tsx
import type { Character, StatKey } from '../../../types/character';
import { STATS } from '../../../types/character';
import { statMod, maxHp, maxStamina, computeFinalStats } from '../../../lib/derived';

type Props = {
  draft: Character;
  setDraft: (c: Character) => void;
};

const TOTAL = 18;

export function StepStats({ draft, setDraft }: Props) {
  const sum = STATS.reduce((s, k) => s + draft.baseStats[k], 0);
  const set = (stat: StatKey, value: number) => {
    const v = Math.max(1, value);
    setDraft({ ...draft, baseStats: { ...draft.baseStats, [stat]: v } });
  };

  const finalStats = draft.raceId
    ? computeFinalStats(draft)
    : { ...draft.baseStats };

  return (
    <div class="wizard-step-grid">
      <div>
        <h3>Step 4 — Distribute Stats</h3>
        <p class="muted">Allocate 18 points across 6 stats. Each stat starts at 1 minimum.</p>
        <p class={sum === TOTAL ? 'muted' : 'warning'}>
          Used: <strong>{sum}</strong> / {TOTAL}
        </p>
        <div class="wizard-stat-grid">
          {STATS.map(s => (
            <div class="wizard-stat" key={s}>
              <div class="stat-card-label">{s}</div>
              <div class="stat-card-edit">
                <button class="step" onClick={() => set(s, draft.baseStats[s] - 1)}>-</button>
                <span class="stat-score">{draft.baseStats[s]}</span>
                <button class="step" onClick={() => set(s, draft.baseStats[s] + 1)} disabled={sum >= TOTAL}>+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <aside class="wizard-side">
        <h4>Preview</h4>
        <ul>
          {STATS.map(s => (
            <li key={s}>{s}: <strong>{finalStats[s]}</strong> ({statMod(finalStats[s]) >= 0 ? '+' : ''}{statMod(finalStats[s])})</li>
          ))}
        </ul>
        <p>HP: <strong>{maxHp(finalStats.CON, 0)}</strong></p>
        <p>Stamina: <strong>{maxStamina(finalStats.CON)}</strong></p>
      </aside>
    </div>
  );
}
```

- [ ] **Step 2: StepWeapon**

```tsx
// src/components/sheet/wizard/StepWeapon.tsx
import type { Character } from '../../../types/character';
import { WEAPONS } from '../../../data/weapons';

type Props = {
  draft: Character;
  setDraft: (c: Character) => void;
};

export function StepWeapon({ draft, setDraft }: Props) {
  const choose = (id: string) => setDraft({
    ...draft,
    weapons: [{ weaponId: id, huntsCompleted: 5, isPrimary: true }],  // Trained at start (5 hunts === Trained per rules)
    primaryWeaponId: id,
  });
  const selected = draft.weapons[0]?.weaponId;
  return (
    <div>
      <h3>Step 5 — Starting Weapon</h3>
      <p class="muted">Choose one Tier 1 weapon — you start Trained (+2) with it.</p>
      <div class="weapon-grid">
        {WEAPONS.map(w => (
          <button key={w.id}
                  class={`race-pick ${selected === w.id ? 'selected' : ''} ${w.tier > 1 ? 'locked' : ''}`}
                  disabled={w.tier > 1}
                  onClick={() => choose(w.id)}>
            <strong>{w.name} <span class="muted">(T{w.tier})</span></strong>
            <p>{w.description}</p>
            <p class="muted">Best: {w.bestWith?.join(', ') ?? '—'}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
```

**Note on the +5 hunts starter value:** the rules say creation gives "Trained (+2) in one weapon of your choice" and the hunts→prof table says 5 hunts = Trained. Seeding `huntsCompleted: 5` makes the derived weapon proficiency render as Trained immediately. This is one valid interpretation; if your design preference is to track hunts strictly from session play (with a separate "starter trained" flag), refactor the `WeaponEntry` type to add a `bonusProficiency?: Proficiency` field before completing this task and use that flag in the Combat tab's `weaponProf` helper.

- [ ] **Step 3: StepReview**

```tsx
// src/components/sheet/wizard/StepReview.tsx
import type { Character } from '../../../types/character';
import { getRace } from '../../../data/races';
import { getBackground } from '../../../data/backgrounds';
import { getWeapon } from '../../../data/weapons';
import { computeFinalStats, maxHp, maxStamina, statMod } from '../../../lib/derived';

type Props = { draft: Character };

export function StepReview({ draft }: Props) {
  const final = computeFinalStats(draft);
  const race = getRace(draft.raceId);
  const bgs = draft.backgroundIds.map(b => getBackground(b).name).join(', ');
  const weapon = draft.weapons[0] ? getWeapon(draft.weapons[0].weaponId) : null;
  return (
    <div>
      <h3>Step 6 — Review</h3>
      <ul class="review-list">
        <li><strong>Name:</strong> {draft.name}</li>
        <li><strong>Race:</strong> {race.name}{draft.lineageId ? ` (${race.lineages.find(l => l.id === draft.lineageId)?.name})` : ''}</li>
        <li><strong>Backgrounds:</strong> {bgs}</li>
        <li><strong>Stats:</strong> {(['STR','DEX','CON','INT','INS','CHA'] as const).map(s => `${s} ${final[s]} (${statMod(final[s]) >= 0 ? '+' : ''}${statMod(final[s])})`).join(' · ')}</li>
        <li><strong>Starting Weapon:</strong> {weapon?.name} (Trained)</li>
        <li><strong>HP:</strong> {maxHp(final.CON, 0)} · <strong>Stamina:</strong> {maxStamina(final.CON)}</li>
      </ul>
      <p class="muted">Click "Create Character" below to save and head to the sheet.</p>
    </div>
  );
}
```

Append to `sheet.css`:

```css
.wizard-stat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
.wizard-stat { background: var(--forest-dark); border: 1px solid var(--moss-green); border-radius: 6px; padding: 8px; text-align: center; }
.weapon-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; }
.race-pick.locked { opacity: 0.4; cursor: not-allowed; }
.review-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 6px; }
.review-list li { background: var(--forest-dark); padding: 8px; border-radius: 4px; }
```

- [ ] **Step 4: Commit**

```bash
git add src/components/sheet/wizard/
git commit -m "feat(wizard): steps 4-6 (stats, weapon, review)"
```

---

# Phase 7 — Roster page

## Task 7.1: Roster component + page

**Files:**
- Create: `src/components/sheet/roster/Roster.tsx`
- Create: `src/pages/character/roster.astro`

- [ ] **Step 1: Implement Roster.tsx**

```tsx
// src/components/sheet/roster/Roster.tsx
import { useState } from 'preact/hooks';
import { useRoster } from '../hooks/useRoster';
import { Wizard } from '../wizard/Wizard';
import { exportCharacter, addCharacter, deleteCharacter, newCharacterId, nowIso } from '../../../lib/storage';
import { validateCharacter, migrateToCurrent } from '../../../lib/schema';
import { getRace } from '../../../data/races';
import { getBackground } from '../../../data/backgrounds';
import type { Character } from '../../../types/character';

export function Roster() {
  const { roster, refresh } = useRoster();
  const [showWizard, setShowWizard] = useState(false);

  const onExport = (c: Character) => {
    const blob = new Blob([exportCharacter(c)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${c.name || 'character'}-${c.id.slice(0, 8)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const onImport = async (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      const migrated = migrateToCurrent(parsed) ?? (validateCharacter(parsed).ok ? parsed : null);
      if (!migrated) { alert('Invalid character file.'); return; }
      // Give a fresh id to avoid collisions
      const fresh: Character = { ...migrated, id: newCharacterId(), updatedAt: nowIso() };
      addCharacter(fresh);
      refresh();
    } catch (err) {
      alert(`Import failed: ${err}`);
    }
    e.target.value = '';
  };

  const onDelete = (c: Character) => {
    if (!confirm(`Delete ${c.name}? This cannot be undone.`)) return;
    deleteCharacter(c.id);
    refresh();
  };

  const onDuplicate = (c: Character) => {
    const copy: Character = {
      ...c,
      id: newCharacterId(),
      name: `${c.name} (copy)`,
      createdAt: nowIso(),
      updatedAt: nowIso(),
    };
    addCharacter(copy);
    refresh();
  };

  if (showWizard) return <Wizard onClose={() => { setShowWizard(false); refresh(); }} />;

  return (
    <div class="sheet-root roster">
      <header class="roster-header">
        <h2>Your Hunters</h2>
        <div class="roster-actions">
          <button class="btn" onClick={() => setShowWizard(true)}>New Character</button>
          <label class="btn btn-secondary">
            Import JSON
            <input type="file" accept=".json" onChange={onImport} style="display:none" />
          </label>
        </div>
      </header>
      {roster.characters.length === 0 && (
        <p class="muted">No hunters yet. Click "New Character" to create your first.</p>
      )}
      <div class="roster-grid">
        {roster.characters.map(c => (
          <div class="roster-card" key={c.id}>
            {c.portraitUrl && <img src={c.portraitUrl} alt="" class="roster-portrait" />}
            <h3>{c.name || 'Unnamed Hunter'}</h3>
            <p class="muted">
              {c.raceId ? getRace(c.raceId).name : '—'}
              {c.backgroundIds[0] ? ` · ${getBackground(c.backgroundIds[0]).name}` : ''}
            </p>
            <p>HR {c.hunterRank}</p>
            <div class="roster-card-actions">
              <a class="btn" href={`/character/sheet?id=${c.id}`}>Open</a>
              <button class="btn btn-secondary" onClick={() => onExport(c)}>Export</button>
              <button class="btn btn-secondary" onClick={() => onDuplicate(c)}>Duplicate</button>
              <button class="btn btn-danger" onClick={() => onDelete(c)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

Append to `sheet.css`:

```css
.roster-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.roster-actions { display: flex; gap: 8px; }
.roster-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 12px; }
.roster-card { background: var(--forest-green); border: 1px solid var(--amber); border-radius: 8px; padding: 12px; }
.roster-portrait { width: 64px; height: 64px; border-radius: 50%; object-fit: cover; margin-bottom: 8px; }
.roster-card h3 { color: var(--amber); margin-bottom: 4px; }
.roster-card-actions { display: flex; gap: 4px; flex-wrap: wrap; margin-top: 8px; }
.sheet-footer { display: flex; gap: 8px; margin-top: 16px; }
```

- [ ] **Step 2: Create `src/pages/character/roster.astro`**

```astro
---
import { Roster } from '../../components/sheet/roster/Roster';
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Hunter Roster — Untamed</title>
  </head>
  <body>
    <nav class="nav">
      <div class="container">
        <a href="/" class="logo">UNTAMED</a>
        <div class="nav-links">
          <a href="/rules">Rules</a>
          <a href="/quick-reference">Quick Reference</a>
          <a href="/character" class="active">Characters</a>
          <a href="/bestiary">Bestiary</a>
          <a href="/gm-guide">GM Guide</a>
        </div>
      </div>
    </nav>
    <main>
      <div class="container">
        <Roster client:load />
      </div>
    </main>
    <style>
      body { background: #1a2e1a; color: #e8e4d8; font-family: -apple-system, sans-serif; margin: 0; min-height: 100vh; }
      .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
      .nav { background: #2d5016; border-bottom: 2px solid #d4a257; padding: 1rem 0; position: sticky; top: 0; z-index: 100; }
      .nav .container { display: flex; justify-content: space-between; align-items: center; }
      .logo { font-size: 1.5rem; font-weight: 900; color: #d4a257; text-decoration: none; letter-spacing: 0.2rem; }
      .nav-links { display: flex; gap: 2rem; }
      .nav-links a { color: #f5f1e8; text-decoration: none; }
      .nav-links a:hover, .nav-links a.active { color: #d4a257; }
      main { padding: 1rem 0 4rem; }
    </style>
  </body>
</html>
```

- [ ] **Step 3: Add roster link to `/character` page**

Modify `src/pages/character.astro` near the top of the content (just under the breadcrumb), add a prominent CTA:

```astro
<div class="roster-cta">
  <a class="btn-link" href="/character/roster">📋 Your Hunters (Roster)</a>
  <a class="btn-link" href="/character/sheet">+ Open Character Sheet</a>
</div>
```

Add styles inline within the page style block:

```css
.roster-cta { display: flex; gap: 12px; margin-bottom: 24px; }
.btn-link { background: var(--moss-green, #4a7c2f); border: 1px solid var(--amber, #d4a257); color: var(--cream, #f5f1e8); padding: 8px 16px; border-radius: 4px; text-decoration: none; }
.btn-link:hover { background: var(--leaf-green, #6b9d3a); }
```

- [ ] **Step 4: Manual smoke test**

```bash
npm run dev
```

Visit `/character/roster`. Create a character through the wizard. Verify it appears on the roster, opens correctly on the sheet, and can be exported / re-imported (delete original, import the JSON, confirm it shows up).

- [ ] **Step 5: Commit**

```bash
git add src/components/sheet/roster/ src/pages/character/roster.astro src/pages/character.astro
git commit -m "feat(roster): add roster page with create, import, export, duplicate, delete"
```

---

# Phase 8 — Level-up flow

## Task 8.1: LevelUpModal + milestone detection

**Files:**
- Create: `src/components/sheet/LevelUpModal.tsx`
- Create: `src/lib/levelup.ts`
- Create: `src/lib/levelup.test.ts`
- Modify: `src/components/sheet/tabs/IdentityTab.tsx` (add "Level Up" button)

- [ ] **Step 1: Write failing tests for milestone detection**

```ts
// src/lib/levelup.test.ts
import { describe, it, expect } from 'vitest';
import { milestonesAt } from './levelup';

describe('milestonesAt', () => {
  it('returns empty for HR 0', () => {
    expect(milestonesAt(0)).toEqual([]);
  });
  it('flags HP recalc every HR', () => {
    expect(milestonesAt(1)).toContainEqual({ kind: 'hp-recalc', hr: 1 });
  });
  it('flags stat points every 4 HR', () => {
    expect(milestonesAt(4)).toContainEqual({ kind: 'stat-points', hr: 4, points: 2 });
    expect(milestonesAt(8)).toContainEqual({ kind: 'stat-points', hr: 8, points: 2 });
  });
  it('flags talent + free CON every 5 HR', () => {
    expect(milestonesAt(5)).toContainEqual({ kind: 'free-con', hr: 5 });
    expect(milestonesAt(5)).toContainEqual({ kind: 'talent', hr: 5 });
  });
  it('flags spec every 10 HR', () => {
    expect(milestonesAt(10)).toContainEqual({ kind: 'spec', hr: 10 });
  });
  it('flags tier on band boundaries', () => {
    expect(milestonesAt(5)).toContainEqual({ kind: 'tier', hr: 5, tier: 2 });
    expect(milestonesAt(10)).toContainEqual({ kind: 'tier', hr: 10, tier: 3 });
    expect(milestonesAt(26)).toContainEqual({ kind: 'tier', hr: 26, tier: 6 });
  });
});
```

- [ ] **Step 2: Implement `levelup.ts`**

```ts
// src/lib/levelup.ts
export type Milestone =
  | { kind: 'hp-recalc'; hr: number }
  | { kind: 'stat-points'; hr: number; points: number }
  | { kind: 'free-con'; hr: number }
  | { kind: 'talent'; hr: number }
  | { kind: 'spec'; hr: number }
  | { kind: 'tier'; hr: number; tier: number };

const TIER_BOUNDARIES = new Map<number, number>([[5, 2], [10, 3], [15, 4], [20, 5], [26, 6]]);

export function milestonesAt(hr: number): Milestone[] {
  if (hr <= 0) return [];
  const out: Milestone[] = [{ kind: 'hp-recalc', hr }];
  if (hr % 4 === 0) out.push({ kind: 'stat-points', hr, points: 2 });
  if (hr % 5 === 0) {
    out.push({ kind: 'free-con', hr });
    out.push({ kind: 'talent', hr });
  }
  if (hr % 10 === 0) out.push({ kind: 'spec', hr });
  if (TIER_BOUNDARIES.has(hr)) out.push({ kind: 'tier', hr, tier: TIER_BOUNDARIES.get(hr)! });
  return out;
}

export function milestonesBetween(fromHr: number, toHr: number): Milestone[] {
  const out: Milestone[] = [];
  for (let hr = fromHr + 1; hr <= toHr; hr++) out.push(...milestonesAt(hr));
  return out;
}
```

- [ ] **Step 3: Run tests to verify they pass**

```bash
npm test -- src/lib/levelup.test.ts
```

- [ ] **Step 4: Implement `LevelUpModal.tsx`**

```tsx
// src/components/sheet/LevelUpModal.tsx
import type { Character } from '../../types/character';
import { useState } from 'preact/hooks';
import { milestonesBetween, type Milestone } from '../../lib/levelup';

type Props = {
  character: Character;
  fromHr: number;
  toHr: number;
  onClose: () => void;
  onUpdate: (updater: (c: Character) => Character) => void;
};

const MAX_CASCADE = 5;

export function LevelUpModal({ character, fromHr, toHr, onClose, onUpdate }: Props) {
  const all = milestonesBetween(fromHr, toHr);
  const [acknowledged, setAcknowledged] = useState(false);

  // Group highlights: stat points, talents, specs, tiers, free CON
  const statPointMilestones = all.filter((m): m is Extract<Milestone, { kind: 'stat-points' }> => m.kind === 'stat-points');
  const talentMilestones = all.filter(m => m.kind === 'talent');
  const specMilestones = all.filter(m => m.kind === 'spec');
  const tierMilestones = all.filter((m): m is Extract<Milestone, { kind: 'tier' }> => m.kind === 'tier');
  const freeConMilestones = all.filter(m => m.kind === 'free-con');

  return (
    <div class="levelup-modal">
      <h3>Level Up: HR {fromHr} → HR {toHr}</h3>
      {tierMilestones.map(m => (
        <p key={`tier-${m.hr}`} class="milestone tier">🎖 Tier {m.tier} unlocked at HR {m.hr}.</p>
      ))}
      {freeConMilestones.length > 0 && (
        <p class="milestone con">+{freeConMilestones.length} free CON applied (recalculates automatically).</p>
      )}
      {statPointMilestones.length > 0 && (
        <p class="milestone points">+{statPointMilestones.reduce((s, m) => s + m.points, 0)} stat points to spend on the Stats tab.</p>
      )}
      {talentMilestones.length > 0 && (
        <p class="milestone talent">+{talentMilestones.length} Talent slot(s) — pick on Specs &amp; Talents tab.</p>
      )}
      {specMilestones.length > 0 && (
        <p class="milestone spec">+{specMilestones.length} Specialization slot(s) — pick on Specs &amp; Talents tab.</p>
      )}
      <button class="btn" onClick={() => { setAcknowledged(true); onClose(); }}>Got it</button>
    </div>
  );
}
```

Append to `sheet.css`:

```css
.levelup-modal { background: var(--forest-green); border: 2px solid var(--amber); border-radius: 8px; padding: 16px; max-width: 500px; margin: 20px auto; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 200; box-shadow: 0 0 24px rgba(0,0,0,0.6); }
.milestone { padding: 6px 10px; background: var(--forest-dark); border-radius: 4px; margin: 6px 0; }
.milestone.tier { border-left: 4px solid var(--amber); }
.milestone.talent, .milestone.spec { border-left: 4px solid var(--leaf-green); }
```

- [ ] **Step 5: Add "Level Up" button to IdentityTab**

Modify `src/components/sheet/tabs/IdentityTab.tsx` — add `LevelUpModal` import and state:

```tsx
import { LevelUpModal } from '../LevelUpModal';
import { useState } from 'preact/hooks';

// inside component:
const [levelUp, setLevelUp] = useState<{ from: number; to: number } | null>(null);

const onLevelUp = () => {
  const from = character.hunterRank;
  update(c => ({ ...c, hunterRank: c.hunterRank + 1 }));
  setLevelUp({ from, to: from + 1 });
};
```

Add the button next to the HR input:

```tsx
<button class="btn" onClick={onLevelUp}>Level Up</button>
{levelUp && (
  <LevelUpModal
    character={character}
    fromHr={levelUp.from}
    toHr={levelUp.to}
    onClose={() => setLevelUp(null)}
    onUpdate={update}
  />
)}
```

- [ ] **Step 6: Commit**

```bash
git add src/lib/levelup.ts src/lib/levelup.test.ts src/components/sheet/LevelUpModal.tsx src/components/sheet/tabs/IdentityTab.tsx src/components/sheet/styles/sheet.css
git commit -m "feat(sheet): add level-up flow with milestone prompts"
```

---

# Phase 9 — Print stylesheet

## Task 9.1: Print styles

**Files:**
- Modify: `src/components/sheet/styles/print.css`
- Modify: `src/components/sheet/Sheet.tsx` (in print, render all tabs)

- [ ] **Step 1: Add a `printMode` prop to Sheet**

Add to `Sheet.tsx`:

```tsx
import { useState, useEffect } from 'preact/hooks';

// inside Sheet():
const [printMode, setPrintMode] = useState(false);

useEffect(() => {
  const beforePrint = () => setPrintMode(true);
  const afterPrint = () => setPrintMode(false);
  window.addEventListener('beforeprint', beforePrint);
  window.addEventListener('afterprint', afterPrint);
  return () => {
    window.removeEventListener('beforeprint', beforePrint);
    window.removeEventListener('afterprint', afterPrint);
  };
}, []);
```

In the JSX, when `printMode` is true, render all 7 tab components in sequence instead of just the active one:

```tsx
{printMode ? (
  <div class="print-all">
    <IdentityTab character={character} update={update} />
    <StatsSkillsTab character={character} update={update} />
    <CombatTab character={character} update={update} />
    <SpecsTalentsTab character={character} update={update} />
    <InventoryTab character={character} update={update} />
    <CraftingTab character={character} update={update} />
    <BioNotesTab character={character} update={update} />
  </div>
) : (
  <div class="tab-panel" role="tabpanel">
    {/* existing active-tab rendering */}
  </div>
)}
```

- [ ] **Step 2: Implement print stylesheet**

Replace `src/components/sheet/styles/print.css`:

```css
@media print {
  /* Reset to ink-economy palette */
  body { background: white !important; color: black !important; }
  .nav, .sheet-footer, .tab-bar, .roster-cta, button, .btn, .step,
  .dice-roller, .cond-remove, .cond-add, .ae-row, .btn-danger,
  .roll-result, .roster-actions { display: none !important; }

  .sheet-root { color: black; }
  .vitals-header { position: static; background: white; border: 2px solid black; }
  .v-name, .v-hr, .stat-card-label, .skill-bonus, .badge { color: black; }
  .v-bar { display: none; }   /* current bars not useful in print */
  .v-tracker .v-label span:last-child { display: inline; }

  .tab-panel { background: white; border: 1px solid black; min-height: 0; padding: 8px; }

  .print-all > * { page-break-inside: avoid; margin-bottom: 12px; }
  .print-all { display: block; }

  /* Two-column stats + skills */
  .stat-grid { grid-template-columns: repeat(6, 1fr); }
  .skills-list { grid-template-columns: 1fr 1fr; }

  /* Hide journal entries that are empty */
  .journal li:empty { display: none; }

  /* Page breaks between major sections */
  .combat-tab, .specs-talents-tab, .inventory-tab, .bio-tab {
    page-break-before: always;
  }
}
```

- [ ] **Step 3: Manual print preview**

```bash
npm run dev
```

Open a character sheet in Chrome, hit ⌘P. Verify:
- All tabs render in one document.
- Layout fits letter paper (≤ 3 pages typical).
- Buttons, dice rollers, and bars are hidden.
- Forest-theme palette is replaced with white/black.

- [ ] **Step 4: Commit**

```bash
git add src/components/sheet/Sheet.tsx src/components/sheet/styles/print.css
git commit -m "feat(sheet): add print stylesheet and all-tabs print rendering"
```

---

# Phase 10 — Polish & integration

## Task 10.1: Cross-link from /character

**Files:**
- Modify: `src/pages/character.astro`

- [ ] **Step 1: Confirm roster CTA from Task 7.1 is present.** If it was added during Phase 7, no work needed. Otherwise add now.

- [ ] **Step 2: Add deep link from /character/specializations and /character/stats-skills back to the sheet**

In each file, alongside the existing `← Back to Character Creation` breadcrumb, add: `<a href="/character/roster">View Your Hunters</a>`.

- [ ] **Step 3: Commit**

```bash
git add src/pages/character.astro src/pages/character/specializations.astro src/pages/character/stats-skills.astro
git commit -m "feat: cross-link character pages with new roster"
```

## Task 10.2: End-to-end smoke test

**Files:** none

- [ ] **Step 1: Run all tests**

```bash
npm test
```

Expected: all tests pass.

- [ ] **Step 2: Run full build**

```bash
npm run build
```

Expected: build succeeds with no errors.

- [ ] **Step 3: Manual end-to-end test**

```bash
npm run dev
```

Walk through:
1. Navigate to `/character/roster`. Empty state shows.
2. Click "New Character". Wizard opens.
3. Complete all 6 wizard steps. Verify validation gates on each step.
4. Land on the sheet. Verify name/HR/race/background appear in vitals header.
5. On Stats tab, roll a few skills. Crit/fumble highlighting works on nat 20/1.
6. On Combat tab, add a weapon, increment hunts to 5 — proficiency should display "Trained".
7. On Inventory tab, equip armor — AR in header updates.
8. On Vitals header, drag HP down, add a Bleeding condition. Refresh page — state persists.
9. Click "Level Up" — milestone toast appears.
10. Go back to roster. Export the character JSON.
11. Delete the character. Import the JSON back. Verify it shows up with the same name and stats.
12. Click "Print View" button — verify the print preview shows all tabs.

- [ ] **Step 4: Verify localStorage quota**

In browser DevTools console:

```js
new Blob([localStorage.getItem('untamed_roster_v1')]).size
```

For 5 characters with small portraits, should comfortably be under 1 MB.

- [ ] **Step 5: Final commit (if any tweaks needed during smoke test)**

```bash
git add -A
git commit -m "fix: smoke-test adjustments"  # only if changes needed
```

---

# Self-review notes (post-write)

After writing this plan, the following was checked:

**Spec coverage:**
- ✅ Architecture (Astro shell + Preact island) → Phase 0 + 4
- ✅ Reference data refactor → Phase 1
- ✅ Character types + derived calcs → Phase 2
- ✅ localStorage + JSON export/import + schema versioning → Phase 3 + 7
- ✅ Vitals header with HP/STA trackers + conditions → Task 4.2-4.3
- ✅ All 7 tabs → Phase 5
- ✅ Dice rolling → Task 5.2 + reused in 5.3
- ✅ Action economy → Task 5.3 (within Combat tab)
- ✅ Creation wizard (6 steps) → Phase 6
- ✅ Roster (CRUD + import/export) → Phase 7
- ✅ Level-up milestone flow → Phase 8
- ✅ Print stylesheet → Phase 9
- ✅ Manual smoke test plan → Task 10.2

**Known limitation:** The reference-data extraction tasks (Phase 1) include placeholders where the actual content of races / backgrounds / talents must be copied verbatim from existing `.astro` files and the original player doc. Each task explicitly cites the source file and section to extract from. The engineer must perform the copy faithfully — the data is not in the plan itself because it's too large and is best preserved by literal extraction.
