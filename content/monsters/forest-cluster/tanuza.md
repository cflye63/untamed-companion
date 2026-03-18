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
| CON | 7 | +3 |
| INT | 4 | +2 |
| INS | 7 | +3 |
| CHA | 3 | +1 |

> DEX, CON, and INS at T1 maximum (7). Aerial agility is expressed through Glider's Evasion, Aerial Acrobatics, and the Glide loop — not raw stat score.

### Combat Attributes

| Stat | Value | Notes |
|------|-------|-------|
| AR | 11 | Light frame, constant motion — +2 AR while airborne (see Glider's Evasion) |
| HP | 92 | 4P baseline: TierBase (15) + CON (7) × 11 |
| Stamina | 17 | 10 + CON Score (7) |
| Movement | 30 ft run / 20 ft climb / 60 ft glide | Glide requires 10 ft elevation minimum |
| Attacks/Turn | 2 | — |

**Attack Roll Breakdown:**
- Claw Rake: `d20 + DEX mod (+3) + Trained prof (+2) = d20+5`
- Tail Slam: `d20 + DEX mod (+3) + Trained prof (+2) = d20+5`

**Exhaustion Rule:** Cannot Glide. Loses access to Tail Slam and Tailwhip Scatter. Loses Glider's Evasion. Switches to ground skirmish only.

### Senses

- Sharp low-light vision adapted to canopy and cliff environments
- Advantage on checks to detect visible trinkets, bait, or unsecured items (Shiny Object Fixation)
- No special detection of grounded creatures — relies on line of sight from elevation

---

## 3) Attacks

**Claw Rake — (1 Stamina)**
```
Type:    Melee (DEX)
Attack:  d20+5
Damage:  1d8+3
Rider:   After this attack resolves, Tanuza may shift 5 ft without
         provoking opportunity attacks.
```

**Tail Slam — (1 Stamina)**
```
Type:      Melee (DEX)
Attack:    d20+5
Damage:    1d10+3
Rider:     STR Save (DC 12) or knocked Prone
Requires:  Must be airborne or have Glided this turn

Height Bonus: If Tail Slam begins from 20+ ft above target, deal +1d6 additional damage.
```

> Tail Slam from height averages 12 — ceiling touch for T1, gated behind elevation and airborne requirement. The tail membrane carries the full momentum of the dive; breaking it collapses this entirely.

---

## 4) Special Abilities

**Glide — (1 Stamina, Movement Action)**
- Move up to 60 ft horizontally for every 10 ft of descent
- Does not provoke opportunity attacks while gliding
- Must end on solid surface
- Cannot Glide if membrane is broken (see Part Breaks)

**Tailwhip Scatter — (2 Stamina, Cooldown 2 turns)**
- Tanuza whips its membrane tail in a wide 15 ft arc while airborne
- **Requires:** Tanuza must be airborne to use
- STR Save (DC 13):
  - **Fail:** 1d8+3 damage, pushed 10 ft, and Dazed until end of next turn
  - **Success:** Half damage, no push
- The tail is both the weapon and the wing. Using it this hard costs both.

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

**Glider's Evasion**
- While airborne, Tanuza gains +2 AR (AR 11 → **13** in flight)
- Represents unpredictable mid-glide trajectory — hard to anticipate, harder to hit
- Lost if membrane is broken (see Part Breaks)

**Shiny Object Fixation**
- Advantage on checks to detect visible trinkets or bait
- Hunters may exploit this with traps or decoys

---

## 7) Part Breaks & Weaknesses

### Break Zones

| Part | Threshold | Break Effect |
|------|-----------|--------------|
| Tail & Membrane | 2 successful called shots (−2 accuracy penalty) | Glide speed reduced to 20 ft. Tailwhip Scatter disabled. Tail Slam loses height bonus. Glider's Evasion lost (AR drops to 11). Movement halved. |

### Tactical Weaknesses

- Requires elevation to function — deny height, deny the loop
- Nets and snares disable Glide entirely, grounding it immediately
- Heavy rain prevents Glide entirely
- Grounded Tanuza is vulnerable: loses Glider's Evasion (+2 AR gone), cannot use Tail Slam or Tailwhip Scatter
- Membrane Break is a single zone but collapses the entire aerial identity simultaneously

---

## 8) Behavior Guide

**Opening State:** Elevated 20–30 ft, skittering along branches, watching the party.

**Round 1 Priority:**
- Glide across the canopy, staying airborne — do not land
- If 2+ hunters clustered → Tailwhip Scatter (from above, while still airborne)
- Else → Tail Slam the most isolated target, then immediately Glide away to re-elevate

**Instinct Loop:**
- **Stay airborne whenever possible.** Tanuza prefers to never touch the ground voluntarily.
- If hunters cluster → Tailwhip Scatter (when off cooldown, must be airborne)
- If a hunter is prone → Tail Slam that target next pass (height bonus if 20+ ft)
- After each Tail Slam → Claw Rake once, then Glide back to elevation before next turn
- If Stamina ≤ 5 → Gain maximum elevation; do not engage until repositioned
- If Stamina ≤ 2 → Flee toward highest available terrain

**Retreat / Relocation Conditions:**
- Below 30% HP → Canopy glide escape; zig-zag between trees to break pursuit
- Membrane broken → Abandons glide loop; skitters across ground erratically, using Claw Rake only
- Exhausted → Panics; erratic ground movement; attempts disengage each turn

**Territory Behavior:**
- Near a nest or cache: will double back even at low HP to retrieve stolen goods
- If hunters occupy highest ground: Tanuza circles at mid-elevation, waiting for a gap

> **Loop:** Glide → Tail Slam → Claw Rake → Re-elevate → Tailwhip Scatter on cluster → repeat.
> Ground the Tanuza and the entire loop collapses — it loses AR, loses Tail Slam, loses Scatter.

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
| Flute | Selected Rare effect becomes a localized wind-pulse Ballad in 5–10 ft radius. Tailwhip Scatter identity: Ballad forces STR save on creatures starting their turn in the aura — fail = pushed 5 ft. Duration and Stamina costs unchanged. |

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
