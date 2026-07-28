// src/data/armor.ts
export type ArmorType = 'light' | 'medium' | 'heavy';
export type ArmorTier = 1 | 2 | 3 | 4 | 5 | 6;

export type Armor = {
  id: string;
  name: string;
  type: ArmorType;
  tier: ArmorTier;
  ar: number;
  speedPenalty?: number;
  description: string;
  isStarter?: boolean;
};

export const ARMORS: readonly Armor[] = [
  {
    id: 'hunters-garb',
    name: "Hunter's Garb",
    type: 'light',
    tier: 1,
    ar: 2,
    speedPenalty: 5, // positive = bonus
    description: '+2 AR, +5 ft movement. Nimble: +1 to DEX saves.',
    isStarter: true,
  },
  {
    id: 'wardens-mail',
    name: "Warden's Mail",
    type: 'medium',
    tier: 1,
    ar: 3,
    description: '+3 AR. Steady: +1 to STR/DEX saves vs forced movement. Requires STR 5 or CON 5.',
    isStarter: true,
  },
  {
    id: 'ironplate-harness',
    name: 'Ironplate Harness',
    type: 'heavy',
    tier: 1,
    ar: 4,
    speedPenalty: -5,
    description:
      '+4 AR, -5 ft movement. Bulwark: Cannot Dodge. -1 to DEX saves; +1 to CON saves vs Stagger/Knockdown. Disadvantage on Stealth. Requires STR 6 and CON 6.',
    isStarter: true,
  },
];

export function getArmor(id: string): Armor {
  const a = ARMORS.find(a => a.id === id);
  if (!a) throw new Error(`Unknown armor: ${id}`);
  return a;
}
