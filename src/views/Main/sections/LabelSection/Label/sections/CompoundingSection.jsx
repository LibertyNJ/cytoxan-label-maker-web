'use-strict';

import PropTypes from 'prop-types';
import React from 'react';

import LabelRow from '../components/LabelRow';
import LabelSection from '../components/LabelSection';
import { formatNumberAsString } from '../../../../../../util';

CompoundingSection.propTypes = {
  concentration: PropTypes.number.isRequired,
  diluent: PropTypes.shape({
    product: PropTypes.string,
    volume: PropTypes.number,
  }).isRequired,
  product: PropTypes.string.isRequired,
  strength: PropTypes.string,
};

export default function CompoundingSection({
  concentration,
  diluent,
  product,
  strength,
  ...restProps
}) {
  const medicationVolume = calculateMedicationVolume(strength, concentration);
  const totalVolume = calculateTotalVolume(medicationVolume, diluent.volume);
  return (
    <LabelSection {...restProps}>
      <LabelRow>
        <p>{product}</p>
        <p>{formatNumberAsString(medicationVolume)} mL</p>
      </LabelRow>
      <LabelRow>
        <p>{diluent.product}</p>
        <p>{diluent.volume} mL</p>
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
