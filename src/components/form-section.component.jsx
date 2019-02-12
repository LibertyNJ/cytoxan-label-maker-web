import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormSection extends Component {
  render() {
    return (
      <section className="d-print-none col-4">
        <h2 className="text-primary">Form</h2>
        <form onSubmit={this.props.handleSubmit}>
          <PatientFormSection
            {...this.props.patient}
            handleChange={this.props.handleChange}
          />
          <MedicationsFormSection
            {...this.props.medications}
            handleChange={this.props.handleChange}
          />
          <VerifierAndPreparationFormSection
            verifier={this.props.verifier}
            preparation={this.props.preparation}
            handleChange={this.props.handleChange}
          />
          <PrintFormSection
            copies={this.props.copies}
            handleChange={this.props.handleChange}
          />
        </form>
      </section>
    );
  }
}

class PatientFormSection extends Component {
  render() {
    return (
      <section className="p-3 border mb-3">
        <h3 className="text-primary">Patient</h3>
        <fieldset className="form-group">
          <legend>Name</legend>
          <div className="form-row">
            <div className="form-group col">
              <Input
                type="text"
                name="patientNameLast"
                value={this.props.name.last}
                label="Last"
                attributes={{
                  placeholder: 'Doe…',
                  required: true
                }}
                handleChange={this.props.handleChange}
              />
            </div>
            <div className="form-group col">
              <Input
                type="text"
                name="patientNameFirst"
                value={this.props.name.first}
                label="First"
                attributes={{
                  placeholder: 'John…',
                  required: true
                }}
                handleChange={this.props.handleChange}
              />
            </div>
            <div className="form-group col-2">
              <Input
                type="text"
                name="patientNameMi"
                value={this.props.name.mi}
                label="M.I."
                info="Optional"
                attributes={{
                  placeholder: 'G…',
                  maxLength: 1
                }}
                handleChange={this.props.handleChange}
              />
            </div>
          </div >
        </fieldset >
        <div className="form-row">
          <div className="form-group col">
            <Input
              type="text"
              name="patientMrn"
              value={this.props.mrn}
              label="MRN"
              attributes={{
                placeholder: '12345678…',
                maxLength: 8,
                required: true
              }}
              handleChange={this.props.handleChange}
            />
          </div>
          <div className="form-group col">
            <Input
              type="date"
              name="patientDob"
              value={this.props.dob}
              label="Date of birth"
              attributes={{
                max: '9999-12-31',
                required: true
              }}
              handleChange={this.props.handleChange}
            />
          </div>
        </div>
      </section >
    );
  }
}

PatientFormSection.propTypes = {
  name: PropTypes.shape({
    last: PropTypes.string,
    first: PropTypes.string,
    mi: PropTypes.string
  }).isRequired,
  mrn: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

class MedicationsFormSection extends Component {
  render() {
    return (
      <section className="p-3 border mb-3">
        <h3 className="text-primary">Medications</h3>
        <fieldset className="form-group">
          <legend>Labels needed</legend>
          <Toggle
            type="checkbox"
            name="cyclophosphamideIsEnabled"
            checked={this.props.cyclophosphamide.isEnabled}
            label="Cyclophosphamide"
            handleChange={this.props.handleChange}
          />
          <Toggle
            type="checkbox"
            name="mesnaIsEnabled"
            checked={this.props.mesna.isEnabled}
            label="Mesna"
            handleChange={this.props.handleChange}
          />
          <Toggle
            type="checkbox"
            name="granisetronIsEnabled"
            checked={this.props.granisetron.isEnabled}
            label="Granisetron"
            handleChange={this.props.handleChange}
          />
        </fieldset>
        <MedicationFormSection
          medication="cyclophosphamide"
          {...this.props.cyclophosphamide}
          placeholders={{
            strength: '500…',
            infusionTime: '60…'
          }}
          handleChange={this.props.handleChange}
        />
        <MedicationFormSection
          medication="mesna"
          {...this.props.mesna}
          placeholders={{
            strength: '250…',
            infusionTime: '15…'
          }}
          handleChange={this.props.handleChange}
        />
        <MedicationFormSection
          medication="granisetron"
          {...this.props.granisetron}
          placeholders={{
            strength: '1…',
            infusionTime: '30…'
          }}
          handleChange={this.props.handleChange}
        />
      </section>
    );
  }
}

class VerifierAndPreparationFormSection extends Component {
  render() {
    return (
      <section className="p-3 border mb-3">
        <h3 className="text-primary">Verifier and preparation</h3>
        <div className="form-row">
          <div className="form-group col">
            <Input
              type="text"
              name="verifier"
              value={this.props.verifier}
              label="Verifier"
              attributes={{
                placeholder: 'AB…',
                maxLength: 2,
                required: true
              }}
              handleChange={this.props.handleChange}
            />
          </div>
          <div className="form-group col">
            <Input
              type="datetime-local"
              name="preparation"
              value={this.props.preparation}
              label="Preparation date and time"
              info="Time must include AM or PM"
              attributes={{
                max: '9999-12-31T23:59',
                required: true
              }}
              handleChange={this.props.handleChange}
            />
          </div>
        </div>
      </section>
    );
  }
}

VerifierAndPreparationFormSection.propTypes = {
  verifier: PropTypes.string.isRequired,
  preparation: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

class PrintFormSection extends Component {
  render() {
    return (
      <section className="p-3 border mb-3">
        <h3 className="text-primary">Print</h3>
        <div className="form-row">
          <div className="form-group col-5">
            <Input
              type="number"
              name="copies"
              value={this.props.copies}
              label="Copies"
              attributes={{
                placeholder: '1…',
                min: 1,
                required: true
              }}
              append={{
                type: 'button',
                props: {
                  className: 'btn btn-primary',
                  type: 'submit'
                },
                children: 'Print'
              }}
              handleChange={this.props.handleChange}
            />
          </div>
        </div>
      </section>
    );
  }
}

PrintFormSection.propTypes = {
  copies: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

class MedicationFormSection extends Component {
  render() {
    if (this.props.isEnabled) {
      return (
        <section className="p-3 border mb-3">
          <h4 className="text-secondary text-capitalize">{this.props.name}</h4>
          <div className="form-row">
            <div className="form-group col">
              <Input
                type="number"
                name={`${this.props.medication}Strength`}
                value={this.props.strength}
                label="Strength"
                attributes={{
                  placeholder: this.props.placeholders.strength,
                  min: 1,
                  required: true
                }}
                append={{
                  type: 'span',
                  props: {
                    className: 'input-group-text'
                  },
                  children: 'mG'
                }}
                handleChange={this.props.handleChange}
              />
            </div>
            <div className="form-group col">
              <Input
                type="number"
                name={`${this.props.medication}InfusionTime`}
                value={this.props.infusionTime}
                label="Infusion time"
                disabled={!this.props.infusionTimeIsOverridden}
                attributes={{
                  placeholder: this.props.placeholders.infusionTime,
                  min: 1,
                  required: true
                }}
                append={{
                  type: 'span',
                  props: {
                    className: 'input-group-text'
                  },
                  children: 'min.'
                }}
                handleChange={this.props.handleChange}
              />
              <Toggle
                type="switch"
                name={`${this.props.medication}InfusionTimeIsOverridden`}
                checked={this.props.infusionTimeIsOverridden}
                label="Override"
                handleChange={this.props.handleChange}
              />
            </div>
          </div>
          <Input
            type="textarea"
            name={`${this.props.medication}SpecialInstructions`}
            value={this.props.specialInstructions}
            label="Special instructions"
            info="Optional"
            attributes={{
              placeholder: 'Enter special instructions here…'
            }}
            handleChange={this.props.handleChange}
          />
        </section>
      );
    } else {
      return (
        <></>
      );
    }
  }
}

MedicationFormSection.propTypes = {
  isEnabled: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  medication: PropTypes.string.isRequired,
  strength: PropTypes.string.isRequired,
  placeholders: PropTypes.shape({
    strength: PropTypes.string,
    infusionTime: PropTypes.string
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  infusionTime: PropTypes.string.isRequired,
  infusionTimeIsOverridden: PropTypes.bool.isRequired,
  specialInstructions: PropTypes.string.isRequired
};

class Toggle extends Component {
  render() {
    const customType = `custom-control custom-${this.props.type}`;

    return (
      <div className={customType}>
        <input
          id={this.props.name}
          className="custom-control-input"
          type="checkbox"
          name={this.props.name}
          checked={this.props.checked}
          onChange={this.props.handleChange}
        />
        <label
          className="custom-control-label"
          htmlFor={this.props.name}
        >
          {this.props.label}
        </label>
      </div>
    );
  }
}

Toggle.propTypes = {
  type: PropTypes.oneOf([
    'checkbox',
    'switch'
  ]).isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

class Input extends Component {
  render() {
    if (this.props.append) {
      const Append = this.props.append.type;

      if (this.props.type === 'textarea') {
        return (
          <>
            <label htmlFor={this.props.name}>
              {this.props.label}
            </label>
            <div className="input-group">
              <textarea
                id={this.props.name}
                className="form-control"
                name={this.props.name}
                value={this.props.value}
                disabled={this.props.disabled}
                onChange={this.props.handleChange}
                {...this.props.attributes}
              />
              <div className="input-group-append">
                <Append {...this.props.append.props}>{this.props.append.children}</Append>
              </div>
            </div>
            {(this.props.info) ? <small className="form-text text-info">{this.props.info}</small> : ''}
          </>
        );
      } else {
        return (
          <>
            <label htmlFor={this.props.name}>
              {this.props.label}
            </label>
            <div className="input-group">
              <input
                id={this.props.name}
                className="form-control"
                type={this.props.type}
                name={this.props.name}
                value={this.props.value}
                disabled={this.props.disabled}
                onChange={this.props.handleChange}
                {...this.props.attributes}
              />
              <div className="input-group-append">
                <Append {...this.props.append.props}>{this.props.append.children}</Append>
              </div>
            </div>
            {(this.props.info) ? <small className="form-text text-info">{this.props.info}</small> : ''}
          </>
        );
      }
    } else {

      if (this.props.type === 'textarea') {
        return (
          <>
            <label htmlFor={this.props.name}>
              {this.props.label}
            </label>
            <textarea
              id={this.props.name}
              className="form-control"
              name={this.props.name}
              value={this.props.value}
              disabled={this.props.disabled}
              onChange={this.props.handleChange}
              {...this.props.attributes}
            />
            {(this.props.info) ? <small className="form-text text-info">{this.props.info}</small> : ''}
          </>
        );
      } else {
        return (
          <>
            <label htmlFor={this.props.name}>
              {this.props.label}
            </label>
            <input
              id={this.props.name}
              className="form-control"
              type={this.props.type}
              name={this.props.name}
              value={this.props.value}
              disabled={this.props.disabled}
              onChange={this.props.handleChange}
              {...this.props.attributes}
            />
            {(this.props.info) ? <small className="form-text text-info">{this.props.info}</small> : ''}
          </>
        );
      }
    }
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Date)
  ]),
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  info: PropTypes.string,
  disabled: PropTypes.bool,
  handleChange: PropTypes.func.isRequired
};
