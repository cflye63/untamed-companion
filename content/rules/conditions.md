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
| Prone | 2 STA | Standing up |
| Exhausted | STA → 0 | On application |

> **Stacking note:** A creature that is both Burned and Poisoned loses 1 STA at the start of its turn (Burned) and pays +1 STA per Action (Poisoned) — that's 2 extra STA per round of aggressive play. Condition layering is the primary way monsters pressure hunter Stamina economies, and the primary way hunters accelerate monster Exhaustion.
