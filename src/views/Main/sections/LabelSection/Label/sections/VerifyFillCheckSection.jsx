'use-strict';

import PropTypes from 'prop-types';
import React from 'react';

import LabelRow from '../components/LabelRow';
import LabelSection from '../components/LabelSection';

VerifyFillCheckSection.propTypes = {
  verifier: PropTypes.string,
};

export default function VerifyFillCheckSection({ verifier, ...restProps }) {
  return (
    <LabelSection {...restProps}>
      <LabelRow className="mt-3">
        <p>Verify: {verifier || '____'}</p>
        <p>Fill: ____</p>
        <p>Check: ____</p>
      </LabelRow>
    </LabelSection>
  );
}
