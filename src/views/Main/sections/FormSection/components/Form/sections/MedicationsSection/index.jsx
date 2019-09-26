'use-strict';

import React from 'react';

import Subsection from './components/Subsection';
import MedicationToggle from './containers/MedicationToggle';
import Section from '../../components/Section';
import { medications } from '../../../../../../../../config';

export default function MedicationsSection({ ...restProps }) {
  const medicationSubsections = mapToMedicationSubsections(medications);
  const medicationToggles = mapToMedicationToggles(medications);
  return (
    <Section heading="Medications" {...restProps}>
      <fieldset className="form-group">{medicationToggles}</fieldset>
      {medicationSubsections}
    </Section>
  );
}

function mapToMedicationSubsections(medications) {
  return medications.map(({ name, placeholders }) => (
    <Subsection className="mb-3" key={name} name={name} placeholders={placeholders} />
  ));
}

function mapToMedicationToggles(medications) {
  return medications.map(({ name }) => (
    <MedicationToggle
      key={name}
      label={name}
      labelClassName="text-capitalize"
      name={name}
      type="checkbox"
    />
  ));
}
