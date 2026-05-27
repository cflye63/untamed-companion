// src/data/tools.ts
export type ToolCategory = 'Camp' | 'Hunting' | 'Medicine' | 'Water' | 'Utility';

export type Tool = {
  id: string;
  name: string;
  category: ToolCategory;
  description: string;
};

export const TOOLS: readonly Tool[] = [
  // Camp (4)
  {
    id: 'bedroll',
    name: 'Bedroll',
    category: 'Camp',
    description: 'A compact sleeping mat. Resting with a bedroll restores an extra 1 HP during a Short Rest.',
  },
  {
    id: 'tent',
    name: 'Tent',
    category: 'Camp',
    description: 'A two-person canvas shelter. Provides protection from environmental hazards during a Long Rest and grants advantage on CON saves vs Exhaustion from weather.',
  },
  {
    id: 'tinderbox',
    name: 'Tinderbox',
    category: 'Camp',
    description: 'Flint, steel, and tinder for starting fires. Required for campfire actions; eliminates the need for a Survival check to ignite a fire in calm conditions.',
  },
  {
    id: 'cooking-pot',
    name: 'Cooking Pot',
    category: 'Camp',
    description: 'A cast-iron pot for preparing field meals. Allows cooking of gathered ingredients; cooked meals grant +1 to the first roll of the following hunt.',
  },

  // Hunting (4)
  {
    id: 'snare-kit',
    name: 'Snare Kit',
    category: 'Hunting',
    description: 'Pre-cut wire and stakes for setting basic snares. Reduces the setup time of Simple Snare traps and grants advantage on Heavy Trap Setup checks when using snare-type traps.',
  },
  {
    id: 'tracking-lantern',
    name: 'Tracking Lantern',
    category: 'Hunting',
    description: 'A hooded lantern with a focused beam for reading tracks at night. Negates Disadvantage on Tracking checks in low-light or nighttime conditions.',
  },
  {
    id: 'bait-bag',
    name: 'Bait Bag',
    category: 'Hunting',
    description: 'A sealed pouch containing scent-luring materials. When placed near a trap, grants +2 to the DC that a monster must beat to avoid triggering it.',
  },
  {
    id: 'skinning-knife',
    name: 'Skinning Knife',
    category: 'Hunting',
    description: 'A curved blade designed for harvesting. Required for clean monster part extraction; using it grants advantage on Resource Identification checks when butchering a downed creature.',
  },

  // Medicine (3)
  {
    id: 'bandage-roll',
    name: 'Bandage Roll',
    category: 'Medicine',
    description: 'Sterile cloth wrapping for wounds. Can be applied as an action to stop a Bleeding condition; counts as a First Aid tool for stabilizing downed allies.',
  },
  {
    id: 'herb-pouch',
    name: 'Herb Pouch',
    category: 'Medicine',
    description: 'A compartmented pouch for storing dried medicinal herbs. Keeps up to 8 herb components fresh between hunts; required for field potion mixing.',
  },
  {
    id: 'healing-salve-kit',
    name: 'Healing Salve Kit',
    category: 'Medicine',
    description: 'Mortar, pestle, and base oils for preparing salves in the field. Grants proficiency with Medicine-category crafting recipes and allows salve preparation during a Short Rest.',
  },

  // Water (3)
  {
    id: 'waterskin',
    name: 'Waterskin',
    category: 'Water',
    description: 'A treated leather flask holding up to 2 liters. Hydration is tracked per session; an empty waterskin imposes Disadvantage on CON checks related to Exhaustion.',
  },
  {
    id: 'rope-50ft',
    name: 'Rope (50 ft)',
    category: 'Water',
    description: 'Fifty feet of hempen rope. Used for crossing water obstacles, securing trap lines, and Athletics-based climbing checks; required component in several crafting recipes.',
  },
  {
    id: 'grappling-hook',
    name: 'Grappling Hook',
    category: 'Water',
    description: 'A four-pronged iron hook. When used with Rope, allows Athletics checks to scale surfaces of up to 30 ft; can also anchor trap rigs to elevated anchor points.',
  },

  // Utility (3)
  {
    id: 'toolkit',
    name: 'Toolkit',
    category: 'Utility',
    description: 'A compact roll of hand tools: pliers, hammer, chisel, and wrench. Required for mechanical trap construction and workshop-grade crafting; grants advantage on Trap Engineering checks.',
  },
  {
    id: 'lockpicks',
    name: 'Lockpicks',
    category: 'Utility',
    description: 'Tempered picks and tension wrenches. Used for Deftness-based checks to open locked containers, ruins, or monster-cage mechanisms encountered in the field.',
  },
  {
    id: 'whetstone',
    name: 'Whetstone',
    category: 'Utility',
    description: 'A double-grit sharpening stone. Spending 10 minutes sharpening a blade weapon grants it +1 damage on the first Attack of the next hunt; can be used once per Long Rest.',
  },
];

export const TOOLS_BY_CATEGORY: Record<ToolCategory, readonly Tool[]> = TOOLS.reduce(
  (acc, t) => {
    (acc[t.category] ??= []).push(t);
    return acc;
  },
  {} as Record<ToolCategory, Tool[]>,
);

export function getTool(id: string): Tool {
  const t = TOOLS.find(t => t.id === id);
  if (!t) throw new Error(`Unknown tool: ${id}`);
  return t;
}
