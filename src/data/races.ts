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
    summary: 'Abundant and endlessly adaptable — their kingdoms, republics, and trade hubs shape every corner of Meridia.',
    bonuses: [
      { kind: 'any', amount: 1 },
    ],
    proficiencies: {
      skills: { count: 1 },
      traits: ['Proficiency with one common tool of your choice.'],
    },
    racialTrait: {
      name: 'Adaptable',
      description: 'Once per round, when you spend Stamina on an Action or Reaction, choose one: +1 to the roll, move 5 ft without provoking, or reduce the Stamina cost by 1 (min 0). Up to 3 times per Hunt.',
    },
    lineages: [],
  },
  {
    id: 'dragonian',
    name: 'Dragonians',
    summary: 'Long-lived dragon-kin with reptilian features, channeling elemental power through their draconic lineage.',
    bonuses: [
      { kind: 'fixed', stat: 'INT', amount: 1 },
    ],
    proficiencies: {
      skills: { count: 1, from: ['knowledge'] },
      traits: [
        'Old Draconic: advantage on Knowledge checks about draconic ruins.',
        'Draconic Channeling: once per turn, when you deal damage with an Attack or Technique, spend +1 Stamina to apply your lineage\'s element and its rider.',
      ],
    },
    racialTrait: {
      name: 'Draconic Lineage',
      description: 'Choose one Draconic lineage below; you permanently gain its elemental Resistance.',
    },
    lineages: [
      { id: 'fire', name: 'Fire', description: 'Red scales · Resist Fire. Rider: target gains Burned (1 stack).' },
      { id: 'ice', name: 'Ice', description: 'White scales · Resist Cold. Rider: target gains Chilled.' },
      { id: 'storm', name: 'Storm', description: 'Violet scales · Resist Lightning. Rider: target cannot take Reactions until the start of its next turn.' },
      { id: 'earth', name: 'Earth', description: 'Green-brown scales · Resist Poison. Rider: target cannot be pushed or repositioned until the end of its next turn.' },
      { id: 'air', name: 'Air', description: 'Grey scales · Resist Sonic. Rider: move 5 ft after the attack without provoking opportunity attacks.' },
      { id: 'water', name: 'Water', description: 'Blue-seafoam scales · Resist Cold. Rider: you or an ally within 5 ft regain 1 Stamina.' },
    ],
  },
  {
    id: 'trolian',
    name: 'Trolians',
    summary: 'Primal beast-kin with stout frames and immense strength, embodying the untamed forces of nature.',
    bonuses: [
      { kind: 'choice', stats: ['STR', 'DEX'], amount: 1 },
    ],
    proficiencies: {
      skills: { count: 1, from: ['athletics'] },
      traits: ['Beast Signs: advantage on Animal Handling checks when calming non-apex mammals.'],
    },
    racialTrait: {
      name: 'Wild Fortitude',
      description: 'Advantage on CON saves vs Exhaustion, Poison, and cold, and on Survival checks to endure harsh climates.',
    },
    lineages: [
      { id: 'highland', name: 'Highland', description: 'Anchored Frame: if you did not Move this turn, gain +1 AR until the start of your next turn.' },
      { id: 'lowland', name: 'Lowland', description: 'Flowstep: when you Move at least 10 ft on your turn, ignore difficult terrain for that movement.' },
      { id: 'grove', name: 'Grove', description: 'Rooted Resilience: once per round, when you fail a STR, DEX, or CON save, your next Reaction this round costs 1 less Stamina (min 0).' },
    ],
  },
  {
    id: 'thalorim',
    name: 'Thalorim',
    summary: 'Amphibious survivors of the drowned city of Thal\'Meruun, shaped by rivers, tides, and the patience of water.',
    bonuses: [
      { kind: 'choice', stats: ['CON', 'INS'], amount: 1 },
    ],
    proficiencies: {
      skills: { count: 1, from: ['athletics', 'survival'] },
      traits: [
        'Swim speed equal to your walking speed.',
        'Pressure Sense: advantage on checks to detect underwater movement, submerged creatures, or changes in depth/current; never Surprised by aquatic creatures while submerged.',
        'Flowing Renewal: once per Hunt, as a Fast Action, remove one Condition affecting you — like water slipping through stone, you cast away what would hinder you.',
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
