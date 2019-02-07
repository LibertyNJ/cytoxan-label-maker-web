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
        <h3 className="text-primary">Print</h3>
        <div className="form-row">
          <FormGroup
            label="Copies"
            id="copies"
            type="number"
            placeholder="1"
            required="true"
            columns="5"
            append={{
              element: 'button',
              type: 'submit',
              value: 'Print labels'
            }}
            min="1"
          />
        </div>
      </section>
    );
  }
}
