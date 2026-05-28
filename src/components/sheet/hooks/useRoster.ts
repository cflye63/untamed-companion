import { useState, useCallback } from 'preact/hooks';
import { loadRoster, addCharacter, deleteCharacter as del } from '../../../lib/storage';
import type { Character } from '../../../types/character';

export function useRoster() {
  const [roster, setRoster] = useState(loadRoster());

  const refresh = useCallback(() => setRoster(loadRoster()), []);

  const add = useCallback((c: Character) => {
    addCharacter(c);
    refresh();
  }, [refresh]);

  const remove = useCallback((id: string) => {
    del(id);
    refresh();
  }, [refresh]);

  return { roster, refresh, add, remove };
}
