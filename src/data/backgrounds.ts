// src/data/backgrounds.ts
import type { SkillId } from './skills';
import type { StatBonus } from './races';

export type Background = {
  id: string;
  name: string;
  description: string;
  statBonuses: StatBonus[];
  skillProficiencies: SkillId[];
  traits?: string[];
  starterKit?: string[];
};

export const BACKGROUNDS: readonly Background[] = [
  {
    id: 'tribal-warrior',
    name: 'Tribal Warrior',
    description: 'STR/CON frontline',
    statBonuses: [
      { kind: 'fixed', stat: 'STR', amount: 2 },
      { kind: 'fixed', stat: 'CON', amount: 1 },
    ],
    skillProficiencies: ['athletics', 'survival', 'brute-force'],
    traits: [
      'Part of a Tribe: When you Assist an ally on a Strength-based action, roll with advantage. Per Camp, when within reach of an ally, make a Strength check; on success, that ally gains +1 to their next roll.',
    ],
    starterKit: ['Camp-Craft Kit'],
  },
  {
    id: 'wanderer',
    name: 'Wanderer',
    description: 'DEX/INS scout',
    statBonuses: [
      { kind: 'fixed', stat: 'DEX', amount: 2 },
      { kind: 'fixed', stat: 'INS', amount: 1 },
    ],
    skillProficiencies: ['survival', 'sense', 'stealth'],
    traits: [
      'Nomadic Instincts: You always know the direction of the nearest settlement, fresh water, or safe shelter. Per Camp, reroll a failed Stealth or Survival check.',
    ],
    starterKit: ["Navigator's Set"],
  },
  {
    id: 'apprentice-smith',
    name: 'Apprentice Smith',
    description: 'STR/INT craftsman',
    statBonuses: [
      { kind: 'fixed', stat: 'STR', amount: 2 },
      { kind: 'fixed', stat: 'INT', amount: 1 },
    ],
    skillProficiencies: ['trap-engineering', 'heavy-trap-setup', 'resource-identification'],
    traits: [
      "Battle-Ready Smith: Craft/modify/repair weapons or armor at smithy during Downtime. Per Camp, after examining a monster's body, make Knowledge (INT); on success GM identifies a weak point.",
    ],
    starterKit: ["Smith's Apprentice Tools"],
  },
  {
    id: 'scholar',
    name: 'Scholar',
    description: 'INT/INS investigator',
    statBonuses: [
      { kind: 'fixed', stat: 'INT', amount: 2 },
      { kind: 'fixed', stat: 'INS', amount: 1 },
    ],
    skillProficiencies: ['knowledge', 'first-aid', 'resource-identification'],
    traits: [
      'Well Read: Advantage on Knowledge (INT) checks to decipher ancient texts, runes, or records. Per Hunt, after 2 rounds observing, learn one: resistance, part-break threshold, or telegraph.',
    ],
    starterKit: ["Cartographer's Pouch"],
  },
  {
    id: 'beast-tamer',
    name: 'Beast Tamer',
    description: 'INS/CHA tracker',
    statBonuses: [
      { kind: 'fixed', stat: 'INS', amount: 2 },
      { kind: 'fixed', stat: 'CHA', amount: 1 },
    ],
    skillProficiencies: ['creature-analysis', 'sense', 'animal-handling'],
    traits: [
      'Whisperer of the Wilds: All checks with a mount at advantage. Per Camp, make free Instinct (INS) check to predict a visible creature\'s next attack or movement.',
    ],
    starterKit: ['Bait & Lure Kit'],
  },
  {
    id: 'sailor',
    name: 'Sailor',
    description: 'DEX/CON seafarer',
    statBonuses: [
      { kind: 'fixed', stat: 'DEX', amount: 2 },
      { kind: 'fixed', stat: 'CON', amount: 1 },
    ],
    skillProficiencies: ['grapple', 'deftness'],
    traits: [
      'Proficiency: Handling (Tool Handling — not a clean SkillId match; listed as "Handling" in source)',
      'Born of the Sea: Expert swimmer, no water movement penalties, extended breath. Per Hunt, automatically keep balance on unstable terrain for 1 round without check.',
    ],
    starterKit: ['Rope & Rigging Kit'],
  },
  {
    id: 'merchant-heir',
    name: 'Merchant Heir',
    description: 'CHA/INS trader',
    statBonuses: [
      { kind: 'fixed', stat: 'CHA', amount: 2 },
      { kind: 'fixed', stat: 'INS', amount: 1 },
    ],
    skillProficiencies: ['negotiation', 'resource-identification', 'sense'],
    traits: [
      'Children of the Coin: Per Downtime, call in merchant favor: 10-20% discount, rare material access, or rush-craft order. Instantly appraise monster materials.',
    ],
    starterKit: ['Signal & Dye Kit'],
  },
  {
    id: 'priest-of-the-wild',
    name: 'Priest of the Wild',
    description: 'CHA/INT mystic',
    statBonuses: [
      { kind: 'fixed', stat: 'CHA', amount: 2 },
      { kind: 'fixed', stat: 'INT', amount: 1 },
    ],
    skillProficiencies: ['first-aid', 'animal-handling', 'knowledge'],
    traits: [
      'Wild Rites: Rites over slain monsters improve harvest quality. Per Hunt, attempt to Pacify a lesser beast (Tier 1) within 20 ft.',
    ],
    starterKit: ["Cook's Pack"],
  },
  {
    id: 'scavenger',
    name: 'Scavenger',
    description: 'DEX/CHA opportunist',
    statBonuses: [
      { kind: 'fixed', stat: 'DEX', amount: 2 },
      { kind: 'fixed', stat: 'CHA', amount: 1 },
    ],
    skillProficiencies: ['stealth', 'deftness', 'deception'],
    traits: [
      "Opportunist's Instinct: Proficient in Sense when rummaging. Per Hunt, roll Stealth with advantage when evading detection.",
    ],
    starterKit: ['Boneworking Kit'],
  },
  {
    id: 'alchemist',
    name: 'Alchemist',
    description: 'INT/CON scientist',
    statBonuses: [
      { kind: 'fixed', stat: 'INT', amount: 2 },
      { kind: 'fixed', stat: 'CON', amount: 1 },
    ],
    skillProficiencies: ['resource-identification', 'deftness', 'first-aid'],
    traits: [
      'Tincture Mastery: Analyze monster materials for alchemical properties. Per Hunt, reroll a failed crafting check for potions/antidotes/concoctions.',
    ],
    starterKit: ["Alchemist's Satchel"],
  },
  {
    id: 'gladiator',
    name: 'Gladiator',
    description: 'STR/DEX duelist',
    statBonuses: [
      { kind: 'fixed', stat: 'STR', amount: 2 },
      { kind: 'fixed', stat: 'DEX', amount: 1 },
    ],
    skillProficiencies: ['athletics', 'acrobatics', 'grapple'],
    traits: [
      'Unbreakable Will: Advantage on CHA or CON checks to resist intimidation/fear/coercion. Per Hunt, if an attack would knock you unconscious, roll CON check to remain at 1 HP.',
    ],
    starterKit: ['Climbing Kit'],
  },
  {
    id: 'exiled-noble',
    name: 'Exiled Noble',
    description: 'CHA/STR or DEX leader',
    statBonuses: [
      { kind: 'fixed', stat: 'CHA', amount: 2 },
      { kind: 'choice', stats: ['STR', 'DEX'], amount: 1 },
    ],
    skillProficiencies: ['leadership', 'negotiation', 'sense'],
    traits: [
      'Noble Bearing: Easier access to high-society circles. Per Hunt, Rally as Fast Action: grant ally within 30 ft +1 to next attack or defense roll.',
    ],
    starterKit: ["Navigator's Set"],
  },
  {
    id: 'pathfinder',
    name: 'Pathfinder',
    description: 'INS/DEX trailblazer',
    statBonuses: [
      { kind: 'fixed', stat: 'INS', amount: 2 },
      { kind: 'fixed', stat: 'DEX', amount: 1 },
    ],
    skillProficiencies: ['tracking', 'survival', 'sense'],
    traits: [
      'Sixth Sense: Per Hunt, roll Sense (INS) with advantage to pre-empt ambush; on success party can\'t be surprised this round and you gain +2 Initiative.',
    ],
    starterKit: ['Climbing Kit'],
  },
  {
    id: 'monster-researcher',
    name: 'Monster Researcher',
    description: 'INT/CON analyst',
    statBonuses: [
      { kind: 'fixed', stat: 'INT', amount: 2 },
      { kind: 'fixed', stat: 'CON', amount: 1 },
    ],
    skillProficiencies: ['knowledge', 'resource-identification', 'trap-engineering'],
    traits: [
      'Tactical Adaptation: Extract one additional high-quality specimen when harvesting. Per Hunt, after witnessing monster attack, learn one: weak point, vulnerability, or likely next move.',
    ],
    starterKit: ['Trap Kit'],
  },
  {
    id: 'seasoned-soldier',
    name: 'Seasoned Soldier',
    description: 'CON/STR or DEX veteran',
    statBonuses: [
      { kind: 'fixed', stat: 'CON', amount: 2 },
      { kind: 'choice', stats: ['STR', 'DEX'], amount: 1 },
    ],
    skillProficiencies: ['athletics', 'leadership', 'trap-engineering'],
    traits: [
      'Hardened Fighter: Reduce first damage each hunt by (CON mod × 2, min 2). Intercept (Reaction, 1 Stamina): become target before damage rolled, gain +1 AR.',
    ],
    starterKit: ['Field Medical Kit'],
  },
  {
    id: 'shadow-beast-operative',
    name: 'Shadow Beast Operative',
    description: 'DEX/INT stealth specialist',
    statBonuses: [
      { kind: 'fixed', stat: 'DEX', amount: 2 },
      { kind: 'fixed', stat: 'INT', amount: 1 },
    ],
    skillProficiencies: ['stealth', 'negotiation', 'trap-engineering'],
    traits: [
      'Cloak & Dagger: Advantage on Negotiation (CHA) when using deception. Per Hunt, as Fast Action, vanish into cover; make Stealth vs enemy Instinct to become Hidden.',
    ],
    starterKit: ['Trap Kit'],
  },
  {
    id: 'small-game-hunter',
    name: 'Small Game Hunter',
    description: 'INS/STR trapper',
    statBonuses: [
      { kind: 'fixed', stat: 'INS', amount: 2 },
      { kind: 'fixed', stat: 'STR', amount: 1 },
    ],
    skillProficiencies: ['heavy-trap-setup', 'grapple', 'trap-engineering'],
    traits: [
      "Master of the Hunt: Advantage when setting/disguising/modifying traps. Per Hunt, predict monster's escape route; on success, pre-position trap as if +1 Prep round.",
    ],
    starterKit: ['Trap Kit'],
  },
];

export function getBackground(id: string): Background {
  const b = BACKGROUNDS.find(b => b.id === id);
  if (!b) throw new Error(`Unknown background: ${id}`);
  return b;
}
