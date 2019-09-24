'use-strict';

import PropTypes from 'prop-types';
import React from 'react';

import FormSubsection from '../FormSubsection';
import Column from '../../../../../../components/Column';
import FormRow from '../../../../../../components/FormRow';
import Input from '../../../../../../components/Input';

VerifierAndPreparationSection.propTypes = {
  handleChange: PropTypes.func.isRequired,
  preparation: PropTypes.string,
  verifier: PropTypes.string,
};

VerifierAndPreparationSection.defaultProps = {
  preparation: '',
  verifier: '',
};

export default function VerifierAndPreparationSection({
  handleChange,
  preparation,
  verifier,
  ...restProps
}) {
  return (
    <FormSubsection heading="Verifier and preparaton" {...restProps}>
      <FormRow>
        <Column>
          <Input
            label="Verifier"
            maxLength={2}
            name="verifier"
            onChange={handleChange}
            placeholder="AB…"
            required
            type="text"
            value={verifier}
          />
        </Column>
        <Column>
          <Input
            info="Must include AM or PM"
            label="Preparation date and time"
            max="9999-12-31T23:59"
            name="preparation"
            onChange={handleChange}
            required
            type="datetime-local"
            value={preparation}
          />
        </Column>
      </FormRow>
    </FormSubsection>
  );
}
