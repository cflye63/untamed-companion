# Combat & Actions

This page covers the core combat mechanics.

---

## Action Resolution

**How Actions Resolve at the Table**

This section defines the exact order in which Actions are declared, interrupted, resolved, and completed.

When multiple effects interact, follow this structure.

**Combat clarity prevents arguments. Timing matters.**

---

## 1️⃣ Declare the Action

The acting creature must clearly state:

- The Action being used (Basic Attack, Technique, Grapple, etc.)
- The target(s)
- The weapon or ability used
- Any special declaration (Called Shot, nonlethal intent, shove instead of damage, etc.)

**All declarations must be made before dice are rolled.**

**If the Action has a cost, it is paid when declared.**

---

## 2️⃣ Validate Targeting

Before rolling, confirm the Action is legally valid.

Check the following:

### Distance

#### Melee Attacks

- Target must be within weapon reach.
- Standard reach: **5 ft**.
- Weapons with the **Reach** tag extend this distance.
- If outside reach, the attack fails.

#### Ranged Attacks

- Target must be within the weapon's listed range.
- Most ranged weapons have two bands:
  - **Normal Range**
  - **Long Range**
- Attacks made beyond Normal but within Long Range are made at **disadvantage**.
- Attacks beyond Long Range automatically fail.

### Line of Sight

- You must be able to see the target unless the ability states otherwise.

### Cover

- **Half Cover**: +2 AR
- **Full Cover**: Cannot be targeted
- Weapon tags may modify this (example: Flexible weapons ignoring half cover).

**If targeting is invalid, the Action cannot proceed.**

---

## 3️⃣ Reaction Window Opens

Once a creature is targeted, but before the roll is resolved:

**The target may declare a Reaction.**

### Rules:

- Only **1 Reaction per round**.
- Reaction must meet its trigger.
- Reaction must be declared **before hit/miss is determined**.

### Reactions may modify:

- AR
- Attack roll
- Position
- Damage
- Or negate the attack entirely (if successful)

If multiple creatures are targeted (area effect), each eligible creature may declare a Reaction.

**Once all Reactions are declared, proceed to resolution.**

---

## 4️⃣ Roll Resolution

Now resolve the Action.

There are two primary resolution types:

### A) Attack vs Armor Rating (AR)

**Roll:**
```
d20 + relevant stat modifier + proficiency (if applicable)
```

- If total ≥ target's AR → **Hit**
- If total < AR → **Miss**

**A natural 1 always fails.**
**A natural 20 always hits.**

### B) Saving Throws

If the Action forces a save:

**The defender rolls:**
```
d20 + relevant stat modifier + proficiency (if applicable)
```

Against the attacker's Save DC.

- If the defender meets or exceeds the DC → **Success**
- If lower → **Failure**

The ability description determines what happens on success or failure.

---

## 5️⃣ Apply Results

Once hit/miss or save is determined:

**Apply effects in this order:**

1. Base Damage
2. Damage Modifiers
3. Riders (Bleed, Push, Prone, Mark, etc.)
4. Forced Movement
5. Secondary Effects

**Effects resolve fully before moving to the next creature.**

---

## 6️⃣ Forced Movement Rules

If an Action causes forced movement:

- The movement occurs **immediately after damage**.
- Forced movement **does not cost stamina**.
- Forced movement **does not trigger Sprint costs**.
- Forced movement may cause:
  - Collision damage
  - Falling damage
  - Environmental hazard triggers

**If movement pushes a creature into invalid terrain, resolve the environmental consequence immediately.**

---

## 7️⃣ Called Shots (Timing Note)

If a Called Shot was declared:

- Use the targeted part's AR.
- On hit, apply normal damage.
- Record progress toward part break.
- If threshold is reached, apply break effect immediately.

**Part Break effects resolve before continuing combat flow.**

---

## 8️⃣ Simultaneous Effects

If multiple effects trigger at the same time:

- Active creature's effects resolve first.
- Then reactive creature's effects resolve.
- GM breaks ties if needed.

---

## 9️⃣ Weapon Tags & Rule Overrides

**Weapon Tags are mechanical keywords.**

If a weapon tag contradicts a general rule:

> **The weapon tag overrides the general rule.**

### Examples:

- **Reach** modifies melee distance.
- **Thrown** defines range bands.
- **Guard** enables Block reaction.
- **Parry** enables Parry reaction.
- **Flexible** may ignore half cover.

**Tags never override core action limits unless explicitly stated.**

---

## 🔟 Action Completion

Once all effects resolve:

- The Action is complete.
- Any triggered passives resolve.
- The turn continues.
- Play moves to the next creature in initiative order.

---

## Reactions

**Defensive Timing & Equipment-Based Responses**

Reactions represent split-second defensive maneuvers executed in response to immediate danger.

- They are **not actions**.
- They are **not free interrupts**.
- They are **controlled, equipment-dependent responses**.

### 1️⃣ Reaction Basics

You may take:

- **1 Reaction per round**
- Only when a valid trigger occurs
- After being targeted
- Before hit/miss is finalized

**If you are:**
- Stunned
- Paralyzed
- Restrained (unless feature allows)
- Exhausted

**You cannot use Reactions.**

### 2️⃣ Reaction Timing Window

The correct sequence:

1. Attacker declares Action and target.
2. Target is now considered "targeted."
3. **Reaction window opens.**
4. Defender declares Reaction (if any).
5. Reaction modifies attack conditions.
6. Attack roll resolves.
7. Results are applied.

**If no Reaction is declared before the roll resolves, the opportunity is lost.**

**You cannot react after seeing the result.**

### 3️⃣ Equipment-Gated Reactions

Reactions are unlocked by weapon and armor properties.

**If you do not meet the requirement, you cannot perform that Reaction.**

#### 🛡 BLOCK (Guard Reaction)

**Requirement:**
Must wield a weapon or shield with the **Guard** tag.

**Trigger:**
You are targeted by a melee or ranged attack.

**Effect:**
- Gain **+3 AR** against the triggering attack.
- If the attack still hits:
  - Reduce damage by your **CON modifier** (minimum 1).

Block represents bracing and absorbing impact.

Block does not reposition you.

**Block cannot be used against:**
- Effects that do not target AR.
- Saving throw abilities (unless specified).

#### ⚔ PARRY (Weapon Reaction)

**Requirement:**
Must wield a weapon with the **Parry** tag.

**Trigger:**
You are targeted by a melee attack.

**Effect:**
- Gain **+1 AR** against the attack.
- Make a **Parry check**:
  - **Roll:** d20 + STR or DEX modifier + weapon proficiency
  - If your result ≥ attacker's final attack roll:
    - The attack is **negated**.
    - You may immediately **Riposte** for half weapon damage.
    - Riposte costs **0 Stamina**.
  - If you fail:
    - Attack resolves normally (with the +1 AR applied).

**Parry cannot be used against:**
- Ranged attacks
- Area effects
- Creatures two size categories larger (optional rule if desired)

**Parry is high risk, high reward.**

#### 🏃 DODGE (Mobility Reaction)

**Requirement:**
Must wear **Light or Medium armor**.

Heavy armor prevents Dodge unless a feature overrides it.

**Trigger:**
You are targeted by an attack.

**Effect:**
- The triggering attack is made at **disadvantage**.
- If the attack misses:
  - You may reposition up to **5 ft**.
  - This movement does not provoke.

Dodge represents evasion, not mitigation.

**Dodge cannot be used if:**
- You are Prone.
- Your speed is 0.
- You are Grappled (unless you break free first).

### 4️⃣ Reaction Limits & Clarifications

- You may only use **1 Reaction per round**.
- Reactions cannot trigger other Reactions unless explicitly allowed.
- Reactions cannot be stacked.
- Reactions must match the trigger exactly.
- Reactions do not cost your Move.
- Forced movement does not trigger additional Reactions unless specified.

### 5️⃣ Monster Reactions

Monsters may also have Reactions.

**Monster Reactions:**
- Follow the same timing rules.
- Are limited to **1 per round** unless Apex-tier states otherwise.
- Must have clear triggers.

**Example monster triggers:**
- "When hit by a ranged attack…"
- "When a hunter moves within 5 ft…"
- "When a part breaks…"

**Monsters obey the same physics.**

### 6️⃣ Reaction Priority (Multiple Triggers)

If multiple creatures can react to the same trigger:

**Resolve in this order:**
1. Defender's Reaction
2. Attacker's Reaction (if applicable)
3. Other triggered abilities

GM adjudicates conflicts.

### 7️⃣ Interaction with Preparation

If you prepared **Guarded Stance**:
- Your next Block or Dodge may cost **0 Stamina**.

- Preparation does not grant additional Reactions.
- Preparation modifies the next valid Reaction only.
- Preparation effects resolve before attack resolution.

### 8️⃣ Special Cases

#### Area Effects

Reactions may apply if the effect explicitly targets you.

Dodge may apply if:
- The effect requires an attack roll.

Dodge does not apply to:
- Pure saving throw effects unless ability says so.

#### Called Shots

Reactions apply before determining if the part was hit.

If Parry negates the attack:
- The part is not struck.
- No break progress occurs.

#### Forced Movement

Reactions may reposition you.

If reposition removes you from valid range:
- The attack still resolves if originally valid.

Reaction movement occurs after resolution unless stated otherwise.

### 9️⃣ Design Philosophy of Reactions

**Block = Stability**
**Parry = Skill**
**Dodge = Mobility**

Each reflects a combat archetype.

**Your gear determines your defense.**

This reinforces:
- Weapons define playstyle.

---

## Preparation Actions

**Focus Before Force**

### What Is a Preparation?

A Preparation is a deliberate tactical setup.

You replace your Action with a Preparation to gain a defined benefit on your next turn or Reaction.

Preparation represents focus, footing, breath control, or battlefield setup.

- It is **not passive**.
- It is **intentional tempo control**.

### Core Rules

**Replace your Action with one Preparation.**

- **Costs 0 Stamina**
- You may move up to your base speed (no Sprint)
- You may take one supporting Fast Action
- Taking damage forces **CON Save DC 10** or Preparation ends
- If you successfully maintain it, regain **+2 Stamina** at end of turn
- Effects expire at the start of your next turn unless triggered

**You may only have one Preparation active at a time.**

---

### Available Preparations

#### 🎯 Steady Aim

Your next ranged attack:

- Gains **+2 to hit**
- Ignores Called Shot penalty
- Ignores **1 AR**

Expires at start of your next turn.

**Best used for precision part breaks.**

---

#### 🛡 Guarded Stance

Until your next turn:

- Gain **+1 AR**
- Advantage on DEX saves vs forced movement
- Your next Block or Dodge costs **0 Stamina**

**Ideal when bracing against pressure.**

---

#### 🌬 Centered Breath

Immediately regain **1d4 Stamina**.

Does not persist to next turn.

**Best used during exhaustion risk.**

---

#### 👁 Study Target

Mark a creature within 60 ft.

Your next Called Shot against it has **advantage**.

**Optional:**
Make DC 10 INT or INS check to learn one behavior cue.

Expires at start of your next turn.

---

#### 🧰 Prime Trap

Your next trap or gadget placed within 10 ft:

- Is set as a **Fast Action**
- Save DC increases by **+1**

Must be used on your next turn.

---

#### 🔥 Maintain Channel

Preserve your weapon's stacking mechanic.

- Prevents decay this round
- Gain **+1 stack** at end of turn (to cap)

Applies to: Momentum, Focus, Tension, Resolve, Clusters, etc.

---

## Equipment Gating

**Your Gear Defines Your Options**

In Untamed, equipment does not just modify numbers.

It determines what actions you are physically capable of performing.

**You cannot perform combat options your equipment does not enable.**

### 1️⃣ Reaction Access Is Gated

You may only use a Reaction if you meet its equipment requirement.

#### Block

**Requires:**
- A weapon or shield with the **Guard** tag.

If you do not have Guard, you cannot Block.

#### Parry

**Requires:**
- A weapon with the **Parry** tag.
- The attack must be melee or explicitly parryable.

Ranged, area, and colossal slam attacks may not be parried unless stated.

#### Dodge

**Requires:**
- Light or Medium Armor.
- Speed greater than 0.

Heavy Armor disables Dodge unless an ability overrides it.

If you are Restrained, you cannot Dodge.

### 2️⃣ Movement Is Gated

Certain equipment modifies your mobility.

#### Heavy Armor

- **–5 ft movement**
- Cannot Dodge
- Disadvantage on Stealth

#### Rooting Tag

If an ability has **Rooting**, you cannot move while resolving it.

If moved involuntarily, the effect may cancel.

### 3️⃣ Weapon Tags Define Permissions

Weapon tags are mechanical keys.

If a tag grants a capability, it is usable.

**If you do not have the tag, you do not have the capability.**

**Examples:**

- **Guard** → enables Block
- **Parry** → enables Parry
- **Reach** → extends melee distance
- **Thrown** → allows ranged use
- **Reload** → requires Load action
- **Commitment** → cannot cancel once declared
- **Wind-up** → resolves next turn
- **Heavy** → cannot be off-hand
- **Two-Handed** → requires both hands

**If a tag conflicts with a general rule, the tag overrides.**

### 4️⃣ Stance & Channel Gating

Some weapons define internal modes.

You must be in the correct state to use certain techniques.

**Examples:**

**Spear & Shield:**
- Sentinel Stance unlocks defensive counters.
- Assault Stance unlocks offensive jab.

**Arbalest:**
- Must be Braced to gain Tension bonuses.

**Greatshield:**
- Must maintain position to preserve Resolve.

**If you lose the required state, the ability fails or loses benefits.**

### 5️⃣ Conditions Override Equipment

Conditions supersede equipment permissions.

If a condition says you cannot Move, Act, or React:

**Equipment does not override this unless explicitly stated.**

**Examples:**

- **Restrained** → cannot Dodge
- **Dazed** → cannot React
- **Stunned** → cannot Move/Act/React

### 6️⃣ Multi-Weapon & Hand Requirements

If wielding:

#### Two-Handed Weapon:
- Cannot simultaneously benefit from a shield unless specified.

#### Reload weapons:
- Must have a free hand or the required mechanism to Load.

**If you lose a hand (Grappled weapon arm, disarmed, etc.), you lose access to that weapon's gated options.**
