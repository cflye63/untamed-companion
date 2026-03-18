# TANUZA — The Gliding Thief

**Classification:** Beast (Rodent)
**Tier:** 1 — Skirmisher / Aerial Disruptor
**Biome:** Canopy Heights, Forest Cliffs, River Basin
**Element:** Wind

**Tagline:** "A gliding thief that uses height, membrane control, and momentum to destabilize hunters before vanishing back into the canopy."

---

## 1) Field Notes

A raccoon-like glider that uses elevation, membrane control, and momentum to destabilize hunters before retreating to the canopy.

Tanuza difficulty comes from:
- Elevation control
- Prone disruption from dive attacks
- Theft pressure

It is not a damage dealer. It is a mobility problem.

**What Hunters Notice First:**
- A rustling in the high canopy, then silence — just before the dive
- Glinting eyes reflecting light from high branches; the creature is watching
- Missing pouches, loose tools, or bait that was definitely secured an hour ago

**Core Puzzle:**
- Deny the elevation and the Tanuza loses most of its toolkit. Force it to the ground.
- Nets, snares, and elevated footing of your own all flip the fight.

---

## 2) Stat Block

### Attributes

| Stat | Score | Modifier |
|------|-------|----------|
| STR | 5 | +2 |
| DEX | 7 | +3 |
| CON | 6 | +3 |
| INT | 4 | +2 |
| INS | 7 | +3 |
| CHA | 3 | +1 |

> DEX and INS capped at T1 maximum (7). Aerial agility is expressed through Aerial Acrobatics passive and Glide mechanics, not raw stat score.

### Combat Attributes

| Stat | Value | Notes |
|------|-------|-------|
| AR | 8 | Low by design — punishes staying grounded |
| HP | 81 | 4P baseline: TierBase (15) + CON (6) × 11 |
| Stamina | 16 | 10 + CON Score (6) |
| Movement | 30 ft run / 20 ft climb / 60 ft glide | Glide requires 10 ft elevation minimum |
| Attacks/Turn | 2 | — |

**Attack Roll Breakdown:**
- Claw Swipe: `d20 + DEX mod (+3) + Trained prof (+2) = d20+5`
- Dive Slam: `d20 + STR mod (+2) + Trained prof (+2) = d20+4`

**Exhaustion Rule:** Cannot Glide. Loses access to Dive Slam. Switches to ground skirmish only.

### Senses

- Sharp low-light vision adapted to canopy and cliff environments
- Advantage on checks to detect visible trinkets, bait, or unsecured items (Shiny Object Fixation)
- No special detection of grounded creatures — relies on line of sight from elevation

---

## 3) Attacks

**Claw Swipe — (1 Stamina)**
```
Type:    Melee (DEX)
Attack:  d20+5
Damage:  1d8+3
Rider:   None — clean repositioning attack
```

**Dive Slam — (1 Stamina)**
```
Type:      Melee (STR)
Attack:    d20+4
Damage:    1d10+2
Rider:     STR Save (DC 10) or knocked Prone
Requires:  Must be airborne

Height Bonus: If Dive Slam begins from 20+ ft above target, deal +1d4 additional damage.
```

> Dive Slam with height bonus averages 10 — a marginal ceiling touch for T1, gated behind terrain and elevation setup. Intentional.

---

## 4) Special Abilities

**Glide — (1 Stamina, Movement Action)**
- Move up to 60 ft horizontally for every 10 ft of descent
- Does not provoke opportunity attacks while gliding
- Must end on solid surface
- Cannot Glide if membrane is broken (see Part Breaks)

**Gust Scatter — (2 Stamina, Cooldown 2 turns)**
- 15 ft cone of compressed air
- DEX Save (DC 12):
  - **Fail:** Pushed 10 ft
  - **Success:** No push
- No damage — control only. Tier 1 pressure cap.

**Kleptoglide — (1/Encounter)**
- Tanuza attempts to steal one visible unsecured item
- DEX contest vs target's DEX or INS
- **Success:** Tanuza immediately Glides 20 ft (no Stamina cost)
- **Failure:** No item stolen; Tanuza must spend Stamina to disengage normally

---

## 5) Reactions

**Blow Back — (1 Stamina)**
```
Trigger:  Hit by a melee attack while airborne
Effect:   Attacker makes STR Save (DC 12)
          Fail: Pushed 5 ft
          Success: No effect
```

---

## 6) Passive Traits

**Aerial Acrobatics**
- Advantage on DEX saves while airborne
- Cannot be flanked while airborne

**Shiny Object Fixation**
- Advantage on checks to detect visible trinkets or bait
- Hunters may exploit this with traps or decoys

---

## 7) Part Breaks & Weaknesses

### Break Zones

| Part | Threshold | Break Effect |
|------|-----------|--------------|
| Tail & Membrane | 2 successful called shots (−2 accuracy penalty) | Glide speed reduced to 20 ft. Gust Scatter disabled. Dive Slam loses height bonus. Movement halved. |

### Tactical Weaknesses

- Requires elevation to function optimally — deny height, deny the loop
- Nets and snares heavily disrupt mobility
- Heavy rain prevents Glide entirely
- AR 8 is low; grounded Tanuza is vulnerable to focused pressure
- Membrane Break is a single break zone but shuts down almost the entire toolkit

---

## 8) Behavior Guide

**Opening State:** Elevated (tree branch, cliff edge, or canopy platform).

**Round 1 Priority:**
- If 2+ hunters clustered → Gust Scatter to separate
- Else → Dive Slam the weakest or most isolated target

**Instinct Loop:**
- If hunters cluster → Gust Scatter (when off cooldown)
- If a hunter is prone → Claw Swipe into Dive Slam next turn
- If Stamina ≤ 5 → Gain elevation and stall; do not engage until repositioned
- If Stamina ≤ 2 → Flee toward highest available terrain

**Retreat / Relocation Conditions:**
- Below 30% HP → Attempts canopy glide escape
- Membrane broken → Abandons glide loop; switches to ground skirmish harassment
- Exhausted → Panics; erratic ground movement; attempts disengage each turn

**Territory Behavior:**
- Near a nest or cache: will double back even at low HP to retrieve stolen goods
- If hunters occupy the highest ground: Tanuza circles at mid-elevation, looking for an opening rather than committing

> **3-phase loop:** Dive → Disrupt → Elevate. Ground the Tanuza and the loop collapses.

---

## 9) Encounter Packaging

**Recommended Arena:** Dense canopy with vertical terrain — platforms, branches, cliff faces, rope bridges

**Environmental Synergy:**
- Open sky: full glide speed and Dive Slam bonuses active
- Dense undergrowth: limits glide run-up; Tanuza must climb before diving
- Heavy rain: Glide disabled entirely — forces ground fight
- Wind gusts (mid-fight shift): glides become unpredictable; GM may redirect landings 1d4×5 ft off-course

**Mid-Fight Shifts:**
1. Falling branches from repeated dive impacts create shifting elevation zones — some platforms become unstable
2. Wind picks up mid-fight; Glide range increases to 80 ft but landing accuracy drops

**Scaling Notes:**
- Strong party: add a second Tanuza with staggered Gust Scatter cooldowns
- Weak party: remove Dive Slam height bonus; reduce Gust Scatter to 5 ft push

---

## 10) Loot & Crafting

### A) Loot Table

| Drop | Chance | Use |
|------|--------|-----|
| Tanuza Tail Fur | 60% | Lightweight cloaks, glide linings |
| Glider Membrane | 50% | Glide-capable armor |
| Thief's Claw | 40% | Climbing tools, grip weapons |
| Wind Essence Orb *(Rare)* | 20% | Required for Rare Effects & Signature Craft |

---

### B) Craft Themes

- Elevation mobility & glide reposition
- Descent control & fall mitigation
- Light reactive displacement
- Momentum-driven dive pressure

> If an effect does not reflect vertical momentum, glide control, or aerial repositioning — it does not belong here.

---

### C) Material Interaction Profiles

**Weapon Bias**

| Material | Bias | Expression |
|----------|------|-----------|
| Metal | Control / Structure | Anti-air control, movement stabilization, descent interruption, momentum denial |
| Bone / Hide | Aggression / Instinct | Momentum damage, dive pressure, pursuit triggers, movement chaining |
| Stone / Crystal | Resonant / Volatile | Wind bursts, push effects, reactive air surges, short gust pulses |

**Armor Bias**

| Material | Bias | Expression |
|----------|------|-----------|
| Metal | Stability | Fall resistance, airborne control stability, forced-movement mitigation |
| Hide / Bone | Mobility | Post-movement repositioning, anti-prone mobility, momentum retention |
| Cloth / Membrane | Positioning / Stamina | Glide assist, descent control, fall safety, limited aerial reactions |

> No material modifies base AR beyond weight class.

---

### D) Effect Tables

**Common Weapon Effects** *(GM chooses 1)*

**Dive Hunter**
If you descend at least 10 ft before attacking, deal +1d4 damage. (Once per turn.)

**Chase Snap**
If you hit a target you moved at least 15 ft toward this turn, gain +5 ft movement. (Once per turn.)

---

**Rare Weapon Effects** *(Rare part required — GM chooses 1)*

**Glide Step** *(2 Stamina, 1/Short Rest)*
If you descend at least 10 ft, you may glide up to 60 ft horizontally, landing in an unoccupied space.

**Dive Momentum**
If you descend at least 15 ft before attacking, add +1d8 damage and push the target 5 ft.
This replaces any descent-based Common damage effect — cannot stack with Dive Hunter.

---

**Weapon Archetype Translation (Wind Affinity)**

| Weapon | Translation |
|--------|------------|
| Wand | Gains Wind Affinity. Hex becomes Wind — Scatter. Clusters deal Wind damage. No new rider or subsystem beyond affinity mapping. |
| Conduit | Gains Wind Affinity. Unlocks Wind Aspect: **Updraft Field** (no modified version, no buffed version). |
| Bow | Selected Rare effect becomes a Wind Arrow. Glide Step arrow: fire at a ground location — hunter glides to that point instead of current position. Dive Momentum arrow: applies on hit as normal. Limited 2 uses per hunt. |
| Flute | Selected Rare effect becomes a localized wind-pulse Ballad in 5–10 ft radius. Effects that normally target one creature affect all valid targets in the pulse. Duration and Stamina costs unchanged. |

---

**Common Armor Effects** *(GM chooses 1)*

**Feathered Frame**
Reduce falling damage by 5.

**Glide Surge**
After gliding, you may shift 5 ft without provoking opportunity attacks. (Once per turn.)

---

**Rare Armor Effects** *(Rare part required — GM chooses 1)*

**Wind Brace**
Once per combat, when targeted by a ranged attack while elevated at least 10 ft above ground, impose disadvantage on that attack.

---

### E) Signature Craft *(Rare Required)*

**Skybound Light Armor**
- Type: Light Armor
- Replaces standard Light Armor template
- Cannot stack additional Rare effects
- Does not stack with Rare Weapon Glide Step

**Grants:**

*Glide Step* — (1/Combat, no Stamina cost)
If you descend at least 10 ft, you may glide up to 60 ft horizontally, landing in an unoccupied space.

Advantage on DEX saves vs falling.

---

## 11) Hooks

**The Canopy Collapse**
Tanuza theft has driven nesting birds away from the upper canopy. Without those birds, insect swarms devastate crops below. Killing the Tanuza may stabilize trade — but destabilize predator chains that rely on them.

**Festival of Missing Trinkets**
During a riverside gathering, Tanuza begin swooping through crowds stealing valuables. Hunters are hired to control the chaos without turning the celebration into a massacre.

**The Stolen Bait**
A trapper's entire supply of monster bait has been stolen and relocated high into the canopy. Larger predators now circle beneath the trees, drawn by the scent.

**Wind Before the Storm**
An unusual number of Tanuza are gliding low and erratically. Heavy storms are coming — and the beasts are relocating early. Settlements that ignore the signs may flood.
