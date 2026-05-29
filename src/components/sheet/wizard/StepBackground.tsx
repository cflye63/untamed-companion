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

  const toggle = (id: string) => {
    const has = draft.backgroundIds.includes(id);
    if (has) setDraft({ ...draft, backgroundIds: draft.backgroundIds.filter(b => b !== id) });
    else if (draft.backgroundIds.length < 2) setDraft({ ...draft, backgroundIds: [...draft.backgroundIds, id] });
  };

  return (
    <div>
      <h3>Step 3 — Background</h3>
      <p class="muted">Pick one (or up to two) backgrounds. They grant stat and skill bonuses.</p>
      <input class="input" placeholder="Search backgrounds…" value={filter} onInput={(e: any) => setFilter(e.target.value)} />
      <div class="bg-grid">
        {filtered.map(b => (
          <button key={b.id} class={`race-pick ${draft.backgroundIds.includes(b.id) ? 'selected' : ''}`} onClick={() => toggle(b.id)}>
            <strong>{b.name}</strong>
            <p>{b.description}</p>
          </button>
        ))}
      </div>
      <div class="selected-bg">
        Selected: {draft.backgroundIds.map(id => getBackground(id).name).join(', ') || 'None'}
      </div>
    </div>
  );
}
