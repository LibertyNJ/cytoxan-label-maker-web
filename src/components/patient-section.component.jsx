'use strict';

import React from '../scripts/react.development';

import FormGroup from '../components/form-group.component';

export default class PatientSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="p-3 border mb-3">
        <h3 className="text-primary">Patient</h3>
        <fieldset className="form-group">
          <legend>Name</legend>
          <div className="form-row">
            <FormGroup
              id="patient-last-name"
              type="text"
              placeholder="Doe"
              required="true"
            />
            <FormGroup
              id="patient-first-name"
              type="text"
              placeholder="John"
              required="true"
            />
            <FormGroup
              id="patient-middle-initial"
              type="text"
              placeholder="G"
              maxlength="1"
              info="Optional"
            />
          </div>
        </fieldset>
        <div className="form-row">
          <FormGroup
            id="patient-mrn"
            type="text"
            placeholder="12345678"
            required="true"
            maxlength="8"
          />
          <FormGroup />
        </div>
      </section>
    );
  }
}
