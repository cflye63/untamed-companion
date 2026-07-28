// src/data/recipes.ts
export type RecipeKind = 'trap' | 'monster-gear' | 'potion' | 'salve';

export type Component = {
  name: string;
  qty: number;
};

export type Recipe = {
  id: string;
  name: string;
  kind: RecipeKind;
  components: Component[];
  description: string;
  workshopRequired?: boolean;
};

export const RECIPES: readonly Recipe[] = [
  // Traps (5)
  {
    id: 'simple-snare',
    name: 'Simple Snare',
    kind: 'trap',
    components: [
      { name: 'Rope (50 ft)', qty: 1 },
      { name: 'Stake', qty: 2 },
    ],
    description: 'A loop-and-anchor snare that immobilizes a small or medium creature\'s limb. On trigger, the target is Restrained until it passes a STR save (DC 12) at the start of its turn.',
  },
  {
    id: 'pitfall-trap',
    name: 'Pitfall Trap',
    kind: 'trap',
    components: [
      { name: 'Shovel', qty: 1 },
      { name: 'Rope (50 ft)', qty: 1 },
      { name: 'Camouflage Netting', qty: 1 },
    ],
    description: 'A concealed pit covered with a collapsible frame. Triggered creatures fall in and take 2d6 fall damage; climbing out costs half their movement for 2 rounds.',
  },
  {
    id: 'spike-trap',
    name: 'Spike Trap',
    kind: 'trap',
    components: [
      { name: 'Lumber Plank', qty: 2 },
      { name: 'Iron Spike', qty: 6 },
      { name: 'Rope (50 ft)', qty: 1 },
    ],
    description: 'A board studded with iron spikes set in a monster\'s path. Deals 2d4 piercing damage on trigger and applies Bleeding (1 stack) to the target.',
  },
  {
    id: 'net-trap',
    name: 'Net Trap',
    kind: 'trap',
    components: [
      { name: 'Rope (50 ft)', qty: 2 },
      { name: 'Weighted Net', qty: 1 },
      { name: 'Stake', qty: 4 },
    ],
    description: 'A spring-loaded net anchored to overhead branches. On trigger, the net drops and Restrains up to one Large creature; the target must pass a STR save (DC 14) to break free.',
  },
  {
    id: 'shock-trap',
    name: 'Shock Trap',
    kind: 'trap',
    components: [
      { name: 'Stormite Shard', qty: 1 },
      { name: 'Copper Wire', qty: 2 },
      { name: 'Wooden Frame', qty: 1 },
    ],
    description: 'A pressure plate wired to a stored lightning charge. Deals 2d6 lightning damage on trigger and applies Stunned until the end of the creature\'s next turn.',
    workshopRequired: false,
  },

  // Potions (3)
  {
    id: 'minor-healing-potion',
    name: 'Minor Healing Potion',
    kind: 'potion',
    components: [
      { name: 'Mendweed', qty: 2 },
      { name: 'Clean Water', qty: 1 },
      { name: 'Glass Flask', qty: 1 },
    ],
    description: 'A faintly green tonic brewed from crushed mendweed. Drinking it restores 2d4 + 2 HP as an action. Requires an Herb Pouch or field mortar to prepare.',
  },
  {
    id: 'stamina-tonic',
    name: 'Stamina Tonic',
    kind: 'potion',
    components: [
      { name: 'Vital Herb', qty: 2 },
      { name: 'Clean Water', qty: 1 },
      { name: 'Glass Flask', qty: 1 },
    ],
    description: 'A bitter amber tonic that flushes fatigue from muscles. Drinking it as a bonus action restores 2 Stamina points. Cannot be used more than once per Short Rest.',
  },
  {
    id: 'antitoxin-draught',
    name: 'Antitoxin Draught',
    kind: 'potion',
    components: [
      { name: 'Purge Root', qty: 1 },
      { name: 'Bitterbloom Petal', qty: 1 },
      { name: 'Clean Water', qty: 1 },
      { name: 'Glass Flask', qty: 1 },
    ],
    description: 'A pale, sharp-smelling liquid that neutralizes venom. Drinking it immediately ends the Poisoned condition and grants advantage on CON saves vs Poison for 1 hour.',
  },

  // Salves (3)
  {
    id: 'burn-salve',
    name: 'Burn Salve',
    kind: 'salve',
    components: [
      { name: 'Coolmoss', qty: 2 },
      { name: 'Rendered Balm', qty: 1 },
    ],
    description: 'A thick, cold-blue paste that soothes fire damage. Applying it as an action removes the Burned condition (all stacks) and restores 1d4 HP. Requires a Healing Salve Kit.',
  },
  {
    id: 'bleed-salve',
    name: 'Bleed Salve',
    kind: 'salve',
    components: [
      { name: 'Bloodvine Leaf', qty: 2 },
      { name: 'Rendered Balm', qty: 1 },
    ],
    description: 'A dark crimson paste packed with clotting agents. Applying it as an action removes the Bleeding condition and stabilizes any ongoing HP loss from that source.',
  },
  {
    id: 'frost-salve',
    name: 'Frost Salve',
    kind: 'salve',
    components: [
      { name: 'Ember Root', qty: 1 },
      { name: 'Sunpetal', qty: 1 },
      { name: 'Rendered Balm', qty: 1 },
    ],
    description: 'A warm amber paste that drives out deep cold. Applying it as an action removes the Chilled condition and grants resistance to Cold damage until the end of the next round.',
  },

  // Monster Gear (3)
  {
    id: 'cinderhorn-plate',
    name: 'Cinderhorn Plate',
    kind: 'monster-gear',
    components: [
      { name: 'Cinderhorn Scale', qty: 4 },
      { name: 'Cinderhorn Carapace Shard', qty: 2 },
      { name: 'Hardening Flux', qty: 1 },
    ],
    description: 'Reinforced chest armor forged from Cinderhorn scales. Grants +2 AR and Fire Resistance. Requires a guild workshop and a Toolkit to assemble.',
    workshopRequired: true,
  },
  {
    id: 'stagmir-longblade',
    name: 'Stagmir Longblade',
    kind: 'monster-gear',
    components: [
      { name: 'Stagmir Antler', qty: 2 },
      { name: 'Stagmir Tendon', qty: 1 },
      { name: 'Steel Crossguard', qty: 1 },
    ],
    description: 'A two-handed blade ground from a Stagmir\'s antler tines. Deals 2d6 + STR slashing damage; on a critical hit, pushes the target 10 ft. Forging requires a workshop grinder.',
    workshopRequired: true,
  },
  {
    id: 'mirefiend-waders',
    name: 'Mirefiend Waders',
    kind: 'monster-gear',
    components: [
      { name: 'Mirefiend Hide', qty: 3 },
      { name: 'Mirefiend Toxin Sac', qty: 1 },
      { name: 'Tanning Solution', qty: 1 },
    ],
    description: 'Leg armor tanned from Mirefiend hide, lined with neutralized toxin for waterproofing. Grants immunity to Difficult Terrain in swamp or marsh environments and Poison Resistance.',
    workshopRequired: true,
  },
];

export const RECIPES_BY_KIND: Record<RecipeKind, readonly Recipe[]> = RECIPES.reduce(
  (acc, r) => {
    (acc[r.kind] ??= []).push(r);
    return acc;
  },
  {} as Record<RecipeKind, Recipe[]>,
);

export function getRecipe(id: string): Recipe {
  const r = RECIPES.find(r => r.id === id);
  if (!r) throw new Error(`Unknown recipe: ${id}`);
  return r;
}
