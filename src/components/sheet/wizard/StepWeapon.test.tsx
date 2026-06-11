import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/preact';
import { StepWeapon } from './StepWeapon';
import type { Character } from '../../../types/character';

function draftCharacter(): Character {
  return {
    schemaVersion: 1,
    id: 'test-id',
    createdAt: '2026-06-11T00:00:00.000Z',
    updatedAt: '2026-06-11T00:00:00.000Z',
    name: 'Test Hunter',
    raceId: 'human',
    backgroundIds: [],
    hunterRank: 0,
    cxp: 0,
    baseStats: { STR: 3, DEX: 3, CON: 3, INT: 3, INS: 3, CHA: 3 },
    skillProficiencies: {},
    weapons: [],
    primaryWeaponId: '',
    specializations: [],
    talentIds: [],
    armor: null,
    gearSlots: Array(6).fill(null) as null[],
    packSlots: Array(10).fill(null) as null[],
    consumables: [],
    tools: [],
    knownRecipes: [],
    monsterParts: [],
    liveState: {
      currentHp: 0,
      currentStamina: 0,
      conditions: [],
      actionEconomy: { actionUsed: false, fastActionUsed: false, reactionUsed: false, breathingTurn: false },
      exhausted: false,
    },
    bio: { journal: [] },
  };
}

describe('StepWeapon', () => {
  it('renders compact cards: role badges and summary, no full description, no Best line', () => {
    const { getByText, queryByText } = render(
      <StepWeapon draft={draftCharacter()} setDraft={() => {}} />
    );
    getByText('Greatsword');
    getByText('Bruiser'); // secondary role badge
    getByText('Build Momentum with every hit to unlock crushing crits.');
    expect(queryByText(/Heavy two-handed weapon built for raw strength/)).toBeNull();
    expect(queryByText(/Best:/)).toBeNull();
  });

  it('shows a detail panel with description, techniques, and spec pairings when selected', () => {
    const draft = draftCharacter();
    draft.weapons = [{ weaponId: 'hammer', huntsCompleted: 5, isPrimary: true }];
    draft.primaryWeaponId = 'hammer';
    const { getByText } = render(<StepWeapon draft={draft} setDraft={() => {}} />);
    getByText('Hammer — Breaker · Controller');
    getByText('Cratering Blow');
    getByText(/Force multiplier weapon that builds Sunder/);
    getByText(/Pairs well with:/);
    getByText(/Juggernaut/); // juggernaut spec lists hammer in bestWith
  });

  it('hides the detail panel when nothing is selected', () => {
    const { queryByText } = render(
      <StepWeapon draft={draftCharacter()} setDraft={() => {}} />
    );
    expect(queryByText(/Pairs well with:/)).toBeNull();
    expect(queryByText('Cratering Blow')).toBeNull();
  });

  it('selecting a card calls setDraft with that weapon', () => {
    const calls: Character[] = [];
    const { getByText } = render(
      <StepWeapon draft={draftCharacter()} setDraft={(c) => calls.push(c)} />
    );
    fireEvent.click(getByText('Greatshield'));
    expect(calls[0]?.primaryWeaponId).toBe('greatshield');
    expect(calls[0]?.weapons).toEqual([
      { weaponId: 'greatshield', huntsCompleted: 5, isPrimary: true },
    ]);
  });
});
