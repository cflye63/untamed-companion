// @vitest-environment node
import { describe, it, expect } from 'vitest';
import {
  statMod, maxHp, maxStamina, profBonus, freeConFromHR, tierFromHR,
  availableSpecSlots, availableTalentSlots, availableStatPoints,
  computeFinalStats, weaponProficiency,
} from './derived';

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
    expect(maxStamina(3)).toBe(7);
    expect(maxStamina(7)).toBe(9);
    expect(maxStamina(0)).toBe(6);
  });
  it('clamps to minimum 1', () => {
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

describe('weaponProficiency', () => {
  it('uses 5 / 10 Hunts for non-Humans', () => {
    expect(weaponProficiency(0, 'trolian')).toBe('novice');
    expect(weaponProficiency(4, 'trolian')).toBe('novice');
    expect(weaponProficiency(5, 'trolian')).toBe('trained');
    expect(weaponProficiency(9, 'trolian')).toBe('trained');
    expect(weaponProficiency(10, 'trolian')).toBe('master');
  });
  it('uses 3 / 7 Hunts for Humans (Fast Learner)', () => {
    expect(weaponProficiency(2, 'human')).toBe('novice');
    expect(weaponProficiency(3, 'human')).toBe('trained');
    expect(weaponProficiency(6, 'human')).toBe('trained');
    expect(weaponProficiency(7, 'human')).toBe('master');
  });
  it('defaults to standard thresholds when raceId omitted', () => {
    expect(weaponProficiency(5)).toBe('trained');
    expect(weaponProficiency(3)).toBe('novice');
  });
});

describe('computeFinalStats', () => {
  it('applies lineage fixed bonuses', () => {
    const result = computeFinalStats({
      baseStats: { STR: 3, DEX: 3, CON: 3, INT: 3, INS: 3, CHA: 3 },
      raceId: 'dragonian',
      lineageId: 'fire',            // Fire → +1 STR
      backgroundIds: [],
      hunterRank: 0,
    });
    expect(result.STR).toBe(4);
  });
  it('applies no lineage bonus when none selected', () => {
    const result = computeFinalStats({
      baseStats: { STR: 3, DEX: 3, CON: 3, INT: 3, INS: 3, CHA: 3 },
      raceId: 'dragonian',          // no lineageId → no stat bonus from race
      backgroundIds: [],
      hunterRank: 0,
    });
    expect(result).toEqual({ STR: 3, DEX: 3, CON: 3, INT: 3, INS: 3, CHA: 3 });
  });
  it('applies HR free CON', () => {
    const result = computeFinalStats({
      baseStats: { STR: 3, DEX: 3, CON: 5, INT: 3, INS: 3, CHA: 3 },
      raceId: 'dragonian',          // no lineage → no race stat bonus
      backgroundIds: [],
      hunterRank: 5,                // +1 free CON
    });
    expect(result.CON).toBe(6);
  });
  it('applies "any" bonus to the highest base stat', () => {
    const result = computeFinalStats({
      baseStats: { STR: 6, DEX: 3, CON: 3, INT: 3, INS: 3, CHA: 3 },
      raceId: 'human',   // human has { kind: 'any', amount: 1 }
      backgroundIds: [],
      hunterRank: 0,
    });
    expect(result.STR).toBe(7);
  });
  it('applies "choice" bonus to the highest offered stat', () => {
    // exiled-noble has { kind: 'choice', stats: ['STR', 'DEX'], amount: 1 }
    // With DEX(5) > STR(3), the bonus should land on DEX.
    // dragonian has only a fixed INT bonus — no flexible bonuses to interfere.
    const result = computeFinalStats({
      baseStats: { STR: 3, DEX: 5, CON: 3, INT: 3, INS: 3, CHA: 3 },
      raceId: 'dragonian',
      backgroundIds: ['exiled-noble'],
      hunterRank: 0,
    });
    expect(result.DEX).toBe(6);
    expect(result.STR).toBe(3);
  });
});
