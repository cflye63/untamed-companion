import { useState, useCallback, useEffect } from 'preact/hooks';
import { loadRoster, addCharacter, deleteCharacter as del } from '../../../lib/storage';
import type { Character } from '../../../types/character';

export function useRoster() {
  const [roster, setRoster] = useState<{ characters: Character[] }>({ characters: [] });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setRoster(loadRoster());
    setLoaded(true);
  }, []);

  const refresh = useCallback(() => setRoster(loadRoster()), []);

  const add = useCallback((c: Character) => {
    addCharacter(c);
    refresh();
  }, [refresh]);

  const remove = useCallback((id: string) => {
    del(id);
    refresh();
  }, [refresh]);

  return { roster, refresh, add, remove, loaded };
}
