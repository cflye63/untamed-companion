# /sim-hunt

Simulate a hunt between a party of hunters and a designated monster using **expected-value math only** — no dice rolls. All outcomes use probability × average. Deterministic and fully reproducible.

**Default:** Party of 4 hunters at the monster's tier unless specified.

> **PHASED EXECUTION:** This simulation runs in phases to stay within response limits.
>
> **Single-form monsters (T1–T3):**
> - Phase 1 (`/sim-hunt`): stat blocks → pause. Phase 2 (`go`): full simulation → pause. Phase 3 (`report`): result + flags only.
> - `--auto` flag: runs all 3 phases without pausing. Use only for T1–T3 single-form monsters.
>
> **Multi-form monsters (T4–T5 with phase transitions):**
> - Phase 1 (`/sim-hunt`): stat blocks → pause.
> - Phase 2a (`go`): simulate Form 1 only, stop at transition threshold → pause.
> - Phase 2b (`go2`): simulate Form 2 only, stop at transition threshold → pause.
> - Phase 2c (`go3`): simulate Form 3 (final form) to termination → pause.
> - Phase 3 (`report`): result + flags only. Do NOT reprint stat blocks or round log.
> - **Do NOT use `--auto` for T4–T5 multi-form monsters** — the output will exceed response limits.
>
> Do NOT show intermediate probability branching or sub-calculations inline. Compute internally, output results only. Use ultra-compact round format (defined below). For T4-T5: compress vanilla rounds into pair-summaries starting at R3. Target: ≤15 lines per form phase.

**Invocation format:**
```
/sim-hunt [--auto]
  party: [N] [Race] [Weapon], [N] [Race] [Weapon], ...
  tier: [1–5]
  monster: [name or inline stat block]
```

`--auto` flag: skip all phase pause prompts and run all 3 phases to completion in one response.

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

Read **all of the following in a single parallel batch** before building anything. Do not read them sequentially.

- `content/rules/tier-calibration.md` — tier stat envelopes and HP formula
- `content/rules/stamina.md` — stamina costs, recovery rules, exhaustion
- `content/rules/combat.md` — action economy, reactions (Block/Parry/Dodge)
- `content/rules/conditions.md` — all condition effects and durations
- Monster file from `content/monsters/`
- Each weapon page: `src/pages/weapons/[weapon-name].astro` (one read per distinct weapon in the party)

Issue all read tool calls simultaneously — do not wait for one before starting the next.

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
| Spear & Shield | DEX | CON | Guard, Parry |
| Greatshield | CON | STR | Guard |
| Bow | DEX | INS | — |
| Arbalest | INT | DEX | — (no Guard/Parry) |
| Whip | INS | CHA | Parry |
| Claws | DEX | INS | Parry |
| Wand | INT | INS | — |
| Conduit | INS | CON | — |
| Hunting Flute | CHA | INS | — |
| Boomerang | INS | DEX | — |

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
- Heavy Armor → AR 14, no Dodge: GS, Hammer, Spear&Shield, Greatshield, Arbalest
- Light Armor → AR 10 + DEX mod, Dodge available: Bow, Whip, Claws, Boomerang
- Medium Armor → AR 12, Dodge available: Wand, Conduit, Flute

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

**End of Phase 1:** After outputting the roster, monster block, and hit table:
- If `--auto` was specified AND monster is single-form → immediately continue to Phase 2 without pausing.
- If monster has multiple forms → stop and say: `▶ Phase 1 complete. Reply **go** for [Form 1 name] simulation.`
- Otherwise stop and say: `▶ Phase 1 complete. Reply **go** to run the simulation.`

---

## ▶ PHASE 2 — Simulation (Subagent Dispatch)

*Run when user replies `go` (or `go2`/`go3` for multi-form phases). Dispatch a subagent to run the simulation; display its output, then pause.*

**Dispatch instructions:** Build an agent prompt and invoke it via the **Agent tool** (general-purpose subagent). The prompt must contain:

1. **Stat blocks:** Copy the hunter stat blocks and monster stat block verbatim from Phase 1 output.
2. **Monster file path:** Include the full filesystem path to the monster's source file.
3. **Which form to simulate:** State which form/phase this is (Form 1 / Form 2 / Form 3, or full fight for single-form monsters) and any transition threshold.
4. **Simulation rules:** Copy Steps 6–8 in full (Core Math, Run the Simulation, Termination) and all weapon mechanic tables from this skill into the prompt. Do not summarize — the subagent needs the complete rules to run correctly.
5. **Output contract:** End the prompt with: *"Run the simulation to termination (or transition threshold) following these rules exactly. Return ONLY: (a) the ultra-compact round log, (b) the termination/transition result line, (c) final state — monster HP/STA and each hunter HP/STA. Do not reprint stat blocks. Do not show derivations or probability math."*

After the subagent returns, display its output verbatim in your response.

---

*(Steps 6–8 below are the subagent's simulation instructions — include them in full in the agent prompt.)*

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

### HAMMER — Sunder + Cratering Blow (T1)

**Sunder:**
- +1 Sunder per Hammer hit on a target (max 3). Sunder is per-target.
- **Accuracy bonus:** Hammer attack rolls vs that target gain +X where X = current Sunder count.
- **Shove rider:** After any hit vs target with Sunder ≥ 1, may attempt Shove (STR save vs Hammer DC) — on fail, pushed 5 ft. Once per turn. Positional; skip in baseline EV.
- **Sunder 3:** Target makes CON and STR saves vs Hammer riders at disadvantage.

**Sunder hit chance adjustment:**
```
sunder_hit_chance = clamp( (21 - max(1, target_AR - (attack_bonus + sunder_count))) / 20, 0.05, 0.95 )
```

**Simulation model:**
- R1: Basic attack (1 STA). Hit → Sunder 1. +0 hit bonus this round.
- R2: Basic attack (1 STA). Sunder 1 → +1 to hit. Hit → Sunder 2.
- R3+: Basic attack (1 STA). Sunder 2 → +2 to hit. Hit → Sunder 3. All CON/STR save riders at disadvantage.
- Track Sunder count each round and recalculate hit_chance using sunder_hit_chance formula.

**Cratering Blow (T1 technique) — 2 STA, Action, Commitment:**
- On hit: deal weapon damage + **+1 extra Sunder** (usually Sunder 2 total from this single hit).
- Rider: CON save vs Hammer DC. Fail → Dazed for 1 turn. At Sunder 3: save at disadvantage.
- **When to use:** R1 (reach Sunder 2 immediately) OR when at Sunder 2 (reach Sunder 3 + trigger Daze rider).

**Simulation model with Cratering Blow:**
- R1: Cratering Blow (2 STA). Hit → Sunder 2. Daze rider: fail_chance × Dazed applied.
- R2: Basic attack (1 STA). Sunder 2 → +2 to hit. Hit → Sunder 3.
- R3+: Sunder 3 active. +3 to hit. All CON/STR save riders at disadvantage.

**Note:** Hammer value is accuracy scaling and AR reduction for the party (T2 Shatter Window: AR −2 on a part for all hunters). Stun exists at T4 (Seismic Slam at Sunder 3) — do NOT model Hammer as a stun machine at T1.

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

### BOOMERANG — Wayback Catch (INS/DEX)

**Wayback Catch (Core Mechanic):**
- **Throw (Action, 1 STA):** Attack vs AR (INS mod + proficiency). On hit → attempt Wayback Catch.
- **Wayback Catch:** Roll d20 + INS + proficiency vs DC 13.
  - Success: boomerang returns — may re-throw as FA (1 STA) this turn.
  - Fail: boomerang returns but no re-throw this turn.
- **Movement bonus:** If hunter moved ≥10 ft since last throw → return throw has advantage AND +1 damage die.
- **Per-turn limit:** Max 2 Wayback catches per turn (Action throw → FA return → FA second return).
- **Double-catch reward:** Both catches succeed → second return costs 0 STA and deals +1 Power Die.

**Catch probability:**
```
catch_chance = clamp( (21 - max(1, 13 - (INS_mod + proficiency))) / 20, 0.05, 0.95 )
```

**Chain EV per round (assuming movement ≥10 ft each round):**
```
Expected attacks = 1 + catch_chance + catch_chance²
Expected STA = 1 + catch_chance × 1 (Link 1) + 0 (Link 2 is free on double-catch)
Return throw: adv_hit_chance + +1 damage die bonus
```

**Simulation model:**
- Assume hunter moves ≥10 ft each round (skirmisher default).
- R1+: Action throw (1 STA). On hit → Catch (catch_chance). On catch → FA return with adv_hit_chance + +1 die (1 STA). Second catch → FA return at 0 STA + Power Die.
- A missed throw stalls the loop — no catch, boomerang returns but chain stops.

**T1 Ricochet Step (passive):**
- After hit: move up to 10 ft before catch attempt (no OA vs hit targets this turn).
- First successful catch each turn: +1 to hit on that return throw.
- Model: apply +1 to return throw attack bonus.

**T2 Split Return — 2 STA, Action:**
- Hit two separate targets within 15 ft of each other, OR two body parts on one Large+ creature. Separate attack roll each.
- If both hit: Wayback DC −2 for this catch and recover 1 STA at end of turn.
- Model as: 2 attacks (2 STA), if both hit → catch_chance uses DC 11 and net STA = 1 after recovery.

**Note:** Catch only triggers on a hit — missed throws break the loop entirely. Against high-AR targets, catch frequency drops sharply and the weapon underperforms. Dodge available (Light armor, no Guard/Parry).

---

---

### WHIP — Restraint (INS/CHA)

**Restraint (Core Mechanic):**
- After any Whip hit: may attempt Restraint as FA (1 STA). Target makes DEX save vs Whip DC.
  - **Fail:** Restrained — Speed 0, cannot Dodge.
  - **Success:** Backlash — you take 1d4+INS damage (avg 2.5 + INS_mod). Ignore in baseline EV.
- **Upkeep:** 1 STA/turn to maintain Restraint. Ends if upkeep is skipped.
- While Restrained: monster attacks vs Whip hunter lose Dodge option; Whip attacks vs Restrained = full hit_chance.

**Restraint rate:**
```
restrain_rate = 1 - clamp( (21 - max(1, whip_DC - monster_DEX_mod)) / 20, 0.05, 0.95 )
```

**Simulation model:**
- R1: Basic attack (1 STA). On hit → Restraint attempt (1 STA FA). restrain_rate × Restrained active.
- R2+: Upkeep (1 STA). Action attack with full hit_chance vs Restrained target (no Dodge possible).
- STA/round: 2 (attack + upkeep) while Restrained active.

**T1 Whiplash — 2 STA, Action, Req: Restrained:**
- Attack with advantage + +1 Power Die.
- Model as: when Restrained active, use Whiplash (2 STA, adv_hit_chance + Power Die) instead of basic attack.
- STA/round: 3 (Whiplash + upkeep). Use when STA > 3, otherwise revert to basic attack.

**Note:** Parry tag available as reaction. Whip value is lockdown — model Restraint landing rate as the key variable. Against monsters with high DEX saves, Restraint may not reliably land; flag if restrain_rate < 40%.

---

### SPEAR & SHIELD — Stance Switch (DEX attacks / CON save DC)

**Stance Switch (Core Mechanic):**
- Switch Stance: FA (1 STA). One stance active at a time. Choose on initiative (free).
- **Sentinel:** +1 AR, advantage on STR/DEX saves vs forced movement. Speed halved.
- **Assault:** +5 Speed. Once per turn: bonus FA spear jab (1 STA) in addition to Action attack.

**Simulation model (Assault default — baseline DPR check):**
- Each round: Action spear attack (1 STA) + FA jab (1 STA) = 2 attacks/round. Both use DEX mod + proficiency.
- Expected attacks/round: 2. STA/round: 2.

**Sentinel alternative (when monster hit chance vs S&S hunter > 65%):**
- Switch to Sentinel (FA, 1 STA that round only). Subsequent rounds: 1 attack/round (Action, 1 STA) + Block reaction.
- Sentinel AR: base + 1 (stance) + 1 (weapon badge) = +2 AR total vs base.
- Guardian's Rally (T3 passive in Sentinel): Block for adjacent ally → that ally gains +1 next attack and +1 STA.
  - Model: each Block in Sentinel provides 0.5 × avg_weapon_damage counter-thrust (T1 Point & Pivot), +1 STA recovered by ally.

**T1 Point & Pivot (passive):**
- Sentinel: after successful Block → free counter-thrust (0 STA). Model as: each Block success adds 0.5 × avg_weapon_damage to round damage.
- Assault: after FA jab hit → shift 5 ft (no OA). No DPR impact in baseline.

**Note:** Stance decisions are player reads — baseline models Assault. Flag if S&S hunter is taking heavy damage (may need Sentinel switch) or if Sentinel's ally Block bonus is being undervalued.

---

### CLAWS — Predatory Chain (DEX/INS)

**Predatory Chain (Core Mechanic):**
- On any Claw hit: may make one Follow-up Swipe as FA (1 STA). [Link 1]
- If Link 1 hits: may make one more Follow-up Swipe as Reaction (1 STA). [Link 2]
- Chain ends on any miss or after 2 follow-ups. Max 2 chain links per trigger.
- **Using Reaction on Link 2 = no Parry available this round.**

**Chain EV per round:**
```
Expected attacks = 1 + hit_chance + hit_chance²
Expected STA = 1 + hit_chance × 1 + hit_chance² × 1
At 70% hit chance: ~2.19 attacks/round, ~2.19 STA/round
```

**Simulation model:**
- Each round: base attack (1 STA). If hit → Link 1 FA (1 STA). If Link 1 hits → Link 2 Reaction (1 STA).
- When Link 2 Reaction is used: Parry unavailable this round. Model monster attacks vs Claws as unanswered (no Parry EV reduction).
- Parry tag available (but blocked by Link 2 usage). Dodge available (Light armor).

**T1 Rend — 2 STA, Action:**
- Two Claw attacks vs same target. Both hit → Bleeding (1d4/turn).
- Chain can trigger after Rend's last hit (Rend attacks don't consume chain links).
- Model R1: 2 attacks (2 STA, adv not granted). If last Rend hit connects → chain available.

**Note:** Chain frequency scales directly with hit chance. Against high-AR monsters hit_chance drops and chain frequency collapses — flag if hit_chance < 50% (chain barely fires). Parry vs Link 2 tradeoff is not capturable in EV; flag as decision point for player.

---

### ARBALEST — Tension (INT/DEX)

**Tension (Core Mechanic):**
- **Brace (no STA cost):** Spend all remaining movement → +1 Tension. Speed = 0, cannot Dash/Climb/Swim while Braced.
- **Load (FA or Action, 1 STA):** Must Load after each shot. +1 Tension.
- **Fire (Action):** Consume all Tension, resolve attack.
- Tension resets: on Fire, on any movement, or if Prone/Staggered/Stunned.

**Tension thresholds (bonuses apply only while Braced):**
- Tension 1: +1 to attack roll.
- Tension 2: +2 to attack roll AND +1 Power Die to damage.

**Optimal loop (Brace + Load FA + Fire each round):**
- Brace at start of turn (free): +1 Tension.
- Load as FA (1 STA): +1 Tension → total T2.
- Fire as Action: T2 bonuses active (+2 to hit, +Power Die). Tension resets.
- STA/round: 1 (Load FA only).

**Simulation model:**
- R1+: Each round uses optimal loop. hit_chance uses INT mod + proficiency + 2 (T2 Tension bonus).
- Damage per hit: avg_weapon_damage + avg_Power_Die (e.g., add avg_die of the weapon's damage die).
- STA/round: 1. Very stamina-efficient.
- Model as static position — hunter never moves. If monster has frequent forced-movement attacks, flag Tension loss risk.

**T1 Tether Shot — 2 STA, Action, Req: Braced:**
- On hit: target becomes Tethered (Speed −10 ft, 20 ft slack). STR save at slack limit → fail = Prone.
- Model: Tethered monster has Speed reduction; track slack if monster has Fly or extreme mobility.
- Still benefits from Tension bonuses if Braced when fired.

**Note:** Arbalest is the most STA-efficient ranged weapon at T2+ Tension. Completely dependent on staying stationary — any displacement ends Brace and the loop resets. Flag if monster has ≥2 forced-movement attacks per round.

---

### GREATSHIELD — Fort Up / Bastion (CON/STR)

**Fort Up (Core Mechanic):**
- Bastion Stance (Fort Up): FA (0 STA via T1 Fortress passive). Allies within 5 ft gain +2 AR.
- Block reaction: +3 AR vs incoming attack (1 STA). Recalculate monster hit_chance with +3 AR applied.

**Simulation model:**
- Each round: Action STR attack (1 STA). Block reaction when monster targets this hunter (1 STA).
- Bastion active by default: allies within 5 ft have effective AR +2. Apply to all adjacent hunters' monster-hit calculations.
- T1 Fortress passive: Fort Up costs 0 STA. First successful Block each round restores 1 STA. Net Block cost = 0 on first Block per round.

**DPR expectation:**
- Greatshield damage is intentionally low (STR secondary, small dice). Flag only if GS exceeds 40% of party DPR (over-investing in offense) or is below 10% (completely passive with no Block reactions either).
- Measure GS value primarily through damage reduction: (monster_hit_chance − reduced_hit_chance) × monster_avg_dmg × rounds.

**Note:** Guard tag (Block). No Parry, no Dodge (Heavy armor). Greatshield is the most defensive weapon — its contribution is party survivability, not DPR. Bastion AR bonus can be decisive for adjacent hunters against high-hit-rate monsters.

---

### CONDUIT — Channel / Aspects (INS/CON)

**Aspects (Core Mechanic):**
- Attune to an Aspect (elemental — Fire, Frost, Storm, etc.). Channel attacks apply that Aspect's ongoing condition.
- Channel: INS mod + proficiency vs target difficulty (treat as standard attack roll vs AR for baseline).

**Simplified simulation model:**
- Each round: Channel action (1 STA). Standard attack roll (INS mod + proficiency vs AR).
- On hit: Aspect condition begins (treat as ongoing DoT — model same as Burned at 2.5/turn for T1; adjust by tier).
- Ongoing condition ticks at end of monster's turn each round thereafter.

**T1 technique varies by Aspect:**
- Apply once at optimal timing (typically R1 or R2). Effect varies — treat as +1 Power Die equivalent on the round it fires.

**Note:** Conduit Aspect choices (which element, field effects, multi-hit AoE potential) are not modeled. Treat as a debuff + DoT platform for baseline. Flag if fight ends before R3 — Conduit's condition stacking hasn't had time to contribute meaningfully.

---

### HUNTING FLUTE — Songs (CHA/INS)

**Songs (Core Mechanic):**
- Flute plays Songs each round as Action or FA depending on tier. Songs apply party-wide effects.
- Direct attacks: CHA mod + proficiency vs AR. Low direct damage — Flute value is in party buffs.
- Starter weapons have different Song access depending on which Flute was crafted (read weapon page).

**Simplified simulation model:**

*Song of Vigor (+1 STA regen to each ally/round):*
- Model as: each hunter gains +1 STA per round the Song is active. Reduces Breathing Turn frequency.
- Effect: push back STA crisis rounds by approximately (4 hunters × 1 STA/round) = 4 STA/round party-wide.

*Song of Fury (+1 to attack rolls all hunters):*
- Model as: all hunters' hit_chance recalculated with +1 to attack bonus for that round.
- Apply to all attacks in the Hunter Phase the Song is active.

*Song of Warding (reduce incoming damage):*
- Model as: monster damage × (1 − 0.15) for the round (roughly 15% damage reduction).

**Note:** Evaluate Flute by party DPR increase, not Flute's own damage. If Flute's direct attack DPR > Song contribution, flag — the player is misusing the weapon. Flag if Song uptime < 60% of rounds.

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

### Round Summary Block — ULTRA-COMPACT FORMAT (mandatory for T4-T5)

**Target: 1 line per round normally, 2 lines when something notable happens.**

```
R[N][!]: Party [X.X]dmg (cum [X.X]) STA[-X] | M [actions]→[X.X]exp DoT[X.X] | M[HP/STA] GS[hp/sta] Wnd[hp/sta] Bm[hp/sta] Wh[hp/sta]
  [Notable only: technique name, condition applied/cleared, part break, reaction, breathing turn — skip line if nothing notable]
```

`!` suffix = notable round. Drop `!` for vanilla rounds.

**Example:**
```
R1!: Party 68.4dmg (cum 68.4) STA[-9] | M Spore+Tendrils×3→22.1exp DoT0 | M580/22 GS149/11 Wnd54/6 Bm62/7 Wh62/7
  GS Fortress active; Wand Draconic Place 90%→Burned; Boom T+R full loop; Whip SD hits 3 targets; GS Exposed
R2: Party 71.2dmg (cum 139.6) STA[-8] | M Tendrils×3+RootSlam→26.8exp DoT2.5 | M509/20 GS141/9 Wnd48/5 Bm56/6 Wh57/6
R3!: Party 74.8dmg (cum 214.4) STA[-8] | M Tendrils×3+RootSlam→24.1exp DoT2.5 | M432/18 GS133/8 Wnd41/4 Bm50/5 Wh50/5
  Wand 3-cluster detonation; Root Limbs part break (2/3 hits)
```

**Compression rules (T4-T5):**
- Compress into a pair-summary starting at R3 for any run of 2+ consecutive rounds with: no techniques, no conditions applied/cleared, no part breaks, no breathing turns, no STA crises.
- Pair format: `R[X]–R[Y]: Party [X.X]dmg/round ([X.X] total) | M avg [X.X]exp/round | [brief state]. End-state: M[HP/STA] GS[hp/sta] ...`
- T1-T3 single-form: compress after R4 as before.

**Rules:**
- Compute all probability branches internally. Output only weighted expected values.
- No hit% or save% inline — just resulting expected damage.
- Vanilla basic attack rounds with no notable events → single line, no `!`, no second line.

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

**End of Phase 2:** After outputting the complete round log and termination result:
- If `--auto` was specified → immediately continue to Phase 3 without pausing.
- Otherwise stop and say: `▶ Phase 2 complete. Reply **report** for the final analysis.`

---

## ▶ PHASE 3 — Report (Step 9)

*Run when user replies `report`. Output the final report, flags, and tuning.*

## Step 9 — Output the Full Report

Output the final report. **Do NOT reprint the roster, monster block, hit table, or round log** — the user already has them from Phase 1 and Phase 2. Output only the result summary, flags, and tuning.

```
╔═══════════════════════════════════════════════════════════════╗
║ HUNT SIM — [Monster]  vs  [N]P  Tier [X]  HR [X]  EV mode   ║
╚═══════════════════════════════════════════════════════════════╝

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
- **Hunter HP:** `(CON score × 8) + Hunter Rank` — HR midpoint per tier (T1→2, T2→7, T3→12, T4→17, T5→22)
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
- **Cratering Blow (Hammer T1):** 2 STA, Commitment. On hit: +1 extra Sunder (usually Sunder 2 total). CON save → Daze. Use R1 or at Sunder 2.
- **Sunder (Hammer):** +X to attack rolls where X = Sunder count. Sunder 3 = save riders at disadvantage. Cap 3. No decay mechanic.
- **Wayback Catch (Boomerang):** Catch only on hit. Roll INS + proficiency vs DC 13. Move ≥10 ft → return throw has adv + die bonus. Max 2 catches/turn. Double-catch = free second return + Power Die.
- **Tension (Arbalest):** Brace (free, spend movement) + Load FA (1 STA) = T2 each round (+2 to hit, +Power Die). Resets on any movement.
- **Restraint (Whip):** FA after hit (1 STA), DEX save. Fail = Speed 0, no Dodge. Upkeep 1 STA/turn. Parry available.
- **Predatory Chain (Claws):** Hit → Link 1 FA (1 STA). Link 1 hit → Link 2 Reaction (1 STA). Link 2 = no Parry that round. Parry tag otherwise available.
- **Stance Switch (S&S):** Assault = 2 attacks/round (Action + FA jab, 2 STA). Sentinel = 1 attack + Block, +1 AR. Switch costs FA (1 STA).
- **Wand clusters:** Place = DEX save (not hit roll). Detonate = Fast Action. 2 STA per full cycle. Scorch ticks passively.
- **Power Shot (Bow T1):** 2-turn wind-up normally; release same turn at Focus 3. Advantage + +1 damage die.
- **Binding Arrow (Bow):** 2 uses/hunt. STR save on hit → Stagger + no fly. Critical vs aerial/elevated monsters.
- **Signal Arrow (Bow):** 2 uses/hunt. On hit, allies +1 to attack rolls until your next turn.

---

## ⚠️ Reactive Mechanics — EV Limits

Several weapons have mechanics that depend on player decisions or timing that EV math cannot model:

| Weapon | What the sim cannot capture |
|--------|---------------------------|
| Claws | Link 2 vs Parry tradeoff — player chooses each round |
| Spear & Shield | Stance read — when to switch and for how many rounds |
| Whip | Restraint upkeep decisions — when to drop and reapply |
| Boomerang | Movement optimization — whether ≥10 ft is always achievable |
| Hammer | Shatter Window timing — coordinating T2 AR break with party |
| Greatshield | Bastion positioning — who is actually adjacent each round |

**Treat sim output as structural baseline:** Does the hunt end in a reasonable round range? Is HP/STA pressure appropriate? These are answerable. Per-weapon performance rankings and relative power comparisons require table play — the sim cannot resolve them.
