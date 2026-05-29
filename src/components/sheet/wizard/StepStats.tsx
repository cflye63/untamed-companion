import type { Character, StatKey } from '../../../types/character';
import { STATS } from '../../../types/character';
import { statMod, maxHp, maxStamina, computeFinalStats } from '../../../lib/derived';

type Props = {
  draft: Character;
  setDraft: (c: Character) => void;
};

const TOTAL = 18;

export function StepStats({ draft, setDraft }: Props) {
  const sum = STATS.reduce((s, k) => s + draft.baseStats[k], 0);
  const set = (stat: StatKey, value: number) => {
    const v = Math.max(1, value);
    setDraft({ ...draft, baseStats: { ...draft.baseStats, [stat]: v } });
  };

  const finalStats = draft.raceId
    ? computeFinalStats(draft)
    : { ...draft.baseStats };

  return (
    <div class="wizard-step-grid">
      <div>
        <h3>Step 4 — Distribute Stats</h3>
        <p class="muted">Allocate 18 points across 6 stats. Each stat starts at 1 minimum.</p>
        <p class={sum === TOTAL ? 'muted' : 'warning'}>
          Used: <strong>{sum}</strong> / {TOTAL}
        </p>
        <div class="wizard-stat-grid">
          {STATS.map(s => (
            <div class="wizard-stat" key={s}>
              <div class="stat-card-label">{s}</div>
              <div class="stat-card-edit">
                <button class="step" onClick={() => set(s, draft.baseStats[s] - 1)}>-</button>
                <span class="stat-score">{draft.baseStats[s]}</span>
                <button class="step" onClick={() => set(s, draft.baseStats[s] + 1)} disabled={sum >= TOTAL}>+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <aside class="wizard-side">
        <h4>Preview</h4>
        <ul>
          {STATS.map(s => (
            <li key={s}>{s}: <strong>{finalStats[s]}</strong> ({statMod(finalStats[s]) >= 0 ? '+' : ''}{statMod(finalStats[s])})</li>
          ))}
        </ul>
        <p>HP: <strong>{maxHp(finalStats.CON, 0)}</strong></p>
        <p>Stamina: <strong>{maxStamina(finalStats.CON)}</strong></p>
      </aside>
    </div>
  );
}
