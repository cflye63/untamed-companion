# GORRHUL — The Swamp Warden

**Classification:** Brutal Beast
**Tier:** 2 — Territorial Bruiser / Terrain Dominator
**Biome:** River Basin, Verdant Hollow
**Element:** Earth

**Tagline:** "A territorial boar-beast that weaponizes mud, momentum, and immovability."

---

## 1) Field Notes

Gorrhul is a colossal mud-armored boar that turns riverbanks into trenches. It is not merely strong — it reshapes terrain through violence.

**What Hunters Notice First:**
- Churned riverbanks with deep hoof gouges, 20–30 ft straight trenches from previous charges
- A low, rhythmic snorting and the sound of something large displacing water in a bog
- The absence of every other large creature in the area — Gorrhul claims its flood plain completely

**Core Puzzle:**
- Charge lanes, mud armor cycling, terrain corruption, momentum vs immovability
- Break Mud → limit tools. Force tight terrain → restrict Charge.

---

## 2) Stat Block

### Attributes

| Stat | Score | Modifier |
|------|-------|----------|
| STR | 7 | +3 |
| DEX | 5 | +2 |
| CON | 7 | +3 |
| INT | 3 | +1 |
| INS | 7 | +3 |
| CHA | 4 | +2 |

### Combat Attributes

| Stat | Value | Notes |
|------|-------|-------|
| AR | 13 | Heavy layered hide — rises to 15 while Mud-Covered |
| HP | 137 | 4P median: TierBase (60) + CON (7) × 11 |
| Stamina | 17 | 10 + CON Score (7) |

> **Stamina Scaling Note:** Stamina 17 targets a median party.
> For optimized parties: Stamina → **22** (Gorrhul's Mud Recoat + Charge Mode economy requires extra runway to execute its full puzzle loop against high-DPR groups).

> **GM Scaling Note:** HP 137 targets a median party (mixed builds, HR 5–7 range).
> For optimized parties: HP → **250** (4P optimized: TierBase 60 + CON 7 × 27)

| Movement | 30 ft | 60 ft linear while in Charge Mode |
| Attacks/Turn | 3 | — |

**Attack Roll Breakdown:** `d20 + STR mod (+3) + Trained proficiency (+2) = d20+5`

**Exhaustion Rule:**
- Cannot enter Charge Mode
- AR reduced to 13 permanently until Mud Recoat

### Senses

- Tremorsense 30 ft (through mud or wet soil only)
- Detects movement through vibration — ineffective on dry rock or elevated platforms

---

## 3) Attacks

**Gore — (1 Stamina)**
```
Type:    Melee (STR)
Attack:  d20+5
Damage:  2d8+3
Rider:   On crit: target gains Bleed (1d6 for 2 turns)
```

**Stomp — (1 Stamina)**
```
Type:    Melee (STR), 10 ft radius
Attack:  d20+5
Damage:  2d6+3
Rider:   DEX Save DC 15 → Fail: Prone
```

**Mud Toss — (1 Stamina, Mud-Covered Only)**
```
Type:    Ranged 30 ft (STR throw)
Attack:  d20+5
Damage:  1d6+3
Rider:   DEX Save DC 15 → Fail: Slowed (–10 ft movement, 1 turn)
```

---

## 4) Special Abilities

**Charge Mode** *(Stance)*

Requires 20 ft straight movement.

While active:
- Movement becomes 60 ft linear
- Costs 2 Stamina per turn to maintain
- Unlocks Charging Gore

---

**Charging Gore — (3 Stamina)**

```
Type:    Melee (STR), Charge Mode only
Attack:  d20+5
Damage:  2d10+3  (+1d8 if moved 30+ ft before impact)
Rider:   DEX Save DC 15 → Fail: Stunned 1 turn
Miss:    Gorrhul is Dazed until its next turn
```

> Risk/reward preserved. A missed Charging Gore leaves Gorrhul vulnerable for a full round.

---

**Mud Recoat — (4 Stamina, Full Turn)**

If adjacent to mud or shallow water:
- Regain Mud-Covered state
- Restore +2 AR (back to AR 15)
- Unlock Mud Toss

> Full Turn cost means Gorrhul takes no other action this round. A window for hunters to press the advantage.

---

## 5) Reactions

**Braced Bulk — (1 Stamina)**
```
Trigger:  Forced movement or knockback
Effect:   Reduce forced movement by 10 ft
Limit:    1 reaction per round
```

---

## 6) Passive Traits

**Mud-Covered**

While active:
- +2 AR (13 → 15)
- Immune to difficult terrain caused by mud
- **While Mud-Covered, Gorrhul takes half damage from fire sources**
- **Advantage on saves vs Prone** (the mud acts as a stabilizing anchor)

Removed by:
- Receiving **8 or more fire damage in a single round** (after halving) — Mud layer scorched off. Passive ticks (Scorch, Burned) do not count toward this threshold; only active burst damage (detonations, fire attacks) qualifies.
- Immersion in clean water (river crossing, water bucket)
- Being knocked Prone (mud disperses on impact) — **but Mud-Covered grants advantage on the Prone save first**

> Fire resistance and the 8-damage threshold together prevent a single Dragonian Fire Wand from cycling Mud via Scorch ticks or single-cluster detonations (1d6+5 halved = 4.25 avg, under threshold). A 2-cluster detonation (2d6+5 = 12 avg, halved = 6, occasionally rolls 16+ raw = 8+ halved) has a chance to strip Mud; 3 clusters reliably strip it. This makes Mud removal a deliberate investment — not free, but achievable with planning.

**Terrain Sculptor**

Gorrhul's movement through wet ground creates difficult terrain in its wake. Each square it moves through in mud or wet soil becomes difficult terrain for hunters until end of round.

---

## 7) Part Breaks & Weaknesses

### Break Zones

| Part | Accuracy | Threshold | Break Effect |
|------|----------|-----------|--------------|
| Tusks ★ *(Impact Zone)* | Precise (−4) | 2 called-shot hits | Charging Gore loses bonus die (+1d8). Gore damage reduced by 1 die size (2d8 → 1d8). |
| Shoulder Plate (Mud Layer) | Open (0) | 3 hits (any type) | Mud-Covered AR bonus reduced to +1 (AR 14 max instead of 15). Mud Recoat still restores full +2 until Shoulder Plate is broken again. |

### Tactical Weaknesses

- **Fire damage (burst, 8+ in a round after halving):** Forces Mud-Covered removal — requires stacking 2-3 clusters or combining fire sources
- **Tight terrain:** Charge Mode requires 20 ft straight movement — walls, trees, and hunter formation can block charge lanes
- **Prone:** Removes Mud-Covered and cancels Charge Mode — but Mud-Covered grants advantage on Prone saves, so toppling Gorrhul requires commitment
- **Braced Bulk costs Stamina:** Repeated forced movement attempts drain Gorrhul's reaction economy

---

## 8) Behavior Guide

**Opening State:** Slow advance across floodplain. Snorts and churns mud if hunters enter its territory — will charge if they don't retreat within 1 round.

**Round 1 Priority:**
- If Mud-Covered (default): Gore × 2 + Stomp on a clustered hunter
- If 3+ hunters clustered: Stomp first (Prone), then Gore the prone target

**Instinct Loop (Above 40% HP):**
- If open charge lane (20 ft straight): enter Charge Mode → Charging Gore
- If no lane: Gore → Stomp → Mud Toss (if Mud-Covered)
- If Mud-Covered stripped: Attempt Mud Recoat if adjacent to mud/water
- If Stunned or Dazed from missed Charge: skip, recover next turn
- **Targeting priority (R2+):** If a hunter is stationary and dealing high output (Arbalest bracing, Bow at Focus, Wand cycling), Gorrhul shifts Charging Gore toward that hunter. Stationary prey is easy prey. A stationary hunter above ~15 EV/round becomes the priority Charge target over the closest hunter.

**At 40% HP:**
- Abandons Mud Recoat attempts — full aggression
- Charging Gore priority regardless of terrain
- Accepts Daze risk for the Stun upside

**At 0 Stamina — Exhausted:**
- Cannot Charge
- AR drops to 13 permanently (no Recoat)
- Continues Gore + Stomp but at half effectiveness

**Loop:** Fortify → Charge → Churn → Reset

---

## 9) Encounter Packaging

**Recommended Arena:** Flooded riverbank — shallow bog field with tree roots creating charge lanes. Some dry elevated ground at the edges (limits Tremorsense).

**Environmental Synergy:**
- Mud zones: Gorrhul immune; hunters must spend movement or take Prone risk
- Rain mid-fight: creates new mud zones, potentially reopening Recoat opportunities
- Bank collapse: opens or closes charge lanes dynamically

**Mid-Fight Shifts:**
1. First Charging Gore resolves — sets the fight tempo and signals whether the party has a formation answer
2. Mud stripping — the party's first successful fire burst or Prone establishes momentum; the Recoat Full Turn creates a tactical window

**Scaling Notes:**
- Weak party: Reduce Charging Gore to 2d10+3 only (remove the +1d8 distance bonus), Mud Recoat costs 3 Stamina
- Strong party: Add a flood event mid-fight that creates new mud zones adjacent to all hunters

---

## 10) Loot & Crafting

### A) Loot Table

| Drop | Chance | Use |
|------|--------|-----|
| Gorrhul Hide | 70% | Heavy armor reinforcement, impact resistance |
| Boar Tusk Shard | 50% | Piercing weapon components |
| Bog Mud (cured) | 40% | Terrain tools, adhesive traps |
| Mudstone Core *(Rare)* | 20% | Required for Rare Effects & Signature Crafts |

---

### B) Craft Themes

- Immovability
- Charge authority
- Mud terrain
- Stamina sustain in grounded state

> If an effect does not relate to these four themes — it does not belong here.

---

### C) Material Interaction Profiles

**Weapon Bias**

| Material | Bias | Expression |
|----------|------|-----------|
| Metal | Control / Structure | Impact control, charge disruption, anti-movement riders |
| Bone / Hide | Mass / Momentum | Low-HP bonus damage, prone punishment, pursuit after movement |
| Stone / Crystal | Resonant / Collision | Shockwave on charge impact, knockback, terrain disruption |

**Armor Bias**

| Material | Bias | Expression |
|----------|------|-----------|
| Metal | Immovability | Forced movement resistance, brace triggers, anti-shove passives |
| Hide / Bone | Stamina Sustain | Recovery bonuses, grounded-state stamina efficiency |
| Cloth / Membrane | Terrain Adaptation | Difficult terrain immunity, mud navigation, repositioning |

> No material modifies base AR beyond weight class.

---

### D) Effect Tables

**Common Weapon Effects** *(GM chooses 1)*

**Bog Slam**
When you hit a target that hasn't moved this round, deal +1 damage and they must succeed DEX Save (DC = weapon DC) or lose 5 ft movement until end of their next turn. (Once per turn.)

**Charge Read**
When a creature moves 20+ ft toward you before attacking, you may use your Reaction (1 Stamina) to impose disadvantage on that attack.

---

**Rare Weapon Effects** *(Rare part required — GM chooses 1)*

**Mudwall** *(2 Stamina, 1/Combat)*
On hit, the target must make STR Save (DC = weapon DC) or be Restrained in mud until end of their next turn.

**Warden's Momentum** *(1/Combat)*
After moving 20+ ft in a straight line, your next attack this turn deals +1d8 damage and the target is pushed 10 ft.

---

**Weapon Archetype Translation (Earth)**

| Weapon | Translation |
|--------|------------|
| Wand | **Bogbrand Wand** — Grants Earth Affinity. Special Rider (1/Combat): When you detonate clusters, the 5 ft area becomes Mud Terrain until end of next turn. (Mud = difficult terrain; creatures Dashing must make STR save DC = Wand DC or fall Prone.) No additional damage scaling. |
| Conduit | **Swamp Warden Conduit** — Grants Earth Aspect. Special Modification (1/Combat): When activating Earth — Anchor Field, radius increases by +5 ft. Enemies inside who end turn without moving must spend 1 Stamina or fall Prone. No extra damage. |
| Bow | Common effects apply normally. Rare Mudwall → On hit, target's movement is reduced by half until end of their next turn (simplified ranged version — no Restrain). Rare Warden's Momentum → After moving 20+ ft this turn, your next arrow hit deals +1d6 and pushes the target 5 ft. |
| Flute | Common effects are passive riders on existing Ballads. Rare Mudwall → Ballad **"Warden's Hold"**: While active, allies within aura may impose disadvantage on one Dash action per round within the aura. Rare Warden's Momentum → Ballad **"Rush Tide"**: Allies within aura who move 20+ ft before attacking deal +1d4 on that attack. |

---

**Common Armor Effects** *(GM chooses 1)*

**Bog Stance**
While you have not moved this turn, reduce incoming forced movement by 5 ft.

**Mud Layer**
When you are knocked Prone, you may spend 1 Stamina as a Reaction to immediately stand.

---

**Rare Armor Effects** *(Rare part required — GM chooses 1)*

**Warden's Bulk** *(1/Combat)*
For 2 turns: cannot be forcibly moved, and gain +1 Stamina recovery if you do not move. At end of duration: lose 3 Stamina.

---

### E) Signature Crafts

*Gorrhul offers three Signature options. Each requires the Mudstone Core (Rare). They cannot be combined with each other or with other Rare effects.*

---

**Signature 1 — Bog Fortress** *(Heavy Armor)*

Replaces Heavy armor template. AR +4.

**Immovable Wall** *(1/Combat)*
For 2 turns:
- Cannot be forcibly moved
- Gain +1 Stamina recovery if you do not move
- Reduce incoming Charge damage by half

At end of duration: lose 3 Stamina. Cannot stack with Rare Armor effects.

---

**Signature 2 — Bogbrand Wand** *(Wand only)*

Grants Earth Affinity.

**Terrain Burst** *(1/Combat)*
When you detonate clusters: the 5 ft area becomes Mud Terrain until end of next turn. (Mud = difficult terrain; creatures Dashing must make STR save DC = Wand DC or fall Prone.) No additional damage scaling.

---

**Signature 3 — Swamp Warden Conduit** *(Conduit only)*

Grants Earth Aspect access.

**Anchor Surge** *(1/Combat)*
When activating Earth — Anchor Field: radius increases by +5 ft. Enemies inside who end their turn without moving must spend 1 Stamina or fall Prone. No extra damage. No permanent field.

---

## 11) Hooks

**The Overnight Flood**
A floodplain swallowed farmland overnight with no storm to explain it. Gorrhul has been churning the riverbank for days — but farmers blame the flooding, not realizing a creature walks their fields at night.

**The Long Drought**
A drought has dried Gorrhul's bog. Forced toward settlement water sources, it is increasingly aggressive. Hunters must decide whether to drive it back to distant wetlands or put it down before it reaches the village well.

**Contested Territory**
Two Gorrhuls are competing over a newly flooded zone. Their clashes are reshaping predator migration across the entire basin. Removing one may stabilize things — or trigger a worse cascade.

**The Warden's Legacy**
A guild relic was lost in a Gorrhul's territory three generations ago. The current Gorrhul has carried it embedded in its hardened mud shoulder plate for so long that it's become part of the creature's silhouette. The relic must be removed. The Gorrhul does not agree.
