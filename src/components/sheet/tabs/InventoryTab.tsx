import type { Character, InventoryItem } from '../../../types/character';
import { ARMORS, getArmor } from '../../../data/armor';
import { TOOLS } from '../../../data/tools';

type Props = {
  character: Character;
  update: (updater: (c: Character) => Character) => void;
};

export function InventoryTab({ character, update }: Props) {
  const setSlot = (which: 'gearSlots' | 'packSlots', idx: number, item: InventoryItem | null) => update(c => {
    const arr = [...c[which]];
    arr[idx] = item;
    return { ...c, [which]: arr };
  });

  const setArmor = (armorId: string) => update(c => {
    if (!armorId) return { ...c, armor: null };
    const a = getArmor(armorId);
    return { ...c, armor: { armorId, tier: a.tier, type: a.type } };
  });

  const toggleTool = (toolId: string) => update(c => ({
    ...c,
    tools: c.tools.includes(toolId) ? c.tools.filter(t => t !== toolId) : [...c.tools, toolId],
  }));

  return (
    <div class="inventory-tab">
      <section class="tab-section">
        <h4>Armor</h4>
        <select class="input" value={character.armor?.armorId ?? ''} onChange={(e: any) => setArmor(e.target.value)}>
          <option value="">— No armor —</option>
          {ARMORS.map(a => <option key={a.id} value={a.id}>{a.name} ({a.type} T{a.tier}) AR {a.ar}</option>)}
        </select>
      </section>

      <section class="tab-section">
        <h4>Gear Slots (6)</h4>
        <SlotGrid slots={character.gearSlots} onChange={(i, item) => setSlot('gearSlots', i, item)} />
      </section>

      <section class="tab-section">
        <h4>Pack Slots (10)</h4>
        <SlotGrid slots={character.packSlots} onChange={(i, item) => setSlot('packSlots', i, item)} />
      </section>

      <section class="tab-section">
        <h4>Tools</h4>
        <div class="tools-grid">
          {TOOLS.map(t => (
            <label key={t.id} class="tool-row">
              <input type="checkbox" checked={character.tools.includes(t.id)} onChange={() => toggleTool(t.id)} />
              <strong>{t.name}</strong>
              <span class="muted">— {t.category} — {t.description}</span>
            </label>
          ))}
        </div>
      </section>
    </div>
  );
}

function SlotGrid({ slots, onChange }: { slots: (InventoryItem | null)[]; onChange: (idx: number, item: InventoryItem | null) => void }) {
  return (
    <div class="slot-grid">
      {slots.map((item, i) => (
        <SlotRow key={i} item={item} onChange={item => onChange(i, item)} index={i + 1} />
      ))}
    </div>
  );
}

function SlotRow({ item, onChange, index }: { item: InventoryItem | null; onChange: (i: InventoryItem | null) => void; index: number }) {
  if (!item) {
    return (
      <div class="slot empty">
        <span class="slot-idx">{index}.</span>
        <button class="btn btn-secondary" onClick={() => onChange({ name: 'New item', type: 'misc', qty: 1 })}>+ Empty</button>
      </div>
    );
  }
  return (
    <div class="slot filled">
      <span class="slot-idx">{index}.</span>
      <input class="input" value={item.name} onInput={(e: any) => onChange({ ...item, name: e.target.value })} />
      <input class="input slot-qty" type="number" min="1" value={item.qty ?? 1} onInput={(e: any) => onChange({ ...item, qty: parseInt(e.target.value, 10) || 1 })} />
      <select class="input" value={item.type} onChange={(e: any) => onChange({ ...item, type: e.target.value })}>
        <option value="misc">Misc</option>
        <option value="weapon">Weapon</option>
        <option value="armor">Armor</option>
        <option value="tool">Tool</option>
        <option value="consumable">Consumable</option>
        <option value="monster-part">Monster Part</option>
      </select>
      <button class="btn btn-danger" onClick={() => onChange(null)}>×</button>
    </div>
  );
}
