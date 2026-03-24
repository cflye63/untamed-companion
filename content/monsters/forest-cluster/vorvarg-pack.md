# VORVARG PACK — The Daggerfangs

**Classification:** Fanged Beast (Pack)
**Tier:** 2 — Coordinated Ambush / Alpha Dependency
**Biome:** Forest Clearing, Verdant Hollow, River Basin
**Element:** None

**Tagline:** "Coordinated ambush predators whose lethality depends on formation and Alpha command."

---

## 1) Field Notes

Vorvargs are long-limbed, serrated-tooth pack hunters. Alone, they are dangerous. Together, they are surgical. Their Alpha directs through posture and howl — not magic, but dominance and instinct. When the Alpha falls, structure collapses.

**What Hunters Notice First:**
- Silent triangulation through brush
- Two shapes in sight, one unseen
- A low, coordinated throat-hum before a rush

**Core Puzzle:**
- Flanking bonuses, Prone pressure, encirclement control, Alpha survival dependency
- Kill Alpha → pack destabilizes. Separate pack → remove flanking.

---

## 2) Stat Block

This monster consists of **2 Standard Vorvargs** and **1 Alpha Vorvarg**.
All share initiative. Each creature takes its own actions from its own Stamina pool.

### Standard Vorvarg

| Stat | Score | Modifier |
|------|-------|----------|
| STR | 3 | +1 |
| DEX | 6 | +3 |
| CON | 2 | +1 |
| INT | 2 | +1 |
| INS | 7 | +3 |
| CHA | 3 | +1 |

| Stat | Value | Notes |
|------|-------|-------|
| AR | 11 | Light frame — T2 floor for pack unit |
| HP | 42 | Pack unit band (not solo formula) |
| Stamina | 12 | 10 + CON Score (2) |
| Movement | 30 ft | — |
| Attacks/Turn | 1 | — |

**Attack Roll Breakdown:** `d20 + DEX mod (+3) + Trained proficiency (+2) = d20+5`

**Exhaustion Rule:**
- Movement halved
- Cannot benefit from Pack Lunge rider

---

### Alpha Vorvarg

| Stat | Score | Modifier |
|------|-------|----------|
| STR | 6 | +3 |
| DEX | 7 | +3 |
| CON | 7 | +3 |
| INT | 4 | +2 |
| INS | 7 | +3 |
| CHA | 7 | +3 |

| Stat | Value | Notes |
|------|-------|-------|
| AR | 12 | Thicker hide + dominant posture |
| HP | 95 | Pack Alpha band (~70% of solo formula) |
| Stamina | 17 | 10 + CON Score (7) |
| Movement | 30 ft | — |
| Attacks/Turn | 1 | — |

> **GM Scaling Note:** For optimized parties: Alpha HP → **150**, Standard HP → **55** each. Total pack HP: 260. The extra Alpha HP ensures it survives to use Pack Howl and attempt a second Coordinated Rush cycle.

**Attack Roll Breakdown:** `d20 + DEX mod (+3) + Trained proficiency (+2) = d20+5`

**Exhaustion Rule:**
- Cannot use Pack Howl
- Loses flanking bonus aura

### Senses

- Keen scent 60 ft (all Vorvargs)
- Alpha: tremor-awareness 30 ft (detects movement through ground contact)

---

## 3) Attacks

**Fang Bite — (1 Stamina, All)**
```
Type:    Melee (DEX)
Attack:  d20+5
Damage:  Standard: 1d6+3  |  Alpha: 1d8+3
Rider:   Pack Bonus — if another Vorvarg is adjacent to the target, deal +1d4 damage
```

**Ripping Strike — (1 Stamina, Alpha Only)**
```
Type:    Melee (STR)
Attack:  d20+5
Damage:  2d6+3
Rider:   Advantage if target is Prone
```

---

## 4) Special Abilities

**Pack Lunge — (1 Stamina each participating Vorvarg)**

If two or more Vorvargs attack the same target this turn:
- Target must make a DEX save:
  - DC 15 (Standard-led or Alpha present)
- Fail → Target falls Prone
- Success → No additional effect

---

**Coordinated Rush — (2 Stamina each, Requires 2+ Vorvargs)**

Cooldown: 1/Combat

All participating Vorvargs move up to 20 ft toward the same target. Target must make a DEX save (DC 15).
- Fail → Encircled until end of next turn:
  - Movement costs double
  - Cannot Dash
  - While Encircled: Vorvargs deal +1 damage
- No permanent condition

> Reduced from 3 to 2 Vorvargs required. At 3, any AoE or Prone disruption prevented the Rush from ever firing. At 2, the pack can Rush even after losing a Standard — preserving the ability as a real threat throughout the fight.

---

**Pack Howl — (3 Stamina, Alpha Only, 1/Combat)**

Duration: 2 turns.
- +1 to attack rolls for all pack members
- Each pack member regains 1 Stamina at start of their turn
- Does NOT remove conditions
- Does NOT grant immunity

> Controlled power bump. The Alpha spends 3 STA to give the pack ~4–6 STA total over 2 rounds plus accuracy. Use when pack is under pressure, not as an opener.

---

## 5) Reactions

**Snap Withdraw — (1 Stamina, All)**
```
Trigger:  Missed by a melee attack
Effect:   Move 5 ft without provoking opportunity attacks
Limit:    1 reaction per round
```

**Pounce — (1 Stamina, Standards Only)**
```
Trigger:  A Prone creature within 5 ft stands up
Effect:   Make a free Fang Bite against that creature (uses normal attack roll)
Limit:    1 reaction per round (shared with Snap Withdraw — a Standard chooses one or the other)
```

> Pounce creates a soft lock on Prone targets. Standing costs 2 STA *and* eats a free bite (avg 6.5, or 9.0 with Pack Rider). The counter is coordination — allies kill or reposition the adjacent Vorvarg before the Prone hunter stands. This makes Pack Lunge's Prone a real tactical problem, not just a STA tax.

---

## 6) Passive Traits

**Pack Flanking**

If two Vorvargs attack from opposite sides of the same target:
- +1 to hit for both attacks

**Alpha's Presence**

While the Alpha is alive and within 30 ft:
- Pack members have advantage on saves vs Feared
- Not immune — advantage only

---

## 7) Part Breaks & Weaknesses

### Break Zones

| Part | Accuracy | Threshold | Break Effect |
|------|----------|-----------|--------------|
| Alpha — Throat ★ *(Impact Zone)* | Precise (−4) | 2 called-shot hits | Pack Howl disabled. Alpha loses +1 attack bonus from Pack Flanking. |
| Standard — Hind Leg | Standard (−2) | 1 called-shot hit | Movement reduced to 20 ft. Cannot participate in Coordinated Rush. |

### Tactical Weaknesses

- **Killing the Alpha causes collapse:**
  - Remaining pack suffers −2 to attack rolls
  - At Stamina ≤ 3, each Standard must pass an INS save (DC 12) or disengage and flee
- **Forced separation removes flanking** — chokepoints, walls, and hunter positioning break the formation
- **Chokepoints invalidate Coordinated Rush** — requires open ground and 3 participants
- **AoE scatters formation** — Shockwave, Blade Wave, Multishot all punish clustering
- **Low individual HP** — Standards drop in 3–4 focused hits; Alpha in 6–8

---

## 8) Behavior Guide

**Opening State:** Spread formation from treeline. Two Standards flank wide, Alpha holds center-rear. Attempt triangulation before engaging.

**Round 1 Priority:**
- If 3+ Vorvargs can reach same target: Coordinated Rush (1/Combat)
- Otherwise: Standards Fang Bite flanking targets, Alpha holds for Ripping Strike on Prone

**Instinct Loop (Alpha above 50% HP):**
- Pair Standards on isolated hunters → Pack Lunge (Prone)
- Alpha Ripping Strikes Prone targets (advantage)
- If flanking is broken: Snap Withdraw to reposition, re-establish triangle
- If a Standard drops: Alpha shifts to direct combat, remaining Standard guards flank

**At 50% HP (Alpha):**
- Use Pack Howl
- Remaining pack focuses highest-threat hunter

**If Alpha dies:**
- Morale check: each Standard at STA ≤ 3 makes INS save DC 12 or flees
- Surviving Standards suffer −2 to attack rolls
- No more Pack Howl or Coordinated Rush
- Standards revert to independent hit-and-run

**Loop:** Flank → Trip → Surround → Collapse Line

---

## 9) Encounter Packaging

**Recommended Arena:** Dense tree lines with clearing center — tree roots create flanking channels, clearing allows Coordinated Rush.

**Environmental Synergy:**
- Dense brush: Vorvargs use for approach stealth
- Broken riverbanks: natural chokepoints that hunters can exploit to break formation
- Dusk/night: advantage on stealth for initial approach

**Mid-Fight Shifts:**
1. Additional howl echoes from distance (false signal — do reinforcements arrive, or is it a bluff?)
2. Rain reduces scent detection — Vorvargs lose keen scent advantage

**Scaling Notes:**
- Weak party: Remove Coordinated Rush. Standards attack independently.
- Strong party: Add 1 additional Standard Vorvarg (3 Standard + 1 Alpha, total pack HP ~260)

---

## 10) Loot & Crafting

### A) Loot Table

| Drop | Chance | Use |
|------|--------|-----|
| Vorvarg Fang | 60% | Bleed weapon components |
| Packhide Fur | 50% | Stealth armor reinforcement |
| Alpha's Claw | 40% | Tracking components, precision tools |
| Howling Totem *(Rare)* | 20% | Required for Rare Effects & Signature Crafts |

---

### B) Craft Themes

- Flanking bonuses
- Ally adjacency rewards
- Coordinated burst
- Minor stamina sustain

> If an effect does not relate to these four themes — it does not belong here.

---

### C) Material Interaction Profiles

**Weapon Bias**

| Material | Bias | Expression |
|----------|------|-----------|
| Metal | Control / Positioning | Anti-movement riders, pin effects, formation disruption |
| Bone / Hide | Aggression / Finisher | Bleed on Prone, pursuit triggers, kill momentum |
| Stone / Crystal | Resonant / Burst | Pack-trigger detonation, proximity damage |

**Armor Bias**

| Material | Bias | Expression |
|----------|------|-----------|
| Metal | Formation Guard | Forced movement resistance when near allies, brace triggers |
| Hide / Bone | Mobility Synergy | Movement-trigger riders, anti-Prone recovery |
| Cloth / Membrane | Stealth Synergy | Group stealth bonuses, repositioning assists |

> No material modifies base AR beyond weight class.

---

### D) Effect Tables

**Common Weapon Effects** *(GM chooses 1)*

**Pack Opportunist**
If an ally is adjacent to your target, deal +1d4 damage. (Once per turn.)

**Trip Pressure**
If you hit a Prone target, deal +1 damage. (Once per turn.)

---

**Rare Weapon Effects** *(Rare part required — GM chooses 1)*

**Coordinated Strike** *(2 Stamina, 1/Combat)*
If an ally hit the same target this round, your hit forces a DEX save (DC = weapon DC) or the target falls Prone.

**Hunt Momentum** *(1/Combat)*
When you reduce a creature to 0 HP, you may move 15 ft without provoking opportunity attacks.

---

**Weapon Archetype Translation (Vorvarg — No Element)**

| Weapon | Translation |
|--------|------------|
| Bow | **Packfang Bow** — No affinity (no element). Common effects apply normally. Rare Coordinated Strike → **Tripwire Arrow** (2/hunt): On hit, if an ally also hit this target this round, target makes DEX save vs Bow DC or falls Prone. Rare Hunt Momentum → **Pursuit Arrow** (2/hunt): On hit against a target at 25% HP or less, you may immediately move 15 ft without provoking. |
| Wand | **Howl-Etched Wand** — No affinity granted (no element). Common effects apply normally as cluster riders. Rare Coordinated Strike → Cluster rider (1/Combat): When you detonate a cluster on a target an ally hit this round, that target makes DEX save vs Wand DC or falls Prone. Rare Hunt Momentum → On detonation that reduces a creature to 0 HP, you may place a free cluster within 15 ft (no STA cost). |
| Conduit | **Daggerfang Conduit** — No affinity granted (no element). Common effects apply normally. Rare Coordinated Strike → Field rider (1/Combat): When you activate a field on a space where an ally hit a target this round, that target makes DEX save vs Conduit DC or falls Prone. Rare Hunt Momentum → On reducing a creature to 0 HP within your field, field radius expands by 5 ft for 1 round. |
| Flute | **Warden's Call Flute** — No affinity. Common effects are passive riders on existing Ballads. Rare Coordinated Strike → Ballad **"Hunting Chorus"** (1/Combat): While active, when an ally within your aura hits a target that you also hit this round, that target makes DEX save vs Flute DC or falls Prone. Rare Hunt Momentum → Ballad **"Pursuit Cry"** (1/Combat): While active, allies within aura who reduce a creature to 0 HP may move 10 ft without provoking. |

---

**Common Armor Effects** *(GM chooses 1)*

**Formation Guard**
If an ally is within 5 ft, reduce incoming forced movement by 5 ft.

**Silent Prowl**
Advantage on Stealth checks while at least one ally is within 10 ft.

---

**Rare Armor Effects** *(Rare part required — GM chooses 1)*

**Pack Bulwark** *(1/Combat)*
When an ally within 5 ft is hit by an attack, you may reduce that damage by 5 as a Reaction (0 Stamina).

---

### E) Signature Crafts

*Vorvarg offers one Signature option. Requires the Howling Totem (Rare). Cannot be combined with other Rare effects.*

---

**Signature — Alpha's Hide** *(Medium Armor)*

Replaces Medium armor template. AR +3.

**Pack Commander** *(1/Combat)*
For 2 turns:
- Allies within 10 ft gain +1 to attack rolls
- When an ally hits a target you also hit this round, that target loses 1 Stamina

At end of duration: lose 3 Stamina. Cannot stack with Rare Armor effects.

---

## 11) Hooks

**The New Alpha**
A new Alpha has unified multiple packs. What was once scattered predation is now coordinated siege. Three farmsteads hit in one night — that's not hunger, that's strategy.

**The Vanishing Herds**
Livestock vanish in coordinated waves. Tracks suggest 4–6 Vorvargs working in relay. The guild suspects a den nearby, but no one who's gone looking has come back with a location.

**The Wounded Scout**
A wounded Vorvarg flees toward something larger. Following it reveals a den — but the den is positioned suspiciously close to a much bigger creature's territory. Is the pack scavenging from a Tier 3, or serving it?

**Territory Markers**
Hunters find carved trees marking expanding territory. The claw marks are fresh, deliberate, and getting closer to the trade road. This isn't random — this is a border claim.
