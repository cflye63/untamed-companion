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

export function computeFinalStats(
  char: Pick<Character, 'baseStats' | 'raceId' | 'lineageId' | 'backgroundIds' | 'hunterRank'>,
  flexibleAllocations: Partial<Record<StatKey, number>> = {}
): Record<StatKey, number> {
  const result: Record<StatKey, number> = { ...char.baseStats };

  const applyBonus = (b: { kind: string; stat?: StatKey; stats?: StatKey[]; amount: number }) => {
    if (b.kind === 'fixed' && b.stat) {
      result[b.stat] += b.amount;
    } else if (b.kind === 'choice' && b.stats && b.stats.length > 0) {
      // Default: apply to the highest of the offered stats (player can override via flexibleAllocations)
      const target = b.stats.reduce((best, s) => (result[s] > result[best] ? s : best), b.stats[0]);
      result[target] += b.amount;
    } else if (b.kind === 'any') {
      // Default: apply to the highest base stat
      const STAT_KEYS: StatKey[] = ['STR', 'DEX', 'CON', 'INT', 'INS', 'CHA'];
      const target = STAT_KEYS.reduce((best, s) => (result[s] > result[best] ? s : best), 'STR' as StatKey);
      result[target] += b.amount;
    }
  };

  const race = getRace(char.raceId);
  for (const b of race.bonuses) applyBonus(b as any);
  // Lineage bonuses (e.g. Dragonian's element grants its stat)
  if (char.lineageId) {
    const lineage = race.lineages.find(l => l.id === char.lineageId);
    for (const b of lineage?.bonuses ?? []) applyBonus(b as any);
  }
  for (const bgId of char.backgroundIds) {
    const bg = getBackground(bgId);
    for (const b of bg.statBonuses) applyBonus(b as any);
  }
  for (const [stat, amount] of Object.entries(flexibleAllocations) as [StatKey, number][]) {
    result[stat] += amount;
  }
  result.CON += freeConFromHR(char.hunterRank);
  return result;
}
