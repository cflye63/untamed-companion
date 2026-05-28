import type { Character } from '../../../types/character';
type Props = { draft: Character; setDraft: (c: Character) => void };
export function StepIdentity({ draft }: Props) {
  return <div>Step Identity (Task 6.2/6.3)</div>;
}
