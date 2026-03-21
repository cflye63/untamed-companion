# Sim Config 4 — "The Field Commander" vs Melifur
**Party:** Human Conduit, Human Hammer, Human Greatsword, Trolian Spear & Shield
**Tier:** 2 | **HR:** 7 | **Mode:** EV (expected value)
**Monster:** Melifur (Verdant Hollow, T2/T2.5)
**Diagnostic question:** How badly does the Conduit's ground-fixed field dead zone hurt during Melifur's aerial phase? Does the party feel like it's fighting 3v1 until grounding?

---

## Roster

### Human Conduit | HR 7
| Stat | Score | Mod |
|------|-------|-----|
| STR | 3 | +1 |
| DEX | 3 | +1 |
| CON | 5 | +2 |
| INT | 3 | +1 |
| INS | 12 | +6 |
| CHA | 3 | +1 |

| Combat | Value |
|--------|-------|
| AR | 12 (Medium) |
| HP | 37 (CON 5×6 + HR7) |
| Stamina | 8 (6 + CON mod 2) |
| Attack | d20+8 → 2d6+6 avg 13.0 |
| Save DC | 18 |
| React | Dodge (Medium armor) |

**T2 Technique:** Aspect Surge — 3 STA, Requires Channel. Intensify active Aspect until start of next turn.
**Field:** 15ft radius, ground-fixed. Channel drains −1 STA/turn.
**Aerial Note:** Field cannot reach airborne Melifur. All Aspect effects are dead weight until grounding. Conduit becomes a sub-optimal ranged attacker with a stamina leak.

---

### Human Hammer | HR 7
| Stat | Score | Mod |
|------|-------|-----|
| STR | 12 | +6 |
| DEX | 3 | +1 |
| CON | 5 | +2 |
| INT | 3 | +1 |
| INS | 3 | +1 |
| CHA | 3 | +1 |

| Combat | Value |
|--------|-------|
| AR | 14 (Heavy) |
| HP | 37 (CON 5×6 + HR7) |
| Stamina | 8 (6 + CON mod 2) |
| Attack | d20+8 → 2d6+6 avg 13.0 |
| Save DC | 18 |
| React | None (Heavy, no Guard/Parry) |

**T2 Technique:** Shockwave — 2 STA, 15ft cone, DEX save DC18 → 2d8+6 + Prone + 1 Impact
**Charged Smash NOT used:** Melifur Drake Sting hit chance vs Hammer (65%) far exceeds 30% cancel threshold. Basic attacks throughout.

---

### Human Greatsword | HR 7
| Stat | Score | Mod |
|------|-------|-----|
| STR | 11 | +5 |
| DEX | 3 | +1 |
| CON | 6 | +3 |
| INT | 3 | +1 |
| INS | 3 | +1 |
| CHA | 3 | +1 |

| Combat | Value |
|--------|-------|
| AR | 14 (Heavy) |
| HP | 43 (CON 6×6 + HR7) |
| Stamina | 9 (6 + CON mod 3) |
| Attack | d20+7 → 2d6+5 avg 12.0 base |
| Save DC | 17 |
| React | Parry |

**T1 Technique:** Cleave — 2 STA, Commitment, advantage on attack, Exposed until end of next turn; on hit at M0 → gain M2 (not M1).

---

### Trolian Spear & Shield | HR 7
| Stat | Score | Mod |
|------|-------|-----|
| STR | 11 | +5 |
| DEX | 4 | +2 |
| CON | 5 | +2 |
| INT | 3 | +1 |
| INS | 3 | +1 |
| CHA | 3 | +1 |

| Combat | Value |
|--------|-------|
| AR | 15 (Heavy 14 + shield +1) / 16 stationary (Anchored Frame) |
| HP | 37 (CON 5×6 + HR7) |
| Stamina | 8 (6 + CON mod 2) |
| Attack | d20+7 → 2d10+5 (Aggressive) avg 16.0 / 1d10+5 (Defensive) avg 10.5 |
| Save DC | 17 |
| React | Block (Guard tag) |

**T1 Technique:** Thrust & Bash — 2 STA, spear thrust + shield bash (two attacks)
**T2 Technique:** Impale — 2 STA, +1 Power Die, CON save DC17 → Bleeding + Slowed
**Trolian Rooted Resilience:** 1 STA saved per failed save

---

## Monster Block — Melifur (T2/T2.5)

| Stat | Value |
|------|-------|
| AR | 13 |
| HP | 148 (standard) / 220 (optimized — see Tuning) |
| Stamina | 18 |
| Attacks/Turn | 3 |

**Attacks:**
- Drake Sting: d20+6 → 2d8+4 avg 13 | rider: CON save DC16 → Poisoned 1 turn
- Mandible Bite: d20+5 → 2d6+3 avg 10 | rider: +1d6 if target Poisoned/Restrained
- Wing Gust: DEX save DC16 → 1d8+4 avg 8.5 on fail; pushed 10ft + Staggered

**Abilities:**
- Royal Resin Bomb (2 STA, CD 2): d20+6 → 2d10+4 avg 15; creates 10ft resin pool 2 rounds; STR save DC16 → Restrained
- Swarm Call (3 STA, CD 2): 30ft aura; CON save DC14 end of hunter turns → 1d6 Poison; ranged attacks vs Melifur have disadvantage; ends if Melifur lands

**Reactions:**
- Buzzing Dodge (2 STA, CD 1): 2nd+ ranged attack → DEX contest (d20+4 vs attack); success: ascend 30ft, attack misses

**Exhaustion Rule:** Lands Prone, fly speed 0, Swarm Call disabled, attacks at half effectiveness

**Part Breaks:**
- Wings (2 called-shot hits, −2 acc): fly 20ft, Buzzing Dodge disabled, Honey Sovereignty DEX advantage lost
- Sting (2 called-shot hits): Drake Sting loses Poison rider
- Resin Gland (3 called-shot hits): Resin Bomb loses Restrained rider

---

## Hit Table

| Matchup | Hit % |
|---------|-------|
| Conduit d20+8 vs AR13 | 80% |
| Conduit airborne + Swarm Call dis | 64% |
| Conduit airborne + Swarm + Buzzing Dodge contest | ~38% effective |
| Hammer d20+8 vs AR13 | 80% |
| GS d20+7 vs AR13 | 75% / M3 adv: 94% |
| S&S d20+7 vs AR13 | 75% |
| Melifur Drake Sting (d20+6) vs Conduit AR12 | 75% / Dodge→dis 56% |
| Melifur Drake Sting vs Hammer AR14 | 65% (no reaction) |
| Melifur Drake Sting vs GS AR14 | 65% / Parry available |
| Melifur Drake Sting vs S&S AR15/16 | 60%/55% / Block→45%/40% |
| Melifur Mandible Bite (d20+5) vs Conduit AR12 | 70% / Dodge→dis 49% |
| Melifur Mandible Bite vs Hammer AR14 | 60% (no reaction) |
| Melifur Mandible Bite vs S&S AR15 | 55% / Block→40% |
| Drake Sting Poison CON DC16 (CON mod+2) | 65% fail |
| Drake Sting Poison CON DC16 (GS CON mod+3) | 60% fail |
| Swarm Call CON DC14 (CON mod+2) | 55% fail → 1.93 dmg/round |
| Swarm Call CON DC14 (GS CON mod+3) | 50% fail → 1.75 dmg/round |
| Wing Gust DEX DC16 (DEX mod+1) | 70% fail → 5.95 dmg avg |
| STR save DC16 vs Conduit STR+1 | 70% fail |
| STR save DC16 vs Hammer/GS/S&S STR+5 | 50% fail |

---

## Round Log

```
── R1 ──────────────────────────────────────────────────────────
HUNTERS: GS Cleave (2STA, adv) 11.2dmg M2 STA7 | Ham basic (1STA) 10.4dmg I1 STA7
         S&S Thrust&Bash (2STA) 18.4dmg M1 STA6 | Conduit Channel+attack (1STA+drain)
         10.4dmg STA6 [1st ranged — no Buzzing Dodge triggered yet]
  ▸ Party dmg: 50.4 (cum: 50.4)  Conditions: GS Exposed through R1 monster phase
MONSTER (148 HP, 18 STA): Swarm Call (3STA, aura active) | Drake Sting→Conduit
  [Dodge→dis 56%] 7.3exp | Drake Sting→GS Exposed [adv 88%] 11.4exp
  ▸ STA: 18→13  Dmg: Conduit 7.3, GS 11.4  Conditions: Swarm Call aura live
  ▸ Conduit ~49% Poisoned from Drake Sting on hit
STATE: Mon HP 97.6/148 STA 13 | GS 31.6/43 STA7 M2 | Ham 37/37 STA7 I1 |
       S&S 37/37 STA6 M1 | Conduit 29.7/37 STA6 Channeling

── R2 ──────────────────────────────────────────────────────────
HUNTERS: GS basic (1STA) 10.9dmg M3 STA6 | Ham basic (1STA) 10.4dmg I2 STA6
         S&S Impale T2 (2STA) 15.4dmg M2 STA4 [45% Bleeding] |
         Conduit attack (1STA+drain, dis+Dodge contest) 5.0dmg STA3
         [DEAD ZONE: Swarm dis + Buzzing Dodge = 38% effective hit rate vs 80% grounded]
  ▸ Party dmg: 41.7 (cum: 92.1)  Aura tax: 7.2 total (all 4 hunters)
MONSTER (97.6 HP, 13 STA): Dodge vs Conduit (2STA) | Resin Bomb→Conduit cluster
  (2STA) 11.3exp 53% Restrained [removes Conduit's Dodge] |
  Drake Sting→Ham 8.5exp 42% Poisoned | Mandible Bite→Ham 6.9exp (Poison rider)
  ▸ STA: 13→7  Dmg: Conduit 11.3, Ham 15.3  Conditions: Conduit Restrained 53%
STATE: Mon HP 55.9/148 STA 7 | GS 28.1/43 STA6 M3 | Ham 19.7/37 STA6 I2 |
       S&S 33.1/37 STA4 M2 | Conduit 17.2/37 STA3 Channeling [Restrained 53%]

── R3 ──────────────────────────────────────────────────────────
HUNTERS: GS basic (1STA) 17.2dmg M3 STA5 [M3 full: +3flat +power die +18-20 crit] |
         Ham basic (1STA) 10.4dmg I3→STUN (51%) STA5 |
         S&S basic (1STA) 12.0dmg M3 STA3 |
         Conduit attack (1STA+drain, dis+Dodge) 5.0dmg STA1 [must Breathe R4]
  ▸ Party dmg: 44.6 (cum: 136.6)  Aura tax: 7.2 total
MONSTER (55.9 HP, 7 STA): Swarm Call CD clear (3STA) | Drake Sting→Ham (1STA) |
  Mandible Bite→Ham (1STA) | Dodge vs Conduit (2STA) → STA 0 → EXHAUSTED, Lands Prone
  If Stun (51%): monster skips turn. EV dmg to Ham: 0.488 × 15.3 = 7.5
  ▸ STA: 7→0 EXHAUSTED  Conditions: Prone, Fly 0, Swarm Call disabled
STATE: Mon HP 11.4/148 STA 0 EXHAUSTED PRONE | GS 26.3/43 STA5 M3 |
       Ham 10.3/37 STA5 I0 | S&S 29.2/37 STA3 M3 | Conduit 14.4/37 STA1

── R4 ──────────────────────────────────────────────────────────
HUNTERS: GS adv vs Exhausted (1STA) 21.7dmg → KILL |
         Ham adv 12.5dmg (not needed) | S&S adv 19.2dmg (not needed) |
         Conduit Breathing Turn (+4STA) 0dmg
  ▸ Melifur HP: 11.4 − 21.7 = −10.3  ★ SLAIN by GS first strike ★
```

---

## Result

```
═══ RESULT: Party wins R4 (GS killing blow) ═══
Mon HP:        0 / 148
Avg hunter HP: 20.1 / 38.5  (Ham 28%, Conduit 39%, GS 61%, S&S 79%)
Avg hunter STA: 3.5 / 8.25
Breaths taken: 1 (Conduit R4)
Parts broken:  none
Mon STA→0:     R3 (self-inflicted: Swarm + Dodge cycle)
Party DPR avg: ~34.2 (R1–R3)  |  Monster DPR avg: ~11.4/round
Kill round:    4
STA pressure:  Medium (Conduit forced Breathe; Ham/S&S draining to 3–5 range)
HP pressure:   High (Hammer at 10.3/37 = 28%; Conduit at 14.4/37 = 39%)
```

---

## Conduit Aerial Dead Zone Analysis

| Metric | Grounded (baseline) | Aerial (actual) |
|--------|---------------------|-----------------|
| Attack hit chance | 80% | ~38% effective (Swarm dis + Buzzing Dodge) |
| DPR from attacks | ~10.4 | ~5.0 |
| Field aspect utility | Full | 0% (Melifur airborne, outside 15ft field) |
| Estimated total DPR | ~14–15 | ~5.0 |
| DPR loss vs baseline | — | ~51% |

**Party efficiency during aerial phase (R2–R3):**
- Actual 4P DPR: 43.2/round avg
- Estimated grounded 4P DPR: ~50–55/round
- Estimated 3P DPR (without Conduit): ~36–40/round
- Actual efficiency: ~3.3v1, not 3v1

**Verdict:** The dead zone meaningfully hurts but does not reduce the party to a true 3v1. Conduit still contributes ~5 DPR aerial. The real damage comes from two compounding factors:

1. **Channel stamina drain** (−1 STA/turn) forces a Breathing Turn in R4 — removing Conduit from the Exhausted Melifur pile-on at the most productive moment of the fight.
2. **Resin Bomb landed on Conduit** (53% probability, R2), stripping Dodge access while they were already locked in Channel. Conduit became a stationary, undefended target inside the resin zone rather than just an ineffective attacker.

The structural problem is not the dead zone alone — it's the compounding of dead zone + forced Channel cost + no defensive options once Restrained.

---

## Flags

- **Hammer HP critical:** Hammer at 10.3/37 HP (28%) at kill round. No reaction + no defensive stats = full Sting→Bite chain each round. One above-average damage roll breaks the run.
- **Conduit dead zone:** Aerial phase suppresses ~51% of Conduit's effective DPR and 100% of field control utility for 3 rounds.
- **Conduit Restrained R2+:** Resin Bomb on Conduit (53% probability) removes Dodge access while locked in Channel. Conduit becomes a static, undefended target in the resin zone.
- **Swarm Call STA self-drain:** Melifur's instinct loop (Swarm Call every 2 rounds + Buzzing Dodge every ranged attack) spends 9 STA in R3 alone, collapsing to Exhaustion on schedule. If Conduit channels defensively and doesn't trigger Dodge, Melifur survives to R4–5 with STA to spare.
- **No part breaks attempted:** Zero called shots. Wing breaks would have grounded Melifur far sooner and unlocked Conduit's full value multiple rounds early. Drake Sting dive reactions (available per the monster file) are the intended answer.
- **Party DPR exceeds HP/4 threshold:** R1 alone dealt 50.4 (34% of HP). Fight resolves before Melifur can run its loop twice. HP 148 is too low for this party.

---

## Tuning Notes

1. **Use HP 220 for this party.** HP 148 resolves in 4 rounds — too short for Melifur's aerial puzzle to be felt. HP 220 extends the fight to 5–6 rounds, forcing called shots (wing breaks), giving Conduit's dead zone a sustained strategic impact, and making grounding a genuine puzzle rather than a lucky side effect of Hammer's Impact accumulation.

2. **Conduit aerial relief.** Consider a T2 Aspect — Displacement Field — that projects as a 30ft cone attack (not requiring the target to be inside the field) at higher STA cost (4 STA). This preserves the dead zone flavor while giving the Conduit one aerial tool per encounter, preventing full neutralization. Alternatively: let Aspect Surge at 3+ STA project a single-target effect at 40ft range.

3. **Wing called shot incentive needs table reinforcement.** The monster file already includes a Reaction called shot opportunity when Melifur dive-dives within 20ft (1 break progress, −2 acc, 0 damage cost). GS and S&S should be prompted to take this trade. Two Reaction wing breaks collapse the aerial phase into R1–2, making Conduit relevant from R3 onward. This is the correct design solution — it just needs to be explicitly surfaced at the table.

4. **Hammer survivability.** Hammer is the Drake Sting → Mandible Bite kill funnel with no reaction available. Consider a system-level Heavy Armor Brace preparation (0 STA, +2 AR, advantage on CON saves, available during a Charging round) that gives tankless heavy weapon users a defensive window when Charged Smash's cancel probability is too high to use.

5. **Melifur STA self-drain.** Melifur's Buzzing Dodge exhausts it as much as hunter damage does. Consider a "Hover" passive: when STA ≤ 5, Melifur stops triggering Buzzing Dodge and instead gains +2 AR (tucks wings for defense). This preserves STA for actual attacks and makes the STA clock feel intentional rather than self-defeating.

---

*Generated by /sim-hunt — EV mode, T2 HR7 midpoint*
