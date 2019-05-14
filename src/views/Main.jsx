import React from 'react';

import FormSection from '../components/Form';
import PreviewSection from '../components/Preview';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cyclophosphamideIsEnabled: true,
      cyclophosphamideInfusionTime: '60',
      cyclophosphamideInfusionTimeIsOverridden: false,
      mesnaIsEnabled: true,
      mesnaInfusionTime: '15',
      mesnaInfusionTimeIsOverridden: false,
      granisetronIsEnabled: true,
      granisetronInfusionTime: '30',
      granisetronInfusionTimeIsOverridden: false,
    };

    this.initialState = this.state;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    const properNames = [
      'patientNameLast',
      'patientNameFirst',
      'patientNameMi',
    ];

    function capitalize(string) {
      return string.slice(0, 1).toUpperCase() + string.slice(1);
    }

    if (properNames.includes(name)) {
      this.setState({ [name]: capitalize(value) });
    } else if (name === 'verifier') {
      this.setState({ [name]: value.toUpperCase() });
    } else {
      this.setState({ [name]: value });
    }

    if (name.includes('IsOverridden') && value === false) {
      const resetName = name.slice(0, name.search('IsOverridden'));
      const resetValue = this.initialState[resetName];

      this.setState({ [resetName]: resetValue });
    }
  }

  render() {
    const patient = {
      name: {
        last: this.state.patientNameLast,
        first: this.state.patientNameFirst,
        mi: this.state.patientNameMi,
      },

      mrn: this.state.patientMrn,
      dob: this.state.patientDob,
    };

    const medications = {
      cyclophosphamide: {
        isEnabled: this.state.cyclophosphamideIsEnabled,
        name: 'Cyclophosphamide',
        product: 'Cyclophosphamide 500 mG / 25 mL vial',
        concentration: 20,
        strength: this.state.cyclophosphamideStrength,
        infusionTime: this.state.cyclophosphamideInfusionTime,
        infusionTimeIsOverridden: this.state
          .cyclophosphamideInfusionTimeIsOverridden,
        specialInstructions: this.state.cyclophosphamideSpecialInstructions,
        diluent: {
          name: '0.9% Sodium Chloride',
          product: '0.9% Sodium Chloride bag',
          volume: this.state.cyclophosphamideStrength >= 1000 ? 250 : 100,
        },
      },

      mesna: {
        isEnabled: this.state.mesnaIsEnabled,
        name: 'Mesna',
        product: 'Mesna 1,000 mG / 10 mL vial',
        concentration: 100,
        strength: this.state.mesnaStrength,
        infusionTime: this.state.mesnaInfusionTime,
        infusionTimeIsOverridden: this.state.mesnaInfusionTimeIsOverridden,
        specialInstructions: this.state.mesnaSpecialInstructions,
        diluent: {
          name: '0.9% Sodium Chloride',
          product: '0.9% Sodium Chloride bag',
          volume: 50,
        },
      },

      granisetron: {
        isEnabled: this.state.granisetronIsEnabled,
        name: 'Granisetron',
        product: 'Granisetron 1 mG / 1 mL vial',
        concentration: 1,
        strength: this.state.granisetronStrength,
        infusionTime: this.state.granisetronInfusionTime,
        infusionTimeIsOverridden: this.state
          .granisetronInfusionTimeIsOverridden,
        specialInstructions: this.state.granisetronSpecialInstructions,
        diluent: {
          name: '0.9% Sodium Chloride',
          product: '0.9% Sodium Chloride bag',
          volume: 50,
        },
      },
    };

    return (
      <div className="row">
        <FormSection
          patient={patient}
          medications={medications}
          verifier={this.state.verifier}
          preparation={this.state.preparation}
          handleChange={this.handleChange}
        />
        <PreviewSection
          patient={patient}
          medications={medications}
          verifier={this.state.verifier}
          preparation={this.state.preparation}
        />
      </div>
    );
  }
}

export default Main;
