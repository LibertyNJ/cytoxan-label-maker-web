'use-strict';

import PropTypes from 'prop-types';
import React from 'react';

import Label from './Label';
import { filterToEnabledMedications, reduceClassName } from '../../../../util';

LabelSection.propTypes = {
  medications: PropTypes.arrayOf(PropTypes.object).isRequired,
  patient: PropTypes.shape({
    dateOfBirth: PropTypes.string,
    medicalRecordNumber: PropTypes.string,
    name: PropTypes.object,
  }).isRequired,
  preparation: PropTypes.string,
  verifier: PropTypes.string,
};

export default function LabelSection({
  className,
  medications,
  patient,
  preparation,
  verifier,
  ...restProps
}) {
  const BASE_CLASS_NAME = 'align-items-center d-flex d-print-block flex-wrap justify-content-around overflow-auto p-3';
  const enabledMedications = filterToEnabledMedications(medications);
  const labels = mapToLabels(enabledMedications, patient, preparation, verifier);
  return (
    <section
      className={reduceClassName(BASE_CLASS_NAME, className)}
      id="label-section"
      {...restProps}
    >
      {labels}
    </section>
  );
}

function mapToLabels(medications, patient, preparation, verifier) {
  return medications.map(medication => (
    <Label
      key={medication.name}
      medication={medication}
      patient={patient}
      preparation={preparation}
      verifier={verifier}
    />
  ));
}
