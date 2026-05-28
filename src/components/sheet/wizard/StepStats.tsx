import type { Character } from '../../../types/character';
type Props = { draft: Character; setDraft: (c: Character) => void };
export function StepStats({ draft }: Props) {
  return <div>Step Stats (Task 6.2/6.3)</div>;
}
