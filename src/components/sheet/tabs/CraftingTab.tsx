import type { Character } from '../../../types/character';
import { RECIPES } from '../../../data/recipes';
import { useState } from 'preact/hooks';

type Props = {
  character: Character;
  update: (updater: (c: Character) => Character) => void;
};

export function CraftingTab({ character, update }: Props) {
  const toggleRecipe = (recipeId: string) => update(c => ({
    ...c,
    knownRecipes: c.knownRecipes.includes(recipeId)
      ? c.knownRecipes.filter(r => r !== recipeId)
      : [...c.knownRecipes, recipeId],
  }));

  const addPart = (partId: string, monsterId: string, qty: number) => update(c => ({
    ...c,
    monsterParts: [...c.monsterParts, { partId, monsterId, qty }],
  }));
  const updatePart = (idx: number, qty: number) => update(c => ({
    ...c,
    monsterParts: c.monsterParts.map((p, i) => i === idx ? { ...p, qty } : p),
  }));
  const removePart = (idx: number) => update(c => ({
    ...c,
    monsterParts: c.monsterParts.filter((_, i) => i !== idx),
  }));

  const [draftPart, setDraftPart] = useState({ partId: '', monsterId: '', qty: 1 });

  return (
    <div class="crafting-tab">
      <section class="tab-section">
        <h4>Known Recipes</h4>
        <div class="recipe-list">
          {RECIPES.map(r => (
            <label key={r.id} class="recipe-row">
              <input type="checkbox" checked={character.knownRecipes.includes(r.id)} onChange={() => toggleRecipe(r.id)} />
              <strong>{r.name}</strong>
              <span class="badge">{r.kind}</span>
              <span class="muted">— {r.components.map(c => `${c.qty}× ${c.name}`).join(' + ')}</span>
            </label>
          ))}
        </div>
      </section>

      <section class="tab-section">
        <h4>Monster Parts</h4>
        <div class="part-add">
          <input class="input" placeholder="Part name" value={draftPart.partId} onInput={(e: any) => setDraftPart({ ...draftPart, partId: e.target.value })} />
          <input class="input" placeholder="From monster" value={draftPart.monsterId} onInput={(e: any) => setDraftPart({ ...draftPart, monsterId: e.target.value })} />
          <input class="input" type="number" min="1" value={draftPart.qty} onInput={(e: any) => setDraftPart({ ...draftPart, qty: parseInt(e.target.value, 10) || 1 })} />
          <button class="btn" onClick={() => {
            if (!draftPart.partId) return;
            addPart(draftPart.partId, draftPart.monsterId, draftPart.qty);
            setDraftPart({ partId: '', monsterId: '', qty: 1 });
          }}>Add</button>
        </div>
        <div class="part-list">
          {character.monsterParts.map((p, i) => (
            <div class="part-row" key={i}>
              <strong>{p.partId}</strong> <span class="muted">from {p.monsterId}</span>
              <input class="input" type="number" min="0" value={p.qty} onInput={(e: any) => updatePart(i, parseInt(e.target.value, 10) || 0)} />
              <button class="btn btn-danger" onClick={() => removePart(i)}>×</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
