import PropTypes from 'prop-types';
import React from 'react';

import FormRow from '../FormRow';
import Input from '../Input';
import Toggle from '../Toggle';

const MedicationSubsection = (props) => {
  const infusionTimeInputAppendant = (
    <React.Fragment>
      <span className="input-group-text">min.</span>{' '}
      <Toggle
        type="switch"
        name={`${props.name}InfusionTimeIsOverridden`}
        checked={props.infusionTimeIsOverridden}
        label="Override"
        handleChange={props.handleFormControlChange}
        wrapperClassName="input-group-text"
        labelClassName="ml-2"
      />
    </React.Fragment>
  );

  return (
    <section className="p-3 border mb-3 overflow-hidden">
      <h4 className="text-secondary text-capitalize">{props.name}</h4>
      <FormRow>
        <Input
          type="number"
          name={`${props.name}Strength`}
          value={props.strength}
          label="Strength"
          attributes={{
            placeholder: props.placeholders.strength,
            min: 1,
            required: true,
          }}
          append={<span className="input-group-text">mG</span>}
          handleChange={props.handleFormControlChange}
        />
        <Input
          type="number"
          name={`${props.name}InfusionTime`}
          value={props.infusionTime}
          label="Infusion time"
          disabled={!props.infusionTimeIsOverridden}
          attributes={{
            placeholder: props.placeholders.infusionTime,
            min: 1,
            required: true,
          }}
          wrapperClassName="col-xl-8"
          append={infusionTimeInputAppendant}
          handleChange={props.handleFormControlChange}
        />
      </FormRow>
      <FormRow>
        <Input
          type="textarea"
          name={`${props.name}SpecialInstructions`}
          value={props.specialInstructions}
          label="Special instructions"
          helpText="Optional"
          attributes={{ placeholder: 'Enter special instructions here…' }}
          handleChange={props.handleFormControlChange}
        />
      </FormRow>
    </section>
  );
};

MedicationSubsection.propTypes = {
  handleFormControlChange: PropTypes.func.isRequired,
  infusionTime: PropTypes.string.isRequired,
  infusionTimeIsOverridden: PropTypes.bool,
  name: PropTypes.string.isRequired,

  placeholders: PropTypes.shape({
    strength: PropTypes.string,
    infusionTime: PropTypes.string,
  }).isRequired,

  specialInstructions: PropTypes.string,
  strength: PropTypes.string,
};

MedicationSubsection.defaultProps = {
  infusionTimeIsOverridden: false,
  specialInstructions: undefined,
  strength: undefined,
};

export default MedicationSubsection;
