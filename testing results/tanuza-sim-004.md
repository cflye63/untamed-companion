# Sim Hunt — Tanuza (Redesigned) vs Party of 4 (Tier 1)

**Date:** 2026-03-18
**Mode:** Expected Value (deterministic)
**Hunter baseline:** HR 2 optimal builds
**Monster file:** `content/monsters/forest-cluster/tanuza.md`
**Sim context:** Post-redesign validation. Original Tanuza (sim-calibration) killed in round 3 with zero HP/STA pressure and 0-damage core ability. Redesigned with AR 11 (+2 airborne), HP 92, CON 7, Tailwhip Scatter (1d8+3 + push + Daze), Tail Slam (DEX-based, +1d6 height), Glider's Evasion.

---

## What Changed from Original

| Field | Original | Redesigned |
|-------|----------|------------|
| AR | 8 | **11** (grounded) / **13** (airborne) |
| HP | 81 | **92** (CON 7, 4P formula) |
| CON | 6 | **7** |
| STA | 16 | **17** |
| Claw Swipe | No rider | **Claw Rake: shift 5ft after attack** |
| Dive Slam | STR d20+4, +1d4 height | **Tail Slam: DEX d20+5, +1d6 height, DC 12 Prone** |
| Gust Scatter | 0 damage push | **Tailwhip Scatter: 1d8+3 + push + Daze (STR DC 13)** |
| Defense | None while airborne | **Glider's Evasion: +2 AR airborne** |
| Behavior | Generic dive | **Stay airborne, loop: Glide→Slam→Rake→re-elevate** |

---

## Pre-Simulation Math

### Hunter hit chance vs Tanuza

| Hunter | vs AR 13 (airborne) | vs AR 11 (grounded) |
|--------|---------------------|---------------------|
| GS d20+6 | (21−7)/20 = **70%** | (21−5)/20 = **80%** |
| Ham d20+7 | (21−6)/20 = **75%** | (21−4)/20 = **85%** |
| Wand d20+6 | **70%** | **80%** |
| Bow d20+6 | **70%** | **80%** |

Tanuza stays airborne per behavior → AR 13 modeled for most of fight.

### Tanuza hit chance vs hunters

| Target | Base hit% | After reaction |
|--------|-----------|----------------|
| GS AR 14 | 60% | No Parry (≤60%) → 60% lands |
| Ham AR 14 | 60% | No reaction → 60% lands |
| Wand AR 12 | 70% | Dodge: 0.70²=**49%** |
| Bow AR 14 | 60% | No Dodge (≤60%) → 60% lands |

### Tailwhip Scatter STR DC 13 fail rates

| Hunter | STR mod | Fail% | Daze% |
|--------|---------|-------|-------|
| GS | +4 | **40%** | 40% |
| Ham | +5 | **35%** | 35% |
| Wand | +1 | **55%** | 55% |
| Bow | +1 | **55%** | 55% |

### Tail Slam from 20+ ft

- adv_hit_chance vs prone = 1−(1−0.60)² = **84%**
- Damage with height: 1d10+3+1d6 avg = **12**
- Expected per hit: 0.60×12 = 7.20 (normal) | 0.84×12 = 10.08 (prone target)

---

## Round Log

### Round 1

**Hunter Phase** — Tanuza elevated 20-30ft, airborne (AR 13). GS+Ham cannot reach.

| Hunter | STA | Action | Hit% | Exp Dmg | STA After |
|--------|-----|--------|------|---------|-----------|
| GS | 9 | Cannot reach — elevated | — | 0 | 9 |
| Ham | 9 | Cannot reach — elevated | — | 0 | 9 |
| Wand | 8 | Attack vs AR 13 + Fire Channel | 70% | 5.25 | 6 |
| Bow | 9 | Attack vs AR 13 (Focus 0) | 70% | 5.95 | 8 |

**Party damage: 11.2** | Burned applied (2.5/turn from R2)

**Monster Phase** — STA 17. Full opening burst: Glide (1) + Tailwhip Scatter (2) + Tail Slam (1) + Claw Rake (1) = 5 STA. STA 17→**12**.

**Tailwhip Scatter** (15ft arc, STR DC 13) → GS+Ham+Wand clustered:

| Hunter | Fail% | Exp HP dmg | Daze% |
|--------|-------|------------|-------|
| GS | 40% | 0.40×7.5+0.60×3.75=**5.25** | 40% |
| Ham | 35% | 0.35×7.5+0.65×3.75=**5.06** | 35% |
| Wand | 55% | 0.55×7.5+0.45×3.75=**5.81** | 55% |

**Tail Slam** (from 20+ ft, height bonus) → Bow: 0.60×12=**7.20 HP**. Prone: STR +1 vs DC 12 → **50% Prone**.
**Claw Rake** → GS: 0.60×7.5=**4.50 HP**. Tanuza shifts 5ft.

**End of Round 1:** Monster HP **80.8** | GS 24.25 / Ham 26.94 / Wand 24.19 / Bow 24.80
STA: GS 9 / Ham 9 / Wand 6 / Bow 8
Conditions: GS 40% Dazed | Ham 35% Dazed | Wand 55% Dazed | Bow 50% Prone

---

### Round 2

**Hunter Phase** — Daze from R1 Scatter active. Tanuza re-elevated, airborne (AR 13).

| Hunter | Daze% | Acts% | Exp Dmg | STA After |
|--------|-------|-------|---------|-----------|
| GS | 40% | 60% | 0.60×(0.70×10.5)=**4.41** | ~8.4 |
| Ham | 35% | 65% | 0.65×(0.75×10.5)=**5.12** (Impact: +0.49) | ~8.3 |
| Wand | 55% | 45% | 0.45×(0.70×7.5)+Burned2.5=**4.86** | ~5.5 |
| Bow | 0% | 100% | 0.70×9.5+Focus1×0.70=**7.35** | 7 |

**Party damage: 21.74** + Burned **2.5** = **24.24**
Monster HP: 80.8−24.24 = **56.56**

**Monster Phase** — STA 12. Scatter on CD. Bow 50% Prone → prioritize.

- **Tail Slam** → Bow (height): prone adv 50% / normal 50%:
  0.50×(0.84×12) + 0.50×(0.60×12) = 5.04+3.60 = **8.64 HP**. 25% re-Prone.
- **Claw Rake** → Wand (Dodge applied): 0.70²×7.5 = 0.49×7.5 = **3.68 HP**. Wand STA −1 (→4.5).
- **Glide** (1 STA) — repositions to elevation.
- STA: 12−1(Glide)−1(Tail)−1(Rake) = **9**

**End of Round 2:** Monster HP **56.56** | GS 24.25 / Ham 26.94 / Wand 20.51 / Bow 16.16
STA: GS ~8 / Ham ~8 / Wand ~4.5 / Bow 7

⚠️ Bow at 50% HP. Wand at 68% HP. Tanuza consistently exploiting softest hunters.

---

### Round 3

**Hunter Phase** — Daze cleared. All act. Tanuza airborne (AR 13).

| Hunter | STA | Action | Exp Dmg | STA After |
|--------|-----|--------|---------|-----------|
| GS | 8 | Attack 70% + Momentum | **7.84** | 7 |
| Ham | 8 | Attack 75% + Impact (~1.05 cumul.) | **7.88** | 7 |
| Wand | 4.5 | Attack 70% + Burned | 0.70×7.5+2.5=**7.75** | 3.5 |
| Bow | 7 | Attack 70% + Focus 2 | 0.70×9.5+1.40=**8.05** | 6 |

**Party damage: 31.52** + Burned **2.5** = **34.02**
Monster HP: 56.56−34.02 = **22.54** (24%) → **BELOW 30% — Retreat fires**

**Monster Phase** — STA 9. Scatter CD cleared. Retreat but fires parting burst.

- **Tailwhip Scatter** (2 STA, from air) → GS+Wand (2 clustered):
  GS: **5.25 HP** + 40% Daze | Wand: **5.81 HP** + 55% Daze
- **Tail Slam** (1 STA, height) → Ham: 0.60×12=**7.20 HP**. Prone: STR +5 vs DC 12 → **30% Prone**.
- **Glide** (1 STA) — escape to max elevation.
- STA: 9−2(Scatter)−1(Tail)−1(Glide) = **5** → stall threshold crossed

**End of Round 3:** Monster HP **22.54** | GS 19.0 / Ham 19.74 / Wand 14.70 / Bow 16.16
STA: GS ~7 / Ham ~7 / Wand ~3.5 / Bow 6
Conditions: GS 40% Dazed | Wand 55% Dazed | Ham 30% Prone

⚠️ Wand at 49% HP, STA 3.5 — one more Dodge away from Breathing threshold.

---

### Round 4

**Hunter Phase** — Tanuza stalling at STA 5, elevated (AR 13). R3 Daze active.

| Hunter | Daze% | Acts% | Exp Dmg | STA After |
|--------|-------|-------|---------|-----------|
| GS | 40% | 60% | 0.60×(0.70×11.5)=**4.94** | ~6.4 |
| Ham | 0% | 100% | 0.75×10.5 (Impact ~1.80)=**7.88** | ~5.4 |
| Wand | 55% | 45% | 0.45×(0.70×7.5)+2.5=**3.86** | ~2.5 |
| Bow | 0% | 100% | 0.70×9.5+Focus3×0.70=**8.75** | 5 |

**Party damage: 25.43** + Burned **2.5** = **27.93**

Monster HP: 22.54−27.93 = **−5.39 → DEAD**

**End of Round 4:** Monster HP **0 / 92** | STA: GS ~6 / Ham ~5.4 / Wand ~2.5 / Bow 5

---

## Result

**Party Victory — Round 4.**

---

## Balance Metrics

| Metric | Original (sim-calib) | Redesigned (sim-004) | Target |
|--------|----------------------|----------------------|--------|
| Kill round | 3 | **4** ✓ | 4–5 |
| Party DPR (avg) | ~38 | **~24.8** | ~25–30 |
| Monster DPR (avg) | ~8 | **~15** | ~10–15 |
| HP pressure | None | **Medium (50–57% HP intact)** ✓ | Low–Med |
| Stamina pressure | None | **Low–Medium (Wand STA 2.5)** ✓ | Low–Med |
| Core mechanic fired | Partial | **Yes (Scatter R1+R3, height bonus both slams)** ✓ | Yes |
| Daze disruption | No | **Yes (R2+R4 DPR cut ~40-50%)** ✓ | — |
| AR feel | 95% trivial | **70% airborne / 80% grounded** ✓ | — |
| Avg hunter HP at kill | ~92% | **52.4%** ✓ | — |

**Hunter HP at kill:** GS 19.0 (56%) | Ham 19.74 (62%) | Wand 14.7 (49%) | Bow 16.16 (50%)

---

## Flags

### FLAG 1 — R1 burst established threat without spiking ✓
Scatter+Tail Slam+Rake dealt ~22.8 HP across all four hunters in one monster turn (~5–7 HP each). Significant opening presence. No KO risk at T1. Good dramatic entry for a creature that should feel dangerous immediately.

### FLAG 2 — Daze is the fight's defining mechanic ✓
Scatter landing Daze on 2–3 hunters cut party DPR by ~40–50% in R2 and again in R4. Hunters scrambled around impairment rather than focus-firing. The control identity was completely absent from the original. Now it's the core tactical problem.

### FLAG 3 — Tail Slam height bonus consistent ✓
Airborne-first behavior means Tail Slam fires from 20+ ft on nearly every use. Height bonus avg 12 vs avg 8.5 grounded — the positioning mechanic is rewarding the creature's intended playstyle.

### FLAG 4 — Wand pressure pattern ✓
Wand ended at STA 2.5, would Breathe R5. Same Dodge-drain asymmetry as Hollowmoth. Acceptable — the Tanuza punishes soft targets systematically.

### FLAG 5 — Stamina tempo forces retreat naturally ✓
STA costs: R1 (5) → R2 (3) → R3 (4) → STA 5 = stall. No explicit Stamina Tax needed; the Glide cost + full kit spend creates the same pressure. Tanuza collapses its own aggression at the right time.

---

## Comparison to Original

| | sim-calib (original) | sim-004 (redesigned) | Target |
|--|----------------------|----------------------|--------|
| Kill round | 3 | **4** ✓ | 4–5 |
| Core ability fired | No damage | **Yes — damage + Daze** ✓ | Yes |
| AR feel | 95% trivial | **70% airborne** ✓ | ~70–80% |
| HP pressure | None | **Medium** ✓ | Low–Med |
| Design identity | Generic glider | **Aerial tail-slam skirmisher** ✓ | — |

**Verdict: Tanuza redesign validated. AR 11 / AR 13 airborne / HP 92 / Tailwhip Scatter / Tail Slam (DEX, +1d6 height) is the confirmed envelope. Locked.**

---

## Next Steps

- [ ] Update sim-calibration results to reflect Tanuza validated
- [ ] Move to Urmine: HP buff (115–125) + validate Fury window extends to R4-5
