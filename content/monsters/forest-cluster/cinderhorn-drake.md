# CINDERHORN DRAKE — Warfire Chimera

**Classification:** Drake
**Tier:** 4
**Biome Zones:** Volcanic Valleys, Burnt Forest Sectors, Ash Basin
**Element:** Fire

**Tagline:** "A war-drake that escalates in lethality while its body remains intact, forcing hunters to dismantle it piece by piece."

**Appears when:**
- Migrating through burn corridors
- Territory is encroached upon
- Prey has been abundant enough to trigger active expansion

---

## 1) Field Notes

Cinderhorn Drakes are apex war-beasts that evolved from scavenger drakes feeding on volcanic carrion and toxic flora. Over centuries their bodies developed specialized hunting structures: a burning lion-like maw, a horned ramming skull, a venomous scorpion tail, and powerful wings. Each body system reinforces the others. A fully intact Cinderhorn is less a creature and more a living siege engine.

**What Hunters Notice First:**
- Scorched migration trails
- Melted rock around resting sites
- Venom spikes embedded in trees

**Core Puzzle:**
- Break body parts to weaken synergy — each intact part contributes to Warform Synergy, and the all-intact bonus makes the Cinderhorn oppressive
- Deny mobility — Wing Skirmish lets it escape every melee retaliation; grounding it forces a decisive ground fight
- Survive burst phases — Infernal Cyclone is the wipe threat; it fires when hunters cluster and Wings are intact

---

## 2) Stat Block

### Attributes

| Stat | Score | Modifier |
|------|-------|----------|
| STR | 12 | +6 |
| DEX | 8 | +4 |
| CON | 11 | +5 |
| INT | 5 | +2 |
| INS | 8 | +4 |
| CHA | 6 | +3 |

### Combat Attributes

| Stat | Value | Notes |
|------|-------|-------|
| AR | 18 | Layered scale hide, volcanic conditioning |
| HP | 346 | Median 4P: TierBase (225) + CON (11) × 11 |
| Stamina | 21 | 10 + CON Score (11) |

> **GM Scaling Note:** HP 346 targets a median mixed party (HR 15–17). For an optimized synergized party, increase to 445 (TierBase 225 + CON 11 × 20). Warform Synergy — Pounce — Cyclone needs at least 4 rounds to fully execute its escalation loop.

| Movement | Value | Notes |
|----------|-------|-------|
| Ground | 40 ft | — |
| Flight (burst) | 40 ft | Short burst only; not sustained hover |
| Airborne Tax | −1 STA/turn | If airborne at end of turn |
| Attacks/Turn | 3 | — |

**Attack Roll Breakdown:** `d20 + STR mod (+6) + Trained proficiency (+2) = d20+8`
**Tail Attack Roll:** `d20 + DEX mod (+4) + Trained proficiency (+2) = d20+6`

**Exhaustion Rule:**
- Cannot fly
- Infernal Cyclone disabled
- Warform Synergy escalation bonus suppressed
- All individual Warform bonuses remain (they are passive, not Stamina-dependent)

### Senses

- Heat Sense — 30 ft (detects warm-blooded creatures by body heat through smoke, darkness, and light cover; does not work through stone or water)
- Acute Scent — 60 ft (tracks prey through terrain changes; cannot be fooled by silence or invisibility)

---

## 3) Warform Synergy (Passive — Always Active)

Each intact body part grants a persistent benefit. As parts are broken, the Cinderhorn loses that benefit.

| Intact Part | Passive Benefit |
|-------------|-----------------|
| Lion Mane | +1 AR vs attacks from directly in front (effective AR 19 from frontal arc) |
| Wings | 10 ft free reposition after each attack (no opportunity attacks) |
| Tail | +1d6 damage on all attacks against Poisoned targets |
| Horn Skull | Advantage on attack rolls against Prone targets |

**All Four Intact:** +1 Power Die on the first attack each turn.

> This is the escalation passive. At full Warform the Cinderhorn is oppressive. By 2 parts broken it becomes balanced. By 3 parts broken it becomes manageable — and enters Berserk state (see below).

**Berserk State (3+ Parts Broken):**

When three or more body parts are broken, the Cinderhorn abandons tactical behavior and fights with reckless aggression:
- +1 damage die on all attacks (replaces the lost Warform bonuses, not additive)
- −2 AR (reckless — the creature no longer guards itself)

> The Cinderhorn doesn't know how to lose gracefully. Three broken parts don't weaken its resolve — they shatter its discipline.

---

## 4) Attacks

**Ash Bite — (1 Stamina)**
```
Type:    Melee (STR)
Attack:  d20+8
Damage:  3d10+6 fire
Rider:   Burned (1 turn)
```

**Horned Ram — (1 Stamina)**
```
Type:    Melee (STR)
Attack:  d20+8
Damage:  3d8+6
Save:    STR DC 18
           Fail → Prone + Pushed 10 ft
```

**Tail Lash — (1 Stamina)**
```
Type:    Melee (DEX), Reach 15 ft
Attack:  d20+6
Damage:  3d8+4
Save:    CON DC 17
           Fail → Poisoned (1 turn)
```
> The tail strikes from outside the melee press. Hunters focused on the maw don't see it coming.

---

## 5) Special Abilities

**Pounce-Leap — (2 Stamina)**
```
Requires: Cinderhorn moved 20 ft this turn
Attack:   d20+8
Damage:   3d8+6
Rider:    Target becomes Restrained
Escape:   STR DC 17
```
> It covers ground faster than it looks possible. Pounce-Leap is not a charge — it's a drop.

---

**Poison Spike Volley — (2 Stamina, Cooldown 2 Turns)**
```
Area:    Choose: 20 ft cone OR 30 ft line
Save:    DEX DC 17
           Fail → 3d6+4 damage + Poisoned (1 turn)
           Success → Half damage, no Poisoned
Effect:  Creates spike terrain in the area (lasts until cleared).
         Creatures entering spike zones: CON save DC 17
           Fail → 1 poison damage + Poisoned (1 turn)
```
> The spikes are not the attack. The spikes are the map rewrite.

---

**Infernal Cyclone — (4 Stamina, Cooldown 3 Turns)**
```
Effect:  Cinderhorn moves 30 ft ignoring opportunity attacks.
Area:    20 ft cone (at end of movement)
Damage:  4d10 fire
Save:    DEX DC 18
           Fail → Burned (2 turns) + Prone
           Success → Half damage, no conditions
Wings:   If Wings intact → creates Burning terrain in the cone (lasts 2 turns)
```
> The jaw unhinges. The wings fan the fire forward. Everything in the path stops being a problem — because it's on fire.

---

## 6) Reactions

**Wing Skirmish — (1 Stamina)**
```
Trigger: Cinderhorn is hit by a melee attack.
Effect:  Move 10 ft in any direction without provoking opportunity attacks.
Limit:   Once per round. Disabled if Wings are broken.
```
> Every melee hit teaches it where not to stand.

---

## 7) Passive Traits

*(Warform Synergy listed in Section 3 above.)*

**Airborne Stamina Tax**

If the Cinderhorn ends its turn in the air, it loses 1 Stamina. Wing Skirmish repositions frequently trigger this. A Cinderhorn that starts air-dancing rapidly approaches Exhaustion.

> This creates the risk/reward tension of aerial harassment — powerful but unsustainable.

---

## 8) Part Breaks & Weaknesses

### Break Zones

> **★ marks the Impact Zone** — the only target that builds Hammer Impact. Accuracy tiers: Open (0) — large/diffuse | Standard (−2) — typical structure | Precise (−4) — small/fast/head

| Part | Accuracy | Threshold | Break Effect |
|------|----------|-----------|--------------|
| Horn Skull ★ *(Impact Zone)* | Standard (−2) | 5 BP | Ram no longer knocks Prone; Warform Synergy Horn Skull bonus lost |
| Wings | Open (0) | 4 hits | Flight removed; Infernal Cyclone loses Burning terrain creation; Wing Skirmish disabled |
| Lion Head | Standard (−2) | 4 hits | Ash Bite loses Burned rider; Warform Synergy Lion Mane bonus lost |
| Tail | Standard (−2) | 3 hits | Tail Lash loses Poisoned rider; Warform Synergy Tail bonus lost |
| Hind Legs | Open (0) | 4 hits | Movement reduced to 25 ft; Pounce-Leap disabled |

### Tactical Weaknesses

- **Wing break priority:** Wing Skirmish (melee escape reaction) is disabled; Infernal Cyclone loses terrain creation; flight removed entirely — the fight transitions from aerial harassment to decisive ground combat where melee hunters have full access
- **Tail break priority:** Removes Poisoned pressure; eliminates the Warform Synergy +1d6 bonus; allows melee hunters to fight without Stamina drain from sustained Poisoning
- **Water sources:** Extinguish Burning terrain zones and remove the Burned condition. Drawing the fight near water denies Cyclone's lasting terrain and shuts down the Cinderhorn's environmental control entirely. Fire effects fail in water contact
- **Confined terrain:** Tight forest corridors deny Pounce-Leap (requires 20 ft movement) and restrict Cyclone's cone angle. Narrow fight spaces also prevent Wing Skirmish from finding safe repositioning points
- **Stamina pressure:** Infernal Cyclone (4 STA) + Spike Volley (2 STA) + Airborne Tax (1 STA/turn aloft) burn Stamina aggressively. A party that denies air mobility and forces ground combat dramatically accelerates Exhaustion. At 0 STA, Cyclone shuts off — the fight's primary wipe threat disappears

---

## 9) Behavior Guide

**Opening — Round 1 Priority:**
- Poison Spike Volley first — reshape the arena before engaging. Creates spike zones that punish clustering and deny optimal positioning.
- Then reposition with Wing Skirmish before any retaliatory melee lands.

**Instinct Loop (Above 40% HP, All/Most Parts Intact):**
- Maintain aerial harassment — use Wing Skirmish after every melee hit to keep melee hunters at disadvantage
- If 3+ hunters cluster in open ground → Infernal Cyclone (the wipe moment)
- If an isolated hunter exists → Pounce-Leap → Ash Bite
- Alternate Tail Lash from reach against the most mobile hunter to apply Poisoned pressure before closing
- Prioritize keeping Warform Synergy all-intact bonus active — it will not give up aerial position willingly

**If Wings Broken:**
- Abandons Wing Skirmish repositioning
- Becomes more committed to Ram → Pounce sequences on grounded targets
- Infernal Cyclone still fires but without terrain creation; it becomes pure burst rather than arena control

**If Two Parts Broken:**
- Balanced state. Focuses entirely on the most injured or lowest-Stamina hunter
- Still uses Spike Volley to maintain terrain pressure
- Airborne activity reduces — the Stamina tax becomes more costly at reduced STA pool

**Berserk State (3+ Parts Broken):**
- Abandons Spike Volley and Pounce-Leap (too tactical)
- Cycles: Ash Bite → Ram → Tail Lash in pure aggression
- Stops repositioning — charges the closest hunter and does not disengage
- Cyclone fires every cooldown if STA permits, even without favorable positioning

**Below 40% HP:**
- No longer tracks optimal targets — attacks closest hunter
- Infernal Cyclone fires on cooldown regardless of clustering

**At 0 Stamina — Exhausted:**
- Cannot fly; Cyclone disabled; escalation bonus suppressed
- Still uses Ram + Ash Bite + Tail Lash on basic attacks
- Berserk State bonuses remain active if triggered (not Stamina-dependent)

**Loop:** Harass → Burst → Reset

---

## 10) Encounter Packaging

**Recommended Arena:** Ash basin clearing or burned forest sector — open ground with at least two directions of 40 ft movement for Pounce-Leap. Spike terrain zones deployable across 30 ft strips. Burning brush at edges (environmental Burning terrain the Cinderhorn can incorporate into Cyclone). Narrow forest entry paths at the perimeter (chokepoints hunters can exploit once Wings break).

**Environmental Synergy:**
- Burning brush → Cyclone fans it outward, expanding the burning terrain footprint
- Lava vents and scorched ground → already Burning terrain on the map before combat starts; Ash Bite Burned riders can trigger on adjacent vent-exposed hunters
- Spike terrain (from Volley) layered with Burning terrain → hunters caught between zones face both Poisoned and Burned pressure simultaneously

**Mid-Fight Shifts:**
1. First time Cyclone fires with Wings intact — Burning terrain appears. The arena changes. Hunters must now navigate terrain hazards and fight simultaneously.
2. Wings broken — Cinderhorn transitions from aerial harassment to committed ground assault. Positioning advantage shifts to hunters.

**Scaling Notes:**
- Strong party: Reduce Infernal Cyclone cooldown to 2 turns; increase active spike terrain duration to 3 turns
- Weak party: Reduce Cyclone damage to 3d10; remove the Airborne Stamina Tax (simplifies Stamina tracking)

---

## 11) Loot & Crafting

### A) Loot Table

| Drop | Chance | Use |
|------|--------|-----|
| Cinderhorn Scale | 60% | Armor effects, burn resistance riders |
| Barbed Tail Spine | 50% | Weapon venom riders, Poisoned escalation |
| Ash Mane Fiber | 40% | Fire damage reduction, terrain interaction |
| Infernal Core *(Rare)* | 15% | Required for Rare Effects & Signature Crafts |

> Drop rates follow T4 rare part scarcity. Infernal Core at 15% matches upper T3 rare rates — adjust to 10% if your table breaks parts consistently.

---

### B) Craft Themes

- Fire burst and Burned condition escalation
- Venom pressure and Poisoned layering (secondary rider, gates off Burned state)
- Terrain creation and Burning zone interaction
- Aerial mobility combat and repositioning punishes

> If an effect does not relate to these four themes — it does not belong here.

---

### C) Material Interaction Profiles

**Weapon Bias**

| Material | Bias | Expression |
|----------|------|------------|
| Metal | Control / Structure | Fire interrupts, anti-repositioning riders, Burned condition anchors, positioning locks |
| Bone / Hide | Aggression / Pressure | Venom escalation, Burned stacking, pursuit triggers, charge bonuses |
| Stone / Crystal | Resonant / Elemental | Fire burst riders, terrain ignition, AoE Burn detonation |

**Armor Bias**

| Material | Bias | Expression |
|----------|------|------------|
| Metal | Stability | Burn resistance, forced movement mitigation, anti-knockdown passives |
| Hide / Bone | Mobility | Anti-Restrained mechanics, repositioning speed in Burning terrain, recovery bonuses |
| Cloth / Membrane | Stamina / Positioning | Fire damage reduction, stamina recovery during heat phases, terrain navigation bonuses |

> No material modifies base AR beyond weight class.

---

### D) Effect Tables

**Common Weapon Effects** *(GM chooses 1)*

**Ember Strike**
On hit, the target must succeed a CON save (DC = weapon DC) or become Burned (1 turn). *(Passive rider — no additional action cost. Direct expression of the Cinderhorn's fire identity. Sets up Venom Edge and the Tail's Warform bonus.)*

**Venom Edge**
On hit, if the target is already Burned, they must succeed a CON save (DC = weapon DC) or also become Poisoned (1 turn). *(Passive — requires Burned state first. Rewards maintaining fire pressure before layering venom. Mirrors the drake's own sequential escalation.)*

---

**Rare Weapon Effects** *(Rare part required — GM chooses 1)*

**Flashfire** *(1/Combat)*
On hit, a burst of superheated air erupts from the target in a 10-ft radius. All creatures in the burst make a CON save (DC = weapon DC) → fail → Burned (1 turn) and pushed 5 ft outward from the burst center. *(Area punish — turns a single hit into a fire formation reset. Most effective when Burning terrain already occupies the arena — pushed targets land in it.)*

**Scorched Earth** *(1 STA)*
On hit, create a 5-ft patch of Burning terrain at the target's location (lasts 2 turns). *(Terrain creation — lets hunters mirror the Cinderhorn's arena control. The patch discourages repositioning through the strike point and synergizes with Ember Strike for follow-up attacks.)*

---

**Common Armor Effects** *(GM chooses 1)*

**Ash Resistance**
You have advantage on saving throws against Burned. *(Passive — direct counter to the Cinderhorn's most common condition application. Reduces Stamina drain from the Burned condition's ongoing cost.)*

**Terrain Footing**
You ignore the movement cost penalty of Burning terrain and spike terrain. *(Passive — counters both Infernal Cyclone's burning zones and Poison Spike Volley's hazard strips simultaneously.)*

---

**Rare Armor Effects** *(Rare part required — GM chooses 1)*

**Inferno Skin** *(1/Combat)*
When you take fire damage, you may immediately make a melee attack against the source as a free Reaction. This attack deals +1d8 bonus fire damage. *(Counter-aggression — punishes the Cinderhorn for using Ash Bite or Infernal Cyclone at close range. Most effective against the Cyclone charge-through.)*

**Venom Coat**
While you are Poisoned, reduce all incoming damage by 2. *(Passive — converts a negative condition into a mitigation trigger. Rewards enduring the venom rather than spending an action to cure it, conserving action economy for part break pressure.)*

---

### E) Archetype Translation (Fire)

| Weapon | Translation |
|--------|-------------|
| Wand | **Ashfire Rod** — Grants Fire Affinity (Scorch). Hex: **Emberstrike** — clusters smolder at contact points, dealing fire damage on detonation. Detonate → CON save vs Wand DC → fail → **Burned** (1 turn). Visual: clusters appear as embedded embers that pulse with heat; detonation erupts as a spray of fire shards outward rather than an explosion. |
| Conduit | **Scorched Field Conduit** — Grants Fire Affinity and Fire Aspect: **Scorched Field**. The Field ignites the surrounding air — enemies who end their turn inside must succeed a CON save vs Conduit DC or become Burned (1 turn). Standard Field size rules apply. |
| Bow | **Ember Arrow** *(2 uses/hunt)* — On hit, CON save vs Bow DC → fail → Burned (1 turn) and pushed 5 ft away (thermal shockwave on impact). Integrated into Arrow Swap system normally. If the target is already Burned when hit, the Ember Arrow instead deals +1d8 bonus fire damage (ignition amplification). |
| Flute | **Ballad: "The Warbeast's Roar"** — While active, once per round when an enemy inside the Flute's aura (30 ft) enters or starts their turn in Burning terrain, they must succeed a CON save vs Flute DC or become Burned (1 turn). Aura expression — passive trigger on terrain interaction, not active targeting. Delivered via standard Ballad activation and sustain rules at the same mechanical strength. |

---

### F) Signature Crafts *(Drake — multiple allowed; Rare part required for each)*

---

**Signature 1 — Warhorn Pike** *(Spear & Shield variant — Infernal Core required)*

**Searing Thrust:** Your attacks with this weapon deal fire damage. On hit, the target must succeed a CON save (DC = weapon DC) or become Burned (1 turn).

**Venomhorn Follow-Through** (Passive): When you hit a target that is already Burned, deal +1d8 bonus fire damage and the target must succeed a CON save (DC = weapon DC) or become Poisoned (1 turn).

> Cannot stack with other Rare weapon effects. Cannot combine with a second Signature. Mirrors the Cinderhorn's own sequential fire-then-venom escalation identity.

---

**Signature 2 — Cinderhide Plate** *(Heavy Armor — Infernal Core required)*

AR +5.

**Warform Endurance:** While fighting in Burning terrain, regain 1 additional Stamina at the end of your turn.

> Cannot stack with other Rare armor effects. Cannot combine Signature armor with a second Signature. Most active during Infernal Cyclone phases when the arena is saturated with flame — the heat fuels rather than weakens the wearer.

---

**Signature 3 — Drakefire Conduit** *(Conduit only — Infernal Core required)*

Grants Fire Affinity and Fire Aspect: **Scorched Field** (see Archetype Translation above).

**Volcanic Surge** *(1/Combat, 2 STA)*: While your Scorched Field is active, trigger a fire pulse outward. All enemies currently inside the Field make a CON save vs Conduit DC → fail → Burned (1 turn) and pushed 10 ft outward from the Field's center.

> Cannot stack with other Rare weapon effects.

---

## 12) Hooks

**Ashfall Migration**
Entire sections of forest have turned to blackened ash overnight. A Cinderhorn Drake has begun migrating through the region, burning territory to flush prey from hiding. If it reaches the valley farms, the wildfire could spread beyond control.

**Venom in the Wind**
Hunters tracking poisoned wildlife discover venom spikes embedded high in trees. A Cinderhorn has been testing its spike volleys on smaller creatures before moving toward larger prey. Something — or someone — may have provoked it.

**War Beast of the Ash Basin**
Scouts report a drake that refuses to retreat even when wounded. Broken scales and blood trails suggest hunters have already fought it and failed. Now the creature has become hyper-aggressive, defending the basin like a warlord guarding its throne.

**The Burning Corridor**
A long trail of scorched terrain stretches through multiple sectors. The drake is carving a burn corridor, forcing prey into predictable escape paths before ambushing them. Hunters must intercept it before the corridor reaches a populated road.

**The Broken Wing**
A Cinderhorn with a partially shattered wing has been sighted limping through the forest. Unable to fly, it has become far more dangerous on the ground — attacking anything that approaches its territory. Finishing the hunt could prevent a desperate rampage.

**The Ash Monarch**
Another predator has been driven from its territory by the drake. Now two large monsters share the same region, and the ecosystem is collapsing under the pressure. The hunters must decide: drive away the Cinderhorn — or use it to eliminate the rival creature.
