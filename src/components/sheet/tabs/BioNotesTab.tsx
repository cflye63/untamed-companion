import type { Character } from '../../../types/character';

type Props = {
  character: Character;
  update: (updater: (c: Character) => Character) => void;
};

export function BioNotesTab({ character }: Props) {
  return <div>BioNotes tab (Task 5.7)</div>;
}
