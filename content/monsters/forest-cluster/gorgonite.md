# GORGONITE — The Many-Eyed Ruin

**Classification:** Reptile Beast
**Tier:** 4
**Biome:** Ancient Ruins (Forest Interior), High Forest Canopy, Ruined Spires
**Element:** Poison / Acid

**Tagline:** "A winged serpentine drake with four heads, each solving a different problem — and together, an unsolvable one."

**Appears when:**
- Ancient ruins deep in the forest have gone silent — no birds, no insects, no signs of smaller predators
- Expedition teams sent to survey old structures stop returning
- Stone surfaces in the deep forest show trails of acid scarring and shed scale the length of a sword

---

## 1) Field Notes

The Gorgonite is not native to ruins. It claims them. A creature of ancient forest interiors, it seeks out elevated stone structures — crumbling towers, collapsed temples, overgrown archways — and nests at the highest accessible point. Over years, its Wither Spit dissolves the stonework around it, and the melted, corroded architecture becomes indistinguishable from the creature's own presence. Hunters entering a Gorgonite's lair are already inside it before the fight begins.

Four serpentine heads extend from a single massive body — long-necked, covered in overlapping scaled plates, with a wingspan that blots out the canopy when fully extended. Each head is distinct in structure and purpose. The Venom Head carries enlarged hollow fangs. The Gaze Head has no pupils — two flat silver discs that reflect everything. The Crusher Head is the heaviest-built, with a blunt jaw designed to wrap rather than bite. The Wither Head is the smallest, almost understated, positioned lowest of the four — and the most corrosive.

It hunts from altitude. The gaze has range. The venom has patience. The coil has inevitability.

**What Hunters Notice First:**
- Stone walls with long vertical streaks of melted and re-hardened material — acid scoring that runs top to bottom
- The silence: ruins that should have wildlife feel evacuated
- Shed scale segments as long as a forearm, with a faint acid smell
- At night, four faint reflective gleams in the canopy — the Gaze Head, watching

**Core Puzzle:**
- Break the aerial advantage — while airborne above 30 ft, the Convergent Gaze cone extends to 45 ft and the gaze pressure is near-unavoidable. Destroying the Wings grounds the fight and cuts the signature's reach in half.
- Manage the gaze — Dazed hunters can't React. Stunned hunters lose their turn. Hunting blind (Averted Gaze) preserves your actions but strips attack accuracy. Every hunter chooses each round: risk the gaze or accept the disadvantage.
- Dismantle the heads — all four intact means the passive bonuses stack oppressively. Each broken head removes one attack vector permanently. Two broken heads triggers Berserk: AR drops, remaining heads fight with pure desperation.
- Prioritize the Wither Head early — AR corrosion applies for the whole fight. Let it spit twice at every hunter and the party is fighting in effectively one AR tier lower for the rest of the encounter.

---

## 2) Stat Block

### Attributes

| Stat | Score | Modifier |
|------|-------|----------|
| STR | 12 | +6 |
| DEX | 9 | +4 |
| CON | 11 | +5 |
| INT | 6 | +3 |
| INS | 10 | +5 |
| CHA | 9 | +4 |

### Combat Attributes

| Stat | Value | Notes |
|------|-------|-------|
| AR | 18 | Layered scale plates, thick neck frills |
| HP | 346 | Median 4P: TierBase (225) + CON (11) × 11 |
| Stamina | 21 | 10 + CON Score (11) |

> **GM Scaling Note:** HP 346 targets a median mixed party (HR 15–19). For an optimized synergized party, increase to **445** (TierBase 225 + CON 11 × 20). The Hydra Convergence loop needs at least 4 rounds to cycle through all four head vectors — if HP is too low, the Berserk state triggers before the party has felt the full oppressive phase.

| Movement | Value | Notes |
|----------|-------|-------|
| Ground | 25 ft | Serpentine body is slower on land |
| Flight | 50 ft | Powerful drake wings; burst capable |
| Climb | 30 ft | Scaled belly and hooked claws grip stone and bark |
| Airborne Tax | −1 STA/turn | If airborne at end of turn |
| Attacks/Turn | 3 | Drawn from intact heads each turn |

**Attack Roll Breakdown:**
- Biting heads (STR): `d20 + STR mod (+6) + Trained proficiency (+2) = d20+8`
- Wither Spit (INS): `d20 + INS mod (+5) + Trained proficiency (+2) = d20+7`

**Exhaustion Rule:**
- Cannot fly
- Convergent Gaze disabled
- Wing Surge disabled
- Neck Weave disabled
- Attacks reduced to 2/turn

### Senses

- Serpent Tongue Scent — 60 ft (tracks warm-blooded creatures through scent particles; functions in darkness and through light concealment)
- Tremorsense — 20 ft (detects ground movement; useful when grounded)
- Gaze Head — no range limit in line of sight (the Gaze Head never blinks and tracks all movement constantly)

---

## 3) Hydra Convergence (Passive — Always Active)

Each intact head grants a persistent benefit. As heads are broken, the Gorgonite loses that benefit permanently.

| Intact Head | Passive Benefit |
|-------------|-----------------|
| Venom Head | All attacks deal +1d4 bonus poison damage against Poisoned targets |
| Gaze Head | **Lingering Gaze:** at end of the Gorgonite's turn, one creature within 20 ft with line of sight makes an INS save DC 15 or is Dazed until end of their next turn |
| Crusher Head | Targets that fail their escape check against Crushing Coil take 1d8 bonus crushing damage |
| Wither Head | **Wither Aura:** creatures within 10 ft at the start of their turn take 1d4 acid damage |

**All Four Heads Intact:** +1 Power Die on the first attack each turn.

> This is the escalation passive. With all four heads, the Gorgonite is attacking four different systems simultaneously — venom pressure, gaze denial, coil isolation, and acid attrition. By 1 head broken it loses one system. By 2 heads broken it loses discipline entirely and enters Berserk state.

**Berserk State (2+ Heads Broken):**

When two or more heads are broken, the Gorgonite abandons coordinated behavior and thrashes with surviving heads in pure aggression:
- +1 damage die on all attacks
- −2 AR (reckless — the remaining necks thrash without guarding the body)
- All 3 attacks per turn target the same hunter (the closest or most injured)

> Breaking the Wings does not trigger Berserk. Wings are mobility, not identity. The Gorgonite's identity is its heads — and it knows when it is losing them.

---

## 4) Attacks

**Venom Fang — (1 Stamina)**
```
Type:    Melee (STR) — Venom Head
Attack:  d20+8
Damage:  3d10+6 poison/piercing
Rider:   CON Save DC 17
           Fail → Poisoned (1 turn)
           Already Poisoned → Poisoned extends to 2 turns total
```
> The fang doesn't lunge — it places itself. Then injects.

---

**Serpent's Eye — (1 Stamina)**
```
Type:    Gaze (INS) — Gaze Head, Range 30 ft, requires line of sight
Save:    INS Save DC 15
           Fail → Stunned until end of target's next turn
           (Stunned: cannot take Actions or Reactions; attacks against target have advantage)

Counter: A hunter may declare Averted Gaze (see Passive Traits) to be immune to this attack.
         Averting sacrifices attack accuracy for the round.
```
> The silver eyes don't move. The rest of the world moves around them.

---

**Crushing Coil — (1 Stamina)**
```
Type:    Melee (STR) — Crusher Head, Reach 15 ft
Attack:  d20+8
Damage:  3d8+6 bludgeoning
Rider:   STR Save DC 18
           Fail → Grappled + Restrained (Coiled)
           While Coiled: 2d6 crushing damage at start of each turn
           Escape: Action + STR check DC 18 OR 2 STA (Fast Action) STR check DC 18
```
> The Crusher Head does not bite. It wraps.

---

**Wither Spit — (1 Stamina)**
```
Type:    Ranged 30 ft (INS) — Wither Head
Attack:  d20+7
Damage:  3d8+5 acid
Rider:   CON Save DC 17
           Fail → AR −2 for remainder of encounter (armor corroded)
           One application per hunter — does not stack
           Cannot reduce a hunter's AR below 8
```
> The acid does not splash. It seeps. By the time a hunter notices, the work is done.

---

## 5) Special Abilities

**Convergent Gaze — (4 Stamina, Cooldown 3 Turns)**
```
Requires: Gaze Head intact.
Effect:   All intact heads orient simultaneously.
Area:     30 ft cone originating from the Gorgonite
Save:     INS Save DC 17
            Fail → 3d8 psychic damage + Stunned until end of target's next turn
            Success → Half damage, no Stunned

Aerial Escalation: If the Gorgonite is airborne at 40+ ft when it activates Convergent Gaze:
  — Cone extends to 45 ft
  — Stunned condition persists until the START of target's next turn
    (target is Stunned through their entire upcoming turn, not just until it ends)

Counter: Averted Gaze (see Passive Traits) grants full immunity to this ability.
         A hunter who averts BEFORE the cone resolves is unaffected.
```
> Every head stops being an individual. The gaze becomes singular and total.

---

**Wing Surge — (2 Stamina)**
```
Trigger: After making an attack or after being hit in melee.
Effect:  Move up to 30 ft (flight) without provoking opportunity attacks.
         May use to ascend, reposition between attacks, or exit melee range.
Limit:   Once per round. Disabled if Wings broken.
```
> It does not retreat. It repositions. There is a difference.

---

## 6) Reactions

**Neck Weave — (1 Stamina)**
```
Trigger: Gorgonite is hit by a melee attack.
Effect:  One intact head immediately retaliates with a free attack against the attacker.
         — Venom Head available: Venom Fang (d20+8, 3d10+6 + Poisoned save)
         — Crusher Head available: Crushing Coil (d20+8, 3d8+6 + Coil save)
         — Wither Head available: Wither Spit (d20+7, 3d8+5 + AR save)
         Gaze Head does not react with Neck Weave (Serpent's Eye is not reactive)
Limit:   Once per round. Disabled if only 1 head remains.
```
> Hitting one head teaches you nothing about where the others are.

---

## 7) Passive Traits

**Averted Gaze**

A hunter may declare they are averting their eyes at the start of their turn. While averting:
- Immune to Serpent's Eye, Lingering Gaze (passive), and Convergent Gaze for that round
- All attacks against the Gorgonite are at disadvantage (cannot track the heads accurately)
- Declaration lasts until the start of the hunter's next turn

> This is the fundamental choice of the Gorgonite fight. Eyes open: full accuracy, gaze risk. Eyes averted: no gaze threat, reduced damage. The party that coordinates — some open, some averted — maximizes DPR while managing Stunned pressure.

---

**Airborne Stamina Tax**

If the Gorgonite ends its turn in the air, it loses 1 Stamina. Aggressive Wing Surge use combined with Convergent Gaze activation burns through STA rapidly. A party that forces movement and denies landing space accelerates Exhaustion.

---

**Multi-Headed Awareness**

The Gorgonite cannot be flanked. Attacks do not gain flanking bonuses against it. Four heads covering every angle means there is no blind side.

---

**Serpentine Resilience**

The Gorgonite has resistance to Prone. Forced movement and knockdown effects require double the normal save failure margin to apply — any effect that would knock it Prone triggers a STR save DC 16 instead of applying automatically.

> A 25-foot serpentine body does not topple easily.

---

## 8) Part Breaks & Weaknesses

### Break Zones

> **★ marks the Impact Zone** — the only target that builds Hammer Impact. Accuracy tiers: Open (0) — large/diffuse | Standard (−2) — typical structure | Precise (−4) — small/fast/head

| Part | Accuracy | Threshold | Break Effect |
|------|----------|-----------|--------------|
| Venom Head ★ *(Impact Zone)* | Standard (−2) | 4 BP | Venom Fang disabled; +1d4 Hydra Convergence venom bonus lost; Neck Weave cannot use Venom Fang; break deals 2d10 bonus damage |
| Gaze Head | Standard (−2) | 3 hits | Serpent's Eye disabled; Convergent Gaze disabled; Lingering Gaze passive lost; break deals 2d10 bonus damage |
| Crusher Head | Standard (−2) | 3 hits | Crushing Coil disabled; Hydra Convergence Crusher passive lost; Neck Weave cannot use Crushing Coil; break deals 2d10 bonus damage |
| Wither Head | Standard (−2) | 3 hits | Wither Spit disabled; Wither Aura passive lost; Neck Weave cannot use Wither Spit; break deals 2d10 bonus damage |
| Wings | Open (0) | 3 hits | Flight disabled; Wing Surge disabled; Convergent Gaze cone reduced to 20 ft; Aerial Escalation unavailable |

### Tactical Weaknesses

- **Gaze Head first priority:** Destroys Convergent Gaze permanently and removes the Lingering Gaze passive. Hunters no longer need to choose between Averted Gaze and full accuracy. Eliminates the most disruptive tool in the Gorgonite's kit. Standard (−2) called shot but the payoff is the fight's single largest quality-of-life improvement.
- **Wither Head early priority:** Each Wither Spit hit applies permanent AR −2 for the encounter. In a 7-round fight, late Wither Head breaks mean 4+ rounds of reduced AR for every hunter. Destroying it early is armor preservation.
- **Wings for accessibility:** Wing break is Open (0) — easiest target. Grounds the fight, cuts Convergent Gaze cone from 45 ft to 20 ft, removes Wing Surge repositioning. Trade-off: does not trigger Berserk, so the party gets a safe window of grounded combat before going for the heads.
- **Averted Gaze + break coordination:** Hunters averting their eyes still deal damage at disadvantage. A party where two hunters avert (protecting against gaze) while two attack at full accuracy can break heads without being Stunned every round.
- **Crushing Coil counter:** Breaking the Crusher Head removes the Coil entirely. Until then: a Coiled hunter's allies should spend their Fast Action to assist the escape (lowering the STR check DC) rather than attacking — a Coiled hunter takes 2d6/turn and cannot move.
- **Neck Weave counter:** The reaction fires when hit in melee. Ranged hunters are entirely immune to Neck Weave. A party that keeps melee to one or two hunters while others attack from range limits how often Neck Weave triggers.
- **Water sources:** Neutralize Wither Aura temporarily (1 turn) and can slow the Wither Spit corrosion effect. Drawing the fight near a stream or pool denies the Wither Head its environmental pressure.

---

## 9) Behavior Guide

**Opening — Round 1 Priority:**
- Start airborne at 40–50 ft altitude.
- If 3+ hunters are clustered: **Convergent Gaze** immediately (45 ft aerial cone).
- If hunters are spread: **Wing Surge** to close range → Wither Spit (prioritize the most-armored hunter) + Venom Fang × 2.
- The Wither Head acts first among the three attacks used each round — begin AR corrosion as early as possible.

**Instinct Loop (All/Most Heads Intact, Above 40% HP):**
- Maintain altitude above 30 ft to keep Convergent Gaze's Aerial Escalation active
- Rotate three-head attack packages each round:
  - Package A (opener): Wither Spit → Venom Fang → Serpent's Eye
  - Package B (follow-up vs Poisoned target): Venom Fang × 2 → Crushing Coil
  - Package C (gaze pressure turn): Convergent Gaze → Venom Fang → Wing Surge (reposition)
- Lingering Gaze fires at end of turn — choose the hunter who successfully saved against Serpent's Eye
- Neck Weave fires on any melee hit — use whichever intact head the target is least prepared for
- Wither Spit targets each hunter exactly once across R1–R3 (spreading corrosion before any head breaks)

**If Wings Broken:**
- Grounds the fight. Transitions from aerial platform to committed ground assault.
- Convergent Gaze available but cone reduced to 20 ft — only uses it when hunters cluster within that range
- Wing Surge disabled; no longer repositions between attacks
- Crushing Coil becomes the primary control tool now that range is lost — fight becomes more physical

**If Gaze Head Broken:**
- Convergent Gaze permanently disabled. Significant loss.
- Shifts entirely to physical attrition: Venom Fang → Crushing Coil combo
- Priority: establish Coil on the most injured hunter, then Venom Fang repeatedly while they're Restrained
- Neck Weave shifts to Crusher or Wither depending on remaining heads

**If Berserk (2+ Heads Broken):**
- Abandons target rotation and tactical positioning entirely
- All 3 attacks per turn on one hunter — the closest or lowest HP
- No Wing Surge — pure aggression, doesn't leave melee
- No longer uses Convergent Gaze tactically — fires on cooldown even without favorable cone positioning
- Remaining Lingering Gaze passive still fires at end of turn

**Below 25% HP:**
- No longer tracks priority targets — attacks whoever is adjacent
- Convergent Gaze fires on cooldown regardless of clustering
- Neck Weave fires on every melee hit without hesitation

**At 0 Stamina — Exhausted:**
- Falls to ground immediately (cannot fly)
- Convergent Gaze disabled; Wing Surge disabled; Neck Weave disabled
- Attacks reduce to 2/turn: Venom Fang + whichever remaining head is available
- Wither Aura and Lingering Gaze passives remain active (passive, not Stamina-dependent)

**Loop:** Aerial Gaze → Venom Pressure → Coil Isolation → Acid Attrition → Repeat

---

## 10) Encounter Packaging

**Recommended Arena:** A ruined structure partially consumed by forest growth — collapsed archways, crumbling tower sections, stone platforms at 10 ft and 20 ft elevation. The Gorgonite's lair shows years of Wither Spit acid scoring on the stone: long vertical streaks of melted and re-hardened material. Bones of old prey are scattered at the base of the ruin. The stonework is aesthetically wrong — too smooth in places, with flowing shapes where solid masonry should be angular. The arena is shaped by the creature before the fight starts.

**Environmental Synergy:**
- Elevated stone platforms: hunters who gain height (10–20 ft) force the Gorgonite to fly lower or adjust cone angles for Convergent Gaze — partially countering the aerial escalation without Wing break
- Acid-scored walls: walls that have been hit repeatedly by Wither Spit are structurally weakened. A sufficiently powerful strike (Tremor Strike, hammer Charged Smash) can collapse a section, creating new difficult terrain mid-fight
- Forest canopy: partial cover against Convergent Gaze (targets behind trunk and heavy branch cover have advantage on INS saves vs the gaze if the cone has to pass through dense foliage)
- Water (stream, pool at ruin edge): neutralizes Wither Aura for 1 turn if a hunter moves through it; also suppresses Poisoned condition riders briefly

**Mid-Fight Shifts:**
1. Wings broken — the aerial phase ends. The fight transitions from "track the sky and manage gaze angles" to "committed ground brawl in a ruined space." Hunters gain full melee access. The Gorgonite's Convergent Gaze is still available but dramatically shorter range.
2. First head broken — the first crack in the Hydra Convergence. The party sees a neck go still and knows the attack vector is gone. One more head break triggers Berserk — the next break is the critical decision: push for Berserk (easier to kill but more dangerous) or slow down and break the remaining heads more carefully.
3. Berserk trigger — the Gorgonite stops being tactical. The remaining heads thrash at one target with full fury. This is the most dangerous phase for whichever hunter is closest — but the rest of the party has full accuracy and a predictable target.

**Scaling Notes:**
- Weak party: Remove Lingering Gaze passive from Hydra Convergence (gaze pressure only from active Serpent's Eye); reduce Wither Spit AR debuff to −1 instead of −2
- Strong party: Reduce Convergent Gaze cooldown to 2 turns; increase Wither Aura radius to 15 ft

---

## 11) Loot & Crafting

### A) Loot Table

| Drop | Chance | Use |
|------|--------|-----|
| Gorgonite Scale | 65% | Armor plating, acid/poison resistance |
| Gaze Membrane | 50% | Gaze interaction effects, INS-save riders |
| Venom Chelicerae | 40% | Weapon venom escalation, Poisoned riders |
| Wither Gland *(Rare)* | 15% | Required for Rare Effects & Signature Crafts |

> Drop rates follow T4 rare part scarcity. Wither Gland at 15% — if your table consistently targets and breaks the Wither Head, consider reducing to 10%.

---

### B) Craft Themes

- Gaze interaction (Stunned/Dazed riders, INS save pressure, awareness effects)
- Venom escalation and Poisoned condition layering
- Acid corrosion (AR debuff, armor penetration)
- Reactive multi-strike (Neck Weave expression, counter-attack on hit)

> If an effect does not relate to these four themes — it does not belong here.

---

### C) Material Interaction Profiles

**Weapon Bias**

| Material | Bias | Expression |
|----------|------|------------|
| Metal | Control / Precision | Gaze interruption, Stunned riders, anti-repositioning, sight-line manipulation |
| Bone / Hide | Aggression / Venom | Poison escalation, +damage vs Poisoned targets, pursuit bonuses |
| Stone / Crystal | Reactive / Counter | Neck Weave expression (counter-strike on hit), acid burst, retaliatory damage riders |

**Armor Bias**

| Material | Bias | Expression |
|----------|------|------------|
| Metal | Stability | Acid resistance, AR corrosion mitigation, anti-Grapple passives |
| Hide / Bone | Mobility | Gaze avoidance bonuses, Coil escape assists, poison resistance |
| Cloth / Membrane | Stamina / Evasion | Reduce STA cost of Averted Gaze disadvantage recovery, INS save bonuses, gaze-partial immunity |

> No material modifies base AR beyond weight class.

---

### D) Effect Tables

**Common Weapon Effects** *(GM chooses 1)*

**Venom Channel**
On hit against a Poisoned target, deal +1d6 bonus poison damage. *(Passive — direct expression of the Gorgonite's Hydra Convergence venom synergy. Rewards establishing Poisoned before the heavy hit.)*

**Counter Fang**
Once per round when you are hit by a melee attack, your next attack against that creature this turn deals +1d8 bonus damage. *(Passive — mirrors Neck Weave. Rewards staying in melee and retaliating.)*

---

**Rare Weapon Effects** *(Rare part required — GM chooses 1)*

**Gaze Lock** *(1/Combat)*
On hit, the target must make an INS save (DC = weapon DC) or be Stunned until end of their next turn. *(Active — weaponizes the Gorgonite's signature gaze condition. Costs an action economy investment.)*

**Wither Edge** *(1 STA)*
On hit, the target's AR is reduced by 1 until the end of the encounter (armor corroded by acid). Does not stack — one application per target. *(Active — mirrors Wither Spit. Significant in extended fights.)*

---

**Common Armor Effects** *(GM chooses 1)*

**Gaze Brace**
When you fail a save against a Stunned or Dazed condition, reduce the duration by 1 round (minimum 0). *(Passive — softens the worst outcomes of gaze exposure without removing the risk.)*

**Acid Seal**
When your AR would be reduced by an acid or corrosive effect, make a CON save (DC 14). On success, negate the AR reduction. *(Passive — direct counter to Wither Spit corrosion.)*

---

**Rare Armor Effects** *(Rare part required — GM chooses 1)*

**Serpent's Blind** *(Passive)*
You are immune to the Stunned condition from gaze-based attacks. Averted Gaze costs you nothing — you can avert without disadvantage on your attacks. *(Game-changing passive — completely removes the gaze dilemma for one hunter. Lets them ignore Convergent Gaze and Serpent's Eye entirely.)*

---

### E) Weapon Archetype Translation (Poison / Acid)

| Weapon | Translation |
|--------|-------------|
| Bow | **Gaze Arrow** *(2 uses/hunt)*: On hit, target makes INS save vs Bow DC or is Dazed until end of their next turn (partial gaze effect). Rare Gaze Lock → **Stun Arrow** (2/hunt): On hit, INS save vs Bow DC or Stunned 1 turn. |
| Wand | **Venom Cluster Wand** — Poison damage type. Hex: **Venom Hex** — clusters seep toxin on contact. On detonate: CON save vs Wand DC → fail → Poisoned (1 turn). While Poisoned, Scorch tick deals +1 damage per turn. |
| Conduit | **Wither Field Conduit** — Acid Aspect: **Wither Field**. Enemies starting their turn inside the Field make a CON save vs Conduit DC or their next attack deals −1d4 damage (acid on hands and equipment). |
| Flute | **Ballad: "The Serpent's Chorus"** — While active, allies within aura who hit a Poisoned target regain 1 STA (the venom energizes the hunting pack). Standard activation and sustain rules. |
| Hunting Flute | **Ballad: "Eyes Closed, Hearts Open"** — While active, allies within aura who use Averted Gaze do not suffer disadvantage on their first attack each round. *(Thematic — turns the avoidance tax into a supported team posture.)* |

---

### F) Signature Crafts *(Drake — multiple allowed; Wither Gland required for each)*

---

**Signature 1 — Convergent Blade** *(Any weapon — Wither Gland required)*

**Acid Bite:** Your attacks with this weapon deal acid damage. On hit, target makes CON save (DC = weapon DC) or AR −1 until end of encounter (max −2 per target, does not stack beyond two applications).

**Gaze Rider** (Passive): Once per round, on a hit, the target must make an INS save (DC = weapon DC) or be Dazed until end of their next turn.

> Cannot stack with other Rare weapon effects. The blade carries both the corrosive identity and the gaze pressure — the Gorgonite distilled into a weapon.

---

**Signature 2 — Gorgonite Scale Armor** *(Heavy Armor — Wither Gland required)*

AR +5.

**Serpent's Blind** *(Passive)*: You are immune to the Stunned condition from gaze-based attacks. Using Averted Gaze imposes no disadvantage on your attacks. You can look directly into the Gorgonite's gaze — and anything else that uses it.

**Acid Shell** *(Passive)*: Acid and poison damage you take is reduced by 3.

> Cannot stack with other Rare armor effects. The armor does not just protect against the Gorgonite. It makes the wearer into something the Gorgonite cannot stop.

---

## 12) Hooks

**The Stone Garden**
An expedition to map an ancient ruin returned with one survivor — silent, uninjured, refusing to speak about what happened to the others. The ruin's location is known. Whatever is in there is still in there.

**The Corroded Road**
A trade route through the deep forest has become impassable. Not blocked — dissolved. Stone bridges, road markers, and a section of old wall have been eaten through by something acidic. The trail of damage leads toward the ruins. Something large is expanding its territory.

**The Second Head**
A Gorgonite with only two intact heads has been spotted at the forest edge — grounded, moving slowly, clearly damaged. Wounded prey is still dangerous prey. The question is what wounded it and whether that thing is still in the forest.

**The Nested Pair**
The ruins contain two Gorgonites. Not aggressive toward each other — nesting. The acid scoring on the walls is twice as dense as any single creature would produce. A mated pair means twice the gaze vectors, twice the venom pressure, and a territorial aggression neither would show alone.
