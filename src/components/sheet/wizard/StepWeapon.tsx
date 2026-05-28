import type { Character } from '../../../types/character';
type Props = { draft: Character; setDraft: (c: Character) => void };
export function StepWeapon({ draft }: Props) {
  return <div>Step Weapon (Task 6.2/6.3)</div>;
}
