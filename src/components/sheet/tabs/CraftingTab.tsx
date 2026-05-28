import type { Character } from '../../../types/character';

type Props = {
  character: Character;
  update: (updater: (c: Character) => Character) => void;
};

export function CraftingTab({ character }: Props) {
  return <div>Crafting tab (Task 5.6)</div>;
}
