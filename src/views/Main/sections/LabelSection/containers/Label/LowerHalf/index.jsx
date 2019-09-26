'use-strict';

import PropTypes from 'prop-types';
import React from 'react';
import { reduceClassName } from '../../../../../../../util';

import CompoundingNotice from '../components/CompoundingNotice';
import CompoundingSection from '../containers/CompoundingSection';
import ExpirationPreparationSection from '../containers/ExpirationPreparationSection';
import PatientSection from '../containers/PatientSection';
import VerifyFillCheckSection from '../containers/VerifyFillCheckSection';

LowerHalf.propTypes = {
  className: PropTypes.string,
  medication: PropTypes.shape({
    concentration: PropTypes.number,
    diluent: PropTypes.shape({
      getVolumeFromStrength: PropTypes.func,
      name: PropTypes.string,
      product: PropTypes.string,
    }),
    product: PropTypes.string,
  }).isRequired,
};

export default function LowerHalf({ className, medication, ...restProps }) {
  return (
    <div className={reduceClassName('label__lower-half', className)} {...restProps}>
      <CompoundingNotice />
      <PatientSection className="my-1" />
      <CompoundingSection className="my-1" medication={medication} />
      <ExpirationPreparationSection className="my-1" />
      <VerifyFillCheckSection className="my-1" />
    </div>
  );
}
