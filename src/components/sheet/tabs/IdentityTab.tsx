import type { Character } from '../../../types/character';

type Props = {
  character: Character;
  update: (updater: (c: Character) => Character) => void;
};

export function IdentityTab({ character }: Props) {
  return <div>Identity tab (Task 5.1)</div>;
}
