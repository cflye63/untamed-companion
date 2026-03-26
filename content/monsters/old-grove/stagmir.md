# STAGMIR — The Grovefather

**Classification:** Elder Beast (Apex)
**Tier:** 3
**Biome Zones:** Old Grove, Verdant Hollow, Sunken Caverns
**Element:** Earth (Root)

**Tagline:** "A living embodiment of the forest whose awakening reshapes the battlefield itself."

**Appears when:**
- Sacred trees are burned
- Pollination networks are destroyed
- Multiple Elder or Apex creatures are slain
- Caverns or waterways are polluted

Normally dormant within the Old Grove. Most hunters never see Stagmir awake.

---

## 1) Field Notes

Stagmir is not simply a creature. It is the living equilibrium of the forest. Ancient antlers woven with vines and moss crown its massive form. Where it walks, flowers bloom and roots spread beneath the soil.

Most hunters never see Stagmir awake. But when the forest is dishonored, the Grovefather rises. The hunt becomes a trial of survival rather than conquest.

**What Hunters Notice First:**
- Sudden overgrowth across familiar paths
- Wildlife fleeing the grove
- Massive hoofprints filled with blooming moss

**Core Puzzle:**
- Terrain domination, root-based battlefield control, and environmental punishment for reckless hunters
- Breaking its Antler Crown reduces its control over the grove; breaking its Root Network weakens its ability to punish repositioning hunters

---

## 2) Stat Block

### Attributes

| Stat | Score | Modifier |
|------|-------|----------|
| STR | 10 | +5 |
| DEX | 5 | +2 |
| CON | 11 | +5 |
| INT | 6 | +3 |
| INS | 10 | +5 |
| CHA | 11 | +5 |

> **Audit Note:** CON and CHA each corrected from 14/12 to 11, matching the T3 stat cap (6–11). All derived values cascade from these corrected scores.

### Combat Attributes

| Stat | Value | Notes |
|------|-------|-------|
| AR | 16 | Bark-layered hide and vine plating |
| HP | 241 | 4P median: TierBase (120) + CON (11) × 11 |
| Stamina | 21 | 10 + CON Score (11) |

> **GM Scaling Note:** HP 241 targets a median party (mixed builds, HR 10–12 range).
> For optimized parties: HP → **340** (TierBase 120 + CON 11 × 20). Stagmir's terrain loop (Verdant Throne + Rootquake + Verdant Cataclysm) needs at least 4 rounds to execute its full puzzle — at HP 241 this is achievable; at HP 340 the fight extends into the control-and-renewal phase where Stagmir's Apex identity fully expresses. Cataclysm and Renewal both auto-trigger at 0 Stamina cost, ensuring they fire regardless of combat pressure.

| Movement | 30 ft ground | — |
|----------|-------------|---|
| Attacks/Turn | 3 | — |

> **Apex Note:** Stagmir uses 3 attacks/turn rather than the T3 standard of 4. The Verdant Throne passive (root saves triggered once per round per creature within 15 ft) functions as a fourth pressure vector — it taxes hunter action economy without using Stagmir's attack budget. This is intentional Apex design.

**Attack Roll Breakdown:** `d20 + STR mod (+5) + Trained proficiency (+2) = d20+7`

**Exhaustion Rule:**
- Root control weakens — Verdant Throne passive stops
- Movement halved (15 ft)
- Cannot use Rootquake

### Senses

- Tremorsense 60 ft (through root networks and living soil only)
- Detects movement through connected vegetation — ineffective on bare stone or elevated platforms
- Cannot be surprised inside Old Grove sectors

---

## 3) Attacks

**Antler Gore — (1 Stamina)**
```
Type:    Melee (STR)
Attack:  d20+7
Damage:  2d10+5
Rider:   If target is adjacent to vegetation: STR Save DC 15 → Fail: Restrained (1 turn)
```

**Hoof Kick — (1 Stamina)**
```
Type:    Melee (STR)
Attack:  d20+7
Damage:  2d8+5
Rider:   DEX Save DC 15 → Fail: Knocked back 10 ft and lose 1 Stamina
```

---

## 4) Special Abilities

**Rootquake — (3 Stamina, Cooldown 2 turns)**
```
Area:    30 ft shockwave centered on Stagmir
Damage:  2d8+5
Save:    STR or CON DC 15
Fail →   Prone
```
> The earth buckles and root-tendrils erupt through the soil. Hunters near vegetation have nowhere to brace.

---

**Nature's Judgement — (3 Stamina)**
```
Type:    Ranged 90 ft
Attack:  d20+7  (INS-based)
Damage:  3d10+5
Rider:   If target harmed flora or beasts earlier in this hunt:
         attack deals +1d10 damage (conditional ceiling touch — gate is hunt-history, not combat state)
```
> The forest remembers every wound dealt to it. Stagmir is merely its instrument.

---

**Verdant Throne — (Passive Aura)**
```
Radius:  15 ft around Stagmir
Trigger: Once per round per creature inside the radius
Save:    DEX or INS DC 15
Fail →   Restrained by roots (1 turn)
```
> Roots writhe underfoot wherever the Grovefather walks. Standing still invites the grove to claim you.

> **Note:** This aura does NOT apply to targets already Restrained or Root-Caged this round. A hunter caught once per round is the intent — not double-stacking immobility conditions.

---

**Renewal — (0 Stamina, 1/Combat)**
```
Trigger: Below 30% HP (automatic, cannot be delayed, costs no Stamina)
Effect:  Stagmir heals 3d12+5 HP, then regains 1d10 Stamina
```
> Roots wrap the body and flowers bloom instantly. The forest reclaims its own.

---

**Verdant Cataclysm — (0 Stamina, 1/Combat)**
```
Trigger:  Below 50% HP (automatic, cannot be delayed, costs no Stamina)
Duration: 2 rounds
Effect:   Entire arena becomes difficult terrain
          At the start of each hunter's turn:
          DEX Save DC 16 → Fail: Root-Caged (immobilized until end of that hunter's next turn)

Wispform Rider (same activation, 0 additional Stamina):
          The round Cataclysm activates, Stagmir flickers into spirit-form.
          - Immune to weapon damage this round
          - May move through terrain and creatures freely this round
          - Cannot make attacks or use abilities during the spirit-form round
          Returns to physical form at the start of its next turn.
```
> The grove erupts. The fight is no longer in a forest — it is inside a living thing. As the roots tear through the earth, Stagmir dissolves between them — untouchable for one breath before re-emerging at a position of its choosing.

---

## 5) Reactions

**Root Guard — (1 Stamina)**
```
Trigger:  An ally creature within 10 ft is targeted by an attack
Effect:   Roots erupt between attacker and target.
          Attacker must make STR Save DC 15 → Fail: disadvantage on that attack roll
Limit:    1 reaction per round
```

---

## 6) Passive Traits

**Grove Sovereignty**

Inside Old Grove sectors, Stagmir gains:
- +2 Stamina recovery each round (in addition to normal recovery)
- Advantage on saves vs forced movement

> This passive weakens or disappears entirely if the fight is drawn outside the Old Grove's borders.

**Living Terrain**

Vegetation near Stagmir counts as difficult terrain for enemies only. This applies to any square with roots, moss, or undergrowth within 20 ft of Stagmir's current position.

---

## 7) Part Breaks & Weaknesses

### Break Zones

| Part | Accuracy | Threshold | Break Effect |
|------|----------|-----------|--------------|
| Antler Crown ★ *(Impact Zone)* | Standard (−2) | 3 called-shot hits | Nature's Judgement damage reduced by 1 die (3d10+5 → 2d10+5). Verdant Cataclysm duration reduced from 2 rounds to 1 round. |
| Root Aura | Open (0) | 2 hits (any type) | Verdant Throne radius reduced from 15 ft to 5 ft. Most hunters can step out rather than save. |
| Root Network | Standard (−2) | 2 called-shot hits | Rootquake cooldown increases from 2 turns to 3 turns. Living Terrain passive radius reduced from 20 ft to 10 ft. |

### Tactical Weaknesses

- **Fire damage:** Weakens vegetation within Living Terrain — if Stagmir takes 8+ fire damage in a single round, Living Terrain is suppressed for 1 round (difficult terrain clears temporarily)
- **Elevation:** Stagmir's Tremorsense cannot detect elevated hunters. Breaking line-of-sight via elevated platforms or cliff faces removes Stagmir's awareness advantage
- **Fighting outside natural terrain:** Both Grove Sovereignty and Living Terrain require vegetation — pulling the fight to bare stone, riverbank sand, or cave floor strips passive pressure
- **Antler Crown priority:** Nature's Judgement and Verdant Cataclysm are Stagmir's most dangerous abilities — breaking the Crown simultaneously nerfs both

---

## 8) Behavior Guide

**Opening State:** Stagmir observes hunters first. It does not charge — it assesses. If hunters act aggressively within 1 round, it responds with Rootquake to establish territory, followed by Antler Gore on the closest clustered hunter.

**Round 1 Priority:**
- If 2+ hunters within 15 ft (Verdant Throne range): hold position, let aura proc, then Antler Gore × 2 on the nearest hunter
- If hunters spread out immediately: close distance to bring more into Verdant Throne radius

**Instinct Loop (Above 50% HP):**
- Maintain Verdant Throne pressure by not moving unnecessarily — staying still keeps more hunters in the 15 ft aura
- Rootquake every 3 turns (accounting for 2-turn cooldown) to reset prone positions
- Antler Gore targeting hunters who are adjacent to vegetation (Restrained rider active)
- Nature's Judgement on hunters who have triggered the hunt condition (harmed flora/beasts)

**At 50% HP:**
- Verdant Cataclysm (1/Combat) — triggers automatically at no Stamina cost. The difficult terrain + Root-Caged conditions activate immediately; Stagmir uses the Wispform rider to reposition safely during the transition

**At 30% HP:**
- Renewal triggers automatically — Stagmir does not delay this
- After Renewal, resume Instinct Loop with recovered HP and Stamina

**Root Network broken:**
- Rootquake frequency drops — Stagmir becomes more reliant on Verdant Throne and direct attacks
- Shifts toward staying in one position to maximize Throne radius uptime

**At 0 Stamina — Exhausted:**
- Verdant Throne stops
- Movement halved (15 ft)
- Continues Antler Gore + Hoof Kick but at reduced threat level
- Cannot use Rootquake

**Loop:** Control → Punish → Restore → Control

---

## 9) Encounter Packaging

**Recommended Arena:** Old Grove sector — large clearings ringed by ancient trees, thick root walls forming natural barriers, elevated root platforms accessible to hunters willing to sacrifice Verdant Throne immunity. Some bare stone or water patches at the edges (counters Living Terrain).

**Environmental Synergy:**
- Root walls: natural cover that also counts as vegetation (triggers Antler Gore Restrained rider)
- Elevated platforms: safe from Verdant Throne aura; tradeoff is Stagmir can't follow
- Clearing center: optimal for melee (no difficult terrain from Living Terrain) but fully inside Verdant Throne radius

**Mid-Fight Shifts:**
1. Verdant Cataclysm (50% HP) — the entire arena shifts. Hunters who didn't position on elevated terrain are now rolling DEX saves every round and fighting through difficult terrain. This is the fight's turning point.
2. Renewal (30% HP) — Stagmir rises. If the party didn't break the Antler Crown before Renewal, Nature's Judgement is still at full power during the desperate finish.

**Scaling Notes:**
- Weak party: Reduce Verdant Throne radius to 10 ft; Verdant Cataclysm lasts 1 round; remove +1d10 conditional on Nature's Judgement
- Strong party: Add a second Root Aura (re-grows after 2 rounds if not broken again); Rootquake hits entire 30 ft regardless of obstruction

---

## 10) Loot & Crafting

### A) Loot Table

| Drop | Chance | Use |
|------|--------|-----|
| Stagmir Antler Core | 40% | Rare weapon and armor effects, control riders |
| Verdant Essence | 30% | Healing effects, Stamina recovery tools |
| Heartwood Bark | 30% | AR-adjacent effects, terrain manipulation |
| Elder Grove Seed *(Rare)* | 20% | Required for Rare Effects & Signature Crafts |

---

### B) Craft Themes

- Root control and movement denial
- Terrain manipulation and difficult terrain generation
- Stamina recovery and healing support
- Forced repositioning resistance

> If an effect does not relate to these four themes — it does not belong here.

---

### C) Material Interaction Profiles

**Weapon Bias**

| Material | Bias | Expression |
|----------|------|-----------|
| Metal | Control / Structure | Restrained riders, movement interrupts, forced position anchors |
| Bone / Hide | Nature / Pressure | Damage bonuses vs Restrained targets, pursuit-after-root riders |
| Stone / Crystal | Resonant / Terrain | Root burst on detonation, difficult terrain zone creation |

**Armor Bias**

| Material | Bias | Expression |
|----------|------|-----------|
| Metal | Stability | Forced movement resistance, root-anchor passives |
| Hide / Bone | Mobility | Anti-difficult-terrain movement, root-escape reactions |
| Cloth / Membrane | Stamina / Positioning | Stamina recovery on controlled turns, aura-assist effects |

> No material modifies base AR beyond weight class.

---

### D) Effect Tables

**Common Weapon Effects** *(GM chooses 1)*

**Root Catch**
Once per turn, when you hit a creature that hasn't moved this round, they must succeed a STR save (DC = weapon DC) or lose 5 ft of movement until end of their next turn. *(Passive rider — no additional action cost.)*

**Bark Bite**
When you hit a creature that is already Restrained, deal +1d4 bonus damage. *(Passive — triggers on Restrained state regardless of source.)*

---

**Rare Weapon Effects** *(Rare part required — GM chooses 1)*

**Nature's Reach** *(1/Combat)*
On hit, roots erupt in a 5-ft radius around the target. That area becomes difficult terrain until end of combat. Creatures entering or starting in this zone must succeed a STR save (DC = weapon DC) or have their movement reduced by 5 ft until end of their next turn.

**Verdant Strike** *(1 STA, 1/Combat)*
On hit, the target must succeed a STR save (DC = weapon DC) or be Restrained until the end of their next turn. *(Direct Restrained application — strongest single control rider in the Stagmir kit.)*

---

**Common Armor Effects** *(GM chooses 1)*

**Root Brace**
While you have not moved this turn, reduce incoming forced movement by 5 ft. *(Passive — rewards holding position.)*

**Verdant Footing**
Difficult terrain costs you nothing extra to move through, as long as that terrain was created by vegetation, roots, or earth effects. *(Does not apply to ice, water, or magical difficult terrain.)*

---

**Rare Armor Effects** *(Rare part required — GM chooses 1)*

**Living Bark** *(1/Combat)*
For 1 round: you cannot be forcibly moved, and the first attack that hits you this round deals half damage. At end of duration: you are Slowed (–10 ft movement) until end of your next turn — the bark locks your own movement briefly as it releases.

**Root Recovery**
When you take a Breathing Turn, you may remove one Restrained or Slowed condition on yourself as part of the recovery. The grove releases its grip when you surrender your tempo.

---

### E) Archetype Translation (Earth — Root)

| Weapon | Translation |
|--------|------------|
| Wand | **Groveweave Rod** — Grants Earth Affinity (Root). Hex: **Rootcharge** — clusters pulse with root energy, dealing Earth (piercing) damage on detonation. Detonate → CON save vs Wand DC → fail → **Restrained** (1 turn, roots seize the target). Replaces standard Hex Charge fire expression. Visual: vines grow from cluster contact points; roots burst upward on detonation, not fire. |
| Conduit | **Verdant Warden Conduit** — Grants Earth Aspect: **Entangle Field**. The Field becomes difficult terrain for enemies (roots writhe underfoot). Enemies who end their turn in the Field must succeed a STR save vs Conduit DC or lose –5 ft of movement until end of their next turn. No extra damage. No radius modification beyond standard Field rules. |
| Bow | **Root Shaft Arrow** *(2 uses/hunt)* — On hit: target must succeed a STR save vs Bow DC or have movement halved until end of their next turn (roots trail the arrow on impact). Integrated into Arrow Swap system normally. If the target is already Restrained when hit, the Root Shaft extends the Restrained duration by 1 round instead of applying movement halving. |
| Flute | **Verdant Ballad: "The Grove Remembers"** — While active: once per round, when an enemy inside the Flute's aura (30 ft) moves more than 20 ft in a single turn, they must succeed a STR save vs Flute DC or their remaining movement this turn becomes 0 (the grove's memory pulls them back). Aura expression — passive trigger on enemy movement, not an active targeting effect. Delivered via standard Ballad activation and sustain rules at the same mechanical strength. |

---

### F) Signature Crafts *(Apex — multiple allowed; Rare part required for each)*

---

**Signature 1 — Mantle of the Verdant Throne** *(Armor — choose weight class at craft)*

Grants Earth (Root) Affinity to the wearer's passive.

*Light Variant:*
AR +3. **Root Evasion** *(Reaction, 1 STA):* When targeted by an attack, move up to 15 ft before the attack resolves. If you leave the attacker's reach, the attack misses automatically.

*Medium Variant:*
AR +4. **Rooted Patience:** If you take no Attack action this turn, regain 1 Stamina at end of your turn.

*Heavy Variant:*
AR +5. **Immovable Grove** *(1/Combat):* For 1 round, you cannot be forcibly moved by any effect. Incoming Restrained or Root-Caged conditions fail automatically. At end of duration: you are Slowed (–10 ft) for 1 round.

> Cannot stack with other Rare armor effects. Cannot combine Signature armor with a second Signature.

---

**Signature 2 — Rootcaller's Judgment** *(Spear & Shield only)*

**On Block:** Roots erupt from your shield arm. Allies within 10 ft gain +1 AR until the start of your next turn (root walls provide momentary cover). Once per round.

**On hit:** STR Save vs your weapon DC → fail → **Restrained** (1 turn).

> Cannot stack with other Rare weapon effects.

---

**Signature 3 — Heartwood Recurve** *(Bow only)*

**On hit:** DEX Save vs your Bow DC → fail → movement halved until end of target's next turn.

**Living Grove** *(1/Hunt):* As an Action, create a 15 ft radius Verdant Zone centered on a point within 60 ft. For 3 rounds: allies inside the zone who take a Breathing Turn recover +2 additional Stamina (+6 total). Enemies entering the zone must pass DEX Save vs Bow DC or move at half speed through it.

> Cannot stack with other Rare weapon effects.

---

**Signature 4 — Verdant Echo Rod** *(Wand only)*

Grants Earth Affinity (Root). Replaces standard Hex Charge expression with **Rootcharge** (see Archetype Translation above).

**Verdant Bloom** *(passive modification to Rootcharge detonation):* When you detonate clusters, a 5 ft radius Bloom Zone forms at each detonation site until end of round. Allies inside a Bloom Zone regain 1 Stamina. Enemies inside suffer −1 to DEX saves until end of their next turn.

> Cannot stack with other Rare weapon effects.

---

## 11) Hooks

**The Grove Awakens**
Hunters have angered the forest. Stagmir walks. The guild contract is real, but no one in the village will tell you *why* the grove was disturbed.

**The Silent Grove**
The Old Grove has gone silent. Stagmir is missing — and something in the caverns beneath is to blame. This may not be a hunting contract. It may be a rescue.

**The Broken Antler**
A fragment of Stagmir's antler has appeared on the black market. Something has wounded the Grovefather. Whoever did it either fled — or didn't survive to sell the piece themselves.

**The Verdant Trial**
A druidic circle demands hunters face Stagmir — not to kill it, but to prove their worth to the forest. The conditions for victory are not what the hunters expect.
