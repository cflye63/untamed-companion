// src/data/races.ts
import type { StatId, SkillId } from './skills';

export type StatBonus =
  | { kind: 'fixed'; stat: StatId; amount: number }
  | { kind: 'choice'; stats: StatId[]; amount: number }
  | { kind: 'any'; amount: number };

export type Lineage = {
  id: string;
  name: string;
  description: string;
  bonuses?: StatBonus[];
  traits?: string[];
};

export type Race = {
  id: string;
  name: string;
  summary: string;
  bonuses: StatBonus[];
  proficiencies: {
    skills?: { count: number; from?: SkillId[] };
    traits?: string[];
  };
  racialTrait: { name: string; description: string };
  lineages: Lineage[];
};

export const RACES: readonly Race[] = [
  {
    id: 'human',
    name: 'Humans',
    summary: 'The most abundant race in Oris Magna, known for their charm, adaptability, and resilience, with civilizations shaping the culture, politics, and traditions across all of Meridia.',
    bonuses: [
      { kind: 'any', amount: 1 },
    ],
    proficiencies: {
      skills: { count: 1 },
      traits: ['Gain proficiency with one common tool.'],
    },
    racialTrait: {
      name: 'Adaptable',
      description: 'Once per round, when you spend Stamina on an Action or Reaction, you may gain one of the following benefits: Gain +1 to the roll; Move 5 ft without provoking opportunity attacks; or Reduce the Stamina cost by 1 (minimum 0). You may use this up to 3 times per Hunt.',
    },
    lineages: [],
  },
  {
    id: 'dragonian',
    name: 'Dragonians',
    summary: 'Ancient descendants of dragons with lifespans beyond 500 years, bearing reptilian features and the ability to channel elemental power through their draconic lineage.',
    bonuses: [
      { kind: 'fixed', stat: 'INT', amount: 1 },
    ],
    proficiencies: {
      skills: { count: 1, from: ['knowledge'] },
      traits: ['Read and recite Old Draconic sigils; you have advantage on Knowledge checks about draconic ruins.'],
    },
    racialTrait: {
      name: 'Draconic Lineage',
      description: 'Choose one Draconic lineage; you permanently gain its elemental Resistance (see lineages below). Draconic Channeling: Once per turn, when you deal damage with an Attack or Technique, you may spend +1 Stamina to infuse it with your lineage\'s element and apply that lineage\'s rider.',
    },
    lineages: [
      {
        id: 'fire',
        name: 'Fire',
        description: 'Red scales. Resistance to Fire. Rider: Target gains Burned (1 stack).',
        traits: ['Elemental Resistance: Fire', 'Rider: Target gains Burned (1 stack)'],
      },
      {
        id: 'ice',
        name: 'Ice',
        description: 'White scales. Resistance to Cold. Rider: Target gains Chilled.',
        traits: ['Elemental Resistance: Cold', 'Rider: Target gains Chilled'],
      },
      {
        id: 'storm',
        name: 'Storm',
        description: 'Violet scales. Resistance to Lightning. Rider: Target cannot take Reactions until the start of its next turn.',
        traits: ['Elemental Resistance: Lightning', 'Rider: Target cannot take Reactions until the start of its next turn'],
      },
      {
        id: 'earth',
        name: 'Earth',
        description: 'Green/Brown scales. Resistance to Poison. Rider: Target gains Poisoned (1 stack).',
        traits: ['Elemental Resistance: Poison', 'Rider: Target gains Poisoned (1 stack)'],
      },
      {
        id: 'air',
        name: 'Air',
        description: 'Grey scales. Resistance to Sonic. Rider: Move 5 ft after the attack without provoking opportunity attacks.',
        traits: ['Elemental Resistance: Sonic', 'Rider: Move 5 ft after the attack without provoking opportunity attacks'],
      },
      {
        id: 'water',
        name: 'Water',
        description: 'Blue/Seafoam scales. Resistance to Cold. Rider: You or an ally within 5 ft regain 1 Stamina.',
        traits: ['Elemental Resistance: Cold', 'Rider: You or an ally within 5 ft regain 1 Stamina'],
      },
    ],
  },
  {
    id: 'trolian',
    name: 'Trolians',
    summary: 'The most primal of the races, believed to be direct descendants of ancient beasts, with stout frames, immense strength, and animalistic features resembling the untamed forces of nature.',
    bonuses: [
      { kind: 'choice', stats: ['STR', 'DEX'], amount: 1 },
    ],
    proficiencies: {
      skills: { count: 1, from: ['athletics'] },
      traits: ['Beast Signs: Advantage on Animal Handling checks when calming non-apex mammals.'],
    },
    racialTrait: {
      name: 'Wild Fortitude',
      description: 'Advantage on CON saves vs Exhaustion, Poison, and Environmental Cold checks; advantage on Survival checks to endure cold.',
    },
    lineages: [
      {
        id: 'highland',
        name: 'Highland',
        description: 'Anchored Frame: If you did not Move this turn, gain +1 AR until the start of your next turn.',
        traits: ['Anchored Frame: If you did not Move this turn, gain +1 AR until the start of your next turn.'],
      },
      {
        id: 'lowland',
        name: 'Lowland',
        description: 'Flowstep: When you Move at least 10 ft on your turn, you may ignore difficult terrain for that movement.',
        traits: ['Flowstep: When you Move at least 10 ft on your turn, you may ignore difficult terrain for that movement.'],
      },
      {
        id: 'grove',
        name: 'Grove',
        description: 'Rooted Resilience: Once per round, when you fail a STR, DEX, or CON save, your next Reaction this round costs 1 less Stamina (minimum 0).',
        traits: ['Rooted Resilience: Once per round, when you fail a STR, DEX, or CON save, your next Reaction this round costs 1 less Stamina (minimum 0).'],
      },
    ],
  },
  {
    id: 'thalorim',
    name: 'Thalorim',
    summary: 'Amphibious humanoids tracing their ancestry to the ancient underwater metropolis of Thal\'Meruun, reshaped by rivers, tides, and the slow patience of water.',
    bonuses: [
      { kind: 'choice', stats: ['CON', 'INS'], amount: 1 },
    ],
    proficiencies: {
      skills: { count: 1, from: ['athletics', 'survival'] },
      traits: [
        'Swim speed equal to walking speed.',
        'Pressure Sense: Advantage on checks to detect underwater movement, large submerged creatures, or changes in depth/current. Never Surprised by aquatic creatures while submerged.',
        'Flowing Renewal: Once per Hunt, as a Fast Action, remove one Condition affecting you. Like water slipping through stone, you cast away what would hinder you.',
      ],
    },
    racialTrait: {
      name: 'Tide Breath',
      description: 'Your Breath Timer is doubled while underwater.',
    },
    lineages: [],
  },
];

export function getRace(id: string): Race {
  const r = RACES.find(r => r.id === id);
  if (!r) throw new Error(`Unknown race: ${id}`);
  return r;
}
