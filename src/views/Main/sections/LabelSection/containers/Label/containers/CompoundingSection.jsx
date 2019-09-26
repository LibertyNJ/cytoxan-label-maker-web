'use-strict';

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import LabelRow from '../components/LabelRow';
import LabelSection from '../components/LabelSection';
import { formatNumberAsString } from '../../../../../../../util';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CompoundingSection);

function mapStateToProps(state, { medication: { name } }) {
  return {
    strength: state.medications[name].strength,
  };
}

function mapDispatchToProps() {
  return {};
}

CompoundingSection.propTypes = {
  medication: PropTypes.shape({
    concentration: PropTypes.number,
    diluent: PropTypes.shape({
      getVolumeFromStrength: PropTypes.func,
      product: PropTypes.string,
    }),
    product: PropTypes.string,
  }).isRequired,
  strength: PropTypes.string.isRequired,
};

function CompoundingSection({
  medication: { concentration, diluent, product },
  strength,
  ...restProps
}) {
  const medicationVolume = calculateMedicationVolume(strength, concentration);
  const diluentVolume = diluent.getVolumeFromStrength(strength);
  const totalVolume = calculateTotalVolume(medicationVolume, diluentVolume);
  return (
    <LabelSection {...restProps}>
      <LabelRow>
        <p>{product}</p>
        <p>{formatNumberAsString(medicationVolume)} mL</p>
      </LabelRow>
      <LabelRow>
        <p>{diluent.product}</p>
        <p>{diluentVolume} mL</p>
      </LabelRow>
      <LabelRow>
        <p className="ml-auto">Total volume: {formatNumberAsString(totalVolume)} mL</p>
      </LabelRow>
    </LabelSection>
  );
}

function calculateMedicationVolume(strength, concentration) {
  return Number(strength) / concentration;
}

function calculateTotalVolume(medicationVolume, diluentVolume) {
  return medicationVolume + diluentVolume;
}
