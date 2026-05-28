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
        Math.max(0, (Object.values(character.baseStats) as number[]).reduce((s, n) => s + n, 0) - 18)
      ),
      skillBonus,
    };
  }, [character]);
}
