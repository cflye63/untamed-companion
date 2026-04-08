# MORTHYL — THE ROOTBOUND PALL

**Classification:** Plant Beast
**Tier:** 5
**Biome:** Verdant Hollow, Old Grove Outskirts, Sunken Caverns (rot nodes)
**Element:** Rot / Earth

**Tagline:** "A living reclamation engine that spreads rot and devours death, turning battlefields into blighted ground."

**Appears when:**
- Entire sections of forest floor go sterile overnight — no moss, no insects, no growth
- Animals abandon territory en masse with no apparent predator pressure
- Fungal veins pulse faintly beneath the soil, tracing patterns too deliberate to be natural
- The dead do not decompose. They simply disappear.

---

## 1) Field Notes

Morthyl is not a creature in the traditional sense. It is an ecological failsafe — a fungal-root colossus that manifests where death accumulates faster than the forest can reclaim it.

Where battles, corruption, or reckless hunting poison the land, Morthyl awakens. It does not chase prey. It reclaims territory. Its body is a composite of soil, bone, fungal networks, and ancient roots, constantly reshaping itself as it consumes decay. The bones of everything it has ever absorbed are still inside it — reorganized, restructured, repurposed. Hunters who have faced Morthyl and survived report glimpsing their old companions in its silhouette: a familiar skull rising through root-flesh, a ribcage fused into a limb.

It does not remember them. It simply kept what was useful.

**What Hunters Notice First:**
- Zones of sterile forest floor where nothing grows — no rot, no fungi, no undergrowth
- Animals abandoning territory without apparent predator pressure
- Fungal veins glowing faintly beneath the soil, visible at night
- An absence of corpses where there should be many — battlefields, old hunting grounds, places of old violence, all picked clean
- A low resonant hum felt in the chest, not heard with the ears

**Core Puzzle:**
- Deny biomass — Consume is Morthyl's sustain and its fuel. Fallen allies left in Claimed Ground become resources. The party must actively protect their dead.
- Break the Bear Skull before the threshold — Bear Form without its skull is a diminished form. The window to destroy it is Root Form. Miss it and the chase begins.
- Kite Bear Form away from the anchor — Claimed Ground stays at the original position. A Bear that has left its domain cannot Consume and loses its passive pressure. The party that forces it to chase earns the clean fight.
- Shatter the Skull Mask before Rot Cascade fires — every Biomass stack the party failed to deny becomes additional damage on the Siege Form's signature. The mask is the last target. Break it early.

---

## 2) Stat Block

### Attributes

| Stat | Score | Modifier |
|------|-------|----------|
| STR | 12 | +6 |
| DEX | 3 | +1 |
| CON | 16 | +8 |
| INT | 2 | +1 |
| INS | 9 | +4 |
| CHA | 2 | +1 |

### Combat Attributes

| Stat | Value | Notes |
|------|-------|-------|
| AR | 18 | Root Form and Bear Form — dense root-bark plating |
| AR | 22 | Siege Form only — skull armor assembled over fungal core |
| HP | 450 | Median 5P: TierBase (290) + CON (16) × 10 |
| Stamina | 26 | 10 + CON Score (16) |

> **GM Scaling Note:** HP 450 targets a median mixed party (HR 20–24). For an optimized party, increase to **580**. Morthyl's three-form structure requires minimum 10 rounds to cycle properly — if HP is too low, Bear Form arrives before the party has learned Claimed Ground and the puzzle collapses.

| Movement | Value | Notes |
|----------|-------|-------|
| Root Form | 0 ft | Stationary. The arena comes to Morthyl. |
| Bear Form | 30 ft | Ground only. Erupts from the soil on transition. |
| Siege Form | 0 ft | Returns to anchor. The fortress does not pursue. |

| Form | Attacks/Turn | Primary Threat |
|------|-------------|----------------|
| Root Form | 4 | Territory, attrition, Consume |
| Bear Form | 3 | Mobility, charge pressure, displacement |
| Siege Form | 3 | Armor, bombardment, Rot Cascade |

**Attack Roll Breakdown:**
- Root / Siege physical (STR): `d20 + STR mod (+6) + Master proficiency (+4) = d20+10`
- Bear Form physical (STR): `d20 + STR mod (+6) + Master proficiency (+4) = d20+10`
- Ranged / Control (INS): `d20 + INS mod (+4) + Master proficiency (+4) = d20+8`

---

## 3) Shared Mechanics

### Consume

```
Cost:     2 Stamina
Range:    Claimed Ground only — Morthyl cannot Consume outside its domain

— LIVING TARGET (Grasped) —
Requires: Target is currently Grasped by Grasping Tendrils and within Claimed Ground.
          Only available in Root Form (Grasping Tendrils is Root Form only).

Step 1 — Begin Draw: Morthyl spends 2 STA at the start of its turn.
Step 2 — Resist:     Grasped target may use their Action to attempt STR DC 17 to break free.
                     An ally adjacent to the Grasped target may use their Action to assist
                     (lower DC by 2, to DC 15).
Step 3 — Absorb:     If not freed by end of that round, Consume completes:
                     → Morthyl recovers 2d10+8 HP (avg 19)
                     → Gain 2 Biomass (hunter or large creature) / 1 Biomass (small creature)

— DEAD TARGET (in Claimed Ground) —
Requires: Corpse within Claimed Ground. No grasp step required.
          Available in Root Form and Bear Form.

Effect:   Morthyl uses Consume as an Action (2 STA).
          → Gain 2 Biomass (hunter or large creature) / 1 Biomass (small creature)
          Note: The party may drag a corpse out of Claimed Ground to deny this.
                Once a corpse exits the 30 ft radius, it is beyond Morthyl's reach.
```

> **Design Note:** A fallen hunter within Claimed Ground is not just a loss — it is a feeding opportunity. The party has one round to stabilize or relocate before Morthyl acts. Consume is the fight's central resource denial loop.

---

### Biomass

```
Biomass is accumulated through Consume. It tracks how much Morthyl has fed this hunt.

Biomass stacks do not expire.

Form Transition fuel (see Section 6 and 7):
  Bear Form  — triggers at HP threshold (TBD) OR if Biomass ≥ 4 (force-transition regardless of HP)
  Siege Form — triggers at HP threshold (TBD) OR if Biomass ≥ 7 (force-transition regardless of HP)

Rot Cascade damage bonus (Siege Form signature):
  Each Biomass stack accumulated = +2d6 damage on Rot Cascade.
  Example: 5 Biomass = +10d6 added to Rot Cascade base damage.
  Denying Consume does not just prevent form transitions — it directly weakens the fight's most
  dangerous single attack.
```

---

## 4) Root Form — Attacks & Abilities

*Stationary. The fight begins here. Morthyl establishes Claimed Ground, pulls hunters inward, and begins feeding. Root Form is the lesson phase — hunters learn the terrain before the terrain starts moving.*

---

**Root Slam — (2 Stamina)**
```
Type:    Area (STR) — Root Limbs
Shape:   15 ft cone or line (GM chooses each use)
Save:    DEX Save DC 16
Damage:  3d10+6
Fail  → Rooted (speed 0, cannot move until start of next turn)
```
> Ground erupts in a mass of root and bone-shard. The direction is the tell — watch the root-mass lean before it fires.

---

**Grasping Tendrils — (1 Stamina)**
```
Type:    Melee (STR) — Root Limbs, Reach 20 ft
Attack:  d20+10
Damage:  2d8+6
Rider:   Pull target 10 ft toward Morthyl.
         If pulled into Claimed Ground: target loses 1 STA immediately.
         If target is now adjacent: Consume can begin next turn.
```
> Root Form's Consume setup. The tendril pull is the first step of the chain. Breaking the grasp requires a full Action — or a fast ally.

---

**Subterranean Reposition — (4 Stamina, Cooldown 2 Turns)**
```
Effect:  Morthyl sinks beneath the soil and re-emerges anywhere within 60 ft.
         The original position and path collapse into Broken Ground.

Broken Ground:
  Difficult terrain.
  Creatures moving through: DEX Save DC 16 or Prone.
  Persists until end of encounter.
```
> Morthyl does not flee. It repositions. When the ground opens, step back.

---

**Spore Seeding — (4 Stamina, Cooldown 2 Turns)**
```
Effect:  Create two spore clouds at any points within 40 ft.
         Each cloud: 10 ft radius, duration 2 rounds.

On entry or at start of turn inside cloud:
  CON Save DC 16
  Fail    → Poisoned + Movement −10 ft
  Success → Movement −5 ft
```
> The spores do not kill. They slow. Everything Morthyl does benefits from slow.

---

**Forest Seizure — (6 Stamina, Once per Hunt)**
```
Area:    30 ft radius centered on Morthyl
Save:    DEX Save DC 17
Damage:  4d10
Fail  → Prone + Rooted
Terrain: Entire area becomes Dense Root Terrain for 2 rounds.
         Dense Root Terrain: movement costs doubled, no sprint or disengage.
```
> The ground answers at once. Everything inside the radius is reminded that this is Morthyl's domain, not theirs.

---

### Root Form Exhaustion (0 STA)

```
Subterranean Reposition — disabled
Spore Seeding           — disabled
Consume                 — disabled
Claimed Ground          — shrinks to 10 ft radius
Attacks                 — reduced to 2/turn (Root Slam + Grasping Tendrils)
```

---

## 5) Bear Form

### Transition

```
Trigger: HP drops below [65% threshold — TBD] OR Biomass ≥ 4 at any HP

Tell:    One round before transition — bones visible inside Morthyl begin shifting.
         The bear skull rises toward the surface. Rib sections unfold outward.
         Morthyl cannot use Subterranean Reposition during the tell round.
         All other Root Form actions still available.

On Transition:
  Morthyl erupts from the soil. A skeletal bear frame bursts outward from the root mass,
  fusing with fungal tissue. Morthyl gains 30 ft ground movement.
  AR remains 18.
  Claimed Ground stays anchored at the original Root Form position.
  Root Form attacks (Root Slam, Grasping Tendrils) are unavailable.
  Bear Form attacks activate immediately.

If Bear Skull was broken before transition:
  Bear Form activates without Gore Charge.
  Body Slam radius reduced to 5 ft.
  (The skeleton assembled without its crown piece — the form is incomplete.)
```

> **The Anchor:** Claimed Ground does not follow Morthyl. The 30 ft blight zone remains where Root Form stood. Hunters who kite the Bear away from the anchor fight it clean — no STA drain, no Consume range. Hunters who stay near the anchor fight the Bear and the terrain simultaneously.

---

**Claw Strike — (1 Stamina)**
```
Type:    Melee (STR) — Bear Claws, Reach 10 ft
Attack:  d20+10
Damage:  3d8+8
Note:    May make two Claw Strikes per turn (costs 1 STA each).
```

---

**Gore Charge — (2 Stamina)**
```
Type:    Melee (STR) — Bear Skull, Reach 5 ft at end of charge
Movement: Move up to full 30 ft in a straight line, then attack.
Attack:  d20+10
Damage:  3d10+8
Rider:   STR Save DC 17
           Fail → Knocked Back 15 ft + Prone
Note:    Cannot be used if the charge path is fully blocked.
         Disabled if Bear Skull was broken before transition.
```
> The tell is the head drop. When the skull lowers, the charge line is set.

---

**Shoulder Check — (1 Stamina)**
```
Type:    Melee (STR) — Bear Frame, Reach 5 ft
Attack:  d20+10
Damage:  2d10+8
Rider:   STR Save DC 17
           Fail → Pushed 15 ft + lose 1 STA
```
> Not a finishing move. A displacement tool. Pushed into Claimed Ground is the goal.

---

**Body Slam — (2 Stamina)**
```
Type:    Area (STR) — Bear Frame
Radius:  10 ft centered on Morthyl (5 ft if Bear Skull broken)
Save:    DEX Save DC 17
Damage:  3d10+8 (fail) / half (success)
Rider:   Fail → Prone
```
> When Morthyl drops its full mass into the ground, the shockwave is the attack — not the body itself.

---

### Bear Form Exhaustion (0 STA)

```
Gore Charge  — disabled
Body Slam    — disabled
Claw Strike and Shoulder Check still available (instinct, not STA-dependent at this stage).
```

---

## 6) Siege Form

### Transition

```
Trigger: HP drops below [35% threshold — TBD] OR Biomass ≥ 7 at any HP

Tell:    Bear Form begins to collapse inward. Morthyl decelerates and turns toward the anchor.
         Movement drops to 15 ft for the transition round (can still attack in Bear Form).
         Morthyl moves toward the anchor point as fast as possible.

On Transition:
  Morthyl reaches the anchor and collapses inward.
  Every skull it has absorbed over the hunt erupts outward, then fuses back as armor plating.
  The largest skull — the heaviest predator ever consumed — rises as a crown-mask over the core.
  Movement returns to 0.
  AR increases to 22 (skull armor).
  Bear Form attacks unavailable.
  Siege Form attacks activate immediately.
  Claimed Ground re-expands to full 30 ft radius from the anchor.

If Skull Armor was broken mid-Siege before transition completes: N/A — Skull Armor is Siege Form only.
If Bear Skull was previously broken: Siege Form skull assembly is visibly incomplete.
  AR in Siege Form: 20 instead of 22 (one fewer major skull piece).
```

> **The Fortress:** Morthyl returns to its anchor and stops moving. The fight has come full circle — but the ground the party learned in Root Form is now covered by a creature with AR 22 and every Biomass stack still unpaid.

---

**Ossified Strike — (2 Stamina)**
```
Type:    Melee (STR) — Skull Armor Limbs, Reach 15 ft
Attack:  d20+10
Damage:  4d10+8
Rider:   CON Save DC 18
           Fail → Stunned until end of target's next turn (bone-shard concussive impact)
```
> The reach extends. Siege Form does not need to chase. The arm does.

---

**Marrow Barrage — (2 Stamina, Cooldown 1 Turn)**
```
Type:    Ranged Area (INS) — Skull Armor Vents, Range 40 ft
Area:    Two 10 ft radius impact zones (placed independently within range)
Save:    DEX Save DC 16
Damage:  2d10+4 per zone (fail) / half (success)
Rider:   Fail → Poisoned (1 turn) + Rooted
```
> The skull armor is not just defense. The marrow vents fire. Spread out or both zones land on the same hunter.

---

**Rot Cascade — (5 Stamina, Once per Hunt)**
```
Requires: Skull Mask intact.
Area:    40 ft radius from anchor point
Save:    CON Save DC 18
Damage:  4d10 + (Biomass stacks × 2d6)
Fail  → Full damage + Poisoned (2 turns) + Rooted
Success → Half damage

Example damage:
  0 Biomass: 4d10 avg 22
  3 Biomass: 4d10 + 6d6 avg 43
  6 Biomass: 4d10 + 12d6 avg 64
  9 Biomass: 4d10 + 18d6 avg 85

Counter: Breaking the Skull Mask disables Rot Cascade permanently.
         Each Biomass stack the party denied is direct damage off this number.
```
> The mask opens. Everything Morthyl consumed pays forward in one detonation.

---

### Siege Form Exhaustion (0 STA)

```
Marrow Barrage  — disabled
Rot Cascade     — disabled (STA insufficient regardless of Skull Mask)
Bone Wall       — disabled
Ossified Strike still available.
```

---

## 7) Reactions

**Root Surge — (1 Stamina)**
```
Trigger: A creature leaves Claimed Ground (crosses the 30 ft boundary, any form).
Effect:  Roots erupt beneath them.
         DEX Save DC 16 or Prone.
Limit:   Once per round.
```
> Leaving the domain is not free. The ground remembers where the line is.

---

**Bone Wall — (1 Stamina, Siege Form only)**
```
Trigger: Morthyl is hit by an attack.
Effect:  A bone-shard barrier erupts from the skull armor, absorbing impact.
         Reduce incoming damage by CON mod (8).
Limit:   Once per round.
```
> Siege Form does not just take hits. It answers them with bone.

---

## 8) Passive Traits

**Rootbound Colossus**

Morthyl cannot be pushed, pulled, or knocked Prone by any effect. Forced movement and knockdown conditions do not apply regardless of source.

---

**Claimed Ground**

```
Radius:  30 ft centered on anchor point (Root Form position)
         Shrinks to 10 ft at Root Form Exhaustion.
         Stays anchored when Bear Form activates — does not follow Morthyl.
         Re-expands to full 30 ft on Siege Form transition.

Effects on creatures within Claimed Ground:
  — Movement −10 ft
  — Disengage costs +1 STA
  — Forced movement halved
  — Prone creatures lose 1 STA at end of their turn
```

---

**Blighted Earth**

All terrain within Claimed Ground becomes resource-dead for the duration of the encounter. No gathering, harvesting, or environmental item use within the domain. Consumables brought into the fight function normally.

---

**Fungal Resilience**

At the start of Morthyl's turn, if it is within Claimed Ground (or within 5 ft of the anchor), recover 1 STA. In Root Form this triggers automatically. In Bear Form it triggers only if Morthyl has returned to the anchor. In Siege Form it triggers automatically.

---

**Biomass Anchor** *(Bear Form active)*

Claimed Ground does not follow Morthyl when Bear Form activates. The domain remains at the original Root Form anchor point. Bear Form can Consume dead targets within the anchored Claimed Ground if it passes through, but cannot initiate living-target Consume (Grasping Tendrils unavailable).

---

## 9) Part Breaks & Weaknesses

> **★ marks the Impact Zone** — the only target that builds Hammer Impact. Accuracy tiers: Open (0) | Standard (−2) | Precise (−4)

### Root Form Parts

| Part | Accuracy | Threshold | Break Effect |
|------|----------|-----------|--------------|
| Root Limbs ★ *(Impact Zone)* | Open (0) | 5 hits | Root Slam damage −1d10; Grasping Tendrils reach reduced to 10 ft; break deals 2d8 bonus damage |
| Fungal Core | Standard (−2) | 4 hits | Consume HP recovery halved (2d10+8 → 1d10+4); break deals 2d8 bonus damage |
| Spore Chambers | Precise (−4) | 3 hits | Spore Seeding disabled permanently; break deals 2d6 bonus damage |
| Mycelial Network | Standard (−2) | 4 hits | Subterranean Reposition range halved (60 ft → 30 ft); break deals 2d8 bonus damage |

### Bear Form Parts

| Part | Accuracy | Threshold | Break Effect |
|------|----------|-----------|--------------|
| Bear Skull ★ *(Impact Zone)* | Standard (−2) | 4 hits | Gore Charge disabled; Body Slam radius −5 ft; if broken before Bear Form triggers, transition is weakened (see Bear Form Transition); break deals 2d10 bonus damage |
| Tusk Shafts | Open (0) | 3 hits | Claw Strike damage −1d8; break deals 1d10 bonus damage |
| Rib Cage | Precise (−4) | 3 hits | Body Slam save DC reduced by 2 (DC 17 → 15); break deals 1d8 bonus damage |

### Siege Form Parts

| Part | Accuracy | Threshold | Break Effect |
|------|----------|-----------|--------------|
| Skull Armor | Open (0) | 6 hits | AR 22 → 18 in Siege Form; exposes the Fungal Core (if not already broken); break deals 2d10 bonus damage |
| Skull Mask | Standard (−2) | 4 hits | Rot Cascade disabled permanently; Ossified Strike loses Stun rider; break deals 3d10 bonus damage |
| Marrow Vents | Precise (−4) | 3 hits | Marrow Barrage disabled; break deals 1d10 bonus damage |

---

## 10) Behavior Guide

**Opening — Root Form Priority:**
- Establish Claimed Ground before engaging directly.
- Spore Seeding immediately (area denial before hunters spread).
- Grasping Tendrils on the most mobile hunter — pulling a fast target in early sets up the first Consume.
- Root Slam if hunters cluster.
- Subterranean Reposition if the party flanks and applies consistent damage to one side.

**Root Form Loop:**
- Priority 1: Consume whenever a target is Grasped and drawn into Claimed Ground.
- Priority 2: Keep hunters inside Claimed Ground through Tendrils pulls.
- Priority 3: Root Slam on hunters trying to retreat to the domain edge.
- Forest Seizure when 3+ hunters are inside the domain at once — maximum value.
- Lingering Pulse: Root Surge fires every time a hunter tries to leave. They learn that the exit costs something.

**Root → Bear Form Transition Tell:**
- When threshold approaches, Root Form becomes visibly aggressive — Grasping Tendrils priority increases.
- The turn before transition: bones visibly shift. Hunters who know the sign have one round.

**Bear Form Loop:**
- Opening charge: Gore Charge on the nearest high-priority target immediately.
- Standard rotation: Claw Strike × 2 → Shoulder Check (push weakest toward anchor).
- If hunters flee from the anchor: follow and apply pressure. Do not let them regroup outside the domain.
- If hunters re-enter the anchor zone: Body Slam immediately — they walked back into range.
- Return to anchor for Fungal Resilience STA recovery when not actively chasing.
- If a dead hunter is in the anchored Claimed Ground and Morthyl passes through: Consume.

**Bear Form Priority Targets:**
- Healers and ranged hunters who believe they are safe outside Claimed Ground.
- A hunter who has already been Shoulder Checked toward the anchor — follow up with Gore Charge.

**Bear → Siege Form Transition:**
- Bear Form begins to decelerate. Morthyl turns toward the anchor and moves.
- Can still attack during the transition round — one final Bear Form attack before collapsing.

**Siege Form Loop:**
- Immediate: Rot Cascade if Biomass ≥ 3 and hunters are clustered in range. Do not wait.
- Standard rotation: Ossified Strike on nearest → Marrow Barrage on clustered targets (force spread).
- Bone Wall on every hit that would deal significant damage.
- Priority: Protect the Skull Mask. If hunters are targeting it, use Marrow Barrage to break their positioning.

**Below 15% HP (Siege Form):**
- Ossified Strike fires on every available attack regardless of positioning.
- Marrow Barrage zones overlap — placed to maximize forced movement into Claimed Ground.
- Bone Wall fires on every hit. No conservation.
- Root Surge triggers even when not tactically ideal — pure desperation.

---

## 11) Encounter Packaging

**Recommended Arena:** A rot-choked clearing in the deep forest — the site of some old catastrophe. Bones are scattered but incomplete, as if something has been slowly consuming the dead for years. The forest edge is healthy and dense; the clearing itself is wrong. The floor is too flat, too dark, too quiet. Fungal tendrils are visible beneath the surface soil before the fight even begins. When Morthyl awakens, the ground does not erupt — it *opens*, like something that has been waiting.

**Environmental Synergy:**
- **Collapsed terrain from Subterranean Reposition**: accumulates over the fight, progressively restricting movement options. By Bear Form, the arena has changed shape.
- **Corpse fields**: the GM may seed the arena with 1–2 pre-existing large animal corpses. Morthyl will attempt to Consume these in Round 1 if hunters do not destroy or relocate them first. Introduce the Consume mechanic early.
- **Water source at edge**: a stream or root pool at the arena perimeter. Hunters who reach it can temporarily suppress Poisoned conditions. Creates a tactical destination outside Claimed Ground.
- **Elevated platforms (ruins, stone outcroppings)**: elevation does not protect from Root Slam (area), but does grant advantage on saves vs Grasping Tendrils at GM discretion.

**Mid-Fight Shifts:**
1. **Bear Form erupts** — the fight geometry inverts. Hunters who were kiting at 20 ft are now the closest targets. Gore Charge range means no one is safe at short distance. The party must reassemble their spacing in one round or absorb a charge.
2. **Claimed Ground stays anchored** — mid-Bear Form, the party realizes the domain is still active. If anyone has fallen, the pressure to retrieve them competes with managing the Bear. This is the fight's most complex moment.
3. **Siege Form assembly** — Morthyl returns to anchor and locks down. AR 22, Skull Mask, Rot Cascade waiting. The party has roughly 2 rounds to break the Skull Mask before Rot Cascade fires. If they spent those rounds breaking Skull Armor instead, the Mask survives and fires with full Biomass payoff.

**Scaling Notes:**
- Weak party: Reduce Claimed Ground radius to 20 ft; remove pre-seeded corpses; Biomass force-transition threshold increases to 6 (Bear) and 9 (Siege).
- Strong party: Add a second Subterranean Reposition available in Bear Form; increase Rot Cascade base to 5d10; Bone Wall triggers on every incoming attack (not once per round).

---

## 12) Loot & Crafting

### A) Loot Table

| Drop | Chance | Use |
|------|--------|-----|
| Pall Mycelium | 65% | Rot/poison resistance, stamina regeneration |
| Rotbound Bark | 50% | Armor plating, blighted earth resistance |
| Memory Spores | 40% | Condition riders, Consume-expression effects |
| Skull Fragment *(Bear Form kill bonus)* | 35% | Impact zone enhancement, charge-expression weapons |
| Siege Mask Shard *(Skull Mask broken)* | 30% | Rot Cascade expression, large-area effect crafts |
| Lichen Core *(Rare)* | 20% | Required for Rare Effects and Signature Crafts |

> Skull Fragment only drops if Morthyl reached Bear Form. Siege Mask Shard only drops if the Skull Mask was broken before Rot Cascade fired — breaking it after does not yield the shard.

---

### B) Craft Themes

- Rot and terrain corruption (ground control, movement denial, blight effects)
- Consume expression (sustain from hits, life-drain riders)
- Bone and root resilience (AR enhancement, anti-forced-movement)
- Escalating damage (Biomass-analog: damage that builds over the encounter)

---

### C) Material Interaction Profiles

**Weapon Bias**

| Material | Bias | Expression |
|----------|------|------------|
| Bone / Stone | Escalation | Damage that increases with each hit on the same target (Consume mirroring — builds like Biomass) |
| Root / Hide | Control | Rooted riders, terrain manipulation, forced movement on hit |
| Fungal / Spore | Attrition | Poisoned escalation, STA drain on conditions, sustained rot damage |

**Armor Bias**

| Material | Bias | Expression |
|----------|------|------------|
| Rotbound Bark | Anchor | Reduce forced movement effects; reduce STA cost of resisting grabs and pulls |
| Pall Mycelium | Recovery | Passive STA recovery when stationary (Fungal Resilience echo) |
| Skull Fragment | Resistance | Reduce Stunned duration; CON save bonuses |

---

### D) Effect Tables

**Common Weapon Effects** *(GM chooses 1)*

**Rot Channel**
On hit against a Poisoned target, deal +1d6 bonus rot damage. *(Passive — rewards establishing Poisoned before the heavy hit. Direct expression of Morthyl's condition-chain design.)*

**Root Grasp**
On hit, the target's movement is reduced by 10 ft until end of their next turn. Does not stack. *(Passive — mirrors Claimed Ground. Everywhere this weapon hits becomes slower ground.)*

---

**Rare Weapon Effects** *(Rare part required — GM chooses 1)*

**Consume Edge** *(1 STA)*
On kill, recover HP equal to your CON score. *(Active — mirrors Consume's sustain mechanic. Rewards finishing blows.)*

**Biomass Surge** *(Passive)*
This weapon tracks hits on the same target. On the 3rd consecutive hit: deal +2d10 bonus damage and reset the counter. *(Active — Biomass-analog. Builds toward a payoff exactly as Morthyl does.)*

---

**Common Armor Effects** *(GM chooses 1)*

**Root Brace**
Forced movement effects against you are reduced by 5 ft. You have advantage on saves against Rooted. *(Passive — direct counter to Morthyl's pull-and-hold kit.)*

**Spore Filter**
You have advantage on CON saves against Poisoned. When you succeed on such a save, gain +1 STA. *(Passive — softens Spore Seeding and Marrow Barrage's sustained Poison pressure.)*

---

**Rare Armor Effects** *(Rare part required — GM chooses 1)*

**Blight Walker** *(Passive)*
You are immune to the movement reduction of Claimed Ground and Blighted Earth. Difficult terrain in rot or fungal zones costs you no extra movement. *(Significant — removes Morthyl's most persistent environmental pressure for one hunter. Makes that hunter the ideal anchor-point fighter.)*

---

### E) Signature Crafts *(Plant Beast — multiple allowed; Lichen Core required for each)*

---

**Signature 1 — Rootbound Weapon** *(Any weapon — Lichen Core required)*

**Blight Vein** *(Passive)*: Your attacks with this weapon deal rot damage. On hit, target must make a CON save (DC = weapon DC) or their movement is reduced by 5 ft until end of their next turn (stacks to −10 ft max per target).

**Reclaim** *(2 STA)*: Once per round, when you reduce a target below half HP with this weapon, you recover HP equal to your CON modifier. *(Consume echo — the weapon feeds as Morthyl feeds.)*

> Cannot stack with other Rare weapon effects.

---

**Signature 2 — Skull Mask Armor** *(Heavy Armor — Lichen Core required)*

AR +4.

**Bone Lattice** *(Passive)*: Reduce all incoming physical damage by 2. Forced movement and knockdown effects require double the save failure margin to apply.

**Death's Echo** *(1/Combat)*: When you are reduced to half HP or below, immediately recover 2d10 HP and gain resistance to Poisoned for 2 rounds. *(Siege Form resilience — the wearer survives the threshold the way Morthyl survives its own transitions.)*

> Cannot stack with other Rare armor effects.

---

## 13) Hooks

**The Rot Expansion**
Entire sections of Verdant Hollow have gone sterile. Hunters sent to investigate have not returned, but their camp was found undisturbed — bedrolls laid, fire cold, food still on the plate. No bodies anywhere. Something beneath the soil is feeding on the disappeared.

**The Battlefield That Won't Heal**
A war ended three seasons ago. The valley where the final battle was fought should be overgrown by now. Instead the soil is black and lifeless, and local hunters report feeling a low hum in their chests when they pass near it. The dead number in the thousands. Morthyl has been awake and eating since the last sword fell.

**The Blight March**
Villagers at the forest edge report that the sterile zone is growing. Not slowly — measurably, week by week. The blight is moving toward the settlement. It does not hurry. It does not need to.

**Stagmir's Warning**
The Grovefather — an Elder Beast that has never been successfully hunted — has appeared at the edge of the Old Grove. It does not attack. It does not enter the forest. It simply stands at the treeline and watches the hollow where Morthyl sleeps. The Grovefather has never shown fear before. Hunters are not sure what to call this.
