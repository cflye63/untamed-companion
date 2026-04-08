# MORTHYL SIM — 4P Tier 5 HR 24 (Optimized, EV Mode)

**Party:** Human Greatsword, Trolian Hammer, Human Bow, Thalorim Conduit (Storm)
**Monster HP:** 580 (optimized 4P)
**Bear Form trigger:** HP ≤ 377 (65%) OR Biomass ≥ 4
**Siege Form trigger:** HP ≤ 203 (35%) OR Biomass ≥ 7
**Result:** Party Victory R14–15 (Pyrrhic — 2 of 4 hunters downed)

---

## Roster

### Hunter 1 — Human Greatsword | HR 24

```
Build: Base STR 5, CON 5 → Tribal Warrior +2 STR +1 CON →
  GS badge +1 STR +1 CON → Human +1 STR → Vitality Floor +4 CON →
  T5 scaling +8 STR

STR 17 (+8)   DEX  3 (+1)   CON 11 (+5)
INT  3 (+1)   INS  3 (+1)   CHA  3 (+1)

AR:       14   (Heavy armor — no Dodge)
HP:      112   (11×8 + 24)
Stamina:  11   (6 + CON mod 5)

Attack:  d20+10  →  3d8+8  avg hit dmg: 21.5
         M3 active: +3 flat + 1d8 power die + crit 18-20 = avg 30.0
Save DC: 20
React:   Parry (GS tag)

T5 — Executioner's Strike (4 STA, Wind-Up):
  Charge: Rooted, DisAdv DEX saves.
  Release: base GS dmg × 2 on hit; × 4 on crit.
  M3 start: advantage + 1 power die. Crit 18-20.
  On hit: Stagger. [NOT FIRED — no safe window]

T4 — Tremor Strike (3 STA):
  3d12+8 (avg 27.5) single target.
  Shockwave DEX DC 20 or Prone in 10 ft.

T3 — Titan's Guard (2 STA, Reaction):
  Halve all damage until next turn.
  If hit during window: free counter-attack + Momentum.
  [NOT MODELED — Parry used instead. See tuning note.]
```

---

### Hunter 2 — Trolian Hammer | HR 24

```
Build: Base STR 5, CON 5 → Tribal Warrior +2 STR +1 CON →
  Hammer badge +2 STR → Trolian +1 STR → Vitality Floor +4 CON →
  T5 scaling +8 STR

STR 18 (+9)   DEX  3 (+1)   CON 10 (+5)
INT  3 (+1)   INS  3 (+1)   CHA  3 (+1)

AR:       14 base → 15 effective (Trolian Anchored Frame +1 when stationary)
HP:      104   (10×8 + 24)
Stamina:  11   (6 + CON mod 5)

Attack:  d20+11  →  3d8+9  avg hit dmg: 22.5
Called Shot Impact Zone (−2): d20+9
Save DC: 21
React:   None (Heavy armor, no Guard/Parry)

Racial: Anchored Frame (+1 AR stationary), Flowstep (ignore difficult terrain)

T5 — Titan's Wrath (4 STA, Wind-Up):
  Uninterruptible charge. 5d10+9 (avg 36.5) in 20-ft arc.
  On hit: 3 Impact → instant Stun + 15 ft launch + Prone.
  (Launch/Prone negated by Rootbound Colossus — Stun still applies.)
  After use: Wind-Up locked 2 rounds.

T4 — Meteor Strike (3 STA):
  Leap 15 ft. 10-ft radius. DEX DC 21: 3d10+9 + Prone + 2 Impact.

T3 — Overwhelming Force (Passive):
  Block/Dodge → spend 1 STA → half dmg anyway + 1 Impact.
  Break Progress: 2 per hit (3 at Impact 3). Ignore bludgeoning resistance.
  Ironhide: first hit/round reduced by CON mod when stationary.
```

---

### Hunter 3 — Human Bow | HR 24

```
Build: Base DEX 5, CON 5, INS 4 → Wanderer +2 DEX +1 INS →
  Bow badge +1 DEX +1 INS → Human +1 DEX → Vitality Floor +4 CON →
  T5 scaling +8 DEX

DEX 17 (+8)   STR  3 (+1)   CON  9 (+4)
INT  3 (+1)   INS  6 (+3)   CHA  3 (+1)

AR:       18   (Light armor: 10 + DEX mod 8)
HP:       96   (9×8 + 24)
Stamina:  10   (6 + CON mod 4)

Attack:  d20+10  →  3d8+8  avg hit dmg: 21.5
         Focus 3: +3 flat → 24.5. Power Shot at F3: adv + power die → 29.0
Save DC: 20
React:   Dodge (Light armor)
Focus:   +1/stationary turn (cap 3)

T5 — Flying Drake Shot (4 STA, Wind-Up):
  6d8+8 (avg 35.0) in 30-ft line, advantage.
  STR save DC 20 or Prone. F3: 40 ft line.
  [NOT FIRED — STA insufficient at F3 windows]

T4 — Rain of Arrows (3 STA):
  20-ft radius zone, 2 rounds. DEX DC 20 or half move + half dmg.

T3 — Concentration (Passive):
  Retain Reactions while aiming Power Shot.
  Dodge during aim → immediate release.
```

---

### Hunter 4 — Thalorim Conduit (Storm) | HR 24

```
Build: Base INS 5, CON 5 → Tracker +2 INS +1 CON →
  Conduit badge +2 INS → Thalorim +1 INS → Vitality Floor +4 CON →
  T5 scaling +8 INS

INS 18 (+9)   STR  3 (+1)   CON 10 (+5)
INT  3 (+1)   DEX  3 (+1)   CHA  3 (+1)

AR:       12 base / 13 while Channeling (Grounded Will +1)
HP:      104   (10×8 + 24)
Stamina:  11   (6 + CON mod 5)
           Channel drain: −1 STA/turn. Projection: −1 STA/turn.
           Net cost projecting + attacking: 3 STA/turn.

Attack:  d20+11  →  3d8+9  avg hit dmg: 22.5
Save DC: 21
React:   Dodge (Medium armor)

Storm Aspect: enemies ending turn in field spend 1 STA OR take 1d6 (avg 3.5).
  Morthyl always takes damage (3.5 trivial vs 580 HP / 26 STA).

T5 — Cataclysm Collapse (4 STA, ends Channel):
  5d8+9 (avg 31.5) to all in field.
  Storm: CON DC 21 → 60% fail vs Morthyl → Stun 1 turn.

T4 — Expanding Dominion (3 STA):
  Field → 25 ft radius. Aspect triggers twice/round.

T3 — Grounded Will (Passive):
  +1 AR while Channeling.
  Channel survives forced movement unless fail STR save.
  Enemy fails Aspect save → +1 STA (once/round).
```

---

## Monster — Morthyl

```
STR 12 (+6)   DEX 3 (+1)   CON 16 (+8)
INT  2 (+1)   INS 9 (+4)   CHA  2 (+1)

HP: 580 (optimized 4P)   Stamina: 26   Fungal Resilience: +1 STA/turn at anchor

Root Form:  AR 18 | 4 attacks/turn | Stationary
Bear Form:  AR 18 | 3 attacks/turn | 30 ft ground
Siege Form: AR 20* | 3 attacks/turn | Stationary (*22 if Bear Skull unbroken)

Claimed Ground: 30 ft radius at anchor.
  −10 ft move, disengage +1 STA, forced movement halved, Prone → −1 STA/turn.
Rootbound Colossus: immune to push/pull/Prone.
Biomass: accumulated via Consume. Fuels form transitions and Rot Cascade bonus.
```

### Root Form Attacks

| Attack | Cost | To-Hit | Avg Dmg | Rider |
|--------|------|--------|---------|-------|
| Grasping Tendrils | 1 STA | d20+10 | 15.0 | Pull 10 ft, −1 STA if into CG |
| Root Slam | 2 STA | DEX DC 16 | 22.5 | Rooted (fail) |
| Spore Seeding | 4 STA CD2 | CON DC 16 | — | Poisoned + −10 ft move |
| Subterranean Reposition | 4 STA CD2 | — | — | Relocate 60 ft, Broken Ground |
| Forest Seizure | 6 STA 1/hunt | DEX DC 17 | 22.0 | Prone + Rooted, Dense Root 2 rds |

### Bear Form Attacks

| Attack | Cost | To-Hit | Avg Dmg | Rider |
|--------|------|--------|---------|-------|
| Claw Strike (×2) | 1 STA each | d20+10 | 21.5 | — |
| Gore Charge | 2 STA | d20+10 | 24.5 | STR DC 17: KB 15 ft + Prone |
| Shoulder Check | 1 STA | d20+10 | 19.0 | STR DC 17: Push 15 ft + −1 STA |
| Body Slam | 2 STA | DEX DC 17 | 24.5 | Prone (fail), half dmg (success) |

### Siege Form Attacks

| Attack | Cost | To-Hit | Avg Dmg | Rider |
|--------|------|--------|---------|-------|
| Ossified Strike | 2 STA | d20+10 | 30.0 | CON DC 18: Stun |
| Marrow Barrage | 2 STA CD1 | DEX DC 16 | 15.0/zone | Poisoned + Rooted |
| Rot Cascade | 5 STA 1/hunt | CON DC 18 | 22.0 (0 Bio) | Poisoned 2 turns + Rooted |

### Reactions

| Reaction | Cost | Trigger | Effect |
|----------|------|---------|--------|
| Root Surge | 1 STA | Creature leaves CG | DEX DC 16 or Prone |
| Bone Wall (Siege) | 1 STA | Hit by attack | −8 incoming damage |

### Part Breaks

| Part | Form | Accuracy | Threshold | Break Effect |
|------|------|----------|-----------|--------------|
| Root Limbs ★ | Root | Open (0) | 5 hits | Root Slam −1d10, Tendrils 10 ft |
| Fungal Core | Root | Standard (−2) | 4 hits | Consume HP halved |
| Spore Chambers | Root | Precise (−4) | 3 hits | Spore Seeding disabled |
| Mycelial Network | Root | Standard (−2) | 4 hits | Reposition range 30 ft |
| Bear Skull ★ | Bear | Standard (−2) | 4 hits | Gore disabled, Body Slam 5 ft, Siege AR 22→20 |
| Tusk Shafts | Bear | Open (0) | 3 hits | Claw Strike −1d8 |
| Rib Cage | Bear | Precise (−4) | 3 hits | Body Slam DC−2 |
| Skull Armor | Siege | Open (0) | 6 hits | AR 22→18, Fungal Core exposed |
| Skull Mask | Siege | Standard (−2) | 4 hits | Rot Cascade disabled, Ossified loses Stun |
| Marrow Vents | Siege | Precise (−4) | 3 hits | Marrow Barrage disabled |

---

## Hit Table

### Hunters → Morthyl

| Attacker | vs Root/Bear AR 18 | vs Siege AR 20 | Called Shot Skull Mask (−2) |
|----------|-------------------|----------------|---------------------------|
| GS (d20+10) | 65% | 55% | 45% |
| Ham (d20+11) | 70% | 60% | 50% |
| Bow (d20+10) | 65% | 55% | 45% |
| Con (d20+11) | 70% | 60% | 50% |

### Morthyl → Hunters

| Attack | vs GS AR 14 | vs Ham AR 15 | vs Bow AR 18 | vs Con AR 13 |
|--------|-------------|--------------|--------------|--------------|
| STR (d20+10) | 85% | 80% | 65% | 90% |
| INS (d20+8) | — | — | 55% | 85% |

### Key Save Fail Rates

| Save | GS | Ham | Bow | Con |
|------|-----|-----|-----|-----|
| DEX DC 16 (Root Slam, Spore) | 75% | 75% | 35% | 75% |
| DEX DC 17 (Body Slam) | 80% | 80% | 45% | 80% |
| STR DC 17 (Gore, Shoulder) | 45% | 40% | 80% | 80% |
| CON DC 16 (Spore Poison) | 55% | 55% | 60% | 55% |
| CON DC 18 (Ossified, Cascade) | 65% | 65% | 70% | 65% |

---

## Round Log

### Root Form (R1–R4)

```
── R1 ────────────────────────────────────────────────────────
HUNTERS: GS Cleave(2STA,adv) 18.9dmg→M2 | Ham CS-RootLimbs 15.8dmg I1
         Bow basic 14.0 F1 | Con Channel+Project 0dmg Storm:3.5
  ▸ Party dmg: 52.2 (cum: 52.2)  Root Limbs 1/5. Impact 1.
MONSTER (580HP 27STA): Spore Seeding → GS/Ham Poisoned (55% each).
  Tendrils ×3: GS(adv,Exposed) 14.7 + Ham 12.0 + Bow 9.8 = 36.5 to party
  ▸ STA: 27→20
STATE: Mon 527.8 STA20 | GS 97hp sta9 M2 Poisoned | Ham 92hp sta10 I1
       Bow 86hp sta9 F1 | Con 104hp sta10

── R2 ────────────────────────────────────────────────────────
HUNTERS: GS M2 basic 15.5→M3 | Ham CS-RootLimbs 15.8 I2 | Bow 14.0 F2
         Con attack+proj 15.8 Storm:3.5
  ▸ Party dmg: 64.6 (cum: 116.8)  Root Limbs 2/5. Impact 2.
MONSTER (463.2HP 21STA): Tendrils ×3 (GS 12.8, Ham 12.0, Bow 9.8)
  + Root Slam on GS/Ham cluster (22.5 each at 75% fail = 16.9 each)
  ▸ Dmg: GS 29.7, Ham 28.9, Bow 9.8. STA: 21→16
STATE: Mon 398.6 STA16 | GS 67hp sta7 M3 | Ham 63hp sta8 I2
       Bow 76hp sta8 F2 | Con 104hp sta7

── R3 ────────────────────────────────────────────────────────
HUNTERS: GS M3 basic 19.5 | Ham CS-RootLimbs 15.8+9break=24.8 I3→STUN
         Bow 14.0 F3 | Con 15.8 Storm:3.5
  ▸ Party dmg: 77.6 (cum: 194.4)
  ★ ROOT LIMBS BROKEN (T3 Overwhelming Force: 2+2+3=7 progress, threshold 5)
  ★ MORTHYL STUNNED (Impact 3). Impact resets to 0.
MONSTER STUNNED — skips turn. Fungal +1. STA: 16→17. Storm: 3.5.
STATE: Mon 381.0 STA17 STUNNED | GS 67hp sta5 M3 | Ham 63hp sta6 I0
       Bow 76hp sta7 F3 | Con 104hp sta4

── R4 ────────────────────────────────────────────────────────
Morthyl Stunned — adv on all attacks.
HUNTERS: GS M3+adv basic 26.3 sta3 | Ham TITAN'S WRATH CHARGE (4STA) sta2
         Bow FDS AIM (4STA, Concentration) sta3 | Con BREATHE +4→sta7
  ▸ Party dmg: 26.3 (cum: 220.7)
MONSTER STUNNED — skips. Fungal +1. STA: 17→18.
  ★ BEAR FORM TRIGGER: HP 359.3 ≤ 377. Tell round. Transition R5.
STATE: Mon 359.3 STA18 Bear-tell | GS 67hp sta3 M3 | Ham 63hp sta2 TW-loaded
       Bow 76hp sta3 FDS-loaded | Con 104hp sta7
```

### Bear Form (R5–R8)

```
── R5 ────────────────────────────────────────────────────────
★ BEAR FORM ACTIVATES. AR 18, 30ft move, 3 attacks/turn.

HUNTERS (CAPSTONE BURST TURN):
  GS M3 basic(2STA Poison) 19.5 sta1 | ★ Ham TITAN'S WRATH RELEASE 25.6 → STUN ★
  ★ Bow FLYING DRAKE... wait, FDS loaded but Rootbound Colossus negates Prone.
    Pure damage: adv 87.75% × 35.0 = 30.7 ★ | Con attack+proj 15.8 Storm:3.5
  ▸ Party dmg: 95.1 (cum: 315.8)  ★ Morthyl STUNNED (TW 3 Impact). ★
  TW launch+Prone negated by Rootbound Colossus. Stun applies (Impact threshold).
MONSTER STUNNED. At anchor → Fungal +1. STA: 18→19. Storm: 3.5.
STATE: Mon 260.7 STA19 STUNNED | GS 67hp sta1 ★LOW★ | Ham 63hp sta2 WU-locked
       Bow 76hp sta3 F0 | Con 104hp sta4

── R6 ────────────────────────────────────────────────────────
Stun ending. Hunters still have advantage this round.
HUNTERS: GS BREATHE +4→sta5 | Ham BREATHE +4→sta6 | Bow adv basic 18.9 F1 sta2
         Con adv attack+proj 20.5 Storm:3.5 sta1
  ▸ Party dmg: 42.9 (cum: 358.7)
MONSTER (217.8HP, STA20 +1 Fungal if at anchor):
  Gore Charge (2STA) → Bow: 65% hit. Bow Dodges (1STA→sta1): dis 42.25% × 24.5 = 10.4
  Claw ×2 (2STA) → GS: 1st Claw GS Parry(1STA→sta4): 50% negate, 50%×17.2=8.6
    2nd Claw: 85% × 21.5 = 18.3. Total to GS: 26.9. GS 67→40hp.
  Bear moved 30ft toward Bow → AWAY from anchor. Kite successful!
  STA: 20−4 = 16. No Fungal next turn.
STATE: Mon 214.1 STA16 (off anchor) | GS 40hp sta4 M3 | Ham 63hp sta6
       Bow 65.6hp sta1 F0 | Con 104hp sta1

── R7 ────────────────────────────────────────────────────────
HUNTERS: GS M3 basic 19.5 sta2 | Ham CS-BearSkull(−2) 13.5 sta5 BearSkull 2/4 I1
         Bow BREATHE +4→sta5 F1 | Con BREATHE +3→sta4
  ▸ Party dmg: 33.0 (cum: 391.7)
MONSTER (181.1HP STA16, no Fungal):
  Claw ×2 → GS: Parry 1st (8.6), 2nd raw (18.3) = 26.9. GS 40→13hp ★CRITICAL★
  Shoulder Check → Ham: 80% × 19.0 = 15.2. STR DC17: 40% fail → push+STA loss.
  Ham: 63→47.8hp. STA: 16−3 = 13.
STATE: Mon 181.1 STA13 | GS 13hp sta1 ★DYING★ | Ham 47.8hp sta4-5 I1
       Bow 65.6hp sta5 F1 | Con 104hp sta4

── R8 ────────────────────────────────────────────────────────
★ SIEGE TRIGGER: 181.1 ≤ 203. Bear decelerates. Final Bear attack round.

HUNTERS: GS BREATHE +4→sta5 M3 held | ★ Ham CS-BearSkull 13.5+11break=24.5 ★
  ★ BEAR SKULL BROKEN (T3 OF: 2+2+2+3=9 progress, threshold 4). Siege AR → 20. ★
  Bow basic 14.0 F2 sta4 | Con attack+proj 15.8 Storm:3.5 sta1
  ▸ Party dmg: 57.8 (cum: 449.5)
MONSTER (123.3HP STA13, transition round):
  Claw → GS (13hp): 85% hit. GS Parry: 50% negate. ★ 50% GS survives. ★
  Claw/Shoulder → Ham: ~17.2. Ham 47.8→30.6hp.
  STA: 13−3 = 10. Moving toward anchor.
STATE: Mon 123.3 STA10 → SIEGE R9 | GS 50% alive at 13hp / 50% DOWN
       Ham ~31hp sta3 I2 | Bow 65.6hp sta4 F2 | Con 104hp sta1
       Bear Skull BROKEN → Siege AR 20.
```

### Siege Form (R9–R15)

```
── R9 ────────────────────────────────────────────────────────
★ SIEGE FORM. AR 20. Skull Mask intact. Bone Wall active. ★
GS modeled as alive (Parry saved R8).

HUNTERS: GS Guarded Stance (0STA prep, +1AR, free Parry) +2STA→sta6 0dmg
  Ham CS-SkullMask(−2) 11.3 sta2 SkullMask 2/4 | Bow Signal Arrow 11.8 F3 sta3
  Con BREATHE +3→sta4 0dmg
  ▸ Party dmg: 19.1 after Bone Wall (cum: 468.6)
MONSTER (104.2HP STA11):
  ★ Rot Cascade held — Biomass 0, low value, saves STA. ★
  Ossified Strike → GS: Parry (0STA via Guarded Stance) 50% negate.
    50% hit: 30dmg. GS at 13hp = likely down if hit. 50% survives.
  Marrow Barrage → Ham/Bow: Ham 75%×15=11.3 Poisoned. Bow 35%×15=5.3.
  Ossified → Ham: 80%×30=24. CON DC18: 65% Stun. Ham 31→7hp.
  STA: 11−6 = 5. Rot Cascade now = exactly remaining pool.
STATE: Mon 96.7 STA5 | GS 13hp ★coin flip★ | Ham ~7hp sta2 65% Stunned
       Bow 60hp sta3 F3 Poisoned | Con 104hp sta4

── R10 ───────────────────────────────────────────────────────
HUNTERS: GS retreats, BREATHE +4→sta10 | Ham Stunned/BREATHE → 0dmg
  Bow Power Shot at F3 (2STA, adv, same-turn) 23.1 sta1
  Con attack+proj 13.5 Storm:3.5 sta1
  ▸ Party dmg: 33.7 after Bone Wall (cum: 502.3)
MONSTER (63.0HP STA6):
  ★ BELOW 15% HP. DESPERATION MODE. ★
  ★ ROT CASCADE FIRES ★ (5STA). 0 Biomass = 4d10 avg 22.
  CON DC18 — 40ft radius:
    GS (65% fail): 22dmg at 13hp → ★ GS DOWN ★
    Ham (65% fail): 22dmg. Survivable at ~7hp → Ham at −15 → ★ HAM at risk ★
    Bow (70% fail): 22dmg. 60→38hp. Poisoned.
    Con (65% fail): 22dmg. 104→82hp. Poisoned.
  STA: 6−5 = 1.
STATE: Mon 63.0 STA1 | ★ GS DOWN ★ | Ham DOWN (R11 Ossified)
       Bow 38hp sta1 Poisoned | Con 82hp sta1 Poisoned

── R11 ───────────────────────────────────────────────────────
3 hunters... then Ossified Strike → Ham.
HUNTERS: Ham BREATHE (if alive) | Bow BREATHE +4→sta5 | Con BREATHE +3→sta4
  ▸ Party dmg: ~3.0 (cum: 505.3)
MONSTER (60HP STA2+1=3): Ossified → Ham: 80%×30=24. ★ HAM DOWN ★
  STA: 3−2 = 1.
STATE: Mon 60.0 STA1 | GS DOWN | HAM DOWN | Bow 38hp sta5 | Con 82hp sta4

── R12 ───────────────────────────────────────────────────────
2 hunters remain.
HUNTERS: Bow basic(2STA Poison) 12.4 sta3 F2
  ★ Con CATACLYSM COLLAPSE (4STA) → 60%×31.5=18.9 + 60% STUN ★ Con EXHAUSTED.
  ▸ Party dmg: 26.9 after Bone Wall (cum: 532.2)
MONSTER: 60% Stunned (skip), 40% Ossified → Bow (Dodge: 12.7 exp).
STATE: Mon 33.1 STA0-2 | Bow ~33hp sta2 | Con 0sta (recovers R13)

── R13 ───────────────────────────────────────────────────────
HUNTERS: Bow basic 8.0 (after Bone Wall). Con recovers (+4sta).
  ▸ Party dmg: 8.0 (cum: 540.2)
MONSTER: If STA3 → Ossified Bow (adv if Exhausted) 26.3 exp. Bow at ~7hp.
STATE: Mon 25.1 | Bow ~7hp | Con sta4

── R14–15 ────────────────────────────────────────────────────
Bow + Con both attack. 8.0 + 13.5 = 21.5/round.
Mon 25.1 → 3.6 → 0.

★ PARTY VICTORY R14–15. ★
```

---

## Result

```
═══ PARTY WINS R14–15 (Pyrrhic Victory) ═══

Mon HP:      0 / 580
Survivors:   Bow (~7 HP), Conduit (~82 HP)
Casualties:  GS (R10 — Rot Cascade), Ham (R11 — Ossified Strike)
Breaths:     11 total (GS 3, Ham 3, Bow 2, Con 3)
Parts broken: Root Limbs R3, Bear Skull R8
Mon STA→0:   ~R13
Kill round:  14–15
Party DPR:   ~41 avg (575 total / 14 rounds)
Monster DPR: ~33 avg
Biomass:     0 (all Consume denied)
STA pressure: HIGH
HP pressure:  CRITICAL (2 of 4 downed)
```

---

## Flags

1. **Skull Mask not broken before Rot Cascade.** Party prioritized Root Limbs and Bear Skull. Cascade fired R10 at 0 Biomass (22 avg). Killed GS at 13 HP. At 3+ Biomass (43 avg), would have wiped 2-3 hunters.

2. **Spore Seeding Poisoned persisted entire fight.** No treatment modeled. +1 STA per action drained ~12-15 extra STA from GS/Ham across the fight. The #1 STA pressure source — more impactful than Claimed Ground.

3. **GS Exposed from Cleave caused near-lethal spike R1.** Tendril at advantage (97.75% hit) dealt 14.7 to GS. Compounded with later pressure, GS never recovered and died to Cascade.

4. **Hammer had no reaction.** Heavy armor + no Guard/Parry = zero defense. Absorbed every hit at full value. Trolian Anchored Frame (+1 AR) was the only mitigation.

5. **Conduit STA cycling was the tightest constraint.** 3 STA/turn burn forced Breathing every 3rd round. Dealt 0 damage on 5 of 15 rounds. Despite this, healthiest survivor (82 HP) because of range.

6. **Titan's Wrath launch + Prone riders wasted.** Rootbound Colossus immune to push/Prone. TW's 15 ft launch and Prone did nothing. 3 Impact → Stun was the only value.

7. **Flying Drake Shot never fired.** 4 STA cost unaffordable when F3 was available. Power Shot at F3 (2 STA same-turn) was always better.

8. **Executioner's Strike never fired.** No safe 2-turn window. R4 Stun was the only option but GS at STA 3 couldn't afford 4 STA.

9. **Bear Form kite worked.** 3 rounds off-anchor denied ~3 STA recovery. Bear entered Siege at STA 10 not 13.

10. **0 Biomass was fight-defining.** Rot Cascade at 0 Bio (22 avg) vs 6 Bio (64 avg) = 42 damage difference per hunter × 4 targets = 168 total damage avoided.

---

## Tuning Suggestions

1. **Fight length 14-15 rounds — on target.** Design note says minimum 10 rounds. Three forms each got 4+ rounds. HP 580 is correct for optimized 4P.

2. **Spore Seeding Poisoned needs counterplay.** Persists until treatment with no healer = permanent STA tax. Suggestion: add 3-round duration, or let Breathing Turn clear it.

3. **Storm Aspect STA drain is a false choice vs high-STA monsters.** Morthyl always takes 3.5 damage over 1 STA. Total Storm contribution: ~35 dmg across 10 rounds (6% of total). The "spend STA OR take damage" mechanic only pressures low-STA creatures.

4. **T5 capstones (Executioner, FDS) too expensive for STA-heavy fights.** 4 STA cost is prohibitive when Poisoned adds +1 per action and fights run 14+ rounds. Consider 3 STA at T5 proficiency, or "Master proficiency reduces technique STA cost by 1."

5. **Titan's Guard (GS T3) should have been modeled.** Halve damage + counter > Parry's 50% negate in long fights. GS went from 112→0 HP across 10 rounds of cumulative 85%-hit Tendrils and Claws. Titan's Guard would have extended GS survival by ~3 rounds.

6. **Bear Skull break before Siege was the fight-deciding choice.** AR 22 (unbroken) would drop party hit rates to 45-50% and extend Siege by 3-4 rounds — likely a wipe with 2 hunters down. Players who ignore Bear Skull face a fortress. Players who invest get AR 20. Good puzzle design.

7. **0-Biomass vs 4-Biomass is approximately 2 difficulty tiers.** A downed hunter in Claimed Ground gives 2 Biomass per Consume. Two Consumes = Bear force-transition + 38 HP healed + Cascade gains +8d6 (avg +28). This monster punishes carelessness harder than any other design in the system.

8. **Rot Cascade at 0 Biomass still carries Poisoned 2 turns + Rooted.** Denying Biomass reduces damage but the condition riders alone are devastating. Consider: 0-Biomass Cascade drops the Poisoned rider to reward perfect Biomass denial.
