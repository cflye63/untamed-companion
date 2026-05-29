import type { Character } from '../../../types/character';
import { RACES, getRace } from '../../../data/races';

type Props = {
  draft: Character;
  setDraft: (c: Character) => void;
};

export function StepRace({ draft, setDraft }: Props) {
  const race = draft.raceId ? getRace(draft.raceId) : null;
  return (
    <div class="wizard-step-grid">
      <div>
        <h3>Step 2 — Race & Lineage</h3>
        <div class="race-cards">
          {RACES.map(r => (
            <button key={r.id} class={`race-pick ${r.id === draft.raceId ? 'selected' : ''}`}
                    onClick={() => setDraft({ ...draft, raceId: r.id, lineageId: undefined })}>
              <strong>{r.name}</strong>
              <p>{r.summary}</p>
            </button>
          ))}
        </div>
        {race && race.lineages.length > 0 && (
          <div class="lineage-picker">
            <h4>Lineage</h4>
            {race.lineages.map(l => (
              <button key={l.id} class={`race-pick small ${l.id === draft.lineageId ? 'selected' : ''}`}
                      onClick={() => setDraft({ ...draft, lineageId: l.id })}>
                <strong>{l.name}</strong>
                <p>{l.description}</p>
              </button>
            ))}
          </div>
        )}
      </div>
      {race && (
        <aside class="wizard-side">
          <h4>{race.name}</h4>
          <p>{race.racialTrait.name}: {race.racialTrait.description}</p>
        </aside>
      )}
    </div>
  );
}
