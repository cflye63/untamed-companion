# Sim Config 2v3 — "Status Web" vs Melifur (STA 24 Tuning Variant)
**Party:** Trolian Whip, Human Claws, Dragonian Wand, Human Hunting Flute
**Tier:** 2 | **HR:** 7 | **Mode:** EV (expected value)
**Monster:** Melifur (Verdant Hollow, T2/T2.5) | **HP:** 220 | **STA: 24 (raised from 18)**
**Diagnostic question:** With 3 Resin Bomb cycles available, does Rush reset become a material DPR tax on Claws? Does the extended aerial phase change party HP attrition?

This is a direct follow-up to sim-config2v2 (STA 18). Melifur stats identical except Stamina 18 → 24 to sustain 3 Resin Bomb cycles before Exhaustion.

---

## Roster

Same builds as sim-config2v2. See that file for full stat blocks. Summary:

| Hunter | AR | HP | STA | Attack | React |
|--------|----|----|-----|--------|-------|
| Trolian Whip | 15/16 stat. | 43 | 9 | d20+7 → 1d8+5 avg 9.5 | Dodge |
| Human Claws | 15 | 37 | 8 | d20+7 → main 1d8+5 / bonus 1d8 | Dodge |
| Dragonian Wand | 12 | 43 | 9 | Place DC17 → cluster 1d6+5 | Dodge |
| Human Hunting Flute | 12 | 43 | 9 | d20+7 → 1d8+5 avg 9.5 | Dodge |

Human Claws mechanics (corrected): two attacks per Attack Action (0 STA via Human discount), Rush resets on miss ALL or Restrained, Rush 3+ = Bleeding on every hit (no save, stacks max 3 = 7.5/round).

---

## Monster Block — Melifur (STA 24 Variant)

| Stat | Value |
|------|-------|
| AR | 13 |
| HP | 220 |
| **Stamina** | **24 (raised from 18)** |
| Attacks/Turn | 3 |

All abilities unchanged from base file. STA 24 budget at full-activity round: Swarm Call (3) + Resin Bomb (2) + Wing Gust/attacks (1–3) = 6–8 STA/round. At this rate, Exhaustion arrives at R6 (vs R4 at STA 18).

**Projected STA burn path (STA 24):**
- R1: Swarm Call (3) + Resin Bomb (2) + Wing Gust (1) = 6 → STA 18
- R2: 3 attacks = 3 → STA 15
- R3: Swarm Call (3) + Resin Bomb (2) + 1 attack (1) = 6 → STA 9
- R4: 3 attacks = 3 → STA 6
- R5: Resin Bomb (2) + 2 attacks (2) = 4 → STA 2
- R6: 2 attacks (2) → STA 0 → EXHAUSTION mid-R6

---

## Hit Table

| Matchup | Hit % |
|---------|-------|
| Whip/Claws/Flute d20+7 vs AR13 (Courage +1) | 80% |
| Claws called shot wing break d20+5 vs AR13 | 65% |
| Wand Place DC17 vs Mel DEX+4 — grounded | 60% |
| Wand Place DC17 vs Mel DEX+4 — aerial (Honey Sovereignty DEX adv) | 36% |
| Claws Pounce (adv) vs AR13 | 96% |
| Melifur Drake Sting d20+6 vs Whip AR15/16 | 60% / 55% |
| Melifur Drake Sting vs Claws AR15 | 60% |
| Melifur Drake Sting vs Wand/Flute AR12 | 75% |
| Melifur Mandible Bite d20+5 vs Whip AR16 | 50% |
| Melifur Mandible Bite vs Claws AR15 | 55% |
| Melifur Mandible Bite vs Wand/Flute AR12 | 70% |
| Resin Bomb STR DC16 vs hunters (STR+1) | 70% fail → Restrained |
| P(Claws in Resin Bomb zone) | ~40–60% (melee positioning) |
| P(Claws Restrained per bomb) | zone × 70% = **42%** |
| P(miss ALL — main + bonus) | 0.20×0.20 = **4%** (Rush rarely resets on attacks) |

---

## Round Log

```
── R1 ──────────────────────────────────────────────────────────
[Melifur airborne. Whip/Claws cannot reach. Wand aerial attach: 36%.]
HUNTERS: Flute Courage (Fast) + Resonant Strike (0 STA) 7.6dmg N1 |
         Whip Lash (1 STA) 7.6dmg; Trip DEX DC17 60%×80% = 48%→Prone |
         Claws Basic Attack (0 STA) 11.2dmg Rush+1.6→~1.6 |
         Wand Place+Dragonian (2 STA) 36% attach; Burned 36% active STA7
  ▸ Party dmg: 26.4 (cum: 26.4)  Conditions: Deafened 60%; Burned/Scorch 36% active
MONSTER (220 HP, 24 STA): Swarm Call (3 STA, aura live) | Resin Bomb (2 STA) → Whip+Claws
         zone; P(Claws Restrained)=42%; Rush reset if Restrained → weighted Rush ~0.9 |
         Wing Gust (1 STA) → Flute+Wand 70% fail → 6.0exp each + Stagger; DoT: Scorch 0.9
  ▸ STA: 24→18  Dmg taken: 26.4+1.8=28.2  Party dmg: Resin Bomb ~7.5×2; Wing Gust 6.0×2; Swarm ~7.2
STATE: Mon HP 191.8/220 STA 18 Swarm-aura | Whip ~33.8/43 STA8 | Claws ~27.6/37 STA8 Rush~0.9 |
       Wand ~35.3/43 STA7 Staggered | Flute ~35.3/43 STA9 Staggered N1
       Claws Rush: 42% reset to 0 → weighted ~0.9 entering R2

── R2 ──────────────────────────────────────────────────────────
[Flute + Wand Staggered (Wing Gust R1) — lose Action, can Fast Action only.]
HUNTERS: Flute Staggered → Fast Action: switch to Discord (ongoing 2.5/round to Melifur start-of-turn) |
         Wand Staggered → Fast Action: Tripwire terrain prep; 0 dmg |
         Whip Pull (2 STA) 7.6dmg + Claws free Reaction 0.80×9.5=6.1 → total 13.7 |
         Claws Basic Attack (0 STA) 11.2dmg Rush~0.9+1.6=2.5 STA8
  ▸ Party dmg: 24.9 (cum: 51.3)  Discord active from R3+. Swarm aura ticks ~7.2 to party.
MONSTER (191.8 HP, 18 STA): No CDs (Swarm CD2 counting, Resin CD2 counting).
         Drake Sting→Claws [60%] 7.8exp Poisoned 65% | Drake Sting→Flute [75%] 9.75exp |
         Mandible Bite→Claws (Poisoned rider) [55%] 6.25exp | Buzzing Dodge: not triggered
         (Wand Staggered, Flute not attacking). Swarm ticks ~7.2.
  ▸ STA: 18→15  Dmg taken: 24.9+1.8=26.7  Claws takes: 7.8+6.25+1.9=16.0
STATE: Mon HP 165.1/220 STA 15 | Whip ~32.1/43 STA7 | Claws ~11.6/37 STA8 Rush~2.5 ⚠️ CRITICAL |
       Wand ~33.6/43 STA7 | Flute ~23.8/43 STA9 N1

── R3 ──────────────────────────────────────────────────────────
[Claws at 11.6 HP — Healing Hymn required (1 Note available → no bonus).]
HUNTERS: Flute Healing Hymn (2 STA, 1 Note) all allies +9.5 HP → Claws 21.1, Whip 41.6 STA6 N0 |
         Claws Rend (1 STA) 3 attacks 80% = 22.8dmg; Rush 2.5+2.4=4.9(→5 cap)
         → 2 Bleeding stacks applied (stacks 1+2, Rush≥3 on hit 2+3) |
         Whip Lash (1 STA) 7.6dmg + Trip 60%→Prone |
         Wand Detonate (1 STA, 36% attach) 3.1burst + Place new cluster (1 STA) STA5
  ▸ Party dmg: 33.5 (cum: 84.8)  Discord fires (start Mel R3): 2.5. Bleeding×2: 5.0. DoT: 2.5+5.0+1.8=9.3
MONSTER (165.1 HP, 15 STA): Swarm CD off, Resin CD off → R3 Priority: Swarm Call (3)+Resin Bomb (2)+1 atk (1)
         Swarm Call (3 STA): re-activate aura | Resin Bomb (2 STA) — 2nd cycle → Claws+Whip zone
         P(Claws Restrained): 42% → Rush 5 → 0 reset (42%); Rush weighted ~2.9 after bomb |
         Drake Sting→Claws [60%] 7.8exp Poisoned 65% | Swarm ticks ~7.2
  ▸ STA: 15→9  Dmg taken: 33.5+9.3=42.8  Claws takes: ~7.5Bomb+7.8Sting+1.9Swarm=17.2
STATE: Mon HP 122.3/220 STA 9 | Whip ~32.4/43 STA6 | Claws ~3.9/37 STA7 Rush~2.9 ⚠️ CRITICAL |
       Wand ~41.3/43 STA5 | Flute ~31.6/43 STA7 N0
       Bleeding stacks on Melifur: 2 (applying 5.0/start of Melifur turn)

── R4 ──────────────────────────────────────────────────────────
[Claws at 3.9 HP — second Healing Hymn mandatory. Rush ~2.9 (below 3 in 42% branch).]
HUNTERS: Flute Healing Hymn (2 STA, 0 Notes) all allies +9.5 → Claws 13.4, Whip 41.9 STA5 N0 |
         Claws Rend (1 STA) to rebuild Rush — 3 attacks 80% = 22.8dmg; weighted Rush ~4
         (58% path: Rush≥3 all → 2.4 Bleed stacks; 42% reset path: only 3rd hit triggers Bleed ~51%)
         Expected Bleeding stacks: 0.58×2.4+0.42×0.51=1.39+0.21=1.6 stacks added |
         Whip Pull (2 STA) 7.6dmg + Claws Reaction 6.1 = 13.7 STA4 |
         Wand Detonate (1 STA) 3.1 + Place (1 STA) 36% attach STA3
  ▸ Party dmg: 39.6 (cum: 124.4)  DoT start R4: Discord 2.5 + Bleeding×2 stacks 5.0 = 7.5. End: 1.8. Total: 9.3
MONSTER (122.3 HP, 9 STA): No CDs (Swarm CD2→off R5, Resin CD2→off R5).
         Drake Sting→Claws [60%] 9.75exp Poisoned 65% | Mandible Bite→Claws (Poisoned rider) 6.75exp |
         Drake Sting→Whip [55%] 7.15exp | Swarm ticks ~7.2
         Claws takes: 9.75+6.75+1.9=18.4 → 13.4−18.4=−5.0 → CLAWS DOWNED
  ▸ STA: 9→6  Dmg taken: 39.6+9.3=48.9  ⚡ CLAWS KO'd end R4 monster phase
STATE: Mon HP 73.4/220 STA 6 | Whip ~32.9/43 STA4 | Claws DOWNED (0/37) |
       Wand ~41.3/43 STA3 | Flute ~31.5/43 STA5 N1
       Bleeding stacks: ~1.6 weighted (decaying — Claws can no longer add stacks)

── R5 ──────────────────────────────────────────────────────────
[Claws downed. 3-hunter party. Melifur below 50% HP → elevated aggression.]
HUNTERS: Flute Healing Hymn (2 STA, 1 Note → no bonus) all alive allies +9.5 → Whip 42.4, Flute 43 STA3 N0 |
         Whip Pull (2 STA) 7.6dmg (no Reaction partner) STA2 |
         Wand Detonate (1 STA) 3.1 + Place (1 STA) 36% STA1
  ▸ Party dmg: 10.7 (cum: 135.1)  DoT: Discord 2.5 + Bleeding 5.0 (2 stacks still active) + end 1.8 = 9.3 (cum: 144.4)
MONSTER (73.4 HP, 6 STA): Resin Bomb CD off (3rd cycle!) — targets Whip (Claws down).
         Resin Bomb (2 STA) → Whip zone; P(Whip Restrained): 70% STR fail on zone hit |
         Drake Sting→Flute [75%] 9.75exp | Mandible Bite→Whip (Restrained rider) 6.85exp |
         Swarm ticks (3 hunters): ~5.25. Buzzing Dodge: not triggered (Wand DEX save, not attack).
  ▸ STA: 6→2  Dmg taken: 10.7+9.3=20.0  Party takes: Whip ~15.9, Flute ~11.5, Wand ~1.75
STATE: Mon HP 53.4/220 STA 2 | Whip ~24.8/43 STA2 | Flute ~31.5/43 STA3 | Wand ~41.3/43 STA1
       Note: Melifur at 53.4 HP — just crossed 25% threshold (55 HP). Desperation approaching.

── R6 ──────────────────────────────────────────────────────────
[Melifur STA 2 — can only make 2 attacks before Exhaustion.]
HUNTERS: Whip STA2 → Breathing Turn (+4 STA→6) 0dmg |
         Flute Resonant Strike (0 STA) 7.6dmg N1 STA3 |
         Wand STA1 → Breathing Turn (+4 STA→5) 0dmg
  ▸ Party dmg: 7.6 (cum: 151.9)  DoT: Discord 2.5 + Bleeding 5.0 + end 1.8 = 9.3 (cum: 161.2)
MONSTER (53.4 HP, 2 STA): Drake Sting→Flute [75%] 9.75exp | Mandible Bite→Flute [70%] 7.0exp |
         → STA 0 → EXHAUSTION. Falls Prone to ground. Swarm Call ends. Fly→0.
         (Half-effectiveness on remaining attacks — but both attacks fired before Exhaustion threshold)
  ▸ STA: 2→0 EXHAUSTED. Swarm ticks end.  Dmg taken: 7.6+9.3=16.9  Flute takes: ~17.6
STATE: Mon HP 36.5/220 STA 0 EXHAUSTED PRONE | Whip ~24.8/43 STA6 | Flute ~13.9/43 STA3 |
       Wand ~41.3/43 STA5

── R7 ──────────────────────────────────────────────────────────
[Melifur Prone + Exhausted → adv attacks (96%), attacks at half effectiveness.]
HUNTERS (adv): Whip Lash adv (1 STA) 0.96×9.5=9.1dmg + Trip 48%→Prone (already Prone) STA5 |
               Flute Resonant Strike adv (0 STA) 0.96×9.5=9.1dmg N2 |
               Wand Detonate adv grounded (1 STA) 0.60×8.5=5.1 + Place (1 STA) 60% attach STA3
  ▸ Party dmg: 23.3 (cum: 184.5)  DoT: Discord 2.5 + Bleeding 5.0 + end 1.8 = 9.3 (cum: 193.8)
MONSTER: Exhausted — 3 attacks at half effectiveness (Fly→0, Swarm disabled).
         Drake Sting half→Flute [75%] 4.9exp | Mandible Bite half→Flute [70%] 3.5exp |
         Wing Gust half (1 STA... STA 0 — Exhausted cannot spend STA) → 0 STA attacks? Model
         as Exhausted attacks still occur but at half damage (0 STA used per STA-0 Exhaustion state).
  ▸ Dmg taken: 23.3+9.3=32.6  Flute takes: 4.9+3.5=8.4  Mon HP: 36.5−32.6=3.9
STATE: Mon HP 3.9/220 STA 0 EXHAUSTED | Flute ~5.5/43 STA3 N2 | Whip ~24.8 STA5 | Wand ~39.3 STA3

── R8 (KILL ROUND) ──────────────────────────────────────────────
[DoT fires: Discord 2.5 + Bleeding 5.0 = 7.5 at start Melifur turn → Mon HP 3.9−7.5=−3.6 → DEAD]
[Kill falls to DoT at start of R8 before hunters even act.]
  ▸ ★ MELIFUR SLAIN by Discord+Bleeding DoT ★
```

---

## Result

```
═══ RESULT: Party wins R8 (DoT kill — Discord+Bleeding) ═══
Mon HP:        0 / 220  (killed by DoT at start of Melifur R8 turn)
Avg hunter HP: ~23.3/41.5  (Whip 58%, Claws DOWNED, Wand ~94%, Flute ~13%)
Avg hunter STA: 5.0 avg (Whip 5, Claws KO, Wand 3, Flute 3)

Breaths taken: 3 (Claws R1+R2 Aerial lockout; Whip R6; Wand R6)
Parts broken:  None pursued
Mon STA→0:     R6 (end of R6 attacks, 2 attacks before Exhaustion)
Claws KO round: R4 (Drake Sting + Mandible Bite chain into ~13 HP)
Party DPR avg: ~28.0/round (R1–R8, 3-hunter from R5+) | Monster DPR avg: ~14.4/round
Kill round:    R8
STA pressure:  High (Claws KO'd; Whip + Wand forced to Breathe R6; Flute STA drained by Hymn spam)
HP pressure:   Critical (Claws KO'd R4; Flute at ~5.5 HP entering R8; two forced Healing Hymns)
```

---

## Rush Reset Analysis

| Round | Resin Bomb | P(Claws Restrained) | Rush Effect |
|-------|-----------|---------------------|-------------|
| R1 | 1st cycle | 60% zone × 70% STR fail = **42%** | Rush weighted ~0.9 (vs 1.6 unhindered) |
| R3 | 2nd cycle | **42%** | Rush 5 → weighted ~2.9 (borderline sub-3) |
| R5 | 3rd cycle | N/A — Claws already downed | Bomb targeted Whip instead |

**Expected Restraints on Claws:** 0.42 + 0.42 = **0.84 across 2 applicable bomb cycles**
**P(Restrained at least once):** ~58% across the fight

### Rounds Rush fell below 3

| Period | Duration | Cause |
|--------|----------|-------|
| R1 (bomb → R2) | ~2 rounds fully sub-3 | R1 bomb reset Rush from ~1.6 |
| R3 (bomb → R4) | ~0.42 rounds weighted | R3 bomb chance dropped Rush from 5 → 0 in 42% branch |
| **Total** | **~2.4 effective rounds** | |

### DPR lost to Rush rebuild

| Period | Eff. Rounds | DPR Lost |
|--------|------------|---------|
| R2 sub-3 (full) | 1.0 | −7.5 |
| R3 partial reset | 0.21 | −1.6 |
| R4 partial reset | 0.42 | −3.2 |
| **Total** | **~1.6 eff. rounds** | **−12.3 dmg** |

**Verdict:** Rush reset is a **real but moderate** DPR tax (~18% efficiency loss for the Claws hunter over the fight). The more significant effect of Resin Bomb is not the Rush reset directly — it is the Restrained condition creating Mandible Bite rider activation (+1d6 avg 3.5 on Claws), which contributed to the conditions that got Claws killed in R4. Resin Bomb's mechanical purpose vs Claws is **setup → execution**, not Rush denial as a standalone tool.

The 3rd bomb (R5) never reached Claws. This partially undermines the 3-cycle model: if the fight would kill or down Claws before the 3rd cycle, the full Rush reset pressure requires either Claws survivability tuning or an even higher Melifur STA (26+).

---

## Comparison Table: STA 18 vs STA 24

| Metric | STA 18 (sim-config2v2) | STA 24 (this sim) |
|--------|------------------------|-------------------|
| Resin Bomb cycles | 1 (R1 only) | 2 on Claws; 3rd missed (Claws downed) |
| Claws Restrained | 0 (Claws not in zone) | ~0.84 expected (42%+42%) |
| Rush sub-3 rounds | 0 | ~2.4 effective rounds |
| Claws DPR loss | 0 | ~12.3 (−18%) |
| Claws KO'd | No | Yes (R4) |
| Melifur Exhaustion | R4 | R6 |
| Kill round | R7 | R8 |
| Avg hunter HP% | 63% | 56% (Claws KO pulls avg down) |

---

## Flags

- **Claws downed R4:** Drake Sting (9.75 exp) + Mandible Bite with Poisoned rider (6.75 exp) = 16.5 expected damage in one monster phase into a Claws hunter at ~13 HP. Two Healing Hymns in the first 4 rounds could not keep pace with the 2-hit chain when Melifur focuses Claws. This is a structural fragility issue: 37 HP at AR 15 with no defensive reaction is too thin to survive targeted dive-chain priority.
- **Flute at 5.5 HP end-fight:** Both Healing Hymn casts (R3, R4) were consumed saving Claws. Flute had no remaining emergency heal for herself. Melifur's R6 Drake Sting + Mandible Bite chain on Flute (easiest AR target after Claws fell) pushed Flute to critical threshold. The party's healing engine was within one above-average hit of KO.
- **Resin Bomb's primary function is setup, not Rush denial:** Restrained from Resin Bomb activates Mandible Bite's +1d6 rider (the real damage amplifier) more than it directly costs Rush DPR. Rush reset IS a tax (~18%), but the KO vector was Mandible Bite double-rider activation on an already-wounded target.
- **Whip Pull loses value without Claws:** After Claws falls R4, Pull (2 STA) provides only its base 7.6 damage — worse STA efficiency than Lash (1 STA, same damage + Trip rider). Whip should switch to Lash from R5 onward.
- **3rd Resin Bomb targets Whip:** With Claws down, Melifur's bomb redirected to the remaining melee threat. Whip took Restrained R5, activating Mandible rider. The bomb cycle doesn't disappear with Claws downed — it shifts to the next priority target.
- **Wand Stagger lockout again:** Wing Gust R1 Staggered Flute + Wand for R2 (same as STA 18 sim). The first real Wand contribution to Melifur damage doesn't arrive until R3. This party's aerial phase is almost purely Whip Lash + Claws Basic Attack + Flute ranged — Wand contributes near-zero aerial damage.

---

## Tuning Notes

1. **Melifur STA 22 is the right balance point.** STA 24 extends the fight to R8 and Exhausts at R6 — achieving the intended 3-bomb-cycle design — but at the cost of KO'ing Claws and leaving Flute near-dead. This feels correct in structure (STA 24 forces a harder fight than STA 18), but the Claws KO may be too punishing for a design that already has Claws as the party's highest-burst damage source. STA 22 would give Melifur approximately 2.5 bomb cycles and Exhaust around R5, splitting the difference. Test recommendation: run STA 22 as the canonical HP 220 calibration value.

2. **Rush reset IS a real mechanic, not a design problem.** At STA 24, Resin Bomb creates ~58% probability of at least one Claws Restraint, costing ~12.3 DPR (~18% efficiency). This is a *design-validated pressure tool*: Melifur has a specific answer to the Claws Rush engine. The mechanic is real, not theoretical. It is not a "check Rush resets off as possible" anymore — it is a consistent fight factor when Melifur has STA to cycle Resin Bomb.

3. **Claws needs +HP to survive the Dive-chain.** Drake Sting + Mandible Bite (Poisoned rider) into one target = ~16.5 expected damage per monster phase. Claws with 37 HP can survive 2 such phases cleanly from full health, but after aerial attrition (Resin Bomb, Swarm Call ticks) the HP buffer is already depleted by R4. Recommendation: CON score 6 for Human Claws → HP 43 (+6). This does not break the weapon's fragile identity (Light armor, no defensive reaction) but gives it enough HP to survive the dive-chain when it cannot dodge the Poisoned condition lock.

4. **Flute STA economy at R8 fights.** Two forced Healing Hymns in R3+R4 (16 STA cost total) depleted Flute's STA budget by mid-fight. At R8, Flute had STA 3 — effectively zero safety margin. In an 8-round fight, Flute can Hymn at 3 Notes twice if it starts accumulating from R1 and hymns at R3, R6. The issue is that both hymns in this sim fired as emergency triage (Claws at 5–14 HP) rather than as strategic Note-stacked heals. Flute cannot maintain 3-Note stacks while also responding to per-round crises. Either Claws needs more HP, or this composition needs a second healing vector.

5. **Wing break not pursued.** This simulation ran without any called shot investment. Wings were never broken. Had Whip and Claws invested Reaction called shots on dives (as in sim-config2v2), wing break would have occurred by R3–R4. This would have disabled Buzzing Dodge and Honey Sovereignty — making Wand's aerial attach rate 60% instead of 36%, and eliminating Melifur's defensive flight escape. The fight structure with wing break would likely end R6–R7 instead of R8. Wing break was deliberately omitted to isolate the Resin Bomb / Rush reset diagnostic.

6. **DoT wall closes the fight.** The R8 kill was DoT (Discord 2.5 + Bleeding 5.0 = 7.5) rather than a direct attack. Melifur entered R8 with 3.9 HP — alive only because Exhaustion half-effectiveness and 3-hunter direct damage was insufficient to finish it in R7. The DoT stack (Discord + Bleeding + Burned + Scorch = ~14/round in late fight) is what actually completes the kill. This validates the composition's identity: Status Web (Wand Burned/Scorch + Flute Discord + Claws Bleeding) creates a DoT engine that kills the monster even when the party's primary damage dealer is down.

---

*Generated by /sim-hunt — EV mode, T2 HR7 midpoint | Melifur STA 24 tuning variant | Claws corrected mechanics*
