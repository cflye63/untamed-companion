# UNTAMED — Tier Calibration Spine (v1.0)

Derived directly from:
- Tier 0 nuisances
- Tier 1 solos (Palax, Urmine, Kragal, Hollowmoth, Tanuza)
- Tier 2 solos + packs (Gorrhul, Earule, Noctlynx, Umbrosk, Melifur, Vorvarg Pack)
- Tier 3 multi-faceted and dimensional (Stagmir, Ladon, Dikera)
- Tier 4 heavy escalation (Cinderhorn, Aracnine)
- Tier 5 regional threat (Cinderhorn, Aracnine)

---

## What Tier Actually Means in Untamed

Untamed tiers are **tempo + control + stamina pressure**, not HP alone.

Each tier must define:
- Action economy
- Stamina pool
- Damage expectation
- AR range
- Break expectations
- Puzzle depth
- Environmental influence

---

## Tier Identity Definitions

---

### Tier 0 — Nuisance / Hazard

**Purpose:** Disrupt, tax, complicate.

| Stat | Value |
|------|-------|
| AR | 6–8 |
| HP | 12–25 |
| Stamina | 8–13 (caps at 13; max effective CON is 3) |
| Attacks/Turn | 1 |
| Damage | 1d4–1d8 |
| Stats | 2–6 |
| Save DCs | 8–10 |
| Break Zones | None or 1 soft break |

**Signature:** Light rider effect (poison, knockback)

**Behavior:** Flee below 25–50%

> **Design Rule:** Never lethal alone. Dangerous in terrain or numbers.

---

### Tier 1 — Single-Mechanic Duel

**Purpose:** Introduce the stamina puzzle.

| Stat | Value |
|------|-------|
| AR | 8–12 |
| HP | 65–100 |
| Stamina | 15–18 |
| Attacks/Turn | 2 |
| Damage per hit | 1d8–2d8 |
| Stats | 4–7 |
| Signature cost | 2–3 stamina |
| Break Zones | 1–2 |
| Save DCs | 10–14 |
| Action Pressure | Moderate |

**Identity:** One defining mechanic. If you remove it, the creature becomes manageable.

Examples:
- Burrow (Palax)
- Fury (Urmine)
- Glide (Tanuza)
- Cliff control (Kragal)
- Stealth (Hollowmoth)

---

### Tier 2 — Pressure + Layered Identity

**Purpose:** Coordination required.

> This is where calibration drift happened before. Lock this envelope.

| Stat | Value |
|------|-------|
| AR | 11–14 |
| HP | 120–170 (solo) |
| Stamina | 16–20 |
| Attacks/Turn | 3 |
| Damage per hit | 2d6–2d12 |
| Stats | 5–7 |
| Signature cost | 3 stamina |
| Cooldowns | 2–3 rounds |
| Save DCs | 13–16 |
| Break Zones | 2–4 |
| Stamina tax | 2–4 per round through pressure |

**Identity Rules:** Tier 2 must include at least **TWO** of:
- Formation disruption
- Terrain alteration
- Status layering
- Forced repositioning
- Summons or pack synergy
- Stamina drain
- Mode shift

> **If a Tier 2 only has one gimmick, it is undertuned.**

Examples:
- Gorrhul → Mud state + Charge mode
- Earule → Flight tax + Screech + Dive
- Noctlynx → Stealth + Teleport + Reaction
- Umbrosk → Echo detection + ceiling play
- Melifur → Flight + Swarm + Resin
- Vorvarg → Pack synergy

---

### Tier 3 — Environmental Authority

**Purpose:** Battlefield ownership. Tier 3 is not "bigger Tier 2."

| Stat | Value |
|------|-------|
| AR | 15–17 |
| HP | 210–300 |
| Stamina | 17–22 |
| Attacks/Turn | 4 |
| Damage per hit | 2d8–3d10 |
| Stats | 6–11 |
| Signature cost | 3–6 stamina |
| Save DCs | 15–19 |
| Break Zones | 3–5 |
| Permanent terrain shifts | Yes |
| Multi-round control effects | Yes |
| Multi movement types | Yes |

> **Stamina note:** Pool is similar to T2 — the distinction is *how it's spent*, not how much. T3 creatures invest stamina in terrain rewrites and control, not raw action spam.

**Identity:** Tier 3 changes the fight space. They are dynamic and multifaceted.

Examples:
- Stagmir → biome aura + terrain rewrite
- Ladon → drag + drown control
- Dikera → herd scaling + sonic control

> Tier 3 fights feel like: *"You are in its ecosystem."*

---

### Tier 4 — Escalation Monster

**Purpose:** Part synergy scaling. Parts intact = oppressive. Parts broken = survivable.

| Stat | Value |
|------|-------|
| AR | 17–21 |
| HP | 330–380 |
| Stamina | 21–24 |
| Attacks/Turn | 4 |
| Damage per hit | 3d8–3d12 |
| Stats | 7–12 |
| Signature cost | 4 stamina, cooldown 3 |
| Save DCs | 17–19 |
| Break Zones | 4–6 (mandatory) |
| Escalation passive | Required |

**Part Break States:**
- All parts intact → oppressive
- 2 parts broken → balanced
- 3+ parts broken → manageable

> **Tier 4 is where part breaks become survival-critical.**

---

### Tier 5 — Region-Level Entity

**Purpose:** Biome-shaping, not just a bigger boss.

Tier 5 must:
- Permanently alter the map
- Affect multiple sectors
- Warp ecology tables
- Force non-combat solutions

| Stat | Value |
|------|-------|
| AR | 17+ |
| HP | 450+ |
| Stamina | 25+ |
| Attacks/Turn | 5 |
| Damage per hit | 4d8–4d12 |
| Stats | 8–16 |
| Save DCs | 19–22 |
| Break Zones | 5–8 |
| Signature | Once-per-hunt battlefield rewrite |

---

## Health Scaling Formula

Monster HP scales to group size and tier:

```
HP = TierBase + (CON × Multiplier)
```

**Party Size Multipliers:**

| Party Size | Multiplier |
|------------|------------|
| 1 Player | ×8 |
| 2 Players | ×9 |
| 3 Players | ×10 |
| 4 Players | ×11 |
| 5 Players | ×12 |

**Tier Base Values:**

| Tier | TierBase |
|------|----------|
| 0 | 0 |
| 1 | 15 |
| 2 | 60 |
| 3 | 120 |
| 4 | 225 |
| 5 | 335 |

**Example — Palax (CON 6, Tier 1):**

| Party | Formula | HP |
|-------|---------|-----|
| 1P | (6×8)+15 | 63 |
| 2P | (6×9)+15 | 69 |
| 3P | (6×10)+15 | 75 |
| 4P | (6×11)+15 | 81 |
| 5P | (6×12)+15 | 87 |

> HP is your cleanest tuning dial. Stamina and AR handle difficulty nuance.

---

## Stamina Formula

```
Stamina = 10 + CON Score
```

Tier 0 stamina caps at 13 (effective max CON of 3).
