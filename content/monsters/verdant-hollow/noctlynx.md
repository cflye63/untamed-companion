# NOCTLYNX — The Shadowed Prowler

**Classification:** Fanged Beast
**Tier:** 2 — Stealth Assassin / Bleed Pressure
**Biome:** Verdant Hollow (Night Only)
**Element:** None

**Tagline:** "A hit-and-run nocturnal assassin that weaponizes shadow and bleeding pressure."

---

## 1) Field Notes

Noctlynx is not invisible. It is disciplined in shadow positioning. It does not brawl — it enters from darkness, punishes the isolated, and withdraws before the party can organize. Its strength is in the gap between when it hits and when the party can respond.

**What Hunters Notice First:**
- Silent triangulation through brush — two shapes in sight, one unseen
- A barely audible rasp of claws on bark before something drops from above
- Livestock found with deep parallel claw wounds, no struggle signs — killed before they could react

**Core Puzzle:**
- Stealth entry, burst Bleed, Restrained window, Blur Evade on response
- Remove darkness → remove identity. Force sustained melee → collapse reset loop.

---

## 2) Stat Block

### Attributes

| Stat | Score | Modifier |
|------|-------|----------|
| STR | 5 | +2 |
| DEX | 7 | +3 |
| CON | 5 | +2 |
| INT | 5 | +2 |
| INS | 7 | +3 |
| CHA | 4 | +2 |

### Combat Attributes

| Stat | Value | Notes |
|------|-------|-------|
| AR | 11 | Lean frame — defensively reliant on Blur Evade, not armor |
| HP | 115 | 4P median: TierBase (60) + CON (5) × 11 |
| Stamina | 18 | Design override: +3 above formula (see Night Reserves note) |

> **GM Scaling Note:** For optimized parties: HP → **175** (60 + 5 × 23). Noctlynx's lower HP budget is intentional — its defensive identity lives in Blur Evade (damage halving) and Stealth (preventing being targeted), not raw durability. If hunters crack the stealth loop and sustain melee, the fight compresses fast. That's the design.

> **Night Reserves — Stamina Design Override:** Noctlynx runs Stamina 18 rather than the formula baseline of 15 (10 + CON 5). Its full stealth loop (Midnight Veil 1 + attacks 2 + Shadow Skulk 1 + Blur Evade 1) costs 5 STA/round. Without the override, the loop collapses by R3 before the puzzle can fully express. The +3 represents neurological stamina reserves built around nocturnal apex predation — not raw endurance. Same design precedent as Earule's flight economy override.

| Movement | 40 ft | — |
|----------|-------|---|
| Attacks/Turn | 3 | — |

**Attack Roll Breakdown:** `d20 + DEX mod (+3) + Trained proficiency (+2) = d20+5`

**Exhaustion Rule:**
- Cannot enter Stealth
- Shadow Skulk disabled
- Blur Evade costs +1 Stamina (2 STA total)

### Senses

- Darkvision 60 ft (treats dim light as bright; treats darkness as dim)
- Keen smell 30 ft (detects creatures by scent — bypassed by strong masking odors)

---

## 3) Attacks

**Pounce Claw — (1 Stamina)**
```
Type:    Melee (DEX)
Attack:  d20+5
Damage:  2d6+3
Rider:   Only when attacking from Stealth:
         STR Save DC 15 → Fail: Restrained until end of target's next turn
         Success: No rider
```

> The Restrained rider is the ambush payoff — not a free tool. Noctlynx must maintain the Midnight Veil loop to access it. Grounded in bright light, it loses the rider entirely. Restrained (Speed 0, no Dodge, attacks-have-advantage) creates the burst damage window for Precision Bite follow-up.

---

**Precision Bite — (1 Stamina)**
```
Type:    Melee (STR)
Attack:  d20+4
Damage:  1d8+2
Rider:   On hit: Apply Bleed (1d4 for 2 turns)
```

> Utility attack. Damage is below T2 floor (avg 6.5) but the Bleed rider is the pressure tool — especially punishing on Restrained targets who can't Dash away. Bleed carries a +1 STA cost on moves >15 ft, compressing Stamina as hunters try to reposition.

---

## 4) Special Abilities

**Midnight Veil — (1 Stamina, Start of Turn)**

If in dim light or shadow:
- Enter Stealth until Noctlynx attacks, takes damage, or enters bright light
- Spot DC: 15 (10 + DEX mod 3 + Trained 2)
- No automatic free stealth. Costs Stamina every time.

> Stealth is the gate to Pounce Claw's Restrained rider. At 1 STA per activation, the loop costs the fight's resource budget. Hunters who flood the arena with light force Noctlynx to fight without its payoff.

---

**Shadow Skulk — (1 Stamina, Cooldown 1 round)**

Move up to 30 ft between shadowed spaces in line of sight.
- This is NOT teleport — rapid ground reposition through low light
- If ending in dim light: may immediately use Midnight Veil (cost still applies)

> The reset tool. After a Pounce-Bite cycle, Noctlynx uses Shadow Skulk to break contact and re-enter stealth. At 1 STA it's a cheap repositioner — the real cost is the Cooldown 1 round, not the Stamina. Breaking the Skulk with AoE (hitting multiple shadow zones) or eliminating shadow cover forces Noctlynx to remain exposed.

---

## 5) Reactions

**Blur Evade — (1 Stamina)**
```
Trigger:  Targeted by an attack
Effect:   Make a DEX contest (d20+3) vs the attacker's attack roll.
          If successful: reduce incoming damage by half and move 10 ft (no provoke)
          If unsuccessful: attack resolves normally
Limit:    1 reaction per round; Cooldown 1 turn
```

> Noctlynx's primary defensive tool. Not full negation — a successful contest halves damage and repositions. Costs 1 STA, so sustained pressure bleeds it dry. Exhausted Noctlynx still has it, but at +1 STA cost (2 STA total). Hunters should bait it early and then commit to burst.

---

## 6) Passive Traits

**Night Hunter**

Advantage on Stealth checks in dim light or darkness.

**Fragile Frame**

Takes +2 damage from Radiant or Light-based effects (torches, flares, fire burst in enclosed spaces). The lightweight hollow-bone frame that makes it quick makes it brittle against heat and light.

---

## 7) Part Breaks & Weaknesses

### Break Zones

| Part | Accuracy | Threshold | Break Effect |
|------|----------|-----------|--------------|
| Forelimbs | Standard (−2) | 2 called-shot hits | Pounce Claw loses Restrained rider entirely (even from Stealth). Movement reduced to 30 ft. |
| Eyes ★ *(Impact Zone)* | Precise (−4) | 2 called-shot hits | Midnight Veil Spot DC reduced to 10. Night Hunter advantage on Stealth lost. |

### Tactical Weaknesses

- **Light destroys identity:** Bright light removes Stealth eligibility entirely. Midnight Veil, the Restrained rider, and Shadow Skulk's re-entry all require dim light. A torch-lit arena is a hard counter.
- **Forelimb break removes the payoff:** Pounce Claw without Restrained is just a 2d6+3 melee attack. Noctlynx becomes a below-floor attacker with no burst window.
- **Sustained melee collapses STA:** Midnight Veil (1), Shadow Skulk (1), Blur Evade (1) — a single loop costs 4 STA (plus 2 STA for attacks). Force engagement and deny resets — at STA 18, that's roughly 3 full loops before Exhaustion.
- **AoE prevents safe reset:** Shadow Skulk requires shadow zones in line of sight. AoE that hits multiple cover positions forces Noctlynx to move into the open.
- **Bleed + Burning stack:** Burned (−1 STA/turn) + Bleeding (+1 STA on move) compound the STA drain across both monster and hunter resources.
- **Eyes break:** At Spot DC 10, any hunter with INT or INS 4+ spots Noctlynx on average — the stealth loop collapses as the party can consistently track it.

---

## 8) Behavior Guide

**Opening State:** Already hidden. Noctlynx enters the encounter from concealment — never from open ground. It scouts for the most isolated or lowest-HP hunter.

**Round 1 Priority:**
- Midnight Veil → Pounce Claw (from Stealth → Restrained) on the weakest isolated target
- Follow with Precision Bite (Bleed) on the same Restrained target
- Shadow Skulk to reset if adjacent allies closed in

**Instinct Loop (Above 40% HP):**
- If in shadow and undetected: Midnight Veil → Pounce (Restrained) → Precision Bite (Bleed) → Shadow Skulk
- If detected and engaged by melee: Blur Evade on the first hit → reposition → attempt Shadow Skulk re-entry
- If bright light covers the arena: Hold range, use Precision Bite only (forfeits Restrained rider) — prioritize extinguishing/breaking light sources
- If Eyes broken: abandon Midnight Veil attempts (too easy to spot), shift to open hit-and-run with Blur Evade as primary defense

**At 40% HP:**
- Desperation loop: Pounce Claw every turn from any shadow, even without full re-entry
- Accepts not having Restrained rider for speed
- Shadow Skulk cooldown reduction prioritized — full reposition every other round

**At 0 Stamina — Exhausted:**
- Cannot enter Stealth or use Shadow Skulk
- Blur Evade costs 3 STA (1 extra) — likely cannot afford it
- Precision Bite only; attempts to flee if given an opening

**Loop:** Hide → Burst → Bleed → Disengage → Re-enter

---

## 9) Encounter Packaging

**Recommended Arena:** Dense canopy at night — moving fog pockets, shadow-dense undergrowth, 2–3 lantern positions that create contrast zones (bright islands surrounded by dim forest).

**Environmental Synergy:**
- Moving fog: temporary shadow coverage mid-arena, opens Shadow Skulk paths through open ground
- Firelight lanterns: hunters must decide whether to concentrate light (safe but predictable positioning) or spread it (covers more ground, creates more shadows)
- Elevated canopy branches: Noctlynx uses height for entry, giving pounce access from above

**Mid-Fight Shifts:**
1. Torches flare (environmental event) — arena brightens, Noctlynx loses Midnight Veil eligibility for 1 round. Party's window to press without stealth retaliation.
2. Moon emerges from cloud cover — a second brightness shift. GM decision: does it help or hurt? Moon at full can illuminate clearings while making forest edges darker by contrast.

**Scaling Notes:**
- Weak party: Reduce Bleed to 1d4 for 1 turn only. Remove Pounce Claw's Restrained rider — Prone instead.
- Strong party: Add shadow-dense terrain features (extra rock formations, collapsed trees) that give Noctlynx more valid Shadow Skulk endpoints. Alternatively increase starting HP to 140.

---

## 10) Loot & Crafting

### A) Loot Table

| Drop | Chance | Use |
|------|--------|-----|
| Noctlynx Pelt | 60% | Stealth armor reinforcement, light flexible components |
| Barbed Claw | 50% | Bleed weapon components, precision cutting tools |
| Shadow Membrane | 40% | Darkness gear, anti-light dampening materials |
| Void Lens *(Rare)* | 20% | Required for Rare Effects & Signature Crafts |

---

### B) Craft Themes

- Stealth entry
- Bleed synergy
- Reaction reposition
- Darkness control

> If an effect does not relate to these four themes — it does not belong here. No invisibility for hunters. No teleportation.

---

### C) Material Interaction Profiles

**Weapon Bias**

| Material | Bias | Expression |
|----------|------|------------|
| Metal | Control / Precision | Reposition lock, Bleed deny, anti-stealth interruption |
| Bone / Hide | Aggression / Finisher | Bleed escalation, pursuit on Restrained, stealth burst bonus |
| Stone / Crystal | Resonant / Burst | Proximity trigger, light burst on impact, shadow disruption |

**Armor Bias**

| Material | Bias | Expression |
|----------|------|------------|
| Metal | Stability | Anti-Bleed mitigation, brace vs ambush, anti-Restrained anchoring |
| Hide / Bone | Mobility Synergy | Reaction-speed triggers, anti-Prone recovery, reposition assists |
| Cloth / Membrane | Stealth Synergy | Shadow positioning assists, dim-light movement, spot check resistance |

> No material modifies base AR beyond weight class.

---

### D) Effect Tables

**Common Weapon Effects** *(GM chooses 1)*

**Shadow Strike**
If you attack from Stealth or concealment (dim light or shadow), deal +1d4 damage. (Once per turn.)

**Bleed Follow**
If the target is already Bleeding, deal +1 damage. (Once per turn.)

---

**Rare Weapon Effects** *(Rare part required — GM chooses 1)*

**Fade Laceration** *(2 Stamina, 1/Combat)*
On hit from Stealth: target must make a CON save (DC = weapon DC) or become Dazed until end of next turn.

**Nightstep** *(1/Combat)*
After hitting from Stealth: move 15 ft without provoking opportunity attacks.

---

**Weapon Archetype Translation (Noctlynx — No Element)**

| Weapon | Translation |
|--------|------------|
| Bow | **Shadow Stalker Bow** — No affinity (no element). Common effects apply normally. Rare Fade Laceration → **Fade Arrow** (2/hunt): On hit while you are in dim light or shadow, target makes CON save vs Bow DC or becomes Dazed until end of next turn. Rare Nightstep → **Ghost Step Arrow** (2/hunt): On hit while you are in dim light or shadow, you may move 15 ft without provoking opportunity attacks. |
| Wand | **Nightshroud Wand** — No affinity granted (no element). Common effects apply normally as hex riders. Rare Fade Laceration → Cluster rider (1/Combat): When you detonate a cluster on a target in dim light or shadow, that target makes CON save vs Wand DC or becomes Dazed until end of next turn. Rare Nightstep → On successful cluster detonation while in dim light or shadow, you may move 10 ft without provoking (1/Combat). |
| Conduit | **Umbral Conduit** — No element affinity. Grants access to **Shadow Aspect: Dark Shroud Field**. Inside field: area becomes dim light; ranged attacks passing through suffer −1 to hit; creatures attempting to Spot inside must roll twice and take the lower result. No custom subsystem. |
| Flute | **Nightsong Flute** — No affinity. Common effects are passive riders on existing Ballads. Rare Fade Laceration → Ballad **"Shadow Dirge"** (1/Combat): While active, the first enemy that takes damage while in dim light or shadow each round must make CON save vs Flute DC or become Dazed until end of next turn. Rare Nightstep → Ballad **"Phantom Stride"** (1/Combat): While active, allies within aura who attack from Stealth or concealment may move 10 ft without provoking after the attack resolves. |

---

**Common Armor Effects** *(GM chooses 1)*

**Shadow Stance**
While in dim light or shadow, you have advantage on the first Stealth check you make each round.

**Bleed Brace**
When you take damage from Bleed at the end of your turn, reduce it by 1 (minimum 0).

---

**Rare Armor Effects** *(Rare part required — GM chooses 1)*

**Void Reflex** *(1/Combat)*
When you take damage from a creature attacking from Stealth, reduce that damage by half and move 10 ft away without provoking opportunity attacks (instinctive evasion — mirrors the predator's own reflex).

---

### E) Signature Crafts

*Noctlynx offers two Signature options. Each requires the Void Lens (Rare). They cannot be combined with each other or with other Rare effects.*

---

**Signature 1 — Nightshade Cloak** *(Light Armor)*

Replaces Light armor template. AR +2.

**Veilstep** *(1/Combat)*
As a Movement Action:
- Enter Stealth even while in partial (dim) light — you do not need full darkness
- You do not provoke opportunity attacks on the move used to reposition into shadow

**Moonbound Leap**
When you move from one dim-light space to another dim-light space:
- Leap up to 20 ft vertically or horizontally
- Do not provoke opportunity attacks
- Must land on a solid surface — not flight

No stacking with Rare Armor effects.

---

**Signature 2 — Silent Claws** *(Weapon: Claws)*

Replaces standard Claw weapon. Uses DEX for attack and damage.

**Shadow Burst**
If attacking from Stealth: deal +1d6 damage on hit.

**Void Rake** *(On Crit)*
Target cannot take Reactions until end of its next turn.

No stacking with Rare Weapon effects.

---

## 11) Hooks

**The Hollow Without Eyes**
Hunters tracking a missing patrol find campsites intact — weapons still sheathed, torches half-burned, no blood trails. Something is dragging prey away without prolonged struggle. At night, the underbrush seems to breathe.

**Light That Bites Back**
A settlement has begun placing lantern towers around its perimeter to repel a Noctlynx. It works — until the creature begins attacking the lantern carriers themselves, targeting oil stores and plunging sections of the village into darkness one by one. The hunters must guard the light while tracking the shadow.

**The Returning Wound**
A hunter survives an encounter but continues bleeding at night — reopening old claw marks whenever the moon rises. Is the Noctlynx marking prey for later? Or does the Bleed carry scent or resonance that allows it to track victims from impossible distances?

**The Shadow Migration**
Multiple Noctlynx territories have overlapped due to predator shifts in Verdant Hollow. For the first time, two prowlers are hunting the same region — pushing each other closer to farmland. The forest grows silent before dusk.
