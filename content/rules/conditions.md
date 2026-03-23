# Conditions

**Status Effects in Combat**

Conditions represent ongoing effects that alter how creatures function in combat. They persist until their specified end condition is met.

> **Design note:** Conditions create pressure on two axes — **HP** (damage over time) and **Stamina** (resource drain). Conditions that deal ongoing damage also carry a Stamina cost representing the effort of fighting through pain, toxins, or environmental hazards. This creates meaningful choices: clear the condition (spend an action) or endure it (lose tempo). Action-denial conditions (Stunned, Staggered, Paralyzed) do not need Stamina riders — losing your turn IS the pressure.

---

## Elemental & Physical Conditions

| Condition | Effect |
|-----------|--------|
| **Poisoned** | Disadvantage on attack rolls and CON saves; take 1 damage at the start of your turn until treated. **Your Actions cost +1 Stamina** (your body is fighting the toxin). |
| **Bleeding** | Take 1d4 HP at the end of your turn per stack until treated. Gain a stack if you Dash or move >15 ft this turn. **Moving >15 ft or Dashing costs +1 Stamina** (exertion worsens the wound). First Aid (INT DC 12) or any healing ends Bleeding. |
| **Burned** | Take 1d4 fire damage at end of your turn; disadvantage on Concentration checks. **Lose 1 Stamina at the start of your turn** (fighting through searing pain). Water removes Burned (then you become Soaked). |
| **Chilled** | +1 Stamina cost to all abilities; –10 ft movement. |
| **Soaked** | Lightning damage ×2 against you. **Moving costs +1 Stamina** (waterlogged gear drags on every step). At end of your turn, CON save DC 12 or gain Chilled. Fire/Heat removes Soaked. |

---

## Control Conditions

| Condition | Effect |
|-----------|--------|
| **Staggered** | Cannot Move or take an Action until your next turn; can still use Fast actions and Reactions. |
| **Stunned** | Lose your next turn (no Move/Action/Fast/Reaction). Attacks against you have advantage; you automatically fail STR/DEX saves until end of your next turn. |
| **Paralyzed** | Cannot Move, Action, Fast, or Reaction until your next turn. Attacks against you have advantage. |
| **Dazed** | Disadvantage on attack rolls and Instinct checks; cannot take Reactions. Ends at the end of your next turn. |
| **Feared** | You cannot willingly move closer to the source of fear. **Your Reactions cost +1 Stamina** (panic undermines discipline). At the start of your turn, make a CHA save vs the fear DC — success ends the condition. On failure, you must spend your Move action moving away from the source (or remain stationary if no safe path exists). You can still take Actions and Fast Actions normally. |
| **Sleep** | Lose your turn; regain 4 Stamina. Wake up if you succeed an Instinct roll at the end of your turn or if you take damage. All attacks against a Sleeping target are made with advantage. |

---

## Positional Conditions

| Condition | Effect |
|-----------|--------|
| **Prone** | Melee attacks against you have advantage; ranged attacks against you have disadvantage; your own ranged attacks are at disadvantage. Stand up costs 2 Stamina. |
| **Taunted** | Your next attack must target the taunter; ends after that attack or if you cannot target them. |
| **Grappled** | Speed 0; disadvantage on checks to resist forced movement. Break free by passing a STR or DEX check versus the grappler at the start of your turn. |
| **Restrained** | Speed 0; disadvantage on DEX saves; cannot Dodge; attacks against you have advantage. |

---

## Resource Conditions

| Condition | Effect |
|-----------|--------|
| **Exhausted** | Stamina set to 0; cannot take Actions or Fast actions; attacks against you have advantage; auto-fail STR/DEX saves; movement halved. On your next turn, you may recover +4 Stamina at end of turn if you take no Action. |

---

## Stamina Pressure Summary

Quick reference for conditions that directly tax Stamina:

| Condition | STA Cost | Trigger |
|-----------|----------|---------|
| Burned | −1 STA | Start of your turn |
| Poisoned | +1 STA | Per Action taken |
| Bleeding | +1 STA | Moving >15 ft or Dashing |
| Soaked | +1 STA | Per Move action |
| Chilled | +1 STA | Per ability used |
| Feared | +1 STA | Per Reaction taken |
| Prone | 2 STA | Standing up |
| Exhausted | STA → 0 | On application |

> **Stacking note:** A creature that is both Burned and Poisoned loses 1 STA at the start of its turn (Burned) and pays +1 STA per Action (Poisoned) — that's 2 extra STA per round of aggressive play. Condition layering is the primary way monsters pressure hunter Stamina economies, and the primary way hunters accelerate monster Exhaustion.

---

## Escalating Resistance

**Even the wild adapts.**

Each time a creature is subjected to the same crowd control condition, its body or instincts learn to resist it. Repeated application of the same condition becomes progressively harder to land.

### How It Works

Track resistance **per condition type, globally** — all sources of the same condition share one resistance counter regardless of which hunter caused it. Counters reset at the start of each new encounter.

| Application | Save Modifier |
|-------------|---------------|
| 1st | Normal save |
| 2nd | +2 to save |
| 3rd | +4 to save |
| 4th | +6 to save |
| 5th+ | +8 to save |

**Example:** Three Prone saves in one fight — first at normal DC, second at DC+2, third at DC+4. It doesn't matter that a different hunter caused each one.

### Applies To

Monsters resisting hunter-applied conditions triggered by a saving throw: Prone, Staggered, Restrained, Stunned, Poisoned, Bleeding, Dazed, Slowed, Feared, etc.

This rule is **one-directional** — it applies to monsters resisting hunter CC only. Monster-applied conditions against hunters do not escalate. A hunter getting Poisoned three times by Melifur's Drake Sting faces the full save DC each time.

### Does Not Apply To

- Monster abilities applied to hunters (hunters do not build in-fight CC resistance)
- Conditions applied automatically with no save (e.g., Grappled from a special ability with no contested roll)
- Hit-count threshold effects (e.g., Hammer Impact accumulation → Stun triggers on 3rd hit, not a save)
- Damage-only effects with no condition rider

### Design Intent

This prevents stun-lock loops and CC spam from trivializing monster action economy. It rewards tactical variety — parties that rotate between different condition types maintain full efficiency, while parties that spam a single CC type see diminishing returns. Monsters remember pain.
