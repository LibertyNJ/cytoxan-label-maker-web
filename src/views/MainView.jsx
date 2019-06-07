import React from 'react';

import FormSection from '../components/MainView/FormSection';
import PreviewSection from '../components/MainView/PreviewSection';

export default class MainView extends React.Component {
  state = {
    cyclophosphamideIsEnabled: true,
    cyclophosphamideInfusionTime: '60',
    granisetronIsEnabled: true,
    granisetronInfusionTime: '30',
    mesnaIsEnabled: true,
    mesnaInfusionTime: '15',
  };

  initialState = this.state;

  handleFormControlChange = (event) => {
    const { target } = event;
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });

    if (MainView.isStateNoLongerOverridden(name, value)) {
      this.setPropertyToInitialState(MainView.getOverriddenStatePropertyName(name));
    }
  };

  static isStateNoLongerOverridden = (name, value) => name.includes('IsOverridden') && value === false;

  static getOverriddenStatePropertyName = name => name.slice(0, name.search('IsOverridden'));

  setPropertyToInitialState = (name) => {
    const value = this.initialState[name];
    this.setState({ [name]: value });
  };

  render = () => {
    const patient = {
      name: {
        last: this.state.patientNameLast,
        first: this.state.patientNameFirst,
        middleInitial: this.state.patientNameMiddleInitial,
      },

      medicalRecordNumber: this.state.patientMedicalRecordNumber,
      dateOfBirth: this.state.patientDateOfBirth,
    };

    const medications = [
      {
        name: 'cyclophosphamide',
        product: 'Cyclophosphamide 500 mG / 25 mL vial',
        concentration: 20,
        isEnabled: this.state.cyclophosphamideIsEnabled,
        strength: this.state.cyclophosphamideStrength,
        infusionTime: this.state.cyclophosphamideInfusionTime,
        infusionTimeIsOverridden: this.state.cyclophosphamideInfusionTimeIsOverridden,
        specialInstructions: this.state.cyclophosphamideSpecialInstructions,

        diluent: {
          name: '0.9% Sodium Chloride',
          product: '0.9% Sodium Chloride bag',
          volume: this.state.cyclophosphamideStrength >= 1000 ? 250 : 100,
        },

        placeholders: {
          strength: '500…',
          infusionTime: '60…',
        },
      },

      {
        name: 'mesna',
        product: 'Mesna 1,000 mG / 10 mL vial',
        concentration: 100,
        isEnabled: this.state.mesnaIsEnabled,
        strength: this.state.mesnaStrength,
        infusionTime: this.state.mesnaInfusionTime,
        infusionTimeIsOverridden: this.state.mesnaInfusionTimeIsOverridden,
        specialInstructions: this.state.mesnaSpecialInstructions,

        diluent: {
          name: '0.9% Sodium Chloride',
          product: '0.9% Sodium Chloride bag',
          volume: 50,
        },

        placeholders: {
          strength: '250…',
          infusionTime: '15…',
        },
      },

      {
        name: 'granisetron',
        product: 'Granisetron 1 mG / 1 mL vial',
        concentration: 1,
        isEnabled: this.state.granisetronIsEnabled,
        strength: this.state.granisetronStrength,
        infusionTime: this.state.granisetronInfusionTime,
        infusionTimeIsOverridden: this.state.granisetronInfusionTimeIsOverridden,
        specialInstructions: this.state.granisetronSpecialInstructions,

        diluent: {
          name: '0.9% Sodium Chloride',
          product: '0.9% Sodium Chloride bag',
          volume: 50,
        },

        placeholders: {
          strength: '1…',
          infusionTime: '30…',
        },
      },
    ];

    return (
      <div className="row flex-nowrap">
        <FormSection
          patient={patient}
          medications={medications}
          verifier={this.state.verifier}
          preparation={this.state.preparation}
          handleFormControlChange={this.handleFormControlChange}
        />
        <PreviewSection
          patient={patient}
          medications={medications}
          verifier={this.state.verifier}
          preparation={this.state.preparation}
        />
      </div>
    );
  };
}
