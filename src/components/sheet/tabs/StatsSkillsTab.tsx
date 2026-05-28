import type { Character, StatKey } from '../../../types/character';
import { STATS } from '../../../types/character';
import { SKILLS_BY_STAT } from '../../../data/skills';
import { useDerived } from '../hooks/useDerived';
import { DiceRoller } from '../DiceRoller';

type Props = {
  character: Character;
  update: (updater: (c: Character) => Character) => void;
};

export function StatsSkillsTab({ character, update }: Props) {
  const derived = useDerived(character);

  const setBase = (stat: StatKey, value: number) => update(c => ({
    ...c, baseStats: { ...c.baseStats, [stat]: value },
  }));

  const setProf = (skillId: string, prof: 'novice' | 'trained' | 'master') => update(c => ({
    ...c, skillProficiencies: { ...c.skillProficiencies, [skillId]: prof },
  }));

  return (
    <div class="stats-skills-tab">
      <section class="tab-section">
        <h4>Core Stats</h4>
        <div class="stat-grid">
          {STATS.map(stat => (
            <div class="stat-card" key={stat}>
              <div class="stat-card-label">{stat}</div>
              <div class="stat-card-edit">
                <button class="step" onClick={() => setBase(stat, Math.max(1, character.baseStats[stat] - 1))}>-</button>
                <input
                  class="input stat-score"
                  type="number" min="1" max="20"
                  value={character.baseStats[stat]}
                  onInput={(e: any) => setBase(stat, parseInt(e.target.value, 10) || 1)}
                />
                <button class="step" onClick={() => setBase(stat, character.baseStats[stat] + 1)}>+</button>
              </div>
              <div class="stat-card-final">Final: <strong>{derived.finalStats[stat]}</strong> ({derived.statMods[stat] >= 0 ? '+' : ''}{derived.statMods[stat]})</div>
            </div>
          ))}
        </div>
      </section>

      <section class="tab-section">
        <h4>Skills</h4>
        {STATS.map(stat => {
          if (stat === 'CON') {
            return (
              <div class="skill-group" key={stat}>
                <h5>CON — Endurance</h5>
                <p class="muted">CON has no skill list. Roll CON + mod for endurance, breath, marching, etc.</p>
                <DiceRoller label="CON check" modifier={derived.statMods.CON} />
              </div>
            );
          }
          const skills = SKILLS_BY_STAT[stat];
          if (!skills?.length) return null;
          return (
            <div class="skill-group" key={stat}>
              <h5>{stat} skills</h5>
              <div class="skills-list">
                {skills.map(s => {
                  const prof = character.skillProficiencies[s.id] ?? 'novice';
                  return (
                    <div class="skill-row" key={s.id}>
                      <span class="skill-name">{s.name}</span>
                      <select class="input" value={prof} onChange={(e: any) => setProf(s.id, e.target.value)}>
                        <option value="novice">Novice +0</option>
                        <option value="trained">Trained +2</option>
                        <option value="master">Master +4</option>
                      </select>
                      <span class="skill-bonus">{derived.skillBonus[s.id] >= 0 ? '+' : ''}{derived.skillBonus[s.id]}</span>
                      <DiceRoller label={s.name} modifier={derived.skillBonus[s.id]} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
