'use strict';

import React from '../scripts/react.development';

import Form from './form.component';
import Preview from './preview.component';

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      patient: {
        name: {
          last: '',
          first: '',
          mi: '',
          full: ''
        },

        mrn: '',
        dob: ''
      },

      medications: {
        cyclophosphamide: {
          enabled: true,
          strength: '',
          volume: '',
          infusionTime: {
            value: '',
            override: false
          },

          specialInstructions: ''
        },

        mesna: {
          enabled: true,
          strength: '',
          volume: '',
          infusionTime: {
            value: '',
            override: false
          },

          specialInstructions: ''
        },

        granisetron: {
          enabled: true,
          strength: '',
          volume: '',
          infusionTime: {
            value: '',
            override: false
          },

          specialInstructions: ''
        }
      },

      verifier: '',
      preparation: '',
      expiration: '',
      copies: ''
    };
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <main className="container-fluid row">
        <Form handleChange={this.handleChange} />
        <Preview {...this.state} />
      </main>
    );
  }
}

