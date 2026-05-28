import { getCondition } from '../../data/conditions';

type Props = {
  conditionId: string;
  onRemove?: () => void;
  title?: string;
};

export function ConditionChip({ conditionId, onRemove, title }: Props) {
  const cond = getCondition(conditionId);
  return (
    <span class={`cond cond-${cond.category}`} title={title ?? cond.description}>
      {cond.name}
      {onRemove && (
        <button class="cond-remove" onClick={onRemove} aria-label={`Remove ${cond.name}`}>×</button>
      )}
    </span>
  );
}
