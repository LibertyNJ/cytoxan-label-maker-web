import PropTypes from 'prop-types';
import React from 'react';

import FormRow from './FormRow';
import FormSubsection from './FormSubsection';
import Input from './Input';

const VerifierAndPreparationSection = props => (
  <FormSubsection heading="Verifier and preparaton">
    <FormRow>
      <Input
        type="text"
        name="verifier"
        value={props.verifier}
        label="Verifier"
        attributes={{
          placeholder: 'AB…',
          maxLength: 2,
          required: true,
        }}
        handleChange={props.handleFormControlChange}
      />
      <Input
        type="datetime-local"
        name="preparation"
        value={props.preparation}
        label="Preparation date and time"
        helpText="Time must include AM or PM"
        attributes={{
          max: '9999-12-31T23:59',
          required: true,
        }}
        handleChange={props.handleFormControlChange}
      />
    </FormRow>
  </FormSubsection>
);

VerifierAndPreparationSection.propTypes = {
  handleFormControlChange: PropTypes.func.isRequired,
  preparation: PropTypes.string.isRequired,
  verifier: PropTypes.string.isRequired,
};

export default VerifierAndPreparationSection;
