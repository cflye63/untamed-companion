import { useState } from 'preact/hooks';
import { rollD20, isCrit, isFumble, type D20Roll } from '../../lib/dice';

type Props = {
  label: string;
  modifier: number;
  onRoll?: (result: D20Roll) => void;
};

export function DiceRoller({ label, modifier, onRoll }: Props) {
  const [last, setLast] = useState<D20Roll | null>(null);

  const click = () => {
    const r = rollD20(modifier);
    setLast(r);
    onRoll?.(r);
  };

  return (
    <span class="dice-roller">
      <button class="btn" onClick={click} title={`Roll ${label}: d20 + ${modifier}`}>🎲</button>
      {last && (
        <span class={`roll-result ${isCrit(last) ? 'crit' : ''} ${isFumble(last) ? 'fumble' : ''}`}>
          {last.total} <small>({last.d20}{modifier >= 0 ? `+${modifier}` : modifier})</small>
        </span>
      )}
    </span>
  );
}
