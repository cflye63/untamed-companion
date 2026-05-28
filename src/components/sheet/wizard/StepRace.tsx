import type { Character } from '../../../types/character';
type Props = { draft: Character; setDraft: (c: Character) => void };
export function StepRace({ draft }: Props) {
  return <div>Step Race (Task 6.2/6.3)</div>;
}
