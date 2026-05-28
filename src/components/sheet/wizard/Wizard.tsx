import { useState } from 'preact/hooks';
import type { Character } from '../../../types/character';
import { newCharacterId, nowIso, addCharacter } from '../../../lib/storage';
import { StepIdentity } from './StepIdentity';
import { StepRace } from './StepRace';
import { StepBackground } from './StepBackground';
import { StepStats } from './StepStats';
import { StepWeapon } from './StepWeapon';
import { StepReview } from './StepReview';

const STEPS = ['Identity', 'Race', 'Background', 'Stats', 'Weapon', 'Review'] as const;

function emptyCharacter(): Character {
  return {
    schemaVersion: 1,
    id: newCharacterId(),
    createdAt: nowIso(),
    updatedAt: nowIso(),
    name: '',
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
      currentHp: 0, currentStamina: 0,
      conditions: [],
      actionEconomy: { actionUsed: false, fastActionUsed: false, reactionUsed: false, breathingTurn: false },
      exhausted: false,
    },
    bio: { journal: [] },
  };
}

type Props = {
  onClose: () => void;
};

export function Wizard({ onClose }: Props) {
  const [stepIdx, setStepIdx] = useState(0);
  const [draft, setDraft] = useState<Character>(emptyCharacter());

  const next = () => setStepIdx(i => Math.min(STEPS.length - 1, i + 1));
  const back = () => setStepIdx(i => Math.max(0, i - 1));

  const finish = () => {
    const finalChar: Character = {
      ...draft,
      updatedAt: nowIso(),
      liveState: {
        ...draft.liveState,
        currentHp: draft.baseStats.CON * 8 + draft.hunterRank,
        currentStamina: Math.max(1, 6 + Math.floor(draft.baseStats.CON / 2)),
      },
    };
    addCharacter(finalChar);
    window.location.href = `/character/sheet?id=${finalChar.id}`;
  };

  const step = STEPS[stepIdx];
  return (
    <div class="wizard-modal">
      <div class="wizard-progress">
        {STEPS.map((label, i) => (
          <div key={label} class={`wizard-step ${i === stepIdx ? 'active' : i < stepIdx ? 'done' : ''}`}>
            <span class="step-num">{i + 1}</span>
            <span class="step-label">{label}</span>
          </div>
        ))}
      </div>
      <div class="wizard-body">
        {step === 'Identity'   && <StepIdentity draft={draft} setDraft={setDraft} />}
        {step === 'Race'       && <StepRace draft={draft} setDraft={setDraft} />}
        {step === 'Background' && <StepBackground draft={draft} setDraft={setDraft} />}
        {step === 'Stats'      && <StepStats draft={draft} setDraft={setDraft} />}
        {step === 'Weapon'     && <StepWeapon draft={draft} setDraft={setDraft} />}
        {step === 'Review'     && <StepReview draft={draft} />}
      </div>
      <div class="wizard-nav">
        <button class="btn btn-secondary" onClick={onClose}>Cancel</button>
        <button class="btn btn-secondary" onClick={back} disabled={stepIdx === 0}>Back</button>
        {stepIdx < STEPS.length - 1 ? (
          <button class="btn" onClick={next} disabled={!isStepValid(step, draft)}>Next</button>
        ) : (
          <button class="btn" onClick={finish} disabled={!isStepValid(step, draft)}>Create Character</button>
        )}
      </div>
    </div>
  );
}

function isStepValid(step: typeof STEPS[number], draft: Character): boolean {
  switch (step) {
    case 'Identity':   return !!draft.name.trim();
    case 'Race':       return !!draft.raceId;
    case 'Background': return draft.backgroundIds.length > 0;
    case 'Stats':      return statSum(draft.baseStats) === 18;
    case 'Weapon':     return draft.weapons.length > 0;
    case 'Review':     return true;
  }
}

function statSum(s: Character['baseStats']): number {
  return s.STR + s.DEX + s.CON + s.INT + s.INS + s.CHA;
}
