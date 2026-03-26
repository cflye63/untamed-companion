# LADON — Temple Coil of Miru

**Classification:** Leviathan
**Tier:** 3
**Biome Zones:** Lake Miru (Temple Basin), River Basin (Flood Season — rare)
**Element:** Water

**Tagline:** "A sacred constrictor that binds intruders in crushing coils before dragging them beneath the lake to drown."

**Appears when:**
- Temple relics are disturbed
- Sacred waters are polluted
- Large structures collapse into the basin

Normally dormant beneath Lake Miru's temple basin. Most hunters never see Ladon in motion.

---

## 1) Field Notes

Beneath the drowned temples of Lake Miru coils an ancient serpent known as Ladon.

Unlike other leviathans, Ladon does not hunt for sustenance. It guards the sacred basin, removing trespassers with methodical precision.

Hunters rarely die from Ladon's bite. They die from the water. Once Ladon's coils tighten, victims are dragged below the surface where panic and exhaustion finish the hunt.

**What Hunters Notice First:**
- Sudden circular ripples on otherwise calm water
- Temple stones shifting beneath the surface
- Deep currents pulling toward the basin center

**Core Puzzle:**
- Grapple pressure — Ladon seizes hunters and holds them while the water does the work
- Forced movement into deep water drains breath and Stamina simultaneously
- Breaking the Mid-Coil segment weakens Ladon's grip; breaking the Head Crest silences its venom

---

## 2) Stat Block

### Attributes

| Stat | Score | Modifier |
|------|-------|----------|
| STR | 11 | +5 |
| DEX | 7 | +3 |
| CON | 11 | +5 |
| INT | 4 | +2 |
| INS | 9 | +4 |
| CHA | 5 | +2 |

> **Audit Note:** STR corrected from 12 to 11, CON corrected from 13 to 11, matching the T3 stat cap (6–11). All derived values cascade from corrected scores.

### Combat Attributes

| Stat | Value | Notes |
|------|-------|-------|
| AR | 16 | Scale-plated hide, water resistance |
| HP | 340 | Optimized 4P: TierBase (120) + CON (11) × 20 |
| Stamina | 21 | 10 + CON Score (11) |

> **GM Scaling Note:** HP 340 targets an optimized party (synergized builds, HR 10–12). For median mixed parties, reduce to 241 (TierBase 120 + CON 11 × 11). Ladon's grapple loop — Coil → Drag → Maelstrom — needs at least 5 rounds to fully execute its puzzle.

| Movement | Value | Notes |
|----------|-------|-------|
| Swim | 50 ft | — |
| Shore | 20 ft | — |
| Attacks/Turn | 3 | Drown Drag functions as the implicit 4th action when a target is Grappled — see Behavior Guide |

**Attack Roll Breakdown:** `d20 + STR mod (+5) + Trained proficiency (+2) = d20+7`

**Exhaustion Rule:**
- Cannot submerge freely
- Sacred Maelstrom disabled
- Swim speed reduced to 30 ft

### Senses

- Vibration sense 60 ft through water (detects any movement in contact with the water surface or body)
- Blind beyond the murk of the temple basin without water contact
- Cannot be surprised inside Lake Miru sectors

---

## 3) Underwater Combat Note

This fight takes place under or at the edge of the Lake Miru temple basin. The following underwater combat rules apply throughout.

**Passive Stamina Drain:** Each turn a hunter spends fully submerged costs +1 Stamina (breath control, pressure, drag). Adapted gear removes this.

**Breath Timer:** Hunters can hold their breath for `1 + CON modifier` turns. Surfacing resets the timer instantly.

**At 0 Breath:**
- Lose 5 Stamina per turn
- If Stamina hits 0 → lose HP equal to CON modifier per turn

**Movement Underwater:** All movement costs +1 Stamina. Dashing costs 2× Stamina. Upward and downward movement costs the same as horizontal.

**3D Positioning:** A creature above you in the water column has leverage. It gains advantage on shove and grapple attempts; you have disadvantage on escape attempts.

**Weapon Adjustments:**
- Slashing: −1 damage (drag)
- Piercing: +1 damage (ideal underwater)
- Bludgeoning: no change (water transmits force well)
- Ranged (bows, thrown): fail beyond 5 ft unless specialized

**Elemental Adjustments:**
- Fire effects fail
- Lightning spreads — GM option: +1 die, reduced range
- Water effects may gain +1 die or +1 DC (GM-interpretive)

---

## 4) Attacks

**Crushing Coil — (1 Stamina)**
```
Type:    Melee (STR)
Attack:  d20+7
Damage:  3d8+5
Rider:   Target becomes Grappled.
         If target already Grappled → becomes Restrained instead.
Escape:  STR check DC 17
```

**Temple Slam — (1 Stamina)**
```
Type:    Melee (STR)
Attack:  d20+7
Damage:  2d10+5
Rider:   Push target 10 ft.
         If target collides with temple stone or pillar → +1d8 damage.
```

**Venom Exhale — (1 Stamina)**
```
Type:    15 ft cone across water surface
Save:    CON DC 16
Damage:  2d8+5 poison
Fail →   Poisoned (1 turn) + –1 Stamina recovery next turn
```

---

## 5) Special Abilities

**Drown Drag — (1 Stamina)**
```
Requires:  Target is Grappled
Effect:    Pull target 20 ft toward deep water.
           If target ends submerged:
             • Breath timer begins (if not already tracking)
             • CON Save DC 17
               Fail → Lose 1 Stamina (additional, on top of passive underwater drain)
Limit:     Once per round per target.
```
> The coils compress the chest. The water fills the gap. Every failed save brings the bottom closer.

> **3D Positioning note:** If Ladon is above the dragged target in the water column, the target has disadvantage on their escape attempt (STR check DC 17). Ladon almost always drags downward — position Ladon accordingly.

---

**Sacred Maelstrom — (4 Stamina, Cooldown 3 Turns)**
```
Restriction: Deep water only
Area:        25 ft radius whirlpool centered on Ladon
Save:        STR or DEX DC 18
Fail →       Pulled 20 ft inward
             If Ladon has a Grappled target → free Drown Drag activates on that target
Success →    Not pulled
```
> The temple basin becomes a living trap. Hunters who lose their footing are dragged toward Ladon's coils regardless of where they tried to stand.

---

## 6) Reactions

**Coil Reversal — (1 Stamina)**
```
Trigger: A hunter successfully escapes a Grapple.
Effect:  Immediately attempt Crushing Coil against the escaping target.
Limit:   1 reaction per round.
```
> Ladon does not release prey. It offers the illusion of freedom before the second coil closes.

---

## 7) Passive Traits

**Leviathan Mass**

Advantage on saves vs shove, push, or knockback while in water. The volume of Ladon's body mass makes it nearly impossible to displace in its own element.

**Temple Domain**

Within Temple Basin, Ladon gains:
- +2 Stamina recovery each round (in addition to normal recovery)
- Advantage on grapple checks

> This passive weakens or disappears if the fight is drawn to shore or into shallow ruins outside the basin proper.

---

## 8) Part Breaks & Weaknesses

### Break Zones

| Part | Accuracy | Threshold | Break Effect |
|------|----------|-----------|--------------|
| Head Crest ★ *(Impact Zone)* | Standard (−2) | 3 hits | Venom Exhale disabled permanently |
| Neck Segments | Standard (−2) | 4 hits | Temple Slam loses its push effect — Ladon can no longer reposition hunters with Slam |
| Mid-Coil | Open (0) | 4 hits | Crushing Coil escape DC reduced from 17 to 15 |
| Tail Fin | Standard (−2) | 3 hits | Swim speed reduced to 30 ft |

### Tactical Weaknesses

- **Shallow water:** Ladon loses 3D positioning leverage and cannot execute Sacred Maelstrom. Pulling the fight to the shallows strips its dominant toolkit
- **Anchoring tools:** Nets, pitons, or anchor traps counter Drown Drag's pull. A Grappled hunter with an anchor point forces Ladon to spend Stamina on re-application
- **Breaking Mid-Coil:** The escape DC drop from 17 to 15 is a meaningful shift — it changes average escape success from ~30% to ~50% for a STR +5 hunter. Break it early
- **Elevation:** Stone platforms, broken pillars, and temple walls above the waterline put hunters outside Drown Drag's range and deny Ladon's 3D leverage
- **Head Crest priority:** Venom Exhale applies Poisoned which compounds Stamina drain — eliminating it early prevents the stacking pressure of Poisoned + underwater passive drain + Drown Drag

---

## 9) Behavior Guide

**Opening State:** Ladon begins fully submerged, stationary. It does not rush. On Round 1, it ambushes — surfacing only enough to target the lowest-AR hunter with Crushing Coil, then immediately using Drown Drag if the Grapple lands.

**Round 1 Priority:**
- Crush the closest hunter (Crushing Coil)
- If Grapple lands → immediately Drown Drag (this is Ladon's 4th action equivalent — Drown Drag is always used when a target is Grappled, every round, until they surface or escape)
- If multiple hunters are clustered near deep water: Temple Slam the secondary target outward to isolate the Grappled hunter

**Instinct Loop (Above 40% HP):**
- Maintain one Grappled target at all times — this is the priority above damage
- Drag the Grappled target deeper every round (Drown Drag once per round per target)
- Use Temple Slam to push non-Grappled hunters away from the Grappled target, separating the party
- Venom Exhale on clustered hunters at the waterline (cone along the surface; catches waders and swimmers)
- Sacred Maelstrom when 3+ hunters are in deep water — the free Drown Drag trigger on the Grappled target is worth the 4 STA cost

**3D Positioning:**
Ladon prioritizes coiling above its Grappled target, gaining advantage on grapple checks and forcing disadvantage on escape attempts. After a successful Drown Drag, Ladon repositions above the victim. GMs should track Ladon's depth relative to each hunter.

**Below 40% HP:**
- Focus entirely on the most isolated hunter
- Stop using Venom Exhale and Temple Slam; conserve Stamina for Crushing Coil + Drown Drag + Maelstrom
- If Mid-Coil is broken: Ladon becomes more desperate — begins targeting the lowest-Stamina hunter specifically, attempting to accelerate the drown before its grip fails

**At 0 Stamina — Exhausted:**
- Cannot submerge freely or use Maelstrom
- Swim speed 30 ft
- Continues Crushing Coil + Temple Slam but Drown Drag is no longer Stamina-free in context — the loop breaks
- Ladon attempts to retreat toward the deepest basin point

**Loop:** Grab → Drag → Drown → Maelstrom reset → Grab again

---

## 10) Encounter Packaging

**Recommended Arena:** Lake Miru Temple Basin — partially submerged ruins, broken stone platforms 1–2 ft above the waterline, deep water zones (10–20 ft depth) in the basin center, shallow ledges at the perimeter. Some pillars remain upright (Temple Slam collision targets). Natural split between surface and submerged combat spaces.

**Environmental Synergy:**
- Deep water zones: Sacred Maelstrom only activates here. Hunters who stay on platforms deny Ladon's signature ability
- Broken pillars: Temple Slam collision damage (+1d8) is available throughout. Ladon will actively aim to slam hunters into stone
- Shallow water ledges (3 ft depth): Ladon cannot use Drown Drag effectively here — hunters can partially surface on their turn. This is the designed counter-position
- Murky water: Perception checks +2 DC underwater (standard visibility rules). Ladon's vibration sense is unaffected

**Mid-Fight Shifts:**
1. First Grapple lands — the fight changes. One hunter is now in a resource crisis (Stamina drain + breath timer). The party must decide: break Mid-Coil to ease escapes, or break Head Crest to stop Venom Exhale compounding the pressure.
2. If Maelstrom fires while 3+ hunters are in deep water — the whole party is pulled inward. Any previously Grappled hunter gets a free Drown Drag. This is the fight's potential wipe moment.

**Scaling Notes:**
- Weak party: Reduce Maelstrom radius to 15 ft; reduce Drown Drag distance to 10 ft; remove the Coil Reversal reaction
- Strong party: Add a second free Drown Drag trigger when Ladon uses Temple Slam on a Grappled target; Maelstrom cooldown reduces to 2 turns

---

## 11) Loot & Crafting

### A) Loot Table

| Drop | Chance | Use |
|------|--------|-----|
| Miru Scale Plate | 35% | Armor effects, stability riders |
| Coil Sinew | 30% | Weapon control effects, grapple riders |
| Temple-Worn Crest | 20% | Condition effects, Venom riders |
| Venom Bladder | 15% | Poison riders, Stamina drain effects |
| Deepwater Core *(Rare)* | 10% | Required for Rare Effects & Signature Crafts |

---

### B) Craft Themes

- Grapple resistance and escape mechanics
- Forced movement control and anti-pull anchoring
- Aquatic combat bonuses and breath extension
- Stamina drain and recovery pressure

> If an effect does not relate to these four themes — it does not belong here.

---

### C) Material Interaction Profiles

**Weapon Bias**

| Material | Bias | Expression |
|----------|------|------------|
| Metal | Control / Structure | Grapple riders, pull interrupts, anchor effects |
| Bone / Hide | Aggression / Pressure | Damage bonuses vs Grappled targets, pursuit triggers |
| Stone / Crystal | Resonant / Elemental | Water pulse bursts, Soaked application, terrain interaction |

**Armor Bias**

| Material | Bias | Expression |
|----------|------|------------|
| Metal | Stability | Pull resistance, anchor passives, knockback mitigation |
| Hide / Bone | Mobility | Escape bonuses, anti-Grapple reactions, aquatic agility |
| Cloth / Membrane | Stamina / Positioning | Breath extension, Stamina recovery while submerged |

> No material modifies base AR beyond weight class.

---

### D) Effect Tables

**Common Weapon Effects** *(GM chooses 1)*

**Soaked Strike**
Once per turn, when you hit a creature with this weapon, they must succeed a CON save (DC = weapon DC) or become Soaked until end of their next turn. *(Passive rider — no additional action cost. Sets up Lightning damage amplification and the Chilled escalation.)*

**Coil Punisher**
When you hit a creature that is Grappled or Restrained, deal +1d4 bonus damage. *(Passive — triggers on control state regardless of source.)*

---

**Rare Weapon Effects** *(Rare part required — GM chooses 1)*

**Drag Current** *(1 STA, 1/Combat)*
On hit, the target must succeed a STR save (DC = weapon DC) or be pulled 15 ft directly toward you and become Grappled until the start of their next turn. *(Direct Grapple application — strongest single control rider in the Ladon kit.)*

**Temple Surge** *(1/Combat)*
On hit, a water burst erupts from the target in a 10-ft radius. All creatures in the burst make a DEX save (DC = weapon DC) → fail → knocked Prone and Soaked. *(Area punish — turns a single hit into a positioning reset.)*

---

**Common Armor Effects** *(GM chooses 1)*

**Slipscale**
When you fail a STR or DEX check to escape a Grapple, you may reroll once. You must use the new result. *(Passive — rewards persistence against Ladon's core loop.)*

**Waterborne Footing**
You do not suffer the +1 Stamina cost per Move action while Soaked. *(Passive — ignores the aquatic drag penalty entirely.)*

---

**Rare Armor Effects** *(Rare part required — GM chooses 1)*

**Coil Shrug** *(1/Combat)*
When you become Grappled or Restrained, you may immediately attempt to escape as a free Reaction. If you succeed, you cannot be Grappled or Restrained again until the start of your next turn.

**Temple Ward**
While Soaked, reduce all incoming damage by your CON modifier. *(Passive — scales with CON investment; makes soaking the battlefield a deliberate trade rather than pure penalty.)*

---

### E) Archetype Translation (Water)

| Weapon | Translation |
|--------|-------------|
| Wand | **Surgeweave Rod** — Grants Water Affinity (Surge). Hex: **Surgecharge** — clusters pulse with water energy, dealing Water (bludgeoning) damage on detonation. Detonate → CON save vs Wand DC → fail → **Soaked** (1 turn). Visual: water pools at contact points; waves erupt outward on detonation rather than fire. |
| Conduit | **Undertow Conduit** — Grants Water Aspect: **Undertow Field**. The Field becomes a pulling current — enemies who end their turn inside must succeed a STR save vs Conduit DC or be pulled 5 ft toward the Field's center. No extra damage. Standard Field size rules apply. |
| Bow | **Tidal Arrow** *(2 uses/hunt)* — On hit: target must succeed a STR save vs Bow DC or be pushed 5 ft perpendicular (current deflection) and become Soaked until end of their next turn. Integrated into Arrow Swap system normally. If the target is already Soaked when hit, the Tidal Arrow instead pulls them 5 ft toward you. |
| Flute | **Tidal Ballad: "The Deep Remembers"** — While active: once per round, when an enemy inside the Flute's aura (30 ft) is successfully Grappled (by any source), they must succeed a STR save vs Flute DC or lose –10 ft of movement until end of their next turn (the tidal pull compounds the hold). Aura expression — passive trigger on Grapple state, not an active targeting effect. Delivered via standard Ballad activation and sustain rules at the same mechanical strength. |

---

### F) Signature Crafts *(Leviathan — multiple allowed; Rare part required for each)*

---

**Signature 1 — Temple Guard Carapace** *(Heavy Armor — Deepwater Core required)*

AR +5.

**Immovable:** If you did not move this turn, you cannot be Pulled and cannot be knocked Prone.

**Grounded Recovery:** If you did not move this turn, regain 1 Stamina at end of your turn.

> Cannot stack with other Rare armor effects. Cannot combine Signature armor with a second Signature.

---

**Signature 2 — Coilbound Mail** *(Medium Armor — Deepwater Core required)*

AR +4.

**Shallow Anchor:** While standing in water 5 ft deep or shallower: +1 AR and reduce all incoming forced movement by 5 ft.

> Cannot stack with other Rare armor effects. Cannot combine Signature armor with a second Signature.

---

**Signature 3 — Miru Scale Vest** *(Light Armor — Deepwater Core required)*

AR +3.

**Eel-Slip:** When you are Grappled or Restrained, spend 1 Stamina to gain advantage on your next escape check. Once per Grapple instance.

> Cannot stack with other Rare armor effects. Cannot combine Signature armor with a second Signature.

---

**Signature 4 — Deepwater Conduit** *(Conduit only — Deepwater Core required)*

Grants Water Affinity and Water Aspect: **Undertow Field** (see Archetype Translation above).

**Tidal Surge** *(1/Combat, 2 STA)*: While your Undertow Field is active, trigger a sudden current surge. All enemies currently inside the Field make a STR save vs Conduit DC → fail → pulled to the Field's center and Soaked.

> Cannot stack with other Rare weapon effects.

---

## 12) Hooks

**The Temple Awakens**
Divers exploring the ruins of Miru disturb an ancient relic from the basin floor. Ladon rises. The guild contract is real, but no one in the village will admit what was taken from the shrine.

**The Drowned Pilgrimage**
Temple priests demand hunters escort them into Ladon's domain — not to kill it, but to recover a sacred object from the deepest chamber. The conditions for "success" may not involve violence at all.

**Flood Season**
Ladon has been sighted upriver. Something has disturbed the basin badly enough to drive a guardian out of its territory. Whatever it was may still be down there.

**The Broken Shrine**
A fragment of Ladon's crest surfaced in a merchant's inventory. Something has wounded the sacred leviathan. Whoever did it either fled — or didn't survive to sell the whole thing themselves.
