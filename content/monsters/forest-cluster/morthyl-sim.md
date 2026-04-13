# MORTHYL SIM — 4P Tier 5 HR 24 (Optimized Master Prof, EV Mode)

**Party:** Human Hunting Flute, Trolian Arbalest, Trolian Spear & Shield, Trolian Claws
**Monster HP:** 580 (optimized 4P)
**Bear Form trigger:** HP < 406 (70%) OR Biomass ≥ 4
**Siege Form trigger:** HP < 174 (30%) OR Biomass ≥ 7
**Result:** Party Victory R9 — tight finish, S&S at 5 HP, Flute at 8 HP

**Tuning changes tested:**
- AR 19 Root/Bear (was 18)
- Fungal Resilience +2 STA/turn (was +1)
- Form thresholds 70%/30% (was 65%/35%)
- Rot Cascade free at Biomass ≥ 3
- Part break thresholds reduced (Open −2, Standard/Precise −1)
- Hunting Flute Performance Ward: +2 AR while Song active

---

## Roster

### Hunter 1 — Human Hunting Flute | HR 24

```
Build: Base CHA 5, CON 5, INS 4 → Scholar +2 CHA +1 INS →
  Flute badge +1 CHA +1 INS → Human +1 CHA →
  T5 scaling +5 CHA +3 CON

CHA 14 (+7)   DEX  3 (+1)   CON  8 (+4)
INT  3 (+1)   INS  6 (+3)   STR  3 (+1)

AR:       14   (Medium 12 + Performance Ward +2 while Song active)
HP:       88   (8×8 + 24)
Stamina:  10   (6 + CON mod 4)

Attack:  d20+11  →  3d6+7  avg hit dmg: 17.5
Save DC: 21
React:   Dodge (Medium armor)
Racial:  Human Adaptable — 1 attack per hunt costs 0 STA

Songs:   Entropy (−1 AR enemies) | Fortress (+1 AR allies)
         Courage (+1 atk allies) | Discord (1d4 psychic/turn)
         Swiftness (+10 ft) | Lament (disadv Fear/Charm saves)
Notes:   +1 Note per support/debuff (max 3). Crescendo: +1 Note gain.

T5 — Requiem of the Wild (4 STA, 3 rounds):
  Allies: +2 attack/saves, immune Fear/Charm, heal 1d6/turn.
  Enemies: disadvantage on attacks, 2d6 psychic/turn (no save).
  Flute: cannot take Actions/Fast Actions while maintaining.

T4 — Shattering Note (3 STA, AoE):
  20 ft radius, CON DC 21, 3d8+7 avg 20.5 thunder + Stun.

T2 — Healing Hymn (2 STA):
  All allies in 30 ft heal 1d8+7 avg 11.5. 3 Notes: +1d8.

T1 — Resonant Strike (1 STA):
  CHA attack vs AR, base Flute dmg, CON DC 21 → Deafened.
```

---

### Hunter 2 — Trolian Arbalest | HR 24

```
Build: Base STR 5, CON 5, INS 4 → Tribal Warrior +2 STR +1 CON →
  Arbalest badge +1 STR +1 INS → Trolian +1 STR →
  T5 scaling +5 STR +3 CON

STR 14 (+7)   DEX  3 (+1)   CON  9 (+4)
INT  3 (+1)   INS  5 (+2)   CHA  3 (+1)

AR:       15   (Heavy 14 + Trolian Anchored Frame +1 stationary)
HP:       96   (9×8 + 24)
Stamina:  10   (6 + CON mod 4)

Attack:  d20+11, with Aim d20+13  →  4d10+7  avg hit dmg: 29.0
         Armor Penetration: ignore 3 AR (T3+ Rapid Reload)
Save DC: 21
React:   None (Heavy armor, no Guard/Parry)
Racial:  Anchored Frame (+1 AR stationary)

Action Economy (T3+): Free Reload + Fast Aim (+2) + Action Fire
  Standard cycle: 1 STA/shot, d20+13, ignore 3 AR

T5 — Godslayer Shot (5 STA, Wind-Up 2 turns):
  Patient Hunter auto-crit, adv, +4 to hit, crit 18-20.
  8d10+7 avg 51 → doubled on crit = 102. CON DC 21 → Stagger + 4d10.
  [NOT FIRED — fight duration insufficient for 3-turn setup]

T4 — Siege Bolt (3 STA, Wind-Up 1 turn):
  60 ft line, base + 2d10, CON DC 21 → Stun.
  [NOT FIRED — basic shots more STA-efficient]

T1 — Explosive Bolt (2 STA):
  Base dmg + 2d6 fire splash 10 ft, DEX DC 21 half.
```

---

### Hunter 3 — Trolian Spear & Shield | HR 24

```
Build: Base STR 5, CON 5, DEX 4 → Tribal Warrior +2 STR +1 CON →
  S&S badge +1 STR +1 DEX → Trolian +1 STR →
  T5 scaling +5 STR +3 CON

STR 14 (+7)   DEX  5 (+2)   CON  9 (+4)
INT  3 (+1)   INS  3 (+1)   CHA  3 (+1)

AR:       16   (Heavy 14 + Shield +1 + Trolian Anchored Frame +1)
HP:       96   (9×8 + 24)
Stamina:  10   (6 + CON mod 4)

Attack:  d20+11  →  Aggressive 3d10+7 avg 23.5 | Defensive 2d10+7 avg 18.0
Save DC: 21
React:   Block (+3 AR, reduce dmg by CON mod 4) | Parry (+1 AR, counter half dmg)
Racial:  Anchored Frame (+1 AR), Flowstep (ignore difficult terrain),
         Rooted Resilience (failed save → next Reaction −1 STA)

Stances: Aggressive (Reach 10 ft, +1 dmg die, no Block)
         Defensive (Reach 5 ft, Block available)
Momentum: +1 per hit/Block (max 3). Spend 2 = advantage. Spend 3 = free swap.

T5 — Hoplite's Wrath (4 STA, charge line):
  30 ft charge, 4d10+7 avg 29. STR DC 21 → push, fail by 5+ → Stagger.
  [NOT FIRED — Rootbound Colossus negates push, STA too tight]

T3 — Counter-Thrust (1 STA, Reaction):
  After Block in Defensive, attack with advantage + 1d6.

T1 — Thrust & Bash (2 STA):
  Spear thrust + Shield bash 1d6+7. STR DC 21 → Prone.
```

---

### Hunter 4 — Trolian Claws | HR 24

```
Build: Base DEX 5, CON 5, STR 4 → Wanderer +2 DEX +1 INS →
  Claws badge +2 DEX → Trolian +1 DEX →
  T5 scaling +5 DEX +3 CON

DEX 15 (+7)   STR  4 (+2)   CON  8 (+4)
INT  3 (+1)   INS  4 (+2)   CHA  3 (+1)

AR:       17   (Light 10 + DEX mod 7)
HP:       88   (8×8 + 24)
Stamina:  10   (6 + CON mod 4)

Attack:  d20+11  →  Main 3d6+7 avg 17.5 + Bonus 3d6 avg 10.5
         2 attacks/turn base (1 STA each = 2 STA/turn)
Save DC: 21
React:   Dodge (Light armor)
Racial:  Flowstep (ignore difficult terrain — critical vs Morthyl),
         Rooted Resilience (failed save → next Reaction −1 STA)

Core: Feral Rush — +1 Rush per hit (max 5)
  Rush 3+: +10 ft move, Bleeding on hit (no save), 1d6/stack at T3+ (max 3 stacks)

T5 — Apex Predator (5 Rush, Action):
  5 attacks with advantage, +2d6 each, +2 Bleeding stacks each.
  3+ hits same target → CON DC 21 → 4d10 + Stun.
  [NOT FIRED — Rush reset from Breathing Turns prevented accumulation]

T4 — Blood Frenzy (3 STA, Fast, 3 rounds):
  Rush doesn't decay, cap 7, +1d8/attack.
  [NOT FIRED — STA too tight for 3 STA activation cost]

T1 — Rend (2 STA, Action):
  3 attacks, each applies Bleeding (no save), each gains Rush.
```

---

## Monster — Morthyl (Post-Tuning)

```
STR 12 (+6)   DEX 3 (+1)   CON 16 (+8)
INT  2 (+1)   INS 9 (+4)   CHA  2 (+1)

HP: 580 (optimized 4P)   Stamina: 26   Fungal Resilience: +2 STA/turn at anchor

Root Form:  AR 19 | 4 attacks/turn | Stationary
Bear Form:  AR 19 | 3 attacks/turn | 30 ft ground
Siege Form: AR 22 | 3 attacks/turn | Stationary (AR 20 if Bear Skull broken)

Claimed Ground: 30 ft radius at anchor.
  −10 ft move, disengage +1 STA, forced movement halved, Prone → −1 STA/turn.
Rootbound Colossus: immune to push/pull/Prone.
Biomass: accumulated via Consume. Fuels form transitions and Rot Cascade bonus.
Rot Cascade: costs 0 STA if Biomass ≥ 3.
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
| Rot Cascade | 5 STA (0 if Bio≥3) 1/hunt | CON DC 18 | 22+ | Poisoned 2t + Rooted |

### Reactions

| Reaction | Cost | Trigger | Effect |
|----------|------|---------|--------|
| Root Surge | 1 STA | Creature leaves CG | DEX DC 16 or Prone |
| Bone Wall (Siege) | 1 STA | Hit by attack | −8 incoming damage |

### Part Breaks (Updated Thresholds)

| Part | Form | Accuracy | Threshold | Break Effect |
|------|------|----------|-----------|--------------|
| Root Limbs ★ | Root | Open (0) | 3 hits | Root Slam −1d10, Tendrils 10 ft |
| Fungal Core | Root | Standard (−2) | 3 hits | Consume HP halved |
| Spore Chambers | Root | Precise (−4) | 2 hits | Spore Seeding disabled |
| Mycelial Network | Root | Standard (−2) | 3 hits | Reposition range 30 ft |
| Bear Skull ★ | Bear | Standard (−2) | 3 hits | Gore disabled, Body Slam 5 ft, Siege AR 22→20 |
| Tusk Shafts | Bear | Open (0) | 2 hits | Claw Strike −1d8 |
| Rib Cage | Bear | Precise (−4) | 2 hits | Body Slam DC−2 |
| Skull Armor | Siege | Open (0) | 4 hits | AR 22→19, Fungal Core exposed |
| Skull Mask | Siege | Standard (−2) | 3 hits | Rot Cascade disabled, Ossified loses Stun |
| Marrow Vents | Siege | Precise (−4) | 2 hits | Marrow Barrage disabled |

---

## Hit Table

### Hunters → Morthyl (with Entropy Song: −1 AR)

| Attacker | vs Root/Bear eff AR 18 | vs Siege eff AR 21 | Called Shot (−2) R/B | Called Shot (−2) Siege |
|----------|----------------------|-------------------|---------------------|----------------------|
| Flute (d20+11) | 70% | 55% | 60% | 45% |
| Arbalest (d20+13, AP−3) | 95% (eff AR 15) | 75% (eff AR 18) | — | — |
| S&S Agg (d20+11) | 70% | 55% | 60% | 45% |
| Claws ×2 (d20+11) | 70% each | 55% each | 60% | 45% |

### Morthyl → Hunters

| Attack | vs Flute AR 14 | vs Arb AR 15 | vs S&S AR 16 | vs Claws AR 17 |
|--------|---------------|--------------|--------------|----------------|
| STR (d20+10) | 80% | 80% | 75% | 70% |
| w/ Dodge | 64% | — | — | 49% |
| w/ Block (S&S) | — | — | 60% (AR 19) | — |
| INS (d20+8) | 70% | 70% | 65% | 60% |

### Key Save Fail Rates (Hunters vs Monster DCs)

| Save | Flute | Arbalest | S&S | Claws |
|------|-------|----------|-----|-------|
| DEX DC 16 (Root Slam, Spore) | 60% | 60% | 55% | 30% |
| DEX DC 17 (Body Slam, Seizure) | 65% | 65% | 60% | 35% |
| STR DC 17 (Gore, Shoulder) | 80% | 45% | 45% | 75% |
| CON DC 16 (Spore Poison) | 45% | 45% | 45% | 45% |
| CON DC 18 (Ossified, Cascade) | 55% | 55% | 55% | 55% |

### Monster Save Fail Rates (vs Hunter DC 21)

| Save | Mod | Fail Rate |
|------|-----|-----------|
| STR +6 | — | 70% |
| DEX +1 | — | 95% (floor) |
| CON +8 | — | 60% |
| INS +4 | — | 80% |

---

## Round Log

### Root Form (R1–R2)

```
── R1 ────────────────────────────────────────────────────────
HUNTERS: Flute Entropy(Fast)+ResonantStrike(0STA Adaptable) 12.3dmg STA10
         Arb Aim+Fire(1STA) 27.6dmg STA9
         S&S Aggressive(1STA) 16.5dmg STA9
         Claws REND(2STA) 3atk×70%=36.8dmg STA8 | Rush→2, Bleeding×2
  ▸ Party dmg: 93.2 (cum: 93.2)  Conditions: Bleeding ×2 on Morthyl

MONSTER (580HP, STA 26+2 Fungal=28) — Root Form:
  Spore Seeding (4STA): melee zone. Claws Poisoned (45%).
  Tendrils → Flute (1STA): 64% after Dodge → 9.6exp, pull. Flute STA9.
  Tendrils → Arbalest (1STA): 80% → 12.0exp, pull.
  Root Slam → S&S+Claws (2STA): S&S 12.4exp, Claws 6.8exp.
  ▸ Monster dmg: 40.8 to party | Bleed tick: 7.0
  STA: 28 − 8 = 20

STATE: Mon HP 480/580 STA 20 Bleed×2
  Flute 78/88 STA9 | Arb 84/96 STA9 | S&S 84/96 STA9 | Claws 81/88 STA8 R2

── R2 ────────────────────────────────────────────────────────
HUNTERS: Flute Resonant(1STA) 12.3 STA8 | Arb Aim+Fire(1STA) 27.6 STA8
         S&S Aggressive(1STA) 16.5 STA8
         Claws Atk+Bonus(2STA) 19.6 STA6 | Rush→3+ (Bleeding on hits)
         Bleeding stacks → 3 (cap)
  ▸ Party dmg: 76.0 (cum: 169.2)
  ★ Monster HP 404 < 406 (70%) → BEAR FORM TELL triggered

MONSTER (404HP, STA 20+2=22) — Root Form TELL ROUND:
  Bones shift. Reposition locked.
  ★ FOREST SEIZURE (6STA, ONCE) — 30ft radius, DEX DC 17:
    Flute: 65% fail → 14.3exp + Prone
    S&S: 60% fail → 13.2exp + Prone
    Claws: 30% fail → 6.6exp (Flowstep ignores Dense Root Terrain)
  Tendrils → Arbalest (1STA): 80% → 12.0exp, pull.
  Dense Root Terrain 2 rounds.
  ▸ Monster dmg: 46.1 | Bleed tick: 10.5
  STA: 22 − 7 = 15

STATE: Mon HP 394/580 STA 15 Bleed×3 | BEAR FORM NEXT ROUND
  Flute 54/88 STA7 PRONE | Arb 60/96 STA8 | S&S 58/96 STA8 PRONE
  Claws 68/88 STA6 R3+
```

### Bear Form (R3–R6)

```
── R3 ────────────────────────────────────────────────────────
★ BEAR FORM ERUPTS. AR 19 (eff 18), 30ft move, 3 atk/turn.
  Claimed Ground stays at anchor.

HUNTERS: Flute Stand(2STA)+Resonant(1STA) 12.3dmg STA4
         Arb Aim+Fire(1STA) 27.6 STA7
         S&S Stand(2STA)+Aggressive(1STA) 16.5 STA5
         Claws Atk+Bonus(2STA) 19.6 STA4 | Rush building→~5
  ▸ Party dmg: 76.0 (cum: 245.2)

MONSTER (394HP, STA 15+2=17) — Bear Form opener:
  Gore Charge → S&S (2STA): 75%, Parry → 70% hit, 36.75% negated.
    Through: 33%×24.5 = 8.2exp. Riposte: 4.3 to Morthyl. S&S STA4.
  Claw Strike → Flute (1STA): 80%, Dodge → 64% → 13.8exp. Flute STA3.
  Claw Strike → Claws (1STA): 70%, Dodge → 49% → 10.5exp. Claws STA3.
  ▸ Monster dmg: 32.5 | Bleed tick: 10.5
  STA: 17 − 4 = 13

STATE: Mon HP 303/580 STA 13 Bleed×3
  Flute 40/88 STA3 | Arb 60/96 STA7 | S&S 50/96 STA4 | Claws 57/88 STA3

── R4 ────────────────────────────────────────────────────────
HUNTERS: Flute HEALING HYMN (2STA) → all allies +11.5 HP. STA1. 0dmg.
         Arb Aim+Fire(1STA) 27.6 STA6
         S&S Aggressive(1STA) 16.5 STA3
         Claws Atk+Bonus(2STA) 19.6 STA1
  ▸ Party dmg: 63.7 (cum: 308.9)  Healing: +11.5 each

MONSTER (303HP, STA 13, NOT at anchor — chasing, no Fungal):
  Claw → Arbalest (1STA): 80% → 17.2exp.
  Shoulder Check → S&S (1STA): 75%, Parry → 33% through → 6.3exp.
    Riposte: 4.3 to Morthyl. S&S STA2.
  Claw → Flute (1STA): 80%, Flute can't Dodge (STA1) → 17.2exp.
  ▸ Monster dmg: 40.7 | Bleed tick: 10.5
  STA: 13 − 3 = 10

STATE: Mon HP 224/580 STA 10 Bleed×3
  Flute 35/88 STA1 ⚠ | Arb 54/96 STA6 | S&S 55/96 STA2 | Claws 52/88 STA1
  ★ Monster exploits Flute at STA1 with no Dodge — 80% raw hit

── R5 ────────────────────────────────────────────────────────
HUNTERS: Flute BREATHE +4→STA5 0dmg | Arb Aim+Fire(1STA) 27.6 STA5
         S&S BREATHE +4→STA6 0dmg | Claws BREATHE +4→STA5 0dmg Rush→0
  ▸ Party dmg: 27.6 (cum: 336.5)
  ⚠ TRIPLE BREATHING — only Arbalest fires. Monster's best window.

MONSTER (224HP, STA 10+2 Fungal=12, returns to anchor):
  Body Slam (2STA): S&S 60% fail → 14.7exp +Prone. Claws 30% fail → 7.4exp.
  Claw → Arbalest (1STA): 80% → 17.2exp.
  Shoulder Check → Flute (1STA): 80%, Dodge → 64% → 12.2exp. Flute STA4.
  ▸ Monster dmg: 51.5 ★ HIGHEST SINGLE ROUND | Bleed tick: 10.5
  STA: 12 − 4 = 8

STATE: Mon HP 186/580 STA 8 Bleed×3
  Flute 23/88 STA4 ⚠ | Arb 37/96 STA5 | S&S 40/96 STA6 PRONE | Claws 45/88 STA5

── R6 ────────────────────────────────────────────────────────
HUNTERS: ★ Flute SHATTERING NOTE (3STA) — CON DC 21 → 60% STUN ★
           16.4exp dmg. STA1.
         Arb Aim+Fire(1STA) 27.6 STA4
         S&S Stand(2STA)+Aggressive(1STA) 16.5 STA3
         Claws Atk+Bonus(2STA) 19.6 STA3 | Rush→~1.4
  ▸ Party dmg: 80.1 (cum: 416.6)
  ★ Monster HP 106 < 174 (30%) → SIEGE TELL triggered
  ★ 60% Morthyl STUNNED by Shattering Note — skip turn!

MONSTER (106HP, STA 8+2=10) — Bear Form TELL ROUND:
  60% STUNNED: skip turn entirely. 0 damage.
  40% path: Claw×2 + Shoulder → ~38exp. Weighted: 15.2exp.
  ▸ Weighted monster dmg: 15.2 | Bleed tick: 10.5
  ★ Shattering Note Stun saved party ~38 HP of damage
  STA: ~9 (weighted)

STATE: Mon HP 94/580 STA 9 Bleed×3 | SIEGE FORM NEXT ROUND
  Flute 23/88 STA1 ⚠ | Arb 37/96 STA4 | S&S 40/96 STA3 | Claws 45/88 STA3
  ★ PIVOTAL MOMENT — Stun denied Bear's final offensive round
```

### Siege Form (R7–R9)

```
── R7 ────────────────────────────────────────────────────────
★ SIEGE FORM ASSEMBLES. AR 22 (eff 21 w/Entropy). Bone Wall active.
  Claimed Ground re-expands. Monster STA 9+2=11. ★ HEALTHY ★

HUNTERS: Flute BREATHE +4→STA5 0dmg
         Arb Aim+Fire(1STA) vs effAR18: 75%. Bone Wall: 0.75×(29−8)=15.8 STA3
         S&S Aggressive(1STA) vs effAR21: 55%×23.5=12.9 STA2
         Claws Atk+Bonus(2STA) vs effAR21: 55%×28=15.4 STA1
  ▸ Party dmg: 44.1 (cum: 460.7) | Bleed tick: 10.5

MONSTER (94HP→39.4, STA 11):
  Biomass = 0 → Rot Cascade costs 5 STA, only 22 avg. NOT WORTH FIRING.
  Ossified Strike → S&S (2STA): 75%, S&S can't Parry (STA2).
    22.5exp. CON DC 18 → 41% Stun on S&S.
  Marrow Barrage → Flute+Arb (2STA): DEX DC 16.
    Flute 60% fail → 9.0exp + Poisoned. Arb 60% → 9.0exp.
  ▸ Monster dmg: 40.5 | Bone Wall absorbed 8 dmg on Arbalest hit
  STA: 11 − 4 = 7 ★ STILL OPERATIONAL ★

STATE: Mon HP 39/580 STA 7 Bleed×3
  Flute 14/88 STA5 ⚠⚠ | Arb 28/96 STA3 | S&S 18/96 STA2 ⚠⚠ | Claws 45/88 STA1
  ★ Monster STA 7: Bone Wall + Ossified + Marrow all still available
  ★ Party HP critical across board. S&S one hit from death.

── R8 ────────────────────────────────────────────────────────
HUNTERS: ★ Flute REQUIEM OF THE WILD (4STA) — THE FIGHT-ENDER ★
           Allies +2 atk/saves, heal 1d6/turn. Enemies disadv atk, 2d6 psychic.
           Entropy Song persists. STA1. 0 direct dmg.
         Arb Aim+Fire(1STA) w/Requiem+2: d20+15 vs effAR18 → 90%.
           Bone Wall: 0.90×(29−8)=18.9exp. STA2.
         S&S BREATHE +4→STA6 0dmg
         Claws BREATHE +4→STA5 0dmg
  ▸ Party dmg: 18.9 + Requiem psychic 7.0 = 25.9 (cum: 486.6)
  Monster HP: 39 − 18.9 − 7 = 13.1. Barely alive.

MONSTER (13.1HP, STA 7+2=9) — Siege, Requiem active:
  ★ All ATTACK ROLLS at DISADVANTAGE (Requiem)
  Ossified → S&S (2STA): disadv (0.75)²=56% → 16.9exp. 31% Stun.
  Marrow Barrage → Flute+Arb (2STA): saves NOT affected by Requiem disadv.
    Flute 9.0exp. Arb 9.0exp.
  ▸ Monster dmg: 34.9 (reduced by Requiem disadvantage on Ossified)
  Bleed tick end of monster turn: 10.5 → Monster HP 13.1 − 10.5 = 2.6
  STA: 9 − 4 = 5

STATE: Mon HP 2.6/580 STA 5 Bleed×3 | ★ BARELY ALIVE ★
  Requiem heals +3.5 each.
  Flute 8/88 STA1 ⚠⚠⚠ | Arb 22/96 STA2 | S&S 5/96 STA6 ⚠⚠⚠ | Claws 49/88 STA5

── R9 ────────────────────────────────────────────────────────
  Requiem continues (round 2/3). Heal +3.5 each.

HUNTERS: Flute maintaining Requiem, no Actions. 0dmg. Heals to 11.5.
         Arb BREATHE +4→STA6 0dmg. Heals to 25.5.
         S&S Aggressive(1STA) w/Requiem+2: d20+13 vs effAR21 → 65%.
           0.65×23.5 = 15.3exp. STA5. Heals to 8.5.
         Claws Atk+Bonus(2STA) w/Requiem+2: 65%×28 = 18.2exp. STA3.
           Heals to 52.5.
  ▸ Party dmg: 33.5. Monster HP 2.6 − 33.5 = deeply negative.

  ════════════════════════════════════════════════════════════
  ★ MORTHYL FALLS — PARTY VICTORY, ROUND 9 (Hunter Phase) ★
  ════════════════════════════════════════════════════════════
```

---

## Result

```
═══ PARTY WINS R9 — Tight Victory ═══

Mon HP:      0 / 580
Survivors:   All 4 alive
Closest:     S&S at 5 HP (5%), Flute at 8 HP (9%)
Breaths:     7 total (Flute 2, S&S 2, Claws 3)
Parts broken: None (DPS focus)
Mon STA→0:   NEVER (STA 5 at death) ★
Kill round:  9
Party DPR:   64.3 avg (580 total / 9 rounds)
Monster DPR: 38.1 avg
Biomass:     0 (all Consume denied)
Rot Cascade: Never fired (Biomass 0, too costly at 5 STA)
Bone Wall:   Active R7–R9 (3 rounds, 24 dmg absorbed)
STA pressure: HIGH (7 Breaths, triple-Breath R5)
HP pressure:  CRITICAL (S&S 5 HP, Flute 8 HP at lowest)
```

---

## Comparison: Pre-Tuning vs Post-Tuning

| Metric | Pre-Tuning | Post-Tuning | Verdict |
|--------|-----------|-------------|---------|
| Kill round | R8 | R9 | +1 round ✓ |
| Bear Form rounds | 2 | **3** | ✓ FIXED |
| Monster exhausts? | R7 (Siege) | **NEVER** (STA 5 at death) | ✓ FIXED |
| Bone Wall rounds | 1 | **3** | ✓ Real threat |
| Breathing Turns | 5 | **7** | More STA pressure ✓ |
| Lowest hunter HP | 20 (Flute 23%) | **5 (S&S 5%)** | Much tighter ✓ |
| Flute lowest HP | 20 (23%) | **8 (9%)** | Still fragile but survived |
| Party DPR | 72.5 | **64.3** | −11% (AR 19 working) ✓ |
| Monster DPR | 36.8 | **38.1** | +4% (more active rounds) |
| Rot Cascade | Never | Never (Bio 0) | Design question, not bug |
| Parts targeted | None | None | Siege breaks still marginal |

---

## Flags

1. **Bear Form puzzle now executes.** 3 full rounds of Bear (R3–R5): Gore Charge opener, Shoulder Check displacement, Body Slam at anchor, Fungal recovery on return. The kiting/anchor dynamic plays out properly.

2. **Monster never exhausted.** Fungal +2 STA/turn kept Morthyl operational throughout Siege. STA 5 at death — Bone Wall, Ossified Strike, and Marrow Barrage all online until the end. The punching-bag problem is resolved.

3. **Shattering Note Stun was the fight's turning point (R6).** 60% Stun at 3 STA. Without it, Bear's final round deals ~38 extra damage and the fight extends to R10 with probable S&S death. The Stun is earned (costly STA spend, 60% chance), not free.

4. **Triple Breathing Turn in R5 was Morthyl's best window.** Only Arbalest fired. Monster dealt 51.5 dmg — highest single round. This is correct: punishing simultaneous Breathing is the fight's STA pressure mechanic working as designed.

5. **Rot Cascade still never fires against competent parties (Biomass 0).** With the free-cast at Biomass ≥ 3, the mechanic is correctly gated by party skill. Seeding 1–2 pre-existing corpses in the arena (per Encounter Packaging) gives Morthyl a realistic path to Biomass 3 without requiring a hunter death.

6. **Part breaks not targeted — DPS still faster in Siege.** Root Form breaks (3 hits Open) are now achievable in 2 rounds. Siege Skull Mask (3 hits Standard) takes ~5 rounds of Called Shots vs a 3-round Siege phase — still not worth it. However: the reduced thresholds make Root Form breaks a realistic tactical choice for parties with a dedicated breaker.

7. **Performance Ward (+2 AR on Flute) reduced incoming damage by ~30%.** Flute went from 95%/90% hit rate to 80%/64%. Still the squishiest at 88 HP, but no longer trivially easy to hit. Survived at 8 HP — tight but functional.

8. **S&S nearly died (5 HP, R8).** Ossified Strike without Parry (STA too low) dealt 22.5 expected. At 18 HP entering R8, one clean hit kills. The CON DC 18 Stun rider makes Ossified Strike appropriately terrifying. Working as intended.

9. **Arbalest was the DPR anchor.** Contributed 27.6/round consistently through Root and Bear (95% hit with AP). In Siege, still highest single-target damage (18.9 after Bone Wall). The Arbalest's reliability carried the fight when 3 hunters were Breathing.

10. **0 Biomass remains fight-defining.** At Biomass 3 (one Consume), Rot Cascade fires for free at avg 43 — enough to kill both Flute and S&S at their R7 HP levels. Biomass denial is the party's most important strategic decision.

---

## Tuning Verdict

**Ship these changes.** The fight is well-calibrated for an optimized T5 Master-prof party:
- 9 rounds, all 3 forms execute their identity
- Monster never becomes a punching bag
- Two hunters within 1 hit of death — genuinely close
- Clear tactical pivot (Shattering Note Stun R6) that rewards smart play
- STA pressure creates meaningful Breathing Turn windows the monster exploits

**Remaining design questions (not tuning problems):**
- Rot Cascade is a punishment-for-mistakes ability. Pre-seeded corpses provide a path to Biomass without requiring hunter death.
- Siege Form part breaks remain marginal for DPS-focused parties. This may be acceptable — Siege is a race by design.
- Apex Predator and Blood Frenzy never fire due to Rush resets from mandatory Breathing Turns. Claws' T4/T5 capstones need longer sustained-aggression windows to activate.

---

## Sim #4 — HP 700 (Master-Prof 4P, EV Mode)

**Changes tested vs Sim #3:** HP raised to 700 (Master-prof ×24 multiplier per tier-calibration.md). All Sim #3 tuning retained. Claws updated: Rush decay on Breathing (−2, not reset), T3 bonus Claw 0 STA, Blood Frenzy 2 STA, Apex requires Blood Frenzy active.

**Result:** Party Victory Round 6 — 2–3 rounds short of 8–9 target.

```
Kill round:     6
Form timeline:  Root R1–R2 | Bear R3–R4 | Siege R5–R6
Breathing Turns: 1 (Claws R5, STA 2)
Party avg DPR:  ~117/round
Rot Cascade:    Never (0 Biomass, behavior gate unmet)
Counter-Thrust: 1 trigger (R4 Shoulder Check vs S&S Defensive)
```

**Damage breakdown (critical flags):**

| Action | Round | EV Damage | % of 700 HP |
|--------|-------|-----------|-------------|
| Godslayer Shot (auto-crit ×4) | R2 | 216.7 | 31.0% |
| Apex Predator | R6 | 143.6 | 20.5% |
| Combined ultimates | — | 360.3 | **51.5%** |

**Root causes of short fight:**
- Godslayer ×4 crit + Patient Hunter 1-Aim at T5 = 217 EV every 2 rounds (31% HP spike)
- Bear Form 2 rounds only (window 280 HP ÷ 117 DPR); Maul+Leech Grasp puzzle never developed
- Rot Cascade never fired in any of 4 sims at 0 Biomass — behavior gate was hard-locked to Biomass ≥ 3

---

## Changes Applied After Sim #4

| File | Change | Reason |
|------|--------|--------|
| `morthyl.md` | HP 700 → **875** | 117 avg DPR at 700 resolves in 6 rounds; 875 targets 7–8 rounds post-Godslayer nerf |
| `morthyl.md` | Siege behavior: Rot Cascade fires if **STA ≥ 5** (removed Biomass ≥ 3 gate) | Biomass denial trivially locked out the fight's climactic ability all 4 sims |
| `arbalest.astro` | Godslayer On Crit: ×4 → **×3** | Auto-crit ×4 was producing 31% HP in one action every 2 rounds |
| `claws.astro` | Apex Predator: 5 Rush → **5 Rush + 2 STA** | No STA cost meant Apex fired from STA 2 with no resource tension |

**Projected Sim #5 outcome:** ~100/round avg DPR (Godslayer ×3 drops to ~163 EV in R2). At 875 HP: 8–9 rounds. Rot Cascade fires in Siege regardless of Biomass. Apex costs 2 additional STA — Claws needs STA 4+ entering the Apex round (delays by ~1 round vs current, or requires one fewer Breathing Turn before R6).
