import PropTypes from 'prop-types';
import React from 'react';

import PreparationDateInput from './containers/PreparationDateInput';
import VerifierInput from './containers/VerifierInput';
import Section from '../../components/Section';
import Column from '../../../../../../../../components/Column';
import FormRow from '../../../../../../../../components/FormRow';

VerifierAndPreparationSection.propTypes = {
  preparation: PropTypes.string,
  verifier: PropTypes.string,
};

VerifierAndPreparationSection.defaultProps = {
  preparation: '',
  verifier: '',
};

export default function VerifierAndPreparationSection({ preparation, verifier, ...restProps }) {
  return (
    <Section heading="Verifier and preparation" {...restProps}>
      <FormRow>
        <Column>
          <VerifierInput
            label="Verifier"
            maxLength={2}
            name="verifier"
            placeholder="AB…"
            required
            type="text"
          />
        </Column>
        <Column>
          <PreparationDateInput
            info="Must include AM or PM"
            label="Preparation date and time"
            max="9999-12-31T23:59"
            name="preparationDate"
            required
            type="datetime-local"
          />
        </Column>
      </FormRow>
    </Section>
  );
}
