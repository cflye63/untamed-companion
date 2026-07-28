// src/data/conditions.ts

export type ConditionCategory =
  | 'elemental'
  | 'control'
  | 'positional'
  | 'physical'
  | 'resource';

export type Condition = {
  id: string;
  name: string;
  category: ConditionCategory;
  description: string;
  staminaRider?: string;
  color?: string;
};

export const CONDITIONS: readonly Condition[] = [
  // ── Elemental & Physical ────────────────────────────────────────────────

  {
    id: 'poisoned',
    name: 'Poisoned',
    category: 'physical',
    description:
      'Disadvantage on attack rolls and CON saves; take 1 damage at the start of your turn until treated.',
    staminaRider: '+1 Stamina per Action taken (your body is fighting the toxin).',
    color: '#5a9e4b',
  },
  {
    id: 'bleeding',
    name: 'Bleeding',
    category: 'physical',
    description:
      'Take 1d4 HP at the end of your turn per stack until treated. Gain a stack if you Dash or move >15 ft this turn. First Aid (INT DC 12) or any healing ends Bleeding.',
    staminaRider: '+1 Stamina when moving >15 ft or Dashing (exertion worsens the wound).',
    color: '#c54a4a',
  },
  {
    id: 'burned',
    name: 'Burned',
    category: 'elemental',
    description:
      'Take 1d4 fire damage at end of your turn; disadvantage on Concentration checks. Water removes Burned (then you become Soaked).',
    staminaRider: '−1 Stamina at the start of your turn (fighting through searing pain).',
    color: '#e07830',
  },
  {
    id: 'chilled',
    name: 'Chilled',
    category: 'elemental',
    description: '+1 Stamina cost to all abilities; −10 ft movement.',
    staminaRider: '+1 Stamina per ability used.',
    color: '#6ba0d4',
  },
  {
    id: 'soaked',
    name: 'Soaked',
    category: 'elemental',
    description:
      'Lightning damage ×2 against you. At end of your turn, CON save DC 12 or gain Chilled. Fire/Heat removes Soaked.',
    staminaRider: '+1 Stamina per Move action (waterlogged gear drags on every step).',
    color: '#4a7eb5',
  },

  // ── Control ─────────────────────────────────────────────────────────────

  {
    id: 'staggered',
    name: 'Staggered',
    category: 'control',
    description:
      'Cannot Move or take an Action until your next turn; can still use Fast actions and Reactions.',
    color: '#b08020',
  },
  {
    id: 'stunned',
    name: 'Stunned',
    category: 'control',
    description:
      'Lose your next turn (no Move/Action/Fast/Reaction). Attacks against you have advantage; you automatically fail STR/DEX saves until end of your next turn.',
    color: '#b08020',
  },
  {
    id: 'paralyzed',
    name: 'Paralyzed',
    category: 'control',
    description:
      'Cannot Move, Action, Fast, or Reaction until your next turn. Attacks against you have advantage.',
    color: '#7a5fb0',
  },
  {
    id: 'dazed',
    name: 'Dazed',
    category: 'control',
    description:
      'Disadvantage on attack rolls and Instinct checks; cannot take Reactions. Ends at the end of your next turn.',
    color: '#b08020',
  },
  {
    id: 'feared',
    name: 'Feared',
    category: 'control',
    description:
      'You cannot willingly move closer to the source of fear. At the start of your turn, make a CHA save vs the fear DC — success ends the condition. On failure, you must spend your Move action moving away from the source (or remain stationary if no safe path exists). You can still take Actions and Fast Actions normally.',
    staminaRider: '+1 Stamina per Reaction taken (panic undermines discipline).',
    color: '#8a3060',
  },
  {
    id: 'sleep',
    name: 'Sleep',
    category: 'control',
    description:
      'Lose your turn; regain 4 Stamina. Wake up if you succeed an Instinct roll at the end of your turn or if you take damage. All attacks against a Sleeping target are made with advantage.',
    color: '#6070a0',
  },

  // ── Positional ───────────────────────────────────────────────────────────

  {
    id: 'prone',
    name: 'Prone',
    category: 'positional',
    description:
      'Melee attacks against you have advantage; ranged attacks against you have disadvantage; your own ranged attacks are at disadvantage.',
    staminaRider: '2 Stamina to stand up.',
    color: '#806040',
  },
  {
    id: 'taunted',
    name: 'Taunted',
    category: 'positional',
    description:
      'Your next attack must target the taunter; ends after that attack or if you cannot target them.',
    color: '#a04040',
  },
  {
    id: 'grappled',
    name: 'Grappled',
    category: 'positional',
    description:
      'Speed 0; disadvantage on checks to resist forced movement. Break free by passing a STR or DEX check versus the grappler at the start of your turn. An ally within reach of the grappler may spend their Action to break the Grapple — they make a contested STR check against the grappler (same DC as the Escape check). On success, the Grappled creature is freed immediately.',
    color: '#806040',
  },
  {
    id: 'restrained',
    name: 'Restrained',
    category: 'positional',
    description:
      'Speed 0; disadvantage on DEX saves; cannot Dodge; attacks against you have advantage.',
    color: '#7a5fb0',
  },

  // ── Resource ─────────────────────────────────────────────────────────────

  {
    id: 'exhausted',
    name: 'Exhausted',
    category: 'resource',
    description:
      'Stamina set to 0; cannot take Actions or Fast actions; attacks against you have advantage; auto-fail STR/DEX saves; movement halved. On your next turn, you may recover +4 Stamina at end of turn if you take no Action.',
    staminaRider: 'Stamina → 0 on application.',
    color: '#808080',
  },
] as const;

export function getCondition(id: string): Condition {
  const c = CONDITIONS.find((c) => c.id === id);
  if (!c) throw new Error(`Unknown condition: ${id}`);
  return c;
}
