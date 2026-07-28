// src/data/skills.ts
export type StatId = 'STR' | 'DEX' | 'CON' | 'INT' | 'INS' | 'CHA';

export type SkillId =
  | 'grapple' | 'heavy-trap-setup' | 'athletics' | 'brute-force'
  | 'stealth' | 'tool-handling' | 'acrobatics' | 'deftness'
  | 'knowledge' | 'trap-engineering' | 'first-aid' | 'resource-identification'
  | 'sense' | 'tracking' | 'creature-analysis' | 'survival'
  | 'negotiation' | 'leadership' | 'animal-handling' | 'deception';

export type Skill = {
  id: SkillId;
  name: string;
  stat: StatId;
  description: string;
};

export const SKILLS: readonly Skill[] = [
  // STR
  { id: 'grapple', name: 'Grapple', stat: 'STR', description: 'Holding or restraining a monster to prevent escape.' },
  { id: 'heavy-trap-setup', name: 'Heavy Trap Setup', stat: 'STR', description: 'Deploying massive, weight-based traps.' },
  { id: 'athletics', name: 'Athletics', stat: 'STR', description: 'Feats of strength like climbing, jumping, or swimming.' },
  { id: 'brute-force', name: 'Brute Force', stat: 'STR', description: 'Breaking objects, smashing through barriers.' },
  // DEX
  { id: 'stealth', name: 'Stealth', stat: 'DEX', description: 'Moving quietly, remaining undetected.' },
  { id: 'tool-handling', name: 'Tool Handling', stat: 'DEX', description: 'Manipulating small tools, traps, precision mechanics.' },
  { id: 'acrobatics', name: 'Acrobatics', stat: 'DEX', description: 'Dodging, flipping, balancing.' },
  { id: 'deftness', name: 'Deftness', stat: 'DEX', description: 'Lockpicking, disarming traps.' },
  // INT
  { id: 'knowledge', name: 'Knowledge', stat: 'INT', description: 'Understanding monster weaknesses, lore, behaviors.' },
  { id: 'trap-engineering', name: 'Trap Engineering', stat: 'INT', description: 'Crafting and modifying complex traps.' },
  { id: 'first-aid', name: 'First Aid', stat: 'INT', description: 'Treating injuries, stabilizing allies.' },
  { id: 'resource-identification', name: 'Resource Identification', stat: 'INT', description: 'Recognizing valuable materials, crafting ingredients.' },
  // INS
  { id: 'sense', name: 'Sense', stat: 'INS', description: 'Detecting hidden threats, noticing small details.' },
  { id: 'tracking', name: 'Tracking', stat: 'INS', description: 'Following footprints, identifying movement patterns.' },
  { id: 'creature-analysis', name: 'Creature Analysis', stat: 'INS', description: 'Reading monster body language, predicting attacks.' },
  { id: 'survival', name: 'Survival', stat: 'INS', description: 'Navigating and thriving in extreme conditions.' },
  // CHA
  { id: 'negotiation', name: 'Negotiation', stat: 'CHA', description: 'Persuading NPCs, striking deals.' },
  { id: 'leadership', name: 'Leadership', stat: 'CHA', description: 'Boosting morale, coordinating allies.' },
  { id: 'animal-handling', name: 'Animal Handling', stat: 'CHA', description: 'Calming, training, working with creatures.' },
  { id: 'deception', name: 'Deception', stat: 'CHA', description: 'Lying, misdirecting, disguising intentions.' },
];

export const SKILLS_BY_STAT: Record<StatId, readonly Skill[]> = SKILLS.reduce(
  (acc, s) => {
    (acc[s.stat] ??= []).push(s);
    return acc;
  },
  {} as Record<StatId, Skill[]>
);

export function getSkill(id: SkillId): Skill {
  const s = SKILLS.find(sk => sk.id === id);
  if (!s) throw new Error(`Unknown skill: ${id}`);
  return s;
}
