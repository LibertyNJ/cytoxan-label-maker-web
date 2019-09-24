'use-strict';

import PropTypes from 'prop-types';
import React from 'react';

import Column from '../../../../../../../components/Column';
import FormRow from '../../../../../../../components/FormRow';
import Input from '../../../../../../../components/Input';
import Toggle from '../../../../../../../components/Toggle';
import { reduceClassName } from '../../../../../../../util';

MedicationSubsection.propTypes = {
  className: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
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

export default function MedicationSubsection({
  className,
  handleChange,
  infusionTime,
  infusionTimeIsOverridden,
  name,
  placeholders,
  specialInstructions,
  strength,
}) {
  const InfusionTimeInputAppendant = (
    <React.Fragment>
      <span className="input-group-text">min.</span>{' '}
      <Toggle
        checked={infusionTimeIsOverridden}
        label="Override"
        labelClassName="ml-2"
        name={`${name}InfusionTimeIsOverridden`}
        onChange={handleChange}
        type="switch"
        wrapperClassName="input-group-text"
      />
    </React.Fragment>
  );
  const StrengthInputAppendant = <span className="input-group-text">mG</span>;
  return (
    <section className={reduceClassName('border p-3', className)}>
      <h4 className="text-capitalize text-secondary">{name}</h4>
      <FormRow>
        <Column span={4}>
          <Input
            append={StrengthInputAppendant}
            label="Strength"
            min={1}
            name={`${name}Strength`}
            onChange={handleChange}
            placeholder={placeholders.strength}
            required
            type="number"
            value={strength}
          />
        </Column>
        <Column span={8}>
          <Input
            append={InfusionTimeInputAppendant}
            disabled={!infusionTimeIsOverridden}
            label="Infusion time"
            min={1}
            name={`${name}InfusionTime`}
            onChange={handleChange}
            placeholder={placeholders.infusionTime}
            required
            type="number"
            value={infusionTime}
          />
        </Column>
      </FormRow>
      <FormRow>
        <Column>
          <Input
            info="Optional"
            label="Special instructions"
            name={`${name}SpecialInstructions`}
            onChange={handleChange}
            placeholder="Enter special instructions here…"
            type="textarea"
            value={specialInstructions}
          />
        </Column>
      </FormRow>
    </section>
  );
}
