import type { Character } from '../../../types/character';

type Props = {
  draft: Character;
  setDraft: (c: Character) => void;
};

export function StepIdentity({ draft, setDraft }: Props) {
  return (
    <div>
      <h3>Step 1 — Identity</h3>
      <p class="muted">Your hunter's name and basics. You can change all of this later.</p>
      <label>Name <input class="input" value={draft.name} onInput={(e: any) => setDraft({ ...draft, name: e.target.value })} /></label>
      <label>Pronouns (optional) <input class="input" value={draft.pronouns ?? ''} onInput={(e: any) => setDraft({ ...draft, pronouns: e.target.value })} /></label>
    </div>
  );
}
