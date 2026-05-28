import type { Character } from '../../../types/character';
import { SPECIALIZATIONS, getSpec } from '../../../data/specializations';
import { TALENTS_BY_CATEGORY, getTalent, type TalentCategory } from '../../../data/talents';
import { useDerived } from '../hooks/useDerived';

type Props = {
  character: Character;
  update: (updater: (c: Character) => Character) => void;
};

export function SpecsTalentsTab({ character, update }: Props) {
  const derived = useDerived(character);

  const addSpec = (specId: string) => update(c => ({
    ...c, specializations: [...c.specializations, { specId, rankUnlocked: 1 }],
  }));
  const setRank = (specId: string, rank: 1 | 2 | 3) => update(c => ({
    ...c,
    specializations: c.specializations.map(s => s.specId === specId ? { ...s, rankUnlocked: rank } : s),
  }));
  const removeSpec = (specId: string) => update(c => ({
    ...c, specializations: c.specializations.filter(s => s.specId !== specId),
  }));

  const addTalent = (talentId: string) => update(c => ({
    ...c, talentIds: [...c.talentIds, talentId],
  }));
  const removeTalent = (talentId: string) => update(c => ({
    ...c, talentIds: c.talentIds.filter(t => t !== talentId),
  }));

  const usedSpecSlots = character.specializations.length;
  const usedTalentSlots = character.talentIds.length;

  return (
    <div class="specs-talents-tab">
      <section class="tab-section">
        <h4>Specializations ({usedSpecSlots} / {derived.availableSpecSlots})</h4>
        {character.specializations.map(se => {
          const s = getSpec(se.specId);
          return (
            <div class="spec-card" key={s.id}>
              <div class="spec-head">
                <span class="spec-icon">{s.icon}</span>
                <strong>{s.name}</strong>
                <span class="muted">— {s.role}</span>
                <button class="btn btn-danger" onClick={() => removeSpec(s.id)}>Remove</button>
              </div>
              <div class="rank-checks">
                {s.ranks.map(r => (
                  <label key={r.rank}>
                    <input
                      type="checkbox"
                      checked={se.rankUnlocked >= r.rank}
                      onChange={(e: any) => {
                        const v = (e.target.checked ? r.rank : (r.rank - 1)) as 1 | 2 | 3;
                        setRank(s.id, Math.max(1, v) as 1 | 2 | 3);
                      }}
                    />
                    <span class="rank-label">{r.label}</span> — <strong>{r.name}</strong>: {r.description}
                  </label>
                ))}
              </div>
            </div>
          );
        })}
        {usedSpecSlots < derived.availableSpecSlots && (
          <select class="input" value="" onChange={(e: any) => e.target.value && addSpec(e.target.value)}>
            <option value="">+ Add specialization</option>
            {SPECIALIZATIONS.filter(s => !character.specializations.some(cs => cs.specId === s.id))
              .map(s => <option key={s.id} value={s.id}>{s.name} — {s.role}</option>)}
          </select>
        )}
      </section>

      <section class="tab-section">
        <h4>Talents ({usedTalentSlots} / {derived.availableTalentSlots})</h4>
        <div class="talent-list">
          {character.talentIds.map(id => {
            const t = getTalent(id);
            return (
              <div class="talent-card" key={id}>
                <strong>{t.name}</strong>
                <span class="badge">{t.category}</span>
                <p class="muted">{t.description}</p>
                <button class="btn btn-danger" onClick={() => removeTalent(id)}>Remove</button>
              </div>
            );
          })}
        </div>
        {usedTalentSlots < derived.availableTalentSlots && (
          <details class="talent-picker">
            <summary class="btn">+ Add talent</summary>
            {(Object.keys(TALENTS_BY_CATEGORY) as TalentCategory[]).map(cat => (
              <div class="talent-group" key={cat}>
                <h5>{cat}</h5>
                {TALENTS_BY_CATEGORY[cat].filter(t => !character.talentIds.includes(t.id)).map(t => (
                  <button class="talent-option" key={t.id} onClick={() => addTalent(t.id)}>
                    <strong>{t.name}</strong>: {t.description}
                  </button>
                ))}
              </div>
            ))}
          </details>
        )}
      </section>
    </div>
  );
}
