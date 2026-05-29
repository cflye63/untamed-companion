export type Milestone =
  | { kind: 'hp-recalc'; hr: number }
  | { kind: 'stat-points'; hr: number; points: number }
  | { kind: 'free-con'; hr: number }
  | { kind: 'talent'; hr: number }
  | { kind: 'spec'; hr: number }
  | { kind: 'tier'; hr: number; tier: number };

const TIER_BOUNDARIES = new Map<number, number>([[5, 2], [10, 3], [15, 4], [20, 5], [26, 6]]);

export function milestonesAt(hr: number): Milestone[] {
  if (hr <= 0) return [];
  const out: Milestone[] = [{ kind: 'hp-recalc', hr }];
  if (hr % 4 === 0) out.push({ kind: 'stat-points', hr, points: 2 });
  if (hr % 5 === 0) {
    out.push({ kind: 'free-con', hr });
    out.push({ kind: 'talent', hr });
  }
  if (hr % 10 === 0) out.push({ kind: 'spec', hr });
  if (TIER_BOUNDARIES.has(hr)) out.push({ kind: 'tier', hr, tier: TIER_BOUNDARIES.get(hr)! });
  return out;
}

export function milestonesBetween(fromHr: number, toHr: number): Milestone[] {
  const out: Milestone[] = [];
  for (let hr = fromHr + 1; hr <= toHr; hr++) out.push(...milestonesAt(hr));
  return out;
}
