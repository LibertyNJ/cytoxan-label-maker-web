import PropTypes from 'prop-types';
import React from 'react';
import { reduceClassNames } from '../../../../../../../util';

import ExpirationPreparationSection from '../containers/ExpirationPreparationSection';
import Header from '../containers/Header';
import MedicationSection from '../containers/MedicationSection';
import PatientSection from '../containers/PatientSection';
import VerifyFillCheckSection from '../containers/VerifyFillCheckSection';

UpperHalf.propTypes = {
  className: PropTypes.string,
  medication: PropTypes.shape({
    concentration: PropTypes.number,
    diluent: PropTypes.shape({
      getVolumeFromStrength: PropTypes.func,
      name: PropTypes.string,
    }),
    name: PropTypes.string,
  }).isRequired,
};

export default function UpperHalf({ className, medication, ...restProps }) {
  return (
    <div
      className={reduceClassNames('label__upper-half', className)}
      {...restProps}
    >
      <Header />
      <PatientSection className="my-1" />
      <MedicationSection className="my-1" medication={medication} />
      <ExpirationPreparationSection className="my-1" />
      <VerifyFillCheckSection className="my-1" />
    </div>
  );
}
