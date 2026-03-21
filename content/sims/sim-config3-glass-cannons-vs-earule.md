# Sim Config 3 — "Glass Cannons" vs Earule
**Party:** Human Bow, Trolian Arbalest, Dragonian Wand, Human Boomerang
**Tier:** 2 | **HR:** 7 | **Mode:** EV (expected value)
**Monster:** Earule (Forest Cluster, T2)
**Diagnostic question:** Does Earule's Wind Shear (−2 to ALL ranged while airborne) create an unsolvable aerial stall for a party with zero melee?

---

## Roster

### Human Bow | HR 7
| Stat | Score | Mod |
|------|-------|-----|
| STR | 3 | +1 |
| DEX | 11 | +5 |
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
| React | Dodge |

**T1 Technique:** Power Shot — 2 STA wind-up; at F3 release same turn (adv + +1d10)
**T2 Technique:** Multishot — 3 STA, 30-ft cone, 3d6+DEX; at F3 enemies disadv DEX save
**Arrows:** Binding Arrow (STR save DC17 → Stagger + no fly), Signal Arrow (+1 atk to all allies)
**Human:** 1 attack/hunt costs 0 STA

---

### Trolian Arbalest | HR 7
| Stat | Score | Mod |
|------|-------|-----|
| STR | 11 | +5 |
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
| Attack | d20+7 → 2d10+5 avg 16.0 (ignores 2 AR; effective vs AR 11) |
| Save DC | 17 |
| React | None (Heavy, no Guard/Parry) |

**T1 Technique:** Explosive Bolt — 2 STA; base dmg+STR + 2d6 fire splash 10ft (DEX save DC17 half)
**T2 Technique:** Pinning Shot — 2 STA, +1d10; STR save DC17 → Restrained
**Aim:** Fast Action, +2 to next attack roll
**Trolian Rooted Resilience:** 1 STA saved per save failure

---

### Dragonian Wand | HR 7
| Stat | Score | Mod |
|------|-------|-----|
| STR | 3 | +1 |
| DEX | 3 | +1 |
| CON | 5 | +2 |
| INT | 11 | +5 |
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

**T1 Technique (passive):** Hex Charge — Fire/Scorch: 1d4 fire/cluster end of target's turn; detonate → CON save → Burned
**T2 Technique (passive):** Cluster Fieldcraft — terrain wards, host drag, Tripwire reaction (1 STA)
**Dragonian:** +1 STA on first action → Burned applied directly (no save), active from R2

---

### Human Boomerang | HR 7
| Stat | Score | Mod |
|------|-------|-----|
| STR | 3 | +1 |
| DEX | 11 | +5 |
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
| React | Dodge |

**T1 Technique:** Curve Shot — 1 STA, ignores all cover; identical cost to basic attack
**T2 Technique:** Windcutter — 2 STA, 40-ft line (AoE) or Wayback Strike (single target: two hits, return arc at −1 die). STA-inefficient as AoE vs single boss; Wayback Strike now provides single-target identity (not available during this sim — added post-run).
**Human:** 1 attack/hunt costs 0 STA

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
- Talon Rake: d20+5 → 2d6+3 avg 10.0 | rider: +1d6 if target Prone
- Screeching Shot: d20+5 → 1d8+3 avg 7.5 | rider: CON save DC15 → Dazed
- Sky Dive: d20+5 → 2d8+3 avg 12.0 | rider: STR save DC15 → Prone (if ≥30ft descent) | miss: Earule Dazed + lands

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

**Behavior Priority:**
1. Open: Airborne, Screech ×2 most dangerous ranged + Sky Dive squishiest (no melee → Screech ×3)
2. Above 40% HP: Sky Dive open lane → land → Talon Rake → re-ascend
3. Clustered hunters: Sonic Burst then re-ascend
4. ≤5 STA: conservative / re-ascend only
5. 40% HP: Desperation dive chain
6. 0 STA: Exhausted — Prone, no fly, Sonic Burst disabled

---

## Hit Table

| Matchup | Hit % |
|---------|-------|
| Bow (d20+7) vs Earule AR13 — airborne (Wind Shear −2) | 65% |
| Bow vs Earule AR13 — grounded | 75% |
| Arbalest (d20+7, −2 AR pen → AR11) — airborne (−2 atk) | 75% |
| Arbalest vs Earule AR11 — grounded | 85% |
| Wand cluster attach (DEX save DC17 vs DEX+3) | 65% (unaffected by Wind Shear) |
| Boomerang (d20+7) — airborne (Wind Shear −2) | 65% |
| Boomerang vs Earule AR13 — grounded | 75% |
| Earule (d20+5) vs Bow/Arb/Boom AR15 | 55% |
| Earule (d20+5) vs Wand AR12 | 70% |
| Earule Sky Dive vs Bow AR15 | 55% (no Dodge: 55% ≤ 60% threshold) |
| Earule Screech vs Wand (Dodge active) | 49% |
| Binding Arrow (65% hit × 65% STR save fail) | 42% P(ground) |
| Burned tick | 2.5/round + −1 STA/start of Earule's turn |
| Scorch tick (per attached cluster) | 1.625/round (0.65 × 2.5) |

---

## Round Log

```
── R1 ──────────────────────────────────────────────────────────
HUNTERS: Bow [Binding Arrow, airborne 65%] 6.8dmg STA8 F1 | Arb [Aim+Attack 85%→AR11] 13.6dmg STA8
         Wand [Place+Dragonian Burned, 2STA, 65% attach] 0dmg STA6 | Boom [basic 65%, Human free] 6.8dmg STA8
  ▸ Party dmg: 27.3 (cum: 27.3)  Conditions: Burned applied to Earule (via Dragonian, no save)
MONSTER (210 HP, 16 STA): Screech→Wand [49% dodged] 3.7exp | Screech→Bow [55%] 4.1exp
         Screech→Boom [55%] 4.1exp | Flight Tax −1 STA
  ▸ STA: 16→11  DoT end-of-turn: Scorch 1.6
STATE: Mon HP 181.1/210 STA 11 | Bow 32.9/37 STA8 F1 | Arb 43/43 STA8 | Wand 33.3/37 STA6 | Boom 32.9/37 STA8

── R2 ──────────────────────────────────────────────────────────
Earule Burned −1 STA at start: STA 11→10
HUNTERS: Bow [basic F1, 65%] 7.5dmg STA7 F2 | Arb [Aim+Attack, 75%] 13.6dmg STA7
         Wand [Detonate+Place, 2STA] 5.5dmg STA4 | Boom [basic 65%] 6.8dmg STA7
  ▸ Party dmg: 33.4 (cum: 60.7)  DoT: Burned 2.5 + Scorch 1.6 = 4.1
MONSTER (181.1 HP, 10 STA): Sky Dive→Bow [55%] 6.6exp (Prone rider 35.8%) | Screech→Wand [49% dodged] 3.7exp
         Screech→Arb [55%] 4.1exp | Flight Tax −1; Dive+2 Screech+Tax = 5 STA
  ▸ STA: 10→5  Dmg taken: 33.4 + 4.1 = 37.5
STATE: Mon HP 143.6/210 STA 5 | Bow 26.3/37 STA7 F2 | Arb 38.9/43 STA7 | Wand 29.6/37 STA4 | Boom 32.9/37 STA7
  ▸ Note: Earule STA 5 → conservative behavior threshold reached

── R3 ──────────────────────────────────────────────────────────
Earule re-ascends (no attack). Hunter phase: Earule GROUNDED, no Wind Shear.
Earule Burned −1 STA at start: STA 5→4
HUNTERS: Bow [Signal Arrow, grounded 75%] 7.9dmg STA6 F0(consumed) | Arb [Aim+Attack+Signal+1, ~89%] 14.2dmg STA6
         Wand [BREATHING TURN — STA≤2] 0dmg STA2→6 | Boom [grounded+Signal, ~79%] 8.3dmg STA6
  ▸ Party dmg: 30.4 (cum: 91.1)  DoT: Burned 2.5 + Scorch prev cluster 1.6 = 4.1
MONSTER (143.6 HP, 4 STA): Re-ascend only; Flight Tax −1 STA → STA 4→3
  ▸ Dmg taken: 30.4 + 4.1 = 34.5  Conditions: —
STATE: Mon HP 109.1/210 STA 3 | Bow 26.3/37 STA6 F1 | Arb 38.9/43 STA6 | Wand 29.6/37 STA6 | Boom 32.9/37 STA6

── R4 ──────────────────────────────────────────────────────────
Earule Burned −1 STA at start: STA 3→2
HUNTERS: Bow [Binding Arrow #2, airborne 65%] 6.8dmg STA5 F1 | Arb [Aim+Attack, 75%] 13.6dmg STA5
         Wand [Detonate+Place, 2STA] 5.5dmg STA4 | Boom [basic 65%] 6.8dmg STA5
  ▸ Party dmg: 32.7 (cum: 123.8)  DoT: Burned 2.5 + Scorch 1.6 = 4.1
MONSTER (109.1 HP, 2 STA): Sky Dive→Bow (only affordable action) [55%] 6.6exp → STA 2→0 → EXHAUSTED. Falls Prone.
  ▸ Dmg taken: 32.7 + 4.1 = 36.8  Conditions: EXHAUSTED, PRONE
STATE: Mon HP 72.3/210 STA 0 EXHAUSTED PRONE | Bow 19.7/37 STA5 | Arb 38.9/43 STA5 | Wand 29.6/37 STA4 | Boom 32.9/37 STA5

── R5 ──────────────────────────────────────────────────────────
Earule Exhausted + Prone. Ranged vs Exhausted+Prone: adv/dis cancel → normal hit rates, no Wind Shear.
Earule recovers 4 STA (end of turn): 0→4
HUNTERS: Bow [Signal Arrow #2, grounded 75%] 7.9dmg STA4 | Arb [Aim+Attack+Signal+1, ~90%] 14.4dmg STA4
         Wand [Detonate+Place, 2STA] 5.5dmg STA2 | Boom [grounded+Signal, ~79%] 8.3dmg STA4
  ▸ Party dmg: 36.1 (cum: 159.9)  DoT: Burned 2.5 + Scorch 1.6 = 4.1
MONSTER (72.3 HP, 0 STA): No actions. Recovers 4 STA end of turn.
  ▸ Dmg taken: 36.1 + 4.1 = 40.2  Conditions: Exhausted clears (4 STA restored)
STATE: Mon HP 32.1/210 STA 4 (recovering) | Bow 19.7/37 STA4 | Arb 38.9/43 STA4 | Wand 29.6/37 STA2 | Boom 32.9/37 STA4

── R6 ──────────────────────────────────────────────────────────
Earule STA 4. Stand (2 STA→2). Below 40% HP → Desperation but cannot dive (no altitude). 2 Screech → STA 0 → Exhausted again. Hunters act first.
HUNTERS: Bow [basic F1, grounded 75%] 8.6dmg STA3 | Arb [Aim+Attack, 90%] 14.4dmg STA3
         Wand [BREATHING TURN] 0dmg STA2→6 | Boom [basic grounded 75%] 7.9dmg STA3
  ▸ Party dmg: 30.9  DoT: Burned 2.5 + Scorch 1.6 = 4.1  Total R6 dmg: 35.0
MONSTER (32.1 HP): Takes 35.0 → HP = −2.9. DEFEATED before monster phase.
STATE: Mon HP 0/210  ★ EARULE DEFEATED ★
```

---

## Result

```
═══ RESULT: Party wins R6 ═══
Mon HP:        0 / 210
Avg hunter HP: 27.1 / 38.5  (Bow 53%, Arb 91%, Wand 80%, Boom 89%)
Avg hunter STA: 3.75 / 8.25
Breaths taken: 2 (Wand R3, Wand R6)
Parts broken:  none
Mon STA→0:     R4 (first collapse), R5 recovery, R6 collapse again
Party DPR avg: ~31.7  |  Monster DPR avg: ~8.1
Kill round:    6
STA pressure:  Medium (Wand double-breathed; Bow moderately drained)
HP pressure:   Medium (Bow at 53% HP; others largely untouched)
```

---

## Flags

- **Aerial stall partial:** Wind Shear (−2 ranged) reduced party DPR ~10–12% per aerial round but never created a stall. Wand's cluster mechanic is a DEX save — completely immune to Wind Shear — maintaining 65% attach rate throughout all aerial rounds.
- **Arbalest Aim cancels Wind Shear exactly:** Aim (+2 Fast Action) directly offsets Wind Shear (−2), preserving 85% hit rate airborne. Wind Shear is effectively a non-issue for Arbalest.
- **No melee = no grounded punishment window:** Sky Dive misses generate free Dazed + Prone turns that a melee hunter would cash for advantage attacks. Party skipped ~10–15 expected HP of punish value across the fight.
- **Binding Arrow underperformed:** Both uses resolved at 42% EV (65% hit × 65% STR save fail at DC17 vs STR+3). Neither grounding materialized in the dominant path.
- **Wand STA fragility:** 2-STA/round cluster cycle drained an 8-STA pool in ~4 active rounds, forcing 2 Breathing Turns. Longer fights (8+ rounds) would see Wand idle every 3rd round.
- **Earule STA collapse early:** Flight Tax (1/turn) + 3 attacks (3/turn) + Burned (−1/turn from R2) = 5–6 STA drain/turn vs a 16-STA pool. Earule hit Exhaustion in R4, never reaching its Desperation dive phase with altitude intact.
- **Sonic Burst never fired:** 3 STA cost was always unaffordable alongside attack budget. STA pressure from the all-ranged party (Burned drain + Flight Tax) preempted Earule's AoE entirely.
- **Boomerang = Bow clone (pre-fix):** Both dealt 65%×10.5 airborne with no mechanical differentiation vs single boss. Combo generation suppressed by Earule's constant repositioning. **Fixed post-run:** Windcutter gains Wayback Strike mode — two attack rolls against a single target (outbound + return arc), return hit at −1 die, both build Combo. This gives Boomerang a distinct single-boss tool that rewards positioning for the return arc.

---

## Tuning Notes

1. **Wind Shear is not a stall for this party composition.** To make it a genuine threat: (a) raise to −3 vs un-aimed attacks, (b) prevent Aim from stacking with Wind Shear, or (c) convert to +2 AR airborne instead of attack penalty — hitting all attack-roll weapons equally including Arbalest. Option (c) also hits Arbalest's Aim workaround.

2. **Earule's STA engine is the real kill switch, not HP.** Burned condition (−1 STA/turn) from Wand shaved 3 STA across R2–R4, accelerating Exhaustion by ~1 round. To restore 2–3 full dive cycles: raise STA to 20, or restrict Flight Tax to ascent/descent turns only (momentum cost model) rather than per-turn passive drain.

3. **Boomerang single-boss differentiation addressed.** Wayback Strike added to Windcutter: single-target mode (outbound + return arc, second hit at −1 die, both build Combo). This resolves the boss-fight identity gap without touching multi-target Ricochet. Aerial Wind Shear differentiation (Curve Shot bypass) remains open — Boomerang still matches Bow at 65% airborne. Consider as a follow-up once Wayback Strike has been tested.

---

*Generated by /sim-hunt — EV mode, T2 HR7 midpoint*
