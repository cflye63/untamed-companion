# PALAX — Child of the Burrow

**Classification:** Rodent Beast
**Tier:** 1 — Skirmisher / Ambush Predator
**Biome:** Verdant Hollow, Subterranean Burrow Networks
**Element:** Earth

**Tagline:** "A blind burrow predator that erupts from beneath to destabilize and isolate prey."

**Active Conditions:**
- Most active during early dawn and late dusk when surface vibrations are highest
- Increased activity after rainfall (softened ground improves burrow efficiency)
- Reduced presence in drought or hardened terrain conditions

---

## 1) Field Notes

A blind subterranean ambusher that detects vibration through soil and erupts upward to destabilize prey. It avoids prolonged engagements and relies on stamina cycling between surface bursts and underground recovery.

Palax difficulty comes from:
- Terrain control
- Prone pressure
- Burrow disengage loops

It is not a brawler. It is a tempo predator.

**What Hunters Notice First:**
- A faint rhythmic trembling in loose soil before an eruption
- Crescent-shaped mounds of disturbed earth marking recent tunnel exits
- The absence of birdsong — animals avoid ground where Palax are active

**Core Puzzle:**
- The Palax resets its advantage by going underground. Deny the burrow, deny the loop.
- Stamina drain accelerates while burrowed — bait it into extended underground cycles to exhaust it faster.

---

## 2) Stat Block

### Attributes

| Stat | Score | Modifier |
|------|-------|----------|
| STR | 7 | +3 |
| DEX | 6 | +3 |
| CON | 6 | +3 |
| INT | 3 | +1 |
| INS | 7 | +3 |
| CHA | 3 | +1 |

> INS is capped at T1 maximum (7). The Palax's exceptional tremor detection is handled entirely by the Mole Sense passive, not raw INST score.

### Combat Attributes

| Stat | Value | Notes |
|------|-------|-------|
| AR | 9 | Surface only — Palax is not built to tank hits |
| HP | 81 | 4P baseline: TierBase (15) + CON (6) × 11 |
| Stamina | 16 | 10 + CON Score (6) |
| Movement | 30 ft surface / 60 ft burrow | — |
| Attacks/Turn | 2 | — |

**Attack Roll Breakdown:** `d20 + STR mod (+3) + Trained proficiency (+2) = d20+5`

> **GM Note:** AR 9 is intentional. The Palax is never meant to absorb sustained hits — the Burrow loop is its defense. It surfaces only to Erupt, skirmish briefly, and retreat. Surface windows (Eruption cooldown phase) are the intended vulnerability window. Deny the burrow and AR 9 becomes a serious problem; let it cycle freely and AR 9 barely matters.
>
> Validated by sim-006. Fight resolves in 4 rounds. Mole Eruption fires **twice** (R1 and R3) — the full ambush loop completes before the creature dies. Ham frontliner ends at ~15% HP from double-Eruption pressure.

**Exhaustion Rule:** Cannot Burrow. Loses access to Mole Eruption. Surface-only aggression until it disengages or is slain.

### Senses

**Tremor Detection (Ground-Based):**
- 30 ft while on surface
- 90 ft while burrowed
- Detects movement through soil, not air

**Blind:**
- Immune to the Blind condition
- Cannot perceive non-grounded or airborne targets unless they create impact vibrations

**Anti-Stealth Clause:**
- Stealth is ineffective while moving across ground within detection range
- Creatures that remain completely still or are airborne can avoid detection

---

## 3) Attacks

**Claw Swipe — (1 Stamina)**
```
Type:    Melee (STR)
Attack:  d20+5
Damage:  1d8+3
Rider:   On failed DEX Save (DC 11): target pushed 5 ft
```

**Gnaw — (1 Stamina)**
```
Type:    Melee (STR)
Attack:  d20+5
Damage:  2d4+3
Rider:   If target is Prone or Restrained, deal +1d4 additional damage (once per turn)
```

> Gnaw with prone bonus averages 10.5 — this is a ceiling touch for T1. The prone requirement keeps it honest.

---

## 4) Special Abilities

**Burrow — (1 Stamina, Movement Action)**
- Moves up to 60 ft underground
- Immune to melee attacks while fully burrowed
- Gains +2 AR vs ranged attacks while underground
- Cannot use standard attacks underground
- May only initiate combat from burrow via Mole Eruption
- **If Palax ends its turn underground:** lose 1 additional Stamina

**Mole Eruption — (2 Stamina, Cooldown 2 turns)**
- Bursts upward in a 10 ft radius
- Creatures in radius make DEX Save (DC 12)
  - **Fail:** 2d6+3 damage and knocked Prone
  - **Success:** Half damage, no Prone
- After resolving, Palax surfaces in an adjacent square of its choice

---

## 5) Reactions

**Tremor Shift — (1 Stamina)**
```
Trigger:  A creature within 5 ft misses Palax with a melee attack
Limit:    1/round
Effect:   Move 10 ft without provoking opportunity attacks
```

---

## 6) Passive Traits

**Mole Sense**
- Immune to Blind condition
- Detects ground-based movement: 30 ft (surface), 90 ft (burrowed)
- Cannot be flanked while underground

**Seismic Reliance**
- On stone, hardened flooring, or dense root systems:
  - Burrow speed reduced to 30 ft
  - Mole Sense range halved
- This is the primary environmental counter. Exploit the terrain.

---

## 7) Part Breaks & Weaknesses

### Break Zones

| Part | Threshold | Break Effect |
|------|-----------|--------------|
| Face | 2 successful called shots (−2 accuracy penalty) | Mole Sense reduced to 10 ft. Cannot use Gnaw bonus damage. Cannot use Mole Eruption. |

### Tactical Weaknesses

- Cannot burrow while Exhausted — stamina denial shuts down the entire loop
- Suffers on elevated rock, compact earth, or root-thick terrain (Seismic Reliance)
- Surface AR is modest (9) — most vulnerable during Eruption cooldown
- Completely blind to airborne or fully stationary targets

---

## 8) Behavior Guide

**Opening State:** Underground.

**Round 1 Priority:**
- If 2+ targets clustered → Mole Eruption
- Else → Surface behind the weakest/most isolated target

**Instinct Loop:**
- If targets cluster → Mole Eruption (when off cooldown)
- If a hunter is isolated and prone → Claw → Gnaw (bonus applies)
- If Stamina ≤ 5 → Burrow and reposition; do not surface until next turn
- If Stamina ≤ 2 → Retreat toward burrow network exit

**Retreat / Relocation Conditions:**
- Below 40% HP → Prioritizes retreat underground
- Exhausted → Panics; surface-only aggression; attempts disengage next turn
- Face broken → Abandons eruption pattern; switches to direct surface harassment

**Territory Behavior:**
- Near den entrance: will not retreat past its primary burrow — fights harder at the threshold
- If hunters locate the burrow network: Palax becomes erratic, alternating between surface charges and short retreats

> **3-phase loop:** Erupt → Skirmish → Reset. Deny any phase and the creature loses tempo.

---

## 9) Encounter Packaging

**Recommended Arena:** Verdant Hollow — soft earth, scattered roots, uneven terrain

**Environmental Synergy:**
- Post-rain ground: full burrow speed (60 ft), full Mole Sense
- Root-dense zones: Seismic Reliance activates — natural safe corridors for hunters
- Fog or low light: no effect on Palax (blind), disadvantages hunter ranged play

**Mid-Fight Shifts:**
1. First Mole Eruption knocks 1–2 hunters prone — signals the fight's identity
2. At ~50% HP, Palax retreats underground and resurfaces from an unexpected angle (GM reward for hunters who track the tunnel exits)

**Scaling Notes:**
- Strong party: add a second Palax with staggered Eruption cooldowns
- Weak party: remove the Gnaw prone bonus; reduce Eruption to 1d6+3

---

## 10) Loot & Crafting

### A) Loot Table

| Drop | Chance | Use |
|------|--------|-----|
| Burrow Claw | 60% | Digging tools, light piercers |
| Mole Hide | 50% | Light armor with underground resistance |
| Vibration Gland | 40% | Motion-trigger traps |
| Tunnel Map Fragment *(Rare)* | 20% | Required for Rare Effects & Signature Craft |

---

### B) Craft Themes

- Burrow reposition & disengage loops
- Prone / stability punishment
- Tremor detection & anti-stealth utility
- Terrain disruption (soft ground, unstable footing)

> If an effect does not relate to earth control, ground pressure, or destabilization — it does not belong here.

---

### C) Material Interaction Profiles

**Weapon Bias**

| Material | Bias | Expression |
|----------|------|-----------|
| Metal | Control / Structure | Ground anchoring, forced movement resistance, mark/control effects, interrupting reposition |
| Bone / Hide | Aggression / Instinct | Prone punishment, pursuit triggers, pressure after movement, close-quarters pressure |
| Stone / Crystal | Resonant / Earth | Seismic bursts, tremor pulses, earth displacement, short shockwave effects |

**Armor Bias**

| Material | Bias | Expression |
|----------|------|-----------|
| Metal | Stability | Shove resistance, brace triggers, forced movement reduction while grounded |
| Hide / Bone | Mobility | Terrain tax reduction, anti-prone mobility, reposition after evasion |
| Cloth / Membrane | Positioning | Tremor detection, ground awareness, limited reaction-based repositioning |

> No material modifies base AR beyond weight class.

---

### D) Effect Tables

**Common Weapon Effects** *(GM chooses 1)*

**Prone Punisher**
Deal +1d4 damage against Prone or Restrained targets. (Once per turn.)

**Anchor Step**
After you shove a creature, you may move 5 ft without provoking opportunity attacks. (Once per turn.)

---

**Rare Weapon Effects** *(Rare part required — GM chooses 1)*

**Earth Slip** *(2 Stamina, 1/Short Rest)*
As a Movement Action, move through soft ground up to 20 ft, emerging in an unoccupied space.

**Tremor Mark**
On hit, mark target. If it moves 10+ ft before your next turn, it takes 1d6 Earth damage.

---

**Weapon Archetype Translation (Earth Affinity)**

| Weapon | Translation |
|--------|------------|
| Wand | Gains Earth Affinity. Hex becomes Earth — Sunder. Clusters deal Earth damage. |
| Conduit | Gains Earth Affinity. Unlocks Earth Aspect (Anchor Field). |
| Bow | Rare effect becomes an Earth Arrow. If effect targets self/movement, hunter targets a ground location instead; effect originates from impact point. |
| Flute | Rare effect becomes a localized ground-pulse Ballad in 5–10 ft radius. Effects that target a creature instead affect all valid targets in the pulse. |

---

**Common Armor Effects** *(GM chooses 1)*

**Braced Frame**
Advantage on saves to resist shove while standing on natural ground.

**Soft-Step Lining**
Ignore the first +1 Stamina terrain tax from soil or loose earth each turn.

---

**Rare Armor Effects** *(Rare part required — GM chooses 1)*

**Dampened Footing**
Once per combat, when knocked Prone, you may stand immediately without spending Stamina.

---

### E) Signature Craft

**Burrow Claws** *(Rare part required)*
- Weapon Type: Claws
- Predefined weapon variant — cannot stack additional Rare effects
- Grants: **Earth Slip** *(2 Stamina, 1/Short Rest)* — dig and surge through soft ground up to 20 ft, emerging in an unoccupied space

---

## 11) Hooks

**The Sinking Fields**
Farmland at the edge of Verdant Hollow is collapsing into soft earth. Livestock vanish overnight. The burrow network beneath the crops has expanded into a colony. Killing one Palax may not solve the instability — the tunnels must be mapped or collapsed.

**The Broken Road**
A trade path has begun caving in section by section. Merchants blame "tremor beasts." If Palax tunnels reach the stone foundation of the road, the entire route between settlements may be lost.

**Predator Shift**
With increased hunter activity, Palax retreat deeper underground — forcing larger burrow predators toward the surface. Removing the Palax may accidentally unleash something worse.

**The Tremor Lure**
A rival hunting party has learned to bait Palax eruptions to destabilize ground during combat with other monsters. The practice is effective — but increasingly unpredictable.
