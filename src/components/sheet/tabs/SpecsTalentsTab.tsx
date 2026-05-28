import type { Character } from '../../../types/character';

type Props = {
  character: Character;
  update: (updater: (c: Character) => Character) => void;
};

export function SpecsTalentsTab({ character }: Props) {
  return <div>SpecsTalents tab (Task 5.4)</div>;
}
