// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { formatBonus } from './races';

describe('formatBonus', () => {
  it('formats a fixed bonus', () => {
    expect(formatBonus({ kind: 'fixed', stat: 'CON', amount: 1 })).toBe('+1 CON');
  });
  it('formats a choice bonus as "or"', () => {
    expect(formatBonus({ kind: 'choice', stats: ['STR', 'DEX'], amount: 1 })).toBe('+1 STR or DEX');
  });
  it('formats an "any" bonus', () => {
    expect(formatBonus({ kind: 'any', amount: 1 })).toBe('+1 to any stat');
  });
});
