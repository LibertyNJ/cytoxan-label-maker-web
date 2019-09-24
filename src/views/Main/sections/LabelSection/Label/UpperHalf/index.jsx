'use-strict';

import PropTypes from 'prop-types';
import React from 'react';
import { reduceClassName } from '../../../../../../util';

import Header from '../components/Header';
import ExpirationPreparationSection from '../sections/ExpirationPreparationSection';
import MedicationSection from '../sections/MedicationSection';
import PatientSection from '../sections/PatientSection';
import VerifyFillCheckSection from '../sections/VerifyFillCheckSection';

UpperHalf.propTypes = {
  className: PropTypes.string,
  medication: PropTypes.shape({
    isEnabled: PropTypes.bool,
  }).isRequired,
  patient: PropTypes.shape({
    name: PropTypes.object,
    medicalRecordNumber: PropTypes.string,
    dateOfBirth: PropTypes.string,
  }).isRequired,
  preparation: PropTypes.string,
  verifier: PropTypes.string,
};

export default function UpperHalf({
  className, patient, medication, preparation, verifier,
}) {
  return (
    <div className={reduceClassName('label__upper-half', className)}>
      <Header />
      <PatientSection {...patient} />
      <MedicationSection {...medication} />
      <ExpirationPreparationSection preparation={preparation} />
      <VerifyFillCheckSection verifier={verifier} />
    </div>
  );
}
