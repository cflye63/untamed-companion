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
