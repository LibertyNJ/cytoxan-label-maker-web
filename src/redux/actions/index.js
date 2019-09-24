'use-strict';

import { CHANGE_FIELD, TOGGLE_INFUSION_TIME_OVERRIDE, TOGGLE_MEDICATION } from './types';

export function changeField(name, value) {
  return {
    name,
    type: CHANGE_FIELD,
    value,
  };
}

export function toggleInfusionTimeOverride(medication) {
  return {
    medication,
    type: TOGGLE_INFUSION_TIME_OVERRIDE,
  };
}

export function toggleMedication(medication) {
  return {
    medication,
    type: TOGGLE_MEDICATION,
  };
}
