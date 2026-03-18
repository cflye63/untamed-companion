# Sim Calibration — Tier 1 | Median | 2026-03-18

**Party:** Human Greatsword, Trolian Hammer, Dragonian Wand (Fire), Thalorim Bow
**Hunter baseline:** HR 2 optimal builds
**Optimization:** Median (base monster stats as written)

---

## Shared Party Roster

| Hunter | Race | Weapon | AR | HP | STA | Attack | Avg Hit Dmg | React |
|--------|------|--------|----|----|-----|--------|-------------|-------|
| GS | Human | Greatsword | 14 | 34 | 9 | d20+6 | 10.5 | Parry |
| Ham | Trolian (Highland) | Hammer | 14 (15 anchored) | 32 | 9 | d20+7 | 10.5 | None |
| Wand | Dragonian (Fire) | Wand | 12 | 30 | 8 | d20+6 | 7.5 | Dodge |
| Bow | Thalorim | Bow | 14 | 32 | 9 | d20+6 | 8.5 | Dodge |

**Key saves:** DEX: GS/Ham +2 | Wand +1 | Bow +4. INS: GS/Ham +1 | Wand +2 | Bow +3.
**Draconic Channeling:** Wand spends +1 STA → Burned. Avg 2.5/turn (no Fragile Frame) or 4.5/turn (Fragile Frame).

---

## Monster Summaries

### PALAX — AR 9 | HP 81 | STA 16

**Hunter hit rates:** GS/Wand/Bow 90% | Ham 95% | Burrowed ranged: 80%
**Monster hit rates:** d20+5 vs AR 14 = 60% | vs AR 12 (Wand Dodge) → 49%

**Round Trace:**
- R1 Hunter Phase: Palax underground — ranged only. Wand 0.80×7.5=6.0 | Bow 0.80×8.5=6.8 → **12.8 HP**
- R1 Monster Phase: Mole Eruption (2 STA, CD2). DEX DC 12 fail: GS/Ham 45%, Wand 50%, Bow 35%. Hits GS+Ham: 0.45×10+0.55×5=**7.25 HP each** + 45% Prone. 2 attacks: Gnaw vs prone GS (adv 84% × 8.0 × 0.47 Parry land) = ~3.2 | Claw→Ham 0.60×7.5=4.5. STA: 16→10.
- R2 Hunter Phase: Palax surfaced. GS 0.90×11.2=10.08 | Ham 0.95×10.5=9.98 | Wand 0.90×7.5+Burned2.5=9.25 | Bow 0.90×9.5+Focus=9.09 → **38.4 HP**. Cumulative: ~55.2. Monster HP: **25.8**
- R2 Monster Phase: Below 40% HP → retreats underground. 2 attacks (Wand/Bow): ~8 HP total.
- R3 Hunter Phase: Underground. Ranged only: Wand 8.5 | Bow 9.1 + Burned 2.5 → **17.6 + 2.5 = 20.1**. Cumulative: **75.3**. Monster HP: **5.7**
- R4 Hunter Phase: Surfaces for Eruption R4 (CD clear). Full party ~38 DPR → **DEAD R4**

```
────────────────────────────────────────────────
MONSTER: PALAX  |  AR 9  HP 81  STA 16
────────────────────────────────────────────────
Hunter hit rate:        90–95%  (burrowed ranged: 80%)
Party DPR (avg):        ~25/round  (underground phases cut R1+R3)
Monster DPR (avg):      ~10.5/round  (Eruption front-loaded R1)
Projected kill round:   ~2 (surface-only: 81/38=2.1)
Actual kill round:      4  (underground phases extend fight)

Stamina pressure:       None
HP pressure:            Low  (Eruption R1: ~7 HP to frontliners; ~4/hunter/round R2+)
Breathing Turns taken:  0
Core mechanic fired:    Yes  (Eruption R1, available again R4)
Monster STA at death:   ~9 / 16

Flags:
  1. AR 9 → 90–95% hit rates. No AR defense — burrow IS the defense.
     Intentional design but Palax's kill-round-4 result is entirely
     load-bearing on the underground mechanic. Remove burrow and it dies R2.
  2. Eruption fires R1 ✓ but dies before second use in R4.
────────────────────────────────────────────────
```

---

### TANUZA — AR 8 | HP 81 | STA 16

**Hunter hit rates:** All 95% (capped). Tanuza starts elevated — melee delayed R1.
**Monster hit rates:** Claw d20+5 vs AR 14 = 60% | vs AR 12 (Wand Dodge) → 49%. Gust Scatter = 0 damage.

**Round Trace:**
- R1 Hunter Phase: Elevated. Ranged only. Wand 0.95×7.5=7.13 | Bow 0.95×8.5=8.08 → **15.2 HP** + Burned applied.
- R1 Monster Phase: Gust Scatter (2 STA, CD2) — push only, 0 HP. Dive Slam (20+ ft, +height) → GS: 0.55×12=**6.6 HP** + 55% Prone. Claw→Ham: 0.60×7.5=**4.5 HP**. STA: 16→12.
- R2 Hunter Phase: Tanuza glides down. Full party. GS 0.95×11.2=10.64 | Ham 0.95×10.5=9.98 | Wand 0.95×7.5+Burned2.5=9.63 | Bow 0.95×9.5+Focus=9.98 → **40.2 HP + 2.5 Burned**. Cumulative: **57.9**. Monster HP: **23.1** (28%)
- R2 Monster Phase: Below 30% HP → canopy escape attempt. 2 attacks ~8 HP to party.
- R3 Hunter Phase: ~40 DPR → 23.1-40 < 0 → **DEAD R3**

```
────────────────────────────────────────────────
MONSTER: TANUZA  |  AR 8  HP 81  STA 16
────────────────────────────────────────────────
Hunter hit rate:        95%  (all hunters, capped)
Party DPR (baseline):   ~38/round  (delayed R1 to ~15)
Monster DPR (baseline): ~8/round   (Gust Scatter = 0 damage)
Projected kill round:   ~2 (81/38=2.1)
Actual kill round:      3

Stamina pressure:       None
HP pressure:            None  (avg ~2 HP/hunter/round)
Breathing Turns taken:  0
Core mechanic fired:    Partial  (Gust Scatter fires, 0 threat; Dive lands once)
Monster STA at death:   ~12 / 16

Flags:
  1. ⚠️  AR 8 → 95% hit rates. No meaningful defense.
  2. ⚠️  Gust Scatter deals ZERO damage. Monster DPR from attacks only.
         Control identity creates zero HP or STA threat.
  3. ⚠️  Kill round 3 — below 4–5 target.
  4. HP 81 insufficient against ~38 DPR. Needs ~105+ for kill round 4–5.
────────────────────────────────────────────────
```

---

### URMINE — AR 12 | HP 92 | STA 17

**Hunter hit rates:** GS/Wand/Bow 75% | Ham 80%.
**Fury trigger at ≤50% HP = 46 HP. Fury: +2 dmg all attacks, -4 STA/turn drain, unlocks Spiked Rush.**
**Monster hit rates:** d20+5 vs AR 14 = 60% | vs AR 12 (Dodge) → 49%

**Round Trace:**
- R1 Hunter Phase: Full party surface. GS 0.75×10.5=7.88 | Ham 0.80×10.5=8.40 | Wand 0.75×7.5=5.63 | Bow 0.75×8.5=6.38 → **28.3 HP**. Burned applied (2.5/turn R2+).
- R1 Monster Phase: Swipe→GS 0.60×8.5=5.1 | Maul→Ham 0.60×10=6.0. STA: 17→15. HP: 92-28.3=**63.7** (69%).
- R2 Hunter Phase: GS 0.75×11.5=8.63 | Ham 0.80×10.5=8.40 | Wand 0.75×7.5+Burned2.5=8.13 | Bow 0.75×9.5+Focus0.75=7.69 → **32.8 HP**. Cumulative: ~65.1. Monster HP: **26.9** (29%) → **FURY TRIGGERS**
- R2 Monster Phase — FURY: Spiked Rush (3d6+3 avg 13.5, DEX DC 12): GS+Ham each 0.45×13.5+0.55×6.75=**9.79 HP** + 45% Prone. Swipe+Fury→Wand (Dodge): 0.49×12.5=**6.13 HP**. STA: 15-1-1-4=9. GS now 19.1 HP | Ham 16.2 HP.
- R3 Hunter Phase: Impact on Ham R3 → 2.40 cumulative. GS 0.75×12=9.0 | Ham 0.80×10.5=8.40 | Wand 0.75×7.5+2.5=8.13 | Bow 0.75×10.5=7.88 → **33.4 HP**. Monster HP: 26.9-33.4=**-6.5 → DEAD R3**

```
────────────────────────────────────────────────
MONSTER: URMINE  |  AR 12  HP 92  STA 17
────────────────────────────────────────────────
Hunter hit rate:        75–80%  (best AR in T1 alongside Kragal)
Party DPR (baseline):   ~30.5/round
Monster DPR (baseline): ~11/round pre-Fury | ~20/round in Fury
Projected kill round:   ~3 (92/30.5=3.0)
Actual kill round:      3

Stamina pressure:       Low  (60% hit rates below reaction threshold)
HP pressure:            Medium  (Fury Rush: ~10 HP to GS+Ham in one action)
Breathing Turns taken:  0
Core mechanic fired:    Partial  (Fury triggered, Rush used ONCE — dies next turn)
Monster STA at death:   ~9 / 17

Flags:
  1. ⚠️  Fury fires at R2 end, gets 1 action (Rush + Swipe), dies R3 Hunter Phase.
         Collapse window (Urmine hits STA 0, goes Prone — the design payoff)
         NEVER materializes. Unreachable at HP 92.
  2. ⚠️  Kill round 3 — below 4–5 target.
  3. HP needs ~115–125 for Fury to play out 2–3 turns before death.
  4. AR 12 ✓ — 75–80% hit rates are well-calibrated.
────────────────────────────────────────────────
```

---

### KRAGAL — AR 12 (+1 vs melee from below) | HP 81 | STA 16

**Hunter hit rates:** Melee vs AR 13 elevated: GS 70% | Ham 75%. Ranged vs AR 12: Wand/Bow 75%.
**Monster hit rates:** Melee d20+4 vs AR 14 = 55% | Ranged d20+5 vs AR 14 = 60% | vs AR 12 = 70% (Wand Dodge → 49%)

**Round Trace:**
- R1 Hunter Phase: Kragal elevated 20-40ft. GS+Ham can't reach. Wand 0.75×7.5=5.63 | Bow 0.75×8.5=6.38 → **12.0 HP** + Burned applied.
- R1 Monster Phase: Boomerang Barrage (2 STA, CD2). DEX DC 14 fail: GS 55% / Ham 55% / Wand 60% / Bow 45%. Catches GS+Ham+Wand: GS 0.55×12+0.45×6=**9.30 HP** + 55% Stagger | Ham **9.30 HP** + 55% Stagger | Wand 0.60×12+0.40×6=**9.60 HP** + 60% Stagger. Horn Throw→Bow: 0.60×7.5=**4.50 HP**. Total: 32.7 HP to party. STA: 16→13.
- R2 Hunter Phase: Stagger. GS acts 45%: 0.45×(0.70×11.2)=3.53 | Ham 0.45×(0.75×10.5)=3.54 | Wand 0.40×(0.75×7.5+2.5)=3.50 | Bow unaffected: 0.75×9.5+Focus=7.69 → **18.3 HP + Burned 2.5**. Cumulative: ~33.8. Monster HP: 81-33.8=**47.2** (58%).
- R2 Monster Phase: Barrage CD. 2× Horn Throw: GS 0.70×7.5=5.25 | Ham 0.70×7.5=5.25. STA: 13→11.
- R3 Hunter Phase: Stagger cleared, melee hunters reach elevation. GS vs AR 13: 0.70×12=8.40 | Ham 0.75×10.5=7.88 | Wand 0.75×7.5+2.5=8.13 | Bow 0.75×10.5+FocusMax=8.63 → **33.0 HP + Burned 2.5**. Cumulative: **69.3**. Monster HP: **11.7** (14%).
- R3 Monster Phase: ≤30% HP — Desperation Charge (2 STA): 2d6+2 avg 9 → GS 0.60×9=5.4 HP. STA: 11→9.
- R4 Hunter Phase: 11.7 HP. Any attack closes it. Full party ~33 → **DEAD R4**

```
────────────────────────────────────────────────
MONSTER: KRAGAL  |  AR 12  HP 81  STA 16
────────────────────────────────────────────────
Hunter hit rate:        70–80%  (elevation +1 vs melee; ranged 75%)
Party DPR (avg):        ~22/round  (stagger + elevation delay)
Monster DPR (avg):      ~15/round  (R1 Barrage front-loaded)
Projected kill round:   ~4 (81/22=3.7)
Actual kill round:      4  ✓

Stamina pressure:       Low  (Stagger disrupts but doesn't drain STA)
HP pressure:            Medium  (Barrage R1: ~9 HP each to GS/Ham/Wand simultaneously)
Breathing Turns taken:  0
Core mechanic fired:    Yes  (Barrage R1 + elevation bonus + Desperation Charge R3)
Monster STA at death:   ~9 / 16

Flags:
  1. Kill round 4 ✓
  2. Barrage extremely front-loaded — ~32 HP to party in R1, near-zero HP threat R2+.
  3. Stagger is strong tactical disruption (cuts R2 DPR ~50%) without STA pressure.
     Interesting asymmetry — worth preserving.
────────────────────────────────────────────────
```

---

## Master Comparison Table

| Monster | AR | HP | Kill Rd | Party DPR | Monster DPR | STA Press | HP Press | Core Fired | Status |
|---------|----|----|---------|-----------|-------------|-----------|----------|------------|--------|
| Palax | 9 | 81 | 4 | ~21.4 | ~14.7 | None | Medium | Yes (×2) | ✅ LOCKED (sim-006) |
| Tanuza | 8→**11** | 81→**92** | 3→**4** | ~38→**~24.8** | ~8→**~15** | None→**Low-Med** | None→**Med** | Partial→**Yes** | ✅ LOCKED (sim-004) |
| Urmine | 12 | 92→**120** | 3→**4** | ~30.5→**~35.6** | ~15→**~13.6** | Low→**None-Low** | Medium→**Low-Med** | Partial→**Yes** | ✅ LOCKED (sim-005) |
| Kragal | 12 | 81 | 4 | ~23.9 | ~21.1* | Low | Medium | Yes | ✅ LOCKED (sim-007) |
| Hollowmoth | 10→**13** | 70→**115** | 2→**4** | ~34→**~18** | ~6→**~10.8** | None→**Low** | None→**Med** | No→**Yes** | ✅ LOCKED (sim-003) |

```
TIER TARGET (from tier-calibration.md):
  Kill round target:   4–5
  AR range (median):   8–12
  HP range (median):   65–100
  Stamina pressure:    Low–Medium
  HP pressure:         Low–Medium
  Core mechanic:       Must fire at least once

IN-RANGE ✓:    Kragal (all metrics green)
LOCKED ✅:     Palax — AR 9 intentional (burrow = defense). Eruption fires TWICE (sim-006 correction).
LOCKED ✅:     Tanuza  — AR 11/13-airborne / HP 92 / Tailwhip Scatter / Tail Slam (DEX +1d6 height)
               Urmine  — HP 120 / Fury fires 2 turns / Hammer Impact Stun valid counterplay
               Hollowmoth — AR 13 / HP 115 / Spike Jab 3d8+3
```

---

## Outlier Analysis

**⚠️ TANUZA — ✅ RESOLVED (sim-004, 2026-03-18)**
~~Issue: Kill round 3, AR 8 (95% hit rates), Gust Scatter deals zero damage.~~
Fix applied: AR 11 (13 airborne), HP 92, Tailwhip Scatter (1d8+3 + push + Daze), Tail Slam (DEX +1d6 height), Glider's Evasion passive. Kill round 4 validated.

**⚠️ URMINE — ✅ RESOLVED (sim-005, 2026-03-18)**
~~Issue: HP 92 causes Fury to trigger at R2 end and get only 1 action before dying. Collapse window never visible.~~
Fix applied: HP 92→120. Fury fires R2, Rush delivers ~9.79 HP spike to frontliner, Swipe+Fury follows. Hammer Impact Stun neutralizes R3 (valid counterplay). Kill round 4 validated.

---

## Priority Queue

```
PRIORITY QUEUE
──────────────
1. Kragal    — LOCKED ✅ (sim-007) *Monster DPR 21.1 is front-loaded from R1 Barrage (32.7 HP burst); R2+ normalizes to ~10–15/round. Design-correct.
2. Palax     — LOCKED ✅ (sim-006)
3. Tanuza    — LOCKED ✅ (sim-004)
4. Urmine    — LOCKED ✅ (sim-005)
5. Hollowmoth — LOCKED ✅ (sim-003)
3. Tanuza    — LOCKED ✅ (sim-004)
4. Urmine    — LOCKED ✅ (sim-005)
5. Hollowmoth — LOCKED ✅ (sim-003)
```
