import type { Character } from '../../../types/character';
import { WEAPONS } from '../../../data/weapons';

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
  const selected = draft.weapons[0]?.weaponId;
  return (
    <div>
      <h3>Step 5 — Starting Weapon</h3>
      <p class="muted">Choose one Tier 1 weapon — you start Trained (+2) with it.</p>
      <div class="weapon-grid">
        {WEAPONS.map(w => (
          <button key={w.id}
                  class={`race-pick ${selected === w.id ? 'selected' : ''} ${w.tier > 1 ? 'locked' : ''}`}
                  disabled={w.tier > 1}
                  onClick={() => choose(w.id)}>
            <strong>{w.name} <span class="muted">(T{w.tier})</span></strong>
            <p>{w.description}</p>
            <p class="muted">Best: {w.bestWith?.join(', ') ?? '—'}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
