'use-strict';

import {
  changeMedication,
  changePatient,
  changePreparationDate,
  changeVerifier,
  toggleInfusionTimeOverride,
  toggleMedication,
} from './index';
import {
  CHANGE_MEDICATION,
  CHANGE_PATIENT,
  CHANGE_PREPARATION_DATE,
  CHANGE_VERIFIER,
  TOGGLE_INFUSION_TIME_OVERRIDE,
  TOGGLE_MEDICATION,
} from './types';

describe('changeMedication(medication, name, value)', () => {
  test('Returns an object of type CHANGE_MEDICATION with correct properties.', () => {
    expect(changeMedication('foo', 'bar', 'baz')).toEqual({
      medication: 'foo',
      name: 'bar',
      type: CHANGE_MEDICATION,
      value: 'baz',
    });
  });
});

describe('changePatient(name, value)', () => {
  test('Returns an object of type CHANGE_PATIENT with correct properties.', () => {
    expect(changePatient('foo', 'bar')).toEqual({
      name: 'foo',
      type: CHANGE_PATIENT,
      value: 'bar',
    });
  });
});

describe('changePreparationDate(value)', () => {
  test('Returns an object of type CHANGE_PREPARATION_DATE with correct properties.', () => {
    expect(changePreparationDate('foo')).toEqual({
      type: CHANGE_PREPARATION_DATE,
      value: 'foo',
    });
  });
});

describe('changeVerifier(value)', () => {
  test('Returns an object of type CHANGE_VERIFIER with correct properties.', () => {
    expect(changeVerifier('foo')).toEqual({
      type: CHANGE_VERIFIER,
      value: 'foo',
    });
  });
});

describe('toggleInfusionTimeOverride(medication)', () => {
  test('Returns an object of type TOGGLE_INFUSION_TIME_OVERRIDE with correct properties.', () => {
    expect(toggleInfusionTimeOverride('foo')).toEqual({
      medication: 'foo',
      type: TOGGLE_INFUSION_TIME_OVERRIDE,
    });
  });
});

describe('toggleMedication(medication)', () => {
  test('Returns an object of type TOGGLE_MEDICATION with correct properties.', () => {
    expect(toggleMedication('foo')).toEqual({
      medication: 'foo',
      type: TOGGLE_MEDICATION,
    });
  });
});
