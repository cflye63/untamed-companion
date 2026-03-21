# Sim Config 2v2 — "Status Web" vs Melifur (Claws Corrected Mechanics)
**Party:** Trolian Whip, Human Claws, Dragonian Wand, Human Hunting Flute
**Tier:** 2 | **HR:** 7 | **Mode:** EV (expected value)
**Monster:** Melifur (Verdant Hollow, T2/T2.5) | **HP:** 220 (optimized 4P)
**Diagnostic question:** Does corrected Claws (bonus claw attack + Rush reset = miss ALL) make Claws overpowered? Do 3 Resin Bomb cycles create meaningful Rush reset tax? Is Wand near-KO risk worse at HP 220?

---

## Mechanic Corrections vs sim-config2

sim-config2 used incorrect Claws mechanics. This re-run applies weapon page rules exactly:

| Mechanic | sim-config2 (incorrect) | v2 (corrected) |
|----------|-------------------------|----------------|
| Attacks per Action | 1 (main only) | 2 (main 1d8+DEX + bonus 1d8 no mod) |
| Rush reset trigger | Any single miss | Miss ALL attacks in a turn |
| Rush 3+ benefit | +1 flat damage | Bleeding on hit (no save) + +10ft move |
| Bonus claw Rush | Not modeled | Yes — each claw hit generates Rush |
| Pounce Rush spend | "Expend Rush stacks +1 flat each" | No spending — Rush 3+: +30ft leap, +1d6 |

---

## Roster

### Trolian Whip | HR 7
| Stat | Score | Mod |
|------|-------|-----|
| STR | 3 | +1 |
| DEX | 10 | +5 |
| CON | 6 | +3 |
| INT | 3 | +1 |
| INS | 4 | +2 |
| CHA | 5 | +2 |

| Combat | Value |
|--------|-------|
| AR | 15 (Light) / 16 stationary (Trolian Anchored Frame) |
| HP | 43 (CON 6×6 + HR7) |
| Stamina | 9 (6 + CON mod 3) |
| Attack | d20+7 → 1d8+5 avg 9.5 |
| Save DC | 17 |
| React | Dodge (Light armor) |

**T1 Technique:** Lash — 1 STA. On hit choose Trip (DEX save DC17 → Prone) or Disarm.
**T2 Technique:** Pull — 2 STA. On hit: deal damage + pull 15ft toward you + one ally within 5ft makes a free Reaction attack.
**Trolian Rooted Resilience:** 1 STA saved per failed save → next Reaction. Flowstep: ignores difficult terrain (resin pools).

---

### Human Claws | HR 7
| Stat | Score | Mod |
|------|-------|-----|
| STR | 3 | +1 |
| DEX | 11 | +5 |
| CON | 5 | +2 |
| INT | 3 | +1 |
| INS | 3 | +1 |
| CHA | 3 | +1 |

| Combat | Value |
|--------|-------|
| AR | 15 (Light: 10 + DEX 5) |
| HP | 37 (CON 5×6 + HR7) |
| Stamina | 8 (6 + CON mod 2) |
| Attack | d20+7 → main 1d8+5 avg 9.5 / bonus 1d8 avg 4.5 (no mod, 0 STA) |
| Save DC | 17 |
| React | Dodge (Light armor) |

**Rush Stack:** +1 per hit (cap 5). Reset: miss ALL attacks in a turn OR Stunned/Restrained. Rush 3+: Bleeding on every hit (no save) + +10ft movement.
**Bleeding:** 1d4 (avg 2.5) per stack at start of target's turn. Stacks (max 3).
**T1 Technique:** Rend — 1 STA (Human discount). Three claw attacks (each 1d8+DEX). Each hit applies 1 Bleeding stack (no save).
**T2 Technique:** Pounce — 2 STA, Commitment. Leap 20ft (30ft at Rush 3+), advantage attack; on hit: 1d8+DEX+1d6 (+1d6 at Rush 3+). STR save DC17 → Prone.
**Human:** 1×/round reduce STA cost by 1 → Attack Action costs 0 STA every round.

---

### Dragonian Wand | HR 7
| Stat | Score | Mod |
|------|-------|-----|
| STR | 3 | +1 |
| DEX | 3 | +1 |
| CON | 6 | +3 |
| INT | 10 | +5 |
| INS | 5 | +2 |
| CHA | 4 | +2 |

| Combat | Value |
|--------|-------|
| AR | 12 (Medium) |
| HP | 43 (CON 6×6 + HR7) |
| Stamina | 9 (6 + CON mod 3) |
| Cluster Attach | DEX save DC17 vs Melifur DEX+4: 60% grounded / 16% aerial (Honey Sovereignty DEX adv) |
| Cluster Bomb (T2) | 1d6+5 avg 8.5/cluster |
| Save DC | 17 |
| React | Dodge |

**T1 Technique (passive):** Hex Charge — Fire/Scorch: 1d4 fire/cluster end of target's turn; detonate → CON save DC17 → Burned.
**T2 Technique (passive):** Cluster Fieldcraft — terrain wards, host drag, Tripwire reaction (1 STA).
**Dragonian:** +1 STA on first action → Burned applied directly (no save), active from R2.

---

### Human Hunting Flute | HR 7
| Stat | Score | Mod |
|------|-------|-----|
| STR | 3 | +1 |
| DEX | 3 | +1 |
| CON | 6 | +3 |
| INT | 3 | +1 |
| INS | 6 | +3 |
| CHA | 10 | +5 |

| Combat | Value |
|--------|-------|
| AR | 12 (Medium) |
| HP | 43 (CON 6×6 + HR7) |
| Stamina | 9 (6 + CON mod 3) |
| Attack | d20+7 → 1d8+5 avg 9.5 |
| Save DC | 17 |
| React | Dodge |

**Active Song:** Courage — Fast Action, ongoing. All allies +1 attack rolls.
**T2 Song:** Discord — switch Fast Action. Enemies in range take 1d4 psychic (avg 2.5) at start of their turn.
**T2 Technique:** Healing Hymn — 2 STA. All allies within 30ft regain 1d8+CHA avg 9.5 HP. At 3 Notes: +1d8 bonus (avg 13.5 HP healed).
**Notes:** ~1/round while Courage active. **Human:** 1×/round reduce STA cost by 1 → Resonant Strike costs 0 STA every round.

---

## Monster Block — Melifur (T2/T2.5)

| Stat | Value |
|------|-------|
| AR | 13 |
| HP | 220 (optimized 4P) |
| Stamina | 18 |
| Attacks/Turn | 3 |

**Attacks:**
- Drake Sting (1 STA): d20+6 → 2d8+4 avg 13 | rider: CON save DC16 → Poisoned 1 turn
- Mandible Bite (1 STA): d20+5 → 2d6+3 avg 10 | rider: +1d6 if target Poisoned or Restrained
- Wing Gust (1 STA): DEX save DC16 → 1d8+4 avg 8.5; fail: pushed 10ft + Staggered

**Abilities:**
- Royal Resin Bomb (2 STA, CD 2): d20+6 → 2d10+4 avg 15; creates 10ft resin pool 2 rounds; STR save DC16 → Restrained
- Swarm Call (3 STA, CD 2): 30ft aura; CON save DC14 end of hunter turns → 1d6 Poison damage; ranged attacks vs Melifur have disadvantage; ends if Melifur lands

**Reactions:** Buzzing Dodge (2 STA, CD 1): 2nd+ ranged attack → DEX contest (d20+4 vs attack); success: ascend 30ft, attack misses. **Note: Wand cluster Place is a DEX save, not an attack roll — Buzzing Dodge does not trigger against it.**

**Exhaustion Rule:** Falls Prone, fly speed 0, Swarm Call disabled, attacks at half effectiveness

**Part Breaks:**
- Wings (2 called-shot hits, −2 acc): fly 20ft, Buzzing Dodge disabled, Honey Sovereignty DEX advantage lost
- Sting (2 called-shot hits): Drake Sting loses Poison rider
- Resin Gland (3 called-shot hits): Resin Bomb loses Restrained rider

---

## Hit Table

| Matchup | Hit % |
|---------|-------|
| Whip d20+7 vs Melifur AR13 (Courage +1 = d20+8) | 80% |
| Claws d20+8 (Courage) vs AR13 — main and bonus | 80% |
| Claws called shot d20+5 vs AR13 (wing break reaction) | 65% |
| Wand cluster Place DC17 vs Melifur DEX+4 — grounded | 60% |
| Wand cluster Place DC17 vs Melifur DEX+4 — aerial (Honey Sovereignty adv) | 16% |
| Flute d20+8 (Courage, self-buff) vs AR13 | 80% |
| Melifur Drake Sting (d20+6) vs Whip AR16 (Anchored) | 65% |
| Melifur Drake Sting vs Claws AR15 | 75% |
| Melifur Drake Sting vs Wand/Flute AR12 | 95% |
| Melifur Mandible Bite (d20+5) vs Whip AR16 | 50% |
| Melifur Mandible Bite vs Claws AR15 | 55% |
| Melifur Mandible Bite vs Wand AR12 (Poisoned rider) | 70% |
| Melifur Wing Gust DEX DC16 vs Whip/Claws DEX+5 | 50% fail |
| Melifur Wing Gust vs Wand/Flute DEX+1 | 70% fail |
| Resin Bomb STR DC16 vs all (STR+1) | 70% fail → Restrained |
| Swarm Call CON DC14 vs hunters (CON mod +2/+3) | ~50% fail → 1.75 exp dmg/round |
| Drake Sting Poison CON DC16 (CON mod +2) | 65% fail |
| P(miss ALL attacks — main + bonus) | 0.20 × 0.20 = 4% → Rush barely resets |

---

## Round Log

```
── R1 ──────────────────────────────────────────────────────────
[Melifur airborne; Whip+Claws cannot reach. Wand aerial attach: 16% only.]
HUNTERS: Whip Preparation (0 STA, Guarded Stance +2 STA end turn) |
         Claws Breathing Turn (+4 STA) |
         Wand Place+Dragonian (2 STA) 16% attach, Burned 16% chance active |
         Flute Courage (Fast) + Resonant Strike (0 STA) 0.80×9.5=7.6dmg N1
  ▸ Party dmg: 7.6 (cum: 7.6)  Conditions: Deafened 60% on Melifur; Burned 16% active
MONSTER (220 HP, 18 STA): Swarm Call (3 STA, aura active) | Resin Bomb (2 STA) → Wand+Flute
         zone [13.5 exp each; Wand Dodges: 75%→dis 56%: 7.6exp; Flute Dodges: 56%: 7.5exp] |
         Wing Gust (1 STA) → party [Whip/Claws 50%×8.5=4.25exp; Wand/Flute 30%×8.5=2.55exp]
  ▸ STA: 18→12  Dmg taken: 8.0  Party damage: Wand ~7.6 + 70% resin pool; Flute ~7.5; all 4 Wing Gust ~3-4
STATE: Mon HP 212/220 STA 12 Swarm-aura | Whip ~38.75/43 STA11 | Claws ~32.75/37 STA12 |
       Wand ~28.2/43 STA6 [Restrained 70% resin zone] | Flute ~26.7/43 STA8 N1

── R2 ──────────────────────────────────────────────────────────
[Swarm aura: 4×50% fail × 3.5 avg = 7.0 exp dmg to party. Wing Gust R1 Stagger: 70% chance each melee hunter Staggered R2.]
HUNTERS: Whip 70% Staggered→idle (Breathing Turn 30%: +1.2 STA blend) |
         Claws 70% Staggered→idle (Breathing Turn: +1.2 STA blend) |
         Wand Place cluster (1 STA, 16% aerial attach) |
         Flute Resonant Strike (0 STA, dis+Swarm, Buzzing Dodge contest) 0.64×0.575×9.5=3.5dmg N2
  ▸ Party dmg: 3.5 (cum: 11.1)  Swarm aura: 7.0 to party; Conditions: Buzzing Dodge costs Melifur 2 STA
MONSTER (212 HP, 10 STA after Buzzing Dodge): Drake Sting dive→Wand [Restrained, adv: ~97%]
         12.6exp + Poisoned 65% | Mandible Bite→Wand [Poisoned rider, 70%×13.5=9.5exp] |
         Wing Gust (1 STA) → party re-Stagger 50%/30% | REACTION: Claws wing called shot 65% → Wing Break 1
  ▸ STA: 10→7  Dmg taken: 3.5  Wand takes ~22 expected total from dive combo → near-lethal
STATE: Mon HP 208.5/220 STA 7 | Whip ~38/11 | Claws ~27/12 | Wand ~4.9/43 STA5 ⚠️ CRITICAL |
       Flute ~22/8 N2 | Wings: 0.65/2 progress

── R3 ──────────────────────────────────────────────────────────
[Wand ~5 HP — Healing Hymn mandatory. Flute 3 Notes available → full boost.]
HUNTERS: Flute Healing Hymn (2 STA, 3 Notes!) all allies +13.5 avg HP STA6 N0 → Wand rescued to 18.4 |
         Whip 50% Staggered → 50% acts: Lash (1 STA) 0.5×0.80×9.5=3.8dmg + Trip DC17 60%→Prone |
         Claws 50% Staggered → 50% acts: Attack+Bonus 0.5×(7.6+3.6)=5.6dmg R→1 |
         Wand Breathing Turn (+4 STA)
  ▸ Party dmg: 9.4 (cum: 20.5)  Conditions: Melifur Prone 30% (Trip). DoT: Burned+Scorch 0.8
MONSTER (208.5 HP, 7 STA): Swarm Call re-CD clear (3 STA→STA 4) | Drake Sting dive→Claws
         75%×13=9.75exp Poisoned 65% | Mandible Bite→Claws (Poisoned rider) ~77%×13.5=10.4exp |
         REACTION: Whip wing called shot 65% → Wing Break 2 (wings broken at ~42% probability)
  ▸ STA: 7→2  Dmg taken: 10.2+0.8=11.0 (cum: 31.5)
  ▸ Wings: 1.30/2 expected progress (42% chance both landed; wings fully broken)
STATE: Mon HP 197/220 STA 2 | Whip 41/43 STA10 | Claws ~17/37 STA12 R1 |
       Wand 18.4/43 STA9 | Flute 24/43 STA6 N0 | Wings potentially broken

── R4 ──────────────────────────────────────────────────────────
[Melifur STA 2 — Burned −1 at start → STA 1. Melifur lands; Swarm ends. Whip/Claws now in range.]
[Rush crosses 3 this round — Bleeding begins. Claws main+bonus both at 80% hit.]
HUNTERS: Claws Attack+Bonus (0 STA Human) 0.80×9.5+0.80×4.5=7.6+3.6=11.2dmg; Rush 3+ active
         → 2 Bleeding stacks applied (each hit) |
         Whip Pull T2 (2 STA) 0.80×9.5=7.6dmg + Claws free Reaction 0.80×(9.5+4.5)=11.2 |
         Wand Place+Dragonian (2 STA, 60% grounded) Burned confirmed; old cluster detonate: 1.4dmg |
         Flute Resonant Strike (0 STA, Swarm ended) 0.80×9.5=7.6dmg N1
  ▸ Party dmg: 38.4 (cum: 59.0)  Bleeding: 2 stacks active; Burned confirmed; Scorch 1.5
MONSTER (197 HP, 1 STA after Burned start): Drake Sting→Claws (1 STA) → STA 0 EXHAUSTED
         Falls Prone, fly=0, Swarm Call disabled. End of turn DoT: Burned 2.5+Scorch 1.5=4.0
  ▸ STA: 1→0 EXHAUSTED  Dmg taken: 38.4+4.0=42.4 (cum: 73.9)
STATE: Mon HP 154.6/220 STA 0 EXHAUSTED PRONE | Whip 41/43 STA8 | Claws ~17/37 STA12 R3+ Bleed×2 |
       Wand 18.4/43 STA7 | Flute 24/43 STA8 N1 | Swarm ends

── R5 ──────────────────────────────────────────────────────────
[Melifur Exhausted + Prone: adv attacks, half effectiveness. Recovers 4 STA end of turn.]
[Bleeding 3 stacks by R5 start: 7.5 DoT/start of Melifur turn]
HUNTERS (adv all — Prone+Exhausted, ~96% hit): Claws Attack+Bonus adv 0.96×9.5+0.96×4.5=9.1+4.3=13.4dmg
         Rush 4→5(cap); Bleeding stacks → cap at 3 |
         Whip Pull T2 adv (2 STA) 0.96×9.5=9.1dmg + Claws Reaction adv 0.96×(9.5+4.5)=13.4 |
         Wand Detonate (1 STA) 0.60×8.5=5.1 + Place+Dragonian (2 STA) new cluster |
         Flute adv Resonant Strike (0 STA) 0.96×9.5=9.1dmg N2
  ▸ Party dmg: 49.9 (cum: 108.9)  DoT: Bleeding 7.5+Burned 2.5+Scorch 1.5=11.5 (cum: 120.4)
MONSTER: No actions (Exhausted). Recovers 4 STA end of turn.
  ▸ Dmg taken: 61.4  Conditions: Exhaustion cleared (4 STA restored)
STATE: Mon HP 93.2/220 STA 4 | Whip 41/43 STA8 | Claws ~7.6/37 STA10 R5 Bleed×3 ⚠️ CRITICAL |
       Wand 18.4/43 STA4 | Flute 24/43 STA6 N2

── R6 ──────────────────────────────────────────────────────────
[Melifur STA 4. Grounded, Prone cleared (stand 2 STA→2). Below 50% HP → half effectiveness still via prior Exhaustion penalties? No — Exhaustion cleared. Full attacks at half-effectiveness only while Exhausted.]
[Claws ~7.6 HP — Healing Hymn not yet available (N2). Flute must choose: heal or Discord.]
HUNTERS: Claws Pounce T2 (2 STA, Rush 3+ active: 30ft leap, adv, 1d8+5+1d6+1d6)
         0.96×16.5=15.84dmg; STR DC17 → Prone 60% |
         Whip Pull T2 (2 STA) 0.80×9.5=7.6dmg + Claws Reaction (Prone→adv 0.96) 0.96×14=13.4 |
         Wand Detonate (1 STA) 0.60×8.5=5.1 + Place+Dragonian (2 STA) new cluster |
         Flute Discord switch (Fast) + Resonant Strike (0 STA) 0.80×9.5=7.6dmg N0 Discord active
  ▸ Party dmg: 49.5 (cum: 158.4)  DoT: Bleeding 7.5+Discord 2.5+Burned 2.5+Scorch 1.5=14.0 (cum: 172.4)
MONSTER (93.2 HP, 4 STA): Stand (2 STA→2) | Drake Sting→Claws [75%] 9.75×0.5=4.9exp (half-eff…
         wait, no — half-eff only while Exhausted. Melifur not Exhausted R6 start.) Full attacks.
         Drake Sting→Claws [75%] 9.75exp Poisoned 65% | Mandible Bite→Claws [55%+Poisoned] 6.2exp |
         STA: 2→0 EXHAUSTED (again)
  ▸ STA: 2→0 EXHAUSTED  Dmg taken: 49.5+14.0=63.5 (cum: 235.9)
  ▸ Claws: 7.6−4.9−6.2=−3.5 expected → 50%+ chance KO without healing
  ▸ Melifur HP: 93.2−63.5=29.7. Note: Claws in crisis.
STATE: Mon HP 29.7/220 STA 0 EXHAUSTED | Whip 41/43 STA6 | Claws ~3/37 STA8 ⚠️ CRITICAL |
       Wand 18.4/43 STA1 (Breathing Turn R7) | Flute 24/43 STA6 N0

── R7 ──────────────────────────────────────────────────────────
[DoT fires first: Bleeding 7.5 + Discord 2.5 = 10.0 → Melifur HP: 29.7−10.0 = 19.7 before hunters act.]
HUNTERS: Claws Pounce T2 adv (2 STA, Rush 5) 0.96×16.5=15.84dmg → Melifur HP 19.7−15.84=3.9
         (Whip finishes) → ★ MELIFUR SLAIN ★
```

---

## Result

```
═══ RESULT: Party wins R7 (Claws Pounce / DoT kill) ═══
Mon HP:        0 / 220
Avg hunter HP: 26/41.5  (Whip 95%, Claws ~8% CRITICAL, Wand ~43%, Flute ~56%)
Avg hunter STA: 6.1 avg (Whip 6, Claws 8, Wand 1 pre-Breath, Flute 6)
Breaths taken: 3 (Claws R1, Whip R1 — both forced by aerial lockout; Wand R3 emergency)
Parts broken:  Wings 42% probability broken by R4 (1.30/2 expected break progress)
Mon STA→0:     R4 (first Exhaustion), R6 (second Exhaustion)
Party DPR avg: ~35.0/round (R1–R7) | Monster DPR avg: ~14.2/round (R1–R3 heavy; R4+ half-eff Exhausted)
Kill round:    7
STA pressure:  Medium (Human discount keeps Claws STA healthy; Wand drained by R6)
HP pressure:   High (Wand near-KO R2 → 4.9 HP; Claws at ~3 HP multiple times R5–R7)
```

---

## Corrected Claws Mechanics — Delta Analysis

| Mechanic | sim-config2 | v2 corrected | Impact |
|----------|------------|--------------|--------|
| Bonus claw hits/round | 1 | 2 | +3.6 DPR/round |
| Rush reset probability | ~30%/round | ~4%/round | Rush near-permanent once active |
| Bleeding at Rush 3+ | Partial/unclear | Both main + bonus hits | +7.5 DoT/round at 3 stacks |
| Rush 3 reached by round | R4 | R4 (same, but more reliable) | Rush maintenance more stable |
| Resin Bomb Rush resets | Projected 3 cycles | 0 cycles (1 Resin Bomb only) | No material effect at STA 18 |
| Claws DPR — ground phase | ~9–11 | ~20–28 | ~2× higher in active phase |
| Kill round (HP 220) | ~R8–R9 est. | R7 | 2 rounds faster |

**Verdict:** Corrected Claws is significantly stronger than sim-config2 modeled. The bonus claw's primary value is not raw damage but Rush acceleration and Rush maintenance — turning Rush 3 Bleeding from an occasional bonus into a near-permanent DoT engine. P(miss ALL attacks) = 4% per round, making Rush 3 essentially permanent once activated. In this sim, Bleeding at 3 stacks delivered 7.5 DoT/round for the final 3 rounds, contributing ~22.5 cumulative damage — ranking behind only Claws direct attacks as a damage source. The 3-Resin-Bomb model from the invocation never materialized: Melifur's STA 18 pool is exhausted before a second Resin Bomb CD clears.

---

## Flags

- **Wand near-lethal R2:** Wand at ~4.9 HP entering R3 after Resin Bomb + Drake Sting dive combo. Restrained (70% STR fail) removed Dodge while in the resin zone. This is identical risk to sim-config2 — HP 220 does not add Resin Bomb cycles because Melifur's STA collapses the same way. The risk is structural, not scaling.
- **Healing Hymn critical (not comfort):** Hymn at 3 Notes (13.5 HP) was not optional — it was triage. Without it, Wand KOs at R3. Identical finding to sim-config2. This composition has zero fallback if Flute goes down in the aerial phase.
- **Claws critical HP cycle:** Claws visited ~3–8 HP range three times (R5, R6, R7). Melifur's Drake Sting + Mandible Bite chain consistently bypassed Dodge (no usable Dodge reaction while Poisoned from Sting). No second Healing Hymn available (Flute switched to Discord R6). The near-death arc is reliable, not a spike.
- **Melifur STA collapses faster than HP:** Two Exhaustion events (R4, R6) while Melifur was at 70% and 42% HP respectively. Swarm Call (3 STA) + Buzzing Dodge (2 STA/trigger) + Resin Bomb (2 STA) + 3 attacks/turn (3 STA) = 10 STA/active round. At STA 18 this is ~1.8 rounds of full activity. STA is the real fight clock, not HP.
- **Buzzing Dodge does not intercept Wand clusters:** DEX save ≠ attack roll. Wand's cluster system completely bypasses Melifur's aerial reaction. At only 16% aerial attach, this is balanced — but is a significant design seam worth an explicit ruling at the table.
- **Resin Bomb 3-cycle model requires STA 22–24:** The invocation modeled 3 Resin Bomb cycles. Only 1 occurred at STA 18. To express the full Resin Bomb pressure kit (3 cycles = ~65% P(Claws Restrained at least once) = ~1–2 Rush resets expected), Melifur would need STA 22–24. The Rush reset tension the user flagged as a concern never actually manifested.
- **Wing break threshold 2 is too low for 3-melee parties:** With Claws + Whip both taking Reaction called shots on dives, 1.30 expected break progress against a threshold of 2 hits means 42% chance wings break on the first two dives. The break becomes automatic, not a strategic choice.

---

## Tuning Notes

1. **Claws confirmed strong — not broken.** The bonus claw + near-permanent Rush 3 maintenance + Bleeding DoT stack make Claws the highest sustained single-target DPS in this party on the ground phase (~20–28 EV/round vs ~8–10/round in sim-config2's incorrect model). However, Claws is also the most HP-vulnerable hunter. The 4% Rush reset probability and fragile HP pool (37 HP, no block/parry) are genuine counterweights. The mechanical loop is valid: high output, high risk, correct for the weapon's intended identity.

2. **Melifur STA needs tuning for HP 220.** At STA 18, Melifur Exhausts at R4 (70% HP remaining). The aerial puzzle collapses before the HP fight is halfway done. For HP 220, raise Melifur STA to **22–24** to sustain 3 full dive cycles, 2 Swarm Call activations, and at least 2 Resin Bomb cycles before Exhaustion. This is the only way to test whether Rush reset via Restrained is a real DPR tax or an edge case. At STA 18 the test is inconclusive.

3. **Resin Bomb → Rush reset interaction requires STA 24 variant to test.** The projected 3-cycle model never fires. Run a STA 24 variant to validate: P(Claws Restrained at least once) ≈ 65% across 3 cycles, ~1–2 expected Rush resets, ~2 rounds rebuilding at 0→3 Rush. This is the correct tension test for whether Resin Bomb creates a meaningful DPR tax on the Claws hunter.

4. **Wing break threshold should scale with melee party size.** 2 hits is appropriate for a party with 1 melee hunter using called shots as a deliberate action choice. Against a party with 2 melee hunters taking free Reaction called shots on every dive, the threshold collapses automatically. Recommendation: raise to 3 hits for general tuning, or gate Reaction wing breaks behind the hunter being directly targeted by the dive (not any hunter within range).

5. **Wand survivability note.** Wand is structurally the most vulnerable hunter in this party — AR12, no Dodge while Restrained, and Resin Bomb is a direct hard counter to its cluster range. Wand should explicitly position away from Flute to split Resin Bomb targeting. If Melifur zones both support hunters simultaneously, the party loses its recovery vector. This is a table-level communication issue (Wand + Flute should not cluster), not a mechanical change.

6. **Flute Notes economy at HP 220 (7 rounds):** Flute Hymn'd at N3 in R3, resetting to N0. At 1 Note/round with Courage, N3 again by R6. Flute had a second Healing Hymn window available in R6/R7. Flute chose Discord instead (2.5 DoT/round). Discord + Bleeding DoT wall (7.5+2.5+2.5+1.5 = 14/round) may have accelerated kill by ~1 round. Whether to use R6 Hymn (triage for Claws) vs Discord is a genuine decision with HP pressure context — correct for a 7-round fight.

---

*Generated by /sim-hunt — EV mode, T2 HR7 midpoint | Claws corrected mechanics (bonus claw, Rush reset = miss ALL, Rush 3+ = Bleeding)*
