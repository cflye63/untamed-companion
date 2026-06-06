import type { Character } from '../../../types/character';
import { WEAPONS, getWeapon } from '../../../data/weapons';
import { useDerived } from '../hooks/useDerived';
import { DiceRoller } from '../DiceRoller';
import { rollDamage } from '../../../lib/dice';
import { weaponProficiency, profBonus } from '../../../lib/derived';
import { useState } from 'preact/hooks';

type Props = {
  character: Character;
  update: (updater: (c: Character) => Character) => void;
};

export function CombatTab({ character, update }: Props) {
  const derived = useDerived(character);
  const [lastDamage, setLastDamage] = useState<string | null>(null);

  const addWeapon = (weaponId: string) => update(c => ({
    ...c,
    weapons: [...c.weapons, { weaponId, huntsCompleted: 0, isPrimary: c.weapons.length === 0 }],
    primaryWeaponId: c.weapons.length === 0 ? weaponId : c.primaryWeaponId,
  }));
  const removeWeapon = (weaponId: string) => update(c => ({
    ...c, weapons: c.weapons.filter(w => w.weaponId !== weaponId),
  }));
  const bumpHunts = (weaponId: string, delta: number) => update(c => ({
    ...c,
    weapons: c.weapons.map(w => w.weaponId === weaponId
      ? { ...w, huntsCompleted: Math.max(0, w.huntsCompleted + delta) }
      : w),
  }));
  const makePrimary = (weaponId: string) => update(c => ({
    ...c,
    weapons: c.weapons.map(w => ({ ...w, isPrimary: w.weaponId === weaponId })),
    primaryWeaponId: weaponId,
  }));

  const rollWeaponDamage = (notation: string) => {
    const r = rollDamage(notation, 0);
    setLastDamage(`${notation}: ${r.total} [${r.rolls.join(', ')}]`);
  };

  return (
    <div class="combat-tab">
      <section class="tab-section">
        <h4>Weapons</h4>
        {character.weapons.map(w => {
          const wep = getWeapon(w.weaponId);
          const prof = weaponProficiency(w.huntsCompleted, character.raceId);
          const bonus = profBonus(prof);
          const toHit = derived.statMods[wep.primaryStat] + bonus;
          return (
            <div class="weapon-card" key={w.weaponId}>
              <div class="weapon-head">
                <strong>{wep.name}</strong>
                <span class="muted">Tier {wep.tier} · {prof} (+{bonus})</span>
                {w.isPrimary
                  ? <span class="badge">Primary</span>
                  : <button class="btn btn-secondary" onClick={() => makePrimary(w.weaponId)}>Set Primary</button>}
              </div>
              <div class="weapon-body">
                <div>Hunts:
                  <button class="step" onClick={() => bumpHunts(w.weaponId, -1)}>-</button>
                  <strong>{w.huntsCompleted}</strong>
                  <button class="step" onClick={() => bumpHunts(w.weaponId, 1)}>+</button>
                </div>
                <div class="weapon-rolls">
                  <DiceRoller label="Attack" modifier={toHit} />
                  <button class="btn" onClick={() => rollWeaponDamage(wep.damageDice)}>Roll Damage ({wep.damageDice})</button>
                </div>
                {wep.techniques.length > 0 && (
                  <details class="techniques">
                    <summary>{wep.techniques.length} techniques</summary>
                    <ul>
                      {wep.techniques.map(t => (
                        <li key={t.name}><strong>{t.name}</strong> ({t.staminaCost} STA) — {t.description}</li>
                      ))}
                    </ul>
                  </details>
                )}
                <button class="btn btn-danger" onClick={() => removeWeapon(w.weaponId)}>Remove</button>
              </div>
            </div>
          );
        })}
        <select class="input" value="" onChange={(e: any) => e.target.value && addWeapon(e.target.value)}>
          <option value="">+ Add weapon</option>
          {WEAPONS.filter(w => !character.weapons.some(cw => cw.weaponId === w.id))
            .map(w => <option key={w.id} value={w.id}>{w.name} (T{w.tier})</option>)}
        </select>
        {lastDamage && <p class="last-damage">{lastDamage}</p>}
      </section>

      <section class="tab-section">
        <h4>Armor &amp; AR</h4>
        <div>AR: <strong>{derived.ar}</strong></div>
        {character.armor && (
          <div class="muted">Wearing: {character.armor.armorId} (T{character.armor.tier} {character.armor.type})</div>
        )}
        <p class="muted">Set armor on the Inventory tab.</p>
      </section>

      <section class="tab-section">
        <h4>Defense Reactions</h4>
        <div class="defense-row">
          <DefenseCard name="Dodge" desc="d20 + DEX, success negates damage." modifier={derived.statMods.DEX} />
          <DefenseCard name="Block" desc="d20 + STR/CON, success halves damage (then reduced by AR)." modifier={derived.statMods.STR} />
          <DefenseCard name="Parry" desc="d20 + DEX/STR, success deflects and may riposte." modifier={derived.statMods.DEX} />
        </div>
      </section>

      <ActionEconomySection character={character} update={update} maxStamina={derived.maxStamina} />
    </div>
  );
}

function DefenseCard(props: { name: string; desc: string; modifier: number }) {
  return (
    <div class="defense-card">
      <strong>{props.name}</strong>
      <p class="muted">{props.desc}</p>
      <DiceRoller label={props.name} modifier={props.modifier} />
    </div>
  );
}

function ActionEconomySection({ character, update, maxStamina }: { character: Character; update: Props['update']; maxStamina: number }) {
  const ae = character.liveState.actionEconomy;
  const toggle = (key: keyof typeof ae) => update(c => ({
    ...c,
    liveState: { ...c.liveState, actionEconomy: { ...c.liveState.actionEconomy, [key]: !c.liveState.actionEconomy[key] } },
  }));
  const endTurn = () => update(c => {
    const ls = c.liveState;
    let sta = ls.currentStamina;
    let exhausted = ls.exhausted;
    if (ls.actionEconomy.breathingTurn) {
      sta = Math.min(maxStamina, sta + 4);
    }
    if (exhausted && !ls.actionEconomy.actionUsed && !ls.actionEconomy.fastActionUsed) {
      sta = Math.min(maxStamina, sta + 4);
      exhausted = false;
    } else if (sta === 0) {
      exhausted = true;
    }
    return {
      ...c,
      liveState: {
        ...ls,
        currentStamina: sta,
        exhausted,
        actionEconomy: { actionUsed: false, fastActionUsed: false, reactionUsed: false, breathingTurn: false },
      },
    };
  });
  return (
    <section class="tab-section">
      <h4>Action Economy (this turn)</h4>
      <div class="ae-row">
        <Pill on={ae.actionUsed} onToggle={() => toggle('actionUsed')}>Action</Pill>
        <Pill on={ae.fastActionUsed} onToggle={() => toggle('fastActionUsed')}>Fast Action</Pill>
        <Pill on={ae.reactionUsed} onToggle={() => toggle('reactionUsed')}>Reaction</Pill>
        <Pill on={ae.breathingTurn} onToggle={() => toggle('breathingTurn')}>Breathing Turn</Pill>
      </div>
      <button class="btn" onClick={endTurn}>End Turn</button>
      {character.liveState.exhausted && <p class="warning">⚠ Exhausted</p>}
    </section>
  );
}

function Pill(props: { on: boolean; onToggle: () => void; children: any }) {
  return <button class={`pill ${props.on ? 'on' : ''}`} onClick={props.onToggle}>{props.children}</button>;
}
