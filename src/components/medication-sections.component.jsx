'use strict';

import React from '../scripts/react.development';

import FormGroup from './form-group.component';

export default class MedicationSections extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="p-3 border mb-3">
        <h3 className="text-primary">Medications</h3>
        <fieldset className="form-group">
          <legend>Labels needed</legend>
          <FormGroup
            label="Cyclophosphamide"
            id="cyclophosphamide-checkbox"
            type="checkbox"
          />
          <FormGroup
            label="Mesna"
            id="mesna-checkbox"
            type="checkbox"
          />
          <FormGroup
            label="Granisetron"
            id="granisetron-checkbox"
            type="checkbox"
          />
        </fieldset>
        <MedicationSection
          id="cyclophosphamide"
          strengthPlaceholder="500"
          infusionTimePlaceholder="60"
        />
        <MedicationSection
          id="mesna"
          strengthPlaceholder="250"
          infusionTimePlaceholder="15"
        />
        <MedicationSection
          id="granisetron"
          strengthPlaceholder="1"
          infusionTimePlaceholder="30"
        />
      </section >
    );
  }
}

class MedicationSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="p-3 border mb-3">
        <h4 className="text-secondary">{capitalize(this.props.id)}</h4>
        <div className="form-row">
          <FormGroup
            label="Strength"
            id={`${this.props.id}-strength`}
            type="number"
            placeholder={this.props.strengthPlaceholder}
            required="true"
            append={{
              element: 'span',
              value: 'mG'
            }}
            min="1"
          />
          <FormGroup
            label="Infusion time"
            id={`${this.props.id}-infusion-time`}
            type="number"
            placeholder={this.props.infusionTimePlaceholder}
            append={{
              element: 'span',
              value: 'min.',
            }}
            min="1"
          />
          <FormGroup
            label="Override"
            id={`${this.props.id}-override-infusion-time`}
            type="switch"
          />
          <FormGroup
            label="Special instructions"
            id={`${this.props.id}-special-instructions`}
            type="textarea"
            info="Optional"
          />
        </div>
      </section>
    );
  }
}

function capitalize(string) {
  return `${string.slice(0, 1).toUpperCase()}${string.slice(1)}`;
}
