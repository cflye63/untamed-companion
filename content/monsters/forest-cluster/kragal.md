# KRAGAL — The Cliffside Sentinel

**Classification:** Horned Beast
**Tier:** 1 — Skirmisher / Elevation Controller
**Biome:** Forest Cliffs, Forest Valley (Cliff Sectors)
**Element:** Earth

**Tagline:** "A territorial cliff-dweller that dominates elevation and punishes those below."

**Active Conditions:**
- Most active at dawn and dusk
- More aggressive during territorial disputes
- Retreat behavior shifts when no climbable surface is within 30 ft

---

## 1) Field Notes

Kragal resembles a massive ibex with stone-plated hide and elongated crescent horns. It claims cliff faces as territory, using elevation as both shield and weapon. The horns are not merely tools — they are extensions of dominance, thrown and recalled in arcing whistles that echo through the valley.

When cornered or grounded, Kragal becomes reckless, resorting to desperate charges.

**What Hunters Notice First:**
- The high, echoing whistle of something cutting through wind
- Fresh gouge marks in stone where hooves have launched
- A still silhouette watching from impossible elevation

**Core Puzzle:**
- Elevation advantage scales its damage and defenses. Remove high ground and it becomes a manageable duel.
- Breaking the horns collapses its entire ranged identity — Horn Throw, Boomerang Barrage, and elevation damage all go dark simultaneously.

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

> DEX corrected to T1 cap (max 7). Kragal's precision is expressed through its elevation positioning and cooldown management, not inflated stats.

### Combat Attributes

| Stat | Value | Notes |
|------|-------|-------|
| AR | 12 | Stone-plated hide; +1 AR vs melee from below while elevated |
| HP | 81 | 4P baseline: TierBase (15) + CON (6) × 11 |
| Stamina | 16 | 10 + CON Score (6) |
| Movement | 30 ft ground / 60 ft climb | Treats cliff surfaces as normal terrain |
| Attacks/Turn | 2 | — |

**Attack Roll Breakdown (Melee):** `d20 + STR mod (+2) + Trained proficiency (+2) = d20+4`
**Attack Roll Breakdown (Ranged):** `d20 + DEX mod (+3) + Trained proficiency (+2) = d20+5`

**Exhaustion Rule:**
- Movement halved
- Cannot use Boomerang Barrage
- Loses elevation bonus damage

### Senses

**Elevated Awareness:**
- Advantage on detection checks while positioned at least 10 ft above the target
- No special anti-stealth beyond line-of-sight from elevation

---

## 3) Attacks

**Cliffside Kick — (1 Stamina)**
```
Type:    Melee (STR)
Attack:  d20+4
Damage:  1d10+2
Rider:   If Kragal is at least 10 ft higher than the target,
         deal +1d8 additional damage.
```

> Elevation bonus brings average to 12 — above T1 dice ceiling. Accepted as conditional; the 10+ ft elevation gate is a meaningful positional requirement.

**Horn Throw — (1 Stamina)**
```
Type:    Ranged 30/90 (DEX)
Attack:  d20+5
Damage:  1d8+3
Rider:   May target two creatures in a straight line.
         Second target takes damage only — no rider.
         Horn returns at end of turn unless horns are broken.
```

---

## 4) Special Abilities

**Boomerang Barrage — (2 Stamina, Cooldown 2)**
```
Area:    20 ft cone
Save:    DEX vs DC 14
Damage:  2d8+3
Fail:    Target becomes Staggered
Success: Half damage, no Staggered
```

> Primary space-control tool. 2d8+3 averages 12 on an AOE cone with a Stagger rider — ceiling touch accepted; the 2 Stamina cost and Cooldown 2 are real constraints.

---

**Crag Vault — (1 Stamina)**
- Move up to 30 ft between elevated surfaces without provoking opportunity attacks
- Must start or end movement at least 10 ft above ground

> Identity reposition tool. Keeps Kragal cycling elevation rather than holding a static perch.

---

**Desperation Charge — (2 Stamina, Trigger: ≤30% HP)**
- Move 20 ft in a straight line
- First creature hit: **2d6+2 damage**
- STR Save DC 13 or Prone
- If Kragal hits nothing: becomes Dazed until start of next turn

---

## 5) Reactions

**Ledge Rebound — (1 Stamina)**
```
Trigger:  Hit by a melee attack while within 5 ft of a climbable surface
Effect:   Move 10 ft vertically without provoking opportunity attacks
Limit:    1 reaction per round
```

---

## 6) Passive Traits

**High Ground Predator:**
While at least 10 ft above a target:
- +1 AR vs melee attacks from below
- Cliffside Kick gains elevation bonus damage

**Stone Hooves:**
Advantage on saves vs shove while on natural rock.

---

## 7) Part Breaks & Weaknesses

### Break Zones

| Part | Threshold | Break Effect |
|------|-----------|--------------|
| Horns | 3 called-shot hits (−2 accuracy penalty) | Lose Horn Throw. Lose Boomerang Barrage. AR reduced to 10. Cannot gain elevation bonus damage. |

> One zone, total identity collapse. This is intentional — the horns are the single pressure point the entire encounter is built around.

### Tactical Weaknesses

- **Forcing Prone removes elevation control** — grounded Kragal is a stripped version of itself
- **Nets disrupt climb loops** — denying Crag Vault pins it to a surface
- **Fog or heavy rain** imposes disadvantage on Horn Throw
- **Breaking horns** collapses ranged identity completely — switches it to Kick aggression only
- **Tight caves** invalidate Crag Vault entirely

---

## 8) Behavior Guide

**Opening State:** Begins 20–40 ft above party. Silent observation before first provocation.

**Instinct Loop:**
- If 2+ hunters cluster → Boomerang Barrage (when off cooldown)
- If isolated hunter below → Horn Throw (pierce line if second target available)
- If pressured in melee → Crag Vault to reset elevation
- If horns broken → abandon ranged rotation; commit to Cliffside Kick aggression

**Retreat / Relocation Conditions:**
- Horns broken → attempts upward retreat to deny further called-shot access
- Below 20% HP → disengages toward cliff boundary
- No elevation within 30 ft → aggressive and erratic; Desperation Charge likely

**Territory Behavior:**
- Will not pursue beyond cliff boundary
- Retreats upward when near nest
- Near nest: fights harder rather than retreating — treats the approach as a direct threat

**Loop:** Elevate → Throw → Reposition → Control Space

---

## 9) Encounter Packaging

**Recommended Arena:** Multi-tier cliff face with narrow ledges and 10–20 ft elevation gaps

**Environmental Synergy:**
- Falling rocks — ongoing hazard for hunters climbing
- Loose gravel — saves vs shove at disadvantage while crossing
- Wind gust sectors — Horn Throw may drift; add ±5 ft deviation in strong wind zones

**Mid-Fight Shifts:**
1. First Boomerang Barrage fans across a cluster — signals the space-control identity
2. Horn break is the pivot. Everything Kragal does before that moment is about staying out of called-shot range.

**Scaling Notes:**
- Weak party: reduce Barrage damage to 2d6
- Strong party: add unstable footing zones that require DEX saves to occupy

---

## 10) Loot & Crafting

### A) Loot Table

| Drop | Chance | Use |
|------|--------|-----|
| Kragal Horn | 60% | Boomerang weapons |
| Cliffside Pelt | 50% | Climbing armor |
| Earth Resonance Stone | 40% | Earth conduit component |
| Sentinel Crest *(Rare)* | 25% | Required for Rare Effects & Signature Craft |

---

### B) Craft Themes

- Elevation damage reward
- Ledge stability and anti-shove anchoring
- Controlled knockdown from high ground
- Earth-anchored positioning

> If it does not relate to elevation control or earth stability — it does not belong here.

---

### C) Material Interaction Profiles

**Weapon Bias**

| Material | Bias | Expression |
|----------|------|-----------|
| Metal | Control / Structure | Forced movement control, anti-air stabilization, anchor effects |
| Bone / Hide | Momentum / Aggression | High-ground damage reward, descent impact bonus, prone punishment |
| Stone / Crystal | Earth / Resonant | Short tremor pulses, terrain roughening, Earth damage riders |

**Armor Bias**

| Material | Bias | Expression |
|----------|------|-----------|
| Metal | Stability | Shove resistance while grounded, brace triggers |
| Hide / Bone | Mobility | Ledge balance bonuses, reposition after descent |
| Cloth / Membrane | Positioning | Reduced fall damage, limited glide assist |

> No material modifies base AR beyond weight class.

---

### D) Effect Tables

**Common Weapon Effects** *(GM chooses 1)*

**High Ground Striker**
If you are at least 10 ft above your target, deal +1d4 damage. (Once per turn.)

**Stone Anchor**
When you hit a creature that moved 10+ ft this turn, reduce its movement by 5 ft until end of round. (Once per turn.)

---

**Rare Weapon Effects** *(Rare part required — GM chooses 1)*

**Sentinel Arc** *(2 Stamina, 1/Combat)*
After moving at least 10 ft downward or attacking from higher ground, your next hit forces a STR Save (DC = weapon DC). Fail → target falls Prone. Success → no additional effect.

**Cragbound Return** *(1/Combat)*
After attacking from at least 10 ft above your target, immediately reposition up to 15 ft to another elevated surface you can see.

---

**Weapon Archetype Translation (Earth Affinity)**

| Weapon | Translation |
|--------|------------|
| Wand | Gains Earth Affinity. Hex becomes Earth — Sunder. Clusters deal Earth damage. |
| Conduit | Gains Earth Affinity. Unlocks Earth Aspect (Anchor Field). |
| Bow | Only **Sentinel Arc** translates to a Bow arrow type. **Cragbound Return is Bow-incompatible** — the reposition loop defeats the hold-position identity of the Bow. **Sentinel Arc Arrow:** 2 uses per hunt. On hit, target makes STR Save vs Bow DC or falls Prone. Elevation gate applies: hunter must be on higher ground than target when firing. |
| Flute | Cragbound Return has no Flute conversion (single-user reposition). Sentinel Arc → Ballad **"Cliffwarden Refrain"**: While active, enemies that move more than 10 ft within the aura must make STR Save vs Flute DC or fall Prone. Uses normal Ballad upkeep rules. |

---

**Common Armor Effects** *(GM chooses 1)*

**Surefooted Frame**
Ignore the first 10 ft of falling damage each round.

**Ledge Balance**
Advantage on checks to resist shove while elevated.

---

**Rare Armor Effects** *(Rare part required — GM chooses 1)*

**Mountain Hold** *(1/Combat)*
When forced to move, reduce forced movement by 10 ft.

---

### E) Signature Craft

**Whistling Sentinel Boomerang** *(Rare part required)*
- Weapon Type: Boomerang (Thrown 30/90)
- Cannot stack additional Rare Weapon effects

If thrown from at least 10 ft above the target:
- Deal +1d6 damage
- On hit: return automatically
- May reposition 10 ft along your current elevated surface

---

## 11) Hooks

**The Caravan Whistles**
Cliff whistles at dawn precede missing caravans. The road through the valley passes directly through Kragal territory — and something has made it more aggressive than usual.

**The Broken Sentinel**
A horn-broken Kragal has descended into the valley, rampaging unpredictably. Without its ranged identity, it's desperate and erratic — more dangerous in some ways, less in others.

**Displaced by Something Worse**
A rival predator has driven Kragal lower into the valleys. Whatever pushed a cliff apex down to ground level is still up there.

**Storm Season Ascent**
Hunters must scale unstable cliffs during storm season. The Kragal isn't the only thing that kills up here — but it's the only thing that's waiting for them.
