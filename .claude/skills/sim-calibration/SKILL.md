# /sim-calibration

Run a batch calibration sweep across all monsters at a given tier. Uses the same expected-value math as `/sim-hunt` but outputs a condensed per-monster summary and a cross-tier comparison table rather than full round logs.

**Purpose:** Spot outliers fast. Identify which monsters in a tier are too easy, too hard, or missing their design intent before any individual sims are run.

**Invocation format:**
```
/sim-calibration
  tier: [1–5]
  party: [N] [Race] [Weapon], ...   (optional — defaults to standard party for that tier)
  optimization: [median | optimized] (optional — defaults to median)
```

**Default party by tier (if not specified):**
- T1: Human Greatsword, Trolian Hammer, Dragonian Wand, Thalorim Bow
- T2: Human Greatsword, Trolian Hammer, Dragonian Wand, Thalorim Bow
- T3–T5: same composition unless user specifies otherwise

---

## Step 1 — Parse Inputs

Extract:
- Tier number
- Party composition (use default if not provided)
- Optimization level: `median` or `optimized` (default: `median`)

---

## Step 2 — Load Reference Files

Read ALL of these before processing any monster:

- `content/rules/tier-calibration.md` — tier envelopes, HP formula, AR ranges
- `content/rules/stamina.md` — stamina costs, recovery, exhaustion
- `content/rules/combat.md` — action economy, reactions
- `content/rules/conditions.md` — condition effects and durations
- Each weapon page for the party: `src/pages/weapons/[weapon-name].astro`

---

## Step 3 — Build Hunter Stat Blocks (Once)

Build the party stat block once — it applies to all monster sims in this sweep.

Use the same builder as `/sim-hunt` Steps 3A–3E:
- Base array: 5/5/4/3/3/3 (primary / CON / secondary / other)
- Apply Background → Weapon bonuses → Race bonus
- Apply tier scaling (T1=0 bonus points, T2=+2, T3=+4, T4=+6, T5=+8)
- Modifier: `floor(stat_score / 2)`
- Stamina: `6 + CON mod`
- HP: `20 + (CON score × 2)`
- AR by armor type: Heavy=14, Medium=12, Light=10+DEX mod
- Attack bonus: primary mod + Trained (+2)

Print the shared party roster block once at the top of the output.

---

## Step 4 — Discover Monsters

Search `content/monsters/**/*.md` for all monsters matching the target tier.

For each monster file found:
- Read the file
- Extract: Name, AR, HP, Stamina, Stamina Tax, Attacks/Turn, all abilities (costs + DCs), behavior guide, exhaustion rule

If a monster file's tier does not match the target tier, skip it and note it was skipped.

List the monsters found before running any sims.

---

## Step 5 — Per-Monster Condensed Sim

For each monster, run a condensed expected-value simulation. **No full round logs** — track numbers only and output a summary block.

### 5A — Pre-Sim Math

Calculate once per monster:

```
hunter_hit_chance   = clamp((21 - max(1, monster_AR - attack_bonus)) / 20, 0.05, 0.95)
dis_hit_chance      = hunter_hit_chance²
adv_hit_chance      = 1 - (1 - hunter_hit_chance)²
monster_hit_chance  = clamp((21 - max(1, hunter_AR - monster_attack_bonus)) / 20, 0.05, 0.95)
```

For each hunter, calculate:
- Base expected damage per round (hit_chance × avg_weapon_damage − 1 STA)
- Weapon mechanic bonus (Momentum/Focus/Impact — use round 2+ average values)

Sum to get **Party DPR baseline**.

For the monster, calculate:
- Expected damage per attack × Attacks/Turn = **Monster DPR baseline**
- Apply reactions (Dodge/Parry/Block) where applicable to reduce monster's effective DPR

### 5B — Run Rounds

Run rounds until monster HP ≤ 0 or round 8 (flag if still alive at round 8).

Each round, track:
- Party damage dealt (adjust for conditions — Blind, Sleep, Stun as applicable)
- Monster damage dealt (spread across hunters, apply reactions)
- Monster Stamina: deduct attacks + abilities + tax
- Hunter Stamina: deduct attacks + reactions; apply Breathing Turn if STA ≤ 2
- Active conditions: apply modifiers per conditions.md

**Shortcut rule:** If monster has no complex conditions or abilities that interact with hunter Stamina mid-fight, you may project kill round as:

```
projected_kill_round = ceil(monster_HP / adjusted_party_DPR)
```

Only use projection if the monster has:
- No multi-round condition loops (Sleep, Confusion, Charm)
- No Stamina drain riders
- No mode shifts that change DPR mid-fight

Otherwise run the full round-by-round track.

### 5C — Per-Monster Output Block

After simming each monster, record:

```
────────────────────────────────────────────────
MONSTER: [Name]  |  AR [X]  HP [X]  STA [X]
────────────────────────────────────────────────
Hunter hit rate:        [X]%   (dis: [X]%  adv: [X]%)
Party DPR (baseline):   [X.X] / round
Monster DPR (baseline): [X.X] / round
Projected kill round:   [X]
Actual kill round:      [X]   (or "≥8 — FLAG")

Stamina pressure:       [None / Low / Medium / High / Critical]
HP pressure:            [None / Low / Medium / High / Critical]
Breathing Turns taken:  [X]
Core mechanic fired:    [Yes / No / Partial]
Monster STA at death:   [X] / [Max]

Flags: [list or "none"]
────────────────────────────────────────────────
```

**Stamina pressure rating:**
- None = no Breathing Turns
- Low = 1–2 Breathing Turns total
- Medium = 3–5 Breathing Turns, or 1 hunter near Exhaustion
- High = repeated Exhaustions
- Critical = multiple simultaneous Exhaustions

---

## Step 6 — Cross-Tier Comparison Table

After all monsters are simmed, output the master comparison table:

```
╔══════════════════════════════════════════════════════════════════════════════════╗
║  CALIBRATION SWEEP — Tier [X]  |  Party: [N]  |  Optimization: [median/opt]    ║
╚══════════════════════════════════════════════════════════════════════════════════╝

| Monster | AR | HP | Kill Rd | Party DPR | Monster DPR | STA Press | HP Press | Core Fired | Flags |
|---------|----|----|---------|-----------|---------    |-----------|----------|------------|-------|
| [Name]  | [X]| [X]| [X]     | [X.X]     | [X.X]       | [level]   | [level]  | [Y/N/Part] | [#]   |
...

TIER TARGET (from tier-calibration.md):
  Kill round target:  4–5
  AR range:           [median range] / [optimized range]
  HP range:           [median range] / [optimized range]
  Stamina pressure:   Low–Medium
  HP pressure:        Low–Medium
  Core mechanic:      Must fire at least once
```

---

## Step 7 — Outlier Analysis

Compare each monster's results against the tier target envelope. Flag any monster that is:

**Too easy (undertuned):**
- Kill round < 3
- Party DPR > monster HP / 3
- No Breathing Turns AND no HP pressure
- Core mechanic never fired

**Too hard (overtuned):**
- Kill round > 7
- 2+ hunters Exhausted before kill
- Monster DPR > avg hunter HP / 3 per round
- Breathing Turns > 6 total

**Mechanic failure:**
- Core mechanic never fired (e.g., Sleep never landed, burrow never triggered)
- Monster Stamina exhausted before HP reaches 50%
- Save DCs so low the condition essentially never applies

For each outlier, output:

```
⚠️  [Monster Name] — [Undertuned / Overtuned / Mechanic Failure]
    Issue: [1-sentence description]
    Suggested fix: [AR ±X / HP ±X / DC ±X / behavior guide note]
```

---

## Step 8 — Priority Queue

After outlier analysis, output a prioritized list of which monsters need individual `/sim-hunt` runs or `/audit-monster` passes next:

```
PRIORITY QUEUE
──────────────
1. [Monster] — [reason: e.g., "mechanic never fired, needs full sim to diagnose"]
2. [Monster] — [reason: e.g., "kill round 2, severely undertuned"]
3. [Monster] — [reason: e.g., "all metrics green, low priority"]
```

---

## Step 9 — Save Results

Save the full output (comparison table + outlier analysis + priority queue) to:

```
testing results/sim-calibration-tier[X]-[optimization]-[date].md
```

Date format: YYYY-MM-DD

---

## Notes

- Use the same math formulas as `/sim-hunt` for all calculations
- Modifier formula: `floor(stat_score / 2)` — NOT D&D standard
- Hunter Stamina: `6 + CON mod` | Monster Stamina: `10 + CON Score`
- Breathing Turn: STA ≤ 2 → 0 dmg, +4 STA recovery
- Parry riposte: half weapon avg damage, 0 Stamina cost
- Sleep wakes on damage — model as 1-round condition that ends when monster hits sleeping hunter
- Stun: skip monster's next turn, adv attacks vs it; Impact threshold = 3 (Hammer)
- Momentum (GS): +1 flat dmg from R2, +2 from R3 on consecutive hits
- Focus (Bow): +1 dmg per stationary round, consumed on hit; cap 3
- Fire + Fragile Frame: 1d4+2 per turn ongoing (avg 4.5); model as flat 4.5/round if monster has Fragile Frame
- If optimization=optimized: use AR 13–14 and optimized HP multipliers from tier-calibration.md
- If optimization=median: use base AR and standard HP multipliers
