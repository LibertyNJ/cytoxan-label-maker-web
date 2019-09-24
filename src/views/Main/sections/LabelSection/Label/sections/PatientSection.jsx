'use-strict';

import PropTypes from 'prop-types';
import React from 'react';

import LabelRow from '../components/LabelRow';
import LabelSection from '../components/LabelSection';
import { isInvalidDate } from '../../../../../../util';

PatientSection.propTypes = {
  dateOfBirth: PropTypes.string,
  medicalRecordNumber: PropTypes.string,
  name: PropTypes.shape({
    last: PropTypes.string,
    first: PropTypes.string,
    middleInitial: PropTypes.string,
  }).isRequired,
};

export default function PatientSection({
  dateOfBirth, medicalRecordNumber, name, ...restProps
}) {
  const formattedDateOfBirth = formatDateAsString(new Date(formatDateAsISOString(dateOfBirth)));
  return (
    <LabelSection {...restProps}>
      <LabelRow>
        <p className="font-weight-bold">
          {name.last || 'Last'}, {name.first || 'First'} {name.middleInitial || ''}
        </p>
      </LabelRow>
      <LabelRow>
        <p>MRN: {medicalRecordNumber || '########'}</p>
        <p>DoB: {formattedDateOfBirth}</p>
      </LabelRow>
    </LabelSection>
  );
}

function formatDateAsString(date) {
  const DATE_FORMAT = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };
  return isInvalidDate(date) ? 'MM/DD/YYYY' : date.toLocaleString('en-US', DATE_FORMAT);
}

function formatDateAsISOString(date) {
  return `${date}T00:00:00`;
}
