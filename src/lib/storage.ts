import type { Character } from '../types/character';

export const ROSTER_KEY = 'untamed_roster_v1';

export type Roster = { characters: Character[] };

export function loadRoster(): Roster {
  try {
    const raw = localStorage.getItem(ROSTER_KEY);
    if (!raw) return { characters: [] };
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.characters)) return { characters: [] };
    return parsed as Roster;
  } catch {
    return { characters: [] };
  }
}

export function saveRoster(roster: Roster): void {
  localStorage.setItem(ROSTER_KEY, JSON.stringify(roster));
}

export function addCharacter(c: Character): void {
  const r = loadRoster();
  r.characters.push(c);
  saveRoster(r);
}

export function updateCharacter(c: Character): void {
  const r = loadRoster();
  const i = r.characters.findIndex(x => x.id === c.id);
  if (i === -1) r.characters.push(c);
  else r.characters[i] = c;
  saveRoster(r);
}

export function deleteCharacter(id: string): void {
  const r = loadRoster();
  r.characters = r.characters.filter(c => c.id !== id);
  saveRoster(r);
}

export function getCharacter(id: string): Character | null {
  return loadRoster().characters.find(c => c.id === id) ?? null;
}

export function exportCharacter(c: Character): string {
  return JSON.stringify(c, null, 2);
}

export function newCharacterId(): string {
  return crypto.randomUUID();
}

export function nowIso(): string {
  return new Date().toISOString();
}
