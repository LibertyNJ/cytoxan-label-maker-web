import PropTypes from 'prop-types';
import React from 'react';

import LabelRow from './LabelRow';
import LabelSection from './LabelSection';

import formatNumberAsString from '../../../utils/format-number-as-string';

const CompoundingSection = ({
  strength, concentration, product, diluent,
}) => {
  const medicationVolume = strength || 0 / concentration;
  const totalVolume = medicationVolume + diluent.volume;

  return (
    <LabelSection>
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
};

CompoundingSection.propTypes = {
  concentration: PropTypes.number.isRequired,

  diluent: PropTypes.shape({
    product: PropTypes.string,
    volume: PropTypes.number,
  }).isRequired,

  product: PropTypes.string.isRequired,
  strength: PropTypes.string,
};

CompoundingSection.defaultProps = {
  strength: undefined,
};

export default CompoundingSection;
