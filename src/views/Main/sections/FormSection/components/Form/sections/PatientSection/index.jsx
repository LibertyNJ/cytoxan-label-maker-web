import React from 'react';

import PatientInput from './containers/PatientInput';
import Section from '../../components/Section';
import Column from '../../../../../../../../components/Column';
import FormRow from '../../../../../../../../components/FormRow';

export default function PatientSection({ ...restProps }) {
  return (
    <Section heading="Patient" {...restProps}>
      <fieldset className="form-group">
        <legend>Name</legend>
        <FormRow>
          <Column span={5}>
            <PatientInput label="Last" name="lastName" placeholder="Doe…" required type="text" />
          </Column>
          <Column span={5}>
            <PatientInput label="First" name="firstName" placeholder="John…" required type="text" />
          </Column>
          <Column span={2}>
            <PatientInput
              info="Optional"
              name="middleInitial"
              label="M.I."
              maxLength={1}
              placeholder="G…"
              type="text"
            />
          </Column>
        </FormRow>
      </fieldset>
      <FormRow>
        <Column>
          <PatientInput
            label="MRN"
            maxLength={8}
            name="medicalRecordNumber"
            placeholder="12345678…"
            required
            type="text"
          />
        </Column>
        <Column>
          <PatientInput
            label="Date of birth"
            max="9999-12-31"
            name="dateOfBirth"
            required
            type="date"
          />
        </Column>
      </FormRow>
    </Section>
  );
}
