// src/types/character.ts
import type { SkillId } from '../data/skills';

export type Proficiency = 'novice' | 'trained' | 'master';

export type InventoryItem = {
  name: string;
  type: 'weapon' | 'armor' | 'tool' | 'consumable' | 'monster-part' | 'misc';
  qty?: number;
  description?: string;
  isStarterKit?: boolean;
};

export type WeaponEntry = {
  weaponId: string;
  huntsCompleted: number;
  isPrimary: boolean;
  notes?: string;
};

export type SpecEntry = {
  specId: string;
  rankUnlocked: 1 | 2 | 3;
};

export type LiveState = {
  currentHp: number;
  currentStamina: number;
  conditions: { conditionId: string; severity?: number; notes?: string }[];
  actionEconomy: {
    actionUsed: boolean;
    fastActionUsed: boolean;
    reactionUsed: boolean;
    breathingTurn: boolean;
  };
  exhausted: boolean;
};

export type BioEntry = {
  date: string;
  text: string;
};

export type Bio = {
  personality?: string;
  motivations?: string;
  partyConnections?: string;
  journal: BioEntry[];
};

export type Character = {
  schemaVersion: 1;
  id: string;
  createdAt: string;
  updatedAt: string;

  name: string;
  pronouns?: string;
  raceId: string;
  lineageId?: string;
  backgroundIds: string[];
  portraitUrl?: string;

  hunterRank: number;
  cxp: number;

  baseStats: {
    STR: number; DEX: number; CON: number;
    INT: number; INS: number; CHA: number;
  };

  skillProficiencies: Partial<Record<SkillId, Proficiency>>;

  weapons: WeaponEntry[];
  primaryWeaponId: string;

  specializations: SpecEntry[];
  talentIds: string[];

  armor: {
    armorId: string;
    tier: 1 | 2 | 3 | 4 | 5 | 6;
    type: 'light' | 'medium' | 'heavy';
  } | null;
  gearSlots: (InventoryItem | null)[];
  packSlots: (InventoryItem | null)[];
  consumables: { itemId: string; qty: number }[];
  tools: string[];

  knownRecipes: string[];
  monsterParts: { partId: string; monsterId: string; qty: number }[];
  workshopId?: string;

  liveState: LiveState;
  bio: Bio;
};

export const STATS = ['STR', 'DEX', 'CON', 'INT', 'INS', 'CHA'] as const;
export type StatKey = typeof STATS[number];
