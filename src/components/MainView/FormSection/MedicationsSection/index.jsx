import PropTypes from 'prop-types';
import React from 'react';

import MedicationSubsection from './MedicationSubsection';

import Toggle from '../Toggle';
import FormSubsection from '../FormSubsection';

const MedicationsSection = ({ medications, handleFormControlChange }) => {
  const medicationSubsectionToggles = medications.map(medication => (
    <Toggle
      key={medication.name}
      type="checkbox"
      name={`${medication.name.toLowerCase()}IsEnabled`}
      checked={medication.isEnabled}
      label={medication.name}
      handleChange={handleFormControlChange}
      labelClassName="text-capitalize"
    />
  ));

  const medicationSubsections = medications
    .filter(medication => medication.isEnabled)
    .map(medication => (
      <MedicationSubsection
        key={medication.name}
        {...medication}
        handleFormControlChange={handleFormControlChange}
      />
    ));

  return (
    <FormSubsection heading="Medications">
      <fieldset className="form-group">
        <legend>Labels needed</legend>
        {medicationSubsectionToggles}
      </fieldset>
      {medicationSubsections}
    </FormSubsection>
  );
};

MedicationsSection.propTypes = {
  medications: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleFormControlChange: PropTypes.func.isRequired,
};

export default MedicationsSection;
