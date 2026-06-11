import type { Character } from '../../../types/character';
import { WEAPONS, getWeapon } from '../../../data/weapons';
import { SPECIALIZATIONS } from '../../../data/specializations';

type Props = {
  draft: Character;
  setDraft: (c: Character) => void;
};

export function StepWeapon({ draft, setDraft }: Props) {
  const choose = (id: string) => setDraft({
    ...draft,
    weapons: [{ weaponId: id, huntsCompleted: 5, isPrimary: true }],
    primaryWeaponId: id,
  });
  const selectedId = draft.weapons[0]?.weaponId;
  const selected = selectedId ? getWeapon(selectedId) : null;
  const pairings = selected
    ? SPECIALIZATIONS.filter(s => s.bestWith.includes(selected.id)).map(s => s.name)
    : [];
  return (
    <div>
      <h3>Step 5 — Starting Weapon</h3>
      <p class="muted">Choose one Tier 1 weapon — you start Trained (+2) with it.</p>
      <div class="weapon-grid">
        {WEAPONS.map(w => (
          <button key={w.id}
                  class={`race-pick ${selectedId === w.id ? 'selected' : ''} ${w.tier > 1 ? 'locked' : ''}`}
                  disabled={w.tier > 1}
                  onClick={() => choose(w.id)}>
            <strong>{w.name}</strong>
            <span class="weapon-roles">
              <span class="badge">{w.primaryRole}</span>
              <span class="badge badge-muted">{w.secondaryRole}</span>
            </span>
            <p class="weapon-meta">{w.primaryStat} · {w.damageDice} · {w.range}</p>
            <p>{w.summary}</p>
          </button>
        ))}
      </div>
      {selected && (
        <div class="weapon-detail">
          <h4>{selected.name} — {selected.primaryRole} · {selected.secondaryRole}</h4>
          <p class="weapon-meta">
            {selected.primaryStat} · {selected.damageDice} · {selected.range} · {selected.powerDice} Power {selected.powerDice === 1 ? 'Die' : 'Dice'}
          </p>
          <p>{selected.description}</p>
          {pairings.length > 0 && (
            <p class="weapon-pairs"><strong>Pairs well with:</strong> {pairings.join(', ')}</p>
          )}
          <ul class="weapon-techniques">
            {selected.techniques.map(t => (
              <li key={t.name}>
                <strong>{t.name}</strong> <span class="muted">({t.staminaCost} STA)</span>
                <p>{t.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
