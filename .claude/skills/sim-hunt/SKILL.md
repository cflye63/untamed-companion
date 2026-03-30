# /sim-hunt

Simulate a hunt between a party of hunters and a designated monster using **expected-value math only** — no dice rolls. All outcomes use probability × average. Deterministic and fully reproducible.

**Default:** Party of 4 hunters at the monster's tier unless specified.

> **PHASED EXECUTION:** This simulation runs in 3 phases to stay within response limits. Each phase ends with a pause. Do NOT attempt to run all phases in one response.
>
> - **Phase 1** (`/sim-hunt` invocation): Parse inputs → read all files → build stat blocks → output roster + monster block + hit table → end with `▶ Phase 1 complete. Reply **go** to run the simulation.`
> - **Phase 2** (user replies `go`): Run round-by-round simulation → output full round log → end with `▶ Phase 2 complete. Reply **report** for the final analysis.`
> - **Phase 3** (user replies `report`): Output final report, flags, and tuning suggestions.
>
> Do NOT show intermediate probability branching or sub-calculations inline. Compute internally, output results only. Use condensed round format (defined below). If the fight runs 8+ rounds, compress mid-fight rounds into 2-round summaries.

**Invocation format:**
```
/sim-hunt
  party: [N] [Race] [Weapon], [N] [Race] [Weapon], ...
  tier: [1–5]
  monster: [name or inline stat block]
```

---

---

## ▶ PHASE 1 — Setup (Steps 1–5)

*Run on `/sim-hunt` invocation. Output stat blocks, then pause.*

## Step 1 — Parse Inputs

Extract from the invocation:
- Each hunter's race and weapon
- Tier (HR midpoint of the tier band is used: T1→HR2, T2→HR7, T3→HR12, T4→HR17, T5→HR22)
- Monster: name (look up in `content/monsters/`) or inline stat block

If monster name given, search `content/monsters/**/*.md` for the matching file.

If party size is not specified, default to 4 hunters.

---

## Step 2 — Load Reference Files

Read all of these before building anything:

- `content/rules/tier-calibration.md` — tier stat envelopes and HP formula
- `content/rules/stamina.md` — stamina costs, recovery rules, exhaustion
- `content/rules/combat.md` — action economy, reactions (Block/Parry/Dodge)
- `content/rules/conditions.md` — all condition effects and durations
- Monster file from `content/monsters/`
- Each weapon page: `src/pages/weapons/[weapon-name].astro`

---

## Step 3 — Build Hunter Stat Blocks

Build one stat block per hunter. Apply the following in order.

### 3A — Base Stats

Use this starting array (before any bonuses), distributed optimally for the weapon:

| Priority | Stat | Starting Value |
|----------|------|---------------|
| 1st — Weapon primary | (see weapon table below) | 5 |
| 2nd — CON | CON | 5 |
| 3rd — Weapon secondary | (see weapon table) | 4 |
| Other three stats | — | 3 each |

**Weapon primary stats:**

| Weapon | Primary Stat | Secondary Stat | Tags |
|--------|-------------|---------------|------|
| Greatsword | STR | CON | Parry |
| Hammer | STR | CON | — (no Guard/Parry) |
| Spear & Shield | STR | CON | Guard, Parry |
| Greatshield | CON | STR | Guard |
| Bow | DEX | INS | — |
| Arbalest | STR | INS | — (no Guard/Parry) |
| Whip | DEX | CHA | — |
| Claws | DEX | — (+2 DEX only, no secondary) | — |
| Wand | INT | INS | — |
| Conduit | INS | CON | — |
| Hunting Flute | CHA | INS | — |
| Boomerang | DEX | INS | — |

### 3B — Apply Bonuses (in order)

1. **Background (highest-synergy):**
   - STR primary → Tribal Warrior: +2 STR, +1 CON
   - DEX primary → Wanderer: +2 DEX, +1 INS
   - INT/CHA primary → Scholar: +2 INT, +1 INS
   - INS primary → Tracker: +2 INS, +1 CON
   - *Note: +2 goes to primary stat, +1 to secondary unless CON is a better fit*

2. **Weapon stat bonuses** (from stat-badges in weapon page header):
   - Apply exactly as listed (e.g., Greatsword: +1 STR, +1 CON)

3. **Race stat bonus:**
   - If race bonus matches the weapon's primary stat → apply to primary stat
   - If no match → apply to CON
   - Human: +1 any → always apply to primary stat
   - Dragonian: +1 INT → apply to INT (favors Wand); otherwise apply to CON
   - Trolian: +1 STR or DEX → apply to weapon primary if STR/DEX weapon; otherwise CON
   - Thalorim: +1 CON or INS → apply INS if INS-primary weapon (Conduit); otherwise CON

### 3C — Tier Scaling

At the tier's midpoint HR, apply accumulated stat points:
- Every 4 HR: +2 stat distribution points → add to primary stat first, then CON
- T1 (HR2): 0 bonus points
- T2 (HR7): +2 points (one allocation at HR4)
- T3 (HR12): +4 points
- T4 (HR17): +6 points
- T5 (HR22): +8 points

### 3D — Modifier Formula

```
modifier = floor(stat_score / 2)
```

**This is NOT the D&D standard. floor(6/2) = 3, floor(7/2) = 3, floor(8/2) = 4.**

### 3E — Derived Combat Stats

**Hunter Stamina:**
```
Stamina = 6 + CON modifier
```

**Hunter HP:**
```
HP = (CON score × 8) + Hunter Rank
```
*(HR midpoint per tier: T1→HR2, T2→HR7, T3→HR12, T4→HR17, T5→HR22)*

**Hunter AR (by armor type):**
- STR/tank weapons (GS, Hammer, Spear&Shield, Greatshield, Arbalest): **Heavy Armor → AR 14** (no Dodge)
- DEX/mobile weapons (Bow, Whip, Claws, Boomerang): **Light Armor → AR 10 + DEX mod** (Dodge available)
- INS/INT/CHA support weapons (Wand, Conduit, Flute): **Medium Armor → AR 12** (Dodge available)

**Reaction access (from weapon tags and armor):**
- Parry: weapon has Parry tag
- Block: weapon/shield has Guard tag
- Dodge: Light or Medium armor
- No reaction: Heavy armor without Guard/Parry

**Weapon attack roll:**
```
Attack bonus = primary_stat_mod + Trained proficiency (+2)
```

**Weapon average damage at tier:**
Read from weapon page's "Damage Dice per Tier" table. Calculate:
- avg_die: d4=2.5, d6=3.5, d8=4.5, d10=5.5, d12=6.5
- avg_damage = avg_die + stat_mod

**Weapon Save DC (for ability riders):**
```
Save DC = 10 + primary_stat_mod + Trained proficiency (+2)
```

**Race traits — apply these to simulation:**
- Human (Adaptable): Once per round, may reduce a Stamina cost by 1. Model as: 1 attack per hunt costs 0 Stamina instead of 1.
- Dragonian (Draconic Channeling): Once per turn, +1 Stamina cost → apply lineage rider. Model as: spend +1 STA on first aggressive action each fight → apply elemental condition (Burned for Fire, etc.). Ongoing condition applies from next round.
- Trolian Anchored Frame: If hunter doesn't move, +1 AR. Model as: melee hunters gain +1 AR effectively (they typically don't move).
- Trolian Flowstep: Ignore difficult terrain on move. No combat impact unless arena has difficult terrain (note if so).
- Trolian Rooted Resilience: On failed save, next Reaction costs 1 less Stamina. Model as: 1 Stamina saved per save failure per round.
- Thalorim (Tide Breath): No combat impact unless encounter is underwater.

### 3F — Technique Access by Tier

**Hunters use the technique for their current tier.** At T1 they have the T1 technique; at T2 they have T1 and T2; and so on.

**Modeling rule:** Hunters will use their tier technique at least once per fight at the optimal moment. Apply technique usage when the conditions favor it (see per-weapon rules below). If using the technique would be net-negative (e.g., high chance of cancellation), model basic attacks instead and note why.

---

## Step 4 — Document Hunter Stat Blocks

Print a compact block for each hunter before running the simulation:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Race] [Weapon] | HR [X] optimal build
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STR [X](+[m])  DEX [X](+[m])  CON [X](+[m])
INT [X](+[m])  INS [X](+[m])  CHA [X](+[m])

AR:      [X]  ([armor type])
HP:      [X]  (20 + CON[X]×2)
Stamina: [X]  (6 + CON mod[m])

Attack:  d20+[X] → [weapon die]+[mod]  avg hit dmg: [X.X]
Save DC: [X]
React:   [Parry / Block / Dodge / None]
Technique (T[X]): [technique name and brief effect]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Step 5 — Confirm Monster Stat Block

From the loaded monster file, record and display:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MONSTER: [Name]  Tier [X]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AR: [X]   HP: [X]   Stamina: [X]
Stamina Tax: [X/turn] ([condition])
Attacks/Turn: [X]

ATTACKS:
  [Name]: d20+[X] → [avg dmg]  rider: [summary]
  [Name]: d20+[X] → [avg dmg]  rider: [summary]

ABILITIES:
  [Name] ([cost] STA, CD [X]): [brief effect, save DC if any]

REACTIONS:
  [Name] ([cost] STA): trigger → effect

EXHAUSTION RULE: [what happens at 0 STA]

PART BREAKS:
  [Part]: threshold [X] hits → [effect]

BEHAVIOR PRIORITY: [ordered list from behavior guide]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

**End of Phase 1:** After outputting the roster, monster block, and hit table, stop and say:
> `▶ Phase 1 complete. Reply **go** to run the simulation.`

---

## ▶ PHASE 2 — Simulation (Steps 6–8)

*Run when user replies `go`. Output the full round log, then pause.*

## Step 6 — Core Math

All calculations use these formulas. **Compute internally — do not show derivations in the output. Only output final values.**

### Hit probability
```
hit_chance = clamp( (21 - max(1, target_AR - attack_bonus)) / 20, 0.05, 0.95 )
```
Natural 1 always misses (5% floor miss), natural 20 always hits (5% floor hit).

### Disadvantage (Dodge applied, Blind condition)
```
dis_hit_chance = hit_chance²
```

### Advantage (Cleave, attacks vs Sleeping/Prone/Exhausted targets)
```
adv_hit_chance = 1 - (1 - hit_chance)²
```

### Expected damage per attack
```
exp_dmg = hit_chance × avg_weapon_damage
```

### Save fail probability
```
fail_chance = 1 - clamp( (21 - max(1, save_DC - defender_stat_mod - prof)) / 20, 0.05, 0.95 )
```
Defenders at hunter tier: assume relevant stat mod = primary or save stat mod +2 (Trained) where prof applies.
Monsters: use stat mods from stat block; no proficiency unless stated.

### Breathing Turn
A hunter who takes a Breathing Turn (no Action, no Fast Action):
- Spends 0 Stamina on attacks
- Recovers 4 Stamina at end of turn
- Deals 0 damage this round

**Decision rule:** A hunter takes a Breathing Turn if Stamina ≤ 2.

---

## Step 7 — Run the Simulation

Run round by round. Each round has a Hunter Phase and Monster Phase.

### Hunter Phase

For each hunter this round:

1. **Check Stamina:**
   - If Stamina ≤ 2 → Breathing Turn (0 dmg, +4 Stamina, note it)
   - If Exhausted (0 Stamina) → Skip turn entirely, then attempt recovery

2. **Resolve attack (if not Breathing):**
   - Calculate hit_chance vs monster AR
   - If target is Exhausted: use adv_hit_chance
   - Apply weapon mechanic stack bonuses (see below)
   - Spend Stamina per action (see per-weapon rules)
   - Record: expected damage this round

3. **Weapon mechanic modeling — full rules:**

---

### GREATSWORD — Momentum + Cleave (T1)

**Momentum:**
- Gain +1 Momentum each time you hit with a Greatsword attack.
- Lose ALL Momentum if you miss, Dodge, switch targets, or become Stunned/Prone.
- Cap: 3 Momentum.

| Stack | Bonus |
|-------|-------|
| M0 | +0 (base damage only) |
| M1 | +1 flat damage |
| M2 | +2 flat damage + Expanded Crit 19-20 (EV: +5% crit chance × avg_die ≈ +0.33/attack at T1) |
| M3 | +3 flat damage + Expanded Crit 18-20 + 1 power die on ALL attacks (+avg_die to all hits) |

**M3 EV per hit (T1, d12):** +3 flat + +6.5 (power die) + 15% crit × 6.5 = +10.5 per hit at T1.

**Cleave (T1 technique) — 2 STA, Commitment:**
- **Effect:** Attack with advantage. On hit: apply +2 Momentum if at 0 Momentum (instead of +1).
- **Drawback:** GS is Exposed until end of next turn — the first monster attack against GS that turn uses adv_hit_chance.
- **When to use:** Any round when Momentum = 0 (typically R1, or after reset).

**Simulation model:**
- R1: Cleave (2 STA). Hit chance = adv_hit_chance. On hit → M2 immediately (kicker).
  - Exposed: apply adv_hit_chance to first monster attack vs GS in R1 monster phase.
- R2: Basic attack (1 STA). M2 active → +2 flat + 0.33 crit EV. On hit → M3.
- R3+: Basic attack (1 STA). M3 active → +3 flat + 6.5 power die + 0.975 crit EV = +10.5/hit.
- Track: if GS misses any round → Momentum resets to 0 → use Cleave again next round if STA allows.

---

### HAMMER — Impact + Impact Decay + Charged Smash (T1)

**Impact:**
- +1 Impact per Hammer hit (cap 3 per creature).
- At 3 Impact → Stunned (skip turn, adv attacks vs it, escalating resistance +1 per subsequent stun).
- **Impact Decay:** −1 Impact at end of monster's turn if monster was NOT hit by Hammer that round.
  - Track decay explicitly. If Ham had a forced-idle round (climbing, underground, charging), Impact drops.

**Part Breaking:**
- Each Hammer hit: 1 Break Progress to targeted part (2 Progress if monster has 3 Impact when hit).
- Note part break progress alongside Impact tracking.

**Charged Smash (T1 technique) — 2 STA, Wind-Up:**
- **Charge (Turn 1, Action):** No attack. Cannot move >5 ft. Canceled if Ham moves >5 ft, takes damage, or is Stunned.
- **Release (Turn 2, Action):** Attack with +2d6 bonus damage (avg +7). Applies 2 Impact instead of 1.
  - If this reaches 3 Impact and Stuns: Stun lasts 2 rounds (instead of 1).
- **Cancel probability:** P(cancel) = P(monster hits Ham during charge turn).

**When to use Charged Smash:**
- Use CS when P(cancel) < 30% (monster hit chance vs Ham ≤ 30%) OR when Ham cannot attack anyway (underground phase, elevation delay).
- Do NOT use CS if monster hit chance vs Ham is >30% — expected value is negative vs basic attacks.
- If CS is used during a forced-idle round: R1 charge (no attack, no Impact), R2 release (+2 Impact, +7 dmg on hit).

**Stun timing with CS vs basic attacks (both paths):**

| Path | R1 | R2 | R3 | Stun round |
|------|----|----|-----|------------|
| Basic attacks | +1 Impact | +2 Impact | +3 → Stun | R3 |
| CS (safe window) | Charge (0 Impact) | +2 Impact | +3 → Stun | R3 |
| CS (forced idle R1) | 0 Impact (idle) | CS release +2 Impact | +3 → Stun | R3 |

CS advantage is the +7 bonus damage on release, not faster stun timing.

---

### WAND — Magical Clusters + Hex Charge T1 Passive + Draconic Channeling

**Magical Clusters (Core Mechanic):**
- **Place (Action, 1 STA):** Target makes DEX save vs Wand DC.
  - `attach_rate = clamp((DC - monster_DEX_mod - 1) / 20, 0.05, 0.95)`
  - On fail: cluster attaches to target. On success: cluster lands as terrain (5-ft square).
  - Max 3 clusters active at once.
- **Detonate (Fast Action, 1 STA):** Detonate any/all clusters.
  - Each detonated cluster deals Cluster Bomb damage (per tier table) to host and creatures in 10 ft.
  - **Stacking:** +1 damage die per additional cluster on same host (max +2 extra dice).
  - Terrain clusters use same damage in 10-ft burst; chain to nearby clusters (15 ft).
- **Remove:** Monster may spend Fast Action (STR check vs 10+INT mod). On fail: takes 1d6 damage.

**Cluster Bomb damage by tier:**
```
T1: 1d4+INT per cluster (avg = 2.5 + INT_mod)
1 cluster detonated: 1d4+INT
2 clusters on same host: 2d4+INT (stacking +1 die)
3 clusters on same host: 3d4+INT (stacking +2 dice, max)
```

**Hex Charge — Fire/Scorch (T1 Passive):**
- Scorch tick: 1d4 (avg 2.5) fire damage per attached cluster at the end of the monster's turn.
- On detonate: CON save vs Wand DC → fail → Burned condition (2.5/turn ongoing).
- `burned_fail_rate = clamp((DC - monster_CON_mod - 1) / 20, 0.05, 0.95)`

**Draconic Channeling (Dragonian race):**
- Spend +1 STA on any action → apply fire lineage rider (Burned) immediately.
- Model as: on R1 Place action, spend +1 STA total (2 STA) → if cluster attaches, Burned is applied directly (no CON save needed). Burned starts ticking from R2.

**Simulation model (T1 Dragonian Fire Wand):**

R1 (setup):
- Action: Place cluster (1 STA) + Draconic (+1 STA). Total: 2 STA.
- Attach rate: attach%. If attached → Burned active (no save needed, Dragonian).
- R1 damage: 0 direct.
- End of R1 monster turn: Scorch tick = attach% × 2.5.

R2+ (active cycle — Place + Detonate each round):
- Fast Action: Detonate previous cluster (1 STA). Detonation hits if cluster was attached.
  - Burst dmg = prev_attach% × cluster_dmg (e.g., 60% × 6.5 = 3.9 for 1 cluster, T1)
  - CON save on detonate → burned_fail_rate × triggers Burned (already active from Dragonian, so skip if already Burned).
- Action: Place new cluster (1 STA). New attach% applies.
- Scorch tick at end of monster's turn: attach% × 2.5 (from this round's placed cluster).
- Burned tick: 2.5 (passive, ongoing).
- STA per round R2+: 2 (Detonate + Place).

**Per-round EV summary (T1, INT mod +4, 60% attach rate):**
```
R1: 0 direct, 2 STA, Burned started, Scorch tick 1.5 (at monster end-turn)
R2+: 3.9 (detonate) + 2.5 (Burned) + 1.5 (Scorch) = 7.9/round at 2 STA
```

**Note on Wand vs basic attack model:**
Against single targets, cluster cycle DPR (7.9/round) is comparable to basic attack + Burned model (~8–10/round). The cluster system's advantage grows with stacking (2–3 clusters increase detonate burst significantly) and AoE. For single-boss T1 fights, kill round difference is typically ≤1 round vs the simplified model.

**When to stack clusters:** If the fight is projected to last 4+ rounds, place clusters without immediately detonating to build 2-stack. Detonate 2 clusters = 2d4+INT avg 9 instead of 6.5 (38% damage increase per detonate). Stack-building costs 1 extra setup turn.

---

### BOW — Focus + Power Shot (T1) + Arrow Types

**Focus:**
- +1 Focus if you do not move >5 ft on your turn. Retain if you move ≤5 ft or only swap arrows.
- Moving >5 ft, Knocked Prone/Stunned, or Dashing → Focus resets to 0.
- Each Focus adds +1 flat damage to your next Bow attack (consumed on hit). Cap: 3 Focus.
- **Simulation model:** Assume Bow stays stationary vs melee monsters → +1 Focus per round from R2. Reach F1 by R2, F2 by R3, F3 by R4 (cap). Track Focus consumed on each hit.

**Power Shot (T1 technique) — 2 STA, Wind-Up:**
- **Normal:** Turn 1 aim (Action, cannot move >5 ft). Turn 2 release (Action, advantage + +1 tier damage die).
- **At Focus 3:** Release Power Shot same turn (no wind-up). Consume all Focus on release.
- When to use Power Shot: When stationary at Focus 3 — same-turn release (advantage + +1d8) without sacrificing a setup turn.

**Power Shot at F3 EV (T1, DEX mod +4, vs AR 12):**
```
Standard hit (F3): 0.75 × (8.5+4+3) = 0.75 × 15.5 = 11.63 dmg at 1 STA
Power Shot (F3 same-turn): adv_hit_chance × (8.5+4+4.5) = 0.9375 × 17.0 = 15.94 dmg at 2 STA
```
Power Shot is less STA-efficient than basic attack at F3 but delivers a higher single-hit burst. Use Power Shot when burst timing matters (finishing blow, before forced movement).

**Arrow Types (2 uses per type per hunt):**

*Steel Bow (Support):*
- **Signal Arrow:** On hit, Mark target — all allies gain +1 to attack rolls until your next turn.
  - Model: Signal Arrow hit → +1 to all party attack rolls that round. Apply the +1 to all remaining attacks in Hunter Phase + next Hunter Phase.
  - Best used R1 or R2 to maximize benefit across multiple hunter attacks.
- **Binding Arrow:** On hit, STR save vs Bow DC. Fail → Staggered + cannot Fly until end of target's next turn.
  - `bind_fail_rate = clamp((DC - monster_STR_mod - 1) / 20, 0.05, 0.95)`
  - Against elevated or flying monsters: use Binding Arrow as first action to ground target.
  - If grounded: melee hunters can attack at full AR (no elevation penalty). Model the fight with and without Binding landing.

*Bone Bow (Offense):*
- **Piercing Arrow:** On hit, ignore 1 AR (2 AR at Focus 3). Model as: reduce target's effective AR by 1 (or 2) for this attack only. Recalculate hit_chance with reduced AR.
- **Barbed Arrow:** On hit, CON save vs Bow DC. Fail → Bleeding. Track Bleeding as ongoing damage per conditions table.

**Arrow usage decision:**
- Against aerial/elevated monsters: use Binding Arrow R1 to collapse elevation phase immediately.
- Against grounded monsters: Piercing Arrow for burst, Signal Arrow for party DPR boost.
- Calculate whether grounding the monster (Binding) or buffing all hunters (Signal) yields higher party DPR. Binding typically wins if it would unlock 2+ melee rounds of full-AR attack.

---

### BOOMERANG — Ricochet + Combo + Curve Shot (T1)

**Ricochet (single-boss context):**
- Ricochet requires another creature within 30 ft of the initial target. Against a single boss, no ricochet is possible.
- Boomerang functions as a pure ranged attacker in boss fights. Each hit: +1 Combo. Miss or no-attack turn: Combo resets to 0. Cap: 5 Combo.

**Combo spending:**
- 3 Combo → advantage on next attack (spend when fight ≤ 3 rounds remaining or at exactly C3 with no C5 prospect)
- 5 Combo → +2d6 avg +7 on next attack (preferred spend target; use when fight duration permits accumulation)

**Combo EV against single targets:**
At 70% hit chance, expected Combo at steady state ≈ 2.3. P(accumulate C5 unbroken) ≈ 17% per encounter.
Treat Combo as marginal: model as +0.5 expected DPR bonus per round at T1–T2 (EV spread across hit/miss probability). Do not show Combo as a per-round delta — note it in the report as a bonus floor.

**Curve Shot (T1 technique) — 1 STA, Action:**
- Same Stamina cost as a basic attack. Effect: ignore all cover, target creatures you cannot see directly.
- Against monsters with no cover: mechanically identical to a basic attack. Model as basic attack; note Curve Shot was available.
- Against monsters with cover (elevated, burrowing mid-phase): use Curve Shot. No hit penalty vs covered target. Model as full hit_chance instead of penalized hit_chance during cover phase.
- **When to use:** Use every round during any phase where the monster would otherwise have a cover bonus. Otherwise treat as basic attack.

**Windcutter (T2 technique) — 2 STA, Action, AoE:**
- 40-ft line, one attack roll vs all creatures in line. Against a single boss: identical to 1 ranged attack + DEX save vs DC or pushed 5 ft perpendicular.
- Combo Bonus: if 3+ Combo before use, line extends to 50 ft and +1d6 damage.
- **When to use:** Against a single boss, Windcutter (2 STA) deals same damage as a basic attack (1 STA) with a push rider. STA-inefficient. Only use Windcutter when the push effect has tactical value (forced repositioning, pushing into a hazard). Otherwise, use basic attacks.

**Simulation model:**
- R1+: Basic attacks (1 STA each). During covered phases, use Curve Shot (same cost, no penalty).
- Track Combo as a passive background counter; report expected bonus in the final report rather than per-round.
- No wind-up, no stacking mechanic to track explicitly.
- Parry/Block not available (Light armor, no Guard/Parry tags). Dodge is available.

---

4. **Called Shot consideration:**
   - Identify the most impactful part break (disables a key ability)
   - Estimate: if 1 hunter dedicates attacks to that part, how many rounds to break it?
   - Formula: `rounds_to_break = ceil(threshold / hit_chance_at_called_shot_penalty)`
   - Note: Called Shots typically have −2 to hit. Apply to hit_chance calculation.
   - Hammer Part Breaking: each hit accumulates Break Progress (1 per hit, 2 at 3 Impact). Note if part threshold is reachable in fight duration.

### Monster Phase

1. **Follow behavior guide priority:**
   - Use the ordered behavior from the monster's Behavior Guide section
   - Apply conditions that modify behavior (low HP, low Stamina, part broken)

2. **Ability use:**
   - If ability is off cooldown and trigger conditions are met → use it
   - Pay Stamina cost; start cooldown counter
   - Calculate expected effect (damage × fail_chance for saves; note riders)

3. **Attack distribution:**
   - Default: spread attacks across hunters (one attack per hunter when possible)
   - If behavior guide says to focus → focus weakest/lowest Stamina hunter
   - If a hunter is Sleeping/Prone/Exhausted → attacks target them with adv_hit_chance

4. **Hunter reactions:**
   - A hunter reacts if: hit_chance > 60% AND Stamina > 2 AND reaction is available
   - Dodge: reduces monster hit to dis_hit_chance; costs 1 Stamina
   - Block: adds +3 AR; costs 1 Stamina (recalculate hit_chance after AR bonus)
   - Parry: adds +1 AR; Parry check = hunter attack roll vs monster attack roll; if success → negate + riposte (half weapon damage, 0 Stamina); costs 1 Stamina
   - **Exposed (GS after Cleave):** Do NOT apply GS Parry during the Exposed round — attack lands with advantage. Resume Parry reactions R2+.
   - Reactions reset each round (1 per round per hunter)

5. **Stamina Tax:**
   - Apply any listed per-turn Stamina tax to monster at end of its turn

6. **Track monster Stamina:**
   - Deduct: attacks (1 each), abilities (listed cost), stamina tax
   - At Stamina ≤ 5: shift to retreat/conservative behavior per behavior guide
   - At Stamina = 0: apply Exhaustion rule from monster file

### Condition Tracking

Track active conditions each round:

- **Blind (hunter):** monster attacks vs that hunter use adv_hit_chance; hunter attacks use dis_hit_chance. Duration: until end of hunter's next turn.
- **Blind (monster):** hunter attacks use adv_hit_chance. Duration: as listed.
- **Sleep (hunter):** hunter skips turn, regains 4 Stamina, wakes on damage or INS check. INS check: fail_chance = 1 - clamp((21 - max(1, 10 - hunter_INS_mod)) / 20, 0.05, 0.95). Attacks vs sleeping hunter = adv_hit_chance.
- **Staggered:** cannot Move or take Action next turn. Can still use Fast Actions and Reactions.
- **Stunned (monster):** skips next turn entirely; attacks vs it = adv_hit_chance; auto-fails STR/DEX saves.
- **Prone (monster):** melee attacks = adv_hit_chance; ranged = dis_hit_chance. Stand costs 2 Stamina.
- **Chilled:** +1 Stamina cost per ability; model as +1 Stamina drain per action taken.
- **Burned:** 2.5 fire damage per round at end of target's turn. Ongoing until condition clears.
- **Exposed (GS):** All attacks vs the Exposed hunter use adv_hit_chance until end of the Exposed hunter's NEXT turn. Lasts through the monster phase that follows the turn Cleave was used.

### Round Summary Block — CONDENSED FORMAT

Use this compact format. One line per hunter, one line per monster action. No sub-calculations.

```
── R[N] ──────────────────────────────────────────────────────────
HUNTERS: [H1] [action] [X.X]dmg STA[X] | [H2] [action] [X.X]dmg STA[X] | ...
  ▸ Party dmg: [X.X] (cum: [X.X])  Conditions applied: [list or —]
MONSTER ([X] HP, [X] STA): [action1] → [target] [X.X]exp | [action2] → [target] [X.X]exp | DoT: [X.X]
  ▸ Dmg taken: [X.X] to [targets]  Conditions: [list or —]
STATE: Mon HP [X]/[Max] STA [X] | GS [hp]/[sta] M[x] | Ham [hp]/[sta] I[x] | Bow [hp]/[sta] F[x] | Wand [hp]/[sta] C[x]
```

**Rules for condensed output:**
- Compute all probability branches internally. Output only the expected (weighted) values.
- Do not show hit% or save% calculations inline — just the resulting expected damage.
- Only note technique usage, Breathing Turns, reactions, and condition changes — skip vanilla basic attacks.
- If a round has no interesting decisions (basic attacks all around, standard monster behavior), compress to 2 lines.
- For fights lasting 8+ rounds: summarize rounds in pairs after R4 ("R5-R6: party deals X.X total, monster deals X.X, notable: [event]").

---

## Step 8 — Termination

Stop simulation when ANY of these are true:

| Condition | Result |
|-----------|--------|
| Monster HP ≤ 0 | **Party Victory** |
| All hunters Exhausted in same round | **Monster Victory / Wipe** |
| 3 of 4 hunters Exhausted | **Critical pressure** — flag, continue 1 more round |
| Round 15 reached | **Stalemate** — flag loop breakdown |

---

**End of Phase 2:** After outputting the complete round log and termination result, stop and say:
> `▶ Phase 2 complete. Reply **report** for the final analysis.`

---

## ▶ PHASE 3 — Report (Step 9)

*Run when user replies `report`. Output the final report, flags, and tuning.*

## Step 9 — Output the Full Report

Output the final report. Stay concise. Reference the round log from Phase 2 — do not re-print it.

```
╔═══════════════════════════════════════════════════════════════╗
║ HUNT SIM — [Monster]  vs  [N]P  Tier [X]  HR [X]  EV mode   ║
╚═══════════════════════════════════════════════════════════════╝

ROSTER (compact — one block per hunter, see Step 4 format)
MONSTER (compact — see Step 5 format)
HIT TABLE (pre-computed, one-line per matchup)

ROUND LOG (condensed format from Step 7)

═══ RESULT: [Party wins R[X] / Monster wins R[X] / Stalemate] ═══
Mon HP: [X]/[Max] | Avg hunter HP: [X.X]/[Max] | Avg hunter STA: [X.X]/[Max]
Breaths: [X] | Parts broken: [list or none] | Mon STA→0: [R[X] or No]
Party DPR: [X.X] | Monster DPR: [X.X] | Kill round: [X]
STA pressure: [None/Low/Med/High/Crit] | HP pressure: [None/Low/Med/High/Crit]

⚡ FLAGS (only if issues found — 1 line each)
- [flag]: [brief explanation]

💡 TUNING (only if flags raised — numbered, 1-2 sentences each)
```

**Flag checklist** (raise if true):
- Monster STA exhausted before HP < 50%
- Party DPR > monster HP/4
- No Breathing Turns taken
- Technique-free baseline kills in same round
- Binding Arrow collapses a phase
- GS Exposed causes near-lethal spike
- Wand can't stack clusters (fight too short)

---

## Notes — System Rules Summary

- **Modifier formula:** `floor(stat_score / 2)` — NOT D&D standard
- **Hunter Stamina:** `6 + CON mod`
- **Monster Stamina:** `10 + CON score`
- **Proficiency:** Assume Trained (+2) for all hunters at their weapon's tier
- **Hunter HP:** `(CON score × 6) + Hunter Rank` — HR midpoint per tier (T1→2, T2→7, T3→12, T4→17, T5→22)
- **Initiative:** Not simulated per round. Hunters act first each round by default.
- **Multiple hits per round:** Hunters have 1 Action = 1 attack per turn (unless technique modifies this)
- **Monster attacks:** As listed in Attacks/Turn — distribute across hunters
- **Called Shot penalty:** −2 to hit vs standard attack bonus
- **Parry riposte:** `half weapon avg damage, 0 Stamina cost` — adds to that round's total
- **Stamina recovery on Breathing Turn:** +4 at end of turn (no Action taken)
- **Monster at 0 Stamina:** Apply Exhaustion rule from monster file, not generic rules
- **Condition durations:** "until end of next turn" = lasts through 1 round; track explicitly
- **Sleep recovery:** Hunter inside Sleep gains 4 Stamina; INS check to wake (DC 10 default unless monster file specifies)
- **Technique access:** T1 hunters have T1 technique. T2: T1+T2. Etc. Always model highest-tier technique usage at optimal timing.
- **Cleave (GS T1):** 2 STA, advantage, Exposed until end of next turn. Momentum kicker at 0 Momentum → M2 on hit. Use R1.
- **Charged Smash (Hammer T1):** 2-turn wind-up, +2d6 avg+7, 2 Impact on release. Do not use if monster hit chance vs Ham >30%.
- **Impact Decay:** −1 Impact per round Ham doesn't hit monster. Track explicitly.
- **Wand clusters:** Place = DEX save (not hit roll). Detonate = Fast Action. 2 STA per full cycle. Scorch ticks passively.
- **Power Shot (Bow T1):** 2-turn wind-up normally; release same turn at Focus 3. Advantage + +1 damage die.
- **Binding Arrow (Bow):** 2 uses/hunt. STR save on hit → Stagger + no fly. Critical vs aerial/elevated monsters.
- **Signal Arrow (Bow):** 2 uses/hunt. On hit, allies +1 to attack rolls until your next turn.
