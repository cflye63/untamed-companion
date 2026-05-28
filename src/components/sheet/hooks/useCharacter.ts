import { useEffect, useRef, useState, useCallback } from 'preact/hooks';
import type { Character } from '../../../types/character';
import { getCharacter, updateCharacter, nowIso } from '../../../lib/storage';

const SAVE_DEBOUNCE_MS = 300;

export function useCharacter(id: string | null) {
  const [character, setCharacter] = useState<Character | null>(
    id ? getCharacter(id) : null
  );
  const saveTimer = useRef<number | null>(null);

  useEffect(() => {
    if (!character) return;
    if (saveTimer.current !== null) clearTimeout(saveTimer.current);
    saveTimer.current = window.setTimeout(() => {
      updateCharacter({ ...character, updatedAt: nowIso() });
    }, SAVE_DEBOUNCE_MS);
    return () => {
      if (saveTimer.current !== null) clearTimeout(saveTimer.current);
    };
  }, [character]);

  const update = useCallback((mutator: (c: Character) => Character) => {
    setCharacter(prev => (prev ? mutator(prev) : prev));
  }, []);

  return { character, update };
}
