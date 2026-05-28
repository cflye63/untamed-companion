import type { Character } from '../../../types/character';

type Props = {
  character: Character;
  update: (updater: (c: Character) => Character) => void;
};

export function InventoryTab({ character }: Props) {
  return <div>Inventory tab (Task 5.5)</div>;
}
