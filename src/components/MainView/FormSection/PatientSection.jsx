import PropTypes from 'prop-types';
import React from 'react';

import FormSubsection from './FormSubsection';
import FormRow from './FormRow';
import Input from './Input';

const PatientSection = ({ patient, handleFormControlChange }) => (
  <FormSubsection heading="Patient">
    <PatientNameFieldset {...patient.name} handleFormControlChange={handleFormControlChange} />
    <FormRow>
      <Input
        type="text"
        name="patientMedicalRecordNumber"
        value={patient.medicalRecordNumber}
        label="MRN"
        attributes={{
          placeholder: '12345678…',
          maxLength: 8,
          required: true,
        }}
        handleChange={handleFormControlChange}
      />
      <Input
        type="date"
        name="patientDateOfBirth"
        value={patient.dateOfBirth}
        label="Date of birth"
        attributes={{
          max: '9999-12-31',
          required: true,
        }}
        handleChange={handleFormControlChange}
      />
    </FormRow>
  </FormSubsection>
);

PatientSection.propTypes = {
  handleFormControlChange: PropTypes.func.isRequired,

  patient: PropTypes.shape({
    name: PropTypes.object,
    medicalRecordNumber: PropTypes.string,
    dateOfBirth: PropTypes.string,
  }).isRequired,
};

const PatientNameFieldset = props => (
  <fieldset className="form-group mb-0">
    <legend>Name</legend>
    <FormRow>
      <Input
        type="text"
        name="patientNameLast"
        value={props.last}
        label="Last"
        attributes={{
          placeholder: 'Doe…',
          required: true,
        }}
        handleChange={props.handleFormControlChange}
      />
      <Input
        type="text"
        name="patientNameFirst"
        value={props.first}
        label="First"
        attributes={{
          placeholder: 'John…',
          required: true,
        }}
        handleChange={props.handleFormControlChange}
      />
      <Input
        type="text"
        name="patientNameMiddleInitial"
        value={props.middleInitial}
        label="M.I."
        helpText="Optional"
        attributes={{
          placeholder: 'G…',
          maxLength: 1,
        }}
        handleChange={props.handleFormControlChange}
        wrapperClassName="col-2"
      />
    </FormRow>
  </fieldset>
);

PatientNameFieldset.propTypes = {
  first: PropTypes.string,
  handleFormControlChange: PropTypes.func.isRequired,
  last: PropTypes.string,
  middleInitial: PropTypes.string,
};

PatientNameFieldset.defaultProps = {
  first: '',
  last: '',
  middleInitial: '',
};

export default PatientSection;
