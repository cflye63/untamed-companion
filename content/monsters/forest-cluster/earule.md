# EARULE — The Sky Render

**Classification:** Beast Bird
**Tier:** 2 — Air Superiority / Sonic Disruption
**Biome:** Forest Cliffs, River Basin, Open Canopy
**Element:** Sound

**Tagline:** "A shrieking sky-hunter that weaponizes sound and altitude."

---

## 1) Field Notes

Earule resembles a massive harpy eagle with membrane-thin wings that hum when stretched. Its cry fractures air pressure, disorienting prey mid-movement. It does not hover — it circles, dives, and ascends through momentum.

**What Hunters Notice First:**
- A shadow that circles twice before vanishing upward
- A low harmonic hum from stretched wing membranes, rising in pitch before a dive
- Cracked bark and split stones near cliff faces — sonic residue from previous hunts

**Core Puzzle:**
- Air superiority, dive burst damage, sonic disruption, stamina-limited flight
- Ground it → manageable. Force stamina burn → collapse flight loop.

---

## 2) Stat Block

### Attributes

| Stat | Score | Modifier |
|------|-------|----------|
| STR | 6 | +3 |
| DEX | 7 | +3 |
| CON | 6 | +3 |
| INT | 4 | +2 |
| INS | 7 | +3 |
| CHA | 7 | +3 |

### Combat Attributes

| Stat | Value | Notes |
|------|-------|-------|
| AR | 13 | Agile frame, evasive in flight |
| HP | 126 | 4P median: TierBase (60) + CON (6) × 11 |
| Stamina | 16 | 10 + CON Score (6) |

> **GM Scaling Note:** For optimized parties: HP → **210** (extended to match T2 target fight duration of 6-8 rounds; the aerial phase compresses effective DPR, so raw HP needs to be higher to give the Circle→Dive→Ascend loop time to execute 2-3 cycles).

| Movement | 30 ft ground | 60 ft flight (must move at least 20 ft per turn while airborne) |
| Attacks/Turn | 3 | — |

**Attack Roll Breakdown:** `d20 + DEX mod (+3) + Trained proficiency (+2) = d20+5`

**Flight Tax:** −1 Stamina per turn while airborne.

**Exhaustion Rule:**
- Falls Prone immediately
- Cannot Fly
- Sonic Burst disabled

### Senses

- Keen eyesight 120 ft (can spot movement at extreme range)
- Wind-sense 30 ft (detects air displacement from movement — effective even in darkness)

---

## 3) Attacks

**Talon Rake — (1 Stamina)**
```
Type:    Melee (STR)
Attack:  d20+5
Damage:  2d6+3
Rider:   If target is Prone → +1d6 damage
```

**Screeching Shot — (1 Stamina)**
```
Type:    Ranged 60 ft (DEX), Sound damage
Attack:  d20+5
Damage:  1d8+3
Rider:   On hit: CON Save DC 15 → Fail: Dazed until end of target's next turn
```

> Screeching Shot is a utility ranged attack — damage is below T2 floor (avg 7.5) but the Dazed rider is the real threat. Dazed hunters have disadvantage on attacks and can't React, making the next Sky Dive much harder to survive. This is Earule's aerial harassment tool: soften with Screech, punish with Dive.

---

## 4) Special Abilities

**Sky Dive — (2 Stamina)**

Requires at least 20 ft descent.
```
Type:    Melee (DEX), Dive
Attack:  d20+5
Damage:  2d8+3
Rider:   If descended 30+ ft: STR Save DC 15 → Fail: target falls Prone
Miss:    Earule lands and becomes Dazed until its next turn
```

> Risk/reward preserved. A missed Sky Dive grounds Earule and leaves it Dazed — the primary punishment window for melee hunters. Mirrors Gorrhul's Charging Gore miss → Dazed design pattern.

---

**Sonic Burst — (3 Stamina, Cooldown 2 rounds)**

```
Type:    15 ft radius centered on Earule (CHA-based, Sound damage)
Save:    CON Save DC 15
Fail:    2d8+3 damage + Staggered
Success: Half damage, no Stagger
```

> Earule's area denial tool. Best used when grounded near clustered hunters or immediately after landing from a dive. The Stagger prevents hunter Actions next turn — buying time to re-ascend.

---

## 5) Reactions

*Earule has no active reactions — its defensive identity is passive evasion through flight, not reactive dodging.*

---

## 6) Passive Traits

**Wind Shear**

While airborne, all ranged attacks against Earule have **−2 to hit.** Earule's erratic flight pattern and wind turbulence from its wing membranes make it difficult to target from below.

> This replaces the old Wing Snap reaction. As a passive, it affects ALL ranged attacks while airborne (not just 1/round), making the aerial phase a real defensive layer. Grounding Earule removes Wind Shear — this is the primary reward for Binding Arrow or forced landing. Hunters choose: accept -2 on ranged and chip away, or invest in grounding to unlock full accuracy.

**Momentum Flight**

Must move at least 20 ft each airborne turn. Cannot hover. If movement is reduced below 20 ft (Slowed, difficult terrain), Earule must land at the end of its turn.

**Hollow Bones**

Takes +2 damage from Bludgeoning weapons. Hammer and blunt attacks exploit the lightweight frame.

---

## 7) Part Breaks & Weaknesses

### Break Zones

| Part | Accuracy | Threshold | Break Effect |
|------|----------|-----------|--------------|
| Wing Membranes | Open (0) | 2 called-shot hits | Flight speed reduced to 30 ft. Flight tax increases to −2 Stamina/turn. Sky Dive disabled. |
| Vocal Sac ★ *(Impact Zone)* | Precise (−4) | 2 called-shot hits | Sonic Burst disabled. Screeching Shot loses debuff rider (damage only). |

### Tactical Weaknesses

- **Binding Arrow (Bow):** STR save DC 17 vs Earule STR +3 = 65% Stagger + ground. The hard counter. Grounding also removes Wind Shear (-2 ranged), unlocking full party accuracy. Two uses per hunt = two forced groundings.
- **Grounding removes Wind Shear:** While airborne, all ranged attacks are at -2. Grounding Earule is the single biggest DPR increase the party can achieve — it unlocks melee AND removes the ranged penalty.
- **Prone on missed Sky Dive:** Earule Dazes itself. Melee hunters punish with advantage attacks. Hollow Bones means Hammer hits for +2.
- **Wing Membrane break:** Progressive grounding. Flight speed halved + double tax (-2 STA/turn) = Earule can only fly 2 more rounds before forced landing.
- **Screeching Shot → Dazed:** Dazed hunters can't React and attack at disadvantage. Earule uses Screech to strip Dodge/Parry before diving — the counter is spreading out so Screech and Dive target different hunters.
- **Slowed condition:** If Earule's movement drops below 20 ft, it must land (Momentum Flight). Mud Toss, ice effects, or Encircled all work.
- **Stamina drain:** Flight tax + attack costs + Burned STA drain (if fire Wand is present) all stack. Force the Exhaustion collapse.

---

## 8) Behavior Guide

**Opening State:** Airborne, circling at 40-60 ft altitude. Will not engage ground-level unless provoked — waits for an isolated target.

**Round 1 Priority:**
- Screeching Shot × 2 at the most dangerous ranged hunter (Bow or Wand) + Sky Dive the squishiest melee target
- If no clear dive target: Screech × 3 from altitude (harassment mode)

**Instinct Loop (Above 40% HP):**
- If open dive lane (target isolated, no adjacent allies): Sky Dive → Talon Rake (if landed) → re-ascend next turn
- If clustered hunters on ground: Sonic Burst from low altitude → re-ascend
- If Wing Membranes broken: stay grounded, Talon Rake + Screech (cannot dive)
- If Vocal Sac broken: Sky Dive focus (sonic tools lost)
- If grounded by Binding/Prone: immediate re-ascend (costs full Move, no attack that turn)

**At 40% HP:**
- Desperation dive chain: Sky Dive every turn regardless of risk
- Accepts Daze on miss for the Prone upside
- No longer re-ascends between dives (conserves STA for pure aggression)

**At 0 Stamina — Exhausted:**
- Falls Prone immediately
- Cannot Fly or use Sonic Burst
- Talon Rake only at half effectiveness
- Hollow Bones makes this the kill window

**Loop:** Circle → Dive → Ascend → Disrupt → Repeat

---

## 9) Encounter Packaging

**Recommended Arena:** Cliff-edge canyon with multiple elevation tiers — 20 ft, 40 ft, 60 ft ledges. Sparse tree cover for partial concealment. Open sky above for flight lanes.

**Environmental Synergy:**
- Cliff edges: hunters can gain elevation for ranged advantage; Earule uses altitude difference for dive damage bonus
- Wind gusts: mid-fight shift that forces Earule to land for 1 round (natural grounding event)
- Falling debris from Sonic Burst: creates difficult terrain below blast zone

**Mid-Fight Shifts:**
1. First Sky Dive resolves — sets the tempo. If it hits and Prones a hunter, the party scrambles. If it misses, Earule is grounded and vulnerable.
2. Wing Membrane break — the fight's character changes from "aerial dodge-and-dive" to "grounded brawl." Earule shifts to Sonic Burst + Talon Rake.

**Scaling Notes:**
- Weak party: Reduce Sonic Burst to 2d6+3, remove Screeching Shot debuff rider
- Strong party: Increase starting altitude to 60 ft (requires 3 rounds of ascent to reach, or forces immediate Binding Arrow use)

---

## 10) Loot & Crafting

### A) Loot Table

| Drop | Chance | Use |
|------|--------|-----|
| Earule Feather | 70% | Light armor reinforcement, aerodynamic components |
| Talon Shard | 50% | Piercing weapon components, dive-trigger tools |
| Wing Membrane | 40% | Gliding tools, wind instruments |
| Resonance Core *(Rare)* | 20% | Required for Rare Effects & Signature Crafts |

---

### B) Craft Themes

- Elevation burst (dive rewards)
- Sound disruption (concentration denial, stagger)
- Anti-flight control (grounding tools for hunters)
- Vertical repositioning (leaps, not true flight)

> If an effect does not relate to these four themes — it does not belong here. No permanent flight for hunters.

---

### C) Material Interaction Profiles

**Weapon Bias**

| Material | Bias | Expression |
|----------|------|-----------|
| Metal | Control / Precision | Anti-air riders, dive interruption, grounding on hit |
| Bone / Hide | Aggression / Burst | Dive damage bonus, prone punishment, pursuit after descent |
| Stone / Crystal | Resonant / Sonic | Sound burst on impact, concentration disruption, shockwave riders |

**Armor Bias**

| Material | Bias | Expression |
|----------|------|-----------|
| Metal | Stability | Anti-knockdown, brace vs dive impacts, sonic resistance |
| Hide / Bone | Mobility | Vertical leap assists, fall damage reduction, repositioning |
| Cloth / Membrane | Positioning | Glide assist (short hops, not flight), wind resistance, stealth in elevation |

> No material modifies base AR beyond weight class. No armor grants true flight.

---

### D) Effect Tables

**Common Weapon Effects** *(GM chooses 1)*

**Dive Hunter**
If you descend at least 10 ft before attacking, deal +1d4 damage. (Once per turn.)

**Resonant Strike**
On hit, target has disadvantage on its next Concentration check. (Once per turn.)

---

**Rare Weapon Effects** *(Rare part required — GM chooses 1)*

**Shatter Cry** *(2 Stamina, 1/Combat)*
On hit, target must make a CON save (DC = weapon DC) or become Staggered.

**Skybound Step** *(1/Combat)*
After descending at least 15 ft, reposition 20 ft horizontally without provoking opportunity attacks.

---

**Weapon Archetype Translation (Sound)**

| Weapon | Translation |
|--------|------------|
| Bow | **Stormcall Bow** — No affinity (Sound is not an elemental type for Bow). Common effects apply as arrow riders. Rare Shatter Cry → **Shatter Arrow** (2/hunt): On hit, target makes CON save vs Bow DC or becomes Staggered. Rare Skybound Step → **Updraft Arrow** (2/hunt): On hit from elevation ≥15 ft, you may reposition 15 ft horizontally (no provoke). |
| Wand | **Resonance Wand** — Grants Sound damage type. Hex becomes **Sonic — Shatter**: While hexed, target has disadvantage on Concentration checks. On detonate: CHA save vs Wand DC → fail: Staggered. |
| Conduit | **Windbreak Conduit** — Grants Sound Aspect access. Aspect: **Resonance Field** — Inside field, creatures that take damage must succeed a CON save vs Conduit DC or have disadvantage on their next Concentration check. No custom subsystem. |
| Flute | **Skycaller Flute** — Sound affinity. Common effects are passive riders on existing Ballads. Rare Shatter Cry → Ballad **"Shatter Song"** (1/Combat): While active, first enemy that enters aura each round makes CON save vs Flute DC or is Staggered. Rare Skybound Step → Ballad **"Rising Gale"** (1/Combat): While active, allies within aura who descend ≥10 ft before attacking deal +1d4 damage on that attack. |

---

**Common Armor Effects** *(GM chooses 1)*

**Updraft Brace**
When you are knocked Prone by a dive or falling attack, you may spend 1 Stamina as a Reaction to reduce the attacker's bonus damage by 1d6.

**Wind Walker**
Ignore difficult terrain caused by wind, debris, or elevation changes (rubble, scree, sonic debris).

---

**Rare Armor Effects** *(Rare part required — GM chooses 1)*

**Sonic Shell** *(1/Combat)*
When you take Sound damage, reduce it by half and the attacker must make a CON save (DC 12) or be Dazed until end of its next turn (sonic feedback).

---

### E) Signature Crafts

*Earule offers two Signature options. Each requires the Resonance Core (Rare). They cannot be combined with each other or with other Rare effects.*

---

**Signature 1 — Stormcall Recurve** *(Bow only)*

Bow with Sound Affinity.

**Resonance Arrow** (2 per Hunt)
- On hit: deals Sound damage
- Target makes CON save vs Bow DC or becomes Staggered
- If fired from 20+ ft elevation: +1d6 damage

No stacking with Rare Weapon effects.

---

**Signature 2 — Skyveil Hide** *(Light Armor)*

Replaces Light armor template. AR +2.

**Elevated Boost** *(1/Combat)*
As a Movement Action:
- Leap up to 20 ft vertically and 20 ft horizontally
- You do not provoke opportunity attacks
- You do not gain true flight — you must land on a solid surface

If you descend at least 15 ft after using Elevated Boost:
- Your next attack this turn gains +1d6 damage

No stacking with Rare Armor effects.

---

## 11) Hooks

**The Canyon Screamer**
Sonic booms heard across the river valley — every dawn for a week. Livestock found disoriented near cliffs, walking in circles. The source is somewhere above the canyon rim, but no one can get high enough to confirm.

**The Feather Trade**
Rival hunters are using captured Earule feathers to craft illegal flight tools. The guild wants the supply line cut, but the hunters selling them aren't poaching — they're harvesting from a nesting site during molting season. Legal gray area.

**Storm Season**
Storm fronts bring multiple Earule into migration conflict. Two adults competing for the same cliff-face nesting site are generating sonic shockwaves that are collapsing cave systems below. A mining operation wants them both gone. The ecology team wants one relocated.

**The Desperate Dive**
An Earule with a broken wing membrane has been grounded near a settlement for three days. It's killing livestock because it can't hunt from altitude. It's aggressive, desperate, and loud — but it's also injured and might be relocatable if the wing heals. The village wants it dead. The ranger wants it saved.
