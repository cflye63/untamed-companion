# RAKDOS SPIDER — The Burrowing Hunger

**Classification:** Arachnid
**Tier:** 2 — Burrow Control / Drag & Anchor
**Biome:** Forest Cluster Burrows, Root Tunnels, Subterranean Forest Edge
**Element:** Poison

**Tagline:** "A subterranean ambush predator that drags prey toward the dark and refuses to let go."

---

## 1) Field Notes

The Rakdos Spider does not hunt — it waits. It spends its days in a network of packed-earth tunnels beneath the forest floor, emerging only after dark when prey grows slower and more predictable. Its body is built for the underground: dense chitinous carapace, eight hooked legs designed to grip and pull, and a jaw structure more suited to clamping and dragging than clean kills. It does not eat where it kills. It brings the kill home.

The giveaway is the burrow mouth — usually surrounded by a scatter of old bones, rotting carcasses, and half-consumed remains. The Rakdos Spider hordes more than it eats, a behavioral quirk that turns its lair into a zone of accumulated filth and decay.

**What Hunters Notice First:**
- Loose soil and disturbed roots in rough circles — surface evidence of tunnels below
- A ring of gnawed bones and dried remains around a packed-earth opening
- The smell before the creature — decay, old blood, something sweet and wrong
- Silence. Surface animals leave before the spider comes up.

**Core Puzzle:**
- Break the drag chain — Claw Hook creates Restrained; Subterranean Pull moves Restrained hunters toward the burrow. Let the chain complete and a hunter is isolated at the burrow mouth, vulnerable and separated from the party.
- Deny the retreat — Burrowing Ambush lets the spider vanish underground and resurface behind the party. Break the Digging Limbs early to lock it to the surface.
- Manage the Cache Zone — the Meat Cache makes the area around the burrow entrance dangerous. Fighting close to it bleeds Stamina via Poisoned pressure from the decay. The party decides: push in and take the zone risk, or fight at range and give up part-break opportunities.

---

## 2) Stat Block

### Attributes

| Stat | Score | Modifier |
|------|-------|----------|
| STR | 8 | +4 |
| DEX | 7 | +3 |
| CON | 7 | +3 |
| INT | 3 | +1 |
| INS | 9 | +4 |
| CHA | 2 | +1 |

### Combat Attributes

| Stat | Value | Notes |
|------|-------|-------|
| AR | 13 | Layered chitin carapace, low-slung frame |
| HP | 137 | 4P median: TierBase (60) + CON (7) × 11 |
| Stamina | 17 | 10 + CON Score (7) |

> **GM Scaling Note:** HP 137 targets a median mixed party (HR 5–9). For an optimized synergized party, increase to **200** (TierBase 60 + CON 7 × 20). The drag loop requires at least 3–4 rounds to fully execute — if HP is too low, the spider dies before the Burrowing Ambush can fire.

| Movement | Value | Notes |
|----------|-------|-------|
| Ground | 35 ft | — |
| Burrow | 20 ft | Through soil and packed earth only |
| Climb | 30 ft | Walls and ceilings via Saddled Grip |
| Attacks/Turn | 3 | — |

**Attack Roll Breakdown:** `d20 + STR mod (+4) + Trained proficiency (+2) = d20+6`

**Exhaustion Rule:**
- Cannot burrow
- Burrowing Ambush disabled
- Subterranean Pull disabled
- Attacks reduced to 2/turn

### Senses

- Tremorsense 30 ft — detects creature movement through ground vibration; functions underground and in darkness; blocked by stone or open water
- Darkvision 60 ft — sees in complete darkness; adapted to subterranean life

---

## 3) Core Mechanic — The Drag Chain

The Rakdos Spider does not want a fair fight. Every action it takes moves toward a single goal: get one hunter to the burrow mouth, alone, and finish them there.

**The Pipeline:**

1. **Claw Hook** applies Hooked (Restrained + dragged 5 ft toward burrow on hit)
2. **Subterranean Pull** uses a Fast Action to drag Hooked targets an additional 10 ft toward the burrow entrance
3. At the burrow mouth (within 5 ft): **Crushing Maw** deals bonus damage and applies Grappled
4. If the party focuses fire to stop this: **Burrowing Ambush** lets the spider escape underground and re-enter from a new angle

**Breaking the chain:**
- Escape the Hook: the Restrained hunter spends their Action or 2 STA (Fast Action) on a STR check DC 16
- Kill the damage: breaking the Foreclaws disables Claw Hook and Subterranean Pull entirely
- Lock it topside: breaking the Digging Limbs removes Burrowing Ambush — the spider cannot retreat underground

> The spider is not trying to kill hunters quickly. It is trying to separate one from the rest.

---

## 4) Attacks

**Fang Strike — (1 Stamina)**
```
Type:    Melee (STR)
Attack:  d20+6
Damage:  2d8+4 piercing/poison
Rider:   CON Save DC 15
           Fail → Poisoned (1 turn)
           Already Poisoned: Fail → Poisoned extends to 2 turns total
```
> The fangs inject. The poison is not fast-acting — it is patient, like the spider.

---

**Claw Hook — (1 Stamina)**
```
Type:    Melee (STR)
Attack:  d20+6
Damage:  2d6+4 slashing
Rider:   STR Save DC 16
           Fail → Hooked: Restrained + dragged 5 ft toward burrow entrance
           Hooked ends when target escapes (Action or 2 STA Fast Action: STR check DC 16)
           or moves 15 ft from burrow entrance (hooks disengage)
```
> The hook is not a wound — it is a leash.

---

**Crushing Maw — (1 Stamina)**
```
Type:    Melee (STR)
Attack:  d20+6
Damage:  2d10+4 piercing
Bonus:   If target is Restrained or Grappled → +1d8 damage + target becomes Grappled by the jaw
         Jaw Grapple: STR check DC 16 (Action) to break; while Grappled, cannot move away from spider
```
> At the burrow mouth, it stops dragging and starts consuming.

---

## 5) Special Abilities

**Burrowing Ambush — (3 Stamina, Cooldown 3 Turns)**
```
Phase 1 (Action): Spider dives underground at its current location.
  — Becomes untargetable by melee and single-target ranged attacks
  — Area attacks that affect the ground (Shockwave, Meteor Strike, terrain AoE) still apply
  — Tremorsense remains active underground

Phase 2 (Movement while underground): Spider moves up to 20 ft through the earth.
  — Cannot be tracked by sight; Tremorsense or Wand INS-based detection can locate it (INS check DC 14)

Phase 3 (Action, start of next turn): Spider erupts at a declared surface point.
  — All creatures within 5 ft of emergence point: DEX Save DC 16
      Fail → 3d8+4 bludgeoning/piercing damage, knocked Prone
      Success → Half damage, no Prone
  — Spider attacks with Advantage on its first attack this turn (eruption ambush)
  — Emergence point creates disturbed terrain (difficult terrain 5 ft radius, lasts until end of encounter)
```
> It does not run. It resets.

---

**Subterranean Pull — (Fast Action, 0 Stamina)**
```
Trigger: A Hooked (Restrained) target is within 30 ft of the burrow entrance.
Effect:  Drag the Hooked target 10 ft toward the burrow entrance.
         This movement does not require an attack roll.
         Target may make a STR save DC 16 to resist (halves drag distance to 5 ft).
Limit:   Once per turn.
```
> The spider doesn't need to close the distance. It closes the distance for you.

---

## 6) Reactions

**Burrow Reflex — (1 Stamina)**
```
Trigger: Rakdos Spider is hit by any attack while within 10 ft of its burrow entrance.
Effect:  Partially retracts into the tunnel mouth — reduce incoming damage by 1d6+3.
Limit:   Once per round. Disabled if Digging Limbs are broken.
```
> It knows its home the way prey knows panic.

---

## 7) Passive Traits

**Meat Cache**

The burrow entrance is surrounded by hoarded kills — bones, rotting carcasses, accumulated decay from months of feeding.

- **15 ft radius around the burrow entrance:** Difficult Terrain (bone scatter, loose remains, soft disturbed earth)
- **Creatures starting their turn in the Cache Zone:** CON Save DC 14
  - Fail → Poisoned (1 turn) from the rot and decay fumes
- **The spider is immune to this effect** — it is adapted to the rot it creates

> The Cache Zone is not a trap. It is the environment the spider built to slow down anything that comes looking for it.

---

**Saddled Grip**

The Rakdos Spider's specialized toe pads — broad, hooked at each joint — give it purchase on any surface.

- Climbs walls and ceilings at full climb speed (30 ft), no check required
- Claw Hook rider: on hit, target also suffers −5 ft movement until the hook is removed (stacks with Restrained condition)
- Immune to difficult terrain created by its own Meat Cache or Burrowing Ambush disturbed earth

---

**Nocturnal Predator**

The Rakdos Spider hunts on the surface only at night. During daytime encounters it has not fully adjusted:
- During daylight: INS checks at disadvantage (glare disrupts its vision)
- Burrowing Ambush cooldown increases by 1 round (CD 4) — the spider is less aggressive about committing to the surface

> Standard encounters occur at night. The spider is in its element. Daytime penalties apply when hunters take the fight to the burrow — or when they delay long enough that dawn arrives.

---

## 8) Part Breaks & Weaknesses

### Break Zones

> **★ marks the Impact Zone** — the only target that builds Hammer Impact. Accuracy tiers: Open (0) — large/diffuse | Standard (−2) — typical structure | Precise (−4) — small/fast/head

| Part | Accuracy | Threshold | Break Effect |
|------|----------|-----------|--------------|
| Chelicerae ★ *(Impact Zone)* | Standard (−2) | 3 BP | Fang Strike loses Poisoned rider; Crushing Maw loses +1d8 bonus and Grapple effect; fang damage reduced to 1d8+4 |
| Foreclaws | Open (0) | 3 hits | Claw Hook disabled entirely; Subterranean Pull disabled; Saddled Grip climb speed reduced to 15 ft |
| Carapace | Open (0) | 4 hits | AR −2 (AR 11); Burrow Reflex disabled |
| Digging Limbs *(Saddled Toes)* | Standard (−2) | 2 BP | Burrowing Ambush disabled; burrow movement 0 (cannot go underground during combat); Saddled Grip disabled |

### Tactical Weaknesses

- **Digging Limbs break priority:** Removes Burrowing Ambush — the spider can no longer escape and reposition. Once locked to the surface, the drag loop is the only tool remaining and the party can manage it.
- **Foreclaw break priority:** Removes Claw Hook and Subterranean Pull entirely. Without the drag chain, the Rakdos Spider becomes a straightforward 3-attack melee predator with venom. The puzzle collapses.
- **Cache Zone denial:** Hunters who maintain distance beyond 15 ft from the burrow entrance avoid the Poisoned pressure entirely. The downside is range — part breaks require called shots at proximity. This is the core positioning tension.
- **Ranged weapons:** Bow Binding Arrow (grounds aerial threats) has no application here — but Steady Aim Preparations remove the called-shot penalty on Chelicerae and Digging Limbs (Standard −2 parts). Against a spider that forces melee range, a Bow hunter maintaining distance and targeting part breaks is extremely valuable.
- **Tremorsense counter:** The spider's Tremorsense detects movement. Standing still (holding a Preparation) does not trigger it. Hunters who take a Guarded Stance Preparation and do not move are effectively invisible to underground tracking during Burrowing Ambush.
- **Burrow Reflex window:** Only active within 10 ft of the burrow entrance. Drag the fight away from the entrance — the spider loses its reaction entirely.

---

## 9) Behavior Guide

**Opening — Round 1 Priority:**
- Surface at the burrow mouth. Immediately Claw Hook the closest or most isolated hunter.
- Use Subterranean Pull (Fast Action) to begin dragging toward the entrance.
- Fang Strike twice: establish Poisoned pressure early to tax CON saves throughout the fight.

**Instinct Loop (Above 50% HP):**
- Priority target: the most isolated hunter, or the one already Hooked
- Loop: Claw Hook → Subterranean Pull (Fast Action) → Fang Strike × 2 (maintain venom)
- If a target reaches the burrow mouth (within 5 ft): switch to Crushing Maw → establish Grapple
- If the Grappled target is not freed by allies: Fang Strike for maximum venom pressure
- Use Burrow Reflex whenever hit near the entrance — protect HP while doing the work

**If Forced Away from Burrow Entrance:**
- Do not chase the party far from the burrow — it loses Burrow Reflex and Meat Cache pressure
- Attempt to Claw Hook the chasing hunter and Pull back toward home ground

**Burrowing Ambush Trigger Conditions:**
- Hit 2+ times in the same round, OR
- HP drops below 60%, OR
- Foreclaw broken and the drag loop is broken (no longer has its primary tool)
- **Emergence priority:** surfaces behind the ranged or least-armored hunter; never re-emerges at the same spot twice

**Below 25% HP:**
- Abandons the drag loop — pure aggression
- Fang Strike × 2 + Crushing Maw on any adjacent target
- No more Burrowing Ambush retreats (too costly)
- Stops pulling toward burrow — fights where it stands

**At 0 Stamina — Exhausted:**
- Cannot burrow or use Burrowing Ambush
- Subterranean Pull disabled
- Attacks reduce to 2/turn: Fang Strike + Crushing Maw
- Still attempts to stay near burrow entrance for Burrow Reflex (if Carapace not broken)

**The Hoard Behavior (Flavor):**
If a hunter is downed within 10 ft of the burrow entrance, the spider will attempt to drag the body into the burrow at the next opportunity. This is instinct, not tactics — it still prioritizes fighting active threats. GMs may use this to create recovery pressure: downed hunters inside the burrow are harder to stabilize.

**Loop:** Hook → Pull → Maw → Ambush Reset

---

## 10) Encounter Packaging

**Recommended Arena:** Dense forest floor at night — root-exposed ground, a visible burrow mouth at the center-edge of the arena (not the center — forcing the party to decide whether to pressure it near its home or give it space). Bone scatter 15 ft around the entrance. One or two large roots or fallen logs that create natural cover and interrupt line of sight. The forest canopy blocks moonlight unevenly — some pockets of near-darkness.

**Environmental Synergy:**
- Forest roots: the spider can use Burrowing Ambush to navigate under root structures, emerging in unexpected positions — behind a log, under a hunter who took cover
- Soft forest floor: disturbed terrain from multiple Burrowing Ambush emergences builds up over the fight, gradually expanding the difficult terrain footprint
- Water source (stream or pool): Poisoned condition is suppressed for 1 turn if a hunter submerges the affected area. Creates a tactical option — reach the water and cleanse, or burn the STA cost through it

**Mid-Fight Shifts:**
1. First successful drag — a hunter reaches the burrow entrance and takes Crushing Maw. The party must decide: break the grapple (costs Action + STR check) or focus fire to kill the spider before it feeds.
2. Burrowing Ambush fires — the spider vanishes. Tremorsense check (INS DC 14) to track it. Failure means it picks its emergence point freely. Success means the party can pre-position for the Prone eruption.
3. Digging Limbs broken — the spider can no longer go underground. Fight transitions from ambush predator to cornered brawler. It becomes more desperate and direct.

**Scaling Notes:**
- Weak party: Remove the Cache Zone CON save (just difficult terrain), reduce Burrowing Ambush cooldown penalty to CD 2
- Strong party: Add a second burrow entrance 30 ft from the first — the spider can enter one and exit the other, expanding the ambush threat radius

---

## 11) Loot & Crafting

### A) Loot Table

| Drop | Chance | Use |
|------|--------|-----|
| Rakdos Chitin | 65% | Armor layering, poison resistance components |
| Hook Claw Shard | 50% | Weapon drag/restrain riders |
| Chelicerae Fang | 40% | Weapon venom riders, piercing escalation |
| Burrowing Gland *(Rare)* | 20% | Required for Rare Effects & Signature Crafts |

> Drop rates follow T2 rare part scarcity. Burrowing Gland at 20% — if your table consistently breaks Digging Limbs, consider reducing to 15%.

---

### B) Craft Themes

- Venom pressure and Poisoned condition escalation
- Drag, anchor, and repositioning (Restrained/Grappled riders)
- Ambush and underground strike (burst from concealment, first-hit bonus)
- Terrain denial and difficult ground creation

> If an effect does not relate to these four themes — it does not belong here.

---

### C) Material Interaction Profiles

**Weapon Bias**

| Material | Bias | Expression |
|----------|------|------------|
| Metal | Control / Anchor | Restrained riders, drag-resistance tools, anti-repositioning locks |
| Bone / Hide | Aggression / Venom | Poison escalation, Grapple damage, pursuit-after-hook bonuses |
| Stone / Crystal | Burst / Ambush | First-hit bonus damage, concealment interaction, eruption-style burst riders |

**Armor Bias**

| Material | Bias | Expression |
|----------|------|------------|
| Metal | Stability | Restrained mitigation, drag resistance, anti-Grapple passives |
| Hide / Bone | Mobility | Difficult terrain navigation, Poisoned resistance, recovery from prone |
| Cloth / Membrane | Stamina / Evasion | STA cost reduction for escape checks, Cache Zone resistance, low-profile bonuses |

> No material modifies base AR beyond weight class.

---

### D) Effect Tables

**Common Weapon Effects** *(GM chooses 1)*

**Venom Edge**
On hit, if the target fails their next CON save this turn, they become Poisoned (1 turn). *(Passive — pairs with Fang Strike's Poisoned rider; rewards back-to-back hit pressure.)*

**Hook Pull**
On hit, target must succeed a STR save (DC = weapon DC) or be dragged 5 ft toward you. *(Passive — mirrors the Rakdos Spider's own drag identity. Works once per turn.)*

---

**Rare Weapon Effects** *(Rare part required — GM chooses 1)*

**Ambush Burst** *(1/Combat)*
On hit against a target that has not yet acted this round (or is Surprised), deal +2d6 bonus damage and they must make a STR save (DC = weapon DC) or become Restrained until end of their next turn. *(Burst — rewards initiative positioning and first-strike discipline.)*

**Toxin Lock** *(1 STA)*
On hit, the target's Poisoned condition cannot be cleansed or reduced until the end of your next turn. *(Active — makes the venom sticky. Ideal for Fang Strike follow-up builds.)*

---

**Common Armor Effects** *(GM chooses 1)*

**Chitin Brace**
Reduce all damage from Grapple-state attacks (attacks made while you are Grappled or Restrained) by 2. *(Passive — direct counter to the Crushing Maw bonus damage.)*

**Root Stance**
When a forced movement effect would drag or push you, reduce the distance by 5 ft. *(Passive — counters Claw Hook drag and Subterranean Pull displacement.)*

---

**Rare Armor Effects** *(Rare part required — GM chooses 1)*

**Venom Shell** *(1/Combat)*
When you take poison damage or fail a save against Poisoned, immediately reduce your next incoming attack's damage by 1d8 (the poison hardens in your system, briefly fortifying). *(Counter-aggression — rewards enduring the venom rather than spending actions to cleanse.)*

---

### E) Weapon Archetype Translation (Poison)

| Weapon | Translation |
|--------|-------------|
| Bow | **Rakdos Fangbow** — Arrow tips coated with chelicerae venom. Common: **Venom Arrow** (2/hunt): On hit, CON save vs Bow DC → fail → Poisoned (1 turn). If target already Poisoned: +1d6 bonus poison damage instead. Rare Ambush Burst → **Ambush Arrow** (2/hunt): On hit against a target at Focused aim (Power Shot release), +2d6 and STR save or Restrained until end of next turn. |
| Wand | **Venom Cluster Wand** — Grants Poison damage type. Hex: **Toxin Hex** — clusters seep venom on contact. On detonate: CON save vs Wand DC → fail → Poisoned (1 turn). While Poisoned, Scorch tick (if active) deals +1 damage per turn. |
| Conduit | **Burrow-Pulse Conduit** — Grants Poison Aspect: **Decay Field**. Enemies starting their turn inside the Field make a CON save vs Conduit DC or take 1d4 poison damage. If already Poisoned: save or Poisoned extends by 1 turn. |
| Flute | **Ballad: "The Hungry Dark"** — While active, once per round when an ally hits a Poisoned target, that ally regains 1 Stamina (the venom energizes cooperative strikes). Standard Ballad activation and sustain rules. |

---

### F) Signature Crafts *(Arachnid — multiple allowed; Rare part required for each)*

---

**Signature 1 — Chelicerae Lance** *(Spear & Shield variant — Burrowing Gland required)*

**Venomous Thrust:** Your attacks with this weapon deal poison damage. On hit, the target must succeed a CON save (DC = weapon DC) or become Poisoned (1 turn).

**Anchoring Hook** (Passive): On a successful Block followed by Counter-Thrust, the counter-attack applies the Claw Hook rider — target STR save DC = weapon DC or dragged 5 ft toward you and Restrained until end of their next turn.

> Cannot stack with other Rare weapon effects. Mirrors the drake's sequential hook-then-bite escalation, translated into a hunter's reactive toolkit.

---

**Signature 2 — Rakdos Hide Armor** *(Medium Armor — Burrowing Gland required)*

AR +3.

**Decay Tolerance** (Passive): You are immune to the Cache Zone CON save (Poisoned from decay). You also have advantage on CON saves against Poisoned from any source.

**Burrow Sense** (Passive): You always know the direction of underground movement within 20 ft, as if you had Tremorsense. You cannot be Surprised by Burrowing Ambush emergences.

> Cannot stack with other Rare armor effects. Wearing the creature's skin teaches the body its secrets.

---

## 12) Hooks

**The Vanishing Trail**
Hunters following tracks through the forest find that the trail simply stops — no blood, no signs of a struggle, just a hole in the ground where the prey ended up. Something is taking large animals whole. The local trappers say it started three months ago and it's getting bolder.

**The Bone Garden**
A forest road runs through a clearing that travellers have started avoiding — too many bones, they say, and a smell that turns the stomach. A merchant caravan camped there last week and one guard didn't make it to morning. The spider has claimed the crossroads.

**The Night Hunt**
A village on the forest edge is losing livestock. The attacks happen between midnight and dawn — always near the tree line, always from below. They've found the burrow but no one will go near it. They need hunters who will.

**The Deep One**
A Rakdos Spider that has been feeding in the same territory for years has grown unusually large. Its burrow network extends under half an acre of forest floor. Multiple entrances, multiple Cache Zones, and a creature that has had years to learn how hunters behave. This one knows to wait for the party to split.
