# /audit-monster

You are auditing a monster stat block for the Untamed TTRPG system.

**Default assumption:** Party of 4 hunters unless the user specifies otherwise.

Read the monster stat block provided by the user (either pasted inline or from a file path). Then execute the following audit in order.

---

## Step 1 — Identify Tier and Load Calibration

Read `content/rules/tier-calibration.md` to get the exact envelope for the creature's tier.

Record:
- AR range
- HP formula for party size (TierBase + CON × Multiplier)
- Stamina formula (10 + CON Score)
- Stat cap (max stat score for this tier)
- Attacks/Turn
- Damage per hit range
- Save DC range
- Break Zone count
- Signature stamina cost

---

## Step 2 — Stat Audit

Check every stat score against the tier stat cap.

**Modifier formula for this system:** `floor(stat_score / 2)`

Flag any stat that exceeds the tier cap. Note:
- Which abilities rely on that inflated stat
- What the corrected stat and modifier should be
- Whether any attack rolls, damage bonuses, or save DCs need to cascade-update

---

## Step 3 — HP Audit

Calculate the correct HP for the given party size using:
```
HP = TierBase + (CON × Multiplier)
```

Use the multiplier from the party size table in tier-calibration.md.

If the listed HP does not match, flag it with the corrected value and the formula shown inline.

---

## Step 4 — Stamina Audit

Verify: `Stamina = 10 + CON Score`

Flag if incorrect.

---

## Step 5 — Attack Roll Audit

For each attack, verify the roll is:
```
d20 + relevant stat mod + proficiency (Trained = +2)
```

If attack rolls are inconsistent with corrected stats, update them.
Document the breakdown explicitly: `d20 + STR mod (+X) + Trained prof (+2) = d20+N`

---

## Step 6 — Damage Audit

Check each attack's average damage against the tier damage band.

Flag anything that exceeds the ceiling — note whether it's conditional (gated behind a trigger, terrain, or positioning requirement). Conditional overages are acceptable at T1–T2 if the gate is meaningful. Flag but do not auto-reduce — present the option.

---

## Step 7 — Save DC Audit

Check all Save DCs against the tier range. Flag outliers.

---

## Step 8 — Break Zone Audit

Count break zones. Verify it matches the tier range.

Check that each break effect is meaningfully disruptive — at minimum it should disable or weaken one core ability.

---

## Step 9 — Crafting Audit

Check the crafting section for:

1. **Element Type declared** — if missing, suggest one based on creature identity
2. **Archetype translations complete** — Bow, Wand, Conduit, and Flute must each have specific translations (not vague descriptions). Use the Palax Earth example as the format standard:
   - Wand: affinity name + hex name (e.g., "Wind — Scatter")
   - Conduit: affinity name + Aspect name (e.g., "Updraft Field")
   - Bow: what the arrow does, how it handles self/movement-targeting effects
   - Flute: how the effect converts to aura/ballad expression
3. **Common effects:** repeatable, no new actions, no cooldowns, no stat bonuses, obeys material bias
4. **Rare effects:** may grant 1/combat action or unique reaction; no flat stat bonuses, no permanent damage boosts
5. **Signature Craft declared** — must require rare part, represent the creature's strongest identity, and note what it cannot stack with
6. **No cross-monster stacking language** present

Flag any gap. If the element is missing, propose one and write the full translations.

---

## Step 10 — Output

Present the audit as a clean table:

```
| Field | Current | Corrected | Reason |
```

List every change. If something is correct, do not list it — only flag issues.

Then ask the user:
- Whether to accept any flagged conditional damage (ceiling touches)
- Whether to confirm the proposed element type if it was missing

Once confirmed, write the corrected stat block to:
`content/monsters/[biome-folder]/[creature-name].md`

Use the monster template from `content/rules/monster-template.md` as the structural reference. Preserve all flavor text, lore, hooks, and behavior guide exactly — only the flagged mechanical values change.

---

## Notes

- The modifier formula in Untamed is `floor(score / 2)`, NOT the D&D standard `floor((score - 10) / 2)`
- Proficiency tiers: Novice (+0), Trained (+2), Master (+4). Assume Trained for monster attacks unless stated otherwise.
- Stamina costs for basic attacks are always 1 unless explicitly marked premium
- Reactions are limited to 1–2 for non-Apex creatures
- HP formula uses party-size multiplier from tier-calibration.md — always confirm party size before calculating
