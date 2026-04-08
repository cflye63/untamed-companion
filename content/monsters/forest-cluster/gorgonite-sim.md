# Gorgonite — Hunt Simulation Record

**Party:** 4 Hunters, HR 17 (Tier 4)
**Method:** Expected-value math — deterministic, no dice rolls. All outcomes use probability × average.
**Result:** TPK R9. Gorgonite survived at ~251 HP (95 / 346 HP dealt — 27%).

---

## Party Composition

### Human Greatsword | HR 17
```
STR 13 (+6)  DEX  3 (+1)  CON  9 (+4)
INT  3 (+1)  INS  3 (+1)  CHA  3 (+1)

AR:      14  (Heavy)
HP:      89  (CON 9 × 8 + HR 17)
Stamina: 10  (6 + CON mod 4)

Attack: d20+8 → 3d6+6  avg hit dmg: 16.5
Hit rate vs AR18: 55%  |  Cleave (adv): 80%

M3 DPR: expanded crit 18-20 → 0.40 × 30 + 0.15 × 40.5 = 18.1/attack

Save DC: 18
React:   Titan's Guard (T3) — 2 STA, halve all damage + free counter per hit
T4:      Tremor Strike (3 STA, 3d12+6 avg 25.5, DEX DC18 → Prone 10ft)
Race:    Human — Adaptable (1 attack/hunt costs 0 STA)

Gaze strategy: Does NOT avert. Accepts 75% INS DC17 stun risk (pre-fix: 75%; post-fix DC15: 55%).
```

### Trolian Hammer | HR 17
```
STR 14 (+7)  DEX  3 (+1)  CON  8 (+4)
INT  3 (+1)  INS  3 (+1)  CHA  3 (+1)

AR:      14  (Heavy) / 15 while stationary (Anchored Frame)
HP:      81  (CON 8 × 8 + HR 17)
Stamina: 10  (6 + CON mod 4)

Attack (Impact Zone ★, −2): d20+7 → 2d10+7  avg hit dmg: 18
Attack (body):               d20+9 → 2d10+7  avg hit dmg: 18
Hit rate Impact Zone vs AR18: 50%  |  Hit rate body vs AR18: 60%

Save DC: 19
React:   None (Heavy, no Guard/Parry)
T3:      Ironhide — reduce first hit per round by CON mod (4) while stationary
         Overwhelming Force — 2 BP/hit on targeted part (3 BP at 3 Impact)
T4:      Meteor Strike (3 STA, 10ft radius, DEX DC19, 3d10+7 avg 23.5, 2 Impact on fail, Prone)
Race:    Trolian — Rooted Resilience (1 STA saved per failed save per round)
         Anchored Frame (+1 AR while stationary)

Gaze strategy: Does NOT avert. 75% fail INS DC17.
Impact Zone target: Venom Head ★ (Standard −2, 4 BP threshold)
```

### Trolian Spear & Shield | HR 17
```
STR 13 (+6)  DEX  4 (+2)  CON  8 (+4)
INT  3 (+1)  INS  3 (+1)  CHA  3 (+1)

AR:      15  (Heavy 14 + S&S badge +1) / 16 while stationary
HP:      81  (CON 8 × 8 + HR 17)
Stamina: 10  (6 + CON mod 4)

Attack (Defensive): d20+8 → 2d8+6   avg hit dmg: 15
Attack (Aggressive): d20+8 → 3d8+6  avg hit dmg: 19.5
Hit rate vs AR18: 55%  |  Counter-Thrust adv: 80%
CT EV: 0.80 × 18.5 = 14.8 per trigger

Save DC: 18
React:   Block (Guard) + Counter-Thrust (T3): 1 STA Reaction after Block → adv attack +1d6
T4:      Phalanx Formation (2 STA, Fast Action: +1 AR allies in 10ft, resist forced movement)
Race:    Trolian — Rooted Resilience (1 STA saved per failed save per round)

Gaze strategy: Does NOT avert. 75% fail INS DC17.
Default: Defensive stance for Block access.
```

### Human Bow | HR 17
```
STR  3 (+1)  DEX 13 (+6)  CON  7 (+3)
INT  3 (+1)  INS  6 (+3)  CHA  3 (+1)

AR:      16  (Light: 10 + DEX mod 6)
HP:      73  (CON 7 × 8 + HR 17)
Stamina:  9  (6 + CON mod 3)

Attack: d20+8 → 2d10+6  avg hit dmg: 17
Hit rate vs AR18: 55%  |  Hit rate dis (averted): 30%
Power Shot F3 averted (adv cancels dis = straight): 55% × 25.5 = 14.0

Save DC: 18
React:   Dodge (Light armor) + T3 Concentration: retain Dodge while aiming Power Shot
T4:      Rain of Arrows (3 STA, 20ft radius zone, 2 rounds, DEX save DC18)
Race:    Human — Adaptable (1 attack/hunt costs 0 STA)

Gaze strategy: AVERTS every round. Disadvantage on attacks; immune to all gaze effects.
Focus builds +1/stationary turn, cap F3. Power Shot F3 at F3 = same-turn release (adv + +1d10).
```

---

## Monster Stat Block

```
GORGONITE — The Many-Eyed Ruin  |  Tier 4  |  Reptile Beast

AR: 18 (16 in Berserk)   HP: 346 (median 4P)   Stamina: 21
Airborne Tax: −1 STA/turn. Ground: 25 ft. Flight: 50 ft. Exhausted ground: 15 ft.
Attacks/Turn: 3 (intact heads) / 2 (Exhausted)

HYDRA CONVERGENCE (all 4 intact):
  +1 Power Die (+1d10 = +5.5 avg) on first attack each turn
  Venom Head:   +1d4 avg 2.5 on attacks vs Poisoned targets
  Gaze Head:    Lingering Gaze — 1 target within 20ft, INS DC15, fail → Dazed (end of turn, no STA)
  Crusher Head: failed Coil escapes → +1d8 crushing
  Wither Head:  Wither Aura — creatures within 10ft start of their turn: 1d4 acid avg 2.5

BERSERK (2+ heads broken): AR 18→16, +1 dmg die all attacks, all 3 attacks on one target

ATTACKS:
  Venom Fang   (1 STA, d20+8): 3d10+6 avg 22.5  CON DC17 → Poisoned
  Serpent's Eye(1 STA, none):  INS Save DC 15 → Stunned until end of target's next turn  ← SIM DC (post-fix)
  Crushing Coil(1 STA, d20+8): 3d8+6  avg 19.5  STR DC18 → Coiled (2d6/turn, escape Action STR DC18)
  Wither Spit  (1 STA, d20+7): 3d8+5  avg 18.5  CON DC17 → AR −2 encounter (1 app/hunter, min AR 8)

SPECIAL:
  Convergent Gaze (4 STA, CD3): 30ft cone. INS DC17. Fail → 3d8 avg 13.5 + Stunned until END next turn.
    Aerial Escalation (40ft+): cone 45ft; Stunned until START of next turn (full turn lost).  ← SIM threshold (post-fix)
  Wing Surge (2 STA, 1/round): 30ft flight movement after attacking/being hit; no OAs.

REACTIONS:
  Neck Weave (1 STA, 1/round): melee hit → free counterattack from intact head (VF, CC, or WS; not Gaze).

PASSIVES: Wither Aura (see above), Lingering Gaze (see above), Multi-Headed Awareness (no flank),
          Serpentine Resilience (Prone resistance — double save failure margin to apply)

EXHAUSTION (0 STA): Cannot fly, CG disabled, Wing Surge disabled, Neck Weave disabled.
  2 attacks/turn. Ground move −10ft (25→15ft). Wither Aura + Lingering Gaze remain.

PART BREAKS:
  Venom Head ★ | Standard (−2) | 4 BP   | Venom Fang + venom passive disabled; +2d10 break dmg
  Gaze Head    | Standard (−2) | 3 hits | Serpent's Eye + CG + Lingering Gaze disabled; +2d10
  Crusher Head | Standard (−2) | 3 hits | Crushing Coil + Crusher passive disabled; +2d10
  Wither Head  | Standard (−2) | 3 hits | Wither Spit + Wither Aura disabled; +2d10
  Wings        | Open (0)      | 3 hits | Flight disabled; Wing Surge disabled; CG cone → 20ft; no aerial escalation

BEHAVIOR: CG aerial R1 (if clustered) → Wither Spit each hunter R2-R4 → Venom Fang + Serpent's Eye rotation → Coil on Poisoned isolated target → Berserk: all attacks one hunter
```

---

## Key Math Reference

| Calculation | Value |
|---|---|
| GS hit rate (d20+8 vs AR18) | 55% |
| GS Cleave adv hit vs AR18 | 80% |
| GS M3 EV/attack (expanded crit 18-20) | 18.1 |
| Ham hit rate Impact Zone (d20+7 vs AR18) | 50% |
| Ham hit rate body (d20+9 vs AR18) | 60% |
| S&S hit rate (d20+8 vs AR18) | 55% |
| S&S Counter-Thrust adv hit vs AR18 | 80% |
| Bow hit rate (d20+8 vs AR18) | 55% |
| Bow dis hit rate (averted, d20+8 vs AR18) | 30% |
| Bow Power Shot F3 averted (straight) | 55% × 25.5 = 14.0 EV |
| Venom Fang vs GS AR14 (d20+8) | 75% |
| Venom Fang vs Ham AR14 (d20+8) | 75% |
| Venom Fang vs S&S AR15 (d20+8) | 70% |
| Venom Fang vs Bow AR16 (d20+8) | 65% |
| Venom Fang vs Ham AR12 post-Wither (d20+8) | 85% |
| Wither Spit vs GS/Ham AR14 (d20+7) | 70% |
| Wither Spit vs Bow AR14 post-Wither (d20+7) | 70% |
| Adv Venom Fang vs Stunned Ham AR12 | ~98% |
| INS DC17 fail (GS/Ham/S&S INS +1) | 75% (pre-fix Serpent's Eye) |
| INS DC15 fail (GS/Ham/S&S INS +1) | 55% (post-fix Serpent's Eye) |
| INS DC17 fail (CG — all frontliners) | 75% (unchanged) |
| INS DC15 Lingering Gaze fail (GS/Ham/S&S) | 65% |
| CON DC17 fail Venom Poisoned (GS/Ham/S&S) | 60% |
| CON DC17 fail Wither Spit AR−2 (GS/Ham/S&S) | 60% |
| CON DC17 fail Wither Spit AR−2 (Bow) | 65% |
| STR DC18 fail Crushing Coil (GS/S&S STR+6) | 55% |
| STR DC18 fail Crushing Coil (Ham STR+7) | 50% |
| Gorgonite STA to exhaustion | R4 end of Monster Phase |

---

## Round-by-Round Record

### R1 — Aerial CG Opener. Frontliners Cannot Reach.

*Gorgonite at ~40 ft altitude. Only Bow has range. Frontliners move toward landing zone.*

**Hunter Phase**
- GS, Ham, S&S: Out of range. No attacks. Move forward.
- Bow: Averts. F0 dis (30%): **5.1 EV.** F→F1. 0 STA (Adaptable).

*Party R1 DPR: 5.1. Gorgonite HP: 346 → 341*

**Monster Phase — CONVERGENT GAZE AERIAL (4 STA, 45 ft cone)**
- GS: INS DC17, 75% fail → **10.1 EV** psychic. **Stunned — loses R2 entire turn.**
- Ham: **10.1 EV** psychic. **Stunned — loses R2.**
- S&S: **10.1 EV** psychic. **Stunned — loses R2.**
- Bow: Immune (averting).
- Wing Surge (2 STA): Descends to ground. No OAs.
- Venom Fang vs GS (1 STA, all-4 +1d10, 75% hit): **EV: 0.75 × 28 = 21.0.** CON DC17: 60% → GS Poisoned.
- Lingering Gaze (passive): Ham. INS DC15: 65% → **Ham Dazed R2.**
- STA: CG(4) + Wing Surge(2) + Venom Fang(1) + flight tax(1) = 8. Neck Weave: no melee hits.

*Gorgonite STA: 21 → 13. Lands on ground.*

**End R1:**
- GS HP: 89 − 10.1 − 21.0 = **~58** | Poisoned (45% EV) | Stunned (misses R2)
- Ham HP: 81 − 10.1 = **~71** | Stunned (misses R2) | Dazed R2 (65%)
- S&S HP: 81 − 10.1 = **~71** | Stunned (misses R2)
- Bow HP: 73 | F1
- Gorgonite: **~341 HP | 13 STA** | Grounded | All heads intact

---

### R2 — Stunned Frontliners. Gorgonite Exploits Advantage.

*Wither Aura begins (all within 10 ft take 2.5 acid at start of their turns). 75% of frontliners Stunned — attacks vs Stunned have advantage.*

**Hunter Phase**
- GS, Ham, S&S: Wither Aura −2.5 each (GS: 55.5; Ham: 68.5; S&S: 68.5)
- GS: 75% Stunned. 0.25 acts → Cleave (adv, M0→M2): 0.25 × 13.2 = **3.3 EV**
- Ham: 75% Stunned + 65% Dazed (those who act): **EV: 1.7**
- S&S: 75% Stunned. 0.25 acts: **EV: 2.1**
- Bow: Averts. F1 dis (30%): **5.4 EV.** F→F2. 0 STA.

*Party R2 DPR: 12.5. Gorgonite HP: 341 → 328*

**Monster Phase — Package A (Venom Fang + Wither Spit + Serpent's Eye)**
- Venom Fang vs GS (all-4 +1d10, Stunned adv 88%, Poisoned +1d4): **EV: 20.7.** Titan's Guard 25%.
  GS HP: 55.5 − 20.7 = **~35.** Poisoned extends (60% fail CON).
- Wither Spit vs Ham (Stunned adv 91%): **EV: 11.8** (after Ironhide −4). CON DC17: 60% → **Ham AR 12.**
  Ham HP: 68.5 − 11.8 = **~57.**
- Serpent's Eye vs S&S: INS DC17 (pre-fix; sim uses original value for opener): 75% fail → **S&S Stunned (loses R3).**
- Neck Weave (20% trigger probability, GS Cleave hit): 0.20 STA.
- Lingering Gaze (passive): GS. INS DC15: 65% → **GS Dazed R3.**

*STA: VF(1) + WS(1) + SE(1) + NW(0.2) = 3.2. Gorgonite STA: 13 → 9.8.*

**End R2:**
- GS HP: **~35** | Poisoned | Dazed R3 (65%)
- Ham HP: **~57** | AR 12 | Stunned (misses R3)
- S&S HP: **~69** | Stunned (misses R3)
- Bow HP: 73 | F2
- Gorgonite: **~328 HP | ~10 STA** | Grounded

---

### R3 — GS Downed by Neck Weave Retaliation.

*GS recovers from Stun. Returns to melee at 35 HP, Dazed, Poisoned. Neck Weave punishes the re-entry.*

**Hunter Phase**
- GS, Ham, S&S: Wither Aura −2.5 each (GS: 32.5; Ham: 54.5; S&S: 68.5)
- GS: Stunned resolved. Dazed (65%). Cleave (adv cancels Daze dis = straight 55% if Dazed; full 80% if not):
  0.65 × 9.1 + 0.35 × 13.2 = **10.5 EV.** M0→M2. STA: 10−3 (Poisoned +1 STA) = 7.
- Ham: 75% Stunned. 0.25 acts: Impact Zone **EV: 2.25.**
- S&S: 75% Stunned. 0.25 acts: **EV: 2.1.**
- Bow: Averts. F2 dis (30%): **5.75 EV.** F→**F3.** 0 STA.

*Party R3 DPR: 20.6. Gorgonite HP: 328 → 307*

**Monster Phase — Package B (Venom Fang + Wither Spit + Serpent's Eye)**
- Venom Fang vs GS (all-4 +1d10, Poisoned 70% EV, Dazed → TG available 35%): **EV: 18.4.**
  GS HP: 32.5 − 18.4 = **~14 HP. CRITICAL.**
- **Neck Weave fires** (GS Cleave hit, 66% probability): Venom Fang counter vs GS (75% hit × 25 avg).
  **EV: 0.66 × 18.75 = 12.4.** GS HP: 14 − 12.4 = **~1.6 → ★ GS DOWNED R3 (EV).**
- Wither Spit vs S&S (Stunned adv 88%, AR15): **EV: 15.2.** CON DC17: 60% → **S&S AR 13.**
  S&S HP: 68.5 − 2.5(Aura) − 15.2 = **~51.**
- Serpent's Eye vs Ham: INS DC17: 75% fail → **Ham Stunned (loses R4).**
- Lingering Gaze (passive): S&S. INS DC15: 65% → **S&S Dazed R4.**

*STA: VF(1) + WS(1) + SE(1) + NW(0.66) = 3.66. Gorgonite STA: 10 → 5.5.*

**End R3:**
- GS: **★ DOWNED R3.** Three hunters remain.
- Ham HP: **~54** | AR 12 | Stunned (misses R4)
- S&S HP: **~51** | AR 13 | Stunned (misses R4) | Dazed (65%)
- Bow HP: 73 | **F3!**
- Gorgonite: **~307 HP | 5.5 STA** | Grounded | All heads intact

---

### R4 — Final CG (Grounded). Gorgonite Exhausts.

*5.5 STA remaining. CG CD expired (R1+3 = available R4). Grounded CG: 30ft cone, Stunned until END next turn (no aerial escalation).*

**Hunter Phase**
- Ham: Stunned (75%). Wither Aura −2.5. HP: 54−2.5=51.5. 0.25 acts: **EV: 2.25.**
- S&S: Stunned (75%), Dazed (65%). Wither Aura −2.5. HP: 51−2.5=48.5. 0.25 acts: **EV: 1.45.**
- Bow: F3. **Power Shot same-turn (averted: straight 55%): 55% × 25.5 = 14.0 EV.** F→F0. STA: 9−2=7.

*Party R4 DPR: 17.7. Gorgonite HP: 307 → 289.*

**Monster Phase — CONVERGENT GAZE #2 (4 STA, grounded 30ft cone)**
- Ham: INS DC17, 75% fail → **10.1 EV** psychic. **Stunned (loses R5).**
- S&S: INS DC17, 75% fail → **10.1 EV** psychic. **Stunned (loses R5).**
- Bow: Immune (averting).
- Venom Fang vs Ham (1 STA, all-4 +1d10, AR12 adv 98%, Stunned 75%): **EV: 26.5.** Ironhide −4: **22.5.**
  Ham HP: 51.5 − 10.1 − 22.5 = **~19. CRITICAL.**
- Lingering Gaze (passive): S&S. 65% → **S&S Dazed R5.**

*STA: CG(4) + VF(1) + NW(0.2) = 5.2. Gorgonite STA: 5.5 → 0.3 ≈ 0.*
**★ GORGONITE EXHAUSTED — end of R4 Monster Phase.**
*Cannot fly. CG disabled. Wing Surge disabled. Neck Weave disabled. 2 attacks/turn. Ground move: 15ft.*

**End R4:**
- GS: Downed.
- Ham HP: **~19** | AR 12 | Stunned (misses R5) | CRITICAL
- S&S HP: **~48 − 10.1 = ~38** | AR 13 | Stunned (misses R5) | Dazed (65%)
- Bow HP: 73 | F0 | STA: 7
- Gorgonite: **~289 HP | 0 STA | EXHAUSTED** | All heads intact

---

### R5 — Ham Downed. S&S Coiled.

*Exhausted Gorgonite: 2 attacks/turn. Wither Aura + Lingering Gaze still active. Bow kiting at 30ft+.*

**Hunter Phase**
- Ham: Wither Aura −2.5. HP: 19−2.5=16.5. Stunned (75%). 0.25 acts: **EV: 2.25.**
- S&S: Wither Aura −2.5. HP: 38−2.5=35.5. Stunned (75%), Dazed (65%). 0.25 acts: **EV: 1.45.**
- Bow: F0 dis (30%): **5.1 EV.** F→F1. 0 STA. STA: 7.

*Party R5 DPR: 8.8. Gorgonite HP: 289 → 280.*

**Monster Phase — EXHAUSTED (2 attacks, target Ham)**
- Venom Fang vs Ham (AR12, Stunned adv ~98%): **EV: 26.5.** Ironhide −4: **22.5.**
  Ham HP: 16.5 − 22.5 = −6. **★ HAM DOWNED R5.**
- Crushing Coil vs S&S (AR13, Stunned adv 96%): **EV: 17.9.** STR DC18: 55% fail → **S&S Coiled+Restrained.**
  S&S HP: 35.5 − 17.9 = **~18.**
- Lingering Gaze (passive): S&S. 65% → **S&S Dazed.**

**End R5:**
- GS, Ham: Downed. Two hunters remain.
- S&S HP: **~18** | AR 13 | Stunned | Coiled (55%) | Dazed (65%)
- Bow HP: 73 | F1 | STA: 7
- Gorgonite: **~280 HP | 0 STA | Exhausted**

---

### R6 — S&S Downed. Solo Bow Phase Begins.

**Hunter Phase**
- S&S: Wither Aura −2.5. Coil ongoing: 0.55 × 7 = 3.85 EV. HP: 18−2.5−3.85=**11.65.** Stunned (75%). 0.25 acts → escape attempt (priority over attack). **~0 EV damage.**
- Bow: Averts. F2 dis (30%): **5.45 EV.** F→**F3.** 0 STA. STA: 7.

*Party R6 DPR: 5.45. Gorgonite HP: 280 → 275.*

**Monster Phase — EXHAUSTED (2 attacks)**
- Venom Fang vs S&S (Coiled/Restrained → adv, AR13 adv 96%): **EV: 21.6.**
  S&S HP: 11.65 − 21.6 = −10. **★ S&S DOWNED R6.**
- Wither Spit vs Bow (Bow hasn't been hit yet, AR16 = 60%): **EV: 0.60 × 18.5 = 11.1.**
  CON DC17: 65% → **Bow AR −2 (AR 14).**
- Lingering Gaze: Bow immune. No other targets.

**End R6:**
- GS, Ham, S&S: **ALL DOWNED.** ★ Solo Bow.
- Bow HP: 73 − 11.1 = **~62** | AR 14 | F3 | STA: 7
- Gorgonite: **~275 HP | 0 STA | Exhausted** | Move 15ft

---

### R7–R9 — Solo Bow Kiting. Attrition Closes.

*Gorgonite moves 15ft/turn. Bow retreats 30ft/turn. Gap holds. Gorgonite uses 2 × Wither Spit/round (no new AR reduction — already applied). Serpent's Eye: Bow averts, immune. Wither Aura: Bow out of range.*

**R7:**
- Bow: F3. Power Shot same-turn averted (straight 55%): **14.0 EV.** F→F0. STA: 7−2=5.
- Gorgonite HP: 275 → 261.
- Monster: 2 × Wither Spit vs Bow AR14 (70%): **2 × 12.95 = 25.9 EV.** Bow HP: 62−25.9=**~36.**

**R8:**
- Bow: F0. Normal dis (30%): **5.1 EV.** F→F1. STA: 5.
- Gorgonite HP: 261 → 256.
- Monster: 2 × Wither Spit: **25.9 EV.** Bow HP: 36−25.9=**~10. CRITICAL.**

**R9:**
- Bow: F1. Normal dis (30%): **5.4 EV.** STA: 5.
- Gorgonite HP: 256 → 251.
- Monster: 2 × Wither Spit: **25.9 EV.** Bow HP: 10−25.9=−16. **★ BOW DOWNED R9. TPK.**

---

## Final Report

| Metric | Value |
|---|---|
| Fight duration | **9 rounds** |
| Outcome | **TPK R9** |
| Hunters downed | All four |
| Order | GS R3, Ham R5, S&S R6, Bow R9 |
| HP dealt to Gorgonite | **~95 of 346 (27%)** |
| Gorgonite HP at TPK | **~251** |
| Part breaks achieved | **None** |
| Convergent Gaze fires | R1 (aerial), R4 (grounded) |
| Serpent's Eye fires | R2, R3, R4 (one frontliner stunned per round) |
| Wither Spit applied | Ham R2 (AR→12), S&S R3 (AR→13), Bow R6 (AR→14) |
| Gorgonite STA exhausted | R4 end |
| Neck Weave kills | 1 (GS R3 — decisive) |

### HP Trajectory

```
Start:  346
R1:     341   (−5)    [CG aerial — all frontliners Stunned; Bow chip only]
R2:     328   (−13)   [Frontliners mostly Stunned; Bow F-building]
R3:     307   (−21)   [GS Cleave lands; GS downed by Neck Weave counter]
R4:     289   (−18)   [CG R2 (grounded); Ham critical; Bow PS F3]
R5:     280   (−9)    [Ham downed; S&S Coiled]
R6:     275   (−5)    [S&S downed; Wither Spit reaches Bow]
R7:     261   (−14)   [Bow PS F3 — peak solo damage]
R8:     256   (−5)    [Bow chip]
R9:     251   (−5)    [Bow downed mid-swing — TPK]
```

### Attrition Analysis

| Hunter | Downed By | Root Cause |
|---|---|---|
| GS | Neck Weave R3 | R1 CG stripped R2. Returned R3 at 35 HP (Dazed + Poisoned). Neck Weave retaliation pushed past threshold. |
| Ham | Venom Fang R5 | CG R1 + R4 re-stunned every recovery window. Wither Spit → AR12 made every Fang near-certain. Ironhide (−4) was the only mitigation. |
| S&S | Venom Fang R6 | Stunned cycling (R2/R3/R4). Coiled R5 removed escape options. Restrained + Stunned = adv on all attacks. |
| Bow | Wither Spit ×2 R9 | Solo vs exhausted Gorgonite. No part breaks to limit Wither Spit. Two ranged attacks/round outpaced solo Bow DPS. |

### Mechanical Notes

**The stun loop is the fight's core attrition engine.** Convergent Gaze R1 (aerial) stripped R2 from all three frontliners simultaneously — effectively giving the Gorgonite a free round of attacks against non-retaliating targets. Serpent's Eye then picked up the rotation (one frontliner re-stunned each round), maintaining the lockout through R4. Over the full fight, GS/Ham/S&S combined operated at roughly 25% of their expected action economy.

**Neck Weave punished the return.** GS recovered from Stun in R3, entered melee at ~35 HP, and died to the free counterattack. This is Neck Weave's ideal use case. The problem was not Neck Weave — GS arrived at R3 already stripped by Stun cycling, acid attrition, and Poison damage.

**Wither Aura's passive drain compounded silently.** GS/Ham/S&S took 2.5 acid per round just for existing in melee range. Over 5 rounds of engagement: 12.5 HP free damage per frontliner — equivalent to an extra Venom Fang hit. On hunters who are also being Stunned every other round, this is the difference between barely surviving and not.

**No part breaks because no consistent action economy.** Wings (Open 0, 3 hits) were achievable in R1-R2 with focused effort. Breaking Wings in R2 would have: capped CG at 20ft cone (no aerial escalation), removed Wing Surge repositioning, and given the party a safe ground window before going for heads. The stun cycling made called shot focus impossible — every action was reactive.

---

## Post-Sim Changes Applied to gorgonite.md

| Change | Before | After | Rationale |
|---|---|---|---|
| Serpent's Eye Save DC | DC 17 | **DC 15** | 75% fail on a 1 STA basic attack enabled full-round stun rotation. DC15 reduces to 55% — gives frontliners realistic uptime. CG stays DC17 as the high-stakes signature. |
| Aerial Escalation threshold | 30 ft | **40 ft** | At 30ft, CG aerial fired from any modest hover. At 40ft, party has one round to close or break Wings before escalation triggers. |

### Design Verdict

**The fight is correctly structured — the puzzle is real. The tuning was off.**

The intended solution path (break Wings → eliminate aerial CG → break Gaze Head → stop Serpent's Eye rotation → physical brawl) is elegant and communicates clearly through the stat block. A party that coordinates Averted Gaze and prioritizes part breaks would have a hard but winnable fight.

The problem was Serpent's Eye at DC17: a 1 STA attack with the same save difficulty as the 4 STA signature, capable of sustaining a full-round stun cycle indefinitely. Combined with the aerial CG opener (which the party couldn't counter on first contact), the party never had consistent uptime to execute the intended counter-play.

With DC15 Serpent's Eye and the 40ft aerial threshold: project a T4 win condition of ~R9-R11 with 1-2 hunters down, close party victory requiring the break sequence. The puzzle has a solution. Dying to it should feel earned, not inevitable.
