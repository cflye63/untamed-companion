import type { Character } from '../../../types/character';
import { getRace } from '../../../data/races';
import { getBackground } from '../../../data/backgrounds';
import { getWeapon } from '../../../data/weapons';
import { computeFinalStats, maxHp, maxStamina, statMod } from '../../../lib/derived';

type Props = { draft: Character };

export function StepReview({ draft }: Props) {
  const final = computeFinalStats(draft);
  const race = getRace(draft.raceId);
  const bgs = draft.backgroundIds.map(b => getBackground(b).name).join(', ');
  const weapon = draft.weapons[0] ? getWeapon(draft.weapons[0].weaponId) : null;
  return (
    <div>
      <h3>Step 6 — Review</h3>
      <ul class="review-list">
        <li><strong>Name:</strong> {draft.name}</li>
        <li><strong>Race:</strong> {race.name}{draft.lineageId ? ` (${race.lineages.find(l => l.id === draft.lineageId)?.name})` : ''}</li>
        <li><strong>Backgrounds:</strong> {bgs}</li>
        <li><strong>Stats:</strong> {(['STR','DEX','CON','INT','INS','CHA'] as const).map(s => `${s} ${final[s]} (${statMod(final[s]) >= 0 ? '+' : ''}${statMod(final[s])})`).join(' · ')}</li>
        <li><strong>Starting Weapon:</strong> {weapon?.name} (Trained)</li>
        <li><strong>HP:</strong> {maxHp(final.CON, 0)} · <strong>Stamina:</strong> {maxStamina(final.CON)}</li>
      </ul>
      <p class="muted">Click "Create Character" below to save and head to the sheet.</p>
    </div>
  );
}
