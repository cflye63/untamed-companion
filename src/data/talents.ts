// src/data/talents.ts
export type TalentCategory =
  | 'Defensive'
  | 'Offensive'
  | 'Ranged'
  | 'Survival'
  | 'Magic'
  | 'Tactical'
  | 'Crafting'
  | 'Mobility';

export type Talent = {
  id: string;
  name: string;
  category: TalentCategory;
  description: string;
  requirements?: string;
};

export const TALENTS: readonly Talent[] = [
  // ── Defensive (4) ──────────────────────────────────────────────────────────
  {
    id: 'stoic',
    name: 'Stoic',
    category: 'Defensive',
    description:
      'When you take a Breathing Turn, regain +1 additional Stamina (total: 5 instead of 4).',
  },
  {
    id: 'iron-guard',
    name: 'Iron Guard',
    category: 'Defensive',
    description:
      'When you successfully Block, reduce the incoming damage by an additional 1 (stacks with your CON modifier reduction).',
    requirements: 'Must wield a weapon or shield with the Guard tag',
  },
  {
    id: 'unyielding',
    name: 'Unyielding',
    category: 'Defensive',
    description:
      'You have advantage on saves against forced movement (being pushed, knocked back, or knocked Prone).',
  },
  {
    id: 'last-stand',
    name: 'Last Stand',
    category: 'Defensive',
    description:
      'While you are at or below half your maximum HP, incoming attacks no longer benefit from the Exhausted condition\'s automatic advantage against you.',
  },

  // ── Offensive (4) ──────────────────────────────────────────────────────────
  {
    id: 'quickdraw',
    name: 'Quickdraw',
    category: 'Offensive',
    description:
      'Drawing or swapping a weapon does not cost your Fast Action once per round.',
  },
  {
    id: 'relentless',
    name: 'Relentless',
    category: 'Offensive',
    description:
      'When you reduce a creature to 0 HP with a Basic Attack, you may immediately make one additional Basic Attack as a Fast Action. This Fast Action still costs Stamina normally.',
  },
  {
    id: 'opening-strike',
    name: 'Opening Strike',
    category: 'Offensive',
    description:
      'On the first round of combat, your first Basic Attack gains +2 to the attack roll.',
  },
  {
    id: 'press-the-advantage',
    name: 'Press the Advantage',
    category: 'Offensive',
    description:
      'If you hit a target that is Prone or Stunned, you deal +2 damage on that attack.',
  },

  // ── Ranged (4) ─────────────────────────────────────────────────────────────
  {
    id: 'sharp-eye',
    name: 'Sharp Eye',
    category: 'Ranged',
    description:
      'Ignore the disadvantage penalty for attacking within the first range increment (Normal Range). Long Range attacks still suffer disadvantage.',
  },
  {
    id: 'steady-hands',
    name: 'Steady Hands',
    category: 'Ranged',
    description:
      'You may use the Steady Aim Preparation even while an ally is within 5 ft of your target, removing the normal restriction on firing into melee.',
  },
  {
    id: 'called-shot-specialist',
    name: 'Called Shot Specialist',
    category: 'Ranged',
    description:
      'You reduce the Called Shot attack roll penalty by 1 (from –2 to –1, or from –4 to –3 for obscured parts).',
  },
  {
    id: 'quick-nock',
    name: 'Quick Nock',
    category: 'Ranged',
    description:
      'Once per round, you may retrieve a single piece of ammunition from a Pack Slot as part of your attack without spending a Fast Action.',
  },

  // ── Survival (4) ───────────────────────────────────────────────────────────
  {
    id: 'iron-lungs',
    name: 'Iron Lungs',
    category: 'Survival',
    description:
      '+2 to CON saves for holding breath, marching in extreme weather, or resisting inhaled poisons and spore effects.',
  },
  {
    id: 'hardened',
    name: 'Hardened',
    category: 'Survival',
    description:
      'The first time each hunt you would gain the Exhausted condition from reaching 0 Stamina, you instead remain at 1 Stamina.',
  },
  {
    id: 'trail-wise',
    name: 'Trail Wise',
    category: 'Survival',
    description:
      'You never need to make Survival checks to avoid becoming lost in biomes you have visited before. In unfamiliar biomes, you make the check with advantage.',
  },
  {
    id: 'foragers-instinct',
    name: "Forager's Instinct",
    category: 'Survival',
    description:
      'When you forage successfully, you find 1 additional ingredient. On a Critical Success, you may identify its full properties without a separate Resource ID check.',
  },

  // ── Magic (4) ──────────────────────────────────────────────────────────────
  {
    id: 'elemental-attunement',
    name: 'Elemental Attunement',
    category: 'Magic',
    description:
      'Choose one damage type: Fire, Shock, Ice, or Poison. You gain resistance to that type, reducing incoming damage of that type by 2.',
  },
  {
    id: 'wand-focus',
    name: 'Wand Focus',
    category: 'Magic',
    description:
      'When you use a Wand, add +1 to the Save DC of its effect.',
    requirements: 'Must be wielding a Wand',
  },
  {
    id: 'resonant-strike',
    name: 'Resonant Strike',
    category: 'Magic',
    description:
      'Once per rest, when you apply an elemental status (Burned, Shocked, Frozen, Poisoned) via an attack or ability, that status lasts 1 additional round.',
  },
  {
    id: 'flute-mastery',
    name: 'Flute Mastery',
    category: 'Magic',
    description:
      'Hunting Flute Songs you perform cost 0 Stamina on Breathing Turns. On all other turns, their Stamina cost is reduced by 1 (minimum 1).',
    requirements: 'Must be wielding a Hunting Flute',
  },

  // ── Tactical (4) ───────────────────────────────────────────────────────────
  {
    id: 'hunter-sight',
    name: 'Hunter Sight',
    category: 'Tactical',
    description:
      'When you use the Study Target Preparation and succeed on the optional INT or INS check, you learn two behavior cues instead of one.',
  },
  {
    id: 'coordinated-assault',
    name: 'Coordinated Assault',
    category: 'Tactical',
    description:
      'When you attack a target that an ally attacked during the same round, you gain +1 to your attack roll against that target.',
  },
  {
    id: 'read-the-room',
    name: 'Read the Room',
    category: 'Tactical',
    description:
      'You are never surprised at the start of combat. If your party would be surprised, you alone may act normally during the surprise round.',
  },
  {
    id: 'efficient-preparation',
    name: 'Efficient Preparation',
    category: 'Tactical',
    description:
      'When you successfully maintain a Preparation and regain Stamina at end of turn, you regain +1 additional Stamina (total: +3 instead of +2).',
  },

  // ── Crafting (4) ───────────────────────────────────────────────────────────
  {
    id: 'trapsmith',
    name: 'Trapsmith',
    category: 'Crafting',
    description:
      'Crafting traps takes one fewer component (structural or functional, your choice). You still need at least one of each type.',
  },
  {
    id: 'field-alchemist',
    name: 'Field Alchemist',
    category: 'Crafting',
    description:
      'You may craft Basic Potions and Salves without a Herbalism Pouch at no penalty. Complex or Rare recipes still require the kit.',
  },
  {
    id: 'efficient-harvest',
    name: 'Efficient Harvest',
    category: 'Crafting',
    description:
      'When you carve a monster after a hunt, you gain +1 material on each successful carve. On a Critical Success, you may attempt an additional carve roll.',
  },
  {
    id: 'sharp-tools',
    name: 'Sharp Tools',
    category: 'Crafting',
    description:
      'Sharpening your weapon takes a Fast Action instead of an Action, and the +1 to attack rolls lasts 5 turns instead of 3.',
  },

  // ── Mobility (4) ───────────────────────────────────────────────────────────
  {
    id: 'sure-footed',
    name: 'Sure-Footed',
    category: 'Mobility',
    description:
      'Difficult terrain does not reduce your movement speed. You still cannot Sprint through difficult terrain unless another ability allows it.',
  },
  {
    id: 'evasive',
    name: 'Evasive',
    category: 'Mobility',
    description:
      'When you Dodge and the triggering attack misses, you may reposition up to 10 ft instead of 5 ft.',
    requirements: 'Must wear Light or Medium Armor',
  },
  {
    id: 'fleet-footed',
    name: 'Fleet-Footed',
    category: 'Mobility',
    description:
      'Your base movement speed increases by 5 ft.',
  },
  {
    id: 'combat-roll',
    name: 'Combat Roll',
    category: 'Mobility',
    description:
      'Standing from Prone costs 1 Stamina instead of 2, and you may move up to 5 ft as part of standing without spending additional movement.',
  },
];

export const TALENTS_BY_CATEGORY: Record<TalentCategory, readonly Talent[]> =
  TALENTS.reduce(
    (acc, t) => {
      (acc[t.category] ??= []).push(t);
      return acc;
    },
    {} as Record<TalentCategory, Talent[]>,
  );

export function getTalent(id: string): Talent {
  const t = TALENTS.find((t) => t.id === id);
  if (!t) throw new Error(`Unknown talent: ${id}`);
  return t;
}
