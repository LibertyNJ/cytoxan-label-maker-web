import PropTypes from 'prop-types';
import React from 'react';

import LabelRow from './LabelRow';
import LabelSection from './LabelSection';

const VerifyFillCheckSection = ({ verifier }) => (
  <LabelSection className="mt-3">
    <LabelRow>
      <p>Verify: {verifier || '____'}</p>
      <p>Fill: ____</p>
      <p>Check: ____</p>
    </LabelRow>
  </LabelSection>
);

VerifyFillCheckSection.propTypes = {
  verifier: PropTypes.string,
};

VerifyFillCheckSection.defaultProps = {
  verifier: undefined,
};

export default VerifyFillCheckSection;
