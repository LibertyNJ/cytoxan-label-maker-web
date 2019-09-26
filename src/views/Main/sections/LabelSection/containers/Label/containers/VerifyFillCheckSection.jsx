'use-strict';

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import LabelRow from '../components/LabelRow';
import LabelSection from '../components/LabelSection';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VerifyFillCheckSection);

function mapStateToProps(state) {
  return {
    verifier: state.verifier,
  };
}

function mapDispatchToProps() {
  return {};
}

VerifyFillCheckSection.propTypes = {
  verifier: PropTypes.string.isRequired,
};

function VerifyFillCheckSection({ verifier, ...restProps }) {
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
