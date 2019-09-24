'use-strict';

import React from 'react';

import FormSection from './sections/FormSection';
import LabelSection from './sections/LabelSection';
import Column from '../../components/Column';
import Container from '../../components/Container';
import Row from '../../components/Row';

export default class Main extends React.Component {
  state = {
    cyclophosphamideIsEnabled: true,
    cyclophosphamideInfusionTime: '60',
    granisetronIsEnabled: true,
    granisetronInfusionTime: '30',
    mesnaIsEnabled: true,
    mesnaInfusionTime: '15',
  };

  initialState = this.state;

  handleChange = (event) => {
    const { target } = event;
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });

    if (Main.isStateNoLongerOverridden(name, value)) {
      this.setPropertyToInitialState(Main.getOverriddenStatePropertyName(name));
    }
  };

  static isStateNoLongerOverridden = (name, value) => name.includes('IsOverridden') && value === false;

  static getOverriddenStatePropertyName = name => name.slice(0, name.search('IsOverridden'));

  setPropertyToInitialState = (name) => {
    const value = this.initialState[name];
    this.setState({ [name]: value });
  };

  render = () => {
    const medications = [
      {
        concentration: 20,
        diluent: {
          name: '0.9% Sodium Chloride',
          product: '0.9% Sodium Chloride bag',
          volume: this.state.cyclophosphamideStrength >= 1000 ? 250 : 100,
        },
        name: 'cyclophosphamide',
        isEnabled: this.state.cyclophosphamideIsEnabled,
        infusionTime: this.state.cyclophosphamideInfusionTime,
        infusionTimeIsOverridden: this.state.cyclophosphamideInfusionTimeIsOverridden,
        placeholders: {
          strength: '500…',
          infusionTime: '60…',
        },
        product: 'Cyclophosphamide 500 mG / 25 mL vial',
        specialInstructions: this.state.cyclophosphamideSpecialInstructions,
        strength: this.state.cyclophosphamideStrength,
      },
      {
        concentration: 100,
        diluent: {
          name: '0.9% Sodium Chloride',
          product: '0.9% Sodium Chloride bag',
          volume: 50,
        },
        isEnabled: this.state.mesnaIsEnabled,
        infusionTime: this.state.mesnaInfusionTime,
        infusionTimeIsOverridden: this.state.mesnaInfusionTimeIsOverridden,
        name: 'mesna',
        placeholders: {
          strength: '250…',
          infusionTime: '15…',
        },
        product: 'Mesna 1,000 mG / 10 mL vial',
        specialInstructions: this.state.mesnaSpecialInstructions,
        strength: this.state.mesnaStrength,
      },
      {
        concentration: 1,
        diluent: {
          name: '0.9% Sodium Chloride',
          product: '0.9% Sodium Chloride bag',
          volume: 50,
        },
        isEnabled: this.state.granisetronIsEnabled,
        infusionTime: this.state.granisetronInfusionTime,
        infusionTimeIsOverridden: this.state.granisetronInfusionTimeIsOverridden,
        name: 'granisetron',
        placeholders: {
          strength: '1…',
          infusionTime: '30…',
        },
        product: 'Granisetron 1 mG / 1 mL vial',
        specialInstructions: this.state.granisetronSpecialInstructions,
        strength: this.state.granisetronStrength,
      },
    ];
    const patient = {
      dateOfBirth: this.state.patientDateOfBirth,
      medicalRecordNumber: this.state.patientMedicalRecordNumber,
      name: {
        first: this.state.patientNameFirst,
        last: this.state.patientNameLast,
        middleInitial: this.state.patientNameMiddleInitial,
      },
    };
    return (
      <React.Fragment>
        <FormSection
          className="flex-grow-0 flex-shrink-0"
          handleChange={this.handleChange}
          medications={medications}
          patient={patient}
          preparation={this.state.preparation}
          verifier={this.state.verifier}
        />
        <LabelSection
          className="flex-grow-1 flex-shrink-1"
          medications={medications}
          patient={patient}
          preparation={this.state.preparation}
          verifier={this.state.verifier}
        />
      </React.Fragment>
    );
  };
}
