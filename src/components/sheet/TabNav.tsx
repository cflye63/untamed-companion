type TabId = 'identity' | 'stats' | 'combat' | 'specs' | 'inventory' | 'crafting' | 'bio';

const TABS: { id: TabId; label: string }[] = [
  { id: 'identity', label: 'Identity' },
  { id: 'stats', label: 'Stats & Skills' },
  { id: 'combat', label: 'Combat' },
  { id: 'specs', label: 'Specs & Talents' },
  { id: 'inventory', label: 'Inventory' },
  { id: 'crafting', label: 'Crafting' },
  { id: 'bio', label: 'Bio & Notes' },
];

type Props = {
  activeTab: TabId;
  onChange: (tab: TabId) => void;
};

export function TabNav({ activeTab, onChange }: Props) {
  return (
    <nav class="tab-bar" role="tablist">
      {TABS.map(t => (
        <button
          key={t.id}
          class="tab"
          role="tab"
          aria-selected={t.id === activeTab}
          onClick={() => onChange(t.id)}
        >
          {t.label}
        </button>
      ))}
    </nav>
  );
}

export type { TabId };
