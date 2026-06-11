// src/data/weapons.ts
import type { StatId } from './skills';

export type WeaponTier = 1 | 2 | 3 | 4 | 5 | 6;

export type Technique = {
  name: string;
  staminaCost: number;
  description: string;
  unlockedAt?: 'novice' | 'trained' | 'master';
};

export type Weapon = {
  id: string;
  name: string;
  tier: WeaponTier;
  primaryStat: StatId;    // stat used for to-hit
  damageStat: StatId;     // stat that scales damage
  range: string;          // e.g., "Melee 5 ft", "Ranged 60/120 ft"
  damageDice: string;     // e.g., "1d10" — tier 1 base die only
  powerDice: number;      // baseline power dice count
  primaryRole: string;    // combat role badge, e.g. 'Melee Damage'
  secondaryRole: string;  // secondary role badge, e.g. 'Bruiser'
  summary: string;        // one-line hook shown on wizard cards
  bestWith?: string[];    // recommended specialization ids/names
  techniques: Technique[];
  description: string;
};

export const WEAPONS: readonly Weapon[] = [
  {
    id: 'greatsword',
    name: 'Greatsword',
    tier: 1,
    primaryStat: 'STR',
    damageStat: 'STR',
    range: 'Melee 5 ft',
    damageDice: '1d12',
    powerDice: 1,
    primaryRole: 'Melee Damage',
    secondaryRole: 'Bruiser',
    summary: 'Build Momentum with every hit to unlock crushing crits.',
    description:
      'Heavy two-handed weapon built for raw strength and devastating attacks. Core mechanic: Momentum (max 3) — gained by landing hits, lost on miss/dodge/target switch. At Momentum 3 gain +3 flat damage, expanded crit 18–20, and +1 power die on all attacks.',
    techniques: [
      {
        name: 'Cleave',
        staminaCost: 2,
        description:
          'Massive overhand strike with advantage. Deals base damage + STR. Drawback: Exposed until end of next turn. Special: if you had 0 Momentum when declared and it hits, gain +2 Momentum instead of +1.',
      },
      {
        name: 'Blade Wave',
        staminaCost: 2,
        description:
          '15-ft arc originating from you. One STR-based attack roll applied to all creatures in arc. On hit: base damage + STR. Hit targets make STR/DEX save (DC 10+STR+prof) or become Staggered. M3 adds +1 Power Die and leaves difficult terrain.',
      },
      {
        name: "Titan's Guard",
        staminaCost: 2,
        description:
          'Reaction (declared after being targeted, before damage). Until start of next turn: halve all damage taken. If an enemy hits you during this window, make one free Basic Greatsword attack against that attacker.',
      },
      {
        name: 'Tremor Strike',
        staminaCost: 3,
        description:
          'Ground-shaking downward slam. Primary target: 3d12 + STR on hit. Shockwave: all creatures within 10 ft of impact make DEX save or fall Prone. M3 adds +1 Power Die to main hit.',
      },
      {
        name: "Executioner's Strike",
        staminaCost: 3,
        description:
          'Two-turn wind-up finisher. Turn 1: charge (Rooted, disadvantage DEX saves). Turn 2: single attack dealing (base + STR) × 2 on hit; crits deal ×4. On hit: target Staggered. If started charge at M3: advantage and +1 Power Die.',
      },
    ],
  },
  {
    id: 'bow',
    name: 'Bow',
    tier: 1,
    primaryStat: 'DEX',
    damageStat: 'DEX',
    range: 'Ranged 30/120 ft',
    damageDice: '1d8',
    powerDice: 1,
    primaryRole: 'Ranged Damage',
    secondaryRole: 'Utility',
    summary: 'Hold your ground to build Focus for deadly precision shots.',
    description:
      'Versatile ranged weapon rewarding precision and positioning. Core mechanic: Predator\'s Focus (max 3) — gained by not moving on your turn, lost by moving >5 ft, being Knocked Prone/Stunned, or Dashing. Each Focus adds +1 flat damage to the next Bow attack (consumed on hit). Comes in Bone Bow (offense: Piercing/Barbed Arrows) or Steel Bow (support: Signal/Binding Arrows).',
    techniques: [
      {
        name: 'Power Shot',
        staminaCost: 2,
        description:
          'Wind-up two-turn shot. Aim turn: spend Action, cannot move >5 ft. Release turn: attack with advantage, +1 damage die of current tier. At 3 Focus, may release same turn but lose all Focus. Breaks if moved >5 ft or Stunned/Prone.',
      },
      {
        name: 'Multishot',
        staminaCost: 3,
        description:
          '30-ft cone AoE. One attack roll vs each target\'s AR. On hit: 3d6 + DEX (T4+: 4d6 + DEX); targets may DEX save vs Bow DC to halve. If only 1 target in cone: target makes DEX save or Slowed. At 3 Focus: ignores half cover, enemies have disadvantage on DEX save.',
      },
      {
        name: 'Concentration',
        staminaCost: 0,
        description:
          'Passive. While Aiming a Power Shot, retain Reactions and may Dodge. If you successfully Dodge while Aiming, may release Power Shot after that attack resolves. Do not lose Focus merely for holding the aim.',
      },
      {
        name: 'Rain of Arrows',
        staminaCost: 3,
        description:
          'Place a 20-ft-radius zone within 30 ft. On placement: creatures take base Bow damage + DEX (attack vs AR). Zone persists 2 rounds. Each creature\'s turn in zone: DEX save vs Bow DC — fail: Slowed and half base damage; success: no effect. At 3 Focus, expand radius to 25 ft.',
      },
      {
        name: 'Flying Drake Shot',
        staminaCost: 3,
        description:
          'Wind-up (same as Power Shot). Release: 30-ft line; one attack roll vs each target\'s AR. Damage: +3 Power Dice of current tier. Targets struck make STR save vs Bow DC or fall Prone. Attack with advantage. At 3 Focus: line extends to 40 ft and ignores half cover.',
      },
    ],
  },
  {
    id: 'greatshield',
    name: 'Greatshield',
    tier: 1,
    primaryStat: 'CON',
    damageStat: 'CON',
    range: 'Melee 5 ft',
    damageDice: '1d10',
    powerDice: 1,
    primaryRole: 'Tank',
    secondaryRole: 'Protector',
    summary: 'Block to build Resolve — heal, recover, and hold the line.',
    description:
      'Defensive tank weapon that transforms the hunter into a living bastion. Core mechanic: Resolve (max 3) — gained by successfully Blocking or succeeding saves vs knockdown/stun; lost if Knocked Prone, Staggered, moved against will, or moving >10 ft. Spend Resolve once per turn: recover 1d10 HP per Resolve, regain 1 Stamina per Resolve, or reroll one failed saving throw. Grants +1 extra Reaction/round usable only for Block.',
    techniques: [
      {
        name: 'Bulwark',
        staminaCost: 2,
        description:
          'Taunt: target makes INS save vs Greatshield DC or becomes Taunted. Wall: take −50% damage from all sources until next turn.',
      },
      {
        name: 'Bastion',
        staminaCost: 1,
        description:
          'Reaction. When ally within 5 ft is targeted, interpose: attack retargets to you, you take −50% damage. Counts as Block for features caring about Blocks, but does not generate Resolve.',
      },
      {
        name: 'Splendid Guard',
        staminaCost: 0,
        description:
          'Passive. Retaliation: first time per round you successfully Block an attack from a creature, that creature takes 1d8 + CON damage (T5: 2d8 + CON). Steadfast: advantage on CON saves.',
      },
      {
        name: 'Shield Rush / Shield Bash',
        staminaCost: 2,
        description:
          'Move up to 20 ft in a straight line (must travel ≥10 ft). Each creature in path: attack vs AR; on hit deal 2× weapon dice + CON; CON save or Staggered. May consume Resolve for +1 Power Die per stack to first creature hit.',
      },
      {
        name: 'Fortress of the Hunt',
        staminaCost: 2,
        description:
          'Upkeep 2 STA/turn. While active: you gain +2 AR, cannot be moved or knocked Prone, allies within 10 ft gain +1 AR and advantage on CON saves. Bastion range extends to 10 ft. Successful Blocks force attacker INS save or Taunted (once per attacker per round).',
      },
    ],
  },
  {
    id: 'wand',
    name: 'Wand',
    tier: 1,
    primaryStat: 'INT',
    damageStat: 'INT',
    range: 'Ranged 60 ft',
    damageDice: '1d6',
    powerDice: 1,
    primaryRole: 'Controller',
    secondaryRole: 'Damage',
    summary: 'Plant elemental Clusters, then detonate them in chain explosions.',
    description:
      'Tactical elemental weapon built around Magical Clusters — elemental nodes attached to enemies or terrain. Place cluster (Action, 1 STA): DEX save vs Wand DC to attach; max 3 active (T3: 4), per-target cap 3. Detonate (Fast Action, 1 STA): each cluster deals per-tier Cluster Bomb damage to host and creatures within 10 ft. Stacking: +1 damage die per additional cluster on same host. Damage type (Fire/Ice/Lightning/Earth/Air/Water/Piercing/Blunt/Slash/Sonic/Poison/Paralysis) determines Hex Charge passive effect.',
    techniques: [
      {
        name: 'Hex Charge',
        staminaCost: 0,
        description:
          'Passive. Each successfully attached cluster applies a lingering hex based on your wand\'s damage type (e.g. Fire→Scorch, Ice→Frostbite, Lightning→Arc, Earth→Sunder, etc.). While hexed: passive per-type penalty. On detonate: per-type save or condition applied.',
      },
      {
        name: 'Cluster Fieldcraft',
        staminaCost: 0,
        description:
          'Passive. Terrain Wards: unattached clusters project 10-ft difficult terrain for enemies. Host Drag: creatures with ≥1 cluster treat their squares as difficult terrain for enemies. Tripwire: Reaction (1 STA, 1/round) — when enemy enters Terrain Ward, detonate that single cluster immediately.',
      },
      {
        name: 'Cluster Mastery',
        staminaCost: 0,
        description:
          'Passive. Max active clusters: 4. Place range +10 ft (to 40 ft; 50 ft at T5). Magnetize: when any cluster detonates, may slide one other cluster within 15 ft up to 5 ft toward nearest enemy.',
      },
      {
        name: 'Encore',
        staminaCost: 1,
        description:
          'Reaction. When one of your clusters detonates or is removed, immediately attempt to place a new cluster within range. Does not consume your Action. Normal attach DEX save applies.',
      },
      {
        name: 'Final Flourish',
        staminaCost: 3,
        description:
          'Fast Action. Requires 4 active clusters. All clusters detonate; damage assigned to a chosen target within range. Each cluster deals 3d6 + INT; total is doubled. Allies gain advantage on attack rolls until end of your next turn.',
      },
    ],
  },
  {
    id: 'hunting-flute',
    name: 'Hunting Flute',
    tier: 1,
    primaryStat: 'CHA',
    damageStat: 'CHA',
    range: 'Aura 30 ft',
    damageDice: '1d6',
    powerDice: 1,
    primaryRole: 'Support Controller',
    secondaryRole: 'Support',
    summary: 'Play Ballads that empower allies and disrupt the monster.',
    description:
      'Ranged support weapon that inspires allies and disrupts monsters through melodies. Basic Attack — Sonic Note: choose up to 2 targets (T3: 3; T5: 4) in 30-ft aura; attack vs AR for tier dice + CHA. Core mechanic: Ballads — magical melodies active as long as concentration is maintained. Play (Fast Action, 1 STA start, 1 STA/turn upkeep). One active Ballad at a time. Lose Concentration on failed CHA check vs damage. Comes in Bone Flute (aggressive: Blood Rhythm, Predator Pulse) or Song Flute (defensive: Soothing Tones, Earthen Refrain).',
    techniques: [
      {
        name: 'Tempo Change',
        staminaCost: 0,
        description:
          'Passive. When you switch Ballads, gain +10 ft movement and don\'t provoke opportunity attacks during that movement.',
      },
      {
        name: 'Echo Pulse',
        staminaCost: 0,
        description:
          'Passive. Ballad radius +10 ft (most songs reach 40 ft). Chip Beat: each hostile starting its turn inside your active Ballad takes 1d4 sonic damage (once per creature per round).',
      },
      {
        name: 'Dissonant Crescendo',
        staminaCost: 2,
        description:
          'Reaction, 1/round. Trigger: a hostile enters your Ballad area or makes an attack while inside it. Effect: 15-ft radius burst within Ballad area; each enemy takes weapon damage and makes CHA save vs Flute DC or loses its next attack action.',
      },
      {
        name: 'Harmonic Resonance',
        staminaCost: 0,
        description:
          'Passive. You may maintain two Ballads at once. Advantage on all Concentration saves. Stamina upkeep doubles (2/turn) while sustaining multiple songs.',
      },
      {
        name: 'Magnum Opus',
        staminaCost: 4,
        description:
          'Fast Action. Upkeep 4 STA/turn. 1/hunt. While active: maintain up to 3 Ballads at once; individual upkeep becomes 0. Advantage on CHA-based saves and checks tied to playing or concentration. Ends if can\'t pay upkeep, lose Concentration, or deactivate.',
      },
    ],
  },
  {
    id: 'whip',
    name: 'Whip',
    tier: 1,
    primaryStat: 'INS',
    damageStat: 'INS',
    range: 'Reach 15 ft',
    damageDice: '1d6',
    powerDice: 1,
    primaryRole: 'Controller',
    secondaryRole: 'Lockdown',
    summary: 'Snare the monster with Restraint and lock down its movement.',
    description:
      'Precision control weapon built around Restraint. Core mechanic: Restraint — after hitting, spend Fast Action (1 STA) to attempt Restraint; target makes DEX save vs Whip DC. On fail: Restrained (Speed 0, cannot Dodge). Maintain by paying 1 STA/turn. Backlash: if initial save succeeds, you take 1d4 damage. Note: uses INS for both attack and damage rolls.',
    techniques: [
      {
        name: 'Whiplash',
        staminaCost: 2,
        description:
          'Requires active Restraint on target. Make Whip attack against Restrained target with advantage. On hit, add +1 Power Die to damage.',
      },
      {
        name: 'Trip Pull',
        staminaCost: 2,
        description:
          'Attack vs AR. On hit: base Whip damage + INS; target makes STR save or Prone and pulled 10 ft toward you. If airborne: also Grounded. Already Restrained: skip save — auto Prone, pulled 10 ft, and 2d10 + INS bonus damage.',
      },
      {
        name: 'Sentinel Lash',
        staminaCost: 1,
        description:
          'Reaction. Trigger: hostile enters or leaves your 15-ft reach. Make Whip attack against triggering creature. On hit: normal damage. May immediately attempt Restraint (1 STA still applies). Fires on entry AND exit.',
      },
      {
        name: 'Chokehold',
        staminaCost: 3,
        description:
          'Attack with +2 Power Dice. On hit: base Whip damage + INS + 2 extra weapon dice. If already Restrained: target makes CON save or Stunned until end of your next turn. Forceful Restraint: may apply Restraint as part of this attack even if DEX save fails (at disadvantage).',
      },
      {
        name: "Serpent's Dance",
        staminaCost: 4,
        description:
          'Make three separate Whip attacks against up to three different targets within reach, each resolved independently. Coil Ward (passive until start of next turn): reach becomes a zone of control — creatures entering or leaving without permission trigger a free Sentinel Lash (once per creature per turn). Chain Restraint: attempt Restraint on each hit target (1 STA per attempt).',
      },
    ],
  },
  {
    id: 'spear-shield',
    name: 'Spear and Shield',
    tier: 1,
    primaryStat: 'DEX',
    damageStat: 'DEX',
    range: 'Reach 10 ft / Thrown 20/60 ft',
    damageDice: '1d8',
    powerDice: 1,
    primaryRole: 'Flex',
    secondaryRole: 'Defender/Skirmisher',
    summary: 'Switch stances between sturdy defense and swift offense.',
    description:
      'Versatile hybrid weapon with Stance Switch mechanic. Spear attacks use DEX; Shield DCs use CON. Sentinel Stance: +1 AR, advantage on STR/DEX saves vs movement, but Speed halved. Assault Stance: +5 ft Speed, once per turn make a Fast Action spear jab (1 STA) in addition to normal Action. Recall thrown spear as Fast Action (no STA cost). Note: two distinct stats in use (DEX for attacks, CON for shield DCs); DEX chosen as primaryStat/damageStat as it drives most damage output.',
    techniques: [
      {
        name: 'Point & Pivot',
        staminaCost: 0,
        description:
          'Passive. Sentinel: when you successfully Block a melee attack, make one immediate counter-thrust (0 STA, once per round). Assault: after hitting with Fast Action spear jab, shift 5 ft without provoking opportunity attacks.',
      },
      {
        name: 'Shield Bash / Marked Javelin',
        staminaCost: 2,
        description:
          'Stance-dependent. Sentinel — Shield Bash (2 STA, Reaction after Block): deal weapon die + CON; target makes STR save or Staggered; fail by 5+: Stunned. Assault — Marked Javelin (Passive): thrown spear hits Mark the target until end of next turn; you and allies gain +1 to attacks vs it and your next spear hit deals +1 Power Die.',
      },
      {
        name: "Guardian's Rally / Rapid Thrust",
        staminaCost: 3,
        description:
          'Stance-dependent. Sentinel — Guardian\'s Rally (Passive): Block for ally within 5 ft; that ally gains +1 to next attack roll and recovers 1 Stamina. Assault — Rapid Thrust (3 STA, Action): two spear attacks vs one target in reach; if both hit add +1 Power Die to total damage.',
      },
      {
        name: 'Bulwark / Skewer',
        staminaCost: 0,
        description:
          'Passive both. Sentinel — Bulwark: first Block each round reduces hit damage by 50%. Assault — Skewer: spear attacks critically hit on 19–20.',
      },
      {
        name: 'Unbreakable Aegis / Piercing Charge',
        staminaCost: 3,
        description:
          'Stance-dependent. Sentinel — Unbreakable Aegis (Passive): first successful Block each round restores 1 STA and grants +1 AR until start of next turn; Block range extends to 10 ft. Assault — Piercing Charge (3 STA, Action): throw spear up to 30 ft; on hit pull yourself to target and make melee follow-up with advantage; if either hit crits gain +5 ft Speed and +1 attack until end of next turn.',
      },
    ],
  },
  {
    id: 'claws',
    name: 'Claws',
    tier: 1,
    primaryStat: 'DEX',
    damageStat: 'DEX',
    range: 'Melee 5 ft',
    damageDice: '1d6',
    powerDice: 1,
    primaryRole: 'Melee Damage',
    secondaryRole: 'Skirmisher',
    summary: 'Chain follow-up swipes for relentless close-range pressure.',
    description:
      'High-mobility close-combat weapons for relentless pressure and combo chaining. Core mechanic: Predatory Chain — after any Claw hit, make one Follow-up Swipe as Fast Action (1 STA); if that hits, make another as Reaction (1 STA). Chain ends on miss, Dodge, Parry, or after 2 follow-ups. Max 2 follow-ups per chain.',
    techniques: [
      {
        name: 'Rend',
        staminaCost: 2,
        description:
          'Two Claw attacks against the same target. If both hit: apply Bleeding (1d4 damage at end of target\'s turn until treated). Each hit can start or advance Predatory Chain normally.',
      },
      {
        name: 'Leap Pounce',
        staminaCost: 2,
        description:
          'Move up to 15 ft toward visible target (ignores opportunity attacks). Make one Claw attack with advantage. On hit: normal damage + DEX save vs Claw DC or Prone. Immediately start Predatory Chain on a hit.',
      },
      {
        name: "Predator's Tempo",
        staminaCost: 0,
        description:
          'Passive. If you land both chain follow-ups (Link 1 and 2) in the same turn, may use Eviscerate as a Free Action once per turn: deal +1 Power Die (bonus damage to final chain hit, no attack roll). Ends the chain.',
      },
      {
        name: 'Blood Rush',
        staminaCost: 0,
        description:
          'Passive. Flow Step: reposition up to 5 ft between each chain hit (no opportunity attacks). First Blood: first Claw hit each of your turns applies +1 Bleed stack. Miss Cushion (1/turn): if a chain link misses, spend 1 STA to keep the chain going.',
      },
      {
        name: 'Apex Blitz',
        staminaCost: 3,
        description:
          'Once per turn. Make three Claw attacks against one target (3 STA covers all three). Each hit: +1 Power Die to that hit\'s damage. After Blitz: if any attack connected, immediately trigger Predatory Chain (up to 2 follow-up links).',
      },
    ],
  },
  {
    id: 'boomerang',
    name: 'Boomerang',
    tier: 1,
    primaryStat: 'INS',
    damageStat: 'INS',
    range: 'Thrown 30/90 ft',
    damageDice: '1d6',
    powerDice: 1,
    primaryRole: 'Ranged Damage',
    secondaryRole: 'Skirmisher',
    summary: 'Throw, catch, and re-throw on the move with Wayback catches.',
    description:
      'Finesse thrown weapon built around the Wayback Catch loop. Core mechanic: after a hit, roll d20 + INS + prof vs DC 13 — success: boomerang returns and you may re-throw as Fast Action (1 STA). Moving ≥10 ft since last throw: return throw has advantage and +1 damage die. Up to 2 Wayback catches per turn. Double-catch: second return costs 0 STA and deals +1 Power Die on hit.',
    techniques: [
      {
        name: 'Ricochet Step',
        staminaCost: 0,
        description:
          'Passive. After a successful hit, move up to 10 ft before attempting Wayback Catch (no opportunity attacks from hit creatures this turn). First successful Wayback Catch each turn: +1 to hit on immediate return throw.',
      },
      {
        name: 'Split Return',
        staminaCost: 2,
        description:
          'Throw in a curved path hitting two targets within 15 ft of each other, or two body parts on one Large+ creature. Separate attack rolls. Counts as single throw for Wayback. If both attacks hit: Wayback DC −2 and regain 1 STA at end of turn.',
      },
      {
        name: 'Threaded Arc',
        staminaCost: 0,
        description:
          'Passive. Throws ignore all cover (half, three-quarters, full). May target creatures not directly visible if approximate location known. Wayback Catch DC permanently reduced by 2 (DC 13 → 11; Split Return both-hit stacks to DC 9).',
      },
      {
        name: 'Momentum Flow',
        staminaCost: 0,
        description:
          'Passive. Double-catch reward: second return throw deals +2 Power Dice (up from +1). Skate Catch: when attempting Wayback Catch, may move up to full Speed (no opportunity attacks from creatures hit this turn). Safety net (1/turn): reroll one failed Wayback Catch.',
      },
      {
        name: 'Cyclone Return',
        staminaCost: 4,
        description:
          'Throw in a 20-ft line hitting all enemies in path. Attempt Wayback: first catch success — boomerang returns along same line (repeat line attack, +1 damage die per hit); second catch success — third pass with another +1 die (max +2 from Cyclone). All internal throws cost 0 STA. Failing a catch ends the sequence immediately.',
      },
    ],
  },
  {
    id: 'arbalest',
    name: 'Hunting Arbalest',
    tier: 1,
    primaryStat: 'INT',
    damageStat: 'INT',
    range: 'Ranged 30/120 ft',
    damageDice: '1d10',
    powerDice: 1,
    primaryRole: 'Ranged Damage',
    secondaryRole: 'Control',
    summary: 'Brace in place to build Tension for heavy piercing shots.',
    description:
      'Heavy mechanical crossbow built around stationary Tension generation. Core mechanic — Tension: Brace (no STA, spend all remaining movement) or Load (Fast Action or Action, 1 STA) each grant +1 Tension. Fire (Action) consumes all Tension. Tension bonuses apply only while Braced: T1 = +1 attack roll; T2 = +2 attack roll and +1 Power Die. Tension resets on movement, forced movement, Prone, Staggered, or Stunned. Must Load after each shot. Special bolt cartridges (2 uses each per hunt): Bone Arbalest — Piercing Shot (+1 attack), Sharp Shot (Bleeding on hit). Iron Arbalest — Concussive Bolt (Staggered on hit), Scatter Shot (15-ft cone, DEX save).',
    techniques: [
      {
        name: 'Tether Shot',
        staminaCost: 2,
        description:
          'Requires Braced. On hit: target Tethered — Speed −10 ft, 20 ft slack. Slack Check: when target would exceed slack, STR save or Prone and movement ends. Break attempt: target makes STR save at start of turn to remove tether. Two tethers on a flyer = Grounded. Max 2 tethers per target.',
      },
      {
        name: 'Grapnel Switch',
        staminaCost: 2,
        description:
          'On hit, choose: Pull (target) — pull target up to 10 ft toward impact; or Reel-In (you) — you are pulled up to 10 ft toward impact. Tether Synergy: if Tether Shot is active, target takes 1d6 rending damage if it moves before your next turn.',
      },
      {
        name: 'Offload',
        staminaCost: 1,
        description:
          'Reaction, 1/round. Trigger: end of any creature\'s turn, or when you take damage. Effect: Load as a Reaction, gaining +1 Tension. If Braced, remain Braced.',
      },
      {
        name: 'Overwatch Intercept',
        staminaCost: 1,
        description:
          'Reaction, 1/round. Requires Braced. Trigger: creature moves ≥10 ft in a straight line within range. Target must stop immediately or continue (granting you Advantage). Fire as Reaction consuming current Tension. Miss at T2: you are Exposed until start of your next turn.',
      },
      {
        name: 'Transfixion Pin',
        staminaCost: 4,
        description:
          'Requires Braced. Treat as Tension 2 shot (ignore 2 AR, +1 Power Die) even if not at T2, plus +1 extra weapon die. On hit adjacent to terrain: STR save — fail: Pinned (Speed 0, lose 1 Action); success: Immobilized. On hit open ground: fail: Immobilized; success: Slowed. Large/Huge: fail: Immobilized; success: Slowed.',
      },
    ],
  },
  {
    id: 'hammer',
    name: 'Hammer',
    tier: 1,
    primaryStat: 'STR',
    damageStat: 'STR',
    range: 'Melee 5 ft',
    damageDice: '1d12',
    powerDice: 1,
    primaryRole: 'Breaker',
    secondaryRole: 'Controller',
    summary: 'Stack Sunder to crack armor open for the whole party.',
    description:
      'Force multiplier weapon that builds Sunder on targets (max 3 per target). Each Hammer hit: +1 Sunder. Sunder grants: +X to your Hammer attack rolls vs that target (X = Sunder count). Shove rider: after any hit vs target with Sunder ≥1, may attempt Shove (STR save or pushed 5 ft, once per turn). Sunder 3: target makes CON/STR saves vs Hammer riders at disadvantage. No Parry. No Guard.',
    techniques: [
      {
        name: 'Cratering Blow',
        staminaCost: 2,
        description:
          'On hit: deal weapon damage and apply +1 extra Sunder (usually 2 total from this single hit). Rider: target makes CON save vs Hammer DC — fail: Dazed for 1 turn. At Sunder 3 the save is at disadvantage.',
      },
      {
        name: 'Armor Breaker',
        staminaCost: 3,
        description:
          'On hit, choose: Plateburst — consume all Sunder, add +1 Power Die per stack consumed (max +3); or Shatter Window — consume all Sunder, specific part suffers AR −2 until start of your next turn (party-wide vs that part).',
      },
      {
        name: 'Aftershock',
        staminaCost: 0,
        description:
          'Passive. Your Hammer attacks deal +X bonus damage where X equals target\'s current Sunder count. After any Hammer hit, Shove attempt is at advantage.',
      },
      {
        name: 'Seismic Slam',
        staminaCost: 3,
        description:
          'Primary hit: attack vs one target, on hit deal weapon damage + +2 Power Dice. Shock ring: all creatures within 10 ft of impact make DEX save or Prone (no ring damage). Sunder 3 trigger: if primary target had Sunder 3, it must make CON save (at disadvantage) — fail: Stunned for 1 turn.',
      },
      {
        name: 'Shatterfall',
        staminaCost: 4,
        description:
          'Wind-Up: skip Action this turn; Rooted (cannot move or be moved). Interrupted = technique fails. Execution next turn (Action): Hammer attack with advantage. On hit: (weapon damage + STR) × 2; auto-Sunder to 3. CON save at disadvantage — fail: Stunned + Shattered Armor (AR −2 for rest of hunt); success: Staggered + AR −1 for 3 rounds.',
      },
    ],
  },
  {
    id: 'conduit',
    name: 'Conduit',
    tier: 1,
    primaryStat: 'INS',
    damageStat: 'INS',
    range: 'Ranged 40 ft',
    damageDice: '1d8',
    powerDice: 1,
    primaryRole: 'Area Controller',
    secondaryRole: 'Support Controller',
    summary: 'Channel an Aspect field that reshapes the battlefield.',
    description:
      'Battlefield control weapon that projects an Aspect-infused Field. Core mechanic — Channel (Action): enter Channeling state, choose an Aspect. While Channeling: cannot move >5 ft from starting position, cannot Sprint, forced movement breaks Channel; take ≥20% max HP in single hit → CON save DC 12 or Channel breaks; lose 1 STA at end of each turn. Field: 15 ft radius from you. Field Projection (Fast Action, 1 STA): extend Field up to 40 ft away until start of next turn. Aspects (2 universal always present: Wild Pulse, Grounded): Earth/Wind/Water/Storm/Flame/Resonance/Ice available. No Parry. No Guard.',
    techniques: [
      {
        name: 'Rooted Pulse',
        staminaCost: 2,
        description:
          'Requires Channel. Ranged attack vs one creature inside Field. On hit: target makes STR save or movement reduced to 0 until start of its next turn. Already affected by Aspect: save at disadvantage.',
      },
      {
        name: 'Aspect Surge',
        staminaCost: 3,
        description:
          'Requires Channel. Intensify active Aspect until start of next turn. Effect varies by Aspect: e.g. Primal → +1 Power Die on attacks inside Field; Foundation → +2 AR and allies gain +1 AR; Storm → enemies spend 1 STA or take 1d6 lightning; Resonance → all enemies lose Reactions; etc.',
      },
      {
        name: 'Grounded Will',
        staminaCost: 0,
        description:
          'Passive. While Channeling: +1 AR. Channel only breaks from forced movement if you fail STR save vs attacker DC. When an enemy fails a save from your Aspect, regain 1 STA (once per round).',
      },
      {
        name: 'Expanding Dominion',
        staminaCost: 3,
        description:
          'Requires Channel. Field expands to 25 ft radius until start of next turn. During this time: Aspect effects trigger twice per round (once on entry, once on end of turn).',
      },
      {
        name: 'Cataclysm Collapse',
        staminaCost: 3,
        description:
          'Ends Channel. All enemies inside take weapon damage + 2 Power Dice, then make save based on Aspect (e.g. Storm: CON save — fail: Stunned 1 turn; Primal: CON save — fail: Staggered + lose 2 STA; etc.). After use: cannot Channel for 1 round.',
      },
    ],
  },
];

export function getWeapon(id: string): Weapon {
  const w = WEAPONS.find(w => w.id === id);
  if (!w) throw new Error(`Unknown weapon: ${id}`);
  return w;
}
