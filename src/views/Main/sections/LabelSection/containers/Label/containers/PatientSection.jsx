'use-strict';

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import LabelRow from '../components/LabelRow';
import LabelSection from '../components/LabelSection';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PatientSection);

function mapStateToProps(state) {
  return {
    dateOfBirth: state.patient.dateOfBirth,
    firstName: state.patient.firstName,
    lastName: state.patient.lastName,
    medicalRecordNumber: state.patient.medicalRecordNumber,
    middleInitial: state.patient.middleInitial,
  };
}

function mapDispatchToProps() {
  return {};
}

PatientSection.propTypes = {
  dateOfBirth: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  medicalRecordNumber: PropTypes.string.isRequired,
  middleInitial: PropTypes.string.isRequired,
};

function PatientSection({
  dateOfBirth,
  firstName,
  lastName,
  medicalRecordNumber,
  middleInitial,
  ...restProps
}) {
  return (
    <LabelSection {...restProps}>
      <LabelRow>
        <p className="font-weight-bold">
          {lastName || 'Last'}, {firstName || 'First'} {middleInitial || ''}
        </p>
      </LabelRow>
      <LabelRow>
        <p>MRN: {medicalRecordNumber || '########'}</p>
        <p>
          DoB:{' '}
          {dateOfBirth
            ? formatDateAsString(new Date(formatDateAsISOString(dateOfBirth)))
            : 'MM/DD/YYYY'}
        </p>
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
  return date.toLocaleString('en-US', DATE_FORMAT);
}

function formatDateAsISOString(date) {
  return `${date}T00:00:00`;
}
