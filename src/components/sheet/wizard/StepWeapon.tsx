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
          <h4 class="weapon-detail-name">{selected.name}</h4>
          <p class="weapon-detail-roles">{selected.primaryRole} • {selected.secondaryRole}</p>

          <div class="weapon-chips">
            <span class="weapon-chip">{selected.primaryStat}</span>
            <span class="weapon-chip">{selected.damageDice}</span>
            {selected.range.split(' / ').map(seg => (
              <span class="weapon-chip" key={seg}>{seg}</span>
            ))}
            <span class="weapon-chip">+{selected.powerDice} Power {selected.powerDice === 1 ? 'Die' : 'Dice'}</span>
          </div>

          <p class="weapon-complexity">
            Complexity:{' '}
            <span class="stars" aria-label={`Complexity ${selected.complexity} of 5`}>
              {[1, 2, 3, 4, 5].map(n => (
                <span key={n} class={`star ${n <= selected.complexity ? 'star--filled' : 'star--empty'}`}>
                  {n <= selected.complexity ? '★' : '☆'}
                </span>
              ))}
            </span>
          </p>

          <p class="weapon-pitch">{selected.summary}</p>

          {pairings.length > 0 && (
            <p class="weapon-pairs"><strong>Pairs well with:</strong> {pairings.join(', ')}</p>
          )}

          <div class="core-mechanic">
            <h5>Core Mechanic — {selected.coreMechanic.name}</h5>
            <ul>
              {selected.coreMechanic.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
          </div>

          <div class="tier-group">
            <h5>Current Technique (Tier 1)</h5>
            {selected.techniques.filter(t => t.tier === 1).map(t => (
              <details class="technique-row" key={t.name} open>
                <summary>{t.name} <span class="muted">({t.staminaCost} STA)</span></summary>
                <p>{t.description}</p>
              </details>
            ))}
          </div>

          <div class="tier-group">
            <h5>Future Unlocks</h5>
            {selected.techniques.filter(t => t.tier > 1).map(t => (
              <details class="technique-row" key={t.name}>
                <summary>Tier {t.tier} — {t.name} <span class="muted">({t.staminaCost} STA)</span></summary>
                <p>{t.description}</p>
              </details>
            ))}
          </div>

          <details class="full-rules">
            <summary>Full rules</summary>
            <p>{selected.description}</p>
          </details>
        </div>
      )}
    </div>
  );
}
