import PropTypes from 'prop-types';
import React from 'react';

import Label from './Label';

const PreviewSection = ({
  patient, medications, preparation, verifier,
}) => {
  const labels = medications
    .filter(medication => medication.isEnabled)
    .map(medication => (
      <Label
        key={medication.name}
        patient={patient}
        medication={medication}
        preparation={preparation}
        verifier={verifier}
      />
    ));

  return (
    <section id="preview-section" className="col-8 d-flex flex-column d-print-block">
      <Header />
      <div
        id="labels"
        className="d-flex d-print-block justify-content-around align-items-center flex-grow-1 overflow-auto flex-wrap"
      >
        {labels}
      </div>
    </section>
  );
};

PreviewSection.propTypes = {
  medications: PropTypes.arrayOf(PropTypes.object).isRequired,

  patient: PropTypes.shape({
    name: PropTypes.object,
    medicalRecordNumber: PropTypes.string,
    dateOfBirth: PropTypes.string,
  }).isRequired,

  preparation: PropTypes.string,
  verifier: PropTypes.string,
};

PreviewSection.defaultProps = {
  preparation: undefined,
  verifier: undefined,
};

const Header = () => (
  <header className="d-print-none">
    <h2 className="text-primary">Preview</h2>
  </header>
);

export default PreviewSection;
