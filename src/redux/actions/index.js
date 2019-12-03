import {
  CHANGE_MEDICATION,
  CHANGE_PATIENT,
  CHANGE_PREPARATION_DATE,
  CHANGE_VERIFIER,
  TOGGLE_INFUSION_TIME_OVERRIDE,
  TOGGLE_MEDICATION,
} from './types';

export function changeMedication(medication, name, value) {
  return {
    medication,
    name,
    type: CHANGE_MEDICATION,
    value,
  };
}

export function changePatient(name, value) {
  return {
    name,
    type: CHANGE_PATIENT,
    value,
  };
}

export function changePreparationDate(value) {
  return {
    type: CHANGE_PREPARATION_DATE,
    value,
  };
}

export function changeVerifier(value) {
  return {
    type: CHANGE_VERIFIER,
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
