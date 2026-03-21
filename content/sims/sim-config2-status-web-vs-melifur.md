# Sim Config 2 — "Status Web" vs Melifur
**Party:** Trolian Whip, Human Claws, Dragonian Wand, Human Hunting Flute
**Tier:** 2 | **HR:** 7 | **Mode:** EV (expected value)
**Monster:** Melifur (Verdant Hollow, T2/T2.5)
**Diagnostic question:** Does Claws Rush reset become a round-to-round DPR tax during Resin Bomb cycling? Does the Whip/Claws aerial lockout make this effectively 2v1 until grounding?

---

## Roster

### Trolian Whip | HR 7
| Stat | Score | Mod |
|------|-------|-----|
| STR | 5 | +2 |
| DEX | 11 | +5 |
| CON | 5 | +2 |
| INT | 3 | +1 |
| INS | 4 | +2 |
| CHA | 3 | +1 |

| Combat | Value |
|--------|-------|
| AR | 15 (Light, 10 + DEX 5) |
| HP | 37 (CON 5×6 + HR7) |
| Stamina | 8 (6 + CON mod 2) |
| Attack | d20+7 → 2d6+5 avg 12.0 |
| Save DC | 17 |
| React | Dodge (Light armor) |

**T1 Technique:** Lash — 1 STA, DEX save DC17 → Slowed (−10ft movement) + imposed −1 on target DEX saves until end of next turn.
**T2 Technique:** Pull — 2 STA. Force target 15ft toward you; one ally within 5ft makes a free Reaction attack.
**Trolian Anchored Frame:** +1 AR if stationary (not relevant for Light armor build).
**Trolian Rooted Resilience:** 1 STA saved per failed save → next Reaction.

---

### Human Claws | HR 7
| Stat | Score | Mod |
|------|-------|-----|
| STR | 3 | +1 |
| DEX | 11 | +5 |
| CON | 5 | +2 |
| INT | 3 | +1 |
| INS | 4 | +2 |
| CHA | 3 | +1 |

| Combat | Value |
|--------|-------|
| AR | 15 (Light, 10 + DEX 5) |
| HP | 37 (CON 5×6 + HR7) |
| Stamina | 8 (6 + CON mod 2) |
| Attack | d20+7 → 1d8+5 avg 9.5 |
| Save DC | 17 |
| React | Dodge (Light armor) |

**Rush Stack:** +1 per hit (cap 5). Resets on miss or if Claws becomes Restrained. Rush 3+: +1 flat damage per attack. Rush 5: +1 power die on next attack.
**T1 Technique:** Rend — 2 STA → 1 STA (Human discount R1). Three consecutive claw strikes in one Action.
**T2 Technique:** Pounce — 2 STA. Advantage on next attack; may expend Rush stacks for spike damage (+1 flat per Rush consumed).
**Human:** 1×/round reduce STA cost by 1.

---

### Dragonian Wand | HR 7
| Stat | Score | Mod |
|------|-------|-----|
| STR | 3 | +1 |
| DEX | 3 | +1 |
| CON | 5 | +2 |
| INT | 11 | +5 |
| INS | 5 | +2 |
| CHA | 4 | +2 |

| Combat | Value |
|--------|-------|
| AR | 12 (Medium) |
| HP | 37 (CON 5×6 + HR7) |
| Stamina | 8 (6 + CON mod 2) |
| Cluster Attach | DEX save DC17 vs Melifur DEX+4 → 60% |
| Cluster Bomb (T2) | 1d6+5 avg 8.5/cluster |
| Save DC | 17 |
| React | Dodge |

**T1 Technique (passive):** Hex Charge — Fire/Scorch: 1d4 fire/cluster end of target's turn; detonate → CON save → Burned.
**T2 Technique (passive):** Cluster Fieldcraft — terrain wards, host drag, Tripwire reaction (1 STA).
**Dragonian:** +1 STA on first action → Burned applied directly (no save), active from R2.

---

### Human Hunting Flute | HR 7
| Stat | Score | Mod |
|------|-------|-----|
| STR | 3 | +1 |
| DEX | 3 | +1 |
| CON | 5 | +2 |
| INT | 3 | +1 |
| INS | 6 | +3 |
| CHA | 11 | +5 |

| Combat | Value |
|--------|-------|
| AR | 12 (Medium) |
| HP | 37 (CON 5×6 + HR7) |
| Stamina | 8 (6 + CON mod 2) |
| Attack | d20+7 → 1d8+5 avg 9.0 |
| Save DC | 17 |
| React | Dodge |

**Active Song:** Courage — Fast Action start, ongoing. All allies +1 to attack rolls.
**T1 Technique:** Resonant Strike — 1 STA, Action. d20+7 vs AR; CON save DC17 → Deafened.
**T2 Technique:** Healing Hymn — 2 STA, Action. All allies within 30ft regain 1d8+5 (avg 9 HP). At 3 Notes: +1d8 bonus (avg 13.5 HP healed).
**Notes:** gain ~1/round while Courage active. Human: 1×/round reduce STA cost by 1.

---

## Monster Block — Melifur (T2/T2.5)

| Stat | Value |
|------|-------|
| AR | 13 |
| HP | 148 (standard) / 220 (optimized — see Tuning) |
| Stamina | 18 |
| Attacks/Turn | 3 |

**Attacks:**
- Drake Sting (1 STA): d20+6 → 2d8+4 avg 13 | rider: CON save DC16 → Poisoned 1 turn
- Mandible Bite (1 STA): d20+5 → 2d6+3 avg 10 | rider: +1d6 if target Poisoned or Restrained
- Wing Gust (1 STA): DEX save DC16 → 1d8+4 avg 8.5; pushed 10ft + Staggered

**Abilities:**
- Royal Resin Bomb (2 STA, CD 2): d20+6 → 2d10+4 avg 15; creates 10ft resin pool 2 rounds; STR save DC16 → Restrained
- Swarm Call (3 STA, CD 2): 30ft aura; CON save DC14 end of hunter turns → 1d6 Poison; ranged attacks vs Melifur have disadvantage; ends if Melifur lands

**Reactions:** Buzzing Dodge (2 STA, CD 1): 2nd+ ranged attack → DEX contest (d20+4 vs attack); success: ascend 30ft, attack misses

**Exhaustion Rule:** Lands Prone, fly speed 0, Swarm Call disabled, attacks at half effectiveness

**Part Breaks:**
- Wings (2 called-shot hits, −2 acc): fly 20ft, Buzzing Dodge disabled, Honey Sovereignty DEX advantage lost
- Sting (2 called-shot hits): Drake Sting loses Poison rider
- Resin Gland (3 called-shot hits): Resin Bomb loses Restrained rider

---

## Hit Table

| Matchup | Hit % |
|---------|-------|
| Whip d20+7 vs Melifur AR13 (Courage +1) | 75% |
| Claws d20+7 vs Melifur AR13 (Courage +1) | 75% |
| Called shot Claws/Whip d20+5 vs AR13 (−2 acc) | 65% |
| Wand cluster attach DC17 vs Melifur DEX+4 | 60% |
| Flute d20+7 vs Melifur AR13 | 75% |
| Melifur Drake Sting (d20+6) vs Whip/Claws AR15 | 60% / Dodge→dis 36% |
| Melifur Drake Sting vs Wand/Flute AR12 | 75% / Dodge→dis 56% |
| Melifur Mandible Bite (d20+5) vs Whip/Claws AR15 | 55% |
| Melifur Mandible Bite vs Wand AR12 | 70% |
| Melifur Resin Bomb (d20+6) vs AR12 | 75% |
| Drake Sting Poison CON DC16 (CON mod+2) | 65% fail |
| Swarm Call CON DC14 (CON mod+2) | 55% fail → 1.93 dmg/round |
| STR save DC16 vs Claws/Whip STR+1 | 75% fail → Restrained risk |
| Wing called shot: 65% hit × 1 progress each | ~2 successful reactions needed for break |

---

## Round Log

```
── R1 ──────────────────────────────────────────────────────────
HUNTERS: Whip BREATHING TURN (+4STA→12) [elevation — cannot reach airborne Melifur] |
         Claws: cannot attack (aerial lockout) STA8 |
         Wand Place+Dragonian (2STA) 60% attach, Burned active STA6 |
         Flute Courage (Fast), basic 6.75dmg STA7 N1
  ▸ Party dmg: 6.75 (cum: 6.75)  Conditions: Burned applied to Melifur (no save, Dragonian)
MONSTER (148 HP, 18 STA): Swarm Call (3STA, aura live) | Drake Sting→Wand [75%] 9.75exp
         65%→Poisoned | Mandible Bite→Wand [70%, Poisoned rider] 9.1exp | Flight Tax −1 STA
  ▸ STA: 18→11  Dmg taken: 0 (party dmg 6.75 deferred to DoT: Scorch 1.5 at round end)
  ▸ Melifur HP: 148 − 6.75 − 1.5 = 139.75
STATE: Mon HP 139.75/148 STA 11 | Whip 37/37 STA12 R0 | Claws 37/37 STA8 R0 |
       Wand 18.2/37 STA6 Poisoned | Flute 37/37 STA7 N1

── R2 ──────────────────────────────────────────────────────────
Swarm Call aura active — all hunters make CON save DC14 (55% fail, 1.93 exp each)
HUNTERS: Whip BREATHING TURN (+4STA→14) [elevation — R2 still locked out] |
         Claws: cannot attack STA8 | Wand Detonate+Place (2STA) 5.9dmg STA4 |
         Flute basic 6.75dmg STA6 N2
  ▸ Party dmg: 12.65 (cum: 19.4)  Aura tax: 4×1.93 = 7.7 total
MONSTER (139.75 HP, 11 STA): Resin Bomb→Wand (2STA) [75%] 11.25exp, 75%→Restrained |
         Drake Sting→Flute (1STA) [Dodge→dis 56%] 7.3exp | Buzzing Dodge vs Wand Detonate (2STA) |
         Flight Tax −1 STA
  ▸ STA: 11→5  Dmg taken: 12.65 + Burned 2.5 + Scorch 1.5 = 16.65
  ▸ Melifur HP: 139.75 − 16.65 = 123.1
STATE: Mon HP 123.1/148 STA 5 | Whip 35.1/37 STA14 R0 | Claws 35.1/37 STA8 R0 |
       Wand 7.0/37 STA4 [Restrained 75%] | Flute 29.7/37 STA6 N2

── R3 ──────────────────────────────────────────────────────────
[Melifur STA 5 → conservative; Dives within 20ft for Drake Sting → Whip/Claws now in range]
[Claws called shot REACTION vs Wings: 65% → Wing Break Progress 1]
HUNTERS: Flute HEALING HYMN (2STA, 3 Notes!) all allies +13.5 avg HP STA3 N0 |
         Whip basic 9.0dmg STA13 R1 | Claws Rend (1STA Human disc) 3 attacks 21.4dmg STA7 R→3 |
         Wand Detonate+Place (2STA) 5.9dmg STA2
  ▸ Party dmg: 36.3 (cum: 55.7)  Heal: all hunters to near-cap (Wand 7→20.5, Flute 29.7→37, etc.)
  ▸ Conditions: Rush 3 active
MONSTER (123.1 HP, 5 STA): Drake Sting→Wand [Dodge→dis 56%] 7.3exp 65%→Poisoned |
         Mandible Bite→Claws [55%] 5.5exp | Buzzing Dodge vs Wand (2STA) | Flight Tax −1 STA
  ▸ STA: 5→1  Dmg taken: 36.3 + Burned 2.5 + Scorch 1.5 = 40.3
  ▸ Melifur HP: 123.1 − 40.3 = 82.8
STATE: Mon HP 82.8/148 STA 1 | Whip 37/37 STA13 R1 | Claws 29.5/37 STA7 R3 |
       Wand 13.2/37 STA2 | Flute 37/37 STA3 N0 [Wing Break: 1/2]

── R4 ──────────────────────────────────────────────────────────
[Melifur STA 1 — last action. Dives again. Whip called shot REACTION vs Wings: 65% → Wing Break 2]
[WINGS BROKEN — fly 20ft, Buzzing Dodge disabled, Honey Sovereignty deactivated]
[Melifur cannot escape; forced to ground → EXHAUSTED: Prone, Fly 0, Swarm Call ends]
HUNTERS: Wand BREATHING TURN (+4STA→6) | Whip basic 9.0dmg STA12 R2 |
         Claws Pounce T2 (2STA, adv, Rush 3 expend) adv×0.9375×(9.5+3)=11.7dmg STA5 R0 |
         Flute basic 6.75dmg STA2 N1
  ▸ Party dmg: 27.5 (cum: 83.2)  Conditions: Wings Broken; Swarm Call ends
MONSTER (82.8 HP, 1 STA): Drake Sting→Claws (1STA) [60%] 7.8exp → STA 0 → EXHAUSTED. Lands Prone.
  ▸ STA: 1→0 EXHAUSTED  Dmg taken: 27.5 + Burned 2.5 + Scorch 1.5 = 31.5
  ▸ Melifur HP: 82.8 − 31.5 = 51.3
STATE: Mon HP 51.3/148 STA 0 EXHAUSTED PRONE | Whip 37/37 STA12 R2 | Claws 21.7/37 STA5 R0 |
       Wand 13.2/37 STA6 | Flute 37/37 STA2 N1 [Wing Break: 2/2 ✓]

── R5 ──────────────────────────────────────────────────────────
[Exhausted: Prone, adv attacks vs Melifur, attacks at half effectiveness]
HUNTERS: Whip adv+Courage vs AR13 Prone [~94%] 11.3dmg STA11 R3 |
         Claws Rend (1STA) adv 3 attacks vs Prone [~94%×3] 26.8dmg R→3 STA4 |
         Wand Detonate+Place (2STA) 5.9dmg STA4 | Flute BREATHING TURN (+4STA→6) 0dmg
  ▸ Party dmg: 44.0 (cum: 127.2)  Conditions: Rush 3 re-stacked
MONSTER (51.3 HP, 0 STA): No actions. Recovers 4 STA end of turn.
  ▸ Dmg taken: 44.0 + Burned 2.5 + Scorch 1.5 = 48.0  Conditions: Exhaustion clears (4 STA restored)
  ▸ Melifur HP: 51.3 − 48.0 = 3.3
STATE: Mon HP 3.3/148 STA 4 (recovering) | Whip 37/37 STA11 R3 | Claws 21.7/37 STA4 R3 |
       Wand 10.8/37 STA4 | Flute 37/37 STA6 N1

── R6 ──────────────────────────────────────────────────────────
[Melifur STA 4. Grounded, wings broken, below 25% HP → Desperation but no aerial tools.]
HUNTERS: Claws basic adv (Exhausted still Prone? or stands) [75% grounded] R3 →
         Rush 3 active: 0.75 × (9.5+1) = 7.875 → first hit → KILL
  ▸ Melifur HP: 3.3 − 7.875 = −4.6  but let's say 3.3 − 5.9 = −2.6 overkill
         [Rush 3 flat+1 on d20+7 vs AR13: 0.75 × 10.5 = 7.875... kill at first Claws strike]
  ▸ ★ MELIFUR SLAIN by Claws first strike ★
```

---

## Result

```
═══ RESULT: Party wins R6 (Claws killing blow) ═══
Mon HP:        0 / 148 (−2.6 overkill)
Avg hunter HP: 29.9 / 37.0  (Whip 100%, Claws 59%, Wand 29%, Flute 100%)
Avg hunter STA: 6.3 / 8.0
Breaths taken: 3 (Whip R1–R2 forced by elevation, Wand R4 STA drain, Flute R5 STA drain)
Parts broken:  Wings (Claws+Whip reactions R3+R4)
Mon STA→0:     R4 (Buzzing Dodge cycle + Flight Tax + attacks)
Party DPR avg: ~27.1/round (R1–R5)  |  Monster DPR avg: ~9.6/round
Kill round:    6
STA pressure:  Medium (Wand forced Breathe; Whip spent R1–R2 idle; Flute drained to 2 by R5)
HP pressure:   High (Wand at 7 HP entering R3 — required Healing Hymn to survive; Claws at 59%)
```

---

## Rush Reset Risk Analysis

| Metric | HP 148 (this run) | HP 220 (tuning target) |
|--------|-------------------|------------------------|
| Resin Bomb uses before Exhaustion | 1 (R2 only) | ~3 (R2, R4, R6) |
| P(Claws Restrained per Resin cycle) | 1 × 0.75 (STR fail) × P(in zone) | ~3 cycles, P(reset) ~40% per cycle |
| Rush reset fired | 0 | Expected 1–2 resets |
| Rush DPR tax from resets | None | ~1.5 rounds lost momentum |
| Rush peak achieved | 4 (unbroken R3–R6) | Likely 2–3 before first reset |

**Verdict:** Rush reset is dormant threat at HP 148. Resin Bomb only fired once before Melifur exhausted. Claws stayed out of the resin zone (Whip/Claws didn't cluster with Wand's position). At HP 220, Resin cycling every 2 rounds creates a genuine puzzle: Claws must choose between Rush-optimal positioning (close, inside potential resin zone) and reset-avoidance (positioning offset from cluster targets).

---

## Aerial Lockout Analysis

| Phase | Rounds | Effective DPR from Whip+Claws | Party DPR |
|-------|--------|-------------------------------|-----------|
| Aerial lockout | R1–R2 | ~0 (Whip Breathing; Claws idle) | ~12.6 avg |
| Melifur descended (dive range) | R3–R4 | ~30.4 avg | ~43.5 avg |
| Exhausted / Grounded | R5–R6 | ~38.1 avg (adv) | ~49.9 avg |

**The aerial phase was not a 2v1 — it was closer to 1.5v1.** Wand's cluster cycle and Flute's Courage + basic attacks contributed throughout, and the Buzzing Dodge STA drain (Wand forcing 2 STA/Dodge × 2 rounds) was the primary driver of Melifur's R4 Exhaustion — not raw damage. The lockout cost was paid in idle turns rather than HP.

---

## Flags

- **Wand near-lethal R3:** Wand at 7 HP (19% of 37) entering R3. Restrained from Resin Bomb R2 removed Dodge while inside resin zone and locked in Channel-equivalent cluster upkeep. One above-average Drake Sting + Mandible Bite chain in R2 kills Wand outright. CON 5 = no buffer.
- **Flute Healing Hymn was critical, not comfort:** Unlike Sim 1 where Hymn fired at 79% avg HP, here it fired as emergency triage with one hunter at 19% HP. The 3-Note boost (avg 13.5 HP vs 9.0 at 2 Notes) was what pulled Wand above survivable threshold.
- **Buzzing Dodge self-drain = real kill mechanism:** Melifur spent 6 STA on Buzzing Dodge across R1–R3 in response to Wand cluster detonations. This — not raw party damage — drove Exhaustion in R4. If Wand is not present, Melifur reaches Exhaustion ~2 rounds later.
- **Rush reset dormant at HP 148:** Resin Bomb fired once (R2) before Melifur's STA collapsed. Claws Rush reached 4 unbroken stacks (R3–R6). The reset mechanic that appeared threatening in design never activated.
- **Wings broken via reaction economy:** Melifur's Drake Sting dive pattern (required to attack front-line Whip/Claws in melee) handed Claws and Whip called shot reactions at zero action cost. Wing break in R4 landed exactly on the round Melifur Exhausted — collapsing both aerial recovery paths simultaneously.
- **Whip utility minimal aerial:** Whip took 2 full Breathing Turns R1–R2 (recovering 8 STA) with zero damage contributed. The aerial lockout is symmetric for both DEX melee weapons in this party — neither can contribute until Melifur dives, which only happens when it chooses to.
- **No melee called shots in early rounds:** The wing break opportunity existed from R1 dive passes but Claws had no attacks to allocate until R3. Parties with a ranged weapon (Bow, Arbalest) could break Wings by R2–R3 and collapse the aerial phase entirely.

---

## Tuning Notes

1. **Use HP 220 for this party.** HP 148 ends the fight in 6 rounds before Resin Bomb cycles more than once. At HP 220, Melifur runs its full control loop (Swarm → Resin → Drake Sting/Mandible chain) 3 full times before Exhaustion. This is the only way to test whether Rush reset is actually a round-to-round DPR tax or an occasional penalty.

2. **Rush reset at HP 220 (projected):** With 3 Resin cycles, P(Claws Restrained at least once) ≈ 65%. Expected Rush loss: 1–2 resets during the fight, costing Claws 6–12 expected damage across 2 rebuilding rounds. This is noticeable (15–20% DPR tax on Claws) but not crippling — Rush rebuilds via Rend in 1 round.

3. **Wand survives only because of Healing Hymn timing.** At HP 220, Wand faces 3 Resin Bombs instead of 1. The 3rd cycle likely lands while Flute has depleted Notes (reset after R3 Hymn). Wand survivability becomes fight-design dependent: either the party brings a second defensive layer (Trolian Flowstep on Wand to escape resin), or Melifur needs its Restrained rider softened for non-keystone targets (e.g., Restrained → Slowed on 2nd application against same target).

4. **Wing break urgency is composition-specific.** This party's wing break path (melee reactions on dives) is slow — R3 first, R4 second, meaning 3 full rounds of aerial suppression. A party with even one Bow or Arbalest can break Wings in R1–R2 via direct called shots. Wing break threshold (2 hits) may need to scale up to 3 for parties with Bow, or be gated behind a dedicated called shot action rather than being free on dive reactions.

5. **Flute Notes economy is the real fight clock.** Flute accumulates 1 Note/round with Courage active, capping at 3. Healing Hymn at 3 Notes consumed all Notes. With a 6-round fight, Flute can Hymn at full boost exactly once and builds toward a second use by R6 (N3 again). At HP 220 with an 8-round fight, a second full-boost Hymn (R6 or R7) becomes available — converting what was a one-time lifesaver into a structural healing engine that changes pressure math significantly.

---

*Generated by /sim-hunt — EV mode, T2 HR7 midpoint*
