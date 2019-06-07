import PropTypes from 'prop-types';
import React from 'react';

import CompoundingSection from './CompoundingSection';
import ExpirationPreparationSection from './ExpirationPreparationSection';
import MedicationSection from './MedicationSection';
import PatientSection from './PatientSection';
import VerifyFillCheckSection from './VerifyFillCheckSection';

import LabelRow from './LabelRow';

const Label = props => (
  <article className="label">
    <div className="label__body">
      <LabelUpperHalf {...props} />
      <LabelLowerHalf {...props} />
    </div>
  </article>
);

const LabelUpperHalf = ({
  patient, medication, preparation, verifier,
}) => (
  <div className="label__upper-half">
    <LabelHeader />
    <PatientSection {...patient} />
    <MedicationSection {...medication} />
    <ExpirationPreparationSection preparation={preparation} />
    <VerifyFillCheckSection verifier={verifier} />
  </div>
);

LabelUpperHalf.propTypes = {
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

LabelUpperHalf.defaultProps = {
  preparation: 'MM/DD/YYYY mm:hh',
  verifier: '',
};

const LabelHeader = () => (
  <header>
    <LabelRow className="mx-auto">
      <p className="text-center font-weight-bold">
        North Shore University Hospital — Pharmacy Department
      </p>
    </LabelRow>
    <LabelRow>
      <p>
        300 Community Drive <br />
        Manhasset, NY 11030
      </p>
      <p>
        DEA# AN0768917 <br />
        (516)562-4700
      </p>
    </LabelRow>
  </header>
);

const LabelLowerHalf = ({
  patient, medication, preparation, verifier,
}) => (
  <div className="label__lower-half">
    <CompoundingNotice />
    <PatientSection {...patient} />
    <CompoundingSection {...medication} />
    <ExpirationPreparationSection preparation={preparation} />
    <VerifyFillCheckSection verifier={verifier} />
  </div>
);

LabelLowerHalf.propTypes = {
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

LabelLowerHalf.defaultProps = {
  preparation: undefined,
  verifier: undefined,
};

const CompoundingNotice = () => (
  <p className="label__compounding-notice text-center font-weight-bold">
    * * * FOR COMPOUNDING ONLY * * *
  </p>
);

export default Label;
