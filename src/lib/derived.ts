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
  char: Pick<Character, 'baseStats' | 'raceId' | 'backgroundIds' | 'hunterRank'>,
  flexibleAllocations: Partial<Record<StatKey, number>> = {}
): Record<StatKey, number> {
  const result: Record<StatKey, number> = { ...char.baseStats };

  const race = getRace(char.raceId);
  for (const b of race.bonuses) {
    if (b.kind === 'fixed') result[b.stat] += b.amount;
  }
  for (const bgId of char.backgroundIds) {
    const bg = getBackground(bgId);
    for (const b of bg.statBonuses) {
      if (b.kind === 'fixed') result[b.stat] += b.amount;
    }
  }
  for (const [stat, amount] of Object.entries(flexibleAllocations) as [StatKey, number][]) {
    result[stat] += amount;
  }
  result.CON += freeConFromHR(char.hunterRank);
  return result;
}
