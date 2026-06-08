import type { Character } from '../../../types/character';
import { BACKGROUNDS, getBackground } from '../../../data/backgrounds';
import { useState } from 'preact/hooks';

type Props = {
  draft: Character;
  setDraft: (c: Character) => void;
};

export function StepBackground({ draft, setDraft }: Props) {
  const [filter, setFilter] = useState('');
  const filtered = BACKGROUNDS.filter(b => b.name.toLowerCase().includes(filter.toLowerCase()));

  const select = (id: string) => {
    // Single background: clicking the selected one clears it, any other replaces.
    setDraft({ ...draft, backgroundIds: draft.backgroundIds[0] === id ? [] : [id] });
  };

  return (
    <div>
      <h3>Step 3 — Background</h3>
      <p class="muted">Choose your background. It grants stat and skill bonuses.</p>
      <input class="input" placeholder="Search backgrounds…" value={filter} onInput={(e: any) => setFilter(e.target.value)} />
      <div class="bg-grid">
        {filtered.map(b => (
          <button key={b.id} class={`race-pick ${draft.backgroundIds[0] === b.id ? 'selected' : ''}`} onClick={() => select(b.id)}>
            <strong>{b.name}</strong>
            <p>{b.description}</p>
          </button>
        ))}
      </div>
      <div class="selected-bg">
        Selected: {draft.backgroundIds[0] ? getBackground(draft.backgroundIds[0]).name : 'None'}
      </div>
    </div>
  );
}
