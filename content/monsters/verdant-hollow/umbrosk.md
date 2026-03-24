# UMBROSK — The Echo Warden

**Classification:** Myriapod Beast
**Tier:** 2 — Vertical Control / Sonic Disruption
**Biome:** Sunken Caverns, Lower Verdant Hollow
**Element:** Sound

**Tagline:** "A ceiling-stalking sonic predator that weaponizes echo and vertical control."

---

## 1) Field Notes

Umbrosk does not hunt — it wardens. A territorial arthropod the size of a draft horse, it clings to cavern ceilings with magnetite-laced leg tips and monitors its domain through a constant low-frequency sonar pulse. It has claimed its chamber for generations. It does not give ground.

**What Hunters Notice First:**
- Walls that seem to "breathe" — a barely audible oscillating hum that rises in pitch when something moves
- Parallel scratch marks across cavern stone at ceiling height, evenly spaced like a measuring grid
- Fungal growth distributed in rings on the cavern floor — fertilized by the Umbrosk's territorial marking drops

**Core Puzzle:**
- Vertical positioning, Echo Pulse formation disruption, Ceiling Drop burst, light sensitivity
- Illuminate the cavern → collapse Echosense and Mossed Carapace. Force it to the ground → remove Ceiling Drop entirely.

---

## 2) Stat Block

### Attributes

| Stat | Score | Modifier |
|------|-------|----------|
| STR | 7 | +3 |
| DEX | 6 | +3 |
| CON | 7 | +3 |
| INT | 4 | +2 |
| INS | 6 | +3 |
| CHA | 1 | +0 |

### Combat Attributes

| Stat | Value | Notes |
|------|-------|-------|
| AR | 12 | Layered chitin — rises to 13 while in dim light (Mossed Carapace) |
| HP | 137 | 4P median: TierBase (60) + CON (7) × 11 |
| Stamina | 17 | 10 + CON Score (7) |

> **GM Scaling Note:** For optimized parties: HP → **200** (60 + 7 × 20). Umbrosk's vertical loop (Drop + Crush + Echo Pulse) needs time to execute 2–3 full cycles. If the party has strong ranged DPR, start at 200 to ensure the ceiling phase gets at least 2 rounds before being grounded.

| Movement | 40 ft ground | 30 ft ceiling (must begin turn on a surface) |
|----------|-------------|---------------------------------------------|
| Attacks/Turn | 3 | — |

**Attack Roll Breakdown:** `d20 + STR or DEX mod (+3) + Trained proficiency (+2) = d20+5`

**Exhaustion Rule:**
- Falls from ceiling immediately (Prone if on ceiling)
- Echo Pulse disabled
- Movement halved

### Senses

- Echosense 60 ft — always active; detects movement by sound oscillation regardless of light level. Bypassed by complete stillness or magical silence.
- **Sonar Disruption:** Echosense range degrades when acoustic anchors are destroyed or the cave is filled with dampening material. Each fungal core destroyed: −15 ft range. Smoke Cluster active in the cave: Echosense drops to 20 ft and Perception advantage lost for its duration. At 0 ft effective range: Echosense disabled entirely.
- Standard vision only — no detection advantage in darkness beyond Echosense

---

## 3) Attacks

**Claw Rake — (1 Stamina)**
```
Type:    Melee (DEX)
Attack:  d20+5
Damage:  2d6+3
Rider:   On hit: DEX Save DC 15 → Fail: Slowed (–10 ft movement, 1 turn)
         Success: No rider
```

> The setup attack. Slowed hunters can't Dash away from a follow-up Mandible Crush — and lose the movement needed to escape the Echo Pulse radius. Claw Rake into Mandible Crush is Umbrosk's ground-phase bread-and-butter.

---

**Mandible Crush — (1 Stamina)**
```
Type:    Melee (STR)
Attack:  d20+5
Damage:  2d8+3
Rider:   If target is Slowed or Restrained: +1d6 damage
```

> The punish. Mandible Crush alone is a solid hit — with the rider active (avg 15.5 vs Slowed/Restrained), it's the heaviest single-target damage in Umbrosk's kit. The Slowed/Restrained gate is the price: hunters who avoid Claw Rake's rider and break out of Ceiling Drop's Restrained window pay base damage only.

---

## 4) Special Abilities

**Echo Pulse — (3 Stamina, Cooldown 2 rounds)**

```
Type:    30 ft radius centered on Umbrosk (CON-based, Sound damage)
Save:    CON Save DC 15
Fail:    2d8+3 damage + Staggered
Success: Half damage, no Stagger
```

> Umbrosk's area denial tool. CON-based — this is biological percussion, not a vocal cry. Best used at the start of the fight (hunters clustered, not yet spread) or immediately after landing from a Ceiling Drop (hunters converging to punish). Staggered hunters lose their next Action — buying Umbrosk time to reposition back to the ceiling.

---

**Ceiling Drop — (2 Stamina)**

Requires starting on ceiling directly above target.
```
Type:    Melee (STR), Dive
Attack:  d20+5
Damage:  2d10+3
Rider:   STR Save DC 15 → Fail: Restrained until end of target's next turn
Miss:    Umbrosk lands Prone
```

> Risk/reward preserved. A missed Ceiling Drop Prones Umbrosk — the primary punishment window for melee hunters. On hit, Restrained opens the +1d6 Mandible Crush rider immediately. The ceiling requirement means Umbrosk must spend a turn repositioning overhead before dropping — hunters who watch movement can anticipate it.

---

## 5) Reactions

**Echo Slip — (2 Stamina, Cooldown 1 round)**
```
Trigger:  Hit by a melee attack while Echosense is not Disrupted (range > 20 ft)
Effect:   Reduce incoming damage by half and move 15 ft along any surface
          (wall, floor, or ceiling) without provoking opportunity attacks
Limit:    1 reaction per round
```

> Defensive repositioning, not negation. Echo Slip costs 2 STA — sustainable for 3–4 uses before it significantly drains the pool. The Echosense requirement ties this to acoustic conditions, not light. Hunters who destroy fungal cores or deploy a Smoke Cluster strip the reaction entirely — Umbrosk takes full melee damage without recourse and cannot reposition safely.

---

## 6) Passive Traits

**Echosense**

Always active (not light-dependent):
- Detect movement within 60 ft (cannot be Surprised)
- Advantage on Perception checks relying on sound
- Does NOT automatically bypass Stealth — a creature that holds completely still remains hidden
- **Disrupted** when Echosense range is reduced to 20 ft or less (by core destruction or Smoke Cluster): loses Surprised immunity and Perception advantage

**Mossed Carapace**

While in dim light:
- +1 AR (12 → 13)
- The bioluminescent moss in the shell seams absorbs ambient light and hardens the outer layer

> This is a passive biological trait, not a system-critical counterplay element. The cave's ambient bioluminescence already provides dim light across most of the arena — Mossed Carapace is simply Umbrosk's baseline state in its home environment. It falls off only if the fungal cores are smashed and the arena's dim patches disappear.

---

## 7) Part Breaks & Weaknesses

### Break Zones

| Part | Accuracy | Threshold | Break Effect |
|------|----------|-----------|--------------|
| Antennae ★ *(Impact Zone)* | Precise (−4) | 2 called-shot hits | Echosense disabled for 2 rounds. Echo Pulse DC reduced to 11 (biological disruption — the sonar organs are damaged). |
| Carapace | Open (0) | 3 hits (any type) | AR reduced to 10 permanently. Mossed Carapace passive also disabled — the shell layer is cracked and no longer holds moss. |

### Tactical Weaknesses

- **Acoustic disruption collapses identity:** Echosense is Umbrosk's detection and defensive framework simultaneously. Destroying fungal cores degrades it incrementally (−15 ft per core; 4 cores in a standard arena). Smoke Cluster drops it to 20 ft and strips Perception advantage for 2 rounds. Once Disrupted, Echo Slip loses its trigger — Umbrosk takes full melee damage without recourse. No torch solves this. The counterplay is specific to the cave's acoustic environment.
- **Fungal cores are permanent acoustic anchors:** Once smashed, they cannot be restored. Each destroyed core is a one-way ratchet toward full disruption. Hunters who prioritize core destruction early compress the fight's difficult phase; hunters who ignore them fight the full sonar-aware Umbrosk for longer.
- **Smoke Cluster is the prep-item counter:** Two uses per hunt, deployed as a Fast Action. Each deployment disrupts Echosense for 2 rounds regardless of how many cores remain. A party that combines 2 core destructions with a Smoke Cluster achieves full disruption without burning all their actions on cores.
- **Grounding removes Ceiling Drop:** Ceiling Drop requires starting above the target. AoE Prone or sustained melee that prevents ceiling re-entry forces Umbrosk into a ground attacker with no burst window. Binding Arrow's Stagger is effective for this — but note that the "cannot Fly" rider does nothing here. Umbrosk moves along surfaces via magnetite-laced leg tips, not flight. Only the Stagger (loses its Action) is relevant when Binding Arrow connects.
- **Antennae break collapses Echo Pulse:** At DC 11, T2 CON saves almost always succeed — the Stagger rider disappears, leaving a 3 STA AoE with no payoff. Antennae break turns Echo Pulse from a fight-opener into a waste.
- **Carapace break removes durability:** AR 10 with no Mossed Carapace is below the T2 floor. Umbrosk becomes significantly easier to hit in both phases.
- **Ceiling Drop miss = Prone:** Melee hunters with Prone punishment tools (Ripping Strike, Charged Smash, Talon Rake) should bait a Drop intentionally — let it miss, then commit to burst. Hollow-point weapons deal additional damage to the brittle carapace.

---

## 8) Behavior Guide

**Opening State:** On ceiling at maximum elevation. Will not descend until at least 1 hunter is within 30 ft radius. Scans with Echosense — holds position and emits a rising hum as pre-attack warning.

**Round 1 Priority:**
- If 2+ hunters within 30 ft: Echo Pulse (formation break, Stagger opener) → hold ceiling
- If a single hunter is isolated directly below: Ceiling Drop immediately (skip Pulse, take the burst window)

**Instinct Loop (Above 35% HP):**
- If on ceiling and isolated hunter below: Ceiling Drop → Mandible Crush (vs Restrained) → Claw Rake → Echo Slip back to ceiling if hit
- If forced to ground: Claw Rake (Slow) → Mandible Crush (punish) → Echo Pulse when clustered hunters step in
- **Ground-phase target priority:** Umbrosk remembers who harassed it from range during the ceiling phase. Once grounded, it directs its Claw Rake / Mandible Crush chain at the hunter who dealt the most damage before melee began — not automatically the lowest HP target. This spreads punishment across the party and punishes hunters who think range makes them safe.
- If Echosense Disrupted (cores smashed or Smoke Cluster active): Abandon Echo Slip (trigger lost); shift to aggressive Ceiling Drop spam — Umbrosk can no longer track threats with precision and compensates with burst aggression; prioritize Ceiling Drop + Mandible Crush rather than methodical positioning
- If Antennae broken: Abandon Echo Pulse as primary opener (DC 11 rarely Staggers); shift entirely to Ceiling Drop and ground pressure
- If Carapace broken: Increase aggression — AR 10 means it will die faster, push harder

**At 35% HP:**
- Desperation mode: Ceiling Drop every turn regardless of miss risk
- Accepts Prone on miss for burst upside
- No longer retreats to ceiling after attacks — full ground aggression
- Echo Pulse on cooldown fires immediately when available (even at DC 11 post-break)

**At 0 Stamina — Exhausted:**
- Falls Prone from ceiling (cannot cling)
- Echo Pulse disabled entirely
- Claw Rake + Mandible Crush only at half effectiveness
- Attempts to flee toward tunnel system at back of arena

**Loop:** Disrupt → Drop → Crush → Reposition

---

## 9) Encounter Packaging

**Recommended Arena:** Vertical cavern chamber — 30–40 ft ceiling height, uneven floor with stalactite clusters, fungal growth in rings creating dim-light patches surrounded by relative brightness from bioluminescent walls.

**Environmental Synergy:**
- Fungal sonar anchors: Umbrosk calibrates its Echosense against the resonant frequency of the bioluminescent fungal cores distributed across the floor in rings. Each core destroyed degrades Echosense range by 15 ft (4 cores in a standard arena → full disruption at 4 destroyed). Cores also provide dim-light cover for hunters; a fully core-smashed arena loses the dim patches but retains bioluminescent wall ambiance — no side gains a stealth advantage from destruction alone
- Stalactites: partial cover at ceiling height; Umbrosk uses them as approach lanes before dropping
- Tunnel exits: at 35% HP, Umbrosk retreats toward the back tunnel — if hunters block it, it fights to the death; if they don't, it escapes (hook opportunity)

**Mid-Fight Shifts:**
1. Fungal cores smashed (hunters deliberately, or caught in Echo Pulse blast radius) — Echosense degrades with each one. At 2 cores destroyed: range 30 ft, Echo Slip still functional but only within that radius. At 4 cores destroyed: Echosense fully disrupted, Echo Slip disabled. Umbrosk shifts from methodical to aggressive — Ceiling Drop spam replaces precision positioning. GMs should let hunters who think to target the cores feel clever; this is a discoverable prep-free counter that costs actions rather than pack slots.
2. Smoke Cluster deployed — instantly drops Echosense to 20 ft and strips Perception advantage for 2 rounds. Stacks with core destruction: a party that smashes 2 cores and throws a Smoke Cluster achieves full disruption without burning all four core actions. The disruption window is short — the party must commit to burst pressure during it or Umbrosk recovers when the cloud disperses.

**Scaling Notes:**
- Weak party: Reduce Echo Pulse damage to 2d6+3. Remove Ceiling Drop's Restrained rider — Prone instead.
- Strong party: Add a second Umbrosk in an adjacent chamber that begins investigating at round 3 (sound of the fight carries). Hunters must either finish quickly or hold a chokepoint.

---

## 10) Loot & Crafting

### A) Loot Table

| Drop | Chance | Use |
|------|--------|-----|
| Umbrosk Chitin | 60% | Heavy armor reinforcement, soundproofing components |
| Antenna Fragment | 50% | Detection tools, navigation instruments, sound-sensing components |
| Mossed Shell Plate | 40% | Terrain adaptation gear, acoustic dampening materials |
| Resonance Node *(Rare)* | 20% | Required for Rare Effects & Signature Crafts |

---

### B) Craft Themes

- Sound disruption (Concentration denial, Stagger pressure)
- Vertical dominance (elevation rewards, ceiling-to-ground burst)
- Anti-formation tools (area denial, movement tax)
- Reaction denial (attacker response suppression)

> If an effect does not relate to these four themes — it does not belong here. No permanent detection granted to hunters. No flight.

---

### C) Material Interaction Profiles

**Weapon Bias**

| Material | Bias | Expression |
|----------|------|------------|
| Metal | Control / Precision | Movement denial, grounding tools, anti-ceiling interruption |
| Bone / Hide | Aggression / Punish | Slowed-target bonuses, Prone punishment, pursuit after Drop |
| Stone / Crystal | Resonant / Sonic | Sound burst on impact, Concentration disruption, echo-zone hazards |

**Armor Bias**

| Material | Bias | Expression |
|----------|------|------------|
| Metal | Stability | Sonic resistance, anti-Stagger anchoring, formation brace |
| Hide / Bone | Mobility | Vertical leap assists, Prone recovery, repositioning after Drop |
| Cloth / Membrane | Sound Dampening | Save bonuses vs Sound, stealth in cavern dim light, spot check resistance |

> No material modifies base AR beyond weight class.

---

### D) Effect Tables

**Common Weapon Effects** *(GM chooses 1)*

**Resonant Strike**
On hit, target has disadvantage on its next Concentration check. (Once per turn.)

**Echo Pressure**
If the target is Slowed, deal +1d4 damage. (Once per turn.)

---

**Rare Weapon Effects** *(Rare part required — GM chooses 1)*

**Sonic Break** *(2 Stamina, 1/Combat)*
On hit, target must make a CON save (DC = weapon DC) or become Staggered.

**Cavern Shift** *(1/Combat)*
After hitting a target, move 15 ft along any surface (wall, floor, or ceiling) without provoking opportunity attacks.

---

**Weapon Archetype Translation (Sound)**

| Weapon | Translation |
|--------|------------|
| Bow | **Cavern Echo Bow** — No affinity (Sound is not an elemental type for Bow). Common effects apply as arrow riders. Rare Sonic Break → **Shockwave Arrow** (2/hunt): On hit, target makes CON save vs Bow DC or becomes Staggered. Rare Cavern Shift → **Hollow Step Arrow** (2/hunt): On hit, you may move 15 ft without provoking opportunity attacks. |
| Wand | **Deepchime Wand** — Grants Sound damage type. Hex becomes **Sonic — Rupture**: While hexed, target has disadvantage on Concentration checks. On detonate: CON save vs Wand DC → fail: Staggered. |
| Conduit | **Cavern Conduit** — Grants Sound Aspect access. Aspect: **Resonance Field** — Inside field, creatures that take damage must succeed a CON save vs Conduit DC or have disadvantage on their next Concentration check. Ranged attacks passing through the field suffer −1 to hit. No damage, no silence. |
| Flute | **Deepchime Flute** — Sound affinity. Common effects are passive riders on existing Ballads. Rare Sonic Break → Ballad **"Echo Shatter"** (1/Combat): While active, the first enemy that takes damage each round within the aura must make a CON save vs Flute DC or become Staggered. Rare Cavern Shift → Ballad **"Surface Step"** (1/Combat): While active, allies within the aura who hit a target may move 10 ft along any surface without provoking opportunity attacks. |

---

**Common Armor Effects** *(GM chooses 1)*

**Stone-Deaf Brace**
When you fail a CON save against a Sound-based effect, reduce the Stamina cost of your next action by 1 (minimum 0).

**Cavern Step**
Ignore difficult terrain caused by rubble, stalactite debris, or sonic shockwave residue.

---

**Rare Armor Effects** *(Rare part required — GM chooses 1)*

**Resonance Shell** *(1/Combat)*
When you take Sound damage, reduce it by half and the attacker must make a CON save (DC 13) or be Dazed until end of its next turn (sonic feedback).

---

### E) Signature Crafts

*Umbrosk offers two Signature options. Each requires the Resonance Node (Rare). They cannot be combined with each other or with other Rare effects.*

---

**Signature 1 — Cavern Bulwark** *(Greatshield)*

Replaces Greatshield template. AR +3 (Heavy).

**Resonance Guard** *(1/Combat)*
For 2 turns:
- Reduce incoming ranged damage by half
- When you Block, the attacker must make a CON save (DC = Greatshield DC) or lose its Reaction until end of its next turn

No immunity. No stun. At end of duration: lose 2 Stamina. Cannot stack with Rare Armor effects.

---

**Signature 2 — Deepchime Blade** *(Greatsword)*

Replaces standard Greatsword template. Uses STR for attack and damage.

**Chime Strike**
On your first hit each turn: deal +1d4 Sound damage.

**Rupture** *(Conditional)*
If the target failed a save this round: +1d6 additional Sound damage on hit.

**Echo Burst** *(1/Combat)*
After hitting 2 different creatures in one turn:
- Emit a 10 ft pulse
- Each creature in range makes a CON save (DC = weapon DC) or becomes Slowed (1 turn)

Cannot stack with Rare Weapon effects.

---

## 11) Hooks

**The Breathing Walls**
Cavern miners report the rock walls "exhaling" — a subsonic pulse that vibrates tools off shelves and causes disorientation after extended exposure. Three workers didn't come back from the lower gallery. Their lanterns were found intact, unlit, sitting neatly in the middle of the tunnel.

**The Smashed Core**
A rival expedition destroyed a fungal cluster in a chamber below Verdant Hollow to clear a campsite. The Umbrosk that used it as a territory anchor has responded — methodically. Every installation in the lower tunnels has been destroyed. The guild wants escalation stopped before it reaches the surface settlements.

**The Dead Maps**
Hunter survey teams are returning with corrupted map data — their acoustic mapping instruments are recording overlapping echoes that don't correspond to any geometry. Someone, or something, has been adding false signals to the cavern's echo landscape. A hunter who knows how to read resonance patterns suspects it's deliberate.

**Overlapping Territories**
Two Umbrosk have been pushed into adjacent chambers by a deeper predator's incursion. For the first time in recorded guild history, their overlapping sonar pulses are interfering — creating feedback dead zones where neither can sense and neither will enter. Something dangerous lives in that gap, and no one has looked yet.

