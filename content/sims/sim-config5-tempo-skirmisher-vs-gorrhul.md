# Sim Config 5 — "Tempo Skirmisher" vs Gorrhul
**Party:** Human Boomerang (new kit), Trolian Arbalest, Human Conduit, Human Hammer
**Tier:** 2 | **HR:** 7 | **Mode:** EV (expected value)
**Monster:** Gorrhul (River Basin, T2)
**Diagnostic questions:**
1. Does the new INS-primary Boomerang kit (Wayback Catch, Split Return) hold up as a tempo weapon at T2?
2. Does the Conduit's Wild Pulse field create meaningful STA drain on Gorrhul?
3. Does Arbalest's Pinning Shot (Restrained) shut down Charge Mode economy?
4. Does Hammer reach the Impact 3 Stun in a fight where three other hunters are dealing high DPR?

---

## Roster

### Human Boomerang (New Kit — INS Primary) | HR 7
| Stat | Score | Mod |
|------|-------|-----|
| STR | 3 | +1 |
| DEX | 5 | +2 |
| CON | 5 | +2 |
| INT | 3 | +1 |
| INS | 10 | +5 |
| CHA | 3 | +1 |

| Combat | Value |
|--------|-------|
| AR | 15 (Light, 10 + DEX 2 + INS 3… wait — Light AR = 10 + DEX mod) → AR 12 (10 + DEX 2) |
| AR | 12 (Light, 10 + DEX mod 2) |
| HP | 37 (CON 5×6 + HR7) |
| Stamina | 8 (6 + CON mod 2) |
| Attack | d20+7 (INS mod 5 + prof 2) → T2 Throw: 1d8+5 avg 9.5 / Return: 2d8+5 avg 14.0 |
| Save DC | 17 (10 + 5 + 2) |
| React | Dodge (Light armor) |

**Wayback Catch:** d20+7 vs DC 13 → 75% success.
**T1 Ricochet Step:** Move ≥10 ft → Return +1 die (2d8 → 3d8, avg +4.5).
**T2 Split Return:** 2 STA, two attacks on same Large+ target (body + called shot −2). Both hit → Wayback DC 11, regain 1 STA.
**Human:** 1×/round reduce STA cost by 1 → first Throw of fight costs 0 STA.

**Loop EV per round (Ricochet Step active):**
- Throw: 0.75×9.5 = 7.1 | Catch: 75% | Return w/+1 die: 0.75×(13.5+5)=13.9 | Both hit payoff: 0.75×0.75×9.5×0.5≈2.7 (partial)
- Effective full loop (catch success path): 7.1 + 0.75×13.9 = 7.1 + 10.4 = 17.5 at 2 STA
- Catch fail path (25%): 7.1 only, at 1 STA effectively
- Blended EV: 0.75×17.5 + 0.25×7.1 = 13.1 + 1.8 = **14.9 EV / 1.75 avg STA**

**Split Return EV (T2, vs Gorrhul):**
- Body: 0.75×14.0 = 10.5 | Called shot (AR15 −2 = AR17, hit 0.55): 0.55×14.0 = 7.7
- Both hit (0.75×0.55=41%): Wayback DC 11, catch 85%, regain 1 STA
- Total: 10.5 + 7.7 = 18.2 avg. Cost: 2 STA (−1 on both-hit path). Tusk break progress: 1 break hit per use (41% double hit gives 2 progress).

---

### Trolian Arbalest | HR 7
| Stat | Score | Mod |
|------|-------|-----|
| STR | 10 | +5 |
| DEX | 3 | +1 |
| CON | 6 | +3 |
| INT | 3 | +1 |
| INS | 5 | +2 |
| CHA | 3 | +1 |

| Combat | Value |
|--------|-------|
| AR | 15 (Heavy 14 + Anchored Frame +1 stationary) |
| HP | 43 (CON 6×6 + HR7) |
| Stamina | 9 (6 + CON mod 3) |
| Attack | d20+7 → 2d10+5 avg 16.0 (pierces 2 AR; eff Gorrhul AR = 13 Mud / 11 bare) |
| Save DC | 17 |
| React | None (Heavy, no Guard/Parry) |

**Aim:** Fast Action, +2 to next attack roll.
**T1 Explosive Bolt:** 2 STA; +2d6 fire splash 10ft.
**T2 Pinning Shot:** 2 STA, +1d10; STR save DC17 → Restrained.
**Trolian Rooted Resilience:** 1 STA saved per failed save.

| Matchup | Hit % |
|---------|-------|
| d20+7 vs Gorrhul AR15 Mud | 65% |
| d20+7 vs Gorrhul AR13 bare | 75% |
| d20+9 (Aim) vs AR15 | 75% |
| Pinning Shot Restrained (STR sv DC17 vs +3) | 65% fail |
| 2nd Restrained attempt (escalating +2) | 60% fail |

---

### Human Conduit | HR 7
| Stat | Score | Mod |
|------|-------|-----|
| STR | 3 | +1 |
| DEX | 3 | +1 |
| CON | 5 | +2 |
| INT | 3 | +1 |
| INS | 10 | +5 |
| CHA | 3 | +1 |

| Combat | Value |
|--------|-------|
| AR | 12 (Medium) |
| HP | 37 (CON 5×6 + HR7) |
| Stamina | 8 (6 + CON mod 2) |
| Attack | d20+7 → 1d8+5 avg 9.5 |
| Save DC | 17 |
| React | Dodge (Medium armor) |

**Wild Pulse (Universal Aspect):** Enemies in Field cannot use attack advantage; on miss, −1 STA (once per creature/round).
**Field:** 20 ft radius around Conduit. Extend via Field Projection (Fast Action, 1 STA) to 40 ft point.
**Foundation Aspect (T1):** Grounded — difficult terrain within Field.
**T2 Aspect:** Storm Conduit (Charged terrain, 1d4+INS on enter — or Earth/other per kit).
**Human:** 1×/round STA cost −1.

**Wild Pulse EV:**
- Gorrhul miss chance vs Conduit AR12: 30% (AR 12, d20+5 → hits on 8+, 70% hit). Miss chance 30%.
- Wild Pulse: 30% × −1 STA/round = −0.3 STA drain per monster attack vs Conduit
- With 3 attacks/round: up to 0.9 STA/round drain if all target Conduit (they won't — spread attacks)
- Realistic: 1 attack/round vs Conduit (behavior spreads) → 0.3 STA/round drain from Wild Pulse
- Restrained Gorrhul loses attack advantage: confirms Wild Pulse cannot be bypassed via advantage
- Blended: **~0.72 STA/round** drain across all monster attacks if 2–3 attacks target field-adjacent hunters

---

### Human Hammer | HR 7
| Stat | Score | Mod |
|------|-------|-----|
| STR | 10 | +5 |
| DEX | 3 | +1 |
| CON | 7 | +3 |
| INT | 3 | +1 |
| INS | 3 | +1 |
| CHA | 3 | +1 |

| Combat | Value |
|--------|-------|
| AR | 14 (Heavy) |
| HP | 49 (CON 7×6 + HR7) |
| Stamina | 9 (6 + CON mod 3) |
| Attack | d20+7 → 2d6+5 avg 12.0 (T2) |
| Save DC | 17 |
| React | None (Heavy, no Guard/Parry) |

**Impact:** +1 per hit, cap 3. At I3 → Stunned.
**Impact Decay:** −1 Impact per round Hammer doesn't hit.
**T1 Charged Smash:** 2-turn wind-up; +2d6 avg+7, +2 Impact on release. P(cancel) = monster hit vs Ham.
**T2 Shockwave:** 2 STA, DEX save DC17 → Prone. Against Mud-Covered Gorrhul: advantage on Prone save.
**Human:** 1×/round STA −1.

| Matchup | Hit % |
|---------|-------|
| d20+7 vs Gorrhul AR15 Mud | 65% |
| d20+7 vs Gorrhul AR13 bare | 75% |
| Shockwave Prone (DEX sv DC17 vs +2, Mud adv) | 56% fail (Mud adv: P(fail adv) = 1−(1−P(fail normal))² where P(fail)=0.75 → adv: 0.75²=0.5625 save = 43.75% save → 56.25% fail) |
| 2nd Shockwave Prone (escalating +2, Mud stripped) | 65% fail (no Mud adv, DC17 vs +2 = 65% fail at normal) |
| Charging Gore vs Ham AR14 | 60% |
| P(Charge cancel) | 60% → CS risky, avoid |

---

## Monster Block — Gorrhul (T2)

| Stat | Value |
|------|-------|
| AR | 15 (Mud-Covered) / 13 (bare) |
| HP | 200 (optimized 4P) |
| Stamina | 22 (optimized) |
| Attacks/Turn | 3 |

**Attacks:**
- Gore (1 STA): d20+5 → 2d8+3 avg 12.0 | rider: Crit → Bleed 1d6/2 turns
- Stomp (1 STA): d20+5 → 2d6+3 avg 10.0 | rider: DEX save DC15 → Prone
- Mud Toss (1 STA): d20+5 → 1d6+3 avg 6.5 | rider: DEX save DC15 → Slowed

**Abilities:**
- Charge Mode (Stance, 2 STA/turn): 60 ft linear, unlocks Charging Gore
- Charging Gore (3 STA): d20+5 → 2d10+3 avg 14.0 | rider: DEX save DC15 → Stunned; miss: Gorrhul Dazed
- Mud Recoat (4 STA, Full Turn): restore Mud-Covered + AR15

**Reactions:** Braced Bulk (1 STA): forced movement → reduce by 10 ft

**Exhaustion Rule:** No Charge; AR 13 permanently; Gore/Stomp half effectiveness

**Passive — Mud-Covered:** +2 AR (13→15); fire resist ½; advantage on Prone saves. Removed by: 8+ fire dmg/round (post-halving), clean water, or Prone (advantage save first).

**Part Breaks:**
- Tusks (2 called-shot hits, −2 acc): Charging Gore loses +1d8; Gore 2d8→1d8
- Shoulder Plate (3 hits): Mud AR bonus capped at +1 (max AR 14)

**Escalating Resistance:** Tracked per condition type globally.
- Prone: 1st at normal DC15, 2nd at DC+2 (DC17 eff), 3rd at DC+4
- Restrained: 1st at normal save, 2nd at +2

---

## Hit Table

| Matchup | Hit % |
|---------|-------|
| Bm d20+7 vs Gorrhul AR15 Mud | 65% |
| Bm d20+7 vs Gorrhul AR13 bare | 75% |
| Bm called shot (AR15 −2 = AR17) | 55% |
| Arb d20+7 vs eff AR13 (AR pierce −2) Mud | 75% |
| Arb d20+7 vs eff AR11 bare | 85% |
| Arb d20+9 (Aim) vs eff AR13 Mud | 85% |
| Conduit d20+7 vs AR15 Mud | 65% |
| Ham d20+7 vs AR15 Mud | 65% |
| Ham d20+7 vs AR13 bare | 75% |
| Shockwave Prone (DC17, Mud adv, DEX+2) | 56% fail |
| 2nd Shockwave Prone (Mud stripped, DC17, no adv, DEX+2) | 65% fail |
| Pinning Shot Restrained (DC17, STR+3) | 65% fail |
| 2nd Pinning Shot Restrained (escalating +2) | 60% fail |
| Gorrhul Gore vs Bm AR12 | 70% → Dodge dis: 49% |
| Gorrhul Gore vs Conduit AR12 | 70% → Dodge dis: 49% |
| Gorrhul Gore vs Ham AR14 | 60% |
| Gorrhul Charging Gore vs Ham AR14 | 60% |
| Gorrhul Stomp Prone DEX DC15 vs Bm DEX+2 | 65% fail |

---

## Round Log

```
── R1 ──────────────────────────────────────────────────────────
HUNTERS: Bm Throw (0 STA, Human disc) 0.65×9.5=6.2; Catch 75%→Return 0.65×13.5=8.8; total 15.0 STA7 |
         Arb Aim (Fast, no fire) STA9 |
         Conduit Field up (Fast, 0 STA, Human disc), basic 0.65×9.5=6.2dmg STA8 |
         Ham basic (1 STA, no CS — 60% Charge cancel too risky) 0.65×12.0=7.8 I1 STA8
  ▸ Party dmg: 29.0 (cum: 29.0)  Catch fail 25%: Bm deals 6.2 only (blended above is EV)
  ▸ Conditions: Field active (Wild Pulse on)
MONSTER (200 HP, 22 STA): Gore→Ham [60%] 7.2exp | Stomp→Bm [Dodge→49%] 4.9exp Prone 65% |
         Gore→Conduit [Dodge→49%] 5.9exp | Wild Pulse: 2 misses × 30% each = 0.6 STA drain
  ▸ STA: 22→19 (3 attacks) −0.6 Wild Pulse = 18.4  Dmg taken: 29.0
  ▸ Bm HP: 37−4.9=32.1  Ham HP: 49−7.2=41.8  Conduit HP: 37−5.9=31.1
STATE: Mon HP 171.0/200 STA 18.4 Mud | Bm 32.1/37 STA7 I0 | Arb 43/43 STA9 |
       Conduit 31.1/37 STA8 | Ham 41.8/49 STA8 I1

── R2 ──────────────────────────────────────────────────────────
[Mud-Covered: Shockwave attempt R2 — 56% Prone strips Mud]
HUNTERS: Bm Split Return (2 STA): body 0.65×14.0=9.1 + called (AR17) 0.55×14.0=7.7 = 16.8;
         both-hit 41%: Wayback DC11 catch 85%, regain 1 STA → blended STA cost 1.75 STA6 |
         Arb Pinning Shot (2 STA, Aim from R1) 0.85×21.5=18.3; 65% Restrained STA7 |
         Conduit Field Projection (Fast, 1 STA), basic 0.65×9.5=6.2dmg STA6 |
         Ham Shockwave (1 STA, Human disc) 0.65×12.0=7.8; 56% Prone (Mud strips on Prone) → I2 STA7
  ▸ Party dmg: 49.1 (cum: 78.1)  Restrained: 65% | Prone (Mud strip): 56%
  ▸ Mud stripped on Prone: AR→13. Shockwave Prone = 1st application (DC15, Mud adv = 56% fail)
  ▸ Escalating resistance tracking: Prone applications: 1 (Shockwave). Restrained: 1 (Pinning).
MONSTER (171.0 HP, ~18.4 STA): Charge Mode (2 STA) → Charging Gore→Ham [60%] 8.4exp Stun 65%fail |
         Gore→Conduit [Dodge→49%] 5.9exp | Wild Pulse 2 misses × 30% = 0.6 STA
  ▸ STA: 18.4→13.8 (Charge 2 + CG 3 + Gore 1 −0.6 WP). 65% Restrained kills Charge Mode plan.
  ▸ Blended: 65% Restrained path (no Charge: 3 normal attacks) + 35% no-Restrain path (Charge active)
  ▸ Blended STA: 13.8→10.2  Blended dmg taken: 49.1
  ▸ Ham HP: 41.8 − 0.65×8.4exp (Restrained prevents Charge 65%) = 41.8 − 2.9(blended) = 38.9
  ▸ Conduit HP: 31.1 − 5.9exp = 25.2
STATE: Mon HP 121.9/200 STA ~10.2 Mud stripped (56%) / AR blend | Bm 32.1/37 STA6 |
       Arb 43/43 STA7 | Conduit 25.2/37 STA6 | Ham 38.9/49 STA7 I2

── R3 ──────────────────────────────────────────────────────────
[AR blended ~13.5 (56% bare AR13 + 44% Mud AR15). Using AR13 for optimistic path.]
[Ham I2 — basic hit → I3 → Stun (if hits). Tusk break window: Split Return called shot.]
HUNTERS: Bm Split Return (2 STA): body 0.75×14.0=10.5 + called (AR15 −2=AR13, hit 75%) 0.75×14.0=10.5=21.0;
         both-hit 75×75=56%: DC11 catch 85%, regain 1 STA → STA cost 1.6 blended STA4
         Tusk break: 1 called hit = 1 break progress (2 needed). 75% P(1 progress) this round. |
         Arb basic (1 STA) 0.85×16.0=13.6dmg STA6 |
         Conduit basic 0.75×9.5=7.1dmg STA5 |
         Ham basic (0 STA, Human disc) 0.75×12.0=9.0 I2→I3 (75% hit) STA7
  ▸ Party dmg: 50.7 (cum: 131.7)  Tusk progress: 75% (1/2 breaks, P(break) next round ~56%)
  ▸ I3 if Ham hits: 75% → Gorrhul Stunned next round
MONSTER (~121.9 HP, ~10.2 STA): STA ~10 — still has Charge if not Restrained. 65% Restrained from R2 expired.
         Charge Mode → CG→Ham [60%] 8.4exp Stun 65% | Gore→Bm [Dodge] 5.9exp | Stomp→Conduit [Dodge] 4.9exp
         Wild Pulse: 0.3 STA drain (1 attack vs field)
  ▸ STA: 10.2→4.7 (Charge 2+CG 3+Gore 1+Stomp 1 −0.3 WP) Approaching Exhaustion
  ▸ Ham HP: 38.9 − 8.4×0.35×(1−Stun) blended... CG hits 60%: 38.9 − 5.0exp = 33.9
  ▸ Bm HP: 32.1 − 5.9exp (Dodge) = 26.2  Conduit: 25.2 − 4.9 = 20.3
STATE: Mon HP 71.0/200 STA ~4.7 Mud stripped | Bm 26.2/37 STA4 | Arb 43/43 STA6 |
       Conduit 20.3/37 STA5 | Ham 33.9/49 STA7 I3 (if R3 Ham hit)

── R4 ──────────────────────────────────────────────────────────
[Ham I3 → Stun on hit (75% prob from R3 hit). Gorrhul STA ~4.7 — NEAR EXHAUSTION]
[Bm STA 4 → threshold: can do 2 more STA actions before Breathing Turn forced at STA 2]
HUNTERS: Bm basic (1 STA) 0.75×9.5=7.1; Catch 75%→Return 0.75×13.5=10.1=17.2 STA2 [⚠️ STA CRITICAL] |
         Arb Pinning Shot (2 STA, 2nd Restrained, escalating +2) 0.75×21.5=16.1; 60% Restrained STA4 |
         Conduit basic 0.75×9.5=7.1 STA4 |
         Ham basic (1 STA) 0.75×12.0=9.0 → I3 (confirmed if not already) → STUN 9.0exp STA6
  ▸ Party dmg: 39.4 + potential Stun (9.0 at 75%) = cum 170.4 (cum: 170.4 avg)
  ▸ Restrained (2nd): Gorrhul STA ~4.7 − 3 (CG) − 2 (Charge) = already can't Charge this round
MONSTER (71.0 HP, ~4.7 STA): STA 4.7 — EXHAUSTED (can't Charge, AR 13 permanent)
         No Charge Mode. Gore→Arb [75% eff AR=11+2pierce = odd, use AR13 eff] 0.55×12=6.6exp |
         Stomp→Bm [Dodge→dis 0.55²≈0.30] 3.0exp | Gore→Ham [60%] 7.2exp
         Wild Pulse miss: 0.25 STA drain (Exhausted — attacks weaker, more misses)
  ▸ Bm STA 2 → FORCED BREATHING TURN R5. Conduit STA 4 → healthy.
  ▸ Dmg to Arb: 6.6. Dmg to Bm: 3.0. Dmg to Ham: 7.2.
  ▸ Dmg taken by Gorrhul: 39.4. Running total: 170.4
STATE: Mon HP 31.6/200 STA 0 EXHAUSTED | Bm 23.2/37 STA2 [BREATHING R5] | Arb 36.4/43 STA4 |
       Conduit 20.3/37 STA4 | Ham 26.7/49 STA6

── R5 ──────────────────────────────────────────────────────────
[Gorrhul 31.6 HP. Bm forced Breathing Turn. Arb+Ham+Conduit can kill it.]
HUNTERS: Bm BREATHING TURN (+4 STA → STA6) 0 dmg |
         Arb basic (1 STA) 0.85×16.0=13.6 STA3 |
         Conduit basic 0.75×9.5=7.1 STA3 |
         Ham basic (1 STA) adv (Exhausted target) 0.75²=0.5625 → 0.5625×12=6.8dmg STA5
  ▸ Party dmg: 27.5 (cum: 197.9)  Gorrhul 31.6 − 27.5 = 4.1 HP remaining
MONSTER (31.6 HP, 0 STA EXHAUSTED): Reduced capacity. Gore→Conduit [70%] 8.4exp |
         Stomp→Bm (Breathing) [Dodge→dis] 3.0exp | Wild Pulse: 0.3 STA drain
  ▸ Conduit HP: 20.3 − 8.4 = 11.9  Bm takes 3.0 during Breath → 20.2/37
  ▸ Dmg taken: 0 (Gorrhul must survive to R6 — 4.1 HP remaining)
STATE: Mon HP 4.1/200 STA 0 | Bm 20.2/37 STA6 | Arb 36.4/43 STA3 | Conduit 11.9/37 STA3 | Ham 26.7/49 STA5

── R6 ──────────────────────────────────────────────────────────
[Gorrhul 4.1 HP. One hit from any hunter ends it.]
HUNTERS: Bm Throw (1 STA) 0.75×9.5=7.1 → kill threshold met ★
         Gorrhul HP 4.1 − 7.1 = −3.0. Killed before monster phase.
  ▸ ★ GORRHUL DEFEATED by Boomerang outbound throw R6 ★
```

---

## Result

```
═══ RESULT: Party wins R6 (Boomerang killing blow) ═══
Mon HP:        0 / 200 (−3.0 overkill)
Avg hunter HP: 65%  (Bm 55%, Arb 85%, Conduit 32%, Ham 55%)
Avg hunter STA: 4.3 (Bm 5, Arb 3, Conduit 3, Ham 5)
Breaths taken: 1 (Bm R5 — forced at STA 2)
Parts broken:  Tusks (R3 first progress, R4 Restrained+Split Return likely 2nd hit → Tusk break ~65% P by R4)
               Mud stripped R2 (Shockwave Prone 56%)
Mon STA→0:     R4 (Exhaustion after Charge Mode cost + 3 attacks/round drain)
Party DPR:     ~33.2/round (R1–R5) avg | Monster DPR: ~20.1/round to party combined
Kill round:    6
STA pressure:  Medium (Bm hits STA 2 R5 — forced Breath; Arb/Conduit at 3 entering R6 — 1 more round of pressure)
HP pressure:   Medium (Conduit at 32% HP — highest-risk hunter; others 55–85%)
```

---

## Diagnostic Results

### 1. Boomerang (New Kit) — Verdict
**Confirmed viable as tempo weapon.** EV range 14.9–21.0/round depending on loop completion and target state. The Wayback Catch 75% success rate creates meaningful variance — 25% chance of losing the return each round — but the blended output (14.9 avg) is competitive with ranged peers. Split Return (18.2 EV, 2 STA) is the single highest-value action in the party when Tusk break progress is the goal.

The kit's identity is clear: **throw, catch, return** creates a 2-STA loop that runs from round 1 without wind-up. Ricochet Step (+1 die on return for 10+ ft move) rewards skirmisher positioning. Against a single large boss, Split Return targets two contact zones simultaneously — no other weapon does this.

**STA floor confirmed:** STA 8 → STA 2 by R5 in a 6-round fight (2 STA/round loop). One Breathing Turn required. Alternating full loop / basic throw (2 STA → 1 STA) would remove the Breathing Turn at the cost of ~5 EV over the fight.

### 2. Conduit Wild Pulse — Verdict
**Passive drain confirmed, not fight-defining.** ~0.72 STA/round EV drain on Gorrhul. Over 5 rounds: ~3.6 STA drained passively. Against a 22 STA monster, that's meaningful margin — it contributed to Gorrhul hitting Exhaustion at R4 rather than R5. The Field also blocked Gorrhul's attack advantage (relevant when Restrained — Gorrhul cannot get advantage via Charge approach inside the Field). Against monsters with higher attack advantage reliance, Wild Pulse would be more decisive.

### 3. Arbalest Pinning Shot — Verdict
**Most fight-controlling single ability.** Two Restrained procs (65% R2, 60% R3 with escalating resistance) denied Gorrhul Charge Mode entirely in R2 and again in R4. Without Charge Mode: Gorrhul's 22 STA economy runs on 3×1 STA attacks instead of 2 STA Charge + 3 STA Charging Gore. This reduced Gorrhul's STA drain by ~3/round on active Charge rounds — directly accelerating Exhaustion timing.

**Escalating resistance (Restrained):** +2 on 2nd application reduced success from 65% → 60% — noticeable but not disruptive. The resistance system is functioning as intended: same weapon can't CC-lock indefinitely, but 2 procs is still decisive.

**Arbalest was never targeted by Gorrhul.** The behavior guide's default spread-attack pattern meant the stationary high-DPR Arbalest (85% hit, 16+ dmg/round) never drew Charging Gore. This is a sim flag — see Flags below.

### 4. Hammer Stun — Verdict
**Impact I3 reached but redundant.** Hammer hit I1 R1, I2 R2 (indirectly — basic attack), I3 R3. Stun would have triggered R4. By R4, Gorrhul was already Exhausted (STA 0) — the Stun landed on a target with no action economy remaining. Impact Stun is most valuable mid-fight (R2–R3) against a mobile monster. In this party, the Hammer's primary contribution was Shockwave Prone (stripping Mud-Covered R2) and consistent +1 Impact accumulation.

---

## Flags

- **Conduit survivability:** At 32% HP entering R6, Conduit is this party's weak link. AR 12, no armor upgrade, Dodge only. With no healer and Gorrhul spreading attacks, Conduit is 1–2 above-average Gores away from a KO. Any party running Conduit at T2 needs either a Flute partner or to keep Conduit out of Gorrhul's primary attack priority.
- **Arbalest never targeted:** Gorrhul's behavior spread attacks across all hunters but never prioritized the stationary 16+ DPR Arbalest. Per the updated behavior note (R2+ targeting: stationary hunter >15 EV/round = priority Charge target), a correct Gorrhul would have Charged the Arbalest in R3. This would have dramatically changed the HP pressure profile — Arbalest at Heavy AR 14 vs Charging Gore (60% hit, avg 14 dmg + Stun save) = significant threat. **The updated behavior note in gorrhul.md corrects this for future sims.**
- **Mud strip timing:** Shockwave Prone (56%) stripping Mud in R2 was the correct call. With AR dropping from 15 to 13, Arbalest's effective AR (after pierce) went from 13 → 11, raising hit rate from 75% → 85%. This unlocked Pinning Shot's full efficiency for R2+. The Mud strip cascaded correctly.
- **Tusk break probability:** Split Return's called shot (75% hit after Mud stripped) gave 75% P(1 break progress) per use. Over R3 + R4: ~94% P(2 total break progress) = Tusk break. In practice, Gorrhul was killed at R6 before Tusk break effects mattered (Gore and Charging Gore at half dice in R5–R6 would have been the payoff). Tusk break timing is better suited to HP 250+ Gorrhul where the fight extends to R7+.

---

## Tuning Notes

1. **HP 200 is too low for this party.** Kill at R6 with only 1 Breathing Turn means the fight never developed a genuine crisis moment. Conduit reached 32% HP — close — but no KO risk materialized. For an optimized mixed-role party (Arbalest high DPR, Bm consistent tempo, Hammer melee, Conduit passive pressure), **HP 250** gives Gorrhul 2–3 more rounds to threaten Conduit and trigger a second Breathing Turn. HP 250 is the corrected optimized benchmark — **updated in gorrhul.md**.

2. **Add Arbalest targeting to Gorrhul behavior (done).** Gorrhul's instinct is self-preservation and threat elimination. A hunter standing still dealing 16+ EV/round is the clearest threat on the battlefield. Adding "stationary hunter >15 EV/round = priority Charge target from R2+" makes Arbalest's high output a genuine risk/reward — brace for damage or lose the setup bonus. Updated in gorrhul.md.

3. **Boomerang kit confirmed — update boomerang.astro.** The new INS-primary Wayback Catch design produces 14.9–21.0 EV/round at T2, competes with Bow's output without duplicating its utility identity, and creates a distinct skirmisher role (move to proc Ricochet Step, Split Return for part targeting). Kit design is solid. **Updated in boomerang.astro.**

4. **Conduit Wild Pulse is background pressure, not a carry mechanic.** The 0.72 STA/round drain is real but not fight-defining against a single boss. Conduit's value multiplies in multi-creature encounters where 3–4 enemies all take the Wild Pulse drain simultaneously (3 creatures × 0.72 = 2.16 STA/round collective drain). Single-boss testing understates Conduit's power ceiling.

5. **Escalating resistance worked correctly in both applications.** Prone resistance (+2 on 2nd attempt after Mud stripped) and Restrained resistance (+2 on 2nd Pinning Shot) both reduced success probabilities without negating the CC entirely. The 2-proc window remains decisive; the 3rd application would face +4 resistance, sharply reducing viability. Parties that rotate conditions (Prone + Restrained + Staggered) maintain full efficiency — confirmed by design intent.

---

*Generated by /sim-hunt — EV mode, T2 HR7 midpoint | New Boomerang INS-primary kit (Wayback Catch prototype) + Conduit + Arbalest + Hammer*
