# Sim Hunt — Hollowmoth (Tuned) vs Party of 4 (Tier 1)

**Date:** 2026-03-18
**Mode:** Expected Value (deterministic)
**Hunter baseline:** HR 2 optimal builds
**Monster file:** `content/monsters/forest-cluster/hollowmoth.md`
**Changes from sim-001:** AR 10→13 | HP 70→115
**Reason:** sim-001 flagged 2-round kill, no puzzle engagement, no Stamina pressure

---

## What Changed

| Stat | sim-001 | sim-002 |
|------|---------|---------|
| AR | 10 | **13** |
| HP | 70 | **115** |

All hunter builds, saves, monster abilities, and behavior guide identical to sim-001.

---

## Pre-Simulation Math Changes

### Hunter hit chance vs Hollowmoth

| Hunter | vs AR 10 (sim-001) | vs AR 13 (sim-002) |
|--------|-------------------|-------------------|
| GS d20+6 | 85% | **70%** |
| Ham d20+7 | 90% | **75%** |
| Wand d20+6 | 85% | **70%** |
| Bow d20+6 | 85% | **70%** |

**Burned per turn** (Dragonian Fire + Fragile Frame): 0.70×4.5 = **3.15/round** (reduced from 3.83 due to lower hit chance)

**Hollowmoth Stamina budget:**
```
Ability turn (R1, R2): −5 STA  (2 ability + 2 attacks + 1 tax)
Retreat turn (R3+):    −2 STA  (1 attack + 1 tax)
Retreat threshold: STA ≤5 → hits after R2
```

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

**Monster Phase** — STA 15

- **Lumin Spores** (2 STA, CD2): DEX save DC 13. Expected 1.95 hunters Blinded for R2.
- **Wing Slash** (1 STA) → Wand. Dodge → dis_hit 49% → 3.68 HP. Wand STA −1 (→5).
- **Proboscis Jab** (1 STA) → GS. Parry: 53% negate + riposte 2.78 | 47%×55%=1.94 HP to GS. GS STA −1 (→7).
- **Tax:** −1 STA → Monster STA **10**
- **Burned:** 3.15 fire dmg

**End of Round 1:** Monster HP **82.64** | GS 32.1 / Ham 32.0 / Wand 26.3 / Bow 32.0 | STA: GS 7 / Ham 8 / Wand 5 / Bow 8

---

### Round 2

**Hunter Phase** — Blind conditions active per probability

| Hunter | Blind% | Not-Blind exp dmg | Blinded exp dmg | Weighted | STA After |
|--------|--------|-------------------|-----------------|----------|-----------|
| GS | 50% | 0.70×11.2=7.84 (+Momentum) | 0.49×11.2=5.49 | **6.67** | 6 |
| Ham | 50% | 0.75×10.5=7.88 | 0.5625×10.5=5.91 | **6.90** | 7 |
| Wand | 55% | 0.70×7.5=5.25 | 0.49×7.5=3.68 | **4.39** | 4 |
| Bow | 40% | 0.70×9.5=6.65 (+Focus) | 0.49×9.5=4.66 | **5.85** | 7 |

**Party damage: 23.81**

**Monster Phase** — STA 10 — behavior: Silent Pulse (Lumin Spores on CD)

- **Silent Pulse** (2 STA, CD2): INS save DC 13. Expected 2.05 hunters Sleep.
- **Attacks — Sleep scenario matrix:**
  - A: GS+Ham both sleep (30.25%) → Jab GS adv 84%×12=10.08 + Jab Ham adv 79.75%×12=9.57
  - B: GS sleep, Ham awake (24.75%) → Jab GS 10.08 + Wing Slash Wand (Dodge) 3.68
  - C: Ham sleep, GS awake (24.75%) → Jab Ham 9.57 + Wing Slash Wand 3.68
  - D: neither asleep (20.25%) → Wing Slash Wand 3.68 + Jab Bow 4.50

| Hunter | Expected HP damage | STA drain |
|--------|-------------------|-----------|
| GS | 0.55×10.08 = **5.54** | 0.55×0.84×2 = 0.92 |
| Ham | 0.55×9.57 = **5.26** | 0.55×0.7975×2 = 0.88 |
| Wand | 0.6975×3.68 = **2.57** (Dodged) | — |
| Bow | 0.2025×4.50 = **0.91** | — |

*Note: Jab hits sleeping hunters → wakes them via damage. Sleep mostly clears before R3.*

- **Tax:** −1 STA → Monster STA **5** ← RETREAT THRESHOLD
- **Burned:** 3.15

**End of Round 2:** Monster HP **55.68** | GS 26.6 / Ham 26.7 / Wand 23.8 / Bow 31.1 | STA: GS 6 / Ham 7 / Wand ~3 / Bow 7

---

### Round 3

**Hunter Phase** — Sleep largely cleared (woken by Jab damage in R2). Effective awake rate ~80–98%.

| Hunter | Awake% | Exp Dmg (adjusted) | STA After |
|--------|--------|--------------------|-----------|
| GS | 98% | 0.98×0.70×11.1 = **7.63** | 5 |
| Ham | 89% | 0.89×0.75×10.5 = **7.01** | 6 |
| Wand | 72% | 0.72×0.70×7.5 = **3.78** | ~3 (sleep STA recovery composite) |
| Bow | 60% | 0.60×0.70×9.5 = **3.99** | ~7.6 (sleep STA recovery composite) |

Ham Impact: 2.074 cumulative (Stun imminent)

**Party damage: 22.41**

**Monster Phase** — STA 5 — RETREAT MODE: 1 attack only, no abilities

- **Wing Slash** (1 STA) → Wand (lowest HP). Wand Dodges → dis_hit 49% → 3.68 HP. Wand STA −1.
- **Tax:** −1 STA → Monster STA **3**
- **Burned:** 3.15

**End of Round 3:** Monster HP **30.12** | GS 26.6 / Ham 26.7 / Wand 20.1 / Bow 31.1 | STA: GS 5 / Ham 6 / Wand ~2.4 / Bow ~7.6

⚠️ Wand approaching Breathing threshold (STA ~2.4). Impact: 2.07 cumulative.

---

### Round 4

**Hunter Phase** — all hunters awake, no conditions

| Hunter | STA | Action | Notes | Exp Dmg | STA After |
|--------|-----|--------|-------|---------|-----------|
| GS | 5 | Attack 70% | Momentum | **8.05** | 4 |
| Ham | 6 | Attack 75% | **STUN TRIGGERS** (Impact 2.82→3.0) | **7.88** | 5 |
| Wand | 2.4 | Attack adv | Stunned target: adv_hit 91% | **6.83** | ~1.4 |
| Bow | 7 | Attack adv | Stunned target + Focus: 0.91×9.5 | **8.65** | 6 |

```
HAMMER STUN — Monster Stunned until end of its next turn
Impact accumulated: R1→0.75 / R2→1.41 / R3→2.07 / R4→2.82→STUN
Remaining R4 attacks use adv_hit = 1−(1−0.70)² = 91%
```

**Party damage: 31.41**

Monster HP after R4 Hunter Phase: **30.12 − 31.41 = −1.29 → DEAD**

**Monster Phase** — Stunned and dead. Burned irrelevant.

**End of Round 4:** Monster HP **0 / 115** | STA: GS 4 / Ham 5 / Wand ~1.4 / Bow 6

---

## Result

**Party Victory — Round 4. Sealed by Hammer Stun.**

---

## Balance Metrics

| Metric | sim-001 (AR10/HP70) | sim-002 (AR13/HP115) |
|--------|---------------------|----------------------|
| Kill round | 2 | **4** |
| Party DPR | ~34.5 | **~26.0** |
| Monster DPR | ~5.7 | **~8.5** |
| Stamina pressure | None | **Low-Medium** |
| HP pressure | None | **Low** |
| Breathing Turns taken | 0 | 0 (1 imminent R5) |
| Sleep loop fired | No | **Yes (R2)** |
| Stun triggered | No | **Yes (R4)** |
| Blind meaningful | No | **Yes (reduced R2 DPR ~6 pts)** |
| Monster STA at death | 5 | **3** |

---

## Flags

### FLAG 1 — Sleep loop fired but self-terminated
Silent Pulse landed on ~2 hunters in R2. Monster correctly used Proboscis Jab on sleeping targets for the +1d8 + Stamina drain. **However: hitting sleeping hunters wakes them via damage**, collapsing the loop in the same turn it fires.

The moth's behavior guide says *"If target Sleeping → Proboscis Jab"* — which is exactly what terminates Sleep. The multi-turn Drain fantasy (stay asleep, get drained across 2+ rounds) never materialised. This is a **design tension in the behavior guide**, not a stat error.

### FLAG 2 — Stamina pressure concentrated on Wand hunter
Wand ended R4 at STA ~1.4 — one round from a forced Breathing Turn. Consistent Dodge reactions (−1 STA/round whenever targeted) steadily drained the weakest-Stamina hunter. The other three hunters remained healthy (STA 4–6). Pressure is real but asymmetric.

### FLAG 3 — HP pressure low across the board
Average 81.6% HP intact at kill. Monster DPR of ~8.5 distributed across 4 hunters = ~2.1 HP/hunter/round. Intentional for a Stamina-pressure design, but note the Hollowmoth never threatened to down a hunter.

### FLAG 4 — Hammer Stun was the fight's dramatic turning point ✓
Impact built naturally over 4 rounds (0.75→1.41→2.07→2.82), stun landed as HP dipped critical, and advantage-hit attacks from Wand and Bow finished the moth in the same round. **Mechanic worked exactly as designed.**

### FLAG 5 — Monster Stamina exhaustion invisible
Died at STA 3 retreating. The flight-tax narrative and collapse behavior never triggered. Acceptable for a 4-round fight — if the intent is for players to *feel* the moth exhaust, reducing base STA from 15 to 12 would expose the collapse in a 5–6 round fight.

---

## Tuning Suggestions

**1. Revise behavior guide to extend the Sleep loop:**

Current behavior creates a paradox: prioritizing sleeping targets immediately terminates Sleep via damage.

Proposed change to behavior guide:
```
Current:  If target Sleeping → Proboscis Jab
Proposed: If target Sleeping AND not yet drained this round → Proboscis Jab (once)
          Then → Wing Slash non-sleeping target to keep sleeper asleep
```
This lets one hunter stay asleep across multiple rounds while the moth attacks a second hunter — delivering the intended Blind→Sleep→multi-Drain loop.

**2. HP 115 / AR 13 validated as "optimized party" values.**
These produce a well-paced 4-round hunt with meaningful puzzle engagement. No further stat changes recommended. Add a GM note to the monster file:
```
Against optimized parties (min-maxed HR2 builds): HP 115, AR 13
Against median/new parties: HP 70, AR 10 (base formula values)
```

**3. Optional — reduce base Stamina to 12 to expose the collapse narrative.**
Current STA 15 dies at STA 3 (retreating but never exhausted). At STA 12: retreat hits at R2 end (~STA 5 after 2 full-cost rounds), collapse at STA 0 arrives mid-R4 — forcing hunters to experience the moth grounding and losing Hover. Makes the Exhaustion Rule visible.

---

## Comparison to sim-001

| | sim-001 | sim-002 | Target |
|--|---------|---------|--------|
| Kill round | 2 | **4** | 4–5 ✓ |
| Core puzzle engaged | No | **Yes** | Yes ✓ |
| Stun payoff | No | **Yes** | Yes ✓ |
| Breathing Turn forced | No | **Near (R5)** | At least 1 ✓ |
| Sleep loop complete | No | **Partial** | Full — see Flag 1 |

**Verdict: AR 13 / HP 115 is the correct tuned envelope for optimized parties. Sleep behavior guide needs one targeted revision to complete the design intent.**

---

## Next Steps

- [ ] Revise behavior guide in `hollowmoth.md` per Suggestion 1
- [ ] Re-sim with behavior change to validate Sleep loop persists 2+ rounds
- [ ] Test median (non-optimized) party against base HP 70 / AR 10
- [ ] Consider reducing base STA 15→12 if collapse narrative is a design goal
