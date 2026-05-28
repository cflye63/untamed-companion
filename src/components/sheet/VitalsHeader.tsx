import { useState } from 'preact/hooks';
import type { Character } from '../../types/character';
import { getRace } from '../../data/races';
import { getBackground } from '../../data/backgrounds';
import { useDerived } from './hooks/useDerived';
import { CONDITIONS } from '../../data/conditions';
import { ConditionChip } from './ConditionChip';

type Props = {
  character: Character;
  onUpdateLive: (updater: (c: Character) => Character) => void;
};

export function VitalsHeader({ character, onUpdateLive }: Props) {
  const derived = useDerived(character);
  const race = getRace(character.raceId);
  const bgs = character.backgroundIds.map(id => getBackground(id).name).join(' / ');

  const setHp = (v: number) => onUpdateLive(c => ({
    ...c,
    liveState: { ...c.liveState, currentHp: Math.max(0, Math.min(derived.maxHp, v)) },
  }));
  const setSta = (v: number) => onUpdateLive(c => ({
    ...c,
    liveState: { ...c.liveState, currentStamina: Math.max(0, Math.min(derived.maxStamina, v)) },
  }));

  const shortRest = () => onUpdateLive(c => ({
    ...c,
    liveState: { ...c.liveState, currentStamina: derived.maxStamina, exhausted: false },
  }));
  const fullHeal = () => onUpdateLive(c => ({
    ...c,
    liveState: {
      ...c.liveState,
      currentHp: derived.maxHp, currentStamina: derived.maxStamina,
      conditions: [], exhausted: false,
    },
  }));

  return (
    <header class="vitals-header">
      <div class="vitals-top">
        <div>
          <div class="v-name">{character.name || 'Unnamed Hunter'}</div>
          <div class="v-sub">{race.name}{bgs ? ` / ${bgs}` : ''}</div>
        </div>
        <div class="v-hr">HR {character.hunterRank} · Tier {derived.tier}</div>
      </div>

      <div class="vitals-grid">
        <Tracker label="Health" current={character.liveState.currentHp} max={derived.maxHp}
                 onChange={setHp} fillClass="hp" />
        <Tracker label="Stamina" current={character.liveState.currentStamina} max={derived.maxStamina}
                 onChange={setSta} fillClass="sta" />
        <MiniStat label="AR" value={derived.ar} />
        <MiniStat label="Speed" value={30} />
      </div>

      <div class="vitals-row2">
        <ConditionStrip character={character} onUpdate={onUpdateLive} />
        <div class="qref">
          <span>Init <strong>{formatBonus(derived.initiative)}</strong></span>
          <button class="btn btn-secondary" onClick={shortRest}>Short Rest</button>
          <button class="btn btn-secondary" onClick={fullHeal}>Full Heal</button>
        </div>
      </div>
    </header>
  );
}

function formatBonus(n: number): string {
  return n >= 0 ? `+${n}` : `${n}`;
}

function Tracker(props: { label: string; current: number; max: number; onChange: (v: number) => void; fillClass: string }) {
  const pct = props.max === 0 ? 0 : (props.current / props.max) * 100;
  return (
    <div class="v-tracker">
      <div class="v-label">
        <span>{props.label}</span>
        <span>
          <button class="step" onClick={() => props.onChange(props.current - 1)}>-</button>
          {props.current} / {props.max}
          <button class="step" onClick={() => props.onChange(props.current + 1)}>+</button>
        </span>
      </div>
      <div class="v-bar"><div class={`v-bar-fill ${props.fillClass}`} style={{ width: `${pct}%` }} /></div>
    </div>
  );
}

function MiniStat(props: { label: string; value: number }) {
  return (
    <div class="v-stat-mini">
      <div class="v-stat-mini-label">{props.label}</div>
      <div class="v-stat-mini-value">{props.value}</div>
    </div>
  );
}

function ConditionStrip({ character, onUpdate }: { character: Character; onUpdate: Props['onUpdateLive'] }) {
  const [adding, setAdding] = useState(false);

  const remove = (id: string) => onUpdate(c => ({
    ...c,
    liveState: {
      ...c.liveState,
      conditions: c.liveState.conditions.filter(x => x.conditionId !== id),
    },
  }));
  const add = (id: string) => {
    onUpdate(c => ({
      ...c,
      liveState: {
        ...c.liveState,
        conditions: [...c.liveState.conditions, { conditionId: id }],
      },
    }));
    setAdding(false);
  };

  return (
    <div class="conds">
      {character.liveState.conditions.map(c => (
        <ConditionChip key={c.conditionId} conditionId={c.conditionId} onRemove={() => remove(c.conditionId)} />
      ))}
      {adding ? (
        <select class="input" onChange={(e: any) => add(e.target.value)} autoFocus>
          <option value="">— pick a condition —</option>
          {CONDITIONS.filter(c => !character.liveState.conditions.some(lc => lc.conditionId === c.id))
            .map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
      ) : (
        <button class="cond cond-add" onClick={() => setAdding(true)}>+ add</button>
      )}
    </div>
  );
}
