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

  it('shows the redesigned detail panel header, chips, complexity, pitch, and pairings', () => {
    const draft = draftCharacter();
    draft.weapons = [{ weaponId: 'hammer', huntsCompleted: 5, isPrimary: true }];
    draft.primaryWeaponId = 'hammer';
    const { getByRole, getByText, container } = render(
      <StepWeapon draft={draft} setDraft={() => {}} />
    );
    getByRole('heading', { name: 'Hammer', level: 4 });
    getByText('Breaker • Controller');
    getByText('STR');
    getByText('1d12');
    getByText('+1 Power Die');
    expect(container.querySelectorAll('.star--filled').length).toBe(3);
    expect(container.querySelector('.weapon-pitch')?.textContent).toBe(
      'Stack Sunder to crack armor open for the whole party.'
    );
    getByText(/Pairs well with:/);
    getByText(/Juggernaut/);
  });

  it('renders the core mechanic callout with name and bullets', () => {
    const draft = draftCharacter();
    draft.weapons = [{ weaponId: 'hammer', huntsCompleted: 5, isPrimary: true }];
    draft.primaryWeaponId = 'hammer';
    const { getByText } = render(<StepWeapon draft={draft} setDraft={() => {}} />);
    getByText('Core Mechanic — Sunder');
    getByText('Each hit adds +1 Sunder to a target, up to 3.');
  });

  it('shows the Tier 1 technique open and Tiers 2–5 as collapsed future unlocks', () => {
    const draft = draftCharacter();
    draft.weapons = [{ weaponId: 'hammer', huntsCompleted: 5, isPrimary: true }];
    draft.primaryWeaponId = 'hammer';
    const { getByText, container } = render(<StepWeapon draft={draft} setDraft={() => {}} />);
    const openDetails = container.querySelector('details.technique-row[open]');
    expect(openDetails).not.toBeNull();
    expect(openDetails?.textContent).toContain('Cratering Blow');
    const future2 = getByText('Tier 2 — Armor Breaker').closest('details');
    expect(future2).not.toBeNull();
    expect(future2?.hasAttribute('open')).toBe(false);
    getByText('Tier 3 — Aftershock');
    getByText('Tier 4 — Seismic Slam');
    getByText('Tier 5 — Shatterfall');
  });

  it('keeps the full rules prose in a collapsed details section', () => {
    const draft = draftCharacter();
    draft.weapons = [{ weaponId: 'hammer', huntsCompleted: 5, isPrimary: true }];
    draft.primaryWeaponId = 'hammer';
    const { getByText } = render(<StepWeapon draft={draft} setDraft={() => {}} />);
    const fullRules = getByText('Full rules').closest('details');
    expect(fullRules).not.toBeNull();
    expect(fullRules?.hasAttribute('open')).toBe(false);
    expect(fullRules?.textContent).toContain('Force multiplier weapon that builds Sunder');
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
