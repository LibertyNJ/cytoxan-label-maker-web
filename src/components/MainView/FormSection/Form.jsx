import PropTypes from 'prop-types';
import React from 'react';

import PatientSection from './PatientSection';
import MedicationsSection from './MedicationsSection';
import VerifierAndPreparationSection from './VerifierAndPreparationSection';

import Button from '../../Button';

export default class Form extends React.Component {
  static propTypes = {
    patient: PropTypes.shape({
      name: PropTypes.object,
      medicalRecordNumber: PropTypes.string,
      dateOfBirth: PropTypes.string,
    }).isRequired,

    medications: PropTypes.arrayOf(PropTypes.object).isRequired,
    verifier: PropTypes.string,
    preparation: PropTypes.string,
    handleFormControlChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    verifier: '',
    preparation: '',
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    window.print();
  };

  render = () => (
    <form className="form overflow-auto px-3 pb-3" onSubmit={this.handleFormSubmit}>
      <PatientSection
        patient={this.props.patient}
        handleFormControlChange={this.props.handleFormControlChange}
      />
      <MedicationsSection
        medications={this.props.medications}
        handleFormControlChange={this.props.handleFormControlChange}
      />
      <VerifierAndPreparationSection
        verifier={this.props.verifier}
        preparation={this.props.preparation}
        handleFormControlChange={this.props.handleFormControlChange}
      />
      <Button
        type="submit"
        text="Print"
        iconType="print"
        bootstrapColor="primary"
        className="btn-lg d-block ml-auto"
      />
    </form>
  );
}
