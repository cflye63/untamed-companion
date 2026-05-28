import type { Character } from '../../../types/character';

type Props = {
  character: Character;
  update: (updater: (c: Character) => Character) => void;
};

export function CombatTab({ character }: Props) {
  return <div>Combat tab (Task 5.3)</div>;
}
