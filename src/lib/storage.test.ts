// @vitest-environment node
import { describe, it, expect, beforeEach } from 'vitest';
import {
  loadRoster, saveRoster, addCharacter, updateCharacter,
  deleteCharacter, getCharacter, ROSTER_KEY,
} from './storage';
import type { Character } from '../types/character';

// Minimal localStorage mock for node environment
const store: Record<string, string> = {};
globalThis.localStorage = {
  getItem: (key: string) => store[key] ?? null,
  setItem: (key: string, value: string) => { store[key] = value; },
  removeItem: (key: string) => { delete store[key]; },
  clear: () => { Object.keys(store).forEach(k => delete store[k]); },
  key: (index: number) => Object.keys(store)[index] ?? null,
  get length() { return Object.keys(store).length; },
} as Storage;

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
