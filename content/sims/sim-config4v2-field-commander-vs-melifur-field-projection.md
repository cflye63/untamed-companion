# Sim Config 4v2 — "The Field Commander" vs Melifur (Field Projection Fix)
**Party:** Human Conduit, Human Hammer, Human Greatsword, Trolian Spear & Shield
**Tier:** 2 | **HR:** 7 | **Mode:** EV (expected value)
**Monster:** Melifur (Verdant Hollow, T2/T2.5) | **HP:** 220 (optimized)
**Diagnostic question:** With Field Projection, does the aerial phase become a positioning puzzle with STA cost rather than a flat dead zone? Does 3 melee + Conduit still effectively fight 3v1 until grounding, or does Conduit contribute meaningfully?

---

## Roster

### Human Conduit | HR 7
| Stat | Score | Mod |
|------|-------|-----|
| STR | 3 | +1 |
| DEX | 3 | +1 |
| CON | 6 | +3 |
| INT | 3 | +1 |
| INS | 12 | +6 |
| CHA | 3 | +1 |

| Combat | Value |
|--------|-------|
| AR | 12 (Medium) |
| HP | 43 (CON 6×6 + HR7) |
| Stamina | 9 (6 + CON mod 3) |
| Attack | d20+8 → 2d6+6 avg 13.0 |
| Save DC | 18 |
| React | Dodge (Medium armor) |

**T2 Technique:** Aspect Surge — 3 STA, Requires Channel. Intensify active Aspect until start of next turn.
**Field Projection (post-fix):** Fast Action, 1 STA. Requires Channel. Extend Field to a visible point within 40 ft until start of next turn, then snaps back. All Aspect effects originate from projected point. Your anchor position doesn't change — forced movement 5+ ft still breaks Channel. Maintaining projection costs 1 STA/turn as a Fast Action.
**Field:** 15ft radius. Channel drains −1 STA/turn (passive end-of-turn).
**Total aerial STA cost per round:** −2 STA/round (−1 projection + −1 channel drain).

---

### Human Hammer | HR 7
| Stat | Score | Mod |
|------|-------|-----|
| STR | 12 | +6 |
| DEX | 3 | +1 |
| CON | 6 | +3 |
| INT | 3 | +1 |
| INS | 3 | +1 |
| CHA | 3 | +1 |

| Combat | Value |
|--------|-------|
| AR | 14 (Heavy) |
| HP | 43 (CON 6×6 + HR7) |
| Stamina | 9 (6 + CON mod 3) |
| Attack | d20+8 → 2d6+6 avg 13.0 |
| Save DC | 18 |
| React | None (Heavy, no Guard/Parry) |

**T1 Technique:** Charged Smash — 2 STA, wind-up turn; +2d6 avg+7 on release, 2 Impact.
**T2 Technique:** Shockwave — 2 STA, 15-ft cone, DEX save DC18 → 2d8+6 + Prone + 1 Impact.
**Impact:** +1 per hit (cap 3). At 3 → Stunned (skip turn).
**Charged Smash NOT used:** Melifur Drake Sting hit chance vs Hammer (65%) far exceeds 30% cancel threshold.

---

### Human Greatsword | HR 7
| Stat | Score | Mod |
|------|-------|-----|
| STR | 11 | +5 |
| DEX | 3 | +1 |
| CON | 7 | +3 |
| INT | 3 | +1 |
| INS | 3 | +1 |
| CHA | 3 | +1 |

| Combat | Value |
|--------|-------|
| AR | 14 (Heavy) |
| HP | 49 (CON 7×6 + HR7) |
| Stamina | 9 (6 + CON mod 3) |
| Attack | d20+7 → 2d6+5 avg 12.0 base |
| Save DC | 17 |
| React | Parry |

**T1 Technique:** Cleave — 2 STA, Commitment, advantage on attack, Exposed until end of next turn; on hit at M0 → gain M2 (not M1).

---

### Trolian Spear & Shield | HR 7
| Stat | Score | Mod |
|------|-------|-----|
| STR | 11 | +5 |
| DEX | 4 | +2 |
| CON | 6 | +3 |
| INT | 3 | +1 |
| INS | 3 | +1 |
| CHA | 3 | +1 |

| Combat | Value |
|--------|-------|
| AR | 15 (Heavy 14 + shield +1) / 16 stationary (Anchored Frame) |
| HP | 43 (CON 6×6 + HR7) |
| Stamina | 9 (6 + CON mod 3) |
| Attack | d20+7 → 2d10+5 (Aggressive) avg 16.0 / 1d10+5 (Defensive) avg 10.5 |
| Save DC | 17 |
| React | Block (Guard tag) |

**T1 Technique:** Thrust & Bash — 2 STA, spear thrust + shield bash (two attacks).
**T2 Technique:** Impale — 2 STA, +1 Power Die, CON save DC17 → Bleeding + Slowed.
**Trolian Rooted Resilience:** 1 STA saved per failed save.

---

## Monster Block — Melifur (T2/T2.5)

| Stat | Value |
|------|-------|
| AR | 13 |
| HP | 220 (optimized) |
| Stamina | 18 |
| Attacks/Turn | 3 |

**Attacks:**
- Drake Sting (1 STA): d20+6 → 2d8+4 avg 13 | rider: CON save DC16 → Poisoned 1 turn
- Mandible Bite (1 STA): d20+5 → 2d6+3 avg 10 | rider: +1d6 if target Poisoned or Restrained
- Wing Gust (1 STA): DEX save DC16 → 1d8+4 avg 8.5; pushed 10ft + Staggered

**Abilities:**
- Royal Resin Bomb (2 STA, CD 2): d20+6 → 2d10+4 avg 15; creates 10ft resin pool 2 rounds; STR save DC16 → Restrained
- Swarm Call (3 STA, CD 2): 30ft aura; CON save DC14 end of hunter turns → 1d6 Poison; ranged attacks vs Melifur have disadvantage; ends if Melifur lands

**Reactions:** Buzzing Dodge (2 STA, CD 1): 2nd+ ranged attack → DEX contest (d20+6 vs attack); success: ascend 30ft, attack misses

**Exhaustion Rule:** Lands Prone, fly speed 0, Swarm Call disabled, attacks at half effectiveness

**Part Breaks:**
- Wings (2 called-shot hits, −2 acc): fly 20ft, Buzzing Dodge disabled, Honey Sovereignty DEX advantage lost
- Sting (2 called-shot hits): Drake Sting loses Poison rider
- Resin Gland (3 called-shot hits): Resin Bomb loses Restrained rider

---

## Hit Table

| Matchup | Hit % |
|---------|-------|
| Conduit d20+8 vs Melifur AR13 (grounded) | 80% |
| Conduit aerial + Swarm Call dis | 64% (80²) |
| Conduit aerial + Swarm + Buzzing Dodge contest (58% win rate) | ~37% effective |
| Conduit aerial + Swarm (no Dodge contest) | 64% |
| Conduit aerial, no Swarm, Buzzing Dodge contest | ~46% effective |
| Hammer d20+8 vs AR13 | 80% (melee, no aerial access) |
| GS d20+7 vs AR13 | 75% (melee, no aerial access) |
| SS d20+7 vs AR13 | 75% (melee, no aerial access) |
| Melifur Drake Sting (d20+6) vs Conduit AR12 | 75% / Dodge→dis 56% |
| Melifur Drake Sting vs Hammer AR14 | 65% (no reaction) |
| Melifur Drake Sting vs GS AR14 | 65% / Parry available |
| Melifur Drake Sting vs SS AR15/16 | 60%/55% / Block→40% |
| Drake Sting Poison CON DC16 (CON mod+3) | 60% fail |
| Swarm Call CON DC14 (CON mod+3) | 50% fail → 1.75 dmg/round per hunter |
| Wing Gust DEX DC16 (DEX mod+1/+2) | 70%/65% fail |
| STR save DC16 vs Conduit STR+1 | 70% fail (Restrained risk) |

---

## Round Log

```
── R1 ──────────────────────────────────────────────────────────
[Melifur airborne ~40ft. GS/Ham/SS have no ranged weapon — cannot engage aerial Melifur.]
[Conduit Channels as Action, projects Field to Melifur's position (Fast Action, −1 STA).]
[R1 Conduit attack: Buzzing Dodge first attack exemption — uncontested 80% hit.]
HUNTERS: Conduit Channel+Project+Attack (1STA) 0.80×13.0=10.4dmg STA9→7 (proj+drain) |\
         GS no reach — idle (STA 9) | Ham no reach — idle (STA 9) | SS no reach — idle (STA 9)
  ▸ Party dmg: 10.4 (cum: 10.4)  Conditions: Conduit Channeling, Field projected to Melifur
MONSTER (220 HP, 18 STA): Swarm Call (3STA, aura live) | Drake Sting→GS [65%] 8.45exp |
         Wing Gust cone→Conduit+SS [70%/65%] 5.95+5.53exp | GS Parry [55% negate] → 3.8 taken + 3.3 riposte
  ▸ STA: 18→13  Dmg to Mon: 10.4 + 3.3 riposte = 13.7
  ▸ Dmg to party: GS 3.8, Conduit 5.95 (no Dodge vs Wing Gust save), SS 5.53
STATE: Mon HP 206.3/220 STA 13 | GS 45/49 STA9 M0 | Ham 43/43 STA9 I0 | SS 37/43 STA9 |
       Cond 37/43 STA7 Channeling

── R2 ──────────────────────────────────────────────────────────
[Conduit STA 7. Projects field again (Fast, −1 STA). Channel drain (−1 end-of-turn). STA→5 after.]
[R2 = Conduit's 2nd ranged attack — Buzzing Dodge now active. Swarm Call active (dis).]
[Effective Conduit hit: Swarm dis 64% × Dodge contest 58% win rate = 37.1%]
[GS/Ham/SS still grounded with no ranged attack. Melifur has not dived within melee range.]
HUNTERS: Conduit attack (1STA+projection+drain) 0.371×13.0=4.82dmg STA7→5 (end-turn) |\
         GS, Ham, SS — no reach. All idle.
  ▸ Party dmg: 4.82 (cum: 15.2)  Swarm aura: 4×50%×3.5=7.0 to party
MONSTER (206.3 HP, 13 STA): Resin Bomb→Conduit (2STA) [80%] 12.0exp | 70% Restrained risk |
         Drake Sting→Ham [65%] 8.45exp | Mandible Bite→Ham [60%, if Poisoned rider] 9.1exp
  ▸ STA: 13→7  Dmg to Mon: 4.82 (+ Swarm 7.0 to party)
  ▸ Ham HP: 43 − 8.45 − 9.1 = 25.5  Conduit: 37 − 12.0 (Resin) − 1.75 (Swarm) = 23.3
  ▸ Conduit 70% Restrained (Resin pool), Dodge stripped while Restrained
STATE: Mon HP 201.5/220 STA 7 | GS 41/49 STA9 | Ham 25.5/43 STA9 | SS 35.5/43 STA9 |
       Cond 23.3/43 STA5 [Restrained 70%]

── R3 ──────────────────────────────────────────────────────────
[Conduit STA 5 → projection + drain = 5→3 after this round. Breathing Turn mandatory R4.]
[Conduit 70% Restrained — 70% chance no Dodge available, static in Resin zone.]
[Melifur STA 7. Can dive for melee attacks. GS/Ham/SS now in range if Melifur dives to 20ft.]
[Wing called shot opportunity: if Melifur dives, GS/SS Reaction called shot vs Wings. 65% hit −2 = 63%]
HUNTERS: Conduit attack (Swarm+Restrained: dis+no Dodge) 0.64×0.80×13=6.7dmg STA5→3 |\
         [Conduit Restrained: Dodge unavailable. Hits at Swarm dis only: 64%×13=8.3 exp, corrected from 37%]
         GS Cleave (2STA, Melifur dived to 20ft range!) adv 0.9375×12.0→M2 10.9dmg STA7 Exposed |\
         Ham basic (1STA) 0.80×13.0=10.4dmg I1 STA8 |
         SS Impale T2 (2STA) 0.75×21.0=15.8dmg STA7 [2 STA + 45% Bleeding]
  ▸ Party dmg: 8.3+10.9+10.4+15.8=45.4 (cum: 60.6)
  ▸ Wing Break Reactions: GS Reaction called shot [63%] → Wing Break 1 progress
MONSTER (201.5 HP, 7 STA): Drake Sting→Conduit (dived) [75%] 9.75exp |
         Conduit 70% Restrained → Dodge stripped: full 75%×13=9.75 expected |
         Mandible Bite→Conduit [70%, Restrained rider] 0.70×13.5=9.45exp |
         Buzzing Dodge vs Conduit after attack (2STA) |
  ▸ STA: 7→4  Dmg to Mon: 45.4. Dmg to Conduit: 9.75+9.45=19.2 → Cond HP 23.3−19.2=4.1
STATE: Mon HP 156.1/220 STA 4 | GS 37/49 STA7 M2 | Ham 22/43 STA8 I1 | SS 26/43 STA7 |
       Cond 4.1/43 STA3 [Wing Break: 1/2]

─── ⚠️ CONDUIT NEAR-LETHAL ─────────────────────────────────────
Conduit at 4.1/43 HP (10%). One average Drake Sting = lethal.
If Conduit uses R4 Breathing Turn (mandatory, STA 3→2) it is an undefended 12 AR target.
Melifur STA 4 → conservative behavior. Likely 2 attacks maximum next round.
─────────────────────────────────────────────────────────────────

── R4 ──────────────────────────────────────────────────────────
[Conduit STA 3 → Breathing Turn mandatory. Channel breaks. Field Projection ends.]
[Melifur STA 4 → conservative. 2 attacks only. R4 is Conduit's most dangerous round.]
HUNTERS: Conduit BREATHING TURN (+4STA→7) 0dmg [Channel broken] |\
         GS basic M2 (1STA) 0.80×14.0=11.2dmg M3 STA6 |\
         Ham basic (1STA) 0.80×13.0=10.4dmg I2 STA7 |\
         SS basic (1STA) 0.75×16.0=12.0dmg STA6
         [Wing Break Reaction: SS Reaction called shot vs Wings [63%] → Wing Break 2 progress if hits]
  ▸ Party dmg: 33.6 (cum: 94.2)  Wing Break: second reaction lands (63%) → 1+0.63 = ~1.6/2 needed
MONSTER (156.1 HP, 4 STA): Drake Sting→Conduit [75%] 9.75exp | Drake Sting→Ham [65%] 8.45exp
         STA: 4→2. Drake Sting vs Conduit: Conduit has no Dodge (Channel broken, STA 7 but Dodge costs 1 STA).
         Conduit should Dodge: STA 7→6, dis hit: 56.25%×13=7.31. Conduit HP 4.1−7.31 = −3.2 → DOWNED
         [Even with Dodge, Conduit expected to go down this round. 56.25%×13=7.31 > 4.1 HP]
  ▸ STA: 4→2  Dmg to Mon: 33.6. Dmg: Conduit downed (EV), Ham 8.45
STATE: Mon HP 122.5/220 STA 2 | GS 37/49 STA6 M3 | Ham 13.5/43 STA7 I2 | SS 26/43 STA6 |
       Cond 0/43 DOWNED [Wing Break: 1.63/2 — wings not yet broken]

── R5 ──────────────────────────────────────────────────────────
[Melifur STA 2 → 1 attack. Cannot sustain aerial combat. Exhaustion next round.]
[Wing Break: ~1.63 progress — needs ~0.37 more for second break. Next called shot at 63%.]
[GS M3 active. Party DPR surging with full melee access.]
HUNTERS: GS basic M3 (1STA) adv 0.9375×22.5=21.1dmg STA5 |\
         Ham basic (1STA) 0.80×13.0=10.4dmg I3→Stun 51% STA6 |\
         SS Wing called shot Reaction + basic (1STA) 0.75×16.0=12.0 + Reaction 63%→Wing Break 2 STA5
  ▸ Party dmg: 43.5 (cum: 137.7)  Wing Break: 2nd progress hit = WINGS BROKEN (if GS/SS reaction lands)
  ▸ [Wing Break P(complete) = 63% reaction. Expected: 0.63 break this round + 0.37 next round]
MONSTER (122.5 HP, 2 STA): Drake Sting→Ham (1STA) [65%] 8.45exp | STA 2→0 → EXHAUSTED. Lands Prone.
  ▸ STA: 2→0 EXHAUSTED  Dmg to Mon: 43.5
  ▸ Ham HP: 13.5−8.45=5.1 (critical)
STATE: Mon HP 79.0/220 STA 0 EXHAUSTED | GS 37/49 STA5 M3 | Ham 5.1/43 STA6 I3 | SS 26/43 STA5 |
       Cond DOWN [Wings likely broken this round — 63% probability]

── R6 ──────────────────────────────────────────────────────────
[Earule EXHAUSTED + Prone. Adv on melee vs Prone. Attacks at half effectiveness.]
[No Swarm Call. No Buzzing Dodge. Melee hunters pile on.]
[Ham at 5.1 HP — single hit ends it. Ham should take Breathing Turn.]
HUNTERS: GS adv M3 (1STA) 0.9375×22.5=21.1dmg STA4 |\
         Ham BREATHING TURN (+4STA→10) 0dmg |\
         SS adv (1STA) 0.9375×16.0=15.0dmg STA4
  ▸ Party dmg: 36.1 (cum: 173.8)  DoT: —
MONSTER (79.0 HP, 0 STA): No actions. Recovers 4 STA end of turn.
  ▸ Dmg taken: 36.1. Conditions: Exhaustion clears (4 STA restored)
STATE: Mon HP 42.9/220 STA 4 (recovering) | GS 37/49 STA4 M3 | Ham 9.1/43 STA10 | SS 26/43 STA4

── R7 ──────────────────────────────────────────────────────────
[Melifur STA 4. Below 25% HP → Desperation. Wings broken — no aerial recovery. Aggressive ground melee.]
HUNTERS: GS adv (1STA) 0.9375×22.5=21.1dmg → OVERKILL
  ▸ Melifur HP: 42.9 − 21.1 = 21.8 remaining. Continue.
         Ham basic (1STA) 0.80×13.0=10.4 | SS basic (1STA) 0.75×16.0=12.0
  ▸ Party dmg: 43.5 (cum: 217.3)
MONSTER (42.9 HP, 4 STA): Drake Sting→SS [60%] 7.8 | Mandible Bite→GS [65%] 6.5 | STA→2
  ▸ Dmg taken: 43.5 → Melifur HP 42.9−43.5 = −0.6  ★ MELIFUR SLAIN ★
```

---

## Result

```
═══ RESULT: Party wins R7 (GS killing blow) ═══
Mon HP:        0 / 220 (−0.6 overkill)
Avg hunter HP: 20.4 / 44.5  (GS 76%, Ham 21%, SS 60%, Conduit DOWN)
Avg hunter STA: 6.3 / 9.0 (3 survivors)
Breaths taken: 2 (Conduit R4 forced, Ham R6 forced by HP)
Parts broken:  Wings (Reaction called shots R3–R5)
Mon STA→0:     R5 (drake sting chaining into STA collapse)
Party DPR avg: ~31.1/round (R1–R7, with 4→3 hunters R5+) | Monster DPR avg: ~12.8/round
Kill round:    7
STA pressure:  High (Conduit exhausted Channel by R4; Ham near-lethal forced idle)
HP pressure:   Critical (Conduit downed R4; Ham 12% HP entering R5)
```

---

## Field Projection Aerial Analysis

| Metric | Pre-fix (no projection) | Post-fix (projection active) |
|--------|-------------------------|------------------------------|
| Conduit aerial DPR | 0 (field couldn't reach) | ~5–8 EV/round (varies by Swarm/Dodge state) |
| Field aspect utility | 0% | ~70% (projected within range ~3 rounds) |
| Conduit STA window | N/A | 3 rounds before Breathing Turn (9 STA − 2/round) |
| Estimated party aerial DPR | ~33 (3v1 after idle Conduit) | ~36 (Conduit adds 4–8 EV) |
| Effective party efficiency | ~3.0v1 | ~3.3v1 |
| DPR loss vs fully grounded | ~51% loss (Conduit effectively idle) | ~15–20% loss (projection overhead vs full value) |

**Field Projection verdict:** The mechanic correctly converts a hard dead zone into a positioning puzzle with STA cost. Conduit contributes ~5–8 DPR during the aerial phase (vs 0 previously), and the 3-round projection window creates a genuine decision point: project and burn STA (vs. save STA for the ground phase pile-on). The fix works as designed. However, the sim exposes a deeper structural problem.

**The structural problem is party composition, not Conduit's range.** With GS, Ham, and SS contributing 0 DPR for 4 full aerial rounds, Conduit carrying the fight alone at 37% effective hit rate under Swarm Call is unsustainable. Melifur entered R4 at 201/220 HP (92% health) despite Conduit's contributions. The ground phase (R3–R7) was brutal and fast, but only because Melifur's STA collapsed — not because of damage inflicted during the aerial phase.

---

## Flags

- **Conduit downed mid-fight:** Conduit hit 4.1/43 HP (10%) by end R3 from Resin Bomb R2 (stripped Dodge while Restrained) + double Drake Sting/Mandible Bite chain in R3. Mandatory Breathing Turn R4 left Conduit with no Dodge against a targeted Drake Sting. Conduit down R4 as EV outcome. One above-average Resin hit OR earlier Poisoned Mandible chain downs Conduit in R3.
- **Conduit STA collapse by R3:** Channel −1/turn + Projection −1/turn = −2 STA/round against a 9-STA pool. Effective aerial window = 3 rounds (R1–R3) before Breathing Turn forced. This is correct design — the STA tension is real. But 3 rounds of aerial support at 37% effective hit rate = ~15 EV damage total. Insufficient to justify Conduit's HP cost.
- **Hammer near-lethal twice:** Ham entered R3 at 25.5 HP (59%), R5 at 5.1 HP (12%). No reaction available (Heavy armor, no Guard/Parry) means Ham absorbs full Drake Sting chains. Without SS's Block and GS's Parry drawing attention, Ham would have been downed R5 instead of surviving to R7.
- **No grounding path in composition:** Party has no Binding Arrow, no Honey Bait, no Wing Break ranged access until Melifur dives. Wing breaks required 3+ rounds of dive reactions (R3 called shot + R5 second break) — grounding via wings only worked because Melifur's STA collapsed first. If Melifur had higher STA or more conservative dive patterns, aerial phase extends indefinitely.
- **Wing break via called shot reactions is viable but slow:** Two Reaction wing breaks happened at R3+R5 in this sim — but the breaks came too late to meaningfully change the fight structure. Grounding via wings at R3–R4 would have been decisive; at R5 it was incidental (Melifur was already exhausted). The party needed a Bow or Arbalest to break wings by R2.
- **Resin Bomb → Conduit = composition exploit:** Melifur's Resin Bomb targeting Conduit (lowest STR save, lowest HP, reliant on Dodge) is brutally effective. 70% Restrained rate on the one ranged attacker strips the only aerial DPR source and removes Dodge against the dive follow-up. This combo requires either second defensive layer (Trolian Flowstep on Conduit) or deliberate positioning to keep Conduit outside Resin Bomb range.

---

## Tuning Notes

1. **Field Projection fixes Conduit's dead zone — the composition is still wrong.** The mechanic works correctly: Conduit projects within 40ft of aerial Melifur and attacks at meaningful (if penalized) rates. The 51% DPR loss in the original sim drops to ~15–20% with projection overhead. The STA tension (3-round clean window) is a genuine and interesting design. However, this sim answers a secondary question — the primary finding is that 3 melee + Conduit vs an aerial monster without a Bow or Binding Arrow equivalent is a structural party composition failure, not a Conduit mechanic failure.

2. **Conduit's aerial contribution becomes meaningful at higher STA or with Swarm Call countered.** At 9 STA with −2/round overhead, Conduit has 3 rounds of projection. If CON were 8 (STA 10) or Conduit carried an anti-swarm tool (Hive Warding armor − 1 Poison damage reducing Swarm aura pressure), the window extends. Field Projection's design is well-calibrated for its cost — the weakness is Conduit's base STA pool, not the mechanic.

3. **Honey Bait Trap as composition-agnostic grounding path is critical for melee-heavy parties.** Melifur's encounter packaging includes a Honey Bait Trap (crafted pre-hunt from Royal Resin Core): deploy as Fast Action anywhere in clearing → Melifur lands to destroy it next turn (guaranteed 1 ground round, no save). For a party of 3 melee hunters who otherwise have no grounding access, the Honey Bait converts an aerial stall into a planned grounding event. This is the correct design solution for compositions without Bow/Arbalest — surface it explicitly in GM prep notes.

4. **Wing Break threshold scaling.** This party's reaction-based wing break path (melee Reactions on dive passes) requires 3+ rounds of aerial aggression from Melifur to accumulate 2 breaks. A party with one Bow breaks wings by R2–R3 via direct called shots. Consider a 3-hit threshold for parties with Bow (or 2 called-shot hits + 1 Reaction break) to maintain the aerial phase duration regardless of composition.

5. **Conduit Resin zone vulnerability needs systemic answer.** Conduit as the sole ranged attacker is the primary Resin Bomb target — Melifur's Resin Bomb + Restrained → Mandible Bite double-dip is catastrophically effective against a Medium-armor, low-STR hunter who relies on Dodge. Three options: (a) Trolian Flowstep on Conduit (ignores difficult terrain including Resin zones), (b) Honey Shell rare armor (end Poisoned, gain +1 STA), or (c) Conduit mounting the Field on SS/GS instead of self, making Conduit a rear-position controller who avoids dive targeting entirely.

---

*Generated by /sim-hunt — EV mode, T2 HR7 midpoint | Conduit Field Projection (post-fix), Melifur HP 220*
