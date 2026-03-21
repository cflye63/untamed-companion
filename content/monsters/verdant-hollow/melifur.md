# MELIFUR — The Hive Sovereign

**Classification:** Drake-Insect Hybrid
**Tier:** 2 *(T2.5 — stats exceed standard T2 envelope by design; see GM Scaling Note)*
**Biome:** Forest Cluster, Verdant Hollow (Pollination Zones)
**Element:** Poison

**Tagline:** "Aerial sovereign of the pollinator network that manifests when hive balance is violated."

**Appears when:**
- Honey overharvesting occurs
- Multiple hives are destroyed
- Pollination routes collapse

Most active daylight through dusk when pollinators are active.

---

## 1) Field Notes

Melifur is not simply a predator. It is the living warden of the forest's pollinator network, appearing only when the delicate balance between hive, flower, and hunter is broken. Massive translucent wings scatter sunlight like stained glass while its resin-armored body carries the scent of honey and venom. The buzzing thunder of Melifur's wings signals a judgment hunt. Those who harvest responsibly never see it. Those who do not rarely survive.

**What Hunters Notice First:**
- Sudden silence among bees and insects
- Honey dripping from shattered combs
- A deep thunderous buzzing approaching from the canopy

**Core Puzzle:**
- Aerial dominance, swarm battlefield control, resin terrain traps, grounding the sovereign
- Ground Melifur → encounter becomes manageable. Fail to ground it → fight the swarm on its terms.

---

## 2) Stat Block

### Attributes

| Stat | Score | Modifier |
|------|-------|----------|
| STR | 6 | +3 |
| DEX | 9 | +4 |
| CON | 8 | +4 |
| INT | 3 | +1 |
| INS | 8 | +4 |
| CHA | 6 | +3 |

> **GM Scaling Note:** DEX 9, CON 8, and INS 8 exceed the standard T2 stat cap of 7. This is intentional — Melifur is designed as a late T2 / early T3 encounter for parties pushing into harder content. For a standard T2 party, consider reducing DEX, CON, and INS each to 7, which brings attack rolls to d20+5, DCs to DC 15, and HP to 137.

### Combat Attributes

| Stat | Value | Notes |
|------|-------|-------|
| AR | 13 | Resin-hardened chitin |
| HP | 148 | 4P median: TierBase (60) + CON (8) × 11 |
| Stamina | 18 | 10 + CON Score (8) |

> **GM Scaling Note:** For optimized parties: HP → **220**, Stamina → **22** (both raised together). Melifur's aerial loop needs 2 full Resin Bomb cycles to express its full pressure kit (Rush reset + Mandible Bite rider activation). At STA 18, Melifur Exhausts before cycling a second bomb. At STA 22, it fires two bombs before Exhaustion — real but survivable Rush tax (~18% Claws DPR). At STA 24, it kills melee hunters. If the party has strong ranged DPR, a Bow with Binding Arrow, or a Dragonian Wand (whose Burned drain accelerates Exhaustion by ~1 round), start at HP 220 / STA 22.

| Movement | 40 ft ground | 80 ft fly |
|----------|-------------|-----------|
| Attacks/Turn | 3 | — |

**Attack Roll Breakdown:** `d20 + DEX mod (+4) + Trained proficiency (+2) = d20+6` (DEX attacks) / `d20 + STR mod (+3) + Trained proficiency (+2) = d20+5` (STR attacks)

**Exhaustion Rule:**
- Immediately lands (Prone if airborne)
- Cannot use Swarm Call
- Fly speed becomes 0

### Senses

- Standard vision; detects vibration and wing-frequency signatures up to 60 ft
- Cannot be Surprised in bright daylight — it monitors the full canopy layer constantly

---

## 3) Attacks

**Drake Sting — (1 Stamina)**
```
Type:    Melee (DEX)
Attack:  d20+6
Damage:  2d8+4
Rider:   On hit: CON Save DC 16 → Fail: Poisoned (1 turn)
         Success: No rider
```

> The setup attack. Poisoned hunters are primed for the Mandible Bite rider — and Poisoned targets lose their edge on CON saves, feeding Melifur's control loop.

---

**Mandible Bite — (1 Stamina)**
```
Type:    Melee (STR)
Attack:  d20+5
Damage:  2d6+3
Rider:   +1d6 damage if target is Poisoned or Restrained
```

> The punish. Drake Sting into Mandible Bite is the core ground-phase chain. Hunters who break out of Poison or Resin early escape the rider — rewarding the player who pops a remedy or makes their STR save.

---

**Wing Gust — (1 Stamina)**
```
Type:    AOE (DEX)
Area:    20 ft cone
Damage:  1d8+4
Save:    DEX Save DC 16
Fail:    Pushed 10 ft + Staggered
Success: No effect
```

> Repositioning tool. Pushes hunters into resin zones or out of flanking positions. Stagger buys Melifur a free action window.

---

## 4) Special Abilities

**Royal Resin Bomb — (2 Stamina, Cooldown 2 rounds)**

```
Type:    Ranged (DEX)
Attack:  d20+6
Damage:  2d10+4
Area:    Creates 10 ft resin pool on impact (lasts 2 rounds)
Pool:    Creatures inside make STR Save DC 16 → Fail: Restrained until end of their next turn
```

> Area control. Restrained hunters activate the Mandible Bite rider immediately. The pool persists — hunters must either move through it (and make the save) or work around it. Combine with Wing Gust to push hunters into the zone.

---

**Swarm Call — (3 Stamina, Cooldown 2 rounds)**

```
Type:    Aura
Area:    30 ft radius centered on Melifur
Effect:  While active:
         • Hunters make a CON save DC 14 at the end of each of their turns inside the aura — Fail: 1d6 Poison damage; Success: no damage
         • Ranged attacks vs Melifur have Disadvantage
Ends:    Immediately if Melifur lands
```

> Formation pressure. Forces hunters to spread — but spread hunters are easier to isolate for elevation dives. The Disadvantage layer protects Melifur from ranged shutdown while airborne. Grounding it ends the effect instantly. The CON save on the tick gives prepared parties a meaningful resistance window — hunters with high CON or Hive Warding armor reduce the aura's tax significantly.

---

## 5) Reactions

**Buzzing Dodge — (2 Stamina, Cooldown 1 round)**
```
Trigger:  Targeted by a ranged attack (second ranged attack onward — see Note)
Effect:   Make a DEX contest against the attack roll
          Success: Ascend 30 ft along any flight path — attack misses
          Fail: Attack resolves normally
Limit:    1 reaction per round
Note:     First ranged attack of the combat: Melifur does not react. It has not yet
          assessed the party's range threat. Buzzing Dodge engages from the second
          ranged attack onward.
```

> Aerial control maintained. Buzzing Dodge is not a guaranteed evade — it's a contest. Hunters with high attack bonuses or advantage can beat it. Wings break disables it entirely, removing Melifur's escape valve. The first-attack exception matters: a Bow hunter who opens with Binding Arrow gets one clean uncontested attempt — raising grounding probability from 30% (contested) to 49% (flat hit × STR save).

---

## 6) Passive Traits

**Honey Sovereignty**

While airborne:
- Cannot be Grappled
- Advantage on DEX saves
- Swarm Call effects remain active

**Hive Instinct**

If a hunter destroys a hive during the encounter:
- Melifur gains +1 damage on all attacks (stacks once per destroyed hive, maximum +3)
- +5 ft fly speed per destroyed hive

> Environmental escalation. Hunters who smash hives to remove environmental hazards feed Melifur's rage. The party must weigh the tactical value of clearing hazards against empowering the creature.

---

## 7) Part Breaks & Weaknesses

### Break Zones

| Part | Threshold | Break Effect |
|------|-----------|--------------|
| Wings | 2 called-shot hits (−2 accuracy) | Fly speed reduced to 20 ft permanently. Buzzing Dodge disabled. Honey Sovereignty's Advantage on DEX saves and Grapple immunity are lost. |
| Sting | 2 called-shot hits (−2 accuracy) | Drake Sting loses its Poison rider entirely — the venom gland is ruptured. Mandible Bite's +1d6 rider can no longer be activated via Poison (only via Restrained). |
| Resin Gland | 3 hits targeting the abdomen (−2 accuracy) | Royal Resin Bomb loses its Restrained rider. The resin pool still forms and persists as difficult terrain, but no longer locks targets in place. |

### Tactical Weaknesses

- **Grounding removes aerial identity:** Once landed, Swarm Call ends, Honey Sovereignty deactivates, and Buzzing Dodge cannot trigger. Melifur becomes a melee fighter without its tools. Nets, binding attacks, or Wing break all contribute to forced landing.
- **Ranged pressure forces Buzzing Dodge STA drain:** Each use costs 2 STA. A Bow or Wand who fires consistently drains Melifur's reserve — the Dodge is 3 uses before it hits the conservative threshold.
- **Fire smoke disrupts swarm control:** A torch or smoke source applied to the Swarm Call zone causes the swarm to disperse — the aura radius shrinks to 10 ft for 1 round per smoke source. This does not end Swarm Call but blunts its area.
- **Wing break collapses the encounter:** All three aerial mechanics (speed, Buzzing Dodge, Honey Sovereignty) hinge on healthy wings. A party that focuses wing breaks early will face a completely different fight.
- **Resin pool is double-edged:** Hunters who can bypass difficult terrain (Trolian Flowstep, mobility techniques) can use the resin zones as forced chokepoints, herding Melifur toward terrain it created.
- **Drake Sting dives expose the wings:** When Melifur descends within 20 ft to make a melee Drake Sting attack, melee hunters adjacent to the target may make one called shot vs Wings as a Reaction (no damage, 1 break progress, −2 accuracy). With the 2-hit wing break threshold, two successful dive reactions collapse the aerial phase entirely — Melifur must weigh dive frequency against wing break accumulation.

---

## 8) Behavior Guide

**Opening State:** Airborne 30–60 ft above party. Does not descend until hunters enter the clearing. Emits a rising buzz before acting — GM warning sound.

**Round 1 Priority:**
- If 2+ hunters cluster within 30 ft: Swarm Call (formation pressure, aura active)
- Else: Royal Resin Bomb (zone control, opens terrain)

**Instinct Loop (Above 25% HP):**
- Airborne: Swarm Call (if off CD and hunters clustered) → Royal Resin Bomb (zone setup) → Drake Sting + Mandible Bite dives from elevation → Buzzing Dodge on incoming ranged
- If a hunter is Poisoned and Restrained: prioritize Mandible Bite on them (double rider active)
- Wing Gust to push non-Restrained hunters into resin zones
- If Grounded (forced): Abandon aerial loop. Mandible Bite priority. Drake Sting to Poison, then Crush. Aggressive melee chain.

**At 25% HP — Desperation:**
- Attempt to flee toward canopy or forest edge
- If escape is blocked: full aggression, no stamina conservation
- Swarm Call every available cooldown regardless of STA cost
- Accepts Buzzing Dodge failure — does not retreat when missed

**At 0 Stamina — Exhausted:**
- Falls Prone (if airborne)
- Swarm Call disabled
- Drake Sting and Mandible Bite at half effectiveness
- Attempts to flee toward hive network

**Loop:** Fly → Swarm → Control → Punish → Reposition

---

## 9) Encounter Packaging

**Recommended Arena:** Open forest clearing with hanging hives at 20–40 ft canopy height, uneven floor terrain (root clusters, fallen logs), and 3–4 hive structures that can be destroyed as environmental interactions.

**Environmental Synergy:**
- Hanging hives: destroying one triggers Hive Instinct (+1 damage, +5 ft fly). Players must weigh clearing hazards vs empowering Melifur
- Bee swarms: ambient — hunters who move through hive proximity without protection take 1 Poison damage (cosmetic hazard, not Melifur's ability)
- Sticky terrain zones: Royal Resin Bomb pools persist 2 rounds and accumulate — by mid-fight the floor may have 2–3 overlapping zones
- Honey Bait Trap: craftable pre-hunt (Royal Resin Core) or found as a single cache in the arena. Deploy as a Fast Action anywhere in the clearing. Melifur treats it as a priority territorial threat — on its next turn it lands to destroy the bait (guaranteed 1 ground round, no save). Single use per encounter. Gives parties without a Bow a composition-agnostic grounding path; gives Bow hunters the option to spend the bait instead of a Binding Arrow charge on the contested first grounding attempt.

**Mid-Fight Shifts:**
1. Hive collapse (destroyed by Echo Pulse splash, Wing Gust misfire, or hunter action) — swarm disperses across the clearing, expanding Swarm Call's aura by 10 ft for 1 round. Hive Instinct triggers.
2. Wings broken — Melifur drops to 20 ft fly speed, loses Buzzing Dodge. Fight character shifts from aerial control to desperate ground melee. Party morale moment — the creature is visibly impaired.

**Scaling Notes:**
- Weak party: Reduce Resin Bomb damage to 2d8+4. Remove Restrained rider — slow instead.
- Strong party: Add a second Melifur at the canopy edge that descends at Round 3 if the primary Melifur is below 50% HP (mate defense behavior).

---

## 10) Loot & Crafting

### A) Loot Table

| Drop | Chance | Use |
|------|--------|-----|
| Melifur Wing Veil | 60% | Gliding cloaks, aerial gear, light armor reinforcement |
| Paralyzing Sting | 50% | Poison weapon components, venom applicators |
| Royal Resin Core | 40% | Sticky bombs, terrain traps, adhesive tools |
| Hive Sovereign Gland *(Rare)* | 25% | Required for Rare Effects & Signature Crafts |

---

### B) Craft Themes

- Poison pressure and status chaining
- Swarm field control and area denial
- Resin terrain manipulation and movement denial
- Aerial momentum and repositioning rewards

> If an effect does not reinforce swarm control, poison pressure, or terrain manipulation — it does not belong here. No permanent flight granted. No stat bonuses.

---

### C) Material Interaction Profiles

**Weapon Bias**

| Material | Bias | Expression |
|----------|------|------------|
| Metal | Control / Anti-air stability | Movement denial, grounding tools, anti-flight interruption |
| Bone / Hide | Aggression / Poison | Poison damage riders, Poisoned-target bonuses, pursuit triggers |
| Crystal / Resin | Swarm bursts / Sticky zones | Resin terrain hazards, swarm burst on impact, area denial |

**Armor Bias**

| Material | Bias | Expression |
|----------|------|------------|
| Metal | Stability | Forced movement resistance, STR save bonuses vs Restrained, brace triggers |
| Hide / Bone | Mobility | Resin terrain bypass, recovery speed after Prone, repositioning after push |
| Cloth / Membrane | Aerial / Positioning | Glide assists, fall damage reduction, aura range extension |

> No material modifies base AR beyond weight class.

---

### D) Effect Tables

**Common Weapon Effects** *(GM chooses 1)*

**Venom Strike**
On hit, deal +1d4 Poison damage if the target is currently Poisoned. (Once per turn.)

**Hive Mark**
On hit, the target takes +1 damage from swarm effects (Swarm Call aura ticks, Swarm Arrow detonations) until the end of its next turn. (Once per turn.)

---

**Rare Weapon Effects** *(Rare part required — GM chooses 1)*

**Resin Spear** *(2 Stamina, 1/Combat)*
On hit, create a 5 ft resin patch directly under the target. The target and any creature that enters the patch must make a STR save vs weapon DC or be Slowed (−10 ft movement) until the end of their next turn.

**Hive Sovereign** *(1/Combat)*
On hit, summon a 10 ft swarm zone centered on the target for 1 turn. Creatures that end their turn in the zone take 1d6 Poison damage.

---

**Weapon Archetype Translation (Melifur — Poison)**

| Weapon | Translation |
|--------|------------|
| Bow | **Melifur Bow** — No affinity (Poison is not an elemental type for Bow). Common effects apply as arrow riders. Rare Resin Spear → **Glue Arrow** (2/hunt): On hit, target makes STR save vs Bow DC or is Restrained by resin until the end of target's next turn. Rare Hive Sovereign → **Swarm Arrow** (2/hunt): On hit, a 10 ft swarm zone erupts around the target for 1 turn — creatures that end their turn in the zone take 1d6 Poison damage. |
| Wand | **Hivevenom Wand** — Grants Poison damage type. Hex becomes **Poison — Wither**: While hexed, target has disadvantage on CON saves. On detonate: CON save vs Wand DC → fail: Poisoned (ongoing; CON save at the start of each of the target's turns to end). |
| Conduit | **Hive Conduit** — Grants Poison Aspect access. Aspect: **Hive Zone** — Inside the field, enemies treat movement as difficult terrain. Enemies that end their turn inside the zone take 1 Poison damage. |
| Flute | **Hivesong Flute** — Poison affinity. Common effects are passive riders on existing Ballads. Rare Hive Sovereign → Ballad **"Swarm Chorus"** (1/Combat): While active, enemies within the aura that move more than 10 ft take 1 Poison damage. Rare Resin Spear → Ballad **"Resin Refrain"** (1/Combat): While active, the first enemy hit each round within the aura must make a STR save vs Flute DC or be Slowed (−10 ft movement) until the end of its next turn. |

---

**Common Armor Effects** *(GM chooses 1)*

**Hive Warding**
You take 1 less damage from Poison sources (minimum 0). Passive.

**Resin Footing**
You ignore difficult terrain created by resin, honey, or sticky substance effects. Passive.

---

**Rare Armor Effects** *(Rare part required — GM chooses 1)*

**Honey Shell** *(1/Combat)*
When you are Poisoned, you may immediately end the condition and gain +1 Stamina.

**Swarm Veil** *(1/Combat)*
When a ranged attack targets you, you may use your Reaction to impose disadvantage on that attack roll as swarm-memory in your armor disrupts the projectile's path.

---

### E) Signature Crafts

*Melifur offers three Signature options. Each requires the Hive Sovereign Gland (Rare). They cannot be combined with each other or with other Rare effects.*

---

**Signature 1 — Sovereign's Fang** *(Spear & Shield)*

Replaces Spear & Shield template. Uses STR for attack and damage.

**Royal Pressure**
On hit: CON save vs weapon DC → fail: Slowed (−10 ft movement, 1 turn).
If the target is already Slowed or Poisoned: STR save vs weapon DC → fail: Restrained (Resin) until end of target's next turn.

**Resin Block**
When you Block, create a 5 ft resin slick in the space directly in front of you. It lasts 1 turn. Creatures that enter the slick must make a STR save vs weapon DC or be Slowed.

Cannot stack with Rare Weapon effects.

---

**Signature 2 — Sovereign Mantle** *(Light Armor)*

Replaces Light Armor template. AR +3.

**Glider Cape**
Safe fall up to 20 ft (no damage on landing from height ≤ 20 ft). Passive.

**Waxguard Flow**
After a Dash or Jump, gain +1 Stamina. (Once per turn.)

**Aerial Evade** *(1/Combat)*
While airborne or jumping, automatically evade one ranged attack — it misses without a roll.

Cannot stack with Rare Armor effects.

---

**Signature 3 — Hive Conduit** *(Special Conduit)*

Replaces standard Conduit template.

Unlocks Hive Aspect (see archetype translation above).

**Sovereign Swarm** *(1/Combat)*
Create a 10 ft swarm field at a point within 30 ft. The field lasts 2 rounds. Enemies that end their turn inside take 1 Poison damage and must make a DEX save vs weapon DC or be Slowed until the end of their next turn.

Cannot stack with Rare Weapon effects.

---

## 11) Hooks

**The Broken Apiary**
Hunters who overharvested honey from the lower Verdant Hollow groves have triggered three Melifur sightings in a week. The guild is calling it a catastrophic misread of harvest limits. Someone needs to either drive the creature off — or survive long enough to study what actually woke it.

**The Silent Pollination**
Entire orchards in the upper forest cluster have stopped bearing fruit. The hive guardian has vanished from its territory — but no one has found a corpse. Something drove Melifur out. Whatever it is, it's still out there, and the pollinators aren't coming back until it's gone.

**The Hive War**
Two Melifur have appeared in the same forest cluster, pushed together by a deeper predator's incursion from the lower hollow. Their overlapping territorial pulses are interfering — neither will enter the contested zone between them. Something dangerous lives in that gap, and no hunter has looked yet.

**Honey Smugglers**
Black-market honey traders operating through a network of false guild contracts have been triggering Melifur attacks across multiple regions — deliberately. Someone has learned that a Melifur sighting clears a route of competing hunters. Someone is weaponizing the hive, and the guild has no idea it's coordinated.
