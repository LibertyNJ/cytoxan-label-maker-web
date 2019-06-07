import PropTypes from 'prop-types';
import React from 'react';

import LabelRow from './LabelRow';
import LabelSection from './LabelSection';

const PatientSection = ({ name, medicalRecordNumber, dateOfBirth }) => {
  const dateOfBirthString = getDateString(new Date(formatDateAsISOString(dateOfBirth)));

  function formatDateAsISOString(date) {
    return `${date}T00:00:00`;
  }

  function getDateString(date) {
    if (isInvalidDate(date)) {
      return 'MM/DD/YYYY';
    }

    const dateFormat = { month: '2-digit', day: '2-digit', year: 'numeric' };
    return date.toLocaleString('en-US', dateFormat);
  }

  function isInvalidDate(date) {
    return date.toString() === 'Invalid Date';
  }

  return (
    <LabelSection>
      <LabelRow>
        <p className="font-weight-bold">
          {name.last || 'Last'}, {name.first || 'First'} {name.middleInitial || ''}
        </p>
      </LabelRow>
      <LabelRow>
        <p>MRN: {medicalRecordNumber || '########'}</p>
        <p>DoB: {dateOfBirthString}</p>
      </LabelRow>
    </LabelSection>
  );
};

PatientSection.propTypes = {
  dateOfBirth: PropTypes.string,
  medicalRecordNumber: PropTypes.string,

  name: PropTypes.shape({
    last: PropTypes.string,
    first: PropTypes.string,
    middleInitial: PropTypes.string,
  }).isRequired,
};

PatientSection.defaultProps = {
  dateOfBirth: undefined,
  medicalRecordNumber: undefined,
};

export default PatientSection;
