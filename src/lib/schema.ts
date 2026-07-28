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

  for (const field of ['id', 'createdAt', 'updatedAt', 'name', 'raceId', 'primaryWeaponId'] as const) {
    if (typeof o[field] !== 'string') return { ok: false, error: `${field} must be a string` };
  }

  const bs = o.baseStats as Record<string, unknown> | undefined;
  if (!bs || typeof bs !== 'object') return { ok: false, error: 'baseStats missing' };
  for (const k of STAT_KEYS) {
    if (typeof bs[k] !== 'number') return { ok: false, error: `baseStats.${k} must be a number` };
  }

  if (!Array.isArray(o.gearSlots) || o.gearSlots.length !== 6) {
    return { ok: false, error: 'gearSlots must be length 6' };
  }
  if (!Array.isArray(o.packSlots) || o.packSlots.length !== 10) {
    return { ok: false, error: 'packSlots must be length 10' };
  }

  if (typeof o.hunterRank !== 'number') return { ok: false, error: 'hunterRank must be a number' };

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Migration = (data: any) => any;
const migrations: Record<number, Migration> = {};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function migrateToCurrent(data: any): Character | null {
  let current = data;
  while (current?.schemaVersion < CURRENT_SCHEMA_VERSION) {
    const mig = migrations[current.schemaVersion];
    if (!mig) return null;
    current = mig(current);
  }
  return validateCharacter(current).ok ? (current as Character) : null;
}
