# Sim Hunt — Hollowmoth vs Party of 4 (Tier 1)

**Date:** 2026-03-18
**Mode:** Expected Value (deterministic)
**Hunter baseline:** HR 2 optimal builds
**Monster file:** `content/monsters/forest-cluster/hollowmoth.md`

---

## Party Roster

| Hunter | Race | Weapon | AR | HP | STA | Attack | Avg Hit Dmg | React |
|--------|------|--------|----|----|-----|--------|-------------|-------|
| A | Human | Greatsword | 14 | 34 | 9 | d20+6 | 10.5 | Parry |
| B | Trolian (Highland) | Hammer | 15* | 32 | 9 | d20+7 | 10.5 | None |
| C | Dragonian (Fire) | Wand | 12 | 30 | 8 | d20+6 | 7.5 | Dodge |
| D | Thalorim | Bow | 14 | 32 | 9 | d20+6 | 8.5 | Dodge |

*Trolian Anchored Frame: +1 AR when not moving

### Stat Builds

**Human Greatsword**
- STR 9(+4) | CON 7(+3) | DEX 4(+2) | INT 3(+1) | INS 3(+1) | CHA 3(+1)
- Bonuses: Tribal Warrior +2 STR +1 CON / GS +1 STR +1 CON / Human +1 STR
- Save DC 16 | Weapon: 1d12+4

**Trolian Hammer**
- STR 10(+5) | CON 6(+3) | DEX 4(+2) | INT 3(+1) | INS 3(+1) | CHA 3(+1)
- Bonuses: Tribal Warrior +2 STR +1 CON / Hammer +2 STR / Trolian +1 STR
- Save DC 17 | Weapon: 1d10+5

**Dragonian Wand (Fire lineage)**
- INT 9(+4) | INS 5(+2) | CON 5(+2) | CHA 4(+2) | STR 3(+1) | DEX 3(+1)
- Bonuses: Scholar +2 INT +1 INS / Wand +1 INT +1 CHA / Dragonian +1 INT
- Save DC 16 | Weapon: 1d6+4 | Draconic Channeling (Fire): +1 STA → Burned
- Burned + Fragile Frame = 1d4+2 fire/turn (avg 4.5) ongoing

**Thalorim Bow**
- DEX 8(+4) | INS 6(+3) | CON 6(+3) | STR 3(+1) | INT 3(+1) | CHA 3(+1)
- Bonuses: Wanderer +2 DEX +1 INS / Bow +1 DEX +1 INS / Thalorim +1 CON
- Save DC 16 | Weapon: 1d8+4 (+1 Focus dmg from R2)

---

## Monster Stat Block (as simulated)

| Stat | Value |
|------|-------|
| AR | 10 |
| HP | 70 |
| Stamina | 15 |
| Stamina Tax | −1/turn (hovering) |
| Attacks/Turn | 2 (d20+5 → 1d8+3 avg 7.5) |

**Abilities:** Lumin Spores (2 STA, CD2) — DEX save DC 13 → Blind 1 round | Silent Pulse (2 STA, CD2) — INS save DC 13 → Sleep

**Behavior priority:** 2+ clustered → Lumin Spores → Silent Pulse → Proboscis Jab (vs Sleeping)

---

## Pre-Simulation Math

### Hunter hit chance vs Hollowmoth AR 10

| Hunter | Formula | Hit % |
|--------|---------|-------|
| GS d20+6 | (21 − max(1, 10−6)) / 20 = 17/20 | **85%** |
| Hammer d20+7 | (21 − max(1, 10−7)) / 20 = 18/20 | **90%** |
| Wand d20+6 | 17/20 | **85%** |
| Bow d20+6 | 17/20 | **85%** |

### Hollowmoth hit chance vs hunters

| Target | AR | Formula | Base Hit % | After Reaction |
|--------|-----|---------|-----------|----------------|
| GS | 14 | (21−9)/20 | 60% | Parry: 53% negate / 47%×55% = 26% land |
| Hammer | 15 | (21−10)/20 | 55% | No reaction — 55% lands |
| Wand | 12 | (21−7)/20 | 70% | Dodge: 0.70² = **49%** |
| Bow | 14 | (21−9)/20 | 60% | Below Dodge threshold (≤60%) — 60% lands |

### Hunter save fail rates

| Hunter | vs Lumin Spores DC 13 (DEX) | vs Silent Pulse DC 13 (INS) |
|--------|----------------------------|----------------------------|
| GS | DEX +2 → 50% Blind | INS +1 → 55% Sleep |
| Hammer | DEX +2 → 50% Blind | INS +1 → 55% Sleep |
| Wand | DEX +1 → 55% Blind | INS +2 → 50% Sleep |
| Bow | DEX +4 → 40% Blind | INS +3 → 45% Sleep |

---

## Round Log

### Round 1

**Hunter Phase** — no conditions active

| Hunter | STA | Action | Hit % | Exp Dmg | STA After |
|--------|-----|--------|-------|---------|-----------|
| GS | 9 | Attack | 85% | 8.93 | 8 |
| Hammer | 9 | Attack | 90% | 9.45 | 8 |
| Wand | 8 | Attack + Fire Channel | 85% | 6.38 | 6 |
| Bow | 9 | Attack (Focus 0) | 85% | 7.23 | 8 |

**Party Hunter Phase damage: 31.99**

**Monster Phase** — STA 15 — behavior: 2+ clustered → Lumin Spores

- **Lumin Spores** (2 STA, CD2): DEX save DC 13. Expected 1.95 of 4 hunters Blinded for R2.
- **Wing Slash** (1 STA) → Wand (70% hit). Wand Dodges → dis_hit 49% → exp 3.68 HP dmg. Wand STA −1 (→5).
- **Proboscis Jab** (1 STA) → GS (60% hit). GS Parries → 53% negate + riposte 2.78 | 47%×55% = 1.94 HP dmg to GS. GS STA −1 (→7).
- **Stamina Tax:** −1 STA. Monster STA: 15−5 = **10**
- **Burned** fires end of turn: 0.85 × 4.5 = **3.83 fire dmg**

**End of Round 1:**
- Monster HP: 70 − 31.99 − 2.78 (riposte) − 3.83 (Burned) = **31.40**
- Hunter HP: GS 32.1 | Ham 32.0 | Wand 26.3 | Bow 32.0
- Hunter STA: GS 7 | Ham 8 | Wand 5 | Bow 8
- Pending: R2 Blind on GS (50%), Ham (50%), Wand (55%), Bow (40%)

---

### Round 2

**Hunter Phase** — Blind conditions apply per probability

| Hunter | Blind% | Not Blind exp dmg | Blinded exp dmg | Weighted exp dmg | STA After |
|--------|--------|------------------|-----------------|-----------------|-----------|
| GS | 50% | 0.85×11.5=9.78 (+Momentum) | 0.7225×11.5=8.31 | **9.04** | 6 |
| Hammer | 50% | 0.90×10.5=9.45 | 0.81×10.5=8.51 | **8.98** | 7 |
| Wand | 55% | 0.85×7.5=6.38 | 0.7225×7.5=5.42 | **5.85** | 4 |
| Bow | 40% | 0.85×9.5=8.08 (+Focus) | 0.7225×9.5=6.86 | **7.59** | 7 |

**Party Hunter Phase damage: 31.46**

**Monster HP after R2 Hunter Phase: 31.40 − 31.46 = −0.06 → MONSTER AT 0 HP**

**Monster Phase** (acts on fumes before Burned resolves):
- Silent Pulse (2 STA): academic — Sleep conditions if they had mattered
- Wing Slash → Hammer: 55% → 4.13 HP dmg
- Proboscis Jab → Bow: 60% → 4.50 HP dmg (below Dodge threshold)
- Burned fires: 3.83 → monster confirmed dead
- Stamina Tax: −1 STA

**End of Round 2:**
- Monster HP: **0 / 70 — DEAD**
- Hunter HP: GS 32.1 | Ham 27.9 | Wand 26.3 | Bow 27.5
- Hunter STA: GS 6 | Ham 7 | Wand 4 | Bow 7
- Breathing Turns taken: **0**

---

## Result

**Party Victory — Round 2**

---

## Balance Metrics

| Metric | Value |
|--------|-------|
| Party DPR (avg/round incl. Burned + riposte) | ~34.5 |
| Monster DPR (avg/round across all hunters) | ~5.7 |
| Kill round | 2 |
| Stamina pressure (hunters) | **None** |
| HP pressure (hunters) | **None** — avg 88.7% HP intact |
| Breathing Turns taken | 0 |
| Part breaks achieved | None |
| Monster Stamina hit 0 | No — died at STA 5 |

---

## Flags

### FLAG 1 — Hunt resolves in 2 rounds. Zero puzzle engagement.
Hollowmoth's core loop (Blind → Sleep → Drain) requires a minimum of 3 rounds to execute. The party kills it before Round 2 ends. Lumin Spores triggered but hunters acted through it. Silent Pulse never had a live target to exploit.

### FLAG 2 — AR 10 offers no meaningful defense.
Hunter hit rates were 85–90%. The monster functionally could not avoid damage. Hunters never felt the cost of a miss or needed to adjust approach.

### FLAG 3 — No Stamina pressure on hunters.
Lowest STA at end: Wand at 4/8. No hunter approached the Breathing Turn threshold (≤2). The stamina tempo mechanic — the entire design spine of Untamed — never engaged.

### FLAG 4 — Monster Stamina pool irrelevant.
Died at STA 10. Its tight-pool narrative (flight tax, retreat at ≤5, collapse behavior) was completely invisible.

### FLAG 5 — Optimal builds outscale T1 calibration.
Stat stacking (Background +2, Weapon +1/+2, Race +1) produces primary stats of 9–10 at HR 2 — mods of +4/+5 at a tier calibrated for +2/+3. This is a system-level concern that will affect all Tier 1 monsters against optimized parties.

### FLAG 6 — Dragonian Fire + Fragile Frame interaction.
Burned with Fragile Frame (+2 bonus fire/tick) added 3.83 expected damage per round on top of already overwhelming DPR. Noted as a party composition amplifier, not a monster design flaw.

---

## Tuning Suggestions

**1. Raise HP to 110–115 for optimized 4P.**
The formula 15 + (5×11) = 70 targets a median party. Optimized parties run ~34 DPR, requiring 110–115 HP for a 4–5 round hunt that lets the loop execute at least once. Proposed formula extension: add an "optimized party" note to the monster file suggesting HP 110 for min-maxed groups.

**2. Raise AR to 13.**
At AR 13 vs d20+6: hit = 70%. At AR 13 vs d20+7: hit = 75%. This restores miss pressure and makes Blind (dis_hit → 49–56%) genuinely punishing — exactly the design intent of Lumin Spores.

**3. Add elevation penalty for airborne target.**
Consider: ranged and melee attacks vs Hollowmoth above 15 ft take −1 to hit (elevation obscurement). This slows DPR ~5–6% for ranged attackers and creates a meaningful tactical decision for Hammer/GS — pull it down or accept reduced accuracy.

---

## Next Steps

- [ ] Re-sim with HP 115, AR 13 to validate tuning suggestions
- [ ] Re-sim with a non-optimized party (median stats, mixed backgrounds) to compare
- [ ] Test Hammer stun loop (Impact → Stun) in a longer fight to validate its payoff timing
