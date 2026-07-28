// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { validateCharacter, isCharacter, CURRENT_SCHEMA_VERSION } from './schema';

const validChar = {
  schemaVersion: 1,
  id: 'abc',
  createdAt: '2026-01-01T00:00:00Z',
  updatedAt: '2026-01-01T00:00:00Z',
  name: 'Kael',
  raceId: 'human',
  backgroundIds: ['tribal-warrior'],
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
