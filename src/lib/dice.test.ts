// @vitest-environment node
import { describe, it, expect, vi } from 'vitest';
import { rollD20, rollDamage, parseDiceNotation, isCrit, isFumble } from './dice';

describe('parseDiceNotation', () => {
  it('parses NdM', () => {
    expect(parseDiceNotation('1d10')).toEqual({ count: 1, sides: 10 });
    expect(parseDiceNotation('3d6')).toEqual({ count: 3, sides: 6 });
  });
  it('throws on bad input', () => {
    expect(() => parseDiceNotation('garbage')).toThrow();
  });
});

describe('rollD20', () => {
  it('returns object with d20 and total', () => {
    const r = rollD20(3);
    expect(r.d20).toBeGreaterThanOrEqual(1);
    expect(r.d20).toBeLessThanOrEqual(20);
    expect(r.modifier).toBe(3);
    expect(r.total).toBe(r.d20 + 3);
  });

  it('uses provided RNG', () => {
    const rng = vi.fn(() => 0.5);  // 0.5 * 20 = 10, floor = 10, +1 = 11
    const r = rollD20(0, rng);
    expect(r.d20).toBe(11);
  });
});

describe('rollDamage', () => {
  it('rolls multiple dice and sums them', () => {
    const rng = vi.fn(() => 0.999);
    const r = rollDamage('2d6', 1, rng);
    expect(r.rolls).toEqual([6, 6]);
    expect(r.total).toBe(13);
  });
});

describe('isCrit / isFumble', () => {
  it('crit on nat 20', () => {
    expect(isCrit({ d20: 20, modifier: 0, total: 20 })).toBe(true);
    expect(isCrit({ d20: 19, modifier: 5, total: 24 })).toBe(false);
  });
  it('fumble on nat 1', () => {
    expect(isFumble({ d20: 1, modifier: 0, total: 1 })).toBe(true);
  });
});
