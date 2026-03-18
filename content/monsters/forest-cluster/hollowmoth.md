# HOLLOWMOTH — The Lantern Shade

**Classification:** Insectoid Beast
**Tier:** 1 — Nocturnal Lurer / Control Predator
**Biome:** Verdant Hollow, Lake Miru, Forest Valley (Night Only)
**Element:** None (Sonic / Radiant expression, non-elemental)

**Tagline:** "A nocturnal lurer that blinds, disorients, and drains warmth from the unwary."

**Active Conditions:**
- Night only. Avoids bright daylight.
- Drawn toward heat sources, open flame, and warm-bodied prey
- Increased activity on moonless or foggy nights

---

## 1) Field Notes

Hollowmoths drift toward heat and breath like living lanterns. Their wings shimmer with hypnotic eye-patterns that distort depth and distance. Spores cloud the air before a soft pulse lulls victims into unnatural stillness.
They are rarely alone in the ecosystem—often heralding deeper nocturnal threats.

**What Hunters Notice First:**
- Flickering, shifting light at treeline height
- Fine glowing dust drifting downward
- Sudden silence in nearby insects and frogs

**Core Puzzle:**
- Vision denial (Blind) + Sleep setup pressure + flight stamina tempo
- Remove flight → collapse. Illuminate battlefield → reduce threat.

---

## 2) Stat Block

### Attributes

| Stat | Score | Modifier |
|------|-------|----------|
| STR | 3 | +1 |
| DEX | 7 | +3 |
| CON | 5 | +2 |
| INT | 4 | +2 |
| INS | 6 | +3 |
| CHA | 7 | +3 |

> STR is a dump stat; no abilities rely on it. DEX and CHA capped at Tier 1 maximum (7).

### Combat Attributes

| Stat | Value | Notes |
|------|-------|-------|
| AR | 10 | Light chitin, evasive hover |
| HP | 70 | 4P baseline: TierBase (15) + CON (5) × 11 |
| Stamina | 15 | 10 + CON Score (5) |
| Stamina Tax | –1/turn while hovering | Flight maintenance cost |
| Movement | 60 ft hover (full 360°) | — |
| Attacks/Turn | 2 | — |

**Attack Roll Breakdown:** `d20 + stat mod (+3) + Trained proficiency (+2) = d20+5`

**Exhaustion Rule:** Immediately falls Prone. Cannot Hover. Silent Pulse disabled.

### Senses

- Darkvision 60 ft
- Advantage on detection checks involving firelight or open flame
- No tremor or scent detection

---

## 3) Attacks

**Wing Slash — (1 Stamina)**
```
Type:    Melee (DEX)
Attack:  d20+5
Damage:  1d8+3
Rider:   Target must succeed DEX save (DC 13) or be pushed 5 ft.
```

**Proboscis Jab — (1 Stamina)**
```
Type:    Melee (CHA)
Attack:  d20+5
Damage:  1d8+3
Rider:   If target is Sleeping:
           Deal +1d8 damage
           Target loses 2 Stamina
         Controlled drain. No full depletion.
```

> Proboscis Jab vs Sleeping: 2d8+3 avg ~12 — ceiling touch gated behind Sleep condition. This is the loop payoff.

---

## 4) Special Abilities

**Lumin Spores — (2 Stamina, Cooldown 2)**
```
Area:   15 ft radius
Save:   DEX vs DC 13
Fail:   Blinded until end of next turn
Pass:   No effect
```
Primary disorientation tool.

**Silent Pulse — (2 Stamina, Cooldown 2)**
```
Area:   30 ft cone
Save:   INS vs DC 13
Fail:   Target gains Sleep condition
Pass:   No effect
```
Sleep follows core Sleep condition rules (ends on damage, INS check at end of turn, etc.).

---

## 5) Reactions

**Lantern Draw — (1 Stamina)**
```
Trigger:  A creature within 30 ft ignites or intensifies a light source.
Effect:   Hollowmoth may move up to 30 ft toward that light without
          provoking opportunity attacks.
```
No free reposition — must pay Stamina.

---

## 6) Passive Traits

**Nocturnal Veil:**
In dim light or darkness, Hollowmoth has advantage on Stealth.

**Fragile Frame:**
Takes +2 damage from Fire sources.

---

## 7) Part Breaks & Weaknesses

### Break Zones

| Part | Threshold | Break Effect |
|------|-----------|--------------|
| Wings | 2 called-shot hits | Movement reduced to 30 ft. Loses Hover. Flight tax removed. Silent Pulse disabled. |
| Proboscis | 1 called-shot hit | Proboscis Jab loses its Stamina drain rider. |

### Tactical Weaknesses

- Fire deals +2 damage (Fragile Frame)
- Strong wind or forced movement grounds it
- Loud sonic bursts impose disadvantage on next Silent Pulse
- Multiple light sources confuse Lantern Draw behavior
- Extremely vulnerable while grounded — losing Hover is effectively losing half its toolkit

---

## 8) Behavior Guide

**Default Opener:** Starts 20–30 ft above party in darkness.

**Instinct Loop:**
- If 2+ clustered → Lumin Spores
- If isolated target → Silent Pulse
- If target Sleeping → Proboscis Jab
- If pressured → Lantern Draw reposition

**Low Stamina (≤5):**
- Retreat upward
- Attempt hover stall

**Below 40% HP:**
- Disengage
- Lure hunters deeper into night

**Loop:** Blind → Lull → Drain → Drift

---

## 9) Encounter Packaging

**Recommended Arena:** Night forest clearing, lake shoreline with fog, campsite perimeter

**Environmental Synergy:**
- Low visibility
- Firelight zones
- Mist pockets

**Mid-Fight Shifts:**
1. Wind gust clears spores
2. Campfire extinguished
3. Predator howl heard nearby

**Scaling Notes:**
- Weak party: reduce Sleep DC to 12
- Strong party: add a light-dimming environmental event

---

## 10) Loot & Crafting

**Crafting Identity:** Sleep manipulation / Vision denial / Stamina chip pressure / Night stealth

> If an effect does not relate to these themes, it does not belong here.

### A) Loot Table

| Drop | Chance | Use |
|------|--------|-----|
| Lumin Dust | 60% | Glow bait, anti-stealth tools |
| Hollow Wing | 50% | Night cloaks |
| Nectar Proboscis | 30% | Stamina rider parts |
| Dreamscale Vein *(Rare)* | 20% | Required for Rare Effects & Signature Craft |

---

### B) Craft Themes

- Sleep pressure and application
- Blind / vision denial
- Night stealth and dim-light mobility
- Stamina chip damage

---

### C) Material Interaction Profiles

**Weapon Bias**

| Material | Bias | Expression |
|----------|------|-----------|
| Metal | Control / Structure | Interrupt Sleep, anti-flight control, mark/anchor effects |
| Bone / Hide | Aggression / Instinct | Stamina chip riders, sleep punisher, pursuit triggers |
| Stone / Crystal | Resonant / Radiant | Blind bursts, light pulses, visual disruption zones |

**Armor Bias**

| Material | Bias | Expression |
|----------|------|-----------|
| Metal | Stability | Resistance to Blind, CC mitigation |
| Hide / Bone | Mobility | Night movement, anti-prone recovery |
| Cloth / Membrane | Positioning | Stealth in dim light, limited reposition reactions |

> No material modifies base AR beyond weight class.

---

### D) Effect Tables

**Common Weapon Effects** *(GM chooses 1)*

**Drowsy Cut**
Once per turn, when you hit a target that has not moved this round, deal +1 damage and target loses 1 Stamina.

**Lantern Glare**
On hit, target has disadvantage on its next Perception check. (1/turn.)

---

**Rare Weapon Effects** *(Rare part required — GM chooses 1)*

**Dream Pulse** *(2 Stamina, 1/Combat)*
On hit, target must make INS save (DC = weapon DC) or fall Asleep until end of its next turn or until damaged.

**Mist Veil Step** *(1/Combat)*
After hitting a target in dim light, you may move 15 ft without provoking opportunity attacks.

No stacking. No stat bonuses.

---

**Weapon Archetype Translation (Hollowmoth — No Elemental Affinity)**

| Weapon | Translation |
|--------|------------|
| Wand | No elemental affinity granted. Wand does NOT gain a new mechanic. If Rare effect selected, expressed through existing cluster/hex system only. |
| Conduit | No elemental affinity granted. Conduit does NOT gain a new Aspect. |
| Bow | Rare effects become new Arrow Types. Example: Dream Pulse Arrow — 2 uses per Hunt. Uses Bow DC. |
| Flute | Rare effects become new Ballads. Example: Lullaby of the Shade — Aura forces INS save when enemies start turn in aura. |

---

**Common Armor Effects** *(GM chooses 1)*

**Night Drift**
Advantage on Stealth in dim light.

**Light Dampener**
Reduce radius of light you emit by 5 ft.

---

**Rare Armor Effects** *(Rare part required — GM chooses 1)*

**Dreamskin** *(1/Combat)*
When you would be Blinded or put to Sleep, you may ignore the effect.

---

### E) Signature Craft

**Dream Leech Whip** *(Requires: Dreamscale Vein)*
- Weapon Type: Whip
- Cannot stack additional Rare effects

On hit against a Sleeping or Restrained target:
- Target loses 2 Stamina
- You gain 1 Stamina

---

## 11) Hooks

**The Extinguished Camps**
Campfires in the Verdant Hollow go out with no footprints left behind. Hunters blame the wind. The locals know better.

**The Midnight Lake**
Lake Miru glows at midnight. No one who went to investigate the first three nights came back before dawn. Two didn't come back at all.

**The Deep Trail**
Hunters led by the lights find themselves deeper in predator territory by morning — the Hollowmoth isn't territorial, but something larger uses its distractions.

**The Dream Trade**
Lumin Dust has appeared in apothecary stalls as an ingredient in "dream rites." The Guild has questions. So do the hunters who woke up with empty Stamina reserves.
