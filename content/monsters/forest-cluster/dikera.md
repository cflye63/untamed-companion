# DIKERA — Twin-Tusk Thunder

**Classification:** Primal Beast
**Tier:** 3
**Biome Zones:** Forest Clearing, Forest Valley, River Basin (migration routes)
**Element:** Sonic

**Tagline:** "A thunder-voiced herd guardian that turns migration routes into unstoppable living stampedes."

**Appears when:**

- Migration season is active
- Herd territory is threatened
- Hunters or poachers disturb migration lanes

Most aggressive during herd migration season.

---

## 1) Field Notes

Dikeras are colossal migration beasts resembling heavily armored elephants with twin pairs of tusks.
Their upper tusks curve forward for goring and charging, while the lower hooked tusks rip roots from the ground and reshape terrain.
But their true weapon is their voice.
By unhinging its jaw vertically, a Dikera transforms its skull into a resonant chamber capable of producing a devastating trumpet blast that echoes across entire valleys.
When the herd is threatened, the Patriarch becomes the storm at its center.

**What Hunters Notice First:**

- Tremors in the soil before the herd appears
- Trees stripped or splintered along migration lanes
- A deep humming resonance in the Patriarch's chest

**Core Puzzle:**

- Separate the Patriarch from the herd
- Deny straight-line charge lanes
- Break tusks to reduce terrain control

---

## 2) Stat Block

### Attributes

| Stat | Score | Modifier |
| ---- | ----- | -------- |
| STR  | 11    | +5       |
| DEX  | 2     | +1       |
| CON  | 11    | +5       |
| INT  | 3     | +1       |
| INS  | 8     | +4       |
| CHA  | 8     | +4       |

> **Audit Note:** STR corrected from 13 to 11, CON corrected from 13 to 11, matching the T3 stat cap (6–11). All derived values cascade from corrected scores.

### Combat Attributes

| Stat    | Value | Notes                                     |
| ------- | ----- | ----------------------------------------- |
| AR      | 16    | Armored hide, natural tusk plating        |
| HP      | 241   | Median 4P: TierBase (120) + CON (11) × 11 |
| Stamina | 21    | 10 + CON Score (11)                       |

> **GM Scaling Note:** HP 241 targets a median mixed party (HR 10–12). For an optimized synergized party, increase to 340 (TierBase 120 + CON 11 × 20). The Stampede loop — Surge → Rend → Gore → Trumpet — needs at least 4 rounds to fully execute its puzzle.

| Movement     | Value | Notes |
| ------------ | ----- | ----- |
| Ground       | 35 ft | —     |
| Attacks/Turn | 3     | —     |

**Attack Roll Breakdown:** `d20 + STR mod (+5) + Trained proficiency (+2) = d20+7`

**Exhaustion Rule:**

- Cannot use Stampede Surge
- Thunder Trumpet damage halved
- Movement –10 ft
- AR –2

### Senses

- Tremor Sense — 20 ft through ground (detects movement and footfalls on the ground; does not work against airborne or climbing targets)

---

## 3) Herd Members

The Patriarch does not fight alone. 2–4 herd members are present at the start of the encounter, milling at the clearing edges and reacting to the Patriarch's aggression.

**Herd Member — Compact Stat Block**

```
AR:       13
HP:       60
Move:     30 ft
Attacks:  None (they do not act on their own initiative)

Stampede Reaction:
  When the Patriarch uses Stampede Surge, all herd members
  within 60 ft surge in the same direction as a free reaction.
  Any hunter in their path: DEX Save DC 14
    Fail → 1d8 bludgeoning damage + Prone
```

Herd members can be targeted and attacked normally. Reducing one to 0 HP removes it from the encounter. Each removed member reduces the Patriarch's Herd Cohesion count.

> Herd members do not have their own turn. They exist as environmental pressure that punishes hunters who ignore the sides of the arena. Their only independent moment is the Stampede Reaction — which can turn a single Surge into a multi-direction wall of flesh.

---

## 4) Attacks

**Twin-Tusk Gore — (1 Stamina)**

```
Type:    Melee (STR)
Attack:  d20+7
Damage:  3d10+5
Rider:   CON Save DC 16
           Fail → Bleeding + Pushed 10 ft
Charge:  If Dikera moved 20 ft straight this turn → +1d10 damage
```

**Crushing Maw — (1 Stamina)**

```
Condition: Target must be Prone or Restrained
Type:    Melee (STR)
Attack:  d20+7
Damage:  3d12+5
Rider:   Target becomes Staggered
```

---

## 5) Special Abilities

**Thunder Trumpet — (2 Stamina, Cooldown 2 Turns)**

```
Area:    30 ft cone
Damage:  3d10 Sonic
Save:    CON DC 17
Fail →   Prone + Dazed
Success → Half damage, no conditions
```

> The jaw unhinges. The skull becomes a bell. Every hunter in the cone stops thinking clearly for a moment — and in a fight with a charging elephant, a moment is everything.

---

**Stampede Surge — (4 Stamina, Cooldown 3 Turns)**

```
Effect:  Dikera moves its full movement in a straight line.
         Herd members within 60 ft trigger Stampede Reaction (see Section 3).
Save:    DEX DC 18
Damage:  3d10+5
Fail →   Prone + Pushed 15 ft
Terrain: If target collides with terrain or obstacle → +1d10 damage
```

> When Herd Cohesion is active, add +1d10 to Stampede Surge damage (see Passive Traits).

---

**Root-Rend — (2 Stamina, Cooldown 2 Turns)**

```
Area:    15 ft line attack (lower tusks raking the ground)
Damage:  3d10+5
Effect:  Creates a 15 ft strip of Difficult Terrain
         If ground is soft → becomes Mud Terrain instead
```

> The lower tusks are not weapons. They are tools. Everything they touch becomes an obstacle for the hunters to navigate while the Patriarch circles back.

---

## 6) Reactions

**Groundshock Counter — (1 Stamina)**

```
Trigger: Dikera is hit by a melee attack.
Effect:  Creatures within 5 ft of Dikera make a DEX Save DC 17.
           Fail → Prone
Limit:   1/Round.
```

> The impact of a strike against something this massive sends tremors into the ground. Hunters who stay close risk being knocked down by the shockwave.

---

## 7) Passive Traits

**Herd Cohesion**

While 2 or more herd members are within 30 ft of the Patriarch:

- +1 AR (total AR 17)
- Stampede Surge damage +1d10

> This passive disappears as herd members are slain or driven off. Removing the herd is not optional — it is a tactical prerequisite for contesting the Patriarch's defenses.

---

**Patriarch Fury**

When all herd members are slain, the Patriarch enters a focused rage:

- +1 damage die on all melee attacks (Gore becomes 4d10+5; Maw becomes 4d12+5)
- Advantage on the next attack roll each round

> Isolating the Patriarch gives you better mechanics — and a more dangerous animal. It knows what you did.

---

## 8) Part Breaks & Weaknesses

### Break Zones

> **★ marks the Impact Zone** — the only target that builds Hammer Impact. Accuracy tiers: Open (0) — large/diffuse | Standard (−2) — typical structure | Precise (−4) — small/fast/head

| Part                         | Accuracy      | Threshold | Break Effect                                        |
| ---------------------------- | ------------- | --------- | --------------------------------------------------- |
| Jaw Plates ★ _(Impact Zone)_ | Standard (−2) | 3 hits    | Thunder Trumpet damage halved permanently           |
| Upper Tusks                  | Standard (−2) | 2 hits    | Twin-Tusk Gore loses Charge bonus damage            |
| Lower Tusks                  | Standard (−2) | 2 hits    | Root-Rend disabled                                  |
| Front Legs                   | Open (0)      | 3 hits    | Movement –10 ft; Stampede Surge cannot push targets |

### Tactical Weaknesses

- **Chokepoints:** Stampede Surge requires a clear straight lane. Narrow forest paths, fallen logs, and dense debris deny the charge entirely — Dikera cannot initiate Surge if no 35 ft line exists
- **Fire barriers:** Splits the herd. Members will not cross active fire, which allows hunters to strip Herd Cohesion passively without engaging each member
- **Elevation:** Disrupts charge lines and removes the Patriarch's Tremor Sense advantage — it cannot track airborne or elevated hunters without visual confirmation
- **Stamina pressure:** Trumpet (2 STA), Surge (4 STA), and Rend (2 STA) burn Stamina quickly. A patient party that denies charge lanes forces the Patriarch onto basic attacks and turns it into a slow bruiser

---

## 9) Behavior Guide

**Opening — Round 1 Priority:**

- If hunters are clustered → Thunder Trumpet (catch multiple targets in the cone)
- If a charge lane is open → Stampede Surge (push hunters into each other and into terrain)

**Instinct Loop (Above 40% HP):**

- Twin-Tusk Gore → Root-Rend (create terrain, then charge through it next turn)
- Maintain herd proximity — Dikera repositions between attacks to keep 2+ members within 30 ft
- If hunters try to flank: Groundshock Counter to punish melee approaches
- If hunters cluster near herd members: Thunder Trumpet to knock everyone Prone, then Gore the most isolated target

**If Herd Broken:**

- Patriarch Fury activates
- Abandons terrain management; focuses entirely on the nearest hunter
- Cycles: Gore → Maw (if target goes Prone from Gore push)

**Below 40% HP:**

- Abandons Root-Rend (stamina conservation)
- Stampede Surge every cooldown — even without lanes, it charges blindly
- Desperate Thunder Trumpet when 2+ hunters are close

**At 0 Stamina — Exhausted:**

- No Stampede Surge or Root-Rend
- Thunder Trumpet deals half damage
- Movement –10 ft, AR –2
- Still attempts Gore + Groundshock Counter on melee attackers

**Loop:** Stampede → Disrupt → Trample

---

## 10) Encounter Packaging

**Recommended Arena:** Wide forest clearing with multiple charge lanes — 60 ft minimum open space in at least two directions. Soft soil sections (for Mud Terrain from Root-Rend). Fallen logs and broken tree lines at the edges. Narrow forest paths leading in (exploitable as chokepoints).

**Environmental Synergy:**

- Soft soil → Root-Rend creates Mud Terrain, slowing hunters on Stampede paths
- Fallen logs → Stampede Surge collision targets (+1d10) already placed in the arena before combat
- Narrow forest paths → if hunters retreat into the trees, Dikera cannot Surge but herd members still fill the lanes

**Herd Setup:**
Start with 2–4 herd members (GM choice based on party size). Place them at the clearing edges, 30–50 ft from the Patriarch. They do not move unless the Patriarch uses Stampede Surge — then they react.

**Mid-Fight Shift:**
Herd panic: if the first herd member is slain, one additional herd member charges in from the map edge at the start of the next round. It does not benefit Herd Cohesion until it reaches within 30 ft of the Patriarch.

**Scaling Notes:**

- Strong party: increase active herd members to 4; reduce Stampede Surge cooldown to 2 turns
- Weak party: remove Herd Cohesion AR bonus; reduce herd to 1 member

---

## 11) Loot & Crafting

### A) Loot Table

| Drop                    | Chance | Use                                          |
| ----------------------- | ------ | -------------------------------------------- |
| Thunderhide             | 60%    | Armor effects, stability riders              |
| Twin Tusks              | 50%    | Weapon charge riders, push effects           |
| Thunder Gland           | 40%    | Sonic riders, Dazed effects                  |
| Patriarch Core _(Rare)_ | 15%    | Required for Rare Effects & Signature Crafts |

> Drop rates adjusted: Patriarch Core reduced from 25% to 15% to match Tier 3 rare part scarcity (compare Ladon Deepwater Core at 10%).

---

### B) Craft Themes

- Charge attacks and momentum payoffs
- Sonic disruption and Dazed application
- Formation breaking and anti-cluster pressure
- Terrain impact and difficult terrain interaction

> If an effect does not relate to these four themes — it does not belong here.

---

### C) Material Interaction Profiles

**Weapon Bias**

| Material        | Bias                  | Expression                                                          |
| --------------- | --------------------- | ------------------------------------------------------------------- |
| Metal           | Control / Structure   | Push interrupts, anti-charge riders, formation anchors, push-on-hit |
| Bone / Hide     | Aggression / Pressure | Charge bonuses, Bleeding escalation, pursuit triggers               |
| Stone / Crystal | Resonant / Elemental  | Sonic riders, Dazed application, terrain burst interaction          |

**Armor Bias**

| Material         | Bias                  | Expression                                                               |
| ---------------- | --------------------- | ------------------------------------------------------------------------ |
| Metal            | Stability             | Forced movement resistance, stampede mitigation, anti-knockdown passives |
| Hide / Bone      | Mobility              | Anti-Prone mechanics, quick repositioning, recovery speed                |
| Cloth / Membrane | Stamina / Positioning | Sonic damage reduction, formation bonuses, aura extension                |

> No material modifies base AR beyond weight class.

---

### D) Effect Tables

**Common Weapon Effects** _(GM chooses 1)_

**Concussive Strike**
On hit, the target must succeed a CON save (DC = weapon DC) or be pushed 5 ft and cannot willingly move toward you until the start of your next turn. _(Passive rider — no additional action cost. Disrupts charge lanes and separates hunters from the follow-up gore.)_

**Charge Punisher**
When you hit a creature that moved 15 ft or more this turn, deal +1d4 bonus damage. _(Passive — triggers on any charge movement, regardless of source. Rewards staying still and letting it come to you.)_

---

**Rare Weapon Effects** _(Rare part required — GM chooses 1)_

**Thunderstrike** _(1/Combat)_
On hit, a sonic burst erupts in a 10-ft radius centered on the target. All creatures in the burst make a CON save (DC = weapon DC) → fail → Dazed (1 turn) and pushed 5 ft outward from the burst center. _(Area punish — turns a single hit into a formation reset. Most effective when the party clusters Dikera or herd members together first.)_

**Surge Rider** _(1 STA)_
If you moved 15 ft or more in a straight line before making this attack, on hit deal +1d10 bonus damage and the target is knocked Prone. _(Lets hunters mirror the Patriarch's charge identity. Positioning-gated — requires the same commitment Dikera demands of itself.)_

---

**Common Armor Effects** _(GM chooses 1)_

**Stampede Bracing**
You have advantage on saving throws against being pushed, pulled, or knocked Prone. _(Passive — direct counter to Stampede Surge and Thunder Trumpet. Does not reduce damage, only conditions.)_

**Quick Recovery**
Standing up from Prone costs 1 Stamina instead of 2. _(Passive — reduces the ongoing tempo cost of Dikera's knockdown spam. Every round you spend Prone is a round Crushing Maw threatens you.)_

---

**Rare Armor Effects** _(Rare part required — GM chooses 1)_

**Trample Ward** _(1/Combat)_
When a creature moves through your space or collides with you from forced movement, you may spend 1 Stamina to negate all damage and Prone from that collision. The charging creature is Staggered.

**Resonance Dampener**
You are immune to Dazed from sonic sources. While within 10 ft of an ally who is Dazed from a sonic source, they may immediately end the Dazed condition (no action required, once per round).

---

### E) Archetype Translation (Sonic)

| Weapon  | Translation                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wand    | **Shockwave Rod** — Grants Sonic Affinity (Shockwave). Hex: **Tremor Pulse** — clusters vibrate with concussive resonance, dealing Sonic (bludgeoning) damage on detonation. Detonate → CON save vs Wand DC → fail → **Dazed** (1 turn). Visual: clusters appear as resonating rings at contact points; detonation sends concentric shockwave rings outward rather than fire.                                                                         |
| Conduit | **Resonance Conduit** — Grants Sonic Affinity and Sonic Aspect: **Resonance Field**. The Field emits standing sonic vibration — enemies who end their turn inside must succeed a CON save vs Conduit DC or become Dazed until end of their next turn. Standard Field size rules apply.                                                                                                                                                                |
| Bow     | **Thunderclap Arrow** _(2 uses/hunt)_ — On hit, CON save vs Bow DC → fail → Dazed (1 turn) and pushed 5 ft away from you (sonic shockwave on impact). Integrated into Arrow Swap system normally. If the target is already Dazed when hit, the Thunderclap Arrow instead deals +1d8 bonus Sonic damage (resonance amplification).                                                                                                                     |
| Flute   | **Ballad: "The Shattering Note"** — While active, once per round when an enemy inside the Flute's aura (30 ft) is knocked Prone (by any source), they must succeed a CON save vs Flute DC or remain Prone until the start of their next turn (sonic vibration prevents recovery). Aura expression — passive trigger on Prone state, not active targeting. Delivered via standard Ballad activation and sustain rules at the same mechanical strength. |

---

### F) Signature Crafts _(Primal Beast — multiple allowed; Rare part required for each)_

---

**Signature 1 — Thunderhide Mantle** _(Medium Armor — Patriarch Core required)_

AR +4.

**Momentum Plating:** If you moved 20 ft or more in a straight line this turn, your next melee attack before the end of your turn deals +1d8 bonus damage.

> Cannot stack with other Rare armor effects. Cannot combine Signature armor with a second Signature.

---

**Signature 2 — Patriarch Tusk Greatsword** _(Greatsword only — Patriarch Core required)_

**Charging Gore** (Passive): When you hit with this weapon after moving 15 ft or more in a straight line this turn, deal +1d10 bonus damage. The target makes a CON save (DC = weapon DC) → fail → Bleeding and pushed 15 ft.

> Cannot stack with other Rare weapon effects. Cannot combine with a second Signature.

---

**Signature 3 — Deepecho Conduit** _(Conduit only — Patriarch Core required)_

Grants Sonic Affinity and Sonic Aspect: **Resonance Field** (see Archetype Translation above).

**Sonic Surge** _(1/Combat, 2 STA)_: While your Resonance Field is active, trigger a sonic pulse outward. All enemies currently inside the Field make a CON save vs Conduit DC → fail → Dazed (1 turn) and pushed 10 ft outward from the Field's center.

> Cannot stack with other Rare weapon effects.

---

## 12) Hooks

**The Broken Migration**
Trade routes are blocked by a roaming Dikera herd. The guild wants it cleared — but the migration has been running this path for generations. Something rerouted it this season.

**Thunder Poachers**
Hunters harvesting thunder glands have enraged the migration. The Patriarch is now tracking the poaching camp. The guild needs the problem solved before the camp becomes a crater.

**The Split Herd**
Two Patriarchs are leading rival herds toward the same valley. Neither will yield the territory. Whatever happens when they meet will tear the valley apart — and both herds are already agitated.

**The Silent Valley**
Migration has stopped entirely. Something stronger has driven the Dikera away. Whatever it was may still be in the valley — and it frightens an armored elephant that shakes the ground when it breathes.
