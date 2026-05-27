export type D20Roll = {
  d20: number;
  modifier: number;
  total: number;
};

export type DamageRoll = {
  notation: string;
  rolls: number[];
  modifier: number;
  total: number;
};

export type Rng = () => number;
const defaultRng: Rng = Math.random;

function rollDie(sides: number, rng: Rng = defaultRng): number {
  return Math.floor(rng() * sides) + 1;
}

export function rollD20(modifier: number, rng: Rng = defaultRng): D20Roll {
  const d20 = rollDie(20, rng);
  return { d20, modifier, total: d20 + modifier };
}

export function parseDiceNotation(s: string): { count: number; sides: number } {
  const m = /^(\d+)d(\d+)$/.exec(s.trim().toLowerCase());
  if (!m) throw new Error(`Invalid dice notation: ${s}`);
  return { count: parseInt(m[1], 10), sides: parseInt(m[2], 10) };
}

export function rollDamage(notation: string, modifier: number, rng: Rng = defaultRng): DamageRoll {
  const { count, sides } = parseDiceNotation(notation);
  const rolls: number[] = [];
  for (let i = 0; i < count; i++) rolls.push(rollDie(sides, rng));
  const total = rolls.reduce((s, n) => s + n, 0) + modifier;
  return { notation, rolls, modifier, total };
}

export function isCrit(r: D20Roll): boolean { return r.d20 === 20; }
export function isFumble(r: D20Roll): boolean { return r.d20 === 1; }
