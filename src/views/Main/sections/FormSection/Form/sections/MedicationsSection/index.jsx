'use-strict';

import PropTypes from 'prop-types';
import React from 'react';

import MedicationSubsection from './MedicationSubsection';
import FormSubsection from '../../FormSubsection';
import Toggle from '../../../../../../../components/Toggle';
import { filterToEnabledMedications } from '../../../../../../../util';

MedicationsSection.propTypes = {
  handleChange: PropTypes.func.isRequired,
  medications: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function MedicationsSection({ medications, handleChange, ...restProps }) {
  const enabledMedications = filterToEnabledMedications(medications);
  const medicationSubsections = mapToMedicationSubsections(enabledMedications, handleChange);
  const medicationToggles = mapToMedicationToggles(medications, handleChange);
  return (
    <FormSubsection heading="Medications" {...restProps}>
      <fieldset className="form-group">{medicationToggles}</fieldset>
      {medicationSubsections}
    </FormSubsection>
  );
}

function mapToMedicationSubsections(medications, handleChange) {
  return medications.map(medication => (
    <MedicationSubsection
      className="mb-3"
      handleChange={handleChange}
      key={medication.name}
      {...medication}
    />
  ));
}

function mapToMedicationToggles(medications, handleChange) {
  return medications.map(({ isEnabled, name }) => (
    <Toggle
      checked={isEnabled}
      key={name}
      label={name}
      labelClassName="text-capitalize"
      name={`${name.toLowerCase()}IsEnabled`}
      onChange={handleChange}
      type="checkbox"
    />
  ));
}
