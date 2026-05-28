import type { Character } from '../../../types/character';
import { useState } from 'preact/hooks';
import { nowIso } from '../../../lib/storage';

type Props = {
  character: Character;
  update: (updater: (c: Character) => Character) => void;
};

export function BioNotesTab({ character, update }: Props) {
  const setField = (field: 'personality' | 'motivations' | 'partyConnections', value: string) => update(c => ({
    ...c, bio: { ...c.bio, [field]: value },
  }));
  const [entry, setEntry] = useState('');
  const addEntry = () => {
    if (!entry.trim()) return;
    update(c => ({ ...c, bio: { ...c.bio, journal: [...c.bio.journal, { date: nowIso(), text: entry }] } }));
    setEntry('');
  };
  const removeEntry = (idx: number) => update(c => ({
    ...c, bio: { ...c.bio, journal: c.bio.journal.filter((_, i) => i !== idx) },
  }));

  return (
    <div class="bio-tab">
      <section class="tab-section">
        <h4>Personality</h4>
        <textarea class="input bio-text" value={character.bio.personality ?? ''} onInput={(e: any) => setField('personality', e.target.value)} />
      </section>
      <section class="tab-section">
        <h4>Motivations</h4>
        <textarea class="input bio-text" value={character.bio.motivations ?? ''} onInput={(e: any) => setField('motivations', e.target.value)} />
      </section>
      <section class="tab-section">
        <h4>Party Connections</h4>
        <textarea class="input bio-text" value={character.bio.partyConnections ?? ''} onInput={(e: any) => setField('partyConnections', e.target.value)} />
      </section>
      <section class="tab-section">
        <h4>Journal</h4>
        <div class="journal-entry">
          <textarea class="input bio-text" placeholder="What happened on the hunt?" value={entry} onInput={(e: any) => setEntry(e.target.value)} />
          <button class="btn" onClick={addEntry}>Add Entry</button>
        </div>
        <ul class="journal">
          {character.bio.journal.slice().reverse().map((e, i) => {
            const realIdx = character.bio.journal.length - 1 - i;
            return (
              <li key={realIdx}>
                <time>{new Date(e.date).toLocaleString()}</time>
                <p>{e.text}</p>
                <button class="btn btn-danger" onClick={() => removeEntry(realIdx)}>×</button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
