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
