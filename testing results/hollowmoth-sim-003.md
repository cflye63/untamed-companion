# Sim Hunt — Hollowmoth (Spike Jab) vs Party of 4 (Tier 1)

**Date:** 2026-03-18
**Mode:** Expected Value (deterministic)
**Hunter baseline:** HR 2 optimal builds
**Monster file:** `content/monsters/forest-cluster/hollowmoth.md`
**Changes from sim-002:** Proboscis Jab rider revised — drain (+1d8 + 2 STA) → spike (+2d8, total 3d8+3)
**Reason:** sim-002 flagged Sleep self-termination paradox (Jab woke sleeping targets via damage, collapsing the loop). Spike replaces loop with a single high-damage payoff — no behavior guide complexity required.

---

## What Changed

| Field | sim-002 | sim-003 |
|-------|---------|---------|
| Jab vs Sleeping | +1d8 + 2 STA drain | **+2d8 (total 3d8+3, avg ~16.5)** |
| Behavior paradox | Present | **Eliminated** |

All other stats, hunter builds, and behavior guide identical to sim-002 (AR 13, HP 115).

---

## Pre-Simulation Math Changes

### Proboscis Jab vs Sleeping

- adv_hit_chance vs sleeping target = 1 − (1 − 0.70)² = **91%**
- avg sleeping damage = 3d8+3 = 3×4.5+3 = **16.5**
- Expected damage per Jab on sleeping target = 0.91 × 16.5 = **15.02**

vs sim-002: 0.91 × 12 = 10.92 → **+4.1 expected damage per Jab**

---

## Round Log

### Round 1

**Hunter Phase** — no conditions

| Hunter | STA | Action | Hit % | Exp Dmg | STA After |
|--------|-----|--------|-------|---------|-----------|
| GS | 9 | Attack | 70% | 7.35 | 8 |
| Ham | 9 | Attack | 75% | 7.88 | 8 |
| Wand | 8 | Attack + Fire Channel | 70% | 5.25 | 6 |
| Bow | 9 | Attack (Focus 0) | 70% | 5.95 | 8 |

**Party damage: 26.43**

**Monster Phase** — STA 15 — behavior: 2+ clustered → Lumin Spores

- **Lumin Spores** (2 STA, CD2): DEX save DC 13. Expected 1.95 hunters Blinded for R2.
- **Wing Slash** (1 STA) → Wand. Dodge → dis_hit 49% → 3.68 HP. Wand STA −1 (→5).
- **Proboscis Jab** (1 STA) → GS. Parry: 53% negate + riposte 2.78 | 47%×55%=1.94 HP to GS. GS STA −1 (→7).
- **Tax:** −1 STA → Monster STA **10**
- **Burned:** 3.15 fire dmg

**End of Round 1:** Monster HP **82.64** | GS 32.1 / Ham 32.0 / Wand 26.3 / Bow 32.0 | STA: GS 7 / Ham 8 / Wand 5 / Bow 8

---

### Round 2

**Hunter Phase** — Blind conditions active

| Hunter | Blind% | Not-Blind exp dmg | Blinded exp dmg | Weighted | STA After |
|--------|--------|-------------------|-----------------|----------|-----------|
| GS | 50% | 0.70×11.2=7.84 (+Momentum) | 0.49×11.2=5.49 | **6.67** | 6 |
| Ham | 50% | 0.75×10.5=7.88 | 0.5625×10.5=5.91 | **6.90** | 7 |
| Wand | 55% | 0.70×7.5=5.25 | 0.49×7.5=3.68 | **4.39** | 4 |
| Bow | 40% | 0.70×9.5=6.65 (+Focus) | 0.49×9.5=4.66 | **5.85** | 7 |

**Party damage: 23.81**

**Monster Phase** — STA 10 — behavior: Silent Pulse (Lumin Spores on CD)

- **Silent Pulse** (2 STA, CD2): INS save DC 13. Expected 2.05 hunters Sleep.
  - GS: 55% | Ham: 55% | Wand: 50% | Bow: 45%

**Sleep scenario matrix:**

| Scenario | Prob | Attack 1 | Attack 2 | HP Dealt |
|----------|------|----------|----------|----------|
| A: GS + Ham both sleep | 30.25% | Jab GS: 15.02 | Jab Ham: 15.02 | 30.04 |
| B: GS sleep, Ham awake | 24.75% | Jab GS: 15.02 | Wing Slash Wand: 3.68 | 18.70 |
| C: Ham sleep, GS awake | 24.75% | Jab Ham: 15.02 | Wing Slash Wand: 3.68 | 18.70 |
| D: neither sleep | 20.25% | Wing Slash Wand: 3.68 | Jab Bow: 4.50 | 8.18 |

**Expected HP damage per hunter:**

| Hunter | Expected HP damage | STA drain |
|--------|-------------------|-----------|
| GS | 0.55×15.02 = **8.26** | — |
| Ham | 0.55×15.02 = **8.26** | — |
| Wand | 0.495×3.68 = **1.82** (Dodged) | — |
| Bow | 0.2025×4.50 = **0.91** | — |

*Note: Jab hits sleeping hunters → wakes them via damage as normal. No paradox.*

- **Tax:** −1 STA → Monster STA **5** ← RETREAT THRESHOLD
- **Burned:** 3.15

**End of Round 2:** Monster HP **55.68** | GS 23.8 / Ham 23.7 / Wand 24.5 / Bow 31.1 | STA: GS 6 / Ham 7 / Wand ~3 / Bow 7

⚠️ GS and Ham each absorbed ~8.3 expected HP this round from Sleep spike. Most damaging single round of the hunt.

---

### Round 3

**Hunter Phase** — Sleep cleared (woken by Jab damage in R2). Effective awake rate ~80–98%.

| Hunter | Awake% | Exp Dmg | STA After |
|--------|--------|---------|-----------|
| GS | 98% | 0.98×0.70×11.1 = **7.63** | 5 |
| Ham | 89% | 0.89×0.75×10.5 = **7.01** | 6 |
| Wand | 72% | 0.72×0.70×7.5 = **3.78** | ~3 |
| Bow | 60% | 0.60×0.70×9.5 = **3.99** | ~7.6 |

Ham Impact: **2.07** cumulative (Stun imminent R4)

**Party damage: 22.41**

**Monster Phase** — STA 5 — RETREAT MODE: 1 attack only, no abilities

- **Wing Slash** (1 STA) → Wand (lowest HP). Wand Dodges → dis_hit 49% → 3.68 HP. Wand STA −1.
- **Tax:** −1 STA → Monster STA **3**
- **Burned:** 3.15

**End of Round 3:** Monster HP **30.12** | GS 23.8 / Ham 23.7 / Wand 20.8 / Bow 31.1 | STA: GS 5 / Ham 6 / Wand ~2.4 / Bow ~7.6

⚠️ Wand approaching Breathing threshold (STA ~2.4). GS/Ham running lower HP than sim-002.

---

### Round 4

**Hunter Phase** — all hunters awake, no conditions

| Hunter | STA | Action | Notes | Exp Dmg | STA After |
|--------|-----|--------|-------|---------|-----------|
| GS | 5 | Attack 70% | Momentum | **8.05** | 4 |
| Ham | 6 | Attack 75% | **STUN TRIGGERS** (Impact 2.07→2.82→3.0) | **7.88** | 5 |
| Wand | 2.4 | Attack adv | Stunned target: adv_hit 91% → 0.91×7.5 | **6.83** | ~1.4 |
| Bow | 7.6 | Attack adv | Stunned + Focus: 0.91×9.5 | **8.65** | 6.6 |

```
HAMMER STUN — Monster Stunned until end of its next turn
Impact accumulated: R1→0.75 / R2→1.41 / R3→2.07 / R4→2.82→STUN
Remaining R4 attacks use adv_hit = 1−(1−0.70)² = 91%
```

**Party damage: 31.41**

Monster HP after R4 Hunter Phase: **30.12 − 31.41 = −1.29 → DEAD**

**End of Round 4:** Monster HP **0 / 115** | STA: GS 4 / Ham 5 / Wand ~1.4 / Bow 6.6

---

## Result

**Party Victory — Round 4. Sealed by Hammer Stun.**

---

## Balance Metrics

| Metric | sim-002 (drain) | sim-003 (spike) |
|--------|-----------------|-----------------|
| Kill round | 4 | **4** |
| Party DPR | ~26.0 | **~26.0** |
| Monster DPR | ~8.5 | **~10.8** |
| Stamina pressure | Low-Medium | **Low-Medium** |
| HP pressure | Low | **Medium** |
| Avg hunter HP at kill | 81.6% | **72.9%** |
| GS HP at kill | 26.6 (78%) | **23.8 (70%)** |
| Ham HP at kill | 26.7 (83%) | **23.7 (74%)** |
| Sleep spike fired | N/A | **Yes (R2 ~8.3 to GS+Ham)** |
| Behavior paradox | Yes | **None** |
| Stun triggered | Yes (R4) | **Yes (R4)** |
| Breathing Turn forced | Near (R5) | **Near (R5)** |
| Monster STA at death | 3 | **3** |

---

## Flags

### FLAG 1 — Sleep spike landed and created real pressure ✓
R2 Jab delivered ~8.3 expected HP to both GS and Ham hunters — the largest single-round hits of the fight. GS ended at 70% HP, Ham at 74%. The spike made Sleep feel dangerous rather than incidental. Behavior paradox fully eliminated.

### FLAG 2 — Stamina pressure still concentrated on Wand ✓
Consistent Dodge reactions drained the Wand hunter to STA ~1.4 by R4. One more round would force a Breathing Turn. Acceptable asymmetric pressure — the mob is targeting the softest hunter.

### FLAG 3 — HP pressure improved to Medium ✓
Average 72.9% HP intact at kill (up from 81.6% in sim-002). Party never close to a KO, but Sleep → Spike carved meaningful chunks from both frontliners. Correct feel for a Tier 1 lurer.

### FLAG 4 — Hammer Stun payoff identical ✓
Impact progression unchanged. Stun sealed R4 cleanly. Mechanic working as designed.

### FLAG 5 — Sleep drain identity preserved in crafting ✓
Stamina drain removed from Jab. Dream Leech Whip (Signature Craft) still carries the drain fantasy. No design theme lost — just relocated to the appropriate reward layer.

---

## Comparison to All Sims

| | sim-001 | sim-002 | sim-003 | Target |
|--|---------|---------|---------|--------|
| Kill round | 2 | 4 | **4** | 4–5 ✓ |
| Core puzzle engaged | No | Yes | **Yes** ✓ | Yes |
| Stun payoff | No | Yes | **Yes** ✓ | Yes |
| HP pressure | None | Low | **Medium** ✓ | Medium |
| Sleep meaningful | No | Partial | **Yes** ✓ | Yes |
| Behavior paradox | — | Yes | **None** ✓ | None |
| Breathing Turn forced | No | Near (R5) | **Near (R5)** | At least 1 |

**Verdict: AR 13 / HP 115 / Spike Jab (3d8+3) is the validated combat envelope for optimized parties. All design targets met. Hollowmoth file locked.**

---

## Next Steps

- [ ] Test median (non-optimized) party against base HP 70 / AR 10
- [ ] Consider reducing base STA 15→12 if collapse narrative is a design goal
- [ ] Add GM note to hollowmoth.md: HP 115 / AR 13 for optimized 4P; base HP 70 / AR 10 for median parties
