// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { milestonesAt } from './levelup';

describe('milestonesAt', () => {
  it('returns empty for HR 0', () => {
    expect(milestonesAt(0)).toEqual([]);
  });
  it('flags HP recalc every HR', () => {
    expect(milestonesAt(1)).toContainEqual({ kind: 'hp-recalc', hr: 1 });
  });
  it('flags stat points every 4 HR', () => {
    expect(milestonesAt(4)).toContainEqual({ kind: 'stat-points', hr: 4, points: 2 });
    expect(milestonesAt(8)).toContainEqual({ kind: 'stat-points', hr: 8, points: 2 });
  });
  it('flags talent + free CON every 5 HR', () => {
    expect(milestonesAt(5)).toContainEqual({ kind: 'free-con', hr: 5 });
    expect(milestonesAt(5)).toContainEqual({ kind: 'talent', hr: 5 });
  });
  it('flags spec every 10 HR', () => {
    expect(milestonesAt(10)).toContainEqual({ kind: 'spec', hr: 10 });
  });
  it('flags tier on band boundaries', () => {
    expect(milestonesAt(5)).toContainEqual({ kind: 'tier', hr: 5, tier: 2 });
    expect(milestonesAt(10)).toContainEqual({ kind: 'tier', hr: 10, tier: 3 });
    expect(milestonesAt(26)).toContainEqual({ kind: 'tier', hr: 26, tier: 6 });
  });
});
