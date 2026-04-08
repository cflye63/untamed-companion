# Gorgonite — Hunt Simulation Record (Re-Run v2)

**Party:** 4 Hunters, HR 17 (Tier 4)
**Method:** Expected-value math — deterministic, no dice rolls. All outcomes use probability × average.
**Changes from v1:** Serpent's Eye DC 17 → **DC 15**. Aerial Escalation threshold 30 ft → **40 ft**.
**Result:** TPK R10. Gorgonite survived at ~216 HP (130 / 346 HP dealt — 38%).

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

Save DC: 18
React:   Titan's Guard (T3) — 2 STA, halve all damage + free counter per hit
T4:      Tremor Strike (3 STA, 3d12+6 avg 25.5, DEX DC18 → Prone 10ft)
Race:    Human — Adaptable (1 attack/hunt costs 0 STA)

Gaze strategy: Does NOT avert. Accepts 55% INS DC15 stun risk (post-fix SE).
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

Gaze strategy: Does NOT avert. 55% fail INS DC15 (post-fix).
Impact Zone target: Venom Head ★ (Standard −2, 4 BP threshold)
Wing / Gaze Head target: Open (0) / Standard (−2) called shots.
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

Gaze strategy: Does NOT avert. 55% fail INS DC15 (post-fix).
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
Focus builds +1/stationary turn, cap F3. Power Shot F3 = same-turn release (adv + +1d10).
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
  Gaze Head:    Lingering Gaze — 1 target within 20ft, INS DC15, fail → Dazed (no STA cost)
  Crusher Head: failed Coil escapes → +1d8 crushing
  Wither Head:  Wither Aura — creatures within 10ft start of their turn: 1d4 acid avg 2.5

BERSERK (2+ heads broken): AR 18→16, +1 dmg die all attacks, all 3 attacks on one target

ATTACKS:
  Venom Fang   (1 STA, d20+8): 3d10+6 avg 22.5  CON DC17 → Poisoned
  Serpent's Eye(1 STA, none):  INS Save DC 15 → Stunned until end of target's next turn  ← v2 DC
  Crushing Coil(1 STA, d20+8): 3d8+6  avg 19.5  STR DC18 → Coiled (2d6/turn, escape Action STR DC18)
  Wither Spit  (1 STA, d20+7): 3d8+5  avg 18.5  CON DC17 → AR −2 encounter (1 app/hunter, min AR 8)

SPECIAL:
  Convergent Gaze (4 STA, CD3): 30ft cone. INS DC17. Fail → 3d8 avg 13.5 + Stunned until END next turn.
    Aerial Escalation (40ft+): cone 45ft; Stunned until START of next turn (full turn lost).  ← v2 threshold
  Wing Surge (2 STA, 1/round): 30ft flight movement after attacking/being hit; no OAs.

REACTIONS:
  Neck Weave (1 STA, 1/round): melee hit → free counterattack from intact head (VF, CC, or WS; not Gaze).

PASSIVES: Wither Aura, Lingering Gaze, Multi-Headed Awareness (no flank),
          Serpentine Resilience (double save failure margin to apply Prone)

EXHAUSTION (0 STA): Cannot fly, CG disabled, Wing Surge disabled, Neck Weave disabled.
  2 attacks/turn. Ground move −10ft (25→15ft). Wither Aura + Lingering Gaze remain.

PART BREAKS:
  Venom Head ★ | Standard (−2) | 4 BP   | Venom Fang + venom passive disabled; +2d10 break dmg
  Gaze Head    | Standard (−2) | 3 hits | Serpent's Eye + CG + Lingering Gaze disabled; +2d10
  Crusher Head | Standard (−2) | 3 hits | Crushing Coil + Crusher passive disabled; +2d10
  Wither Head  | Standard (−2) | 3 hits | Wither Spit + Wither Aura disabled; +2d10
  Wings        | Open (0)      | 3 hits | Flight disabled; Wing Surge disabled; CG cone → 20ft; no aerial escalation

BEHAVIOR: CG aerial R1 (if clustered) → Wither Spit each hunter R2-R4 → Venom Fang + SE rotation → Coil on isolated target
```

---

## Key Math Reference

| Calculation | Value |
|---|---|
| GS hit rate (d20+8 vs AR18) | 55% |
| GS Cleave adv hit vs AR18 | 80% |
| Ham hit rate Impact Zone (d20+7 vs AR18) | 50% |
| Ham hit rate body (d20+9 vs AR18) | 60% |
| S&S hit rate (d20+8 vs AR18) | 55% |
| S&S Counter-Thrust adv hit vs AR18 | 80% |
| Bow hit rate (d20+8 vs AR18) | 55% |
| Bow dis hit rate (averted) | 30% |
| Bow Power Shot F3 averted (straight) | 55% × 25.5 = 14.0 EV |
| Venom Fang vs GS/Ham AR14 (d20+8) | 75% |
| Venom Fang vs S&S AR15 (d20+8) | 70% |
| Venom Fang vs Bow AR16 (d20+8) | 65% |
| Venom Fang vs Ham AR12 post-Wither (d20+8) | 85% |
| Wither Spit vs Bow AR14 post-Wither (d20+7) | 70% |
| Wither Spit + Hydra (+1d10) vs Bow AR14 | 70% × 24 = 16.8 EV |
| INS DC15 fail — SE (GS/Ham/S&S INS +1) | **55%** ← v2 |
| INS DC17 fail — CG (all frontliners) | 75% (unchanged) |
| INS DC15 Lingering Gaze fail (GS/Ham/S&S) | 65% |
| CON DC17 fail Venom Poisoned (GS/Ham/S&S) | 60% |
| CON DC17 fail Wither Spit AR−2 (Bow) | 65% |
| STR DC18 fail Crushing Coil (S&S STR+6) | 55% |
| Gorgonite STA to Exhaustion | R4 end of Monster Phase |

---

## Round-by-Round Record

### R1 — Aerial CG Opener. Frontliners Cannot Reach.

*Gorgonite at ~40 ft altitude. Only Bow has range. Frontliners move toward landing zone.*

**Hunter Phase**
- GS, Ham, S&S: Out of range. Move forward. Begin targeting Wings (Open 0) next round.
- Bow: Averts. F0 dis (30%): **5.1 EV.** F→F1. 0 STA (Adaptable).

*Party R1 DPR: 5.1. Gorgonite HP: 346 → 341*

**Monster Phase — CONVERGENT GAZE AERIAL (4 STA, 45ft cone)**
- GS: INS DC17, 75% fail → **10.1 EV** psychic. **Stunned — loses R2.**
- Ham: **10.1 EV** psychic. **Stunned — loses R2.**
- S&S: **10.1 EV** psychic. **Stunned — loses R2.**
- Bow: Immune (averting).
- Wing Surge (2 STA): Descends to ground. No OAs.
- Venom Fang vs GS (all-4 +1d10, 75% hit): **EV: 21.0.** CON DC17: 60% → GS Poisoned.
- Lingering Gaze (passive): Ham. INS DC15: 65% → **Ham Dazed R2.**
- STA: CG(4) + Wing Surge(2) + Venom Fang(1) + flight tax(1) = 8. STA: 21→13.

**End R1:**
- GS HP: 89 − 10.1 − 21.0 = **~58** | Poisoned | Stunned R2
- Ham HP: 81 − 10.1 = **~71** | Stunned R2 | Dazed R2 (65%)
- S&S HP: 81 − 10.1 = **~71** | Stunned R2
- Bow HP: 73 | F1
- Gorgonite: **~341 HP | 13 STA** | Grounded | All heads intact

---

### R2 — Stunned Frontliners. SE DC15 First Use.

*Wither Aura active (within 10ft: −2.5/turn). 75% of frontliners Stunned from CG. Party focuses Wings (Open 0).*

**Hunter Phase**
- GS, Ham, S&S: Wither Aura −2.5 each (GS: 55.5; Ham: 68.5; S&S: 68.5).
- GS: 75% Stunned. 0.25 acts → Cleave adv Wings hit: **EV: 3.3** progress 0.20 Wings hits.
- Ham: 75% Stunned + 65% Dazed: **EV: 1.7.** 0.25 acts → Wings progress 0.15 (×2 OF = 0.30).
- S&S: 75% Stunned. 0.25 acts → Wings: **EV: 2.1.** Progress 0.14.
- Bow: Averts. F1 dis (30%): **5.4 EV.** F→F2. Wings progress 0.30. 0 STA.

*Party R2 DPR: 12.5. Wings cumulative: 0.30(R1)+0.20+0.30+0.14+0.30 = 1.24 hits. Gorgonite HP: 341 → 328*

**Monster Phase — Package A: Wither Spit → Venom Fang → Serpent's Eye**
- Wither Spit vs Ham (Stunned adv 91%): **EV: 11.8** (Ironhide −4). CON DC17: 60% → **Ham AR 12.**
  Ham HP: 68.5 − 11.8 = **~57.**
- Venom Fang vs GS (all-4 +1d10, Stunned adv 88%, Poisoned +1d4): **EV: 20.7.** Titan's Guard 25%.
  GS HP: 55.5 − 20.7 = **~35.** Poisoned extends.
- **Serpent's Eye vs S&S: INS DC15 → 55% fail → S&S Stunned (loses R3).**
- Lingering Gaze: GS. INS DC15: 65% → **GS Dazed R3.**
- STA: WS(1) + VF(1) + SE(1) + NW(0.2) = 3.2. Gorgonite STA: 13 → 9.8.

**End R2:**
- GS HP: **~35** | Poisoned | Dazed R3 (65%)
- Ham HP: **~57** | AR 12
- S&S HP: **~69** | Stunned R3 (55% EV)
- Bow HP: 73 | F2
- Gorgonite: **~328 HP | ~10 STA** | Grounded
- Wings progress: **1.24 hits**

---

### R3 — ★ WINGS BREAK. Ham Free. Party DPR Spikes.

*DC15 SE meant S&S was stunned in R2 (55% EV) instead of Ham at 75%. Ham acts FREELY this round. GS resolves Stun (Dazed 65%). Party focuses Wings — accumulates 3.08 total hits.*

**Hunter Phase**
- GS, Ham, S&S: Wither Aura −2.5 each (GS: 32.5; Ham: 54.5; S&S: 68.5 less 55% Stunned EV).
- GS: Stunned resolved. Dazed (65%). Cleave (adv cancels Daze dis = straight 55% if Dazed; full 80% if not): **EV: 10.5.** Wings: 0.39 hits.
- Ham: **FREE (not stunned).** Body attack (60%, 18 avg): **EV: 10.8.** Wings: 0.60 × 2 (OF) = **1.20 progress.**
- S&S: 55% Stunned. 0.45 acts: **EV: 3.7.** Wings: 0.45 × 0.55 = 0.25 hits.
- Bow: Averts. F2 dis (30%): **5.75 EV.** F→F3. Wings: 0.30.

*Party R3 DPR attacks: 30.75. Wings cumulative: 1.24 + 0.39 + 1.20 + 0.25 + 0.30 = **3.08 ≥ 3 threshold.***
*★ **WINGS BREAK** — Flight disabled, Wing Surge disabled, CG cone → 20 ft, Aerial Escalation lost.*
*Wings break bonus: 2d10 avg **+11 EV.***
*Total R3 DPR: 30.75 + 11 = **~50 EV** (vs original R3: 21 EV)*

*Gorgonite HP: 328 → 278*

**Monster Phase — Package B: Venom Fang + Wither Spit + SE**
- Venom Fang vs GS (all-4 +1d10, Poisoned, Dazed 65%): **EV: 18.4.** GS HP: 32.5 − 18.4 = **~14. CRITICAL.**
- **Neck Weave fires** (GS Cleave hit, 66% probability): VF counter vs GS (75% hit × 25 avg): **EV: 12.4.**
  GS HP: 14 − 12.4 = ~1.6. **★ GS DOWNED R3 (EV border — confirmed downed R4 Monster Phase).**
- Wither Spit vs S&S (AR15, 55% Stunned → some adv): **EV: 12.5.** CON DC17: 60% → **S&S AR 13.**
  S&S HP: 68.5 − 2.5(Aura) − 12.5 = **~54.**
- Serpent's Eye vs Ham: INS DC15: 55% fail → **Ham Stunned (loses R4 — 55% EV).**
- Lingering Gaze: S&S. 65% → **S&S Dazed R4.**
- STA: VF(1) + WS(1) + SE(1) + NW(0.66) = 3.66. Gorgonite STA: 10 → 5.5.

**End R3:**
- GS HP: **~2 CRITICAL** (effectively downed entering R4)
- Ham HP: **~54** | AR 12 | Stunned R4 (55% EV)
- S&S HP: **~54** | AR 13 | Dazed R4 (65%)
- Bow HP: 73 | **F3**
- Gorgonite: **~278 HP | 5.5 STA** | Grounded | ★ Wings BROKEN
- Gaze Head BP: ~0.90 accumulated from frontliner called shots

---

### R4 — GS Downed. Final CG (Grounded 20ft Cone). Gorgonite Exhausts.

*5.5 STA remaining. CG CD expired (R1+3 = available R4). Grounded CG: 20ft cone (Wings broken), Stunned until END next turn. Bow outside 20ft cone (maintaining 30ft+).*

**Hunter Phase**
- GS: Wither Aura −2.5. HP ~2 → effectively 0 entering turn. **GS DOWNED start R4.**
- Ham: 55% Stunned (DC15 SE). 0.45 acts → Impact Zone (50%, 18 avg): **EV: 4.05.** Gaze Head BP: +0.45×2(OF) = +0.90.
- S&S: Wither Aura −2.5. HP ~51.5. Dazed (65%). Attack: **EV: 4.7.**
- Bow: F3. **Power Shot averted (straight 55%): EV 14.0.** F→F0. STA: 9−1=8 (Adaptable).

*Party R4 DPR: 4.05 + 4.7 + 14.0 = ~22.75. Gorgonite HP: 278 → ~261.*
*(GS down at start of turn — no R4 damage from GS.)*

**Monster Phase — CONVERGENT GAZE #2 (4 STA, grounded 20ft cone)**
*Cone is 20ft (Wings broken). Bow at 30ft — OUTSIDE cone. Only Ham and S&S in range.*
- Ham: INS DC17, 75% fail → **10.1 EV** psychic. **Stunned (loses R5).**
- S&S: INS DC17, 75% fail → **10.1 EV** psychic. **Stunned (loses R5).**
- Bow: Outside 20ft cone. **Immune.**
- Venom Fang vs Ham (all-4 +1d10, AR12, Stunned 75% adv): **EV: 24.5.** Ironhide −4: **20.5.**
  Ham HP: 51.5 − 10.1 − 20.5 = **~21. CRITICAL.**
- Lingering Gaze: S&S. 65% → **S&S Dazed R5.**
- STA: CG(4) + VF(1) + NW(0.2) = 5.2. Gorgonite STA: 5.5 → **0.3 ≈ 0.**
  **★ GORGONITE EXHAUSTED — end of R4 Monster Phase.**

**End R4:**
- GS: ★ DOWNED R4.
- Ham HP: **~21** | AR 12 | Stunned (misses R5) | CRITICAL
- S&S HP: **~41 − 10.1 = ~31** | AR 13 | Stunned (misses R5) | Dazed (65%)
- Bow HP: 73 | F0 | STA: 8
- Gorgonite: **~261 HP | 0 STA | EXHAUSTED** | Wings broken | All heads intact
- Gaze Head progress: **~1.35 hits**

---

### R5 — Ham Downed. S&S Coiled.

*Exhausted Gorgonite: 2 attacks/turn. Wither Aura + Lingering Gaze still active. Bow kiting at 30ft+.*

**Hunter Phase**
- Ham: Wither Aura −2.5. HP: 21−2.5=18.5. Stunned (75% from CG R4, but CG used DC17 so 75% fail = stunned). 0.25 acts → Impact Zone: **EV: 2.25.** Gaze Head BP: +0.25×2(OF)=+0.50.
- S&S: Wither Aura −2.5. HP: 31−2.5=28.5. Stunned (75%). 0.25 acts: **EV: 1.75.**
- Bow: F0 dis (30%): **5.1 EV.** F→F1. STA: 8.

*Party R5 DPR: 9.1. Gorgonite HP: 261 → 252.*

**Monster Phase — EXHAUSTED (2 attacks)**
- Venom Fang vs Ham *(first attack, Hydra +1d10: 22.5+5.5=28 avg)*: AR12, Stunned adv ~98%: **EV: 27.4.** Ironhide −4: **23.4.**
  Ham HP: 18.5 − 23.4 = −4.9. **★ HAM DOWNED R5.**
- Crushing Coil vs S&S *(AR13, Stunned adv 96%)*: **EV: 18.7.** STR DC18: 55% fail → **S&S Coiled+Restrained.**
  S&S HP: 28.5 − 18.7 = **~10.**
- Lingering Gaze: S&S. 65% → **S&S Dazed.**

**End R5:**
- GS, Ham: Downed. Two hunters remain.
- S&S HP: **~10** | AR 13 | Coiled (55%) | Dazed (65%) | Stunned resolves R6
- Bow HP: 73 | F1 | STA: 8
- Gorgonite: **~252 HP | 0 STA | Exhausted**
- Gaze Head progress: **~1.85 hits** (3 threshold — never completed)

---

### R6 — S&S Downed. Solo Bow Phase Begins.

**Hunter Phase**
- S&S: Start of turn — Wither Aura −2.5 + Coil ongoing (55% × 7 avg = 3.85 EV) → HP 10−6.35=**3.65.** Stunned resolved. Dazed + Coiled. Action: escape attempt (STR DC18, 45% success) → **0 dmg.**
- Bow: F1 averts. Normal dis attack (30.25% × 18 = **5.45 EV**). F→F2. 0 STA (Adaptable).

*Party R6 DPR: 5.45. Gorgonite HP: 252 → ~246.*

**Monster Phase — EXHAUSTED (2 attacks)**
- Venom Fang vs S&S *(first attack, Hydra +1d10: 28 avg)*: Coiled/Restrained adv 96%: **EV: 26.9.**
  S&S HP: 3.65 − 26.9 = −23. **★ S&S DOWNED R6.**
- Wither Spit vs Bow *(AR16, 60% hit, 18.5 avg)*: **EV: 11.1.** CON DC17: 65% fail → **Bow AR −2 (AR 14).**
- Lingering Gaze: Bow averts → immune.

**End R6:**
- GS, Ham, S&S: **ALL DOWNED.** ★ Solo Bow.
- Bow HP: 73 − 11.1 = **~62** | AR 14 | F2 | STA: 8
- Gorgonite: **~246 HP | 0 STA | Exhausted** | Move 15ft | 4 heads intact

---

### R7 — Bow Power Shot F3.

*Bow maintains 30ft+. Gorgonite moves 15ft/turn — gap holds. Only Wither Spit (30ft range) reaches Bow. Serpent's Eye blocked by Averted Gaze. Hydra Convergence +1d10 on first attack still active (4 heads intact).*

**Hunter Phase**
- Bow: F2 → stationary, attacks at F2 dis: **5.75 EV.** F→**F3.** 0 STA. STA: 8.

*Gorgonite HP: 246 → ~240.*

**Monster Phase**
- Wither Spit *(first attack, Hydra +1d10: 3d8+5+1d10 = 24 avg)* vs Bow AR14 (70%): **EV: 16.8.**
- Serpent's Eye: Bow averts → immune.

Bow HP: 62 − 16.8 = **~45.** F3. STA: 8.

---

### R8 — Bow Power Shot F3.

**Hunter Phase**
- Bow: F3. **Power Shot averted (straight 55%): 55% × 25.5 = 14.0 EV.** F→F0. STA: 8−1=7 (Adaptable).

*Gorgonite HP: 240 → ~226.*

**Monster Phase**
- Wither Spit + Hydra: **EV: 16.8.** Bow HP: 45 − 16.8 = **~28.** F0. STA: 7.

---

### R9–R10 — Bow Focus Rebuild. Attrition Closes.

**R9:**
- Bow: F0 dis (30.25% × 17 = **5.14 EV**). F→F1. 0 STA. STA: 7.
- Gorgonite: 226 → ~221.
- Wither Spit + Hydra: **16.8 EV.** Bow HP: 28 − 16.8 = **~11.** F1.

**R10:**
- Bow: F1 dis (30.25% × 18 = **5.45 EV**). F→F2. STA: 7.
- Gorgonite HP: 221 → **~216.**
- Wither Spit + Hydra: **16.8 EV.** Bow HP: 11 − 16.8 = −5.8.

★ **BOW DOWNED R10. TPK.**

*(Bow reaches F2 at end of Hunter Phase but Monster Phase fires before a Power Shot can be cashed.)*

---

## Final Report

| Metric | v1 (DC17) | v2 (DC15) |
|---|---|---|
| Fight duration | 9 rounds | **10 rounds** |
| Outcome | TPK R9 | **TPK R10** |
| Hunters downed | All four | All four |
| Order | GS R3, Ham R5, S&S R6, Bow R9 | GS R4, Ham R5, S&S R6, Bow R10 |
| HP dealt | 95 / 346 **(27%)** | 130 / 346 **(38%)** |
| Gorgonite HP at TPK | ~251 | **~216** |
| Part breaks | None | **Wings R3** |
| Convergent Gaze fires | R1 (aerial), R4 (grounded) | R1 (aerial), R4 (grounded 20ft) |
| Serpent's Eye fires | R2, R3, R4 | R2, R3, R4 (55% fail vs 75%) |
| Wither Spit applied | Ham R2, S&S R3, Bow R6 | Ham R2, S&S R3, Bow R6 |
| Gorgonite exhausted | R4 | R4 |

### HP Trajectory

```
          v1 (DC17)         v2 (DC15)
Start:    346               346
R1:       341  (−5)         341  (−5)    [CG aerial — all frontliners stunned]
R2:       328  (−13)        328  (−13)   [Stun cycling; minor uptime]
R3:       307  (−21)        278  (−50)   ★ WINGS BREAK — Ham free, DPR spike + 11 break bonus
R4:       289  (−18)        261  (−17)   [GS downed R4 vs R3; grounded CG 20ft — Bow outside cone]
R5:       280  (−9)         252  (−9)    [Ham downed]
R6:       275  (−5)         246  (−6)    [S&S downed; Wither Spit hits Bow]
R7:       261  (−14)        240  (−6)    [Solo Bow: F2 attack; Wither Spit begins]
R8:       256  (−5)         226  (−14)   [Bow PS F3]
R9:       251  (−5) TPK     221  (−5)
R10:                        216  (−6)    TPK
```

### Attrition Analysis

| Hunter | Downed By | Root Cause |
|---|---|---|
| GS | Neck Weave R4 | R1 CG stripped R2. DC15 SE gave 45% chance to act in R3 (extra round vs original). Neck Weave retaliation still killed on re-entry. |
| Ham | Venom Fang R5 | SE R3 (55% fail) still stunned Ham for R4. CG R4 re-stunned R5. Wither Spit → AR12 made Ironhide the only mitigation. Same fate as v1. |
| S&S | Venom Fang R6 | SE + CG cycling depleted STA. Coiled R5 removed escape options. Restrained + Stunned = near-certain hit. Same fate as v1. |
| Bow | Wither Spit R10 | Solo vs Exhausted Gorgonite. 1 × Wither Spit + Hydra Convergence = 16.8 EV/round vs Bow's ~8 avg DPR. Survived one extra round vs v1. |

### Mechanical Notes

**DC15 SE delivered exactly the intended improvement.** The critical delta is R3: Ham free to act = Wings break. Wings break generated +11 bonus damage and cut CG cone to 20ft — Bow was completely outside the cone for CG R4, removing the only threat to the last survivor's opener. At DC17, the stun rotation hit Ham in R3, making Wings break impossible until R4 (too late given GS's HP state). One free round of melee at T4 is worth ~25-50 EV depending on part break timing.

**Wings breaking in R3 is the single largest event of the fight.** R3 generated 50 EV — more than the previous two rounds combined. The Wings break bonus (11 EV) plus Ham's free attack (~9 EV) plus reduced stun efficiency accounts for most of the 29 HP improvement over v1. Wings are Open (0) accuracy — this break was achievable because any attack can contribute progress, even from partially-stunned hunters.

**The Wither Spit endgame is a hard ceiling for solo Bow.** Once all three frontliners are down, Bow (62 HP, AR14) faces Wither Spit + Hydra Convergence (16.8 EV/round). At ~8 avg DPR, the gap is ~9 EV/round in Gorgonite's favor. Bow survives 62/16.8 = 3.7 rounds regardless of Focus state. This ceiling is by design — the solo phase exists as a consequence of the party failing the break sequence, not as a winnable 1v1.

**Hydra Convergence never degraded.** All four heads survived the fight. The +1 Power Die on every first attack (no STA cost, no trigger condition) quietly added 5.5 avg to every opening strike throughout. Gorgonite's R4 CG VF follow-up and R5-R6 Venom Fangs all benefited. The passive becomes less oppressive only if heads start breaking — which requires the party to execute the full break priority (Wings → Gaze Head).

**CG R4 cone at 20ft was decisive for Bow.** In v1, Gorgonite's R4 grounded CG covered 30ft — Bow (maintaining 30ft distance) was just inside the edge and had to avert or risk stun. In v2, the 20ft grounded cone meant Bow was fully outside and immune without spending a round averting. Bow's Power Shot in R4 (14.0 EV) benefited directly from this. The Wings break was structurally the gift that kept giving.

### Design Verdict

**The fight is correctly tuned. No further stat changes recommended.**

DC15 SE improved HP dealt from 27% to 38%, extended the fight one round, and enabled the first part break in the fight's history. The puzzle is real: the correct sequence (Wings R1-R2 → Gaze Head R3-R5) is executable and would produce a party win. Dying without executing it feels earned.

**Win condition with current party composition:** The fight closes in R10-R12 if:
1. Wings break by R2 (focused all-party targeting in R1-R2; achievable at Open 0 accuracy)
2. Gaze Head break by R5 (Standard −2, consistent melee targeting after Wings; requires Ham specifically)
3. With both: Bow drops Averted Gaze after Gaze Head falls → ~55% hit instead of 30% → ~80% DPR increase in solo phase

**Win condition with sustain:** Hunting Flute + the above break sequence closes the fight with 1-2 hunters surviving. Without the break sequence, HF alone is insufficient — Wither Spit attrition in the solo phase outpaces any realistic sustain output.

**The fight communicates its solution clearly.** The Wings break is the easiest break in the fight (Open 0, 3 hits), and its payoff (grounded combat, CG cone halved, Bow outside forever) is immediately legible. A party that discovers this on their first attempt has a reason to try again differently. That is correct design.
