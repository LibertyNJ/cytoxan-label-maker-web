'use-strict';

import PropTypes from 'prop-types';
import React from 'react';
import { reduceClassName } from '../../../../../../util';

import CompoundingNotice from '../components/CompoundingNotice';
import CompoundingSection from '../sections/CompoundingSection';
import ExpirationPreparationSection from '../sections/ExpirationPreparationSection';
import PatientSection from '../sections/PatientSection';
import VerifyFillCheckSection from '../sections/VerifyFillCheckSection';

LowerHalf.propTypes = {
  className: PropTypes.string,
  medication: PropTypes.shape({
    isEnabled: PropTypes.bool,
  }).isRequired,
  patient: PropTypes.shape({
    dateOfBirth: PropTypes.string,
    medicalRecordNumber: PropTypes.string,
    name: PropTypes.object,
  }).isRequired,
  preparation: PropTypes.string,
  verifier: PropTypes.string,
};

export default function LowerHalf({
  className,
  medication,
  patient,
  preparation,
  verifier,
  ...restProps
}) {
  return (
    <div className={reduceClassName('label__lower-half', className)} {...restProps}>
      <CompoundingNotice />
      <PatientSection {...patient} />
      <CompoundingSection {...medication} />
      <ExpirationPreparationSection preparation={preparation} />
      <VerifyFillCheckSection verifier={verifier} />
    </div>
  );
}
