import type { Character } from '../../types/character';
import { milestonesBetween, type Milestone } from '../../lib/levelup';

type Props = {
  character: Character;
  fromHr: number;
  toHr: number;
  onClose: () => void;
  onUpdate: (updater: (c: Character) => Character) => void;
};

export function LevelUpModal({ fromHr, toHr, onClose }: Props) {
  const all = milestonesBetween(fromHr, toHr);

  const statPointMilestones = all.filter((m): m is Extract<Milestone, { kind: 'stat-points' }> => m.kind === 'stat-points');
  const talentMilestones = all.filter(m => m.kind === 'talent');
  const specMilestones = all.filter(m => m.kind === 'spec');
  const tierMilestones = all.filter((m): m is Extract<Milestone, { kind: 'tier' }> => m.kind === 'tier');
  const freeConMilestones = all.filter(m => m.kind === 'free-con');

  return (
    <div class="levelup-modal">
      <h3>Level Up: HR {fromHr} → HR {toHr}</h3>
      {tierMilestones.map(m => (
        <p key={`tier-${m.hr}`} class="milestone tier">🎖 Tier {m.tier} unlocked at HR {m.hr}.</p>
      ))}
      {freeConMilestones.length > 0 && (
        <p class="milestone con">+{freeConMilestones.length} free CON applied (recalculates automatically).</p>
      )}
      {statPointMilestones.length > 0 && (
        <p class="milestone points">+{statPointMilestones.reduce((s, m) => s + m.points, 0)} stat points to spend on the Stats tab.</p>
      )}
      {talentMilestones.length > 0 && (
        <p class="milestone talent">+{talentMilestones.length} Talent slot(s) — pick on Specs &amp; Talents tab.</p>
      )}
      {specMilestones.length > 0 && (
        <p class="milestone spec">+{specMilestones.length} Specialization slot(s) — pick on Specs &amp; Talents tab.</p>
      )}
      <button class="btn" onClick={onClose}>Got it</button>
    </div>
  );
}
