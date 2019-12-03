import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import InfusionTimeOverrideToggle from './containers/InfusionTimeOverrideToggle';
import MedicationInput from './containers/MedicationInput';
import Column from '../../../../../../../../../../components/Column';
import FormRow from '../../../../../../../../../../components/FormRow';
import { reduceClassNames } from '../../../../../../../../../../util';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Subsection);

function mapStateToProps(state, { name }) {
  return {
    isEnabled: state.medications[name].isEnabled,
  };
}

function mapDispatchToProps() {
  return {};
}

Subsection.propTypes = {
  className: PropTypes.string,
  isEnabled: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  placeholders: PropTypes.shape({
    strength: PropTypes.string,
    infusionTime: PropTypes.string,
  }).isRequired,
};

function Subsection({
  className,
  isEnabled,
  name,
  placeholders: { strength, infusionTime },
  ...restProps
}) {
  const InfusionTimeInputAppendant = (
    <React.Fragment>
      <span className="input-group-text">min.</span>{' '}
      <InfusionTimeOverrideToggle
        label="Override"
        labelClassName="ml-2"
        name={`${name}InfusionTimeIsOverridden`}
        type="switch"
        wrapperClassName="input-group-text"
      />
    </React.Fragment>
  );
  const StrengthInputAppendant = <span className="input-group-text">mG</span>;
  return isEnabled ? (
    <section className={reduceClassNames('border p-3', className)} {...restProps}>
      <h4 className="text-capitalize text-secondary">{name}</h4>
      <FormRow>
        <Column span={4}>
          <MedicationInput
            append={StrengthInputAppendant}
            label="Strength"
            min={1}
            name={`${name}Strength`}
            placeholder={strength}
            required
            type="number"
          />
        </Column>
        <Column span={8}>
          <MedicationInput
            append={InfusionTimeInputAppendant}
            label="Infusion time"
            min={1}
            name={`${name}InfusionTime`}
            placeholder={infusionTime}
            required
            type="number"
          />
        </Column>
      </FormRow>
      <FormRow>
        <Column>
          <MedicationInput
            info="Optional"
            label="Special instructions"
            name={`${name}SpecialInstructions`}
            placeholder="Enter special instructions here…"
            type="textarea"
          />
        </Column>
      </FormRow>
    </section>
  ) : null;
}
