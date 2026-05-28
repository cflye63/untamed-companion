import { useState } from 'preact/hooks';
import { useCharacter } from './hooks/useCharacter';
import { VitalsHeader } from './VitalsHeader';
import { TabNav, type TabId } from './TabNav';
import { IdentityTab } from './tabs/IdentityTab';
import { StatsSkillsTab } from './tabs/StatsSkillsTab';
import { CombatTab } from './tabs/CombatTab';
import { SpecsTalentsTab } from './tabs/SpecsTalentsTab';
import { InventoryTab } from './tabs/InventoryTab';
import { CraftingTab } from './tabs/CraftingTab';
import { BioNotesTab } from './tabs/BioNotesTab';
import './styles/sheet.css';
import './styles/print.css';

type Props = {
  characterId: string;
};

export function Sheet({ characterId }: Props) {
  const { character, update } = useCharacter(characterId);
  const [activeTab, setActiveTab] = useState<TabId>('identity');

  if (!character) {
    return (
      <div class="sheet-root">
        <p>Character not found. <a href="/character/roster">Back to Roster</a></p>
      </div>
    );
  }

  return (
    <div class="sheet-root">
      <VitalsHeader character={character} onUpdateLive={update} />
      <TabNav activeTab={activeTab} onChange={setActiveTab} />
      <div class="tab-panel" role="tabpanel">
        {activeTab === 'identity' && <IdentityTab character={character} update={update} />}
        {activeTab === 'stats' && <StatsSkillsTab character={character} update={update} />}
        {activeTab === 'combat' && <CombatTab character={character} update={update} />}
        {activeTab === 'specs' && <SpecsTalentsTab character={character} update={update} />}
        {activeTab === 'inventory' && <InventoryTab character={character} update={update} />}
        {activeTab === 'crafting' && <CraftingTab character={character} update={update} />}
        {activeTab === 'bio' && <BioNotesTab character={character} update={update} />}
      </div>
      <div class="sheet-footer">
        <button class="btn" onClick={() => window.print()}>Print View</button>
        <a class="btn btn-secondary" href="/character/roster">Back to Roster</a>
      </div>
    </div>
  );
}
