export type SpecRank = {
  rank: 1 | 2 | 3;
  label: 'Core Passive' | 'Rank 2' | 'Rank 3';
  name: string;
  description: string;
};

export type Specialization = {
  id: string;
  name: string;
  role: string;
  quote: string;
  icon: string;
  bestWith: string[];
  ranks: [SpecRank, SpecRank, SpecRank];
};

export const SPECIALIZATIONS: readonly Specialization[] = [
  {
    id: 'juggernaut',
    name: 'Juggernaut',
    role: 'Tank',
    quote: 'The best offense is a fortress of steel.',
    icon: '🛡️',
    bestWith: ['greatshield', 'spear-shield', 'hammer'],
    ranks: [
      {
        rank: 1,
        label: 'Core Passive',
        name: 'Iron Reprisal',
        description:
          'When you Block and reduce damage to half, the attacker takes damage equal to your CON modifier (once per attacker per round).',
      },
      {
        rank: 2,
        label: 'Rank 2',
        name: 'Plate Angles',
        description: '+1 AR permanently.',
      },
      {
        rank: 3,
        label: 'Rank 3',
        name: 'Steadfast',
        description: 'You may regain 1d12 health after taking a lethal blow. Once per hunt.',
      },
    ],
  },
  {
    id: 'deadeye',
    name: 'Deadeye',
    role: 'Ranged',
    quote: 'One shot, one kill.',
    icon: '🎯',
    bestWith: ['bow', 'arbalest'],
    ranks: [
      {
        rank: 1,
        label: 'Core Passive',
        name: 'Stable Platform',
        description:
          'If you moved 5 ft or less, your ranged attacks ignore long-range disadvantage and gain +1 to hit.',
      },
      {
        rank: 2,
        label: 'Rank 2',
        name: 'Marked Precision',
        description:
          'If you Aim (skip movement and Fast Actions this turn), your next Called Shot next turn does not suffer disadvantage and gains +1 Power Die.',
      },
      {
        rank: 3,
        label: 'Rank 3',
        name: 'Perfect Focus',
        description:
          '1/hunt: Treat your next ranged attack as a guaranteed hit (cannot crit), or if it would already hit, add +2 Power Dice instead.',
      },
    ],
  },
  {
    id: 'warblade',
    name: 'Warblade',
    role: 'Aggressive Melee',
    quote: 'Turn every strike into an opening.',
    icon: '⚔️',
    bestWith: ['claws', 'greatsword', 'whip', 'spear-shield'],
    ranks: [
      {
        rank: 1,
        label: 'Core Passive',
        name: 'Opening Cut',
        description:
          'If you Dodge successfully or Parry and Riposte, you gain 1 Free Attack (0 Stamina, basic attack only; 1/round).',
      },
      {
        rank: 2,
        label: 'Rank 2',
        name: 'Rolling Pressure',
        description: 'After you land a Free Attack, your next attack this round gets +2 to hit.',
      },
      {
        rank: 3,
        label: 'Rank 3',
        name: 'Bloodthirst',
        description:
          "1/hunt window: For 2 rounds, on each critical hit, regain Stamina equal to your weapon's main stat mod (min 1).",
      },
    ],
  },
  {
    id: 'elementalist',
    name: 'Elementalist',
    role: 'Imbue',
    quote: 'Master the forces of nature.',
    icon: '🔥',
    bestWith: ['wand', 'hunting-flute', 'claws', 'spear-shield'],
    ranks: [
      {
        rank: 1,
        label: 'Core Passive',
        name: 'Elemental Imbuement',
        description:
          "Toggle: Imbue your weapon with an element you know. Your first hit each turn gains that element's Tier-1 rider (e.g., Fire: +1 fire die; Ice: apply Chilled on failed CON save; Lightning: +1 chain jump on failed DEX save). Costs 1 Stamina/turn to maintain.",
      },
      {
        rank: 2,
        label: 'Rank 2',
        name: 'Extended Channel',
        description:
          "While Imbued, +10 ft reach on melee elemental riders or +20 ft range for ranged elemental riders (doesn't extend the weapon's physical reach, just the rider effect).",
      },
      {
        rank: 3,
        label: 'Rank 3',
        name: 'Overcharge',
        description:
          '1/hunt: End your Imbuement to create a 10-ft burst centered on your target (or on you): deal 2x your basic attack\'s element dice to hostiles; riders apply once. You lose the Imbuement until end of fight or Downtime.',
      },
    ],
  },
  {
    id: 'monster-butcher',
    name: 'Monster Butcher',
    role: 'Executioner',
    quote: 'Hunt with precision, kill without mercy.',
    icon: '💀',
    bestWith: ['greatsword', 'spear-shield'],
    ranks: [
      {
        rank: 1,
        label: 'Core Passive',
        name: "Mercy's Edge",
        description:
          'Against foes at 50% HP or below, you deal +2 damage and your attacks against broken parts gain +1 Power Die.',
      },
      {
        rank: 2,
        label: 'Rank 2',
        name: 'Part Mastery',
        description:
          'When you hit a broken part, deal +2 additional damage and the target makes a CON save vs your DC or Bleed.',
      },
      {
        rank: 3,
        label: 'Rank 3',
        name: 'Deathblow',
        description:
          '1/hunt: Against a target at 10% HP or below, make a Deathblow attack. On hit, the target makes a CON save vs your DC. Fail: slain. Success: takes 3x your weapon dice instead.',
      },
    ],
  },
  {
    id: 'evasive-phantom',
    name: 'Evasive Phantom',
    role: 'Speed / Position',
    quote: 'Miss me? Catch me.',
    icon: '💨',
    bestWith: ['boomerang', 'claws', 'whip', 'bow'],
    ranks: [
      {
        rank: 1,
        label: 'Core Passive',
        name: 'Slipstream',
        description:
          'When an enemy misses you with an attack, you may move up to 10 ft (no OAs from that attacker). 1/turn.',
      },
      {
        rank: 2,
        label: 'Rank 2',
        name: 'Ghost Counter',
        description:
          'After a successful Dodge, your next attack before end of your next turn gets +2 to hit and +1 Power Die.',
      },
      {
        rank: 3,
        label: 'Rank 3',
        name: 'Shadow Step',
        description:
          '1/hunt: Negate one entire incoming attack sequence (multi-hit) with no Stamina cost, then reposition up to your Speed.',
      },
    ],
  },
  {
    id: 'tactician',
    name: 'Tactician',
    role: 'Support / Control',
    quote: 'Win the hunt before it begins.',
    icon: '🎭',
    bestWith: ['whip', 'hunting-flute', 'conduit'],
    ranks: [
      {
        rank: 1,
        label: 'Core Passive',
        name: 'Command Prep',
        description:
          'Once each turn, you may take one Preparation Action that does not replace your Action.',
      },
      {
        rank: 2,
        label: 'Rank 2',
        name: 'Plan Ahead',
        description:
          'Choose one ally within 30 ft; until the start of your next turn, they gain +1 to their next attack or defense roll. If you used Command Prep this turn, that ally may also move up to 5 ft without provoking.',
      },
      {
        rank: 3,
        label: 'Rank 3',
        name: 'Mastermind',
        description:
          '1/hunt: Pick one visible monster — the GM reveals its next intended action/target. Then choose one: Initiative Swap (swap initiative of two allies this round) or Prep Surge (one ally within 30 ft immediately takes a Preparation Action).',
      },
    ],
  },
];

export function getSpec(id: string): Specialization {
  const s = SPECIALIZATIONS.find((s) => s.id === id);
  if (!s) throw new Error(`Unknown specialization: ${id}`);
  return s;
}
