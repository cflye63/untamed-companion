# Sim Config 3v2 — "Glass Cannons" vs Earule (Wayback Strike Fix)
**Party:** Human Bow, Trolian Arbalest, Dragonian Wand, Human Boomerang
**Tier:** 2 | **HR:** 7 | **Mode:** EV (expected value)
**Monster:** Earule (Forest Cluster, T2)
**Diagnostic question:** Does Wayback Strike differentiate Boomerang from Bow in a single-boss fight? Does it change kill round or pressure profile?

---

## Roster

### Human Bow | HR 7
| Stat | Score | Mod |
|------|-------|-----|
| STR | 3 | +1 |
| DEX | 10 | +5 |
| CON | 5 | +2 |
| INT | 3 | +1 |
| INS | 6 | +3 |
| CHA | 3 | +1 |

| Combat | Value |
|--------|-------|
| AR | 15 (Light, 10 + DEX 5) |
| HP | 37 (CON 5×6 + HR7) |
| Stamina | 8 (6 + CON mod 2) |
| Attack | d20+7 → 1d10+5 avg 10.5 |
| Save DC | 17 |
| React | Dodge (Light armor) |

**Focus:** +1 per round stationary (cap 3). +1 flat damage per stack consumed on hit.
**T1 Technique:** Curve Shot — 1 STA, ignores all cover.
**T2 Technique:** Multishot — 3 STA, 30-ft cone; single target: Slowed on DEX save fail.
**Arrows:** Binding Arrow (STR save DC17 → Stagger + no fly), Signal Arrow (+1 atk to all allies).
**Human:** 1×/round reduce STA cost by 1.

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
| Attack | d20+7 → 2d10+5 avg 16.0 (pierces 2 AR; eff Earule AR = 11 grounded / 13 airborne) |
| Save DC | 17 |
| React | None (Heavy, no Guard/Parry) |

**Aim:** Fast Action, +2 to next attack roll.
**T1 Technique:** Explosive Bolt — 2 STA; +2d6 fire splash 10ft.
**T2 Technique:** Pinning Shot — 2 STA, +1d10; STR save DC17 → Restrained.
**Trolian Rooted Resilience:** 1 STA saved per failed save.

---

### Dragonian Wand | HR 7
| Stat | Score | Mod |
|------|-------|-----|
| STR | 3 | +1 |
| DEX | 3 | +1 |
| CON | 5 | +2 |
| INT | 10 | +5 |
| INS | 5 | +2 |
| CHA | 4 | +2 |

| Combat | Value |
|--------|-------|
| AR | 12 (Medium) |
| HP | 37 (CON 5×6 + HR7) |
| Stamina | 8 (6 + CON mod 2) |
| Cluster Attach | DEX save DC17 vs Earule DEX+3 → 65% |
| Cluster Bomb (T2) | 1d6+5 avg 8.5/cluster |
| Save DC | 17 |
| React | Dodge |

**T1 Technique (passive):** Hex Charge — Fire/Scorch: 1d4 fire/cluster end of target's turn; detonate → CON save → Burned.
**T2 Technique (passive):** Cluster Fieldcraft — terrain wards, host drag, Tripwire reaction (1 STA).
**Dragonian:** +1 STA on first action → Burned applied directly (no save), active from R2.

---

### Human Boomerang | HR 7
| Stat | Score | Mod |
|------|-------|-----|
| STR | 3 | +1 |
| DEX | 10 | +5 |
| CON | 5 | +2 |
| INT | 3 | +1 |
| INS | 6 | +3 |
| CHA | 3 | +1 |

| Combat | Value |
|--------|-------|
| AR | 15 (Light, 10 + DEX 5) |
| HP | 37 (CON 5×6 + HR7) |
| Stamina | 8 (6 + CON mod 2) |
| Attack | d20+7 → 1d10+5 avg 10.5 (outbound) / 1d8+5 avg 9.5 (return) |
| Save DC | 17 |
| React | Dodge |

**T1 Technique:** Curve Shot — 1 STA, ignores all cover.
**T2 Technique:** Windcutter — 2 STA, Action.
- **AoE mode:** 40-ft line, one attack roll vs all creatures; pushed 5ft perpendicular on hit; +50ft line and +1d6 at Combo 3+.
- **Wayback Strike (Single Target):** Two separate attack rolls vs same target — outbound (1d10+5) and return (1d8+5, −1 die). Both generate Combo. Push applies to outbound only.
**Human:** 1×/round reduce STA cost by 1 → first Wayback costs 1 STA.

---

## Monster Block — Earule (T2)

| Stat | Value |
|------|-------|
| AR | 13 |
| HP | 210 (optimized 4P) |
| Stamina | 16 |
| Flight Tax | −1 STA/turn airborne |
| Attacks/Turn | 3 |

**Attacks:**
- Talon Rake (1 STA): d20+5 → 2d6+3 avg 10.0 | rider: +1d6 if target Prone
- Screeching Shot (1 STA): d20+5 → 1d8+3 avg 7.5 | rider: CON save DC15 → Dazed
- Sky Dive (2 STA): d20+5 → 2d8+3 avg 12.0 | rider: STR save DC15 → Prone (if ≥30ft descent) | miss: Earule Dazed + lands

**Abilities:**
- Sonic Burst (3 STA, CD 2): 15ft radius, CON save DC15; fail: 2d8+3 + Staggered; success: half dmg

**Reactions:** None

**Exhaustion Rule:** Falls Prone, cannot Fly, Sonic Burst disabled, Talon Rake half effectiveness

**Passive Traits:**
- Wind Shear: −2 to all ranged attack rolls while airborne
- Momentum Flight: must move ≥20ft/turn; if speed cut below 20ft → forced landing
- Hollow Bones: +2 dmg from Bludgeoning

**Part Breaks:**
- Wing Membranes (2 called-shot hits): flight speed 30ft, Flight Tax −2/turn, Sky Dive disabled
- Vocal Sac (2 called-shot hits): Sonic Burst disabled, Screech loses Dazed rider

---

## Hit Table

| Matchup | Hit % |
|---------|-------|
| Bow d20+7 vs Earule AR13 — airborne (Wind Shear −2) | 65% |
| Bow d20+7 vs Earule AR13 — grounded | 75% |
| Arbalest d20+7 (AR pen −2 → eff AR11) — airborne (net Wind Shear = AR13) | 75% |
| Arbalest d20+7 vs Earule eff AR11 — grounded | 85% |
| Arbalest d20+9 (Aim) vs eff AR13 airborne | 85% |
| Wand cluster attach (DEX save DC17 vs Earule DEX+3) | 65% (unaffected by Wind Shear) |
| Boomerang d20+7 — airborne (Wind Shear −2) | 65% |
| Boomerang d20+7 — grounded | 75% |
| Earule Screech (d20+5) vs Bow/Arb/Bm AR15 | 55% |
| Earule Screech vs Wand AR12 | 70% |
| Earule Sky Dive vs Wand AR12 (Dodge available) | 70% → Dodge dis: 49% |
| Binding Arrow: 65% hit × 65% STR save fail | 42% P(ground) |
| Drake Sting Daze CON DC15 (Bow/Bm/Wand CON+2) | 40% fail |
| Scorch tick | 2.5/round + −1 STA/start Earule turn (Burned from R2) |

---

## Round Log

```
── R1 ──────────────────────────────────────────────────────────
HUNTERS: Bow Binding Arrow (0 STA, Human disc) 6.8dmg STA8 F1 |\
         Arb Aim (Fast Action, no fire) STA9 |\
         Wand Place+Dragonian (2STA, 65% attach) Burned active STA6 |\
         Bm Wayback Strike (1 STA, Human disc) out 6.8 + ret 6.2 = 13.0dmg STA7
  ▸ Party dmg: 20.6 (cum: 20.6)  Binding: 42% P(Earule grounded R2)
  ▸ Conditions: Earule Burned (Dragonian, no save), Cluster attached 65%
MONSTER (210 HP, 16 STA): Screech→Bow [55%] 4.1exp Daze 40% | Screech→Wand [Dodge] 3.7exp Daze 40% |
         Sky Dive→Wand [Dodge→49%] 5.9exp 35% Prone | Flight Tax −1 STA
  ▸ STA: 16→11  Dmg taken: 20.6 + Burned 2.5 = 23.1
  ▸ Wand HP: 37 − 3.7 − 5.9 = 27.4  Bow HP: 37 − 4.1 = 32.9
STATE: Mon HP 186.9/210 STA 11 Burned | Bow 32.9/37 STA8 F1 | Arb 43/43 STA9 |
       Wand 27.4/37 STA6 | Bm 37/37 STA7

── R2 ──────────────────────────────────────────────────────────
Binding EV blend: 42% grounded + 58% airborne (hit chance weighted avg)
  Effective party hit rates: Bow 0.42×0.75+0.58×0.65=0.69 | Arb 0.42×0.85+0.58×0.75=0.79 |
  Bm 0.42×0.75+0.58×0.65=0.69
HUNTERS: Bow basic F1 0.69×11.5=7.9dmg STA7 F1→consumed | Arb Aim+Fire 0.85×16.0=13.6dmg STA8 |\
         Wand Detonate+Place (2STA) 5.5+1.6Scorch+2.5Burned=9.6 STA4 |\
         Bm Wayback (2STA) out 0.69×10.5+ret 0.69×9.5=7.2+6.6=13.8 STA5
  ▸ Party dmg: 45.0 (cum: 68.1 w/Burned)  Conditions: Earule 40% Daze from R1 Screech
MONSTER (186.9 HP, 11 STA): Blend aerial/grounded behavior | Screech×2 + Dive or Rake×3
         Party takes ~17.8 avg each round (split Screech×2 to Bow+Wand, Sky Dive to Wand)
  ▸ STA: 11→5.5(blend)  Dmg taken: 45.0 + 2.5 Burned = 47.5
STATE: Mon HP 139.4/210 STA ~5.5 | Bow 29/37 STA7 | Arb 39/43 STA8 | Wand 20/37 STA4 | Bm 29/37 STA5

── R3 ──────────────────────────────────────────────────────────
[Wand STA 4 → 2 STA cycle hits threshold; BREATHING TURN]
[Earule re-ascends after any grounding — R3 treated as airborne again]
HUNTERS: Bow basic airborne 0.65×10.5=6.8dmg STA6 F1 | Arb fire (no Aim) 0.75×16.0=12.0dmg STA7 |\
         Wand BREATHING TURN (+4STA→8) 0dmg | Bm Wayback (2STA) 0.65×10.5+0.65×9.5=13.0dmg STA3
  ▸ Party dmg: 31.8 (cum: 103.6)  DoT: Burned 2.5 + Scorch 1.6 = 4.1
MONSTER (139.4 HP, ~5.5 STA): Conservative. 2 attacks only | Screech→Bow [55%] 4.1 | Screech→Wand [70%] 5.3
         Flight Tax −1 STA
  ▸ STA: 5.5→3.0  Dmg taken: 31.8 + 4.1 = 35.9
STATE: Mon HP 103.5/210 STA 3 | Bow 25/37 STA6 | Arb 34/43 STA7 | Wand 20/37 STA8 | Bm 27/37 STA3

── R4 ──────────────────────────────────────────────────────────
[Earule STA 3 — nearing Exhaustion. Lands to conserve; Sonic Burst vs nearest hunter]
[Bm STA 3 → Breathing Turn threshold — BREATHING TURN]
HUNTERS: Bow basic grounded 0.75×10.5=7.9dmg STA5 F2 | Arb Aim (Fast, no fire) STA7 |\
         Wand Detonate+Place (2STA) 5.5+1.6+2.5=9.6 STA6 |\
         Bm BREATHING TURN (+4STA→7) 0dmg
  ▸ Party dmg: 17.5 (cum: 121.1)  Conditions: Earule lands (Sonic Burst option)
MONSTER (~103 HP, 3 STA): Sonic Burst vs Wand [60% fail] 7.2exp + 40% Stagger | Earule STA→0 → EXHAUSTED
         Falls Prone. Fly speed 0. Sonic Burst disabled.
  ▸ STA: 3→0 EXHAUSTED  Dmg taken: 17.5 + 2.5 Burned = 20.0
  ▸ Wand HP: 20 − 7.2 = 12.8  Wand 60% Staggered
STATE: Mon HP 83.5/210 STA 0 EXHAUSTED PRONE | Bow 25/37 STA5 F2 | Arb 34/43 STA7 | Wand 12.8/37 STA6 | Bm 27/37 STA7

── R5 ──────────────────────────────────────────────────────────
[Earule Exhausted + Prone. Ranged vs Prone = dis (hit²). No attacks (STA 0). Recovers 4 STA end of turn]
[Wand 60% Staggered = 60% no Action, 40% full action]
HUNTERS: Bow dis F2 0.75²=0.5625 → 0.5625×12.5=7.0dmg STA4 | Arb Aim+Fire (Aim from R4) 0.85×16=13.6 [dis→0.85²×16=11.6] STA6 |\
         Wand 40%×9.6 + 2.5Burned + Scorch 1.6 = 7.9exp STA~4 |\
         Bm Wayback (2STA) dis: 0.5625×10.5+0.5625×9.5=5.9+5.3=11.2 STA5
  ▸ Party dmg: 38.3 (cum: 159.4)  DoT: Burned 2.5 + Scorch 1.6 = 4.1
MONSTER (83.5 HP, 0 STA): No actions. Recovers 4 STA end of turn.
  ▸ Dmg taken: 38.3 + 4.1 = 42.4  Conditions: Exhaustion clears (4 STA restored)
STATE: Mon HP 41.1/210 STA 4 (recovering) | Bow 25/37 STA4 | Arb 34/43 STA6 | Wand 12.8/37 STA4 | Bm 27/37 STA5

── R6 ──────────────────────────────────────────────────────────
[Earule STA 4. Below 40% HP → Desperation. Grounded. Cannot dive at altitude. 2 Talon Rakes then STA→2]
HUNTERS: Bow basic grounded dis 0.5625×10.5=5.9dmg STA3 | Arb Pinning Shot (2STA) adv dis: 0.5625×21.5=12.1 → Restrained 50% STA4 |\
         Wand Detonate+Place (2STA) 9.6 STA2 | Bm Wayback (2STA) dis 0.5625×10.5+0.5625×9.5=11.2 STA3
  ▸ Party dmg: 38.8 (cum: 198.2)  DoT: Burned 2.5 + Scorch 1.6 = 4.1  Total: 45.4
MONSTER (41.1 HP): Takes 45.4 → HP = −4.3. Killed before monster phase.
  ▸ ★ EARULE DEFEATED ★
```

---

## Result

```
═══ RESULT: Party wins R6 ═══
Mon HP:        0 / 210 (−4.3 overkill)
Avg hunter HP: 31.5 / 38.5  (Bow 68%, Arb 79%, Wand 35%, Bm 73%)
Avg hunter STA: 4.3 / 8.25
Breaths taken: 2 (Wand R3, Bm R4)
Parts broken:  none
Mon STA→0:     R4 (Sonic Burst + R4 attacks)
Party DPR avg: ~37.4/round (R1–R6)  |  Monster DPR avg: ~11.2/round
Kill round:    6
STA pressure:  Low–Med (Wand critical R3; Bm near-critical R4)
HP pressure:   Low (peak: Wand at 35% HP; others largely untouched)
```

---

## Wayback Strike vs Basic Bow — Diagnostic

| Metric | Boomerang (Wayback) | Bow (Focus + Binding) |
|--------|---------------------|----------------------|
| Airborne DPR (2 STA) | 13.0 | 6.8 (1 STA, F0) |
| Airborne DPR (1 STA) | 6.8 (basic) | 7.5 (F1 avg) |
| EV per STA (Wayback) | 6.5 | — |
| EV per STA (Bow F1) | — | 7.5 |
| Grounded DPR (Wayback, 2 STA) | 15.0 | — |
| Grounded DPR (Bow F1, 1 STA) | — | 8.6 |
| Total damage 6 rounds | 62.2 | ~54.1 (est. Bow equivalent) |
| Kill round | 6 | 6 |
| Breathing turns | 2 | 0 |

**Wayback lift over basic Bow:** +8.1 damage over 6 rounds (+1.35/round). Kill round unchanged. The breathing turns cost ~22 expected damage, negating most of the technique's raw output advantage.

**Verdict:** Wayback Strike gives Boomerang a **meaningful burst identity** over Bow — 13.0 vs 6.8 at R1 (double the output) is a genuine first-strike advantage. However the double-STA cost forces two breathing turns in a 6-round fight, which closes the cumulative gap. Bow compensates with Binding Arrow utility (42% grounding = party-wide accuracy unlock for multiple rounds) and Focus ramp. **The weapons are mechanically differentiated — burst vs ramp/utility — without being numerically dominant in either direction.** Against longer fights (8+ rounds) or at HP 260+, Wayback's front-loading becomes more decisive before Breathing Turns pile up.

---

## Flags

- **Wand near-KO:** Wand at 12.8/37 HP (35%) entering R6 after taking Screech + Sky Dive R1 + Sonic Burst R4. Wand is the consistent focus target (AR 12) and is the weakest link in this party. CON 5 provides minimal buffer. One above-average Screech+Dive chain in R1 or Sonic Burst targeting a non-Wand party member would have dramatically different HP distribution.
- **Wayback STA cost is the real penalty, not the damage:** +8.1 damage over 6 rounds is not the story. The two Breathing Turns (R4 specifically during the Exhaustion pile-on at R5) represent ~22 lost expected DPR. Alternating Wayback/basic (2 STA → 1 STA → 2 STA) removes both breathing turns and raises 6-round total Bm output to ~72 while costing only R1 burst timing.
- **Bow Focus vs Bm Combo — both dormant vs single boss:** Bow's Focus system naturally ramps to F2–F3 against a boss (stationary). Bm's Combo system requires multi-target chains (Ricochet) that have no value against a single target. Wayback generates Combo but Combo has no payoff in a solo boss fight until C5. This asymmetry favors Bow in single-boss content where Bow can reach F3 for same-turn Power Shot.
- **Wind Shear suppresses both equally:** −2 to ranged hits floors the airborne phase for Bow and Bm identically. Arbalest's AR pierce exactly offsets Wind Shear (net 0 penalty), meaning Arbalest is the strongest ranged weapon in airborne phases — Aim bonus then raises it further.
- **No part breaks:** Wing Membrane break (2 called shots) would have neutralized Wind Shear from R3+ and unlocked Sky Dive-free rounds. With 4 ranged hunters at 65% called-shot hit rate, Wings break in ~3 rounds. This was available but not modeled — represents a significant missed optimization.
- **Pronated Earule = ranged disadvantage:** Both Bow and Bm take full dis penalty when Earule is Prone (no melee hunters to exploit Prone advantage). Arbalest's high base hit rate (0.85) survives dis (0.72) better than Bow/Bm (0.65 → 0.42). Wand is immune (DEX save, not attack roll). Prone phases actually disadvantage the all-ranged party relative to mixed compositions.

---

## Tuning Notes

1. **Wayback differentiates Boomerang in role, not kill-round math.** The R1 burst advantage (13.0 vs 6.8) is a genuine mechanical identity — two attacks vs one — but the STA tax means the ceiling only matters if the fight ends before breathing turns accumulate. At HP 260+ or 8+ rounds, front-loaded Wayback burst becomes more decisive. At HP 210 / 6 rounds, the fight resolves before the advantage compounds.

2. **Alternating Wayback/basic removes both breathing turns.** Bm using Wayback (2 STA) on odd rounds, basic attack (1 STA) on even rounds, maintains STA 5–7 throughout the fight. 6-round total output rises from 62.2 (2 breathing turns) to approximately 72. This is the correct cadence recommendation for single-boss fights where Combo cannot be spent efficiently.

3. **Wayback vs Bow combo design note.** Both weapons share the same attack bonus and armor type. The differentiation is: Bow = ramp/utility (Focus + Binding/Signal), Boomerang = burst/return identity (Wayback + Ricochet multi-target). Against a single boss, Bow's utility arrows (Binding = 42% grounding, Signal = party +1 hit) provide party aggregate value that Wayback doesn't match. Against multi-target encounters, Boomerang's Ricochet chains generate Combo for C5 payoff while Bow's Focus resets on reposition. The weapons occupy distinct niches. Single-boss testing (this sim) favors Bow's utility; multi-target would favor Boomerang.

4. **Boomerang aerial differentiation still open.** Curve Shot (T1) ignores cover — does not bypass Wind Shear. Boomerang has no aerial accuracy advantage over Bow airborne. Consider granting Curve Shot a Wind Shear bypass (the curved arc inherently avoids turbulence) to give Boomerang a meaningful aerial identity vs monsters with Wind Shear or similar conditions. This would give Boomerang an airborne niche Bow cannot replicate.

5. **Wand survivability in all-ranged parties.** With no Bastion or melee taunt, Earule freely targets Wand (lowest AR). Wand's 37 HP at AR 12 is stressed by consistent Screech + Dive focus. Either the party needs a Flute (healing buffer) or Wand needs better positioning options. Second Cluster Fieldcraft function (terrain wards providing obscurement) could serve as a survivability tool for this scenario.

---

*Generated by /sim-hunt — EV mode, T2 HR7 midpoint | Boomerang Wayback Strike (post-fix)*
