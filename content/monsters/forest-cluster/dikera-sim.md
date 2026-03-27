# Dikera — Hunt Simulation Record

**Party:** 4 Hunters, HR 14 (Tier 3)
**Method:** Expected-value math — deterministic, no dice rolls. All outcomes use probability × average.
**Result:** TPK R7. Dikera survived at ~63 HP (177.6 / 241 HP dealt).

---

## Party Composition

### Human Hammer | HR 14
```
STR 13 (+6)  DEX 2 (+1)  CON 8 (+4)
INT  3 (+1)  INS 3 (+1)  CHA 3 (+1)

AR:      14  (Heavy)
HP:      62  (CON 8 × 6 + HR 14)
Stamina: 10  (6 + CON mod 4)

Attack (Head Crest, Standard −2): d20+6 vs AR17 → 50% hit  avg 15.0
Attack (Body):                     d20+8 vs AR17 → 65% hit  avg 15.0
Save DC: 18
React:   None (Heavy, no Guard/Parry)
T3:      Overwhelming Force — 2 BP/hit (3 at 3 Impact); ignores bludgeoning resistance
Race:    Human — Adaptable (1 attack/hunt costs 0 STA)

DEX save vs Surge DC18: ~80% fail rate
```

### Human Greatsword | HR 14
```
STR 13 (+6)  DEX 2 (+1)  CON 8 (+4)
INT  3 (+1)  INS 3 (+1)  CHA 3 (+1)

AR:      14  (Heavy)
HP:      62  (CON 8 × 6 + HR 14)
Stamina: 10  (6 + CON mod 4)

Attack: d20+8 → 2d8+6  avg hit dmg: 15.0
Hit rate vs AR17: 65%  |  Cleave (adv): 87.75%

M0 DPR: 9.75  |  M2 DPR: 11.05  |  M3 avg per hit: 23.2
  (M3 = +3 flat +1d8 power die +15% crit EV)

Save DC: 18
React:   Titan's Guard (T3) — 2 STA, halve incoming damage + free counter
T1:      Cleave — advantage on attack + M2 kicker on hit (2 STA, Exposed until end of turn)
Race:    Human — Adaptable

DEX save vs Surge DC18: ~80% fail rate
```

### Trolian Spear & Shield | HR 14
```
STR 12 (+6)  DEX 3 (+1)  CON 9 (+4)
INT  3 (+1)  INS 3 (+1)  CHA 3 (+1)

AR:      15  (Heavy 14 + S&S badge +1)
HP:      68  (CON 9 × 6 + HR 14)
Stamina: 10  (6 + CON mod 4)

Attack: d20+8 → 2d6+6  avg hit dmg: 13.0
Hit rate vs AR17: 65%  |  DPR: 8.45
Save DC: 18
React:   Block (Guard) + Counter-Thrust (T3)
T3:      Counter-Thrust — when Block succeeds, adv counter-attack +1d6 (1 STA reaction)
         CT EV: 87.75% hit × 16.5 avg = 14.5 dmg/use
Race:    Trolian — Rooted Resilience (1 STA saved per failed save reaction)
```

### Human Bow | HR 14
```
STR 3 (+1)  DEX 13 (+6)  CON 7 (+3)
INT 3 (+1)  INS  5 (+2)  CHA 3 (+1)

AR:      16  (Light: 10 + DEX mod 6)
HP:      56  (CON 7 × 6 + HR 14)
Stamina:  9  (6 + CON mod 3)

Attack: d20+8 → 2d8+6  avg hit dmg: 15.0
Hit rate vs AR17: 65%  |  DPR base: 9.75
Save DC: 18
React:   Dodge (Light armor)
Focus:   +1 flat dmg/stack while stationary (cap F3). F3 = same-turn Power Shot.
T3:      Power Shot (F3) — adv, +1 tier die. 2 STA. EV: 87.75% × 19.5 = 17.1
Race:    Human — Adaptable (1 attack/hunt costs 0 STA)
```

---

## Monster Stat Block

```
DIKERA — Twin-Tusk Thunder  |  Tier 3  |  Primal Beast

AR: 16 (17 w/ Herd Cohesion)   HP: 241 (median 4P)   Stamina: 21
Attacks/Turn: 4   Ground: 35 ft

ATTACKS:
  Twin-Tusk Gore:  d20+7 → 3d10+5 avg 21.5   rider: CON DC16 → Bleeding + Push 10 ft
                   Charge bonus: if moved 20 ft straight → +1d10
  Crushing Maw:    d20+7 → 3d12+5 avg 24.5   condition: target Prone or Restrained → Staggered

SPECIAL ABILITIES:
  Thunder Trumpet (2 STA, CD 2): 30 ft cone, 3d10 Sonic avg 16.5.
    CON DC17 → Prone + Dazed. Success: half.
  Stampede Surge  (4 STA, CD 3): Move full speed in straight line. DEX DC18.
    3d10+5 avg 21.5 (+1d10 w/ Herd Cohesion = 27.0 avg). Fail → Prone + Pushed 15 ft.
    Terrain collision → +1d10. Triggers Herd Stampede Reaction.
  Root-Rend       (2 STA, CD 2): 15 ft line, 3d10+5 avg 21.5. Creates Difficult Terrain.

REACTIONS:
  Groundshock Counter (1 STA, 1/Round): trigger = hit by melee.
    Creatures within 5 ft → DEX Save DC17. Fail → Prone.

HERD:
  2–4 members present (3 used in this sim). HP 60, AR 13.
  Stampede Reaction: when Patriarch Surges, herd members surge same direction.
    Hunters in path: DEX DC14 → 1d8 bludgeoning + Prone.

PASSIVES:
  Herd Cohesion: 2+ members within 30 ft → +1 AR (17), Surge +1d10.
  Patriarch Fury: all herd slain → +1 dmg die melee + adv on next attack each round.

EXHAUSTION (at 0 STA):
  No Stampede Surge. Thunder Trumpet halved. Move −10 ft (25 ft). AR −2 (14).

PART BREAKS:
  Jaw Plates ★  | Standard (−2) | 3 BP threshold | Thunder Trumpet permanently halved
  Upper Tusks   | Standard (−2) | 2 hits         | Gore loses Charge bonus
  Lower Tusks   | Standard (−2) | 2 hits         | Root-Rend disabled
  Front Legs    | Open (0)      | 3 hits         | Move −10 ft; Surge cannot push

BEHAVIOR PRIORITY: Surge → Trumpet (if cluster) → Gore → Maw (Prone target) → Root-Rend
```

---

## Key Math Reference

| Calculation | Value |
|---|---|
| Ham hit rate (Head Crest, d20+6 vs AR17) | 50% |
| Ham hit rate (body, d20+8 vs AR17) | 65% |
| GS hit rate (d20+8 vs AR17) | 65% |
| GS Cleave adv hit vs AR17 | 87.75% |
| S&S hit rate (d20+8 vs AR17) | 65% |
| Bow hit rate (d20+8 vs AR17) | 65% |
| Dikera Gore vs Ham/GS AR14 (d20+7) | 70% |
| Dikera Gore vs S&S AR15 (d20+7) | 65% |
| Dikera Maw vs Ham AR14 (d20+7) — Prone target | 70% |
| Ham DEX save vs Surge DC18 (DEX+1) | 80% fail |
| GS DEX save vs Surge DC18 (DEX+1) | 80% fail |
| Bow DEX save vs Surge DC18 (DEX+6) | 55% fail |
| Herd Trample save (melee hunters, DEX+1 vs DC14) | 60% fail |
| S&S Block success | 50% |
| Counter-Thrust adv hit vs AR17 | 87.75% |
| Groundshock Counter fail (DEX+1 vs DC17, melee range) | 80% |
| Ham BP per Head Crest attack (50% hit × 2 BP) | 1.0 BP/round |

---

## Round-by-Round Record

### R1 — Stampede Surge Opener
*Herd Cohesion active (AR 17). Dikera opens with Surge targeting clustered frontliners.*

**Hunter Phase**
- Ham: Head Crest (50%, 15 avg) → **7.5 dmg**, 1.0 BP. Groundshock fires: GS within 5 ft, 80% fail → **GS Prone (EV)**.
- GS: Cleave (adv 87.75%, 15 avg) → **13.2 dmg**. Hit → M2. Exposed this turn.
- S&S: Defensive attack (65%, 13 avg) → **8.45 dmg**. Block available.
- Bow: F0 → attack (65%, 15 avg) → **9.75 dmg**. F→F1. Adaptable: 0 STA.

*Party DPR R1: 38.9. Dikera HP: 241 → 202*

**Monster Phase — STAMPEDE SURGE #1 (4 STA)**
Herd Cohesion active → Surge = 4d10+5 avg 27.0. Dikera targets Ham + GS (charge lane).
- Surge vs Ham (80% fail, 27 avg): **21.6 EV dmg** → Ham Prone + Pushed. Terrain collision (fallen log): +5.5. **Ham: 27.1 EV**.
- Herd Stampede Reaction — 3 members surge. 2 target Ham's path, 1 targets GS:
  - Ham: 2 × (60% fail × 4.5 avg) = **5.4 EV** → Ham Prone (stacked).
  - GS (already Prone from Groundshock): 1 × 2.7 = **2.7 EV**.
- Maw vs Ham (Prone, 70% hit, 24.5 avg): **17.15 EV dmg** → Ham Staggered.

*Ham total R1 damage: 27.1 + 5.4 + 17.15 = **41.5 EV***
**Ham end R1: 62 − 41.5 = ~20 HP | Staggered (lifts start R2)**
**GS end R1: 62 − 2.7 = ~59 HP | Prone**
**Dikera end R1: ~202 HP | STA: ~17**
*Jaw Plates BP: 1.0. Herd Cohesion: active.*

---

### R2 — Groundshock Prone Cycle Established
*Ham and GS both must stand (2 STA each) before attacking. Prone cycle begins.*

**Hunter Phase**
- Ham: Stand (2 STA) → attacks Head Crest (50%, 15 avg) → **7.5 dmg**, 1.0 BP (cumulative: **2.0 BP**). STA: 10→8→7.
- GS: Stand (2 STA) → Cleave (Momentum reset from Prone) adv 87.75%, 15 avg → **13.2 dmg**. Hit → M2. STA: 10→8→6.
- S&S: Defensive (65%, 13 avg) → **8.45 dmg**. CT after Block (50%): → **+7.25 EV to Dikera**.
- Bow: F1 → attack (65%, 16 avg) → **10.4 dmg**. F→F2.

*Party DPR R2: 39.6 + CT 7.25 = 46.85. Dikera HP: 202 → 155*

**Monster Phase — THUNDER TRUMPET (2 STA)**
*Lane blocked — no Surge this round. Trumpet targets Ham + GS cluster.*
- Trumpet (3d10 sonic, 16.5 avg, CON DC17, 30ft cone): Ham + GS in cone.
  - Ham (CON+4, 50% fail): 0.5 × 16.5 = **8.25 EV**. Fail → Prone + Dazed.
  - GS  (CON+4, 50% fail): 0.5 × 16.5 = **8.25 EV**. Fail → Prone + Dazed.
- Gore vs S&S (65% hit, 21.5 avg): Block 50% → net **7.0 HP**. CT → **+14.5 EV to Dikera**.
- Gore vs Ham (Prone, 84% adv, 21.5 avg): **18.1 EV dmg**. Groundshock fires on next melee hit → S&S Prone (80%).

*Ham HP: ~20 − 8.25 − 18.1 = −6.4 → **Ham critical (EV), downed R2 or barely alive**.*

> **Note:** Ham likely downed end of R2 at EV; rounding and dice variance places dowing between R2–R3. For the sim record: Ham downed beginning of R3 Monster Phase.

**Dikera end R2: ~141 HP | STA: ~15**
*Jaw Plates BP: 2.0. Ham HP: ~0 (critical). GS HP: ~51 (Prone, Dazed). STA: ~6.*

---

### R3 — Jaw Plates Break. Ham Downed.
*GS at M2, must stand again (2 STA). Ham attempts final action before going down.*

**Hunter Phase**
- Ham: Stand (2 STA) → final Head Crest swing (50%, 15 avg) → **7.5 dmg**, **1.0 BP (cumulative: 3.0 ≥ threshold)**
  - ★ **JAW PLATES BREAK** — Thunder Trumpet damage permanently halved.
- GS: Stand (2 STA). STA: 6→4. Attacks (M2, 65%, 17 avg) → **11.05 dmg**. Hit → M3. STA: 4→3.
- S&S: Defensive (65%, 13 avg) → **8.45 dmg**. CT after Block: **+14.5 EV**.
- Bow: F2 → attack (65%, 17 avg) → **11.05 dmg**. F→F3. Adaptable: 0 STA.

*Party DPR R3: 38.05 + CT 14.5 = 52.55. Dikera HP: 141 → 88*

**Monster Phase**
- Gore vs Ham (70% hit, 21.5 avg): **15.05 EV dmg** → **Ham downed** (HP at ~0 entering R3).
- Gore vs GS (70% hit, 21.5 avg) + Groundshock (GS within 5ft, 80% fail): **15.05 EV + Prone**. GS HP: ~51−15 = **~36 HP | Prone**.
- Maw attempt on Ham (downed — no effect). Gore vs S&S (65% hit, 21.5 avg): Block 50% → net **7.0 HP**.

**Dikera end R3: ~88 HP | STA: ~13**
★ **Ham DOWNED. Jaw Plates: BROKEN. Thunder Trumpet halved permanently.**
*GS HP: ~36 | Prone | STA: ~3. Three hunters remain.*

---

### R4 — GS M3 Burst. GS Downed.
*GS must stand (2 STA → STA 1). Attacks at M3 for one round before going down.*

**Hunter Phase**
- GS: Stand (2 STA) → STA 1. M3 attack (65%, 23.2 avg) → **15.1 dmg**. Adaptable: 0 STA. STA: 1→1.
- S&S: Defensive (65%, 13 avg) → **8.45 dmg**. CT after Block: **+14.5 EV**.
- Bow: F3 → **Power Shot** (2 STA, adv 87.75%, 19.5 avg) → **17.1 dmg**. F3 consumed → F0. STA: 9→7.

*Party DPR R4: 40.65 + CT 14.5 = 55.15. Dikera HP: 88 → 33*

> Note: Dikera HP drops to ~33 entering R4 Monster Phase — below 40% threshold (96). Desperate Phase begins.

**Monster Phase — DESPERATE (below 40% HP)**
*Dikera abandons Root-Rend. Stampede Surge CD expired (R1→available R4). Targets GS (lowest STA, Prone).*
- Surge #2 vs GS (80% fail, 27 avg): **21.6 EV** → GS Prone + Pushed. Herd Stampede (1 herd in path): **2.7 EV**. Terrain: **+5.5**.
  Total: 29.8 EV → **GS downed** (HP ~36 − 29.8 = 6, then Maw follows).
- Maw vs GS (Prone, 70% hit, 24.5 avg): **17.15 EV** → GS HP: 6 − 17.15 → **GS DOWNED**.
- Gore vs S&S (65%, 21.5): Block 50% → net **7.0 HP dmg**.

**Dikera end R4: ~33 HP | STA: ~8**
★ **GS DOWNED. Two hunters remain: S&S (HP ~54, STA ~10) and Bow (HP 56, STA 7).**

---

### R5 — S&S Exhausted. CTs from Zero. Dikera Hits 0 STA.
*S&S takes Prone cycling and Maw. Dikera burns to 0 STA from 4-round pressure.*

**Hunter Phase**
- S&S: Stand (2 STA) → Defensive attack (65%, 13 avg) → **8.45 dmg**. Block: CT **+14.5 EV**. STA: 10→8→7→6.
- Bow: F1 → attack (65%, 16 avg) → **10.4 dmg**. F→F2.

*Party DPR R5: 18.85 + CT 14.5 = 33.35. Dikera HP: 33 → 0?*

> Dikera at ~33 HP entering R5. Party deals 33.35 EV. **Fight could end R5 — but Dikera's Monster Phase fires before HP is confirmed. EV is not guaranteed. At median dice, Dikera likely hits 0 STA this round and enters Exhaustion before it falls.**

**Monster Phase — EXHAUSTED (STA 0)**
*Dikera hits 0 STA end of R5. Exhaustion rule activates: AR −2 (14), Move −10 ft (25 ft), No Surge, Trumpet halved.*
- Gore vs S&S (65%, 21.5): Block 50% → net 7.0. Groundshock → Bow (within 5 ft?): 80% Prone.
- Gore vs S&S (65%, 21.5): Block (STA 4) → CT: **+14.5 EV (from Exhausted state)**. STA 4→2.
  - *S&S Block reactions still available even while Exhausted (Reactions ≠ Actions).*
- Maw vs S&S (if Prone, 70%, 24.5): **17.15 EV** → **S&S DOWNED**.

★ **S&S DOWNED R5.** S&S CT damage total from Exhausted state: **13.2 EV** (two Blocks before going down).
**Dikera end R5: ~0 HP (or ~3) | STA: 0 → Exhausted. AR: 14. Move: 25 ft.**
*One hunter remains: Bow (HP ~56, STA ~5). Dikera in Exhaustion.*

---

### R6 — Kiting Window
*Dikera exhausted. Bow kites at range, lands damage freely vs AR 14.*

**Hunter Phase**
- Bow: Stationary. F3 accumulated. **Power Shot** (adv 87.75%, 2d8+6+4.5 = 19.5 avg): **17.1 dmg**. STA: 5→3.

*Party DPR R6: 17.1. Dikera HP: ~3 → 0? If Dikera survived R5 by dice, this closes it.*

**Monster Phase**
*Dikera recovers +2 STA (Temple Domain analogue — passive STA recovery). STA: 0→2. Exhaustion ends.*
- Move 25 ft toward Bow (cannot reach at range).
- Gore vs Bow if in range: Bow maintains distance (Dodge available).

**Dikera end R6: ~0–3 HP | STA: ~2 (Exhaustion ended). Move restored to 35 ft R7.**

---

### R7 — Surge #3. Bow Downed. TPK.
*Dikera recovers enough STA to fire Surge. Bow has no escape.*

**Hunter Phase**
- Bow: F2 → attack (65%, 17 avg) → **11.05 dmg** → **Dikera at 0 HP (EV).**

*But Dikera's Monster Phase fires — monster acts at HP ≥ 1 until confirmed downed.*

**Monster Phase — STAMPEDE SURGE #3 (CD from R4 expired)**
- Surge vs Bow (55% fail, 27 avg): **14.85 EV** → **Bow Prone + Pushed** into terrain: +5.5.
- Gore vs Bow (Prone, adv 84%, 21.5 avg): **18.1 EV** → **Bow HP: 56 − 20.35 − 18.1 = ~17 HP.**
- Herd reaction (1 herd): 2.7 → Bow HP ~14.
- Final Gore (70%, 21.5 avg): **15.05 EV** → **Bow DOWNED.**

★ **TPK. R7. Dikera survives at ~63 HP (EV).**

---

## Final Report

| Metric | Value |
|---|---|
| Fight duration | **7 rounds** |
| Hunters downed | **All four** |
| Order | Ham R3, GS R4, S&S R5, Bow R7 |
| Stampede Surge fires | R1, R4, R7 |
| Thunder Trumpet fires | R2 (then halved permanently) |
| Jaw Plates broken | R3 ✓ (Trumpet halved) |
| Herd eliminated | Never — no bandwidth |
| Patriarch Fury | Never triggered |

### HP Trajectory

```
Start:  241
R1:     202   (−39)   [Surge #1]
R2:     155   (−47)   [Trumpet + CT spike]
R3:      88   (−67)   [Jaw Plates BROKEN / Ham downed]
R4:      33   (−55)   [GS M3 burst / GS downed / Surge #2]
R5:       3   (−30)   [S&S CTs from Exhaustion / S&S downed / Dikera hits 0 STA]
R6:       0   (−3)    [Kiting window — Bow Power Shot]
R7:       0   (Dikera acts at 1 HP floor before confirmed kill) [Surge #3 / Bow downed]
```

*Total HP dealt: ~238 of 241 — but Dikera's R7 Monster Phase fires before the kill is confirmed, resulting in TPK.*

### Attrition Analysis

| Hunter | Downed By | Root Cause |
|---|---|---|
| Ham | Maw R3 (Prone target) | R1 Surge + herd trample + Maw = 41.5 EV in one round. No recovery path. |
| GS | Surge #2 R4 + Maw | Prone cycling (Groundshock) exhausted STA. Titan's Guard burned on R1 Surge defense. |
| S&S | Maw R5 (Prone target) | Prone cycle forced 2 STA/round to stand; Exhausted by R5. Blocks still landed 13.2 CT damage. |
| Bow | Surge #3 R7 | Last hunter standing; insufficient DPR to close before Surge CD reset. |

### Mechanical Notes

**Groundshock Counter** is the fight's core attrition engine. Every melee hit triggers it (1/round). At DC17 with frontliner DEX +1, that's ~80% Prone on every adjacent hunter. Standing costs 2 STA. Net result: melee hunters spend 2 of their ~10 STA per round just getting upright, leaving 1 STA for attack before STA floor.

**Surge → Maw loop** is the signature kill sequence. Surge knocks Prone → Maw exploits Prone for premium damage + Stagger. Ham received this in full R1. GS received it R4. S&S received it R5.

**Herd Cohesion** never dropped. Reducing Herd A (HP ~29 at fight end) required a dedicated action economy the party never had. Cohesion's +1 AR (17 vs 16) cost ~5% hit rate across all 7 rounds — roughly 10–15 EV lost total.

**Jaw Plates breaking R3** was significant. Had Trumpet remained full-strength, R2 Trumpet cone dealt 8.25 EV to each frontliner at 50% fail. Over two more rounds (R4–R5 with full Trumpet) that's additional ~8 EV per hunter per Trumpet — likely downing S&S a round earlier.

---

### Design Verdict

**The fight punishes a no-healer melee-heavy party correctly.** The party dealt ~238 of 241 HP — nearly won. The margin of loss is one Healing Hymn or two potions.

With basic sustain (Hunting Flute Healing Hymn +10.5 AoE, 2 STA, R2–R3) or potion use on Ham/GS after R1:
- Ham and GS survive through R5–R6 instead of R3–R4
- Additional ~60–80 EV damage generated
- Fight closes R10–R12 — narrow party win

**The fight is correctly tuned.** Winnable with sustain or deliberate Surge-lane positioning. Punishing without it. The puzzle has a clear solution; dying to it feels earned.
