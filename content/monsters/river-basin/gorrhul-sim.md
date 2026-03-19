# Gorrhul — Hunt Simulation Result

**Mode:** Expected Value (no dice) | **Party:** 4P Optimized | **Tier 2, HR 7** | **Techniques:** T1 + T2

---

## Party Roster

| Hunter | Race | Weapon | Stats | AR | HP | STA | Atk | Avg Dmg | DC | React |
|--------|------|--------|-------|----|----|-----|-----|---------|----|----|
| 1 | Human | Greatsword | STR 10(+5) CON 8(+4) | 14 (Heavy) | 36 | 10 | d20+7 | 12.0 (2d6+5) | 17 | Parry |
| 2 | Trolian | Hammer | STR 11(+5) CON 7(+3) | 15 (Heavy+Anchored) | 34 | 9 | d20+7 | 12.0 (2d6+5) | 17 | None |
| 3 | Human | Bow (Steel) | DEX 10(+5) CON 6(+3) | 15 (Light) | 32 | 9 | d20+7 | 10.5 (1d10+5) | 17 | Dodge |
| 4 | Dragonian | Wand (Fire) | INT 10(+5) CON 6(+3) | 12 (Medium) | 32 | 9 | DC 17 cluster | 8.5 bomb (1d6+5) | 17 | Dodge |

### Key Techniques

- **GS T1 Cleave** (1 STA w/Adaptable): Advantage, Exposed, +2 Momentum at M0
- **GS T2 Blade Wave** (2 STA): 15-ft arc, DC 17 Stagger. M3: +1 Power Die
- **Ham T1 Charged Smash**: Skipped (60% cancel rate vs Gorrhul)
- **Ham T2 Shockwave** (2 STA): 15-ft cone, 2d8+5 avg 14, DEX DC 17 → Prone + 1 Impact
- **Bow T1 Power Shot**: Available at Focus 3 (not reached in this fight)
- **Bow Arrows**: Signal Arrow ×2 (R1, R4), Binding Arrow ×2 (R3, R5)
- **Wand T1 Hex Charge (Fire/Scorch)**: Scorch tick 2.5/cluster/turn, detonate → Burned
- **Wand T2 Cluster Fieldcraft**: Terrain wards, host drag, tripwire
- **Draconic Channeling** (R1): +1 STA → apply Burned directly (no save)

---

## Monster — Gorrhul (4P Optimized)

| Stat | Value |
|------|-------|
| AR | 15 (Mud-Covered) / 13 (bare) |
| HP | 210 |
| Stamina | 25 |
| Attacks/Turn | 3 |
| Attack | d20+6 |

### Attacks

| Attack | Cost | Avg Dmg | Rider |
|--------|------|---------|-------|
| Gore | 1 STA | 13 (2d8+4) | Crit → Bleed |
| Stomp | 1 STA | 11 (2d6+4) | DEX DC 12 → Prone |
| Mud Toss | 1 STA (Mud only) | 7.5 (1d6+4) | DEX DC 12 → Slowed |
| Charging Gore | 3 STA (Charge Mode) | 19.5 (2d10+4+1d8) | DEX DC 12 → Stun, miss → Dazed |

### Key Mechanics

- **Mud-Covered:** +2 AR, halve fire damage, advantage on Prone saves
  - Fire strip: 8+ fire burst damage in 1 round after halving (= 16+ raw). Single cluster detonation cannot strip. 2-cluster: ~8% chance. 3-cluster: ~50% chance.
  - Prone strip: Shockwave has 49% Prone rate while Mud active (advantage on save)
- **Charge Mode:** 2 STA/turn stance, unlocks Charging Gore
- **Mud Recoat:** 4 STA, full turn (no other actions)
- **Exhaustion (0 STA):** No Charge, AR → 13, half effectiveness
- **Behavior:** R1 Gore×2+Stomp → Charge if lane → Recoat if stripped → 40% HP full aggression

---

## Hit Table

| Matchup | Hit% | Notes |
|---------|------|-------|
| Hunters (d20+7) vs AR 15 (Mud) | 65% | adv: 87.75% |
| Hunters (d20+7) vs AR 13 (bare) | 75% | adv: 93.75% |
| Gorrhul vs GS AR 14 | 65% | w/Parry: ~27% eff |
| Gorrhul vs Ham AR 15 | 60% | no reaction |
| Gorrhul vs Bow AR 15 | 60% | w/Dodge: 36% |
| Gorrhul vs Wand AR 12 | 75% | w/Dodge: 56% |
| Shockwave DEX DC 17 (Mud ADV) | 49% fail | 70% without Mud |
| Binding STR DC 17 vs Gorrhul | 60% fail | — |
| Blade Wave DC 17 vs Gorrhul (STR) | 60% fail | only on hit |

---

## Round-by-Round Log

### Round 1

**Hunter Phase:**
- **GS** — Cleave (1 STA, Adaptable). Advantage vs AR 15 → 10.53 exp dmg. M0→M2 on hit (88%). **Exposed until end of R2.**
- **Ham** — Shockwave (2 STA). 49% Prone (Mud ADV on save) → strips Mud if Prone. 10.43 exp dmg. +0.49 Impact.
- **Bow** — Signal Arrow. 65% hit → 6.83 exp dmg. Mark active (65%): allies +1 to attack.
- **Wand** — Place cluster + Draconic Channeling (2 STA). 70% attach. Burned applied if attached (no save). 0 direct dmg.

> Party damage: **27.79** (cumulative: 27.79)

**Monster Phase:**
- Gorrhul attacks: Gore → GS (Exposed, adv) 11.41 exp | Gore → Ham 7.80 exp | Stomp → GS (Exposed, adv) 9.65 exp
- GS cannot Parry while Exposed. GS takes **21.06 expected damage** (58% of max HP).
- DoT (Scorch + Burned): 2.60

> Monster STA: 25 → 21

**State:** Mon 180/210 STA 21 | GS 15/9 M2 | Ham 26/7 I0.5 | Bow 32/9 F0 | Wand 32/7 C1

---

### Round 2

**Hunter Phase:**
- **GS** — Basic attack at M2 (+2 flat, crit 19-20). 10.50 exp dmg. Exposed ends.
- **Ham** — Basic attack. 8.78 exp dmg. Impact → 1.1.
- **Bow** — Basic attack (F1). 8.42 exp dmg.
- **Wand** — Detonate (1 STA) + Place (1 STA). Single cluster det = 4.25 halved. **No fire strip** (under 8 threshold). 4.44 exp dmg.

> Party damage: **32.14** (cumulative: 59.93)

**Monster Phase:**
- 49% path: Mud Recoat (4 STA, 0 attacks). Mud restored.
- 51% path: Gore×2 + Stomp spread. GS Parry active → 27% effective hit.
- Weighted damage: GS 1.79, Ham 3.37, Wand 3.73. Riposte: 1.01.
- DoT: 1.75

> Monster STA: → 18 | P(Mud ON) ≈ 100% (recoated or never stripped)

**State:** Mon 143/210 STA 18 | GS 13/7 M2.5 | Ham 23/6 I1.1 | Bow 32/9 F0.3 | Wand 28/5 C1

---

### Round 3

**Hunter Phase:**
- **GS** — Blade Wave at M3 (64% chance): 19.19 exp + basic paths. Blended: **15.32 exp dmg.** DC 17 Stagger (25%).
- **Ham** — Shockwave (2 STA). 10.43 exp dmg. Prone 49% → Mud strip. +0.49 Impact.
- **Bow** — Binding Arrow #1. 7.65 exp dmg. 39% Stagger on Gorrhul.
- **Wand** — Det + Place. 2.98 exp dmg (fire halved, Mud ON).

> Party damage: **36.38** (cumulative: 96.31) | P(any CC) = 77%

**Monster Phase:**
- 54% Staggered → skip turn (0 damage, 0 STA spent).
- 22% Recoat. 24% attacks (Gore×2 + Stomp spread).
- Weighted damage: GS 0.82, Ham 1.55, Bow 0.93. Riposte: 0.47. DoT: 2.45.

> Monster STA: → 16

**State:** Mon 103/210 STA 16 | GS 12/6 M2.2 | Ham 21/4 I1.6 | Bow 31/9 F0.4 | Wand 28/3 C1

---

### Round 4 — 40% HP Threshold Crossed

**Hunter Phase:**
- **GS** — Basic (M2-3 mix). 10.35 exp dmg.
- **Ham** — Basic. 8.28 exp dmg. Impact → 2.0.
- **Bow** — Signal Arrow #2. 8.24 exp dmg. Mark active.
- **Wand** — **Breathing Turn.** +4 STA recovery. 0 dmg.

> Party damage: **26.87** (cumulative: 123.18)

**Monster Phase — FULL AGGRESSION (below 40% HP):**
- Charge Mode (2 STA) + Charging Gore → GS (Parry: 27% eff) 5.27 exp + Gore → Wand (Dodge) 7.31 exp + Stomp → Ham 6.60 exp.
- **CG miss → Dazed on Gorrhul (73%).** Riposte: 1.98. DoT: 2.62.

> Monster STA: → 9

**State:** Mon 74/210 STA 9 | GS 7/5 M2 | Ham 15/3 I2.0 | Bow 31/9 F0.5 | Wand 21/7 C1

---

### Round 5

**Hunter Phase:**
- **GS** — Basic. 10.0 exp dmg.
- **Ham** — Basic. 8.34 exp dmg. Impact → 2.7.
- **Bow** — Binding Arrow #2. 8.31 exp dmg. 42% Stagger.
- **Wand** — Det + Place. 4.61 exp dmg.

> Party damage: **31.26** (cumulative: 154.44)

**Monster Phase — Dazed (73%):**
- Dazed = disadvantage on attacks, no Reactions.
- **Key interaction:** Dazed drops Gorrhul's hit% vs GS below 60% → GS does NOT Parry → takes full unmitigated damage.
- Gore×3 spread with disadvantage. Weighted: GS 4.96, Ham 5.53, Bow 4.68.
- Riposte: 0.53 (non-Dazed path only). DoT: 2.46.

> Monster STA: → 6

**State:** Mon 40/210 STA 6 | GS 2/4 M1.8 | Ham 9/2 I2.4 | Bow 26/9 F0.5 | Wand 21/5 C1

---

### Round 6

**Hunter Phase:**
- **GS** — Basic (HP critical at 2). 9.94 exp dmg.
- **Ham** — **Breathing Turn** (STA 2). +4 STA. 0 dmg.
- **Bow** — Basic (F1.5). 8.48 exp dmg.
- **Wand** — Det + Place. 4.76 exp dmg.

> Party damage: **23.18** (cumulative: 177.62)

**Monster Phase:**
- 42% Staggered (from R5 Binding) → skip turn.
- 58% Gore×3 spread. Target GS for kill.
- Weighted: GS 2.05, Ham 4.55, Bow 2.73. Riposte: 1.15. DoT: 2.40.

> Monster STA: → 4

**State:** Mon 13/210 STA 4 | GS ~0/3 | Ham 5/6 I1.4 | Bow 23/9 F0.7 | Wand 21/2 C1

---

### Round 7

- GS (if alive), Ham, Bow, Wand all attack. Party damage: ~32.
- **Gorrhul falls early Round 7.**

---

## Final Result

```
═══ RESULT: PARTY WINS — ROUND 7 (early) ═══════════════════════
```

| Metric | Value |
|--------|-------|
| Monster HP at end | 0 / 210 |
| Avg hunter HP remaining | 12.3 / 33.5 (37%) |
| Avg hunter STA remaining | 5.0 / 9.25 (54%) |
| Breathing Turns | 2 (Wand R4, Ham R6) |
| Part breaks | None |
| Monster STA → 0 | No (STA 4 at death) |
| Party DPR | 32.8 |
| Monster DPR | 14.1 |
| Kill round | 7 |
| STA pressure | Low-Medium |
| HP pressure | High (GS critical, Ham low) |

---

## Tuning History

| Version | Kill Round | Key Change |
|---------|-----------|------------|
| v1 (base) | R5.5 | STA 20, no Mud Prone ADV, any fire strips Mud |
| v2 | R6 | STA 25, Mud ADV on Prone saves, fire threshold 10+ (impossible at T2) |
| v3 (final) | R7 | Fire threshold lowered to 8+ (achievable but not optimal) |

---

## Flags

1. **GS Exposed R1:** 21 exp dmg vs 36 HP (58%). Consistent across all sim versions. High-risk opener — intentional tradeoff for Momentum acceleration.

2. **Fire strip achievable but not STA-efficient:** 3-cluster stack yields 17% net strip chance over 3 rounds. Wand correctly cycles Place+Det for steady DPS instead. Against parties without Hammer, fire stacking becomes the primary Mud answer — correct dynamic.

3. **Dazed disabling Parry (R5):** CG miss → Dazed → disadvantage drops hit% below 60% → GS reaction rule prevents Parry → GS takes full damage. Emergent interaction worth noting for GMs.

4. **No further adjustments recommended.** Hunt lands in 6-8 round target window, applies meaningful HP + STA pressure, and rewards coordination (Shockwave Prone → party DPS spike when Mud drops). All three puzzle layers (Mud armor, Charge lanes, Stamina drain) engage at least once.
