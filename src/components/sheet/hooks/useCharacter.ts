import { useEffect, useRef, useState, useCallback } from 'preact/hooks';
import type { Character } from '../../../types/character';
import { getCharacter, updateCharacter, nowIso } from '../../../lib/storage';

const SAVE_DEBOUNCE_MS = 300;

export function useCharacter(id: string | null) {
  const [character, setCharacter] = useState<Character | null>(null);
  const [loaded, setLoaded] = useState(false);
  const saveTimer = useRef<number | null>(null);

  // Load from localStorage on mount (client only)
  useEffect(() => {
    if (id) {
      setCharacter(getCharacter(id));
    }
    setLoaded(true);
  }, [id]);

  // Debounced autosave (only fires after initial load completes)
  useEffect(() => {
    if (!loaded || !character) return;
    if (saveTimer.current !== null) clearTimeout(saveTimer.current);
    saveTimer.current = window.setTimeout(() => {
      updateCharacter({ ...character, updatedAt: nowIso() });
    }, SAVE_DEBOUNCE_MS);
    return () => {
      if (saveTimer.current !== null) clearTimeout(saveTimer.current);
    };
  }, [character, loaded]);

  const update = useCallback((mutator: (c: Character) => Character) => {
    setCharacter(prev => (prev ? mutator(prev) : prev));
  }, []);

  return { character, update, loaded };
}
