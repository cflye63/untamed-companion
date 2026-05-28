import type { Character } from '../../../types/character';
type Props = { draft: Character; setDraft: (c: Character) => void };
export function StepBackground({ draft }: Props) {
  return <div>Step Background (Task 6.2/6.3)</div>;
}
