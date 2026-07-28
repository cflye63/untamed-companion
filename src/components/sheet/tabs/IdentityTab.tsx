import type { Character } from '../../../types/character';
import { RACES, getRace } from '../../../data/races';
import { BACKGROUNDS, getBackground } from '../../../data/backgrounds';
import { useState } from 'preact/hooks';
import { LevelUpModal } from '../LevelUpModal';

type Props = {
  character: Character;
  update: (updater: (c: Character) => Character) => void;
};

export function IdentityTab({ character, update }: Props) {
  const setName = (e: any) => update(c => ({ ...c, name: e.target.value }));
  const setPronouns = (e: any) => update(c => ({ ...c, pronouns: e.target.value }));
  const setHR = (e: any) => update(c => ({ ...c, hunterRank: parseInt(e.target.value, 10) || 0 }));
  const setCxp = (e: any) => update(c => ({ ...c, cxp: parseInt(e.target.value, 10) || 0 }));
  const [levelUp, setLevelUp] = useState<{ from: number; to: number } | null>(null);

  const onLevelUp = () => {
    const from = character.hunterRank;
    update(c => ({ ...c, hunterRank: c.hunterRank + 1 }));
    setLevelUp({ from, to: from + 1 });
  };

  const setRace = (e: any) => update(c => ({ ...c, raceId: e.target.value, lineageId: undefined }));
  const setLineage = (e: any) => update(c => ({ ...c, lineageId: e.target.value || undefined }));

  const addBackground = (id: string) => update(c => ({ ...c, backgroundIds: [...c.backgroundIds, id] }));
  const removeBackground = (id: string) => update(c => ({
    ...c, backgroundIds: c.backgroundIds.filter(b => b !== id)
  }));

  const onPortraitFile = (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 256 * 1024) {
      alert('Portrait too large (max 256 KB). Please resize.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      update(c => ({ ...c, portraitUrl: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  const race = getRace(character.raceId);

  return (
    <div class="identity-tab">
      <section class="tab-section">
        <h4>Identity</h4>
        <div class="form-grid">
          <label>Name <input class="input" value={character.name} onInput={setName} /></label>
          <label>Pronouns <input class="input" value={character.pronouns ?? ''} onInput={setPronouns} /></label>
          <label>Hunter Rank
            <div style="display:flex;gap:6px;align-items:center">
              <input class="input" type="number" min="0" value={character.hunterRank} onInput={setHR} style="flex:1" />
              <button class="btn" onClick={onLevelUp}>Level Up</button>
            </div>
          </label>
          <label>CXP <input class="input" type="number" min="0" value={character.cxp} onInput={setCxp} /></label>
          <label>Portrait <input class="input" type="file" accept="image/*" onChange={onPortraitFile} /></label>
        </div>
        {character.portraitUrl && (
          <img src={character.portraitUrl} alt="" class="portrait-preview" />
        )}
      </section>

      <section class="tab-section">
        <h4>Race & Lineage</h4>
        <label>Race
          <select class="input" value={character.raceId} onChange={setRace}>
            {RACES.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
          </select>
        </label>
        {race.lineages.length > 0 && (
          <label>Lineage
            <select class="input" value={character.lineageId ?? ''} onChange={setLineage}>
              <option value="">— pick a lineage —</option>
              {race.lineages.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
            </select>
          </label>
        )}
        <p class="muted"><strong>{race.racialTrait.name}:</strong> {race.racialTrait.description}</p>
        {character.lineageId && race.lineages.find(l => l.id === character.lineageId) && (
          <p class="muted">{race.lineages.find(l => l.id === character.lineageId)!.description}</p>
        )}
        {race.proficiencies.traits && race.proficiencies.traits.length > 0 && (
          <ul class="race-features">
            {race.proficiencies.traits.map(t => <li key={t}>{t}</li>)}
          </ul>
        )}
      </section>

      <section class="tab-section">
        <h4>Background</h4>
        <div class="bg-list">
          {character.backgroundIds.map(id => {
            const bg = getBackground(id);
            return (
              <div class="bg-row" key={id}>
                <strong>{bg.name}</strong>
                <span class="muted">{bg.description}</span>
                <button class="btn btn-danger" onClick={() => removeBackground(id)}>Remove</button>
              </div>
            );
          })}
        </div>
        {character.backgroundIds.length < 1 && (
          <select class="input" value="" onChange={(e: any) => e.target.value && addBackground(e.target.value)}>
            <option value="">Choose a background</option>
            {BACKGROUNDS.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
          </select>
        )}
      </section>
      {levelUp && (
        <LevelUpModal
          character={character}
          fromHr={levelUp.from}
          toHr={levelUp.to}
          onClose={() => setLevelUp(null)}
          onUpdate={update}
        />
      )}
    </div>
  );
}
