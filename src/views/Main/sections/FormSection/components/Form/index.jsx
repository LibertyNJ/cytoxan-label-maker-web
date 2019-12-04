import React from 'react';

import PrintButton from './components/PrintButton';
import FacilitySection from './sections/FacilitySection';
import MedicationsSection from './sections/MedicationsSection';
import PatientSection from './sections/PatientSection';
import VerifierAndPreparationSection from './sections/VerifierAndPreparationSection';

export default function Form({ ...restProps }) {
  return (
    <form onSubmit={handleSubmit} {...restProps}>
      <FacilitySection className="mb-3" />
      <PatientSection className="mb-3" />
      <MedicationsSection className="mb-3" />
      <VerifierAndPreparationSection className="mb-3" />
      <PrintButton className="d-block ml-auto" />
    </form>
  );
}

function handleSubmit(event) {
  event.preventDefault();
  window.print();
}
