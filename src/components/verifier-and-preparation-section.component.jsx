'use strict';

import React from '../scripts/react.development';

import FormGroup from '../components/form-group.component';

export default class VerifierAndPreparationSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="p-3 border mb-3">
        <h3 className="text-primary">Verifier and preparation</h3>
        <div className="form-row">
          <FormGroup
            label="Verifier"
            id="verifier"
            type="text"
            placeholder="AB"
            required="true"
            min="1"
          />
          <FormGroup
            label="Preparation date and time"
            id="preparation-datetime"
            type="datetime-local"
            required="true"
            max="9999-12-31-T23:59"
            columns="5"
            info="Time must include AM or PM"
          />
        </div>
      </section>
    );
  }
}
