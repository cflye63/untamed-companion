# Sim Config 1 — "The Fortress Wall" vs Gorrhul
**Party:** Trolian Greatshield, Human Spear & Shield, Human Hunting Flute, Human Greatsword
**Tier:** 2 | **HR:** 7 | **Mode:** EV (expected value)
**Monster:** Gorrhul (River Basin, T2)
**Diagnostic question:** Does double-shield + Flute healing make T2 pressure trivial?

---

## Roster

### Trolian Greatshield | HR 7
| Stat | Score | Mod |
|------|-------|-----|
| STR | 7 | +3 |
| DEX | 3 | +1 |
| CON | 10 | +5 |
| INT | 3 | +1 |
| INS | 3 | +1 |
| CHA | 3 | +1 |

| Combat | Value |
|--------|-------|
| AR | 17 (Heavy 14 + Greatshield +2 AR + Trolian Anchored Frame +1 stationary) |
| HP | 67 (CON 10×6 + HR7) |
| Stamina | 11 (6 + CON mod 5) |
| Attack | d20+7 → 1d12+5 avg 11.5 |
| Save DC | 17 |
| React | Block (Guard) + extra Block reaction/round (Greatshield special) |

**T1 Technique:** Bulwark — 2 STA, Action, Rooting. Taunt (INS save DC17) + −50% dmg to self until next turn.
**T2 Technique:** Bastion — 1 STA, Reaction. Intercept attack on ally within 5ft; retarget to self; −50% dmg (round up); counts as Block (gains Resolve).
**Trolian Anchored Frame:** +1 AR if stationary. **Rooted Resilience:** 1 STA saved on failed save → next Reaction.

---

### Human Spear & Shield | HR 7
| Stat | Score | Mod |
|------|-------|-----|
| STR | 11 | +5 |
| DEX | 5 | +2 |
| CON | 6 | +3 |
| INT | 3 | +1 |
| INS | 3 | +1 |
| CHA | 3 | +1 |

| Combat | Value |
|--------|-------|
| AR | 15 (Heavy 14 + shield +1) |
| HP | 43 (CON 6×6 + HR7) |
| Stamina | 9 (6 + CON mod 3) |
| Attack | d20+7 → 2d10+5 (Aggressive) avg 16.0 / 1d10+5 (Defensive) avg 10.5 |
| Save DC | 17 |
| React | Block (Guard, Defensive Stance only), Parry (weapon tag, any stance) |

**T1 Technique:** Thrust & Bash — 2 STA → 1 STA (Human discount R1). Spear thrust + Shield Bash (1d6+5 STR); STR save DC17 → Prone. Mud-Covered adv reduces Prone to 42% fail.
**T2 Technique:** Impale — 2 STA. +1 power die, CON save DC17 or Bleeding, −10ft movement.
**Momentum:** background engine; M2 spend (~every 2 rounds) grants adv on attack.
**Human:** 1×/round reduce STA cost by 1.

---

### Human Hunting Flute | HR 7
| Stat | Score | Mod |
|------|-------|-----|
| STR | 3 | +1 |
| DEX | 3 | +1 |
| CON | 5 | +2 |
| INT | 3 | +1 |
| INS | 6 | +3 |
| CHA | 11 | +5 |

| Combat | Value |
|--------|-------|
| AR | 12 (Medium) |
| HP | 37 (CON 5×6 + HR7) |
| Stamina | 8 (6 + CON mod 2) |
| Attack | d20+7 → 1d8+5 avg 9.0 |
| Save DC | 17 |
| React | Dodge (Medium armor) |

**Active Song:** Courage — Fast Action start, ongoing. All allies +1 to attack rolls (factored into all hit% below).
**T1 Technique:** Resonant Strike — 1 STA, Action. d20+7 vs AR; CON save DC17 or Deafened.
**T2 Technique:** Healing Hymn — 2 STA, Action. All allies within 30ft regain 1d8+5 (avg 9 HP). At 3 Notes: +1d8 bonus (avg 13.5 HP healed). Also unlocks Discord Song.
**Notes:** gain ~1/round while Courage active. Track toward 3-Note Hymn boost.
**Human:** 1×/round reduce STA cost by 1.

---

### Human Greatsword | HR 7
| Stat | Score | Mod |
|------|-------|-----|
| STR | 11 | +5 |
| DEX | 4 | +2 |
| CON | 7 | +3 |
| INT | 3 | +1 |
| INS | 3 | +1 |
| CHA | 3 | +1 |

| Combat | Value |
|--------|-------|
| AR | 14 (Heavy) |
| HP | 49 (CON 7×6 + HR7) |
| Stamina | 9 (6 + CON mod 3) |
| Attack | d20+7 → 2d6+5 avg 12.0 (M0) / 14.4 (M2) / 23.1 (M3) |
| Save DC | 17 |
| React | Parry (weapon tag) |

**T1 Technique:** Cleave — 2 STA → 1 STA (Human discount R1), Commitment. Advantage; Exposed until end of next turn; M0 → M2 on hit.
**T2 Technique:** Blade Wave — 2 STA, Commitment, Rooting. 15ft arc, STR/DEX save DC17 or Staggered.

---

## Monster Block — Gorrhul (T2)

| Stat | Value |
|------|-------|
| AR | 15 (Mud-Covered) / 13 (bare) |
| HP | 200 (optimized 4P) |
| Stamina | 22 (optimized) |
| Attacks/Turn | 3 |

**Attacks:**
- Gore (1 STA): d20+5 → 2d8+3 avg 12 | rider: Crit → Bleed 1d6/2 turns
- Stomp (1 STA): d20+5 → 2d6+3 avg 10 | rider: DEX save DC15 → Prone
- Mud Toss (1 STA): d20+5 → 1d6+3 avg 6.5 | rider: DEX save DC15 → Slowed (Mud-Covered only)
- Charging Gore (3 STA): d20+5 → 2d10+3 avg 14 (+1d8 = avg 18.5 if 30+ ft) | rider: DEX save DC15 → Stun; miss: Gorrhul Dazed

**Abilities:**
- Charge Mode (Stance, 2 STA/turn maintain): 60ft linear move, unlocks Charging Gore
- Mud Recoat (4 STA, Full Turn, adj mud/water): restore Mud-Covered + AR 15

**Reactions:** Braced Bulk (1 STA): forced movement → reduce by 10ft

**Exhaustion Rule:** Cannot Charge; AR permanently 13; Gore+Stomp at half effectiveness

**Passive — Mud-Covered:** +2 AR (13→15); fire resist ½; adv on Prone saves. Removed by: 8+ fire dmg/round, clean water, or Prone (adv save first).

**Part Breaks:**
- Tusks (2 called-shot hits, −2 acc): Charging Gore loses +1d8; Gore 2d8→1d8
- Shoulder Plate (3 hits): Mud AR bonus capped at +1 (max AR 14)

---

## Hit Table

| Matchup | Hit % |
|---------|-------|
| All hunters d20+7 vs Gorrhul AR15 (Courage +1 active) | 70% |
| S&S / GS M2 adv vs AR15 | 91% |
| GS Cleave adv+Courage R1 vs AR15 | 91% |
| All hunters vs AR13 (bare) | 75% |
| Gorrhul d20+5 vs TGS AR17 | 45% |
| Gorrhul d20+5 vs S&S AR15 | 55% |
| Gorrhul d20+5 vs GS AR14 | 60% / Exposed adv: 84% |
| Gorrhul d20+5 vs Flute AR12 | 70% / Dodge → dis: 49% |
| Gorrhul STR save vs T&B DC17 (Prone, Mud adv) | 42% fail |
| Gorrhul INS save vs Bulwark DC17 (Taunt) | 65% fail |
| Hunter DEX save vs Stomp DC15 | 60–65% fail → Prone |

---

## Round Log

```
── R1 ──────────────────────────────────────────────────────────
HUNTERS: TGS Bulwark (2STA) Taunt 65%+Wall 0.0dmg STA9 | S&S Thrust&Bash (1STA Human disc)
         17.2dmg STA8 | GS Cleave (1STA Human disc) adv→M2 10.9dmg STA8 Exposed |
         Flute Courage (Fast), Resonant Strike (1STA) 6.3dmg STA7
  ▸ Party dmg: 34.4 (cum: 34.4)  Conditions: Gorrhul Taunted 65%; 42% Prone/Mud-strip from T&B
MONSTER (200 HP, 22 STA): Gore→TGS (Taunted, Wall) 2.7exp | Gore→GS (Exposed adv, Parry)
         5.7exp + 2.4 riposte | Stomp→Flute (Dodge) 4.9exp | STA 22→19
  ▸ Dmg taken: 36.8 total (34.4 + 2.4 riposte)  Conditions: GS Exposed active
STATE: Mon HP 163.2/200 STA 19 | TGS 64.3/67 STA9 Res0 | S&S 43.0/43 STA8 M1 |
       GS 43.3/49 STA7 M2 | Flute 32.1/37 STA6 N1

── R2 ──────────────────────────────────────────────────────────
HUNTERS: TGS basic (1STA) 8.1dmg STA8 | S&S basic M2-adv 14.6dmg STA7 |
         GS basic M2 10.1dmg STA6 (→M3 on hit) | Flute Resonant Strike (1STA) 6.3dmg STA5
  ▸ Party dmg: 39.1 (cum: 75.5)  Conditions: —
MONSTER (163.2 HP, 19 STA): Enters Charge Mode (2STA) | ChgGore→Flute; TGS BASTION (1STA)
         intercepts → ChgGore vs TGS AR17 4.5exp (−50%, Res→1) | Gore→GS (Parry)
         3.0exp + 3.3 riposte | Stomp→S&S 5.5exp (33% Prone) | STA 19−7=12
  ▸ Dmg taken: 42.4 (39.1 + 3.3 riposte)  Conditions: Charge Mode active; TGS Resolve→1
STATE: Mon HP 120.8/200 STA 12 | TGS 59.8/67 STA7 Res1 | S&S 37.5/43 STA7 |
       GS 40.3/49 STA5 M3 | Flute 32.1/37 STA5 N2

── R3 ──────────────────────────────────────────────────────────
HUNTERS: TGS basic (1STA) 8.1dmg STA6 | S&S basic M2-adv 14.6dmg STA6 |
         GS basic M3 16.1dmg STA4 | Flute Resonant Strike (1STA) 6.3dmg STA4
  ▸ Party dmg: 45.1 (cum: 120.6)  [Gorrhul drops to 75.7 HP = 38% — <40% triggers full aggression]
MONSTER (75.7 HP, 12 STA): <40% HP — full aggression | ChgGore→Flute; TGS BASTION 2nd use
         (1STA) → 4.5exp TGS (−50%, Res→2) | Gore→GS (Parry) 3.0exp + 3.3 riposte |
         Gore→S&S 6.6exp | STA 12−7=5
  ▸ Dmg taken: 48.4 (45.1 + 3.3 riposte)  Conditions: STA 5 → conservative threshold
STATE: Mon HP 72.6/200 STA 5 | TGS 55.3/67 STA5 Res2 | S&S 30.9/43 STA6 |
       GS 37.3/49 STA4 M3 | Flute 32.1/37 STA4 N3

── R4 ──────────────────────────────────────────────────────────
HUNTERS: TGS spend 2 Resolve (+2STA→7) basic 8.1dmg STA6 | S&S basic M2-adv 14.6dmg STA5 |
         GS basic M3 16.1dmg STA3 | Flute HEALING HYMN (2STA, 3 Notes) all allies +13.5 avg HP STA2
  ▸ Party dmg: 38.8 (cum: 159.4)  Heal: TGS→67, S&S→43, GS→49, Flute→37 (all at/near cap)
MONSTER (33.8 HP, 5 STA): No Charge (too costly) | Gore→TGS 5.4exp | Gore→GS (Parry) 3.0exp + 3.3 riposte
         Stomp→Flute (Dodge) 4.9exp | STA 5−3=2
  ▸ Dmg taken: 42.1 (38.8 + 3.3 riposte)  Conditions: STA 2 — Exhaustion imminent
STATE: Mon HP 33.8/200 STA 2 | TGS 61.6/67 STA6 Res0 | S&S 43.0/43 STA5 |
       GS 46.0/49 STA2 M3 | Flute 32.1/37 STA1 N0

── R5 ──────────────────────────────────────────────────────────
HUNTERS: TGS basic (1STA) 8.1dmg STA5 | S&S basic M2-adv 14.6dmg STA4 |
         GS BREATHING TURN (+4STA→6) M3 reset | Flute BREATHING TURN (+4STA→5)
  ▸ Party dmg: 22.7 (cum: 182.1)  Conditions: GS Momentum reset M0
MONSTER (11.1 HP, 2 STA): 3 attacks → STA 0 → EXHAUSTED; AR→13; half effectiveness |
         Gore→TGS 2.7exp (half) | Gore→S&S 3.3exp (half) | Gore→GS (Parry, half) 1.5exp + 1.7 riposte
  ▸ Dmg taken: 1.7 riposte  Conditions: EXHAUSTED, AR 13 permanent
STATE: Mon HP 7.8/200 STA 0 EXHAUSTED | TGS 58.9/67 STA5 | S&S 39.7/43 STA4 |
       GS 44.5/49 STA5 M0 | Flute 32.1/37 STA5

── R6 ──────────────────────────────────────────────────────────
HUNTERS: TGS adv+Courage vs AR13 (93.75%) 10.8dmg → KILL
  ▸ Gorrhul HP: 7.8 − 10.8 = −3.0  ★ GORRHUL SLAIN by TGS first strike ★
```

---

## Result

```
═══ RESULT: Party wins R6 (TGS killing blow) ═══
Mon HP:        0 / 200 (−3 overkill)
Avg hunter HP: 44.3 / 49.0  (TGS 88%, S&S 93%, GS 91%, Flute 87%)
Avg hunter STA: 5.0 / 9.3
Breaths taken: 2 (GS R5, Flute R5 — both forced by sustained offense, not HP crisis)
Parts broken:  none
Mon STA→0:     R5 monster phase
Party DPR avg: ~32.2/round  |  Monster DPR avg: ~12.7/round
Kill round:    6
STA pressure:  Low
HP pressure:   None / Low (peak damage: Flute 0 HP damage, no hunter ever below 55% HP)
```

---

## Flags

- **Trivial HP pressure:** Monster DPR 12.7/round vs party avg HP 196 total. Healing Hymn R4 fully restored all 4 hunters when they were already at 79% avg HP — comfort, not crisis.
- **Bastion dominates:** TGS Bastion used twice (R2, R3) to redirect all Charging Gores. Flute received **zero HP damage** across the entire fight. The 37 HP / AR 12 target was never meaningfully threatened.
- **No offensive Breathing Turns needed:** GS and Flute only breathed in R5 because their STA was drained by sustained output, not defensive pressure. Party out-sustained the monster by a wide margin.
- **Technique-free baseline competitive:** GS M3 basic attacks (16.1/round, 1 STA) rival technique outputs. Cleave was needed to ramp to M3 but all subsequent rounds were pure auto-attacks.
- **Monster STA exhausted before HP < 50%:** Gorrhul hit STA 0 at ~11 HP remaining (R5). STA was never a constraint — HP was the only real clock.
- **Double-shield over-insulates:** TGS Bulwark R1 + Bastion R2 + Bastion R3 created a near-impenetrable screen. Gorrhul's Charging Gore dealt 0 expected damage to its intended target across all 3 Charge Mode rounds. TGS's 2-Block-reaction engine exceeds what a T2 monster can meaningfully threaten on any single turn.
- **Flute healing idle:** Healing Hymn was used at 79% avg party HP. It was available and convenient, not necessary. Solo Flute healer adds redundant safety on top of an already-impenetrable defense.

---

## Tuning Notes

1. **Diagnostic answer: YES — double-shield + Flute trivializes T2.** This composition absorbed a 6-round fight with peak incoming DPR of 14 HP/round and never lost more than 33% of any single hunter's HP. No hunter dropped below 55%.

2. **To pressure this party at T2:** Gorrhul needs HP 240–260 (pushes to R8–9, exhausts TGS's Block economy via STA drain) OR a secondary mechanic that bypasses Block reactions entirely. A mandatory AoE save that hits all hunters simultaneously (e.g., a Stomp shockwave in a 15ft radius) would punish the tight formation Bastion requires and force reactive healing.

3. **Bastion is the real MVP, not Healing Hymn.** Each intercept converted a 0.70 × 18.5 = 13.0 exp hit on Flute into a 0.45 × 10 = 4.5 exp hit on a 67 HP tank with Resolve generation. The Bastion + Resolve closed loop (intercept → Resolve → STA recovery → more intercepts) compounds each Charge Mode round. This is the ability to watch for broken sustain combos going forward.

4. **Composition design note:** This party represents the theoretical ceiling of T2 sustain — it stacks Block intercept (Bastion), Block economy (+2 reactions/round), Parry reaction (GS), armor budget (AR 17/15/14), and heal-on-demand (Flute). Any party with 2 of these 4 layers will have manageable T2 HP pressure. All 4 together eliminates it entirely.

5. **Consider a Gorrhul arena interaction** to counter tight stacking. A natural mud patch zone (created by Gorrhul's own movement) that applies Slowed to hunters standing still in it would specifically punish TGS's Anchored Frame + Bastion formation without nerfing the abilities themselves — players must choose between AR bonus and formation mobility.

---

*Generated by /sim-hunt — EV mode, T2 HR7 midpoint*
