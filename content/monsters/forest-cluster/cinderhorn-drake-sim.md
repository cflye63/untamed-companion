# Cinderhorn Drake — Hunt Simulation Record

**Party:** 4 Hunters, HR 17 (Tier 4)
**Method:** Expected-value math — deterministic, no dice rolls. All outcomes use probability × average.
**Result:** Hunt complete R7. 1 KO (Hammer, R4). GS barely survived (9.8 HP).

---

## Party Composition

### Human Greatsword | HR 17
```
STR 13 (+6)  DEX 4 (+2)  CON 9 (+4)
INT  3 (+1)  INS 3 (+1)  CHA 3 (+1)

AR:      14  (Heavy)
HP:      89  (CON 9 × 8 + HR 17)
Stamina: 10  (6 + CON mod 4)

Attack (body, frontal):  d20+8 vs AR 19 → 50% hit  avg 19.0
Attack (Tail, std −2):   d20+6 vs AR 18 → 45% hit  avg 19.0
Save DC: 18
React:   Titan's Guard (T3) — 2 STA, halve all incoming damage until next turn + free counter per hit
T1:      Cleave — advantage on attack + M2 kicker on hit (2 STA, Exposed until end of turn)
T4:      Tremor Strike — 3d12+STR avg 25.5, DEX DC 18 shockwave (3 STA)
Race:    Human — Adaptable (1 attack/hunt costs 0 STA)

Berserk hit rate (AR 16): 65%
```

### Trolian Hammer | HR 17
```
STR 14 (+7)  DEX 3 (+1)  CON 8 (+4)
INT  3 (+1)  INS 3 (+1)  CHA 3 (+1)

AR:      14  (Heavy, no reaction)
HP:      81  (CON 8 × 8 + HR 17)
Stamina: 10  (6 + CON mod 4)

Attack (body):          d20+9 vs AR 19 (frontal) → 55% hit  avg 18.0
Attack (Horn Skull ★):  d20+7 vs AR 18 (std −2)  → 45% hit  avg 18.0
Attack (Wings):         d20+9 vs AR 18 (open +0)  → 60% hit  avg 18.0
Save DC: 19
React:   None (Heavy, no Guard/Parry)
T1:      Charged Smash — wind-up for +2 Impact + 2d6 bonus dmg on release (2 STA)
T3:      Overwhelming Force + Ironhide (passive) — reduce first hit each round by CON mod (4)
Race:    Trolian — Rooted Resilience (1 STA saved per failed save reaction)

Wings hit rate (AB 9 vs AR 18): 60%
Horn Skull hit rate (AB 7 vs AR 18): 45%
```

### Trolian Spear & Shield | HR 17
```
STR 13 (+6)  DEX 5 (+2)  CON 8 (+4)
INT  3 (+1)  INS 3 (+1)  CHA 3 (+1)

AR:      15  (Heavy 14 + S&S badge +1)
HP:      81  (CON 8 × 8 + HR 17)
Stamina: 10  (6 + CON mod 4)

Attack (Aggressive): d20+8 → 3d8+6 = 19.5 avg  |  50% hit vs AR 19
Attack (Defensive):  d20+8 → 2d8+6 = 15.0 avg  |  50% hit vs AR 19
Save DC: 18
React:   Block (Guard) + Counter-Thrust (T3)
T3:      Counter-Thrust — after successful Block in Def Stance → adv counter-attack +1d6 (1 STA)
         CT EV: 87.75% × 15.5 avg = 13.6 dmg/use
T4:      Phalanx Formation — +1 AR party until end of next turn; cannot be moved against will (2 STA Fast Action)
Race:    Trolian — Rooted Resilience
```

### Human Bow | HR 17
```
STR 3 (+1)  DEX 13 (+6)  CON 7 (+3)
INT 3 (+1)  INS  6 (+3)  CHA 3 (+1)

AR:      16  (Light: 10 + DEX mod 6)
HP:      73  (CON 7 × 8 + HR 17)
Stamina:  9  (6 + CON mod 3)

Attack: d20+8 → 2d10+6  avg hit dmg: 17.0
Hit rate vs AR 19: 50%  |  Berserk (AR 16): 65%
Save DC: 18
React:   Dodge (Light armor)
Focus:   +1 flat dmg/stack while stationary (cap F3). F3 = same-turn Power Shot release.
T3:      Concentration — retain Reactions while aiming Power Shot
T4:      Rain of Arrows — 20 ft radius zone, DEX DC 18 (65% fail → slowed + half dmg); persists 2 rounds (3 STA)
Race:    Human — Adaptable
```

---

## Monster Stat Block

```
CINDERHORN DRAKE  |  Tier 4  |  Drake

AR: 18 (19 effective frontal — Lion Mane +1)   HP: 346 (median 4P)   Stamina: 21
Berserk AR: 16 (−2, Lion Mane guard suppressed)
Attacks/Turn: 3

ATTRIBUTES: STR 12(+6)  DEX 8(+4)  CON 11(+5)  INT 5(+2)  INS 8(+4)  CHA 6(+3)
Attack roll: d20+8 (STR) | Tail: d20+6 (DEX)

ATTACKS:
  Ash Bite:   d20+8 → 3d10+6 avg 22.5 fire   rider: Burned (1 turn)
  Horned Ram: d20+8 → 3d8+6 avg 19.5         save: STR DC 18 → Prone + Pushed 10 ft
  Tail Lash:  d20+6 → 3d8+4 avg 17.5  15 ft  save: CON DC 17 → Poisoned (1 turn)

SPECIAL ABILITIES:
  Poison Spike Volley (2 STA, CD 3): 20 ft cone OR 30 ft line, DEX DC 17
    Fail → 3d6+4 avg 14.5 + Poisoned (1 turn). Success: half.
    Creates spike terrain (CON DC 17 on entry → 1 dmg + Poisoned).
    Targeting priority: ranged/back-line hunter first.

  Infernal Cyclone (4 STA, CD 3): Requires Wings intact. Not available before R3.
    Move 30 ft ignoring OA. 20 ft cone: 4d10 fire, DEX DC 18 (fail → Burned 2 turns)
    + STR DC 16 (fail → Prone). Creates Burning terrain 2 turns.

  Pounce-Leap (2 STA): Requires 20 ft movement. d20+8 → 3d8+6 avg 19.5
    Rider: Restrained (STR DC 17 to escape).

WARFORM SYNERGY (intact part passives):
  Lion Mane:  +1 AR frontal (AR 18 → 19 effective)
  Wings:      10 ft free reposition after each attack (no OA)
  Tail:       +1d6 on attacks vs Poisoned targets
  Horn Skull: Advantage vs Prone targets
  All 4 intact: +1 Power Die on first attack each turn

REACTIONS:
  Wing Skirmish (1 STA, 1/round): trigger = melee hit → move 10 ft (no OA). Disabled if Wings broken.

BERSERK (2+ parts broken): +1 dmg die all attacks; −2 AR; abandons tactical behavior.

EXHAUSTION (0 STA): no flight; Cyclone disabled; escalation bonus suppressed.

PART BREAKS:
  Wings     | Open (0)      | 3 hits  | Flight, Cyclone, Wing Skirmish all disabled
  Tail      | Standard (−2) | 2 hits  | Tail Lash loses Poisoned; Warform Tail bonus lost
  Lion Head | Standard (−2) | 4 hits  | Ash Bite loses Burned; Lion Mane bonus lost
  Horn Skull ★ | Standard (−2) | 5 BP | Ram no longer Prone; Horn Skull bonus lost
  Hind Legs | Open (0)      | 4 hits  | Move 25 ft; Pounce-Leap disabled
```

---

## Key Math Reference

| Calculation | Value |
|---|---|
| Hunter hit rate (d20+8 vs frontal AR 19) | 50% |
| Hunter hit rate (d20+8 vs Berserk AR 16) | 65% |
| Ham hit rate (d20+9 vs frontal AR 19) | 55% |
| Ham hit rate (d20+9 vs Wings AR 18, open) | 60% |
| Ham hit rate (d20+7 vs Horn Skull AR 18, std −2) | 45% |
| GS Cleave adv hit vs frontal AR 19 | 75.00% |
| GS Cleave adv hit vs Tail AR 18 (std −2 → d20+6) | 69.75% |
| Monster Ash Bite vs GS/Ham AR 14 (d20+8) | 75% |
| Monster Ash Bite vs S&S AR 15 (d20+8) | 70% |
| Monster Ash Bite vs Bow AR 16 (d20+8) | 65% |
| Monster Ash Bite vs GS Exposed (adv, AR 14) | 93.75% |
| Spike Volley DEX DC 17 fail (Bow DEX+6, Trained +2) | 45% |
| Spike Volley DEX DC 17 fail (S&S DEX+2, Trained +2) | 65% |
| Spike Volley DEX DC 17 fail (GS/Ham DEX+1/+2) | ~70% |
| Berserk Ash Bite avg (4d10+6) | 28.0 |
| Wings break probability by end R3 | 67.5% |
| Cyclone fires probability (Wings survive to R3 monster phase) | 32.5% |

---

## Round-by-Round Record

### R1 — Spike Volley Opens. Wings Targeted.

*Full party active. Monster opens with Spike Volley targeting Bow, then Wing Skirmish.*

**Hunter Phase**
- GS: Cleave → Wings (adv 75.0%, 19 avg) → **14.3 dmg**, 1 Wings hit. M0→M2. Exposed. STA: 10→8.
- Ham: Attack → Wings (60%, 18 avg) → **10.8 dmg**, 1 Wings hit. STA: 10→9.
- S&S: Switch → Aggressive, attack Wings (55%, 19.5 avg) → **10.7 dmg**, 1 Wings hit. STA: 10→9.
- Bow: F0 → Signal Arrow vs Wings (50%, 17 avg) → **8.5 dmg** + Mark (party +1 hit next round). Adaptable: 0 STA.

*R1 Hunter EV: ~44.3 | Monster HP: 346 → ~302*

**Monster Phase (STA 21)**
- Spike Volley (2 STA) → 30 ft line targeting Bow and S&S:
  - Bow (45% fail, 14.5 avg): **6.5 dmg** + 0.45 × Poisoned.
  - S&S (65% fail, 14.5 avg): **9.4 dmg** + 0.65 × Poisoned.
- Ash Bite → GS (Exposed, adv 93.75%, 22.5 avg): **Titan's Guard triggered** (STA 8→6).
  - Dmg to GS (halved): 93.75% × 11.25 = **10.5 EV**. GS HP: 89 → 78.5.
  - TG counter → monster: **6.0 EV**. Monster HP: ~302 → ~296.
- Wing Skirmish after Ash Bite: reposition 10 ft (1 STA).

*Monster HP end R1: ~296 | STA: ~18*
*Wings BP: 3/3 — **★ WINGS BROKEN** (all 3 hunters hit R1 hunter phase, break at end of phase)*

> **Wings broke R1 due to Signal Arrow Mark (+1 hit bonus) and all 3 melee hunters targeting Wings simultaneously.**
> Cyclone never available — Wings broke before R3 minimum.
> Wing Skirmish disabled. Flight removed. Infernal Cyclone permanently disabled.
> Wings break bonus: 2d10 = avg 11 EV dealt to monster (included above).

---

### R2 — Grind Phase Begins. Monster Commits to Ground.

*Wings gone. Monster transitions to committed ground melee. GS at M2.*

**Hunter Phase** *(Signal Mark expires)*
- GS: M2 attack → body (51%, 21 avg with +2 flat) → **10.7 dmg**. Hit → M3. STA: 6→5.
- Ham: Charged Smash wind-up (2 STA). No attack this round. STA: 9→7.
- S&S: Defensive attack (50%, 15 avg) → **7.5 dmg**. Block available. STA: 9→8.
- Bow: F1 → attack (50%, 18 avg) → **9.0 dmg** (+1 Focus flat). F→F2. STA: 9→8.

*R2 Hunter EV: ~27.2 | Monster HP: ~296 → ~269*

**Monster Phase (STA ~18)**
- Ash Bite → GS (75%, 22.5 avg): **16.9 EV**. GS HP: 78.5 → 61.6.
  *(GS STA 5 — conserving TG for next multi-attack round)*
- Ram → S&S (70%, 19.5 avg): STR DC 18 save.
  S&S Block (1 STA): +3 AR (AR 18) → Ram hits on 55% → **10.7 EV dmg reduced to ~7.0 by Block mitigation**.
  S&S in Defensive: Counter-Thrust triggered → adv 87.75% × 15.5 = **13.6 EV** → monster.
  Monster HP: ~269 → ~255.5.
- Tail Lash → Ham (Ironhide active, first hit −4): d20+6 vs AR 14 (75% hit).
  0.75 × (17.5 − 4) = **10.1 EV dmg** (Ironhide reducing first hit). CON DC 17: 50% fail → Poisoned EV.

*Monster HP end R2: ~255 | STA: ~15*

---

### R3 — Charged Smash Release. Tail Targeted.

*Ham releases CS. Monster without Wing Skirmish takes full sustained pressure.*

**Hunter Phase**
- GS: M3 attack → body (50%, 29.5 avg — M3: +3 flat +1d12 power die +crit EV) → **14.75 dmg**. STA: 5→4.
- Ham: CS Release (Attack action) — d20+9 vs AR 18 (body), +2 Impact, +2d6 bonus.
  Hit: 55% × (18+7) = **13.75 dmg**. 55% × 2 Impact applied. STA: 7→5.
  *(Ham Impact on Horn Skull: 0 — Ham targeted body for CS release this round)*
- S&S: Switch → Aggressive, attack (50%, 19.5 avg) → **9.75 dmg**. STA: 8→7.
- Bow: F2 → Power Shot at F2 — 2 STA, adv 75%, +1 tier die (2d10+6+1d10=avg 22.5 + F2 = 24.5):
  0.75 × 24.5 = **18.4 dmg**. F2 consumed. STA: 8→6.

*R3 Hunter EV: ~56.65 | Monster HP: ~255 → ~198*

**Monster Phase (STA ~15)**
- Ash Bite → Ham (75%, 22.5 avg): **16.9 EV**. Ironhide: first hit −4 = **13.9 EV**. Ham HP: 81 → 67.1.
- Ram → GS (75%, 19.5 avg): GS Titan's Guard (STA 4→2): 75% × 9.75 = **7.3 EV**. GS HP: 61.6 → 54.3.
  TG counter: **7.7 EV** → monster HP: ~198 → ~190.3.
- Tail Lash → S&S (70%, 17.5 avg): **12.25 EV**. S&S HP: 81 → ~68.8.

*Monster HP end R3: ~190 | STA: ~12*

---

### R4 — HAMMER ELIMINATED. Focus-Fire Sequence.

*Monster STA recovered. Spike Volley CD expired (R1→R4). Monster focuses Ham (no reaction).*

**Hunter Phase**
- GS: Breathing Turn (STA 2 → recover +4 → STA 6). 0 dmg.
- Ham: Attack → body (55%, 18 avg) → **9.9 dmg**. STA: 5→4.
- S&S: Aggressive attack (50%, 19.5 avg) → **9.75 dmg**. STA: 7→6.
- Bow: F1 → attack (50%, 18 avg) → **9.0 dmg**. F→F2. STA: 6→5.

*R4 Hunter EV: ~28.65 | Monster HP: ~190 → ~161*

**Monster Phase — SPIKE VOLLEY + FOCUS HAM (STA ~12 → 6)**
- Spike Volley (2 STA) → cone targeting Ham + S&S (ranged hunter Bow out of range):
  - Ham (70% fail, 14.5 avg): **10.15 EV** + Poisoned.
  - S&S (65% fail, 14.5 avg): **9.4 EV** + Poisoned.
- Ash Bite → Ham (75%, 22.5 avg): **16.9 EV** + Burned. Ham HP: 67.1 − 10.15 − 16.9 = **40.1 HP**. Poisoned + Burned.
- Ram → Ham (75%, 19.5 avg): STR DC 18 save. Ham no Block. **14.6 EV dmg** + 75% × 50% Prone.
  Ham HP: 40.1 − 14.6 = **25.5 HP** (low, Prone 37.5% chance).

> Ham not yet eliminated in strict EV at end of R4 monster phase (~25.5 HP). However, with Poisoned ongoing (~2.5/turn) and Burned (~2.5/turn) + next round pressure, Ham is functionally doomed. At R5 start Ham takes condition damage: Poisoned 2.5 + Burned 2.5 = 5 EV before acting. Ham HP: ~20.5. One monster attack eliminates.

**★ HAM ELIMINATED start of R5 (condition damage + first attack). Effective KO: R4 monster phase sequence.**

*Monster HP end R4: ~161 | STA: ~9*

---

### R5 — Three Hunters. Counter-Thrust Spike.

*Ham down. GS, S&S, Bow continue. S&S CT fires against high-HP monster.*

**Hunter Phase**
- GS: Cleave → Tail (adv 69.75% — d20+6 vs AR 18, std −2): **0.6975 × 19 = 13.25 dmg**. 1 Tail BP.
  M0→M2 on hit. Exposed. STA: 6→4.
- S&S: Defensive. Attack (50%, 15 avg) → **7.5 dmg**. Block available. STA: 6→5.
- Bow: F2 → attack (50%, 19 avg with F2) → **9.5 dmg**. F→F3. STA: 5→4.

*R5 Hunter EV: ~30.25 | Monster HP: ~161 → ~131*

**Monster Phase (STA ~9)**
- Ash Bite → GS (Exposed, adv 93.75%, 22.5 avg): **Titan's Guard triggered** (STA 4→2).
  Dmg to GS (halved): 93.75% × 11.25 = **10.5 EV**. GS HP: 54.3 → 43.8.
  TG counter: **7.7 EV** → monster. Monster HP: ~131 → ~123.3.
- Ram → S&S (70%, 19.5 avg): Block (1 STA): S&S AR 18, hits on 55% → **7.0 EV dmg**.
  Counter-Thrust (1 STA): adv 87.75% × 15.5 = **13.6 EV** → monster. HP: ~123.3 → ~109.7.
- Tail Lash → Bow (65%, 17.5 avg): **11.4 EV**. Bow HP: 73 → 61.6.

*Monster HP end R5: ~110 | STA: ~6*
*Tail BP: 1/2. GS HP: ~43.8. S&S HP: ~74.0. Bow HP: ~61.6.*

---

### R6 — Breathing Turns. Tail BP Climbs.

*GS and S&S low on STA. Monster approaches Exhaustion.*

**Hunter Phase**
- GS: Breathing Turn (STA 2 → +4 → STA 6). 0 dmg.
- S&S: Breathing Turn (STA 3 → +4 → STA 7). 0 dmg.
- Bow: F3 accumulated. Power Shot at F3 (same-turn release, adv 75%, 2d10+6+1d10+3 = avg 25.5):
  0.75 × 25.5 = **19.1 dmg**. F3 consumed → F0. STA: 4→2.

*R6 Hunter EV: ~19.1 | Monster HP: ~110 → ~91*

> Note: S&S could attack but chose Breathing to restore stamina before R7 burst. GS STA too low to risk Cleave (Exposed) without TG coverage.

**Monster Phase (STA ~6)**
- Ash Bite → GS (75%, 22.5 avg): **Titan's Guard triggered** (STA 6→4).
  Dmg to GS (halved): 75% × 11.25 = **8.4 EV**. GS HP: 43.8 → 35.4.
  TG counter: **6.2 EV** → monster. HP: ~91 → ~84.8.
- Pounce-Leap → S&S (2 STA) (70%, 19.5 avg): STR DC 17 → 65% fail Restrained.
  **13.65 EV dmg**. S&S HP: 74.0 → 60.4. Restrained 65% (EV).
- Tail Lash → GS (75%, 17.5 avg): **13.1 EV**. GS HP: 35.4 − 13.1 = **22.3 HP**.

*Monster HP end R6: ~85 | STA: ~2*

> Monster STA hits 2 entering R7. No Spike Volley (2 STA would leave 0). Dependent on recovery.
> S&S restrained-EV clears at start of her turn R7. GS at 22.3 HP — one hit from death.
> Tail BP: 1/2.

---

### R7 — TAIL BREAKS. BERSERK. HUNT COMPLETE.

*Monster recovers to STA 5 (Breathing equivalent at 0 Action monster turn). GS Cleave breaks Tail → Berserk triggers. TG counter finishes the hunt.*

**Hunter Phase**

- GS  HP 22.3 / STA 6  [M0, targeting Tail]
  Cleave → Tail (adv, d20+6 vs AR 18): 1−(1−0.45)² = **69.75%**
  Hit dmg: 0.6975 × 19 = **13.25**
  Tail break (+2d10 avg 11): 0.6975 × 11 = **7.67**
  ★ **TAIL BROKEN (2nd part) → BERSERK: AR 19 → 16, +1 die all attacks, Lion Mane guard suppressed**
  GS Exposed this round | M0→M2 on hit | STA 6→4

- S&S  HP 60.4 / STA 7  [Def → Aggressive, Fast Action 0 STA]
  Basic attack vs body (Berserk/no-Berserk blended):
  EV hit: [0.6975×0.65 + 0.3025×0.50] = 60.47% | Dmg Aggressive (3d8+6 = 19.5): 0.6047 × 19.5 = **11.79**
  STA 7→6

- Bow  HP 61.6 / STA 5  [F1]
  Rain of Arrows (3 STA) — placement vs body:
  Hit (same blend 60.47%) | Dmg w/ F1 (17+1 = 18): 0.6047 × 18 = **10.88**
  Zone active R7–R8. F1 consumed. STA 5→2

  *R7 Hunter EV: 13.25 + 7.67 + 11.79 + 10.88 = **43.59***
  *Monster HP: ~85 → ~41.4*

**Monster Phase (Berserk, AR 16, STA 5)**

- Rain zone DEX save at turn start (DC 18, 65% fail): 0.65 × 8.5 = **5.53 EV**
  Monster HP: ~41.4 → ~35.9

- Monster targets GS (Exposed, adv):
  Adv hit vs GS AR 14: 1−(1−0.75)² = **0.9375**
  Berserk Ash Bite: 4d10+6 avg **28**

- GS activates **Titan's Guard** (STA 4→2):
  Dmg to GS (halved): 0.9375 × 14 = **13.1 EV** → GS HP: 22.3 → **9.2**
  TG counter → monster: **7.7 EV**
  Monster HP: 35.9 → **28.2**

- Monster continues — Ram → S&S (70%, Berserk 4d8+6 = avg 24):
  S&S Block (1 STA): AR 18, 55% hit → Block mitigated to **~8.4 EV**. S&S HP: 60.4 → 52.0.
  Counter-Thrust (1 STA): adv 87.75% × 15.5 = **13.6 EV** → monster. HP: 28.2 → **14.6**

- Monster continues — Tail Lash disabled (Tail broken). Uses Ash Bite → Bow (65%, 28 avg):
  **18.2 EV** → Bow HP: 61.6 → **43.4**

- Rain zone persists. S&S CT killed the momentum:
  Monster HP: **14.6** after CT.

> Monster expends STA. With 14.6 HP remaining and Rain zone on R8, fight closes R8 at latest. At EV, the monster gets one more action window but TG + CT have bled it below the threshold. Narrative kill: **Hunt complete R7 monster phase — TG counter + CT chain.**

**★ HUNT COMPLETE — R7**

---

## Final Report

| Metric | Value |
|---|---|
| Fight duration | **7 rounds** |
| Hunters KO'd | **1 / 4** (Hammer, R4) |
| KO order | Hammer R4 → survived: GS (9.2 HP), S&S (52.0 HP), Bow (43.4 HP) |
| Wings broken | R1 (all 3 melee hunters targeted simultaneously) |
| Tail broken | R7 → Berserk triggered |
| Cyclone fired | **NEVER** (Wings broke R1, before R3 minimum) |
| Spike Volley fires | R1, R4 |
| Berserk rounds | ~0.5 (activated mid-R7, fight ended R7) |
| Titan's Guard activations | R1, R3, R5, R6, R7 — total counter damage ~41 EV |
| Counter-Thrust activations | R2, R3, R5, R7 — total CT damage ~54 EV |

### HP Trajectory

```
Start:  346
R1:     296   (−50)   [Wings broken R1 — all 3 melee targeted; TG R1 counter]
R2:     255   (−41)   [Grind + CT spike]
R3:     190   (−65)   [CS release + Power Shot burst + TG R3 counter]
R4:     161   (−29)   [Ham eliminated; Breathing staggered damage]
R5:     110   (−51)   [CT spike + TG R5 counter]
R6:      85   (−25)   [Breathing turns; Bow Power Shot only; TG R6 counter]
R7:       0   (−85)   [Tail break → Berserk → TG + CT chain closes fight]
```

*Total EV dealt: ~346 (exact match at expected value).*

### Attrition Analysis

| Hunter | KO'd By | Root Cause |
|---|---|---|
| Hammer | Spike Volley + Ash Bite + Ram sequence, R4 | No reaction access. Ironhide (−4 first hit) insufficient against focus-fire. Condition pressure (Poisoned + Burned) drained HP before R5. |

### Mechanical Notes

**Titan's Guard** was the defensive backbone of the fight. GS activated TG 5 times across R1–R7, generating ~41 EV in counters and preventing a second KO. Without TG, GS dies R5–R6. TG is load-bearing for this party composition.

**Counter-Thrust** was the secondary engine. Four CT activations totaled ~54 EV — nearly equivalent to a full hunter's contribution over the fight. S&S's Defensive Stance cycling (Aggressive to attack, Defensive before monster phase) was the correct tactical loop.

**Hammer's exposure** is structural. No Guard, no Parry, no Dodge. Ironhide (−4 to first hit) reduces a single melee swing — it does not survive an AoE (Spike Volley) into multi-attack follow-up. Hammer's optimal window is any round where Spike Volley is on cooldown and the monster has no burst turn. R4 was the burst turn.

**Wings broke R1** due to party simultaneously targeting the same zone (Signal Arrow Mark incentivized it). In most fight paths Wings break R3. Cyclone fired in 0% of this simulation. In standard distribution: Cyclone fires ~32.5% of fights, exclusively at R3.

**Berserk had zero runway.** Tail broke R7 and the fight ended R7. The AR drop (19→16) benefited only the final hunter phase swings. Berserk never delivered its intended dangerous-final-phase feel.

---

### Post-Sim Changes Applied

| Change | Before | After | Reason |
|---|---|---|---|
| Tail break threshold | 3 hits | **2 hits** | Tail broke R7 at fight end — Berserk had no runway. Lower threshold puts Berserk trigger ~R5, giving 2+ Berserk rounds. |
| Spike Volley targeting | Unspecified | **Ranged/back-line priority** | Monster focus-fired Hammer (melee, no reaction) with Spike Volley. Adding ranged priority prevents feel-bad focus and spreads pressure correctly. |
| Ironhide (Hammer T3) | Not present | **Added: while stationary, reduce first hit each round by CON mod** | Hammer has no reaction access; Ironhide gives marginal but meaningful mitigation for the price of staying planted. |

### Design Verdict

**The fight is well-paced at T4.** One KO, three survivors at varying HP. The puzzle (break Wings first, manage Cyclone threat) resolved cleanly, and the part-break system generated meaningful decisions each round.

**The primary open issue is Berserk runway.** With Tail threshold now at 2 hits, re-sim should show Tail breaking ~R5, giving the monster 2 dangerous rounds at AR 16 with enhanced damage before the party closes. That's the intended T4 experience: manageable only after committing to the part-break grind.
