import type { Character } from '../../../types/character';

type Props = {
  character: Character;
  update: (updater: (c: Character) => Character) => void;
};

export function StatsSkillsTab({ character }: Props) {
  return <div>StatsSkills tab (Task 5.2)</div>;
}
