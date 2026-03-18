# /sim-hunt

Simulate a hunt between a party of hunters and a designated monster using **expected-value math only** — no dice rolls. All outcomes use probability × average. Deterministic and fully reproducible.

**Default:** Party of 4 hunters at the monster's tier unless specified.

**Invocation format:**
```
/sim-hunt
  party: [N] [Race] [Weapon], [N] [Race] [Weapon], ...
  tier: [1–5]
  monster: [name or inline stat block]
```

---

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
| Arbalest | DEX | CON | — |
| Whip | DEX | STR | — |
| Claws | DEX | STR | — |
| Wand | INT | INS | — |
| Conduit | INT | CHA | — |
| Hunting Flute | CHA | INS | — |

### 3B — Apply Bonuses (in order)

1. **Background (highest-synergy):**
   - STR primary → Tribal Warrior: +2 STR, +1 CON
   - DEX primary → Wanderer: +2 DEX, +1 INS
   - INT/CHA primary → Scholar: +2 INT, +1 INS
   - *Note: +2 goes to primary stat, +1 to secondary unless CON is a better fit*

2. **Weapon stat bonuses** (from stat-badges in weapon page header):
   - Apply exactly as listed (e.g., Greatsword: +1 STR, +1 CON)

3. **Race stat bonus:**
   - If race bonus matches the weapon's primary stat → apply to primary stat
   - If no match → apply to CON
   - Human: +1 any → always apply to primary stat
   - Dragonian: +1 INT → apply to INT (favors Wand/Conduit); otherwise apply to CON
   - Trolian: +1 STR or DEX → apply to weapon primary if STR/DEX weapon; otherwise CON
   - Thalorim: +1 CON or INS → apply CON

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
HP = 20 + (CON score × 2)
```
*(Use this formula. If an explicit hunter HP formula is found in character creation, override with that.)*

**Hunter AR (by armor type):**
- STR/tank weapons (GS, Hammer, Spear&Shield, Greatshield): **Heavy Armor → AR 14** (no Dodge)
- DEX/mobile weapons (Bow, Arbalest, Whip, Claws): **Light Armor → AR 10 + DEX mod** (Dodge available)
- INT/CHA/support weapons (Wand, Conduit, Flute): **Medium Armor → AR 12** (Dodge available)

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
- Dragonian (Draconic Channeling): Once per turn, +1 Stamina cost → apply lineage rider. Model as: adds relevant condition to target 1/turn if worth the Stamina trade.
- Trolian Anchored Frame: If hunter doesn't move, +1 AR. Model as: melee hunters gain +1 AR effectively (they typically don't move).
- Trolian Flowstep: Ignore difficult terrain on move. No combat impact unless arena has difficult terrain (note if so).
- Trolian Rooted Resilience: On failed save, next Reaction costs 1 less Stamina. Model as: 1 Stamina saved per save failure per round.
- Thalorim (Tide Breath): No combat impact unless encounter is underwater.

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

## Step 6 — Core Math

All calculations use these formulas. Show your work inline.

### Hit probability
```
hit_chance = clamp( (21 - max(1, target_AR - attack_bonus)) / 20, 0.05, 0.95 )
```
Natural 1 always misses (5% floor miss), natural 20 always hits (5% floor hit).

### Disadvantage (Dodge applied, Blind condition)
```
dis_hit_chance = hit_chance²
```

### Advantage (attacks vs Sleeping, Prone, Exhausted targets)
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
   - Spend 1 Stamina
   - Record: expected damage this round

3. **Weapon mechanic modeling:**
   - **Momentum (Greatsword):** 0 stacks Round 1. From Round 2: assume 1 stack if last attack hit (adds +1 flat dmg). Stack 2 from Round 3+ on consecutive hits. Reset on miss or Dodge.
   - **Focus (Bow):** +1 Focus if hunter does not move. Assume hunter stays stationary vs melee monster → +1 Focus by Round 2, +2 by Round 3 (cap 3). Each Focus adds +1 dmg to next hit (consumed).
   - **Impact (Hammer):** Track impact on monster. At 3 Impact → Stunned (1 round). Stunned: skip monster's next turn, attacks vs it have advantage. Escalating resistance (+1 per stun).
   - **Other weapons:** Apply core mechanic if relevant; summarize effect.

4. **Called Shot consideration:**
   - Identify the most impactful part break (disables a key ability)
   - Estimate: if 1 hunter dedicates attacks to that part, how many rounds to break it?
   - Formula: `rounds_to_break = ceil(threshold / hit_chance_at_called_shot_penalty)`
   - Note: Called Shots typically have −2 to hit. Apply to hit_chance calculation.

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
- **Staggered:** cannot Move or Action next turn.
- **Stunned (monster):** skips next turn entirely; attacks vs it = adv_hit_chance; auto-fails STR/DEX saves.
- **Prone (monster):** melee attacks = adv_hit_chance; ranged = dis_hit_chance. Stand costs 2 Stamina.
- **Chilled:** +1 Stamina cost per ability; model as +1 Stamina drain per action taken.

### Round Summary Block

After each round, record:

```
─────────────────────────── Round [N] ────────────────────────────
MONSTER: HP [X]/[Max]  STA [X]/[Max]
Conditions on monster: [list or "none"]

HUNTER PHASE:
  [Hunter 1] [Race/Weapon]: STA [X] → Attack → hit [X]% → exp dmg [X.X]
  [Hunter 2] [Race/Weapon]: STA [X] → Breathing Turn → +4 STA
  [Hunter 3] [Race/Weapon]: STA [X] → Attack → [special mechanic note] → exp dmg [X.X]
  ...
  ▸ Party total damage this round: [X.X]  (cumulative: [X.X])

MONSTER PHASE:
  [Ability name] ([X] STA): [targets] → [effect] — fail rate [X]% / exp dmg [X.X]
  [Attack 1] ([X] STA): → [Hunter A] hit [X]% → exp dmg [X.X]  (Hunter reacts: Dodge)
  [Attack 2] ([X] STA): → [Hunter B] hit [X]% → exp dmg [X.X]
  Stamina Tax: −[X] ([reason])
  ▸ Monster STA after: [X]

END OF ROUND [N]:
  Monster HP: [X.X] remaining (dealt [X.X] cumulative)
  Hunter HP: [A]: [X]  [B]: [X]  [C]: [X]  [D]: [X]
  Hunter STA: [A]: [X]  [B]: [X]  [C]: [X]  [D]: [X]
  Active conditions: [list]
──────────────────────────────────────────────────────────────────
```

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

## Step 9 — Output the Full Report

```
╔══════════════════════════════════════════════════════════════════╗
║  HUNT SIMULATION — [Monster Name]  vs  Party of [N]  (Tier [X]) ║
║  Mode: Expected Value  │  Hunter baseline: HR [X]               ║
╚══════════════════════════════════════════════════════════════════╝

PARTY ROSTER
────────────
[Compact stat blocks from Step 4]

MONSTER
───────
[Compact stat block from Step 5]

ROUND LOG
─────────
[All round summary blocks]

═══════════════════════════════════════
RESULT: [Party wins Round X / Monster wins Round X / Stalemate]
═══════════════════════════════════════
Monster HP at end:         [X] / [Max]
Avg hunter HP remaining:   [X.X] / [Max]
Avg hunter STA remaining:  [X.X] / [Max]
Breathing Turns taken:     [X] total across all hunters
Part breaks achieved:      [list or "none"]

BALANCE METRICS
───────────────
Party DPR (avg damage/round):    [X.X]
Monster DPR (avg damage/round):  [X.X]
Projected kill round (no breath turns): [X]
Actual kill round:               [X]
Stamina pressure (hunters):      [None / Low / Medium / High / Critical]
HP pressure (hunters):           [None / Low / Medium / High / Critical]
Monster Stamina hit 0:           [Yes, Round X / No]

Stamina pressure rating guide:
  None     = No hunter took a Breathing Turn
  Low      = 1–2 Breathing Turns total, no Exhaustion
  Medium   = 3–5 Breathing Turns, or 1 hunter Exhausted briefly
  High     = Repeated Exhaustions, forced Breathing Turns every 2 rounds
  Critical = Multiple hunters Exhausted simultaneously

⚡ FLAGS
────────
[List only issues that were detected. Skip this section if none.]

Examples of things to flag:
- Monster Stamina exhausted before HP reached 50%
  → Stamina pool may be too small; creature collapses before hunt feels earned
- Party DPR exceeds monster HP/4 per round
  → Hunt resolves in <4 rounds; no puzzle engagement
- No hunter triggered a Breathing Turn
  → Monster applies no meaningful Stamina pressure
- Sleep loop landed but party had no trouble waking
  → Consider tightening INS save window or increasing Stamina drain
- Break zone never reached threshold
  → Consider lowering break threshold by 1 or adding Called Shot incentive
- Monster AR too low: hit rate >80% for all hunters
  → Monster is being hit freely; no threat of wasted turns
- Monster AR too high: hit rate <35% for all hunters
  → Combat feels like attrition without payoff

💡 TUNING SUGGESTIONS
──────────────────────
[1–3 specific, numbered adjustments based on flags raised.
 Only include this section if flags were raised.]
```

---

## Notes — System Rules Summary

- **Modifier formula:** `floor(stat_score / 2)` — NOT D&D standard
- **Hunter Stamina:** `6 + CON mod`
- **Monster Stamina:** `10 + CON score`
- **Proficiency:** Assume Trained (+2) for all hunters at their weapon's tier
- **Hunter HP:** `20 + (CON score × 2)` — use this unless explicit formula found
- **Initiative:** Not simulated per round. Hunters act first each round by default.
- **Multiple hits per round:** Hunters have 1 Action = 1 attack per turn
- **Monster attacks:** As listed in Attacks/Turn — distribute across hunters
- **Called Shot penalty:** −2 to hit vs standard attack bonus
- **Parry riposte:** `half weapon avg damage, 0 Stamina cost` — adds to that round's total
- **Stamina recovery on Breathing Turn:** +4 at end of turn (no Action taken)
- **Monster at 0 Stamina:** Apply Exhaustion rule from monster file, not generic rules
- **Condition durations:** "until end of next turn" = lasts through 1 round; track explicitly
- **Sleep recovery:** Hunter inside Sleep gains 4 Stamina; INS check to wake (DC 10 default unless monster file specifies)
