'use-strict';

import PropTypes from 'prop-types';
import React from 'react';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MedicationsSection from './sections/MedicationsSection';
import PatientSection from './sections/PatientSection';
import VerifierAndPreparationSection from './sections/VerifierAndPreparationSection';
import Button from '../../../../../components/Button';

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  medications: PropTypes.arrayOf(PropTypes.object).isRequired,
  patient: PropTypes.shape({
    dateOfBirth: PropTypes.string,
    medicalRecordNumber: PropTypes.string,
    name: PropTypes.object,
  }).isRequired,
  preparation: PropTypes.string,
  verifier: PropTypes.string,
};

export default function Form({
  handleChange,
  medications,
  patient,
  preparation,
  verifier,
  ...restProps
}) {
  return (
    <form onSubmit={handleSubmit} {...restProps}>
      <PatientSection className="mb-3" patient={patient} handleChange={handleChange} />
      <MedicationsSection className="mb-3" handleChange={handleChange} medications={medications} />
      <VerifierAndPreparationSection
        className="mb-3"
        handleChange={handleChange}
        preparation={preparation}
        verifier={verifier}
      />
      <Button className="btn-lg btn-primary d-block ml-auto " type="submit">
        <FontAwesomeIcon icon={faPrint} /> Print
      </Button>
    </form>
  );
}

function handleSubmit(event) {
  event.preventDefault();
  window.print();
}
