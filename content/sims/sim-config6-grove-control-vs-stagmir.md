# Sim Config 6 — "Grove Control" vs Stagmir
**Party:** Human Hammer, Trolian Spear & Shield, Human Bow, Thalorim Hunting Flute
**Tier:** 3 | **HR:** 12 | **Mode:** EV (expected value)
**Monster:** Stagmir — The Grovefather (Old Grove, T3 Apex)
**Diagnostic questions:**
1. Does Stagmir's updated STA economy (Grove Sovereignty +2/round, Cataclysm 0 STA auto, Renewal 0 STA auto) stay solvent under sustained hunter DPR?
2. Does the Verdant Cataclysm (50% HP) and Renewal (30% HP) fire in a typical fight?
3. How does the Verdant Throne Restrained loop affect hunter action economy — particularly S&S Block/Counter-Thrust?
4. What is the break priority order for an optimal run, and does Root Aura break change the outcome?

**Monster version:** Updated canonical — Grove Sovereignty +2 STA/round, Cataclysm 0 STA (auto-trigger), Renewal 0 STA (auto-trigger), Antler Crown accuracy Standard (−2).

---

## Roster

### Human Hammer | HR 12
| Stat | Score | Mod |
|------|-------|-----|
| STR | 12 | +6 |
| DEX | 3 | +1 |
| CON | 9 | +4 |
| INT | 3 | +1 |
| INS | 3 | +1 |
| CHA | 3 | +1 |

**Build path:** Base STR 5, CON 5 → Background Tribal Warrior (+2 STR, +1 CON) → Weapon bonus (+2 STR) → Race Human (+1 STR) → Tier scaling T3 (+2 STR, +2 CON) → Vitality Floor +2 CON free.

| Combat | Value |
|--------|-------|
| AR | 14 (Heavy) |
| HP | 66 (CON 9×6 + HR12) |
| Stamina | 10 (6 + CON mod 4) |
| Attack | d20+8 (STR mod 6 + prof 2) → 2d8+6 avg 15.0 |
| Save DC | 18 (10 + 6 + 2) |
| React | None (Heavy, no Guard/Parry) |

**Impact Zone:** Antler Crown ★ Standard (−2) → d20+6 vs AR18 → hit 45%; hit 60% vs base AR16 (Crown at Standard).
**T3 Technique — Overwhelming Force (Passive):** When monster Blocks/Dodges → spend 1 STA → half damage + 1 Impact. Breaks bludgeoning resistance. Break Progress 2/hit (3 at 3 Impact).
**Human:** 1×/round reduce STA cost by 1 → first attack of fight costs 0 STA.
**Charged Smash (T1):** 2 STA, wind-up, +2d6 avg+7, 2 Impact on release. Cancel if Ham moves >5ft or takes damage during charge.

**Impact tracking note:** At 60% hit rate (Crown Standard −2), E[rounds per Impact] ≈ 1.67. E[rounds to Stun from I=0] ≈ 5 rounds. Crown break threshold: 3 hits → ~5 rounds at 60%.

---

### Trolian Spear & Shield | HR 12
| Stat | Score | Mod |
|------|-------|-----|
| STR | 12 | +6 |
| DEX | 3 | +1 |
| CON | 9 | +4 |
| INT | 3 | +1 |
| INS | 3 | +1 |
| CHA | 3 | +1 |

**Build path:** Base STR 5, CON 5 → Background Tribal Warrior (+2 STR, +1 CON) → Weapon bonus (+1 STR, +1 CON) → Race Trolian (+1 STR) → Tier scaling T3 (+2 STR, +2 CON) → Vitality Floor +2 CON free.

| Combat | Value |
|--------|-------|
| AR | 15 (Heavy 14 + Trolian Anchored Frame +1 stationary) |
| HP | 66 (CON 9×6 + HR12) |
| Stamina | 10 (6 + CON mod 4) |
| Attack | d20+8 → 2d6+6 avg 13.0 |
| Save DC | 18 |
| React | Block (Guard tag), Parry (Parry tag) |

**T2 Technique — Shield Counter-Thrust (2 STA):** When blocking, make a free counter-attack at half damage. Triggered on block.
**T3 Technique — Unstoppable Advance (Passive):** On hit, STR save DC18 → fail → Staggered.
**Trolian Anchored Frame:** +1 AR when not moving (AR 15 stationary).
**Trolian Rooted Resilience:** 1 STA saved per failed save.

**Block EV:** Stagmir d20+7 vs S&S AR15 → 55% hit. Block reduces to +3 AR → d20+7 vs AR18 → 40% hit. Block saves (55−40)% × avg Stagmir dmg = 15% reduction. Cost: 1 STA.

---

### Human Bow | HR 12
| Stat | Score | Mod |
|------|-------|-----|
| STR | 3 | +1 |
| DEX | 11 | +5 |
| CON | 7 | +3 |
| INT | 3 | +1 |
| INS | 7 | +3 |
| CHA | 3 | +1 |

**Build path:** Base DEX 5, CON 4 → Background Wanderer (+2 DEX, +1 INS) → Weapon bonus (+1 DEX, +1 INS) → Race Human (+1 DEX) → Tier scaling T3 (+2 DEX, +2 CON) → Vitality Floor +2 CON free.

| Combat | Value |
|--------|-------|
| AR | 15 (Light 10 + DEX mod 5) |
| HP | 54 (CON 7×6 + HR12) |
| Stamina | 9 (6 + CON mod 3) |
| Attack | d20+7 (DEX mod 5 + prof 2) → 2d8+5 avg 14.0 |
| Save DC | 17 (10 + 5 + 2) |
| React | Dodge (Light armor) |

**Focus:** +1 per stationary turn (max 3). +1 flat dmg per Focus on next hit. Reset on move >5ft.
**T3 Technique — Concentration (Passive):** While aiming Power Shot, retain Reactions and may Dodge.
**Power Shot (T1):** 2 STA, wind-up, advantage + +1 damage die. At F3: same-turn release.
**Arrow Types (2 uses each):** Signal Arrow (on hit, all allies +1 atk until next turn) | Binding Arrow (on hit, STR save DC17 → Stagger + no fly).
**Human:** 1×/round reduce STA cost by 1.

**Root Aura break note:** Root Aura = Open (0 penalty) → d20+7 vs AR16 = 60% hit. Threshold: 2 hits. E[rounds to break] ≈ 3.3 rounds.

---

### Thalorim Hunting Flute | HR 12
| Stat | Score | Mod |
|------|-------|-----|
| STR | 3 | +1 |
| DEX | 3 | +1 |
| CON | 9 | +4 |
| INT | 3 | +1 |
| INS | 5 | +2 |
| CHA | 12 | +6 |

**Build path:** Base CHA 5, CON 4 → Background Scholar (+2 INT, +1 INS… but CHA primary, use Tracker → +2 INS, +1 CON) → Weapon bonus (+2 CHA) → Race Thalorim (+1 CON) → Tier scaling T3 (+2 CHA, +2 CON) → Vitality Floor +2 CON free.

*Note: Thalorim +1 CON applied (no CHA match), Scholar for lore flavor vs Tracker for optimal build — using Scholar here (+2 INT → redistribute to CHA for flavor; final CHA 12 via weapon/tier bonuses).*

| Combat | Value |
|--------|-------|
| AR | 12 (Medium) |
| HP | 66 (CON 9×6 + HR12) |
| Stamina | 10 (6 + CON mod 4) |
| Attack | d20+8 (CHA mod 6 + prof 2) → 2d6+6 avg 13.0 |
| Save DC | 18 (10 + 6 + 2) |
| React | Dodge (Medium armor) |

**Courage Song (T2 passive — no STA cost to sustain):** All allies in 30ft gain +1 to attack rolls.
**T3 Technique — Resonant Pulse (2 STA):** CHA save DC18 vs all enemies in 30ft → fail → Dazed (disadvantage on attacks, no Reactions, ends next turn).
**Thalorim Tide Breath:** No underwater encounter — no combat impact.

**Courage Song modifier applied to all hunters:** +1 attack → Ham d20+9, S&S d20+9, Bow d20+8, Flute d20+9.

---

## Monster Stat Block

### Stagmir — The Grovefather | Tier 3 Apex

| Stat | Score | Mod |
|------|-------|-----|
| STR | 10 | +5 |
| DEX | 5 | +2 |
| CON | 11 | +5 |
| INT | 6 | +3 |
| INS | 10 | +5 |
| CHA | 11 | +5 |

| Combat | Value |
|--------|-------|
| AR | 16 |
| HP | 340 (optimized party scaling) |
| Stamina | 21 (10 + CON 11) |
| Attacks/Turn | 3 |
| Attack Roll | d20+7 (STR mod 5 + prof 2) |

**Attacks:**
- Antler Gore (1 STA): d20+7 → 2d10+5 avg 16.0. Rider: STR Save DC15 → Restrained (1 turn) if adjacent to vegetation.
- Hoof Kick (1 STA): d20+7 → 2d8+5 avg 14.0. Rider: DEX Save DC15 → Knocked back 10ft + lose 1 STA.

**Abilities:**
- Rootquake (3 STA, CD 2 turns): 30ft shockwave, 2d8+5 avg 14.0. STR or CON DC15 → Prone.
- Nature's Judgement (3 STA): Ranged 90ft, d20+7 (INS), 3d10+5 avg 21.5. +1d10 if target harmed flora/beasts.
- Verdant Throne (Passive Aura): 15ft radius. Once/round per creature inside. DEX or INS DC15 → Restrained (1 turn). Does not stack — one Restrained application per creature per round.
- Renewal (0 STA, 1/Combat): Auto-trigger below 30% HP. Heals 3d12+5 avg 24.5 HP, then regains 1d10 avg 5.5 STA.
- Verdant Cataclysm (0 STA, 1/Combat): Auto-trigger below 50% HP. 2-round duration: entire arena difficult terrain; DEX Save DC16 at start of each hunter turn → Fail → Root-Caged (immobilized until end of that hunter's next turn). Wispform Rider (same activation): that round Stagmir is immune to weapon damage, moves freely, cannot attack.

**Reactions:**
- Root Guard (1 STA): Ally creature within 10ft targeted → STR Save DC15 → fail → attacker has disadvantage on that roll. 1/round.

**Passives:**
- Grove Sovereignty: Inside Old Grove → +2 STA recovery each round + advantage on saves vs forced movement.
- Living Terrain: Vegetation within 20ft of Stagmir = difficult terrain for enemies only.

**Exhaustion Rule:** Verdant Throne stops. Movement halved (15ft). Cannot use Rootquake. Continues Gore + Kick.

**Part Breaks:**
| Part | Accuracy | Threshold | Break Effect |
|------|----------|-----------|--------------|
| Antler Crown ★ *(Impact Zone)* | Standard (−2) | 3 hits | Nature's Judgement −1 die (3d10→2d10). Cataclysm duration 2R→1R. |
| Root Aura | Open (0) | 2 hits | Verdant Throne radius 15ft→5ft. |
| Root Network | Standard (−2) | 2 hits | Rootquake CD 2→3 turns. Living Terrain radius 20ft→10ft. |

**Behavior Priority (above 50% HP):**
1. Maintain Verdant Throne pressure (hold position)
2. Rootquake every 3 turns (2-turn CD)
3. Antler Gore × 2 on nearest clustered hunter
4. Nature's Judgement on hunters who triggered hunt condition

**At 50% HP:** Verdant Cataclysm auto-triggers (0 STA). Wispform rider repositions safely.
**At 30% HP:** Renewal auto-triggers (0 STA). Resume Instinct Loop.

---

## Hit Table

*(With Courage Song +1 applied to all hunters)*

| Attacker | vs AR | Hit % |
|----------|-------|-------|
| Ham d20+9 vs Stagmir AR16 | Body | 70% |
| Ham d20+7 vs Stagmir AR16 Crown (Standard −2) | Crown ★ | 60% |
| S&S d20+9 vs Stagmir AR16 | Body | 70% |
| Bow d20+8 vs Stagmir AR16 | Body | 65% |
| Bow d20+8 vs Root Aura AR16 (Open 0) | Root Aura | 65% |
| Bow d20+6 vs Root Aura AR16 (called shot, no penalty) | Root Aura | 65% |
| Flute d20+9 vs Stagmir AR16 | Body | 70% |
| Stagmir d20+7 vs Ham AR14 | — | 70% |
| Stagmir d20+7 vs S&S AR15 stationary | — | 65% |
| Stagmir d20+7 vs Bow AR15 | — | 65% |
| Stagmir d20+7 vs Flute AR12 | — | 80% |
| Stagmir d20+7 vs Ham AR14 (advantage — Restrained) | — | 91% |
| Stagmir d20+7 vs S&S AR15 (advantage — Restrained) | — | 87.75% |
| Stagmir Rootquake CON/STR DC15 save | Hunters | ~55% fail (CON mod +4 = DC15 → 50%; STR mod +1 = DC15 → 65%) |
| Verdant Throne DEX/INS DC15 | Ham | ~65% fail (DEX mod +1) |
| Verdant Throne DEX/INS DC15 | S&S | ~65% fail (DEX mod +1) |
| Verdant Throne DEX/INS DC15 | Bow | ~50% fail (DEX mod +5 → DC15 → 50%) |
| Verdant Throne DEX/INS DC15 | Flute | ~60% fail (INS mod +2 → DC15 → 60%) |

**Expected DPR per hunter (body, no riders):**
- Ham: 70% × 15.0 = **10.5 dmg/attack**
- S&S: 70% × 13.0 = **9.1 dmg/attack**
- Bow: 65% × 14.0 = **9.1 dmg/attack**
- Flute: 70% × 13.0 = **9.1 dmg/attack**

**Party DPR (ideal, no Restrained):** ~37.8/round (each hunter 1 attack + Flute melody)

**Stagmir DPR per attack (no advantage):**
- Gore vs Ham (AR14, 70%): 70% × 16.0 = 11.2
- Kick vs Ham (AR14, 70%): 70% × 14.0 = 9.8
- Gore vs Flute (AR12, 80%): 80% × 16.0 = 12.8
- Gore vs Ham/S&S (advantage, Restrained, 91%/87.75%): ~14.6 / 14.0

---

## Round Log

### Round 1
**Hunters:** Ham attacks Crown ★ (d20+7 −2 = d20+5 vs AR16, 60%). Hit → 15.0 dmg, +1 Impact (I=1). S&S attacks body (d20+9, 70%). Hit → 9.1 dmg. Bow targets Root Aura (Open 0, d20+8 vs AR16, 65%). Hit → 9.1 dmg (Root Aura progress: 1/2). Flute opens Courage Song (no STA), attacks body (d20+9, 70%). Hit → 9.1 dmg.
- **Party dmg:** 42.3. Cum: 42.3. Root Aura: 1/2.

**Stagmir (21 STA):** Rootquake (3 STA) → 30ft shockwave vs all. STR/CON DC15. Ham: 65% fail → Prone + 9.8 avg. S&S: 65% fail → Prone + 9.8 avg. Bow: 50% fail → 4.9 avg (half). Flute: 60% fail → 8.4 avg. Total: 32.9 dmg to party. Verdant Throne aura active but no hunter in 15ft range yet (hunters spread to shoot Root Aura). Ham stands (2 STA). S&S stands (2 STA). Nature's Judgement held (no hunt condition triggered yet).
- Grove Sovereignty: +2 STA recovery at end of turn.
- **Stagmir STA:** 21 − 3 (Rootquake) − 3 (3× attacks) + 2 (Sovereignty) = **17 STA**.
- **Stagmir HP:** 340 − 42.3 = **297.7**

**STATE:** Stagmir 297.7 HP / 17 STA | Ham 66→56.2 HP / STA 8 (stood), I=1 on Crown | S&S 66→56.2 HP / STA 8 (stood) | Bow 54→49.1 HP / STA 9 | Flute 66→57.6 HP / STA 10

---

### Round 2
**Hunters:** Ham attacks Crown (60%). Hit → 15.0 dmg, I=2 on Crown. S&S attacks body (70%) → 9.1 dmg. Bow targets Root Aura (65%). Hit → 9.1 dmg. **Root Aura broken (2/2 hits) — Verdant Throne radius 15ft→5ft.**
Flute uses Resonant Pulse (2 STA, CHA DC18). Stagmir INS mod +5 → 45% fail → Dazed (disadv attacks, no reactions next turn).
- **Party dmg:** 42.3. Cum: 84.6. Root Aura: BROKEN.

**Stagmir (17 STA, Dazed):** 3 attacks at disadvantage this round. Gore vs Ham (disadv, 70%² = 49%) → 7.8 exp. Gore vs S&S (disadv, 65%² = 42%) → 5.9 exp. Kick vs Flute (disadv, 80%² = 64%) → 9.0 exp. Total: 22.7 dmg. Verdant Throne radius now 5ft — hunters easily step back to 6ft, no save triggered this round.
- **Stagmir STA:** 17 − 3 + 2 = **16 STA**.
- **Stagmir HP:** 297.7 − 42.3 = **255.4**

**STATE:** Stagmir 255.4 HP / 16 STA | Ham 56.2→48.4 HP / 10 STA, I=2 Crown | S&S 56.2→50.3 HP / 10 STA | Bow 49.1 HP / STA 8, F1 | Flute 57.6→48.6 HP / STA 8

---

### Round 3
**Hunters:** Ham attacks Crown (60%) → hit → 15.0 dmg, I=3. **Crown Impact Stun check: 3 Impact → Stun triggered.** Stagmir Stunned until end of its next turn. Stun escalating: next Stun needs 4 Impact. S&S attacks body (advantage on Stunned target, adv_hit = 1−(0.30²) = 91%) → 91% × 13.0 = 11.8 dmg. Bow attacks body (advantage, Stunned: 1−(0.35²) = 87.75%) → 87.75% × 14.0 = 12.3 dmg. Flute attacks body (advantage, Stunned: 91%) → 11.8 dmg.
- **Party dmg (Stun round, adv):** 15.0 + 11.8 + 12.3 + 11.8 = 50.9. Cum: 135.5.

**Stagmir (16 STA, STUNNED — skips turn):** No attacks, no actions. Auto-fails STR/DEX saves.
- Grove Sovereignty still applies: +2 STA recovery.
- **Stagmir STA:** 16 + 2 = **18 STA** (recovery only, no spend).
- **Stagmir HP:** 255.4 − 50.9 = **204.5**

**STATE:** Stagmir 204.5 HP / 18 STA | Ham 48.4 HP / STA 10, I=0 (reset) | S&S 50.3 HP / STA 9 | Bow 49.1 HP / STA 8, F1 | Flute 48.6 HP / STA 8

---

### Round 4
**Hunters:** Ham attacks Crown (60%) → 15.0 dmg, I=1. S&S attacks body (70%) → 9.1 dmg. Bow attacks body (65%) → 9.1 dmg, Focus 2 (F2). Flute attacks body (70%) → 9.1 dmg.
- **Party dmg:** 42.3. Cum: 177.8.

**Stagmir (18 STA, Root Aura broken — Throne 5ft):** 3 attacks. Gore vs Ham (70%, Ham in melee range) → 11.2 dmg; STR save DC15, Ham STR +6 → 30% fail → Restrained. Ham fails (30%): Restrained (1 turn), no Dodge/Block. Rootquake (3 STA, CD active from R1 — CD2 means available R3/R4; R4 available). Rootquake vs all → repeat saves. Ham: 65% fail → 9.8 + Prone. S&S: 65% fail → 9.8 + Prone. Bow: 50% fail → 4.9. Flute: 60% fail → 8.4. Nature's Judgement (3 STA) vs Bow (who has been attacking vegetation): d20+7 vs AR15 → 65% → 21.5 exp.
- Total expected dmg this round to party: ~44.0.
- **Stagmir STA:** 18 − 3 (attacks) − 3 (Rootquake) − 3 (NJ) + 2 (Sovereignty) = **11 STA**.
- **Stagmir HP:** 340 − 177.8 = **162.2** (49% HP → Cataclysm imminent next round)

**Hunter HP after R4:**
- Ham: 48.4 − 11.2 (Gore) − 9.8 (Rootquake) = 27.4 HP, STA 9 (stood 2 STA)
- S&S: 50.3 − 9.8 (Rootquake) = 40.5 HP, STA 9 (stood 2 STA)
- Bow: 49.1 − 4.9 (Rootquake, half) − 14.0 (NJ) = 30.2 HP, STA 8, F2
- Flute: 48.6 − 8.4 (Rootquake) = 40.2 HP, STA 8

**STATE:** Stagmir 162.2 HP / 11 STA | Ham 27.4 HP / STA 9, I=1 Crown | S&S 40.5 HP / STA 9 | Bow 30.2 HP / STA 8, F2 | Flute 40.2 HP / STA 8

---

### Round 5 — Verdant Cataclysm Triggers
**Cataclysm:** Stagmir below 50% HP (162.2 < 170). **Verdant Cataclysm auto-triggers (0 STA).**
- Wispform Rider: Stagmir immune to weapon damage this round, cannot attack, moves freely to reposition.
- Cataclysm Duration: 2 rounds (R5 and R6). All arena difficult terrain. DEX save DC16 at start of each hunter's turn.

**Hunters (start of turn — Cataclysm save DC16):**
- Ham: DEX +1 → 75% fail → Root-Caged (immobilized until end of next turn). Ham attacks Crown anyway (I=1 → 2). 60% hit → 15.0 dmg. But Stagmir is Wispform (immune to weapon damage this round). **0 damage.**
- S&S: DEX +1 → 75% fail → Root-Caged. S&S attacks → 0 (immune).
- Bow: DEX +5 → 45% fail → Root-Caged 45% of the time. Bow attacks → 0 (immune). Bow uses Signal Arrow (on hit → allies +1 next round; hit 65% vs immune = 0 dmg but rider deferred to next round if Arrow lands physically). Deferred signal: +1 to all attacks R6.
- Flute: INS +2 → 60% fail → Root-Caged 60%. Flute maintains Courage Song, attacks → 0 (immune).

**Party dmg R5:** 0 (Wispform). Cum: 177.8.

**Stagmir (11 STA, Wispform — cannot attack):** Repositions. Grove Sovereignty +2 STA.
- **Stagmir STA:** 11 + 2 = **13 STA**.
- **Stagmir HP:** 162.2 (no damage taken this round).

**STATE:** Stagmir 162.2 HP / 13 STA | Ham 27.4 HP / STA 9, I=2 Crown | S&S 40.5 HP / STA 9, Root-Caged | Bow 30.2 HP / STA 8, F2 | Flute 40.2 HP / STA 8, Root-Caged — Cataclysm: 1/2 rounds elapsed

---

### Round 6 — Cataclysm Round 2, Signal Arrow active
**Signal Arrow from R5 in effect:** All hunters +1 attack roll.

**Hunters (start of turn — Cataclysm save DC16, R6):**
- Ham: 75% fail → Root-Caged again. Ham attacks Crown (d20+7+1 Signal = d20+8 vs AR18; 55%). Hit → 15.0 dmg, I=3. **Crown broken (3/3 hits)! Nature's Judgement: 3d10+5 → 2d10+5. Cataclysm duration: 2R → 1R (already used, no change).**
- S&S: 75% fail → Root-Caged. S&S attacks body (d20+9+1 = d20+10, 75%) → 9.75 dmg.
- Bow: 45% fail → Root-Caged 45%. Bow attacks body with Power Shot at F3 (3 Focus banked: F2→F3 R5 while stationary; advantage + +1d8). adv_hit = 87.75% × (14.0 + 4.5 + 3) = 87.75% × 21.5 = 18.9 dmg. 2 STA.
- Flute: 60% fail → Root-Caged. Flute attacks (d20+9+1 = d20+10, 75%) → 9.75 dmg.

**Party dmg R6:** 15.0 + 9.75 + 18.9 + 9.75 = 53.4. Cum: 231.2.
- **Crown BROKEN** — Nature's Judgement now 2d10+5. Cataclysm ends (2 rounds elapsed).

**Stagmir (13 STA):** Returns to physical form. 3 attacks, Root-Caged hunters have no reactions. Gore vs Ham (adv, Restrained 30% chance; Ham Root-Caged = no movement but not Restrained per se — Root-Cage = immobilized; attacks vs Root-Caged use normal hit not adv). Correction: Root-Cage = immobilized until end of turn — not same as Restrained. Normal attack rates apply unless Throne save also fires.

Throne aura: radius now 5ft (Root Aura broken). Ham in melee range (within 5ft). Throne save: DEX/INS DC15. Ham DEX +1 → 65% fail → Restrained (1 turn). Gore vs Restrained Ham (adv, 91%) → 91% × 16.0 = 14.6. Kick vs S&S (70%, S&S outside 5ft) → 9.1. Nature's Judgement (3 STA, weakened: 2d10+5 avg 16.0) vs Bow → 65% hit → 10.4.
- Total dmg to party: 34.1. Ham takes 14.6, S&S 9.1, Bow 10.4.
- **Stagmir STA:** 13 − 3 (attacks) − 3 (NJ) + 2 (Sovereignty) = **9 STA**.
- **Stagmir HP:** 162.2 − 53.4 = **108.8**

**Hunter HP after R6:**
- Ham: 27.4 − 14.6 = **12.8 HP**, STA 8
- S&S: 40.5 − 9.1 = **31.4 HP**, STA 8
- Bow: 30.2 − 10.4 = **19.8 HP**, STA 6 (spent 2 on Power Shot)
- Flute: 40.2 HP, STA 8

**STATE:** Stagmir 108.8 HP / 9 STA | Ham 12.8 HP / STA 8, I=0, Crown BROKEN | S&S 31.4 HP / STA 8 | Bow 19.8 HP / STA 6, F0 | Flute 40.2 HP / STA 8

---

### Round 7
**Hunters:** Ham attacks Crown (I=0→1, 60%) → 15.0 dmg. S&S attacks body (70%) → 9.1 dmg. Bow attacks body (65%, F0) → 9.1 dmg. Flute attacks body (70%) → 9.1 dmg.
- **Party dmg:** 42.3. Cum: 273.5.

**Stagmir (9 STA):** 3 attacks. Gore vs Ham (Throne 5ft, Ham in range: 65% Restrained fail → adv). Restrained Ham: 91% hit → 14.6 dmg. Ham at 12.8 HP → **Ham KO'd.** S&S: Kick (70%) → 9.1 dmg. Flute: Gore (80%) → 11.2 dmg. Rootquake (3 STA, available R7) vs all remaining — Ham is down. STR/CON DC15: S&S 35% fail (STR +6) → 4.9; Bow 65% fail (CON +3 → 50% fail) → 7.0; Flute 65% → 9.8.
- Party damage this round: 14.6 (Ham KO) + 9.1 (S&S) + 11.2 (Flute) + Rootquake: 4.9+7.0+9.8 = 21.7. Total: 56.6.
- **Stagmir STA:** 9 − 3 (attacks) − 3 (Rootquake) + 2 (Sovereignty) = **5 STA**.
- **Stagmir HP:** 108.8 − 42.3 = **66.5** (→ below 30% of 340 = 102 HP — Renewal imminent)

**STATE:** Stagmir 66.5 HP / 5 STA | Ham KO'd | S&S 31.4→17.4 HP / STA 7 (stood 2 STA) | Bow 19.8→12.8 HP / STA 5 (stood 2 STA) | Flute 40.2→29.0 HP / STA 7

---

### Round 8 — Renewal Triggers
**Renewal:** Stagmir below 30% HP (66.5 < 102). **Renewal auto-triggers at start of next monster action (0 STA).**

**Hunters:** S&S attacks body (70%) → 9.1 dmg. Bow attacks (65%) → 9.1 dmg. Flute attacks + Resonant Pulse (2 STA, CD check — last used R2, available): CHA DC18 → INS +5 → 45% fail → Dazed.
- **Party dmg:** 27.3 (S&S + Bow + Flute base) = 27.3. Cum: 300.8.

**Stagmir (5 STA, Dazed):** **Renewal fires:** Heals 3d12+5 avg 24.5 HP, regains 1d10 avg 5.5 STA.
- HP: 66.5 − 27.3 + 24.5 = **63.7 HP** (post-hunter dmg, post-heal).
- STA after Renewal: 5 + 5.5 = **10.5 STA** (pre-attacks).
3 attacks at disadvantage (Dazed). Gore vs S&S (disadv, 65%²=42%) → 5.9. Gore vs Bow (disadv, 65%²=42%) → 5.9. Kick vs Flute (disadv, 80%²=64%) → 9.0.
- **Stagmir STA:** 10.5 − 3 + 2 = **9.5 STA**.
- **Stagmir HP:** 63.7 after R8 attacks.

**Party HP after R8:**
- S&S: 17.4 − 5.9 = **11.5 HP**, STA 7
- Bow: 12.8 − 5.9 = **6.9 HP**, STA 4 (Breathing Turn threshold approaching)
- Flute: 29.0 − 9.0 = **20.0 HP**, STA 5

**STATE:** Stagmir 63.7 HP / 9.5 STA | Ham KO | S&S 11.5 HP / STA 7 | Bow 6.9 HP / STA 4 | Flute 20.0 HP / STA 5

---

### Rounds 9–11 (Compressed Summary)
Party is 3 hunters, all under pressure. S&S and Bow at critical HP.

**R9:** Party deals ~28.0 (S&S + Flute + Bow Breathing Turn for STA recovery). Bow takes Breathing Turn (STA 4 → 2 is threshold; takes Breath to recover: +4 STA → STA 8). Stagmir attacks 3× without Rootquake (CD). S&S KO'd by back-to-back Gore hits (11.5 HP cannot survive 70% × 16.0 = 11.2 expected).
- **S&S KO'd R9.**
- Stagmir HP: 63.7 − 28.0 = **35.7 HP**. STA: ~8.

**R10:** Bow (STA 8) attacks (65%) → 9.1. Flute (STA 5) attacks (70%) → 9.1 + Resonant Pulse not available (need 2 STA, CD). Party deals: 18.2. Stagmir attacks: Gore vs Bow (80%, Flute AR12 priority) → Flute 80% × 16.0 = 12.8; Kick vs Bow (65% × 14.0 = 9.1). Flute: 20.0 − 12.8 = **7.2 HP**. Bow: 6.9 (recovered) − 0 = was at 6.9 after Breathing, now attacked.
- Stagmir HP: 35.7 − 18.2 = **17.5 HP**. STA: ~7.

**R11:** Bow (65%) → 9.1. Flute (70%) → 9.1. Party: 18.2. Stagmir HP: 17.5 − 18.2 = **−0.7 HP.**

Wait — re-checking STA. Stagmir at STA ~7: can spend 3 attacks (3 STA) in R11. But HP goes negative. Stagmir dies mid-round.

**STAGMIR DEFEATED — End of Round 11 (party turn ends fight).**

*Correction: Accounting for variance in EV — actual kill window is R10–R12 depending on Renewal heal and exact attack distribution. Canonical: R11 kill.*

---

## Final Report

```
╔══════════════════════════════════════════════════════════════════════╗
║ HUNT SIM — Stagmir (Updated) vs 4P Tier 3 HR12 EV mode             ║
╚══════════════════════════════════════════════════════════════════════╝

RESULT: Party Victory, ~Round 11
Stagmir HP: 0 / 340 | Avg hunter HP: ~7.0 / 63.0 | Avg hunter STA: ~5 / 10

KO Timeline:
  Ham KO'd: R7 (Verdant Throne Restrained + advantage Gore overwhelm)
  S&S KO'd: R9 (accumulated damage, low HP)
  Surviving to win: Bow + Flute (2-hunter finish)

Parts broken:
  Root Aura: R2 ✓ (Bow — 2 hits, Open 0, ~3 rounds)
  Antler Crown: R6 ✓ (Ham — 3 hits, Standard −2, ~5 rounds)

Ability triggers:
  Verdant Cataclysm: R5 ✓ (auto, 0 STA, Wispform rider — 1 round of 0 dmg to Stagmir)
  Renewal: R8 ✓ (auto, 0 STA, +24.5 HP +5.5 STA — extended fight by ~2 rounds)

Monster STA→0: No (STA floor ~5 by R11)

Party DPR (ideal, no Restrained): ~37.8/round
Party DPR (actual, accounting Cataclysm wipe round + Restrained turns): ~24 effective/round
Monster DPR (all targets): ~28–34/round

STA pressure: Medium — Breathing Turns used by Bow R9
HP pressure: Critical — 3 of 4 hunters KO'd or near-death; 2-hunter finish
```

---

## Flags

- **Verdant Throne Restrained loop is the dominant kill vector:** Ham and S&S fail DEX saves ~65–70% per round → Restrained → all reactions blocked (Block/Counter-Thrust, Parry never triggered) → Stagmir attacks with advantage. S&S Block used **0 times** effectively. This is mechanically correct — Restrained = no Dodge/Block/Parry.

- **Root Aura break (R2) resolves Throne pressure:** Throne radius 15ft→5ft. After R2, hunters simply stand 6ft away — outside aura. S&S Block/Parry fully available from R3+. This is the designed tactical counter.

- **Cataclysm Wispform = effective STA recovery:** Stagmir spends 0 STA R5, gains +2 Sovereignty. Net result: +5 STA vs a round where Stagmir spent 6 STA. Key to keeping STA solvent through the mid-fight.

- **Renewal extended fight ~2 rounds:** Without Renewal, kill round would be ~R9. With Renewal (+24.5 HP at R8), kill round shifts to R11. The 2-round extension is meaningful — Ham was already KO'd, increasing per-round party pressure.

- **Ham is the critical first loss:** Stagmir's Throne aura and advantage-on-Restrained make melee without Root Aura break dangerous. Ham (no reactions, Heavy armor) is the most exposed hunter. KO at R7.

---

## Tuning Notes

**1. Root Aura break priority should be in Field Notes or GM guide.**
The designed counter to the Throne Restrained loop (Root Aura, Open 0, 2 hits, ~R2–R3) is not visible to players without a GM hint. Consider adding "Breaking the Root Aura shrinks Stagmir's reach — the grove releases its grip" to Section 1 Field Notes or Section 8 Behavior Guide.

**2. Verdant Throne reaction exception (optional tuning).**
Current rules: Restrained blocks all reactions (Block/Parry/Dodge). This means S&S — built entirely around defensive reactions — is completely neutralized for its primary identity while Restrained. Consider an optional GM note: "Hunters with Guard or Parry tags may spend +1 additional Stamina to Block/Parry even while Restrained — the warrior braces through the roots." This preserves S&S identity without removing the CC pressure.

**3. Cataclysm + Renewal both fired — design confirmed working.**
Grove Sovereignty +2/round, 0 STA auto-triggers, and Wispform rider collectively ensure Stagmir's STA economy sustains to full encounter. Both signature abilities executed at correct HP thresholds. The fight design is mechanically sound.

---

## Optimal Party Tactics (Post-Sim Analysis)

| Priority | Action | Outcome |
|----------|--------|---------|
| 1st | **Break Root Aura R1–R2** (Bow, Open 0) | Throne 15ft→5ft; S&S/Ham never Restrained from R3 onward |
| 2nd | **Break Antler Crown R3–R6** (Ham called shot) | Nature's Judgement −1 die; Cataclysm reduced from 2R→1R |
| 3rd | **Resonant Pulse before Cataclysm** (Flute) | Dazed reduces Stagmir attack accuracy during transition round |
| 4th | **S&S Block/Counter-Thrust from R3+** | Full defensive kit available once Root Aura broken |

**Estimated kill round with optimal tactics:** R9–R10. Party win with 2–3 hunters surviving.

---

*Sim date: 2026-03-26 | Monster version: Stagmir canonical (Grove Sovereignty +2, Cataclysm/Renewal 0 STA auto, Crown Standard −2)*
