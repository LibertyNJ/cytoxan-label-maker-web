import PropTypes from 'prop-types';
import React from 'react';

import FormSubsection from '../FormSubsection';
import Column from '../../../../../../components/Column';
import FormRow from '../../../../../../components/FormRow';
import Input from '../../../../../../components/Input';

PatientSection.propTypes = {
  handleChange: PropTypes.func.isRequired,
  patient: PropTypes.shape({
    dateOfBirth: PropTypes.string,
    medicalRecordNumber: PropTypes.string,
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string,
      middleInitial: PropTypes.string,
    }),
  }).isRequired,
};

export default function PatientSection({
  handleChange,
  patient: {
    dateOfBirth,
    medicalRecordNumber,
    name: { first, last, middleInitial },
  },
  ...restProps
}) {
  return (
    <FormSubsection heading="Patient" {...restProps}>
      <fieldset className="form-group">
        <legend>Name</legend>
        <FormRow>
          <Column span={5}>
            <Input
              label="Last"
              name="patientNameLast"
              onChange={handleChange}
              placeholder="Doe…"
              required
              type="text"
              value={last}
            />
          </Column>
          <Column span={5}>
            <Input
              label="First"
              name="patientNameFirst"
              onChange={handleChange}
              placeholder="John…"
              required
              type="text"
              value={first}
            />
          </Column>
          <Column span={2}>
            <Input
              info="Optional"
              label="M.I."
              maxLength={1}
              name="patientNameMiddleInitial"
              onChange={handleChange}
              placeholder="G…"
              type="text"
              value={middleInitial}
            />
          </Column>
        </FormRow>
      </fieldset>
      <FormRow>
        <Column>
          <Input
            label="MRN"
            maxLength={8}
            name="patientMedicalRecordNumber"
            onChange={handleChange}
            placeholder="12345678…"
            required
            type="text"
            value={medicalRecordNumber}
          />
        </Column>
        <Column>
          <Input
            label="Date of birth"
            max="9999-12-31"
            name="patientDateOfBirth"
            onChange={handleChange}
            required
            type="date"
            value={dateOfBirth}
          />
        </Column>
      </FormRow>
    </FormSubsection>
  );
}
