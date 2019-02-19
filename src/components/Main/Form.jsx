import React from 'react';
import PropTypes from 'prop-types';

class MainForm extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    window.print();
  }

  render() {
    return (
      <section className="d-print-none overflow-auto col-4">
        <h2 className="text-primary">Form</h2>
        <form onSubmit={this.handleSubmit}>
          <Section header="Patient">
            <fieldset className="form-group">
              <legend>Name</legend>
              <div className="form-row">
                <div className="form-group col">
                  <Input
                    type="text"
                    name="patientNameLast"
                    value={this.props.patient.name.last}
                    label="Last"
                    attributes={{
                      placeholder: 'Doe…',
                      required: true,
                    }}
                    handleChange={this.props.handleChange}
                  />
                </div>
                <div className="form-group col">
                  <Input
                    type="text"
                    name="patientNameFirst"
                    value={this.props.patient.name.first}
                    label="First"
                    attributes={{
                      placeholder: 'John…',
                      required: true,
                    }}
                    handleChange={this.props.handleChange}
                  />
                </div>
                <div className="form-group col-2">
                  <Input
                    type="text"
                    name="patientNameMi"
                    value={this.props.patient.name.mi}
                    label="M.I."
                    info="Optional"
                    attributes={{
                      placeholder: 'G…',
                      maxLength: 1,
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
                  value={this.props.patient.mrn}
                  label="MRN"
                  attributes={{
                    placeholder: '12345678…',
                    maxLength: 8,
                    required: true,
                  }}
                  handleChange={this.props.handleChange}
                />
              </div>
              <div className="form-group col">
                <Input
                  type="date"
                  name="patientDob"
                  value={this.props.patient.dob}
                  label="Date of birth"
                  attributes={{
                    max: '9999-12-31',
                    required: true,
                  }}
                  handleChange={this.props.handleChange}
                />
              </div>
            </div>
          </Section>
          <Section header="Medications">
            <fieldset className="form-group">
              <legend>Labels needed</legend>
              <Toggle
                type="checkbox"
                name="cyclophosphamideIsEnabled"
                checked={this.props.medications.cyclophosphamide.isEnabled}
                label="Cyclophosphamide"
                handleChange={this.props.handleChange}
              />
              <Toggle
                type="checkbox"
                name="mesnaIsEnabled"
                checked={this.props.medications.mesna.isEnabled}
                label="Mesna"
                handleChange={this.props.handleChange}
              />
              <Toggle
                type="checkbox"
                name="granisetronIsEnabled"
                checked={this.props.medications.granisetron.isEnabled}
                label="Granisetron"
                handleChange={this.props.handleChange}
              />
            </fieldset>
            <MedicationSubsection
              medication="cyclophosphamide"
              {...this.props.medications.cyclophosphamide}
              placeholders={{
                strength: '500…',
                infusionTime: '60…',
              }}
              handleChange={this.props.handleChange}
            />
            <MedicationSubsection
              medication="mesna"
              {...this.props.medications.mesna}
              placeholders={{
                strength: '250…',
                infusionTime: '15…',
              }}
              handleChange={this.props.handleChange}
            />
            <MedicationSubsection
              medication="granisetron"
              {...this.props.medications.granisetron}
              placeholders={{
                strength: '1…',
                infusionTime: '30…',
              }}
              handleChange={this.props.handleChange}
            />
          </Section>
          <Section header="Verifier and preparaton">
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
                    required: true,
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
                    required: true,
                  }}
                  handleChange={this.props.handleChange}
                />
              </div>
            </div>
          </Section>
          <button className="btn btn-primary btn-lg d-block ml-auto" type="submit">Print</button>
        </form>
      </section>
    );
  }
}

MainForm.propTypes = {
  patient: PropTypes.shape({
    name: PropTypes.object,
    mrn: PropTypes.string,
    dob: PropTypes.string,
  }).isRequired,
  medications: PropTypes.shape({
    cyclophosphamide: PropTypes.object,
    mesna: PropTypes.object,
    granisetron: PropTypes.object,
  }).isRequired,
  verifier: PropTypes.string.isRequired,
  preparation: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

function Section(props) {
  return (
    <section className="p-3 border mb-3">
      <h3 className="text-primary">{props.header}</h3>
      {props.children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string.isRequired,
};

Section.defaultProps = {
  children: null,
};

function MedicationSubsection(props) {
  if (props.isEnabled) {
    return (
      <section className="p-3 border mb-3">
        <h4 className="text-secondary text-capitalize">{props.medication}</h4>
        <div className="form-row">
          <div className="form-group col">
            <Input
              type="number"
              name={`${props.medication}Strength`}
              value={props.strength}
              label="Strength"
              attributes={{
                placeholder: props.placeholders.strength,
                min: 1,
                required: true,
              }}
              append={{
                type: 'span',
                props: { className: 'input-group-text' },
                children: 'mG',
              }}
              handleChange={props.handleChange}
            />
          </div>
          <div className="form-group col">
            <Input
              type="number"
              name={`${props.medication}InfusionTime`}
              value={props.infusionTime}
              label="Infusion time"
              disabled={!props.infusionTimeIsOverridden}
              attributes={{
                placeholder: props.placeholders.infusionTime,
                min: 1,
                required: true,
              }}
              append={{
                type: 'span',
                props: { className: 'input-group-text' },
                children: 'min.',
              }}
              handleChange={props.handleChange}
            />
            <Toggle
              type="switch"
              name={`${props.medication}InfusionTimeIsOverridden`}
              checked={props.infusionTimeIsOverridden}
              label="Override"
              handleChange={props.handleChange}
            />
          </div>
        </div>
        <Input
          type="textarea"
          name={`${props.medication}SpecialInstructions`}
          value={props.specialInstructions}
          label="Special instructions"
          info="Optional"
          attributes={{ placeholder: 'Enter special instructions here…' }}
          handleChange={props.handleChange}
        />
      </section>
    );
  }
  return (
    null
  );
}

MedicationSubsection.propTypes = {
  isEnabled: PropTypes.bool.isRequired,
  medication: PropTypes.string.isRequired,
  strength: PropTypes.string.isRequired,
  placeholders: PropTypes.shape({
    strength: PropTypes.string,
    infusionTime: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  infusionTime: PropTypes.string.isRequired,
  infusionTimeIsOverridden: PropTypes.bool.isRequired,
  specialInstructions: PropTypes.string.isRequired,
};

function Toggle(props) {
  return (
    <div className={`custom-control custom-${props.type}`}>
      <input
        id={props.name}
        className="custom-control-input"
        type="checkbox"
        name={props.name}
        checked={props.checked}
        onChange={props.handleChange}
      />
      <label
        className="custom-control-label"
        htmlFor={props.name}
      >
        {props.label}
      </label>
    </div>
  );
}

Toggle.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

function Input(props) {
  const InputElement = props.type === 'textarea' ? 'textarea' : 'input';

  if (props.append) {
    const AppendElement = props.append.type;

    return (
      <div>
        <label htmlFor={props.name}>
          {props.label}
        </label>
        <div className="input-group">
          <InputElement
            id={props.name}
            className="form-control"
            type={props.type === 'textarea' ? undefined : props.type}
            name={props.name}
            value={props.value}
            disabled={props.disabled}
            onChange={props.handleChange}
            {...props.attributes}
          />
          <div className="input-group-append">
            <AppendElement {...props.append.props}>{props.append.children}</AppendElement>
          </div>
        </div>
        {props.info ? <small className="form-text text-info">{props.info}</small> : null}
      </div>
    );
  }

  return (
    <div>
      <label htmlFor={props.name}>
        {props.label}
      </label>
      <InputElement
        id={props.name}
        className="form-control"
        type={props.type === 'textarea' ? undefined : props.type}
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        onChange={props.handleChange}
        {...props.attributes}
      />
      {props.info ? <small className="form-text text-info">{props.info}</small> : null}
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  info: PropTypes.string,
  disabled: PropTypes.bool,
  append: PropTypes.shape({
    type: PropTypes.string,
    props: PropTypes.objectOf(PropTypes.any),
    children: PropTypes.node,
  }),
  attributes: PropTypes.objectOf(PropTypes.any),
  handleChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  info: undefined,
  disabled: undefined,
  append: undefined,
  attributes: undefined,
};

export default MainForm;
