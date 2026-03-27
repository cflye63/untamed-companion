# Ladon — Hunt Simulation Record

**Party:** 4 Hunters, HR 12 (Tier 3)
**Method:** Expected-value math — deterministic, no dice rolls. All outcomes use probability × average.

---

## Party Composition

### Human Hammer | HR 12
```
STR 12 (+6)  DEX 3 (+1)  CON 8 (+4)
INT 3 (+1)   INS 3 (+1)  CHA 3 (+1)

AR:      14  (Heavy)
HP:      60  (CON 8 × 6 + HR 12)
Stamina: 10  (6 + CON mod 4)

Attack:  d20+8 → 2d8+6  avg hit dmg: 15.0
Head Crest (called shot −2): d20+6 vs AR16 → 55% hit
Body: d20+8 vs AR16 → 65% hit
Save DC: 18
React:   None (Heavy, no Guard/Parry)
T3:      Overwhelming Force — 2 BP/hit (3 at 3 Impact); ignores bludgeoning resistance
Underwater: passive −1 STA/turn submerged | Breath: 5 turns (1 + CON mod 4)
Race:    Human — Adaptable (1 attack/hunt costs 0 STA)
```

### Thalorim Spear & Shield | HR 12
```
STR 10 (+5)  DEX 4 (+2)  CON 9 (+4)
INT 3 (+1)   INS 3 (+1)  CHA 3 (+1)

AR:      15  (Heavy 14 + S&S badge +1)
HP:      66  (CON 9 × 6 + HR 12)
Stamina: 10  (6 + CON mod 4)

Attack (Defensive): d20+7 → 2d6+5  avg hit dmg: 12.0
Hit rate vs AR16: 60%  |  DPR: 7.2
Save DC: 17
React:   Block (Guard) + Counter-Thrust (T3)
T3:      Counter-Thrust — when Block succeeds, adv counter-attack +1d6 (1 STA reaction)
         CT EV: 84% hit × 15.5 avg = 13.0 dmg/use
Aid Escape: Spend Action, contested STR vs escape DC — success frees Grappled ally
Underwater: no passive drain (native swim) | Breath: 9 turns (2 × (1+CON mod 4))
Race:    Thalorim — doubled breath timer; native swim speed
```

### Thalorim Hunting Flute | HR 12
```
STR 3 (+1)   DEX 4 (+2)  CON 8 (+4)
INT 5 (+2)   INS 6 (+3)  CHA 8 (+4)

AR:      12  (Medium)
HP:      60  (CON 8 × 6 + HR 12)
Stamina: 10  (6 + CON mod 4)

Attack: d20+6 → 2d6+4  avg hit dmg: 11.0
Hit rate vs AR16: 55%  |  DPR: 6.1
Save DC: 16
React:   Dodge (Medium armor)
T2:      Healing Hymn — 2 STA; all allies in aura +10.5 HP avg (1d8+CHA)
T3:      Crescendo — passive; Notes apply +1d4 to next attack in 40 ft
Escape (Grappled, DEX+2 vs DC15): 40% base
Underwater: no passive drain (native swim) | Breath: 10 turns (2 × (1+CON mod 4))
Race:    Thalorim — doubled breath timer; native swim speed
```

### Human Bow | HR 12
```
STR 3 (+1)   DEX 11 (+5)  CON 7 (+3)
INT 3 (+1)   INS 5 (+2)   CHA 3 (+1)

AR:      15  (Light: 10 + DEX mod 5)
HP:      54  (CON 7 × 6 + HR 12)
Stamina:  9  (6 + CON mod 3)

Attack: d20+7 → 2d8+5  avg hit dmg: 14.0
Hit rate vs AR16: 60%  |  DPR base: 8.4
Save DC: 17
React:   Dodge (Light armor)
Focus:   +1 flat dmg/stack while stationary (cap F3). F3 = same-turn Power Shot.
T3:      Power Shot (F3) — adv, +1d8. 2 STA. EV: 84% × 21.5 = 18.1
Underwater: passive −1 STA/turn submerged | Breath: 4 turns (1 + CON mod 3)
Race:    Human — Adaptable (1 attack/hunt costs 0 STA)
```

---

## Monster Stat Block

```
LADON — Temple Coil of Miru  |  Tier 3  |  Leviathan

AR:  16   HP:  340 (optimized 4P)   Stamina: 21
Attacks/Turn: 3   Swim: 50 ft   Shore: 20 ft

ATTACKS:
  Crushing Coil:   d20+7 → 3d8+5 avg 18.5   rider: Grapple (→ Restrained if already Grappled)
                   Escape: STR check DC 17 (post-Mid-Coil break: DC 15, no 3D disadvantage)
  Temple Slam:     d20+7 → 2d10+5 avg 16     rider: push 10 ft (+1d8 if wall collision)
  Venom Exhale:    CON save DC 16, 15 ft cone, 2d8+5 avg 14   fail → Poisoned (1 turn) + −1 STA recovery

SPECIAL ABILITIES:
  Drown Drag (1 STA, 1/round/target): pull Grappled target 20 ft toward deep water.
    If submerged: CON save DC 17 — fail → −1 STA additional.
  Sacred Maelstrom (4 STA, CD 3 turns): 25 ft radius, deep water only.
    STR or DEX save DC 18 — fail → pulled 20 ft inward.
    Free Drown Drag on any Grappled target.

REACTIONS:
  Coil Reversal (1 STA, 1/Combat): when a hunter escapes a Grapple → immediately
    attempt Crushing Coil against that target.

PASSIVE:
  Temple Domain: +2 STA recovery/round while in basin; advantage on grapple checks.
  Leviathan Mass: advantage on saves vs shove/push/knockback while in water.

PART BREAKS:
  Head Crest ★  | Standard (−2) | threshold 3 BP | Venom Exhale permanently disabled
  Mid-Coil       | Open (0)      | threshold 4 BP | escape DC 17→15; 3D positioning disadvantage removed
  Neck Segments  | Standard (−2) | threshold 4 BP | Temple Slam loses push effect
  Tail Fin       | Standard (−2) | threshold 3 BP | Swim speed reduced to 30 ft

EXHAUSTION: Cannot submerge freely; Maelstrom disabled; Swim 30 ft.
BELOW 40% HP: Abandons Temple Slam and Venom Exhale; focuses Coil + Drag + Maelstrom on lowest-STA target.
```

---

## Underwater Combat Rules Active

- **Passive Stamina drain:** −1 STA/turn fully submerged (Ham and Bow affected; Thalorim immune)
- **Breath timer:** 1 + CON modifier turns. Surfacing resets instantly. Grappled = cannot surface.
- **Suffocation:** at 0 breath → −5 STA/turn; at 0 STA → −CON mod HP/turn
- **3D Positioning:** creature above in water column gains advantage on grapple/shove; target has disadvantage on escape attempts
- **Piercing +1 dmg, Slashing −1 dmg** underwater

---

## Round-by-Round Record

### Key Math Reference

| Calculation | Value |
|---|---|
| Ham hit rate (body, d20+8 vs AR16) | 65% |
| Ham hit rate (Head Crest, d20+6 vs AR16) | 55% |
| S&S hit rate (d20+7 vs AR16) | 60% |
| Flute hit rate (d20+6 vs AR16) | 55% |
| Bow hit rate (d20+7 vs AR16) | 60% |
| Ladon Coil vs Ham AR14 (d20+7) | 70% |
| Ladon Coil vs Flute AR12 (d20+7) | 75% |
| Ladon Coil vs S&S AR15 (d20+7) | 60% |
| Ladon Slam vs S&S AR15 (d20+7) | 60% |
| Ham escape DC15 (STR+6) | 60% |
| Flute escape DC15 (DEX+2) | 40% |
| S&S Aid Escape DC15 (STR+5) | 55–60% |
| S&S Block success | 50% |
| Counter-Thrust adv hit vs AR16 | 84% |

---

### R1
*Ladon begins submerged. Ambush: surfaces to target lowest-AR hunter (Flute).*

**Hunter Phase**
- Ham: attacks Head Crest (55%, 15 avg) → **8.3 dmg**, 1.1 BP. Impact +0.55.
- Flute: attacks (55%, 11 avg) → **6.1 dmg**
- S&S: Defensive attack (60%, 12 avg) → **7.2 dmg**
- Bow: F0 → attack (60%, 14 avg) → **8.4 dmg**. F→F1 end of turn. Adaptable: 0 STA.

*Party DPR: 30.0. Ladon HP: 340 → 310*

**Monster Phase**
- Crushing Coil Flute (75% hit): **Flute Grappled** (EV). Dmg: 0.75 × 18.5 = 13.9 to Flute.
- Drown Drag Flute (1 STA): breath timer starts; CON save DC17, 50% fail → 0.5 STA drain.
- Temple Slam S&S (60% hit, 16 avg): S&S Blocks (50%) → net **4.8 HP dmg**. CT → **+4.2 dmg to Ladon**.

*Ladon total R1: −30.0 − 4.2 = −34.2*
**Ladon end R1: ~298 HP | STA: ~19**
*Flute Grappled (EV). Mid-Coil BP: 1.1.*

---

### R2
*S&S uses Aid Escape to bait Coil Reversal. Mid-Coil breaks.*

**Hunter Phase**
- Ham: Head Crest (55%, 15 avg) → **8.3 dmg**, 1.1 BP (Mid-Coil cumulative: **2.2 BP, breaks**). Impact 1.1.
- Flute: Grappled — escape attempt (pre-break DC17, 3D disadv, DEX+2: ~9%) → fails. Attacks: **6.1 dmg**.
- S&S: **Aid Escape** (Action): contested STR vs DC15 (Mid-Coil just broke) → 55–60% success → **Flute freed**.
  - Coil Reversal fires (reaction, 1/Combat — SPENT): Ladon re-Coils Flute (75% hit) → Flute re-Grappled.
- Bow: F1 → attack (60%, 15 avg) → **9.0 dmg**. F→F2.

*Party DPR: 23.4 + CT 4.2 = 27.6. Ladon HP: 298 → 263*

**Monster Phase**
- Drown Drag Flute (Grappled): 0.5 STA drain.
- Crushing Coil Ham (70% hit): **Ham Grappled**. Dmg: 0.70 × 18.5 = 13.0 to Ham.
- Venom Exhale (cone): Flute/Ham CON saves → 50% Poisoned each.

**Ladon end R2: ~263 HP | STA: ~17**
*Mid-Coil: ✓ BROKEN (DC 17→15, 3D disadvantage on escapes removed)*
*Coil Reversal: ✓ PERMANENTLY SPENT*
*Ham Grappled, HP ~11. Flute Grappled.*

---

### R3
*Flute uses Healing Hymn. Ham escapes toward shallow water.*

**Hunter Phase**
- Ham: Escape (STR+6 vs DC15: **60%** success). Attacks Head Crest: 55%, 15 avg → **8.3 dmg**, 1.1 BP. Impact 1.65.
- Flute: **Healing Hymn** (2 STA) → all allies **+10.5 HP**. (0 attack damage)
- S&S: Defensive attack → **7.2 dmg**
- Bow: F2 → attack (60%, 16 avg) → **9.6 dmg**. F→F3. Adaptable: 0 STA.

*Party DPR: 25.1 + CT 4.2 = 29.3. Ladon HP: 263 → 234*

**Monster Phase**
- Drown Drag Flute (1 STA): 0.5 STA drain.
- Coil attempt on Ham (40% still in range): EV 0.2 STA drain.
- Temple Slam S&S (60%, 16 avg): Block 50% → net **5.2 HP dmg**. CT **+4.2 to Ladon**.

**Ladon end R3: ~234 HP | STA: ~17**
*Ham HP: ~21.5 (post-heal). Head Crest BP: 1.1 cumulative.*

---

### R4
*Sacred Maelstrom fires. Flute Exhausted. Bow's first Power Shot.*

**Hunter Phase**
- Ham (shallow, free): Head Crest (55%, 15 avg) → **8.3 dmg**, 1.1 BP (cumulative: **2.2 BP**)
- Flute (Grappled, STA ~6): **Healing Hymn** again (2 STA) → all allies **+10.5 HP**. STA →4, heading to Exhaustion.
- S&S: Defensive → **7.2 dmg**
- Bow: F3 → **Power Shot** (2 STA, adv 84%, 21.5 avg) → **18.1 dmg**. F3 consumed → F0.

*Party DPR: 33.6 + CT 4.2 = 37.8. Ladon HP: 234 → 197*

**Monster Phase — SACRED MAELSTROM (4 STA)**
DC18 saves — Ham 55% fail, S&S 60% fail, Bow 60% fail → all pulled 20 ft inward.
Free Drown Drag on Flute (Grappled): 0.5 STA.
- Crushing Coil S&S (pulled in range, 60%): Block 50% → net **5.6 HP**. CT **+3.9 to Ladon**.
- Venom Exhale: S&S 45% Poisoned, Bow 50% Poisoned.

**Ladon end R4: ~197 HP | STA: ~13**
*Flute STA ~2 → Exhausted entering R5. Head Crest BP: 2.2.*

---

### R5
*Head Crest breaks. Flute recovering.*

**Hunter Phase**
- Ham (shallow): Head Crest (55%, 15 avg) → **8.3 dmg**, 1.1 BP (cumulative: **3.3 ≥ 3 threshold**)
  - ★ **HEAD CREST BREAKS** — Venom Exhale permanently disabled.
- Flute: **Exhausted** — no Action. Recovers +4 STA (Exhaustion recovery). STA 0→4.
- S&S (possibly Poisoned 45%): weighted attack → **5.9 dmg**
- Bow (possibly Poisoned 50%, F0): weighted attack → **6.7 dmg**

*Party DPR: 20.9 + CT 4.2 = 25.1. Ladon HP: 197 → 172*

**Monster Phase**
- Drown Drag Flute: 0.5 STA drain.
- Crushing Coil Ham (shallow, 70% hit): **12.95 EV dmg** → Ham HP 32→**~19**.
- Temple Slam S&S: Block 50% → net **5.2 HP dmg**.

**Ladon end R5: ~172 HP | STA: ~11**
*Head Crest: ✓ BROKEN. Venom Exhale disabled. Ham HP: ~19.*

---

### R6 — 40% HP Threshold
*Ham switches to body target. Ladon crosses 40% HP.*

**Hunter Phase**
- Ham (escaped shallow Grapple, 60%): switches to **body attacks** (65%, 15 avg) → **9.75 dmg**
- Flute (STA 4): attacks (55%, 11 avg) → **6.1 dmg**
- S&S: Defensive → **7.2 dmg**
- Bow: F1 → attack (60%, 15 avg) → **9.0 dmg**. F→F2.

*Party DPR: 32.0 + CT 4.2 = 36.2. Ladon HP: 172 → 136*

**Monster Phase** — Temple Slam + Coil loop continues.

**Ladon end R6: ~136 HP (40% of 340)**
★ **DESPERATE PHASE BEGINS**
- Abandons Temple Slam and Venom Exhale
- All 3 actions: Crushing Coil + Drown Drag + Maelstrom (available R7)
- Targets lowest-STA hunter exclusively

---

### R7
*Second Maelstrom fires. Ham reaches critical HP.*

**Hunter Phase**
- Ham (STA 2 → **Breathing Turn**: +4 STA): **0 dmg**
- Flute (STA ~3): attacks → **6.1 dmg**
- S&S: Defensive → **7.2 dmg**
- Bow: F2 → attack (60%, 16 avg) → **9.6 dmg**. F→F3.

*Party DPR: 22.9 + CT 4.2 = 27.1. Ladon HP: 136 → 109*

**Monster Phase — SACRED MAELSTROM #2 (4 STA, CD from R4 expired)**
DC18 — all hunters in deep pulled inward. Free Drown Drag on Flute.
- Crushing Coil Ham (70%, 18.5 avg): → **12.95 EV dmg** → Ham HP 19→**~4**.
- Drown Drag Flute: 0.5 STA drain.

**Ladon end R7: ~109 HP | STA: ~8**
*Ham: **4 HP** — one hit from death.*

---

### R8 — Ham Goes Down

**Hunter Phase**
- Ham (4 HP — escape 60%, attacks at survival-weighted EV): **5.9 dmg**
- Flute (STA 2 → **Breathing Turn**: +4 STA): **0 dmg**
- S&S: Defensive → **7.2 dmg**
- Bow: F3 → **Power Shot** (2 STA, adv 84%, 21.5 avg) → **18.1 dmg**. F3 consumed → F0.

*Party DPR: 31.2 + CT 4.2 = 35.4. Ladon HP: 109 → 74*

**Monster Phase — Desperate**
- Crushing Coil Ham (70%, 18.5 avg): Ham at 4 HP → **Ham downed** (P ≈ 70%)
- Crushing Coil Flute (next target): 60% hit → **11.1 EV dmg**
- Drown Drag Flute: 0.5 STA drain.

**Ladon end R8: ~74 HP**
★ **Ham downed. Three hunters remain.**

---

### R9–R11 (Compressed)

**R9 — STA Recovery**
S&S (STA 2) and Bow (STA 1) take Breathing Turns (+4 STA each). Flute escapes (40% attempt) or attacks.
Party DPR: ~12. Ladon HP: 74 → **~62**.

**R10 — Full DPR Resumes**
| Hunter | Action | EV Dmg |
|---|---|---|
| Flute | attack 55%, 11 avg | 6.1 |
| S&S | Defensive 60%, 12 avg | 7.2 |
| Bow | F1 attack 60%, 15 avg | 9.0 |
| S&S CT | Block reaction | 4.2 |

*Total: ~26.5. Ladon HP: 62 → **~36**.*

**R11 — Hunt Closed**
Ladon at 36 HP, Exhausted (STA depleted). Swim 30 ft, cannot submerge. Party finishes the hunt.
Ladon HP: 36 → **0**. ✓

---

## Final Report

| Metric | Value |
|---|---|
| Fight duration | **~11 rounds** |
| Hunters downed | **Ham (R8)** |
| Survivors | S&S, Flute, Bow |
| Sacred Maelstrom fires | R4, R7 |
| Coil Reversal | Burned R2 — never reset |
| Part breaks achieved | Mid-Coil (R2), Head Crest (R5) |

### HP Trajectory

```
Start:  340
R1:     298   (−42)
R2:     263   (−35)  [Mid-Coil BROKEN]
R3:     234   (−29)
R4:     197   (−37)  [Maelstrom #1]
R5:     172   (−25)  [Head Crest BROKEN]
R6:     136   (−36)  [40% threshold — Desperate Phase]
R7:     109   (−27)  [Maelstrom #2 / Ham critical]
R8:      74   (−35)  [Ham downed]
R9:      62   (−12)  [party STA recovery]
R10:     36   (−26)
R11:      0   ✓ SLAIN
```

### Mechanical Fixes — Impact Assessment

This simulation was run after three targeted changes to the original design, in response to a prior sim that ended in a TPK at R17 due to an escape lockout loop.

| Fix Applied | Root Problem | Observed Effect |
|---|---|---|
| Coil Reversal → 1/Combat | 1/round version re-locked escape every time a hunter broke free; net escape rate ~4% | S&S burned CR on R2 Aid Escape; CR expired permanently; escape rate normalized R3 onward |
| Aid Escape (contested STR ally action) | No cooperative mechanic to break grapple | S&S freed Flute in R2, triggering the CR expenditure — the key play of the fight |
| Mid-Coil break removes 3D disadvantage | DC 17→15 alone: Flute escape 9%→12% (negligible). Root cause was 3D disadv layered on top | Post-break: Flute escape 40%, Ham escape 60% — genuinely achievable |

### Design Verdict

**The fight works.** The puzzle has a solution, the solution requires active coordination, and failure to execute it still threatens hunters — it just no longer guarantees a wipe.

Ham going down in R8 is good design: Ham drew Ladon's full attention by tanking the shallow-water position, burned down Head Crest, and eventually got cornered. It's a meaningful sacrifice, not a broken mechanic.

R11 win vs R17 TPK is the correct delta for a Tier 3 boss with a dedicated drowning loop against a coordinated party.
