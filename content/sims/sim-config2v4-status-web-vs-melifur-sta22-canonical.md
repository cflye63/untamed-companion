# Sim Config 2v4 — "Status Web" vs Melifur (STA 22 — Canonical Calibration)
**Party:** Trolian Whip, Human Claws, Dragonian Wand, Human Hunting Flute
**Tier:** 2 | **HR:** 7 | **Mode:** EV (expected value)
**Monster:** Melifur (Verdant Hollow, T2/T2.5) | **HP:** 220 | **STA: 22 (canonical)**
**Diagnostic question:** Is STA 22 the sweet spot between STA 18 (too few bomb cycles) and STA 24 (kills Claws)?

This is the final calibration sim in the series. STA 22 targets ~2 Resin Bomb cycles and Exhaustion around R5. All other Melifur stats unchanged.

**Series summary:**
- sim-config2v2 (STA 18): Exhaustion R4, 1 Resin Bomb, kill R7. Fight too short; Rush reset never tested.
- sim-config2v3 (STA 24): Exhaustion R6, 2 bombs on Claws + 3rd on Whip, Claws KO'd R4, kill R8. Too punishing.
- **sim-config2v4 (STA 22): Exhaustion R4 end (Burned drain effect), 2 bombs on Claws, Claws alive, kill R6. ✓**

---

## Roster

Same builds as sim-config2v2. Summary:

| Hunter | AR | HP | STA | Attack | React |
|--------|----|----|-----|--------|-------|
| Trolian Whip | 15/16 stat. | 43 | 9 | d20+7 → 1d8+5 avg 9.5 | Dodge |
| Human Claws | 15 | 37 | 8 | d20+7 → main 1d8+5 / bonus 1d8 | Dodge |
| Dragonian Wand | 12 | 43 | 9 | Place DC17 → cluster 1d6+5 | Dodge |
| Human Hunting Flute | 12 | 43 | 9 | d20+7 → 1d8+5 avg 9.5 | Dodge |

Claws mechanics (corrected): two attacks per Attack Action (0 STA via Human discount), Rush reset = miss ALL or Restrained, Rush 3+ = Bleeding (no save, stacks max 3 = 7.5/round).

---

## Monster Block — Melifur (STA 22 Canonical)

| Stat | Value |
|------|-------|
| AR | 13 |
| HP | 220 |
| **Stamina** | **22 (canonical for HP 220 optimized 4P)** |
| Attacks/Turn | 3 |

**Projected STA burn path (STA 22, no Burned drain):**
- R1: Swarm Call (3) + Resin Bomb (2) + Wing Gust (1) = 6 → STA 16
- R2: 3 attacks = 3 → STA 13
- R3: Swarm Call (3) + Resin Bomb (2) + 1 attack (1) = 6 → STA 7
- R4: 3 attacks = 3 → STA 4
- R5: Resin Bomb (2) + 2 attacks (2) = 4 → STA 0 → Exhaustion end R5

**Actual burn with Dragonian Wand Burned drain (-1 STA/round from R2):**
- Burned shaves -3 STA total (R2 through R4), shifting Exhaustion from end R5 → end R4.
- Without Wand: Exhaustion R5 end (as projected). With Wand: Exhaustion R4 end.
- Both outcomes land kill in R6 — STA 22 is robust across compositions.

---

## Hit Table

| Matchup | Hit % |
|---------|-------|
| Whip/Claws/Flute d20+7 vs AR13 (Courage) | 80% |
| Claws Pounce (adv) vs AR13 | 96% |
| Claws called shot wing break d20+5 vs AR13 | 65% |
| Wand Place DC17 vs Mel DEX+4 — aerial (Honey Sovereignty adv) | 36% |
| Wand Place DC17 vs Mel DEX+4 — grounded | 60% |
| Melifur Drake Sting d20+6 vs Whip AR15/16 | 60% / 55% |
| Melifur Drake Sting vs Claws AR15 | 60% |
| Melifur Drake Sting vs Wand/Flute AR12 | 75% |
| Melifur Mandible d20+5 vs Whip AR16 | 50% |
| Melifur Mandible vs Claws AR15 | 55% |
| Melifur Wing Gust DEX DC16 vs Whip/Claws | 50% fail |
| Melifur Wing Gust vs Wand/Flute | 30% fail (DEX +1) → Dodge: 9% hit |
| Resin Bomb STR DC16 vs hunters (STR+1) | 70% fail → Restrained |
| Buzzing Dodge vs Flute (only ranged attack roll) | Flute wins ~65% → effective 52% Flute hit |
| Note: Wand Place is a DEX save — Buzzing Dodge does NOT trigger | — |

---

## Round Log

```
── R1 ──────────────────────────────────────────────────────────
[Melifur airborne. Whip/Claws reach range limited. Wand aerial attach 36%.]
HUNTERS: Flute Courage (Fast) + Resonant Strike (0 STA) 7.6dmg N1 |
         Whip Lash (1 STA) 7.6dmg; Trip DEX DC17 vs Honey-Sov-adv = 16% fail → Prone marginal |
         Claws Rend (1 STA) 3 attacks 80% = 22.8dmg; Rush 0→+2.4→~2.4 |
         Wand Place+Dragonian (2 STA) 36% attach; Burned applied directly STA7
  ▸ Party dmg: 38.0 (cum: 38.0)  Conditions: Burned active; Deafened 60%; Rush ~2.4
MONSTER (220 HP, 22 STA): Swarm Call (3 STA, aura live) | Resin Bomb (2 STA, 1st cycle)
         → Whip+Claws zone; Whip immune (Flowstep); Claws STR DC16 70%→Restrained → Rush RESET 0 |
         Drake Sting (1 STA) → Whip [55% Dodge→30%] 3.9exp | Swarm aura ticks ~7.2 to party
         DoT end of turn: Burned 2.5 + Scorch 0.9 = 3.4
  ▸ STA: 22→16  Dmg taken: 38.0+3.4=41.4  Whip takes: ~3.9+1.75=5.7; Claws: ~1.93(Swarm)
STATE: Mon HP 178.6/220 STA 16 Swarm-aura | Whip ~37.3/43 STA7 | Claws ~35.1/37 STA7 Rush 0 |
       Wand ~41.3/43 STA7 | Flute ~41.3/43 STA9 N1
       Claws Rush: reset to 0 (70% Restrained)

── R2 ──────────────────────────────────────────────────────────
HUNTERS: Flute Resonant Strike (0 STA, Buzzing Dodge contest) 52% eff = 4.9dmg N2 |
         Wand Detonate R1 cluster (FA, 1 STA) 36%×8.5=3.1 + Place new cluster (1 STA) 36% STA5 |
         Whip Pull (2 STA) 7.6dmg + Claws free Reaction 0.80×9.5=6.1 = 13.7 [Claws Rush+1 from Reaction] |
         Claws Rend (1 STA) 3 attacks 80% = 22.8dmg Rush 0+2.4+0.4(Reaction)=2.8→~3 borderline STA6
  ▸ Party dmg: 44.5 (cum: 82.5)  Swarm ticks ~7.2 to party. Burned -1 STA start Mel turn.
MONSTER (178.6 HP, 15 STA after Burned): Buzzing Dodge vs Flute (2 STA→CD); 3 attacks.
         Drake Sting→Claws [60% Dodge→36%] 4.7exp Poisoned 23% |
         Drake Sting→Wand [75% Dodge→56%] 7.3exp Poisoned 34% |
         Mandible Bite→Flute [80% Dodge→64%] 6.4exp | DoT: Burned 2.5+Scorch 0.9=3.4
  ▸ STA: 15→10 (Buzzing Dodge 2+attacks 3)  Dmg taken: 44.5+3.4=47.9
STATE: Mon HP 130.7/220 STA 10 | Whip ~35.6/43 STA5 | Claws ~28.5/37 STA6 Rush~3 |
       Wand ~32.3/43 STA5 | Flute ~32.2/43 STA8 N2

── R3 ──────────────────────────────────────────────────────────
[Claws Rush ~3 entering R3. Healing Hymn window: 2 Notes → 9.5 HP each (no bonus).]
HUNTERS: Flute Healing Hymn (2 STA, 2 Notes) → all +9.5 HP [Whip 45.1→43cap, Claws 38.0→37cap,
         Wand 41.8→43cap, Flute 41.7→43cap] STA6 N0 |
         Claws Pounce T2 (2 STA, Rush 3+, 30ft leap, adv) 0.96×(9.5+3.5+3.5)=15.84dmg |
         STR DC17→Prone 65%; Wing Break called shot: 65%→Wing Break 1 progress |
         Rush 3 maintained on hit; 1 Bleeding stack applied. STA6→4 |
         Whip Pull (2 STA) 7.6dmg + Claws Reaction (Rush 3+) adv 0.96×14=13.4 = 21.0 STA5→3 |
         Wand Detonate (FA, 1 STA) 36%×8.5=3.1 + Place (1 STA) 36% STA5→3
  ▸ Party dmg: 39.9 (cum: 122.4)  Discord from R2+: 2.5. Bleed 1 stack: 2.5. End DoT: 1.8. Total: 6.8
MONSTER (130.7 HP, 9 STA after Burned): CD counts: Swarm off R4, Resin Bomb off R4. 3 attacks.
         Prone 65% from Pounce → if Prone: flies to ground (cannot fly Prone) → grounded.
         Model: 65% grounded this round. Swarm Call ends 65% chance.
         Drake Sting→Claws [60% Dodge→36%] 4.7exp | Mandible→Whip [50% Dodge→25%] 2.5exp |
         Wing Gust→Flute+Wand [30% fail→9% hit] 0.77exp each | Swarm: ~50% active (65% ends)
         Swarm ticks (if active, ~35% rounds): ~2.5 weighted | DoT: Burned 2.5+Scorch 0.9=3.4
  ▸ STA: 9→6  Dmg taken: 39.9+6.8=46.7  Claws takes: ~4.7+~1.4=6.1
STATE: Mon HP 84.0/220 STA 6 | Whip ~40.5/43 STA3 | Claws ~30.9/37 STA4 Rush~3 Bleed×1 |
       Wand ~42.2/43 STA3 | Flute ~43/43 STA6 N0
       Wings: 0.65/2 break progress. Melifur 65% Prone → grounded.

── R4 ──────────────────────────────────────────────────────────
[Melifur Prone (65%). If Prone: grounded, Swarm Call ends, Honey Sovereignty off. Wand attach → 60%.]
[Melifur STA 6 → Burned drain -1 → 5 effective. Stands (2 STA→3). Resin Bomb CD off → 2nd cycle.]
[Claws STA 4 → Rend (1 STA) — Rush rebuild if Pounce hit missed Rush, or capitalize on adv.]
HUNTERS: Flute Discord switch (FA, 0 STA) → 2.5/round passive |
         Resonant Strike (0 STA): ranged vs Prone disadv 64%×9.5=6.1 N1 |
         Wand: Detonate (FA, 1 STA) 36%×8.5=3.1 [old aerial cluster]; Place (1 STA) 60% grounded STA1 |
         Whip: STA 3 → Pull (2 STA, barely) vs Prone: adv 96%×9.5=9.12 STA1 |
         Claws: Pounce again (2 STA, Rush 3+, adv vs Prone) 0.96×16.5=15.84; Bleed stack 2. STA4→2
  ▸ Party dmg: 34.2 (cum: 156.6)  Discord start Mel R4: 2.5. Bleed×2: 5.0. End DoT: 1.8. Total: 9.3
MONSTER (84.0 HP, 5 STA after Burned+stand): Resin Bomb (2 STA, 2nd cycle) → Claws zone
         P(Claws Restrained): 70%; Rush state: Rush ~3. If Restrained → Rush → 0.
         Rush reset 70% → weighted Rush: 3×0.30+0×0.70 = 0.9.
         1 attack (1 STA): Drake Sting→Claws [60%] 7.8exp Poisoned 65%. STA→0 EXHAUSTED.
         Falls Prone. Fly→0. Half-effectiveness from here. DoT: Burned 2.5+Scorch 1.5(new 60%)+Discord 2.5=6.5
  ▸ STA: 5→0 EXHAUSTED  Dmg taken: 34.2+9.3=43.5  Claws: ~7.8+~1.4 Swarm=9.2
STATE: Mon HP 40.5/220 STA 0 EXHAUSTED PRONE | Whip ~40.5/43 STA1 | Claws ~21.7/37 STA2 Rush~0.9 |
       Wand ~41.2/43 STA1 | Flute ~43/43 STA5 N1

── R5 ──────────────────────────────────────────────────────────
[Melifur Exhausted. Prone. Adv attacks. Half effectiveness. No STA → no attacks.]
HUNTERS: Whip STA1 → Breathing Turn (+4→STA5) 0dmg |
         Claws STA2 → Breathing Turn (+4→STA6) 0dmg; Rush~0.9 maintained? No — Breathing Turn = no attack → Rush resets to 0 |
         Wand STA1 → Breathing Turn (+4→STA5) 0dmg |
         Flute Resonant Strike (0 STA, ranged vs Prone disadv) 64%×9.5=6.1dmg N2
  ▸ Party dmg: 6.1 (cum: 162.7)  DoT start Mel R5: Discord 2.5 + Bleed ~2.5 (1 stack, decaying) = 5.0
    End DoT: Burned 2.5 + Scorch 1.5 = 4.0. Total DoT: 9.0
MONSTER: Exhausted — no attacks (STA 0, half-eff, no STA to spend). Recovers +4 STA at end of turn.
  ▸ Dmg taken: 6.1+9.0=15.1  Mon HP: 40.5−15.1=25.4
STATE: Mon HP 25.4/220 STA 4 (recovered) | Whip STA5 | Claws STA6 Rush 0 | Wand STA5 | Flute STA5 N2
       Bleeding decaying (Claws Rush reset from Breath). Melifur at 11.5% HP.

── R6 (KILL ROUND) ──────────────────────────────────────────────
[DoT fires: Discord 2.5 at start of Melifur turn. Bleed 0 (Rush reset, stacks lapsed). = 2.5 pre-hunters.]
[Mon HP: 25.4−2.5=22.9 before party acts. Any reasonable attack finishes it.]
HUNTERS: Claws Rend (1 STA) adv vs Prone 3×0.96×9.5=27.3dmg → overkill by R6 first volley
  ▸ Mon HP: 22.9−27.3=−4.4 → ★ MELIFUR SLAIN ★ (Claws Rend first volley)
```

---

## Result

```
═══ RESULT: Party wins R6 (Claws Rend adv kill) ═══
Mon HP:        0 / 220
Avg hunter HP: ~34/41.5  (Whip ~95%, Claws ~59%, Wand ~99%, Flute ~100%)
Avg hunter STA: 5.5 avg (Whip 5, Claws 6, Wand 5, Flute 5)

Breaths taken: 3 (Whip R5, Claws R5, Wand R5 — all forced by Exhausted Melifur phase)
Parts broken:  Wings — 0.65 progress (not broken; would take 1 more dive Reaction)
Mon STA→0:     End of R4 (Burned drain accelerated by 1 round vs projected R5)
Claws KO'd:    No — survived at 21.7 HP minimum (vs KO at STA 24)
Party DPR avg: ~31.0/round (R1–R6) | Monster DPR avg: ~11.5/round
Kill round:    6
STA pressure:  Low-Medium (Breathing Turns R5 came after Melifur Exhausted — low stakes)
HP pressure:   Low-Medium (Claws at 59% lowest; 1 Healing Hymn at R3 kept party healthy)
Healing Hymn uses: 1 (R3, strategic — 2 Notes, full party restore; not emergency triage)
```

---

## Rush Reset Analysis

| Reset Event | Round | Cause | Rush Before | Rush After | DPR Tax |
|-------------|-------|-------|-------------|------------|---------|
| Reset 1 | R1 | Resin Bomb Restrained (70%) | ~2.4 (mid-Rend) | 0 | ~7.5 |
| Reset 2 | R4 | Resin Bomb 2nd cycle Restrained (70%) | ~3 | weighted ~0.9 | ~5.25 (partial) |
| Reset 3 | R5 | Breathing Turn forced (STA ≤2) | ~0.9 | 0 | ~0 (Melifur Exhausted, partial round only) |

**Total Rush tax: ~12.75 expected damage lost** (~18% Claws efficiency, consistent with STA 24 findings).

**Key difference from STA 24:** The fight ends R6 before Rush reset compounds fully. At STA 24, the fight ran R8 and each reset round cost full Bleeding DoT at 3 stacks. Here the fight is shorter — resets cost less in absolute terms because the opportunity window is smaller. The reset mechanic is **real and visible** without being **decisive**.

**P(Claws Restrained at least once) across 2 applicable bomb cycles:** 0.70 + 0.70 × 0.30 (second bomb hits non-reset Rush) = ~0.79. Approximately **4 in 5 fights** will see Claws lose Rush at least once to Resin Bomb.

---

## Calibration Verdict

| STA Value | Exhaustion Round | Bomb Cycles (Claws) | Claws Fate | Kill Round | Verdict |
|-----------|-----------------|---------------------|------------|------------|---------|
| 18 | R4 | 0–1 | Alive (comfortable) | R7 | Rush reset untested; aerial phase too short |
| 22 | R4 end (Burned) / R5 end (no Burned) | 2 | Alive at 59% HP | R6 | ✓ Sweet spot |
| 24 | R6 | 2 on Claws + 1 on Whip | **KO'd R4** | R8 | Too punishing; Claws removed mid-fight |

**Canonical recommendation: STA 22** for HP 220 optimized 4P Melifur.

STA 22 is **robust across compositions:**
- With Dragonian Wand (Burned drain -1/round): Exhaustion R4 end, kill R6.
- Without fire DoT: Exhaustion R5 end, kill R6–R7.

Both outcomes land in the target kill window. The Burned drain is a bonus to the party that brings the right toolkit — not a design dependency.

---

## Flags

- **Burned STA drain is a meaningful tactical lever.** Dragonian Wand's -1 STA/start-of-turn drain is not cosmetic. Across 3 rounds (R2–R4), it shaved 3 STA from Melifur — directly causing 1 additional Exhaustion round shift. Compositions that include a Dragonian Wand against Melifur have a structural advantage in the STA war beyond raw damage.
- **Pounce Prone is a reliable aerial reset tool.** Rush 3+ Pounce (96% hit, 65% Prone on hit) creates a near-guaranteed grounding attempt every other round. In R3, the 65% Prone probability ended Melifur's aerial loop without any called shot investment. This is probably the strongest single tool in the party for forcing Melifur down.
- **Wing Break was not needed.** Natural Prone from Pounce + Melifur's STA collapse achieved the grounding objective. Wing Break (0.65 progress, incomplete) would accelerate future fights but is not required for this composition to win. Wing break investment trades direct damage for guaranteed grounding earlier — a valid strategic choice but not mandatory.
- **Healing Hymn was strategic, not emergency.** Unlike sim-config2v3 (STA 24) where two emergency Hymns were required to save Claws from KO, this run used one Hymn at R3 as a proactive full-party top-off at 2 Notes. The fight felt controlled throughout. No hunter was in KO range at any point.
- **Wand contributions shift dramatically at grounding.** R1–R3 aerial: 36% attach = low direct damage, high Burned/Scorch DoT utility. R4–R6 grounded: 60% attach + detonation cleanup = full offensive contribution. The Wand is reward-structured for grounding — not a dead-weight aerial option.

---

## Tuning Notes

1. **STA 22 confirmed as canonical.** Lock the HP 220 GM Scaling Note: HP 220, STA 22. See calibration table above. No further adjustment needed for standard optimized 4P.

2. **Rush reset is the intended Resin Bomb secondary effect.** The sim confirms: ~4 in 5 fights Claws will lose Rush at least once to Resin Bomb. The tax is ~18% Claws efficiency (12–15 expected damage). This is felt but not crippling — Claws remains the highest single-target DPS in the party during active Rush phases. The Restrained condition's Mandible Bite rider is the more dangerous secondary effect, which is by design.

3. **Desperation Phase (25% HP / 55 HP) not reached.** Melifur died at R6 from ~22.9 HP. Desperation threshold is 55 HP. Melifur crossed below 55 HP only in R5 (after Exhaustion collapsed). The desperation behavior ("Swarm Call every CD regardless of STA cost") effectively never fired because Melifur had 0 STA when it crossed that threshold. At STA 22 with HP 220, the desperation window is very short. Consider whether desperation should have an "emergency STA surge" mechanic (e.g., recover 6 STA on crossing 25% threshold) to give it one last burst of aerial chaos — or simply accept that a party that grinds Melifur to Exhaustion before 25% HP has earned the clean kill.

4. **All three sim variants (v2/v3/v4) together validate Resin Bomb's design:** STA 18 = Resin Bomb fires once, Rush reset meaningless. STA 22 = fires twice on Claws, ~18% tax, noticeable. STA 24 = fires three times, KOs Claws, too punishing. The design intent is STA 22: Rush reset is a real recurring factor that requires the Claws player to think about positioning during Resin Bomb cycles, without making the weapon feel broken by RNG.

---

*Generated by /sim-hunt — EV mode, T2 HR7 midpoint | Melifur STA 22 canonical calibration | Claws corrected mechanics*
