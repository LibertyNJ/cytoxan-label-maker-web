'use-strict';

import React from 'react';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MedicationsSection from './sections/MedicationsSection';
import PatientSection from './sections/PatientSection';
import VerifierAndPreparationSection from './sections/VerifierAndPreparationSection';
import Button from '../../../../../../components/Button';

export default function Form({ ...restProps }) {
  return (
    <form onSubmit={handleSubmit} {...restProps}>
      <PatientSection className="mb-3" />
      <MedicationsSection className="mb-3" />
      <VerifierAndPreparationSection className="mb-3" />
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
