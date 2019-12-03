import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import LabelRow from '../components/LabelRow';
import LabelSection from '../components/LabelSection';
import { convertNumberToFormattedString } from '../../../../../../../util';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MedicationSection);

function mapStateToProps(state, { medication: { name } }) {
  return {
    infusionTime: state.medications[name].infusionTime,
    specialInstructions: state.medications[name].specialInstructions,
    strength: state.medications[name].strength,
  };
}

function mapDispatchToProps() {
  return {};
}

MedicationSection.propTypes = {
  infusionTime: PropTypes.string.isRequired,
  medication: PropTypes.shape({
    concentration: PropTypes.number,
    diluent: PropTypes.shape({
      getVolumeFromStrength: PropTypes.func,
      name: PropTypes.string,
    }),
    name: PropTypes.string,
  }).isRequired,
  specialInstructions: PropTypes.string.isRequired,
  strength: PropTypes.string.isRequired,
};

function MedicationSection({
  infusionTime,
  medication: { concentration, diluent, name },
  specialInstructions,
  strength,
  ...restProps
}) {
  const medicationVolume = calculateVolume(strength, concentration);
  const diluentVolume = diluent.getVolumeFromStrength(strength);
  const totalInfusionVolume = calculateTotalInfusionVolume(medicationVolume, diluentVolume);
  const infusionRate = calculateInfusionRate(totalInfusionVolume, infusionTime);
  const infusionTimeUnits = calculateInfusionTimeUnits(infusionTime);
  const convertedInfusionTime = isHours(infusionTimeUnits)
    ? convertMinutesToHours(infusionTime)
    : infusionTime;
  return (
    <LabelSection {...restProps}>
      <LabelRow>
        <p className="font-weight-bold">
          <span className="text-capitalize">{name}</span> {convertNumberToFormattedString(strength)}{' '}
          mG
        </p>
        <p>{convertNumberToFormattedString(medicationVolume)} mL</p>
      </LabelRow>
      <LabelRow>
        <p className="font-weight-bold">in {diluent.name}</p>
        <p>{diluentVolume} mL</p>
      </LabelRow>
      <LabelRow>
        <p className="ml-auto">
          Total volume: {convertNumberToFormattedString(totalInfusionVolume)} mL
        </p>
      </LabelRow>
      <LabelRow>
        <p className="font-weight-bold">
          Rate: {convertNumberToFormattedString(infusionRate)} mL / hr
        </p>
        <p className="font-weight-bold">
          Infuse over {convertNumberToFormattedString(convertedInfusionTime)} {infusionTimeUnits}
        </p>
      </LabelRow>
      <LabelRow>
        <p className="font-italic">{specialInstructions}</p>
      </LabelRow>
    </LabelSection>
  );
}

function calculateVolume(strength, concentration) {
  return strength / concentration;
}

function calculateTotalInfusionVolume(medicationVolume, diluentVolume) {
  return medicationVolume + diluentVolume;
}

function calculateInfusionRate(milliliters, minutes) {
  const hours = convertMinutesToHours(minutes);
  return milliliters / hours;
}

function calculateInfusionTimeUnits(infusionMinutes) {
  return isDivisibleBy60(infusionMinutes) ? 'hour(s)' : 'minute(s)';
}

function isDivisibleBy60(number) {
  return number % 60 === 0;
}

function isHours(timeUnits) {
  return timeUnits === 'hour(s)';
}

function convertMinutesToHours(minutes) {
  const MINUTES_PER_HOUR = 60;
  return minutes / MINUTES_PER_HOUR;
}
