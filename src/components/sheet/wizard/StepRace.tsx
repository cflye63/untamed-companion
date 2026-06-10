import type { Character } from '../../../types/character';
import { RACES, getRace, formatBonus } from '../../../data/races';

type Props = {
  draft: Character;
  setDraft: (c: Character) => void;
};

export function StepRace({ draft, setDraft }: Props) {
  const race = draft.raceId ? getRace(draft.raceId) : null;
  const selectedLineage = race?.lineages.find(l => l.id === draft.lineageId);
  const activeBonuses = race ? [...race.bonuses, ...(selectedLineage?.bonuses ?? [])] : [];
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
                <strong>
                  {l.name}
                  {l.bonuses && l.bonuses.length > 0 && (
                    <span class="badge">{formatBonus(l.bonuses[0])}</span>
                  )}
                </strong>
                <p>{l.description}</p>
              </button>
            ))}
          </div>
        )}
      </div>
      {race && (
        <aside class="wizard-side">
          <h4>{race.name}</h4>
          <p class="side-trait"><strong>{race.racialTrait.name}:</strong> {race.racialTrait.description}</p>
          {activeBonuses.length > 0 && (
            <p class="side-trait"><strong>Stat Bonus:</strong> {activeBonuses.map(formatBonus).join(', ')}</p>
          )}
          {race.proficiencies.traits && race.proficiencies.traits.length > 0 && (
            <ul class="side-features">
              {race.proficiencies.traits.map(t => <li key={t}>{t}</li>)}
            </ul>
          )}
        </aside>
      )}
    </div>
  );
}
