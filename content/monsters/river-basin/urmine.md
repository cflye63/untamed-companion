# URMINE — The Primal Guardian

**Classification:** Fanged Beast
**Tier:** 1 — Brute / Reactive Guardian
**Biome:** River Basin, Verdant Hollow, Forest Cliffs (caves)
**Element:** None (Physical / Primal)

**Tagline:** "Calm until wounded — then the storm breaks."

---

## 1) Field Notes

A massive bear-like territorial guardian. Normally passive, it only attacks when provoked or wounded. Once injured severely, it enters a violent Fury State — trading stamina for overwhelming aggression.

Urmine difficulty comes from:
- Burst escalation at 50% HP
- Charge disruption
- Collapse window exploitation

It is not fast. It is not tactical. It is a stamina-burning avalanche.

**What Hunters Notice First:**
- A low, resonant warning rumble that carries further than it should through dense forest
- Deep claw gouges in tree trunks at shoulder height — boundary markers, not feeding signs
- The absence of smaller prey animals; they clear the area long before the Urmine moves

**Core Puzzle:**
- Fury State makes Urmine far more dangerous but burns through its stamina rapidly. Bait it into spending Rush on nothing or break its Bristles to accelerate the drain.
- Collapse is the window. The hunters who survive long enough to reach it win. The ones who panic at 50% HP do not.

---

## 2) Stat Block

### Attributes

| Stat | Score | Modifier |
|------|-------|----------|
| STR | 7 | +3 |
| DEX | 5 | +2 |
| CON | 7 | +3 |
| INT | 4 | +2 |
| INS | 7 | +3 |
| CHA | 3 | +1 |

> STR and CON corrected to T1 cap (max 7). Urmine's mass and ferocity are expressed through its Fury mechanics, not inflated stats.

### Combat Attributes

| Stat | Value | Notes |
|------|-------|-------|
| AR | 12 | Dense fur and layered hide — at T1 ceiling |
| HP | 120 | 4P baseline: TierBase (15) + CON (7) × 15 |
| Stamina | 17 | 10 + CON Score (7) |

> **GM Scaling Note:** Base HP above targets a median party (mixed builds, HR 0–2 range).
> For optimized parties (synergized Background + Weapon + Race stacking):
> - HP → **155** (4P optimized: TierBase 15 + CON 7 × 20)
>
> HP 120 validated by sim-005. Fight resolves in 4 rounds. Fury fires twice (R2–R3 monster), Rush delivers ~10 HP to 2 hunters per use, collapse at STA 0 coincides with kill. The design payoff — surviving to see Urmine burn itself out — is preserved.
| Movement | 30 ft | Becomes 40 ft in Fury |
| Attacks/Turn | 2 | — |

**Attack Roll Breakdown:** `d20 + STR mod (+3) + Trained proficiency (+2) = d20+5`

**Exhaustion Rule:**
- Movement halved
- Cannot enter Fury State
- If already in Fury → Fury immediately ends
- If reduced to 0 Stamina → collapses (Prone, stunned until end of next turn)

### Senses

**Territorial Detection:**
- Heightened smell; detects intruders approaching den within 60 ft regardless of stealth
- Tracks by ground scent — reduced by water crossings, smoke, or heavy rain

---

## 3) Attacks

**Swipe — (1 Stamina)**
```
Type:    Melee (STR)
Attack:  d20+5
Damage:  1d10+3
Rider:   None
```

**Maul — (1 Stamina)**
```
Type:    Melee (STR)
Attack:  d20+5
Damage:  2d6+3
Rider:   If both attacks hit the same target in one turn,
         target must succeed STR Save (DC 14) or become
         Restrained until end of its next turn.
```

**Body Slam — (1 Stamina)**
```
Type:    Melee (STR)
Attack:  d20+5
Damage:  2d8+3
Rider:   Target makes DEX Save (DC 14).
         Fail: Knocked Prone.
```

> Body Slam averages 12 — at T1 ceiling. Accepted. No additional gate required given 1 Stamina cost.

---

## 4) Special Abilities

**Fury State**
*(Triggered automatically at ≤50% HP)*

**Benefits:**
- Movement becomes 40 ft
- Gain +2 damage on all melee attacks
- Unlock Spiked Rush

**Cost:**
- Lose 4 Stamina at end of each turn while in Fury

If Urmine reaches 0 Stamina while in Fury: collapses (Prone, stunned until end of next turn).

> Fury is a stamina bomb. Spiked Rush costs 1 Stamina to use — intentionally low. On a Rush turn, Urmine burns 6+ Stamina total (1 attack + 1 Rush + 4 passive drain). The low per-use cost preserves the avalanche feel; the passive drain is the real clock.

---

**Spiked Rush — (1 Stamina, Fury Only)**

Move up to 30 ft in a straight line. First creature in the path takes **3d6+3 damage**.

- **DEX Save (DC 12):**
  - Fail → Knocked Prone
  - Success → Half damage, no Prone

If Urmine hits nothing: it becomes Dazed until start of its next turn.

> 3d6+3 averages 13.5 — above T1 dice ceiling. Accepted as conditional. Gated behind Fury State (50% HP), requires movement charge, and punishes a miss with Daze.

---

## 5) Reactions

**Quill Rebound — (1 Stamina)**
```
Trigger:  Hit by a melee attack while in Fury
Effect:   Attacker takes 1d6 damage
Limit:    1 reaction per round
```

---

## 6) Passive Traits

**Territorial Instinct:**
Will not pursue beyond 60 ft from den unless in Fury. In Fury, pursuit instinct overrides territorial limits.

**Primal Mass:**
Advantage on saves vs forced movement (shove, push, knockback) while not Prone.

---

## 7) Part Breaks & Weaknesses

### Break Zones

| Part | Accuracy | Threshold | Break Effect |
|------|----------|-----------|--------------|
| Fur Bristles | Open (0) | 3 called-shot hits | Fury damage bonus (+2) removed. Fury Stamina drain increases to 5/turn. |
| Front Legs | Standard (−2) | 3 called-shot hits | Spiked Rush distance reduced to 15 ft. Targets gain +2 to saves vs Rush. |
| Head ★ *(Impact Zone only)* | Precise (−4) | — (no break) | Builds Hammer Impact only. No break effect. |

> Front Legs consolidated from two separate zones into one break zone to stay within T1 cap (1–2). Either leg counts toward the threshold.

### Tactical Weaknesses

- **Fury drains stamina rapidly** — the longer the fight, the harder Urmine falls
- **Slippery terrain disrupts Rush** — mud, ice, or unstable riverbanks cause miss chances or reduce Rush distance
- **Fire zones cause hesitation** — Urmine will not willingly enter open flames
- **Collapses when stamina depleted** — the collapse window is brief but decisive

---

## 8) Behavior Guide

**Opening State:** Patrol or rest near den. Issues a warn display (rearing, vocalizing) before attacking if hunters approach without provoking.

**Round 1 Priority:**
- If not attacked first: warn display, no attack on Round 1
- If attacked: immediate aggression — Swipe into Maul

**Instinct Loop (Above 50% HP):**
- Swipe → Maul as default rotation
- If 2+ hunters cluster → Body Slam to break formation
- If a hunter is isolated → Maul both attacks on same target (Restrain trigger)
- If Stamina ≤ 6 → disengage briefly, reset position

**At 50% HP — Fury Triggers:**
- Fury activates immediately; Urmine does not retreat to trigger it
- First Fury action: Spiked Rush toward clustered targets

**In Fury:**
- Rush clustered targets on cooldown
- Focus lowest HP hunter when Rush is unavailable
- Does not attempt to disengage — Fury locks in aggression

**At 0 Stamina — Collapse:**
- Prone and stunned until end of next turn
- Full vulnerability window

**Below 30% HP and Exhausted:**
- Attempts retreat to den
- Will not pursue if hunters disengage

**Loop:** Calm → Provoked → Storm → Collapse

---

## 9) Encounter Packaging

**Recommended Arena:** River basin clearing with a cave mouth — rocky terrain near entry, open ground in the center, loose soil at the water's edge

**Environmental Synergy:**
- Slippery riverbank: Spiked Rush requires DEX Save (DC 10) or Rush automatically misses and triggers Daze
- Narrow cave corridors: Rush distance capped at 15 ft regardless of breaks (terrain limit)
- Open ground: Urmine's full threat range — no natural counters

**Mid-Fight Shifts:**
1. Warn display collapses on first hit — signals the fight's tone change
2. Fury trigger at 50% HP is the fight's pivot. Hunters who haven't managed their stamina at this point will be overwhelmed.

**Scaling Notes:**
- Strong party: Add a mate Urmine that enters at 30% HP on the first (defending its territory); staggered Fury cycles
- Weak party: Remove Body Slam from the rotation; reduce Fury passive drain to 3/turn

---

## 10) Loot & Crafting

### A) Loot Table

| Drop | Chance | Use |
|------|--------|-----|
| Urmine Fur | 70% | Medium/Heavy armor reinforcement |
| Spiked Quills | 50% | Impact/penetration weapon parts |
| Bear Fat | 40% | Stamina salves |
| Warden's Claw *(Rare)* | 25% | Required for Rare Effects & Signature Craft |

---

### B) Craft Themes

- Fury escalation under pressure
- Endurance tension and last-stand aggression
- Charge disruption and anti-movement control
- Reactive aggression when wounded

> If an effect does not relate to low-HP escalation, charge pressure, or primal aggression — it does not belong here.

---

### C) Material Interaction Profiles

**Weapon Bias**

| Material | Bias | Expression |
|----------|------|-----------|
| Metal | Control / Structure | Impact control, anti-charge movement reduction, interrupt triggers |
| Bone / Hide | Aggression / Instinct | Low-HP bonus damage, prone punishment, pursuit after movement |
| Stone / Crystal | Resonant / Collision | Collision burst, shockwave on charge impact, knockback |

**Armor Bias**

| Material | Bias | Expression |
|----------|------|-----------|
| Metal | Stability | Brace triggers, forced movement resistance, anti-shove passives |
| Hide / Bone | Last-Stand Aggression | Movement-trigger riders, recovery bonuses, aggression at low HP |
| Cloth / Membrane | Stamina Modulation | Stamina cost reduction, last-stand repositioning, tension management |

> No material modifies base AR beyond weight class.

---

### D) Effect Tables

**Common Weapon Effects** *(GM chooses 1)*

**Blood Pressure**
When below 50% HP, deal +1d4 damage. (Once per turn.)

**Brace Breaker**
When you hit a creature that moved 10+ ft this turn, reduce its movement by 5 ft until end of round. (Once per turn.)

---

**Rare Weapon Effects** *(Rare part required — GM chooses 1)*

**Fury Surge** *(1/Combat)*
When you drop below 50% HP, gain +10 ft movement and advantage on your next melee attack.

**Warden's Crash** *(2 Stamina)*
After moving 15 ft in a straight line this turn, your next melee hit pushes the target 10 ft and knocks it Prone.

---

**Weapon Archetype Translation (None — Physical/Primal)**

| Weapon | Translation |
|--------|------------|
| Wand | No affinity granted. Urmine materials carry no elemental resonance. Common effects are melee-triggered passives and do not convert to spell expression. **Wand is not a recommended Urmine craft.** |
| Conduit | Gains the **Rage Aura** Aspect. While the Conduit is active, allies within 10 ft who are below 50% HP deal +1d4 damage on melee attacks. No affinity tag — this is a primal field effect, not an elemental one. |
| Bow | Common effects apply normally to arrow hits. Rare Fury Surge → When you drop below 50% HP, gain +10 ft movement and advantage on your next ranged attack. (1/combat.) Rare Warden's Crash → After moving 15 ft this turn, your next arrow hit pushes the target 5 ft. |
| Flute | Common effects are passive melee triggers and do not convert to Ballad form. Rare Fury Surge → Ballad **"Primal Surge"**: While active, allies within aura range who drop below 50% HP gain +10 ft movement and advantage on their next attack. (Threshold fires once per drop-below-50% event.) Rare Warden's Crash → Ballad **"Rush Chord"**: While active, allies within aura range who move 15+ ft before attacking deal a 5 ft push on hit. |

---

**Common Armor Effects** *(GM chooses 1)*

**Thick Hide**
Reduce the first instance of forced movement each round by 5 ft.

**Last Stand Step**
When below 50% HP, shift 5 ft as a free action. (Once per turn.)

---

**Rare Armor Effects** *(Rare part required — GM chooses 1)*

**Fury Guard** *(1/Combat)*
When you drop below 50% HP, halve all incoming damage until the start of your next turn.

---

### E) Signature Craft

**Warden's Hide** *(Rare part required)*
- Armor Type: Medium — replaces standard Medium template (AR +3)
- Cannot stack additional Rare Armor effects
- Cannot stack with another Signature Craft

**Fury State** *(1/Combat)*
For 2 turns:
- +10 ft movement
- +2 melee damage
- Cannot be forcibly moved

At end of duration: lose 4 Stamina.

---

## 11) Hooks

**The Honey War**
A massive beehive collapse has pushed Urmine closer to farmland. Farmers demand it be removed — but the loss of Urmine destabilizes river predator balance. The hunters must decide whether a clean kill serves the village, or whether the ecology costs are too high.

**Den Collapse**
Miners struck an Urmine den while tunneling. The cave system is unstable. The hunters must extract trapped workers while Fury rages in narrow stone corridors — Rush distance is naturally capped, but so is the hunters' room to maneuver.

**The Exhausted Giant**
An Urmine has been found collapsed from prolonged Fury. Something else drove it into overexertion. What could exhaust a guardian beast this severely?

**Territorial Shift**
Two Urmine territories overlap after flooding altered riverbanks. Their clashes are reshaping predator migration across the basin. Removing one may stabilize things — or trigger a worse cascade.
