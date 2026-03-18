# Sim Hunt — Palax vs Party of 4 (Tier 1)

**Date:** 2026-03-18
**Mode:** Expected Value (deterministic)
**Hunter baseline:** HR 2 optimal builds
**Monster file:** `content/monsters/forest-cluster/palax.md`
**Sim context:** Full validation to address the AR 9 flag from sim-calibration. Confirming that AR 9 is intentional (burrow = primary defense) and that Mole Eruption actually fires twice in the full fight — the calibration trace under-counted it. No changes expected; this sim is confirmatory.

---

## Pre-Simulation Math

### Hunter hit chance vs Palax

| Hunter | vs AR 9 (surfaced) | vs AR 11 (burrowed, ranged) |
|--------|--------------------|-----------------------------|
| GS d20+6 | (21−3)/20 = **90%** | — (melee, cannot hit underground) |
| Ham d20+7 | (21−2)/20 = **95%** | — (melee, cannot hit underground) |
| Wand d20+6 | (21−3)/20 = **90%** | (21−5)/20 = **80%** |
| Bow d20+6 | (21−3)/20 = **90%** | (21−5)/20 = **80%** |

### Palax hit chance vs hunters

| Target | Hit% | After reaction |
|--------|------|----------------|
| GS AR 14 | 60% | Parry available (≤60% base; adv triggers at 84% — Parry fires) |
| Ham AR 14 | 60% | No reaction |
| Wand AR 12 | 70% | Dodge: 0.70²=**49%** |
| Bow AR 14 | 60% | No Dodge (≤60%) |

### Mole Eruption DEX DC 12 fail rates

| Hunter | DEX mod | Fail% | Expected HP | Prone% |
|--------|---------|-------|-------------|--------|
| GS | +2 | **45%** | 0.45×10+0.55×5=**7.25** | 45% |
| Ham | +2 | **45%** | **7.25** | 45% |
| Wand | +1 | **50%** | 0.50×10+0.50×5=**7.50** | 50% |
| Bow | +4 | **35%** | 0.35×10+0.65×5=**6.75** | 35% |

### GS Parry vs advantage attacks (Prone trigger)

When Palax attacks Prone GS with melee (advantage = 84% base):
- Parry adds +1 AR → AR 15. Adv vs AR 15: 1−(1−0.55)²=**79.75%** hit through armor.
- Parry contest (d20+6 vs d20+5): P(hunter > monster) = **47.5%** success → negate + riposte.
- Net damage lands: 79.75%×52.5% = **41.9%** → Gnaw Prone (10.5 avg) = **4.40 HP**
- Riposte returns: 79.75%×47.5%×5.25 = **1.99 HP** to monster per attempt.

---

## Round Log

### Round 1

**Hunter Phase** — Palax underground (AR 11 vs ranged). GS+Ham cannot reach.

| Hunter | STA | Action | Hit% | Exp Dmg | STA After |
|--------|-----|--------|------|---------|-----------|
| GS | 9 | Cannot reach — underground | — | 0 | 9 |
| Ham | 9 | Cannot reach — underground | — | 0 | 9 |
| Wand | 8 | Attack vs AR 11 + Fire Channel | 80% | 0.80×7.5=**6.00**; Burned applied (2.5/turn R2+) | 6 |
| Bow | 9 | Attack vs AR 11 (Focus 0) | 80% | 0.80×8.5=**6.80** | 8 |

**Party damage: 12.80 HP**
Monster HP: 81−12.80 = **68.20** (84%).

**Monster Phase** — STA 16. 2+ hunters clustered (GS+Ham melee group). Eruption fires.

- **Mole Eruption** (2 STA) → GS + Ham cluster:
  - GS: **7.25 HP** + 45% Prone
  - Ham: **7.25 HP** + 45% Prone
  - STA→14.
- **Gnaw** (1 STA) → GS (45% Prone, Parry fires at advantage):
  - Adv hit vs AR 15: 79.75%. Parry contest 47.5%.
  - Net dmg: 0.7975×0.525×10.5=**4.40 HP** to GS. Riposte: **1.99 HP** to Palax.
  - STA→13.
- **Claw Swipe** (1 STA) → Ham (45% Prone, melee adv):
  - Adv hit: 1−(0.40)²=**84%**. No reaction. 0.84×7.5=**6.30 HP** to Ham.
  - STA→12.
- Palax stays surfaced after Eruption (does not reborrow this turn).
- No underground end tax (surfaced at end of turn).

Eruption CD: 2 turns (available R3).

**End of Round 1:** Monster HP **68.20 − 1.99 (riposte) = 66.21**
GS: 34−7.25−4.40=**22.35** / Ham: 32−7.25−6.30=**18.45** / Wand: 30 / Bow: 32
STA: GS 8 / Ham 9 / Wand 6 / Bow 8 | Monster STA: 12 | GS 45% Prone, Ham 45% Prone

---

### Round 2

**Hunter Phase** — Palax surfaced (AR 9). GS+Ham 45% Prone (stand = 2 STA).

GS Prone path: stand (2 STA) → attack (1 STA). Expected STA: 0.45×3+0.55×1=**1.9 total**. Momentum 1 active from R2.
Ham Prone path: same. Impact 0→1 on hit.

| Hunter | Expected STA | Action | Exp Dmg | STA After |
|--------|-------------|--------|---------|-----------|
| GS | 1.9 | Stand + Momentum 1; 0.90×(10.5+1)=**10.35** | 10.35 | ~6 |
| Ham | 1.9 | Stand + Impact 1; 0.95×10.5=**9.98** | 9.98 | ~7 |
| Wand | 1 | 0.90×7.5+Burned2.5=**9.25** | 9.25 | 5 |
| Bow | 1 | Focus 1; 0.90×(8.5+1)=**8.55** | 8.55 | 7 |

**Party damage: 38.13 HP** (Burned 2.5 included in Wand total)
Monster HP: 66.21−38.13 = **28.08** (34.7%) — **below 40% (32.4) → retreat priority activates.**

**Monster Phase** — STA 12. Below 40% HP → retreat underground. Still attacks before burrowing. Eruption CD: 1 remaining.

- **Claw Swipe** (1 STA) → Wand (Dodge): 0.49×7.5=**3.68 HP**. STA→11.
- **Gnaw** (1 STA) → Bow (no Prone): 0.60×8=**4.80 HP**. STA→10.
- **Burrow** (1 STA movement): STA→9.
- Ends turn underground: **−1 STA underground tax**. STA→**8**.

**End of Round 2:** Monster HP **28.08**
GS: 22.35 / Ham: 18.45 / Wand: 30−3.68=**26.32** / Bow: 32−4.80=**27.20**
STA: GS ~6 / Ham ~7 / Wand 5 / Bow 7 | Monster STA: **8** | Underground. Eruption CD: 0 (clears R3 ✓)

---

### Round 3

**Hunter Phase** — Palax underground (AR 11 vs ranged). GS+Ham cannot reach.

| Hunter | STA | Action | Exp Dmg | STA After |
|--------|-----|--------|---------|-----------|
| GS | 6 | Cannot reach | 0 | 6 |
| Ham | 7 | Cannot reach | 0 | 7 |
| Wand | 5 | Attack vs AR 11; 0.80×7.5+Burned2.5=**8.50** | 8.50 | 4 |
| Bow | 7 | Focus 2; 0.80×(8.5+2)=**8.40** | 8.40 | 6 |

**Party damage: 16.90 HP**
Monster HP: 28.08−16.90 = **11.18** (13.8%).

**Monster Phase** — STA 8. Eruption CD cleared. Palax is underground with GS+Ham clustered above — ambush instinct overrides retreat: **fires parting Eruption**, attacks, then burrowed.

> At 13.8% HP and with Eruption ready, Palax bursts for one final push before collapse. This is the creature's core design: it cannot resist the ambush trigger even at low HP.

- **Mole Eruption** (2 STA) → GS + Ham (still clustered):
  - GS: **7.25 HP** + 45% Prone (GS now: 22.35−7.25=**15.10 HP**)
  - Ham: **7.25 HP** + 45% Prone (Ham now: 18.45−7.25=**11.20 HP**)
  - STA→6.
- **Claw Swipe** (1 STA) → Ham (45% Prone, adv):
  - 0.84×7.5=**6.30 HP** to Ham. (Ham now: 11.20−6.30=**4.90 HP** ⚠️)
  - STA→5.
- **Gnaw** (1 STA) → GS (45% Prone, Parry fires):
  - Net dmg: **4.40 HP** to GS. Riposte **1.99 HP** to Palax.
  - STA→4.
- **Burrow** (1 STA, STA ≤5 threshold crossed): STA→3.
- Ends underground: **−1 STA tax**. STA→**2**.

Monster HP: 11.18−1.99 (riposte) = **9.19**

**End of Round 3:** Monster HP **9.19** | GS: 15.10−4.40=**10.70** (31%) / Ham: **4.90** (15%) ⚠️ / Wand: **26.32** / Bow: **27.20**
STA: GS ~5 / Ham ~6 / Wand 4 / Bow 6 | Monster STA: **2** | Underground. Eruption CD: 2.

⚠️ Ham at 15% HP. One more Claw Swipe from a surfaced Palax would drop Ham. Monster STA 2 — effectively combat-spent.

---

### Round 4

**Hunter Phase** — Palax underground (AR 11 vs ranged). STA 2. GS+Ham cannot attack.

| Hunter | STA | Action | Exp Dmg | STA After |
|--------|-----|--------|---------|-----------|
| GS | 5 | Cannot reach | 0 | 5 |
| Ham | 6 | Cannot reach | 0 | 6 |
| Wand | 4 | Attack vs AR 11; 0.80×7.5+Burned2.5=**8.50** | 8.50 | 3 |
| Bow | 6 | Focus 3 (cap); 0.80×(8.5+3)=0.80×11.5=**9.20** | 9.20 | 5 |

**Party damage: 17.70 HP**
Monster HP: 9.19−17.70 = **−8.51 → DEAD**

**End of Round 4:** Monster HP **0 / 81** | STA: GS 5 / Ham 6 / Wand 3 / Bow 5

---

## Result

**Party Victory — Round 4.**

---

## Balance Metrics

| Metric | Calibration estimate | Full sim (sim-006) | Target |
|--------|---------------------|-------------------|--------|
| Kill round | 4 | **4** ✓ | 4–5 |
| Party DPR (avg) | ~25 | **~21.4** (underground phases halve R1+R3) | ~20–30 |
| Monster DPR (avg) | ~10.5 | **~14.7** (Eruption fires TWICE; concentrated R1+R3) | ~10–15 |
| HP pressure | Low | **Medium** (GS 31%, Ham 15% ⚠️) | Low–Med |
| Stamina pressure | None | **None** (no Breathing Turns) | Low–Med |
| Core mechanic fired | Partial (once) | **Yes — Eruption fires R1 AND R3** ✓ | Yes |
| Monster STA at death | ~9 | **2** | — |
| Avg hunter HP at kill | ~85% | **54.3%** (frontline much lower) | — |

**Hunter HP at kill:** GS 10.70 (31%) | Ham 4.90 (15% ⚠️) | Wand 26.32 (88%) | Bow 27.20 (85%)

---

## Flags

### FLAG 1 — Eruption fires TWICE, not once ✓ (calibration correction)
The sim-calibration trace showed Eruption firing R1 and noted "dies before second use in R4." This was an error in the condensed trace. Eruption CD is 2 turns: used R1 → available R3. With Palax underground in R3 and GS+Ham still clustered above, the ambush instinct fires again. Second Eruption deals the same spike (7.25 HP to GS + Ham each). Core mechanic fully realized, twice.

### FLAG 2 — AR 9 is intentional, burrow is the real defense ✓
AR 9 = 90–95% hit rates while surfaced. This is a design choice, not a problem: Palax is almost never *meant* to be hit. The Burrow loop keeps it underground during hunter phases (R1, R3, R4 all underground). Surface windows (R2 + monster phases only) are intentionally short. File text confirms: *"Surface AR is modest (9) — most vulnerable during Eruption cooldown."* No change needed.

### FLAG 3 — Ham at 15% HP entering R4 — real threat, design works
Ham at 4.90 HP is the highest individual HP pressure in any T1 sim so far. Both Eruption bursts targeted the same two clustered frontliners, and the Claw+Gnaw followups specifically hit them while Prone. This is the creature's intended design: "Erupt → isolate and punish Prone targets → reset." The concentrated pressure on melee hunters is correct. GS Parry mitigated some damage; Ham took the full brunt.

### FLAG 4 — Ranged hunters nearly untouched
Wand and Bow took minor damage only (R2 attacks: ~3.68 + ~4.80). Palax's targeting correctly focuses melee-range hunters. Backline pressure is intentionally low for a subterranean ambusher that has to close to melee. This creates an interesting party asymmetry: the hunters most at risk are the ones who have to stand on the ground.

### FLAG 5 — Stamina pressure absent (acceptable)
No Breathing Turns taken. Palax generates no Stamina drain — its threat is pure HP spikes from Eruption. This is correct: the STA pressure mechanic on Palax is player-side (forcing Parry/stand reactions that cost STA), not a direct drain. HP pressure compensates.

---

## Verdict

**Palax is locked as-is.** AR 9 is intentional design (burrow = primary defense). No stat changes required. The full sim corrects the calibration's undercounting: Eruption fires twice (R1 + R3), delivering real HP pressure to frontliners. Kill round 4 confirmed.

**GM note added to file:** The AR 9 surface vulnerability is a design feature. Palax is never meant to absorb hits — it erupts, punishes, and retreats. Hunters who deny the burrow (nets, rock terrain, Seismic Reliance) flip the fight entirely.

---

## Confirmed Envelope

```
AR:  9 (surface)  /  AR 11 (burrowed, vs ranged)  ✓
HP:  81  (TierBase 15 + CON 6 × 11)  ✓
STA: 16  ✓
Eruption: fires twice in standard fight (R1 + R3)  ✓
Core puzzle: deny burrow = deny the fight  ✓
```

**LOCKED.**
