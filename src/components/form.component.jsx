'use strict';

import React from '../scripts/react.development';

import PatientSection from '../components/patient-section.component';
import MedicationSections from './medication-sections.component';
import VerifierAndPreparationSection from '../components/verifier-and-preparation-section.component';
import PrintSection from '../components/print-section.component';

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <PatientSection />
        <MedicationSections />
        <VerifierAndPreparationSection />
        <PrintSection />
      </form>
    );
  }
}