import { useState } from 'preact/hooks';
import { useRoster } from '../hooks/useRoster';
import { Wizard } from '../wizard/Wizard';
import { exportCharacter, addCharacter, deleteCharacter, newCharacterId, nowIso } from '../../../lib/storage';
import { validateCharacter, migrateToCurrent } from '../../../lib/schema';
import { getRace } from '../../../data/races';
import { getBackground } from '../../../data/backgrounds';
import type { Character } from '../../../types/character';

export function Roster() {
  const { roster, refresh, loaded } = useRoster();
  const [showWizard, setShowWizard] = useState(false);

  const onExport = (c: Character) => {
    const blob = new Blob([exportCharacter(c)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${c.name || 'character'}-${c.id.slice(0, 8)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const onImport = async (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      const validated = validateCharacter(parsed);
      const migrated = validated.ok
        ? validated.character
        : migrateToCurrent(parsed);
      if (!migrated) { alert('Invalid character file.'); return; }
      const fresh: Character = { ...migrated, id: newCharacterId(), updatedAt: nowIso() };
      addCharacter(fresh);
      refresh();
    } catch (err) {
      alert(`Import failed: ${err}`);
    }
    e.target.value = '';
  };

  const onDelete = (c: Character) => {
    if (!confirm(`Delete ${c.name}? This cannot be undone.`)) return;
    deleteCharacter(c.id);
    refresh();
  };

  const onDuplicate = (c: Character) => {
    // Compute max HP/STA using the derived helpers
    // (Note: avoid pulling in computeFinalStats here since the spec applies fixed-only bonuses;
    //  for duplicate we just want a clean live-state reset, not precise HP. Use baseStats CON
    //  as a safe minimum and leave full recalculation to the sheet load.)
    const fullHp = c.baseStats.CON * 8 + c.hunterRank;
    const fullSta = Math.max(1, 6 + Math.floor(c.baseStats.CON / 2));
    const copy: Character = {
      ...c,
      id: newCharacterId(),
      name: `${c.name} (copy)`,
      createdAt: nowIso(),
      updatedAt: nowIso(),
      liveState: {
        currentHp: fullHp,
        currentStamina: fullSta,
        conditions: [],
        actionEconomy: { actionUsed: false, fastActionUsed: false, reactionUsed: false, breathingTurn: false },
        exhausted: false,
      },
    };
    addCharacter(copy);
    refresh();
  };

  if (showWizard) return <Wizard onClose={() => { setShowWizard(false); refresh(); }} />;

  if (!loaded) {
    return <div class="sheet-root"><p>Loading…</p></div>;
  }

  return (
    <div class="sheet-root roster">
      <header class="roster-header">
        <h2>Your Hunters</h2>
        <div class="roster-actions">
          <button class="btn" onClick={() => setShowWizard(true)}>New Character</button>
          <label class="btn btn-secondary">
            Import JSON
            <input type="file" accept=".json" onChange={onImport} style="display:none" />
          </label>
        </div>
      </header>
      {roster.characters.length === 0 && (
        <p class="muted">No hunters yet. Click "New Character" to create your first.</p>
      )}
      <div class="roster-grid">
        {roster.characters.map(c => (
          <div class="roster-card" key={c.id}>
            {c.portraitUrl && <img src={c.portraitUrl} alt="" class="roster-portrait" />}
            <h3>{c.name || 'Unnamed Hunter'}</h3>
            <p class="muted">
              {c.raceId ? getRace(c.raceId).name : '—'}
              {c.backgroundIds[0] ? ` · ${getBackground(c.backgroundIds[0]).name}` : ''}
            </p>
            <p>HR {c.hunterRank}</p>
            <div class="roster-card-actions">
              <a class="btn" href={`/character/sheet?id=${c.id}`}>Open</a>
              <button class="btn btn-secondary" onClick={() => onExport(c)}>Export</button>
              <button class="btn btn-secondary" onClick={() => onDuplicate(c)}>Duplicate</button>
              <button class="btn btn-danger" onClick={() => onDelete(c)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
