import PropTypes from 'prop-types';
import React from 'react';

import LabelRow from './LabelRow';
import LabelSection from './LabelSection';

import formatNumberAsString from '../../../utils/format-number-as-string';

const MedicationSection = (props) => {
  const medication = {
    strength: props.strength || 0,
    volume: getVolume(props.strength || 0, props.concentration),
  };

  function getVolume(strength, concentration) {
    return strength / concentration;
  }

  const totalInfusionVolume = getTotalInfusionVolume(medication.volume, props.diluent.volume);

  function getTotalInfusionVolume(medicationVolume, diluentVolume) {
    return medicationVolume + diluentVolume;
  }

  let { infusionTime } = props;

  const infusionRate = getInfusionRate(totalInfusionVolume, infusionTime);

  function getInfusionRate(milliliters, minutes) {
    const hours = convertMinutesToHours(minutes);
    return milliliters / hours;
  }

  const infusionTimeUnits = getInfusionTimeUnits(infusionTime);

  function getInfusionTimeUnits(infusionMinutes) {
    if (isDivisibleBy60(infusionMinutes)) {
      return 'hour(s)';
    }

    return 'minute(s)';
  }

  function isDivisibleBy60(number) {
    return number % 60 === 0;
  }

  if (isHours(infusionTimeUnits)) {
    infusionTime = convertMinutesToHours(infusionTime);
  }

  function isHours(timeUnits) {
    return timeUnits === 'hour(s)';
  }

  function convertMinutesToHours(minutes) {
    const MINUTES_PER_HOUR = 60;
    return minutes / MINUTES_PER_HOUR;
  }

  return (
    <LabelSection>
      <LabelRow>
        <p className="font-weight-bold">
          <span className="text-capitalize">{props.name}</span>{' '}
          {formatNumberAsString(medication.strength)} mG
        </p>
        <p>{formatNumberAsString(medication.volume)} mL</p>
      </LabelRow>
      <LabelRow>
        <p className="font-weight-bold">in {props.diluent.name}</p>
        <p>{props.diluent.volume} mL</p>
      </LabelRow>
      <p className="text-right">Total volume: {formatNumberAsString(totalInfusionVolume)} mL</p>
      <LabelRow>
        <p className="font-weight-bold">Rate: {formatNumberAsString(infusionRate)} mL / hr</p>
        <p className="font-weight-bold">
          Infuse over {formatNumberAsString(infusionTime)} {infusionTimeUnits}
        </p>
      </LabelRow>
      <LabelRow>
        <p className="font-italic">{props.specialInstructions}</p>
      </LabelRow>
    </LabelSection>
  );
};

MedicationSection.propTypes = {
  concentration: PropTypes.number.isRequired,

  diluent: PropTypes.shape({
    name: PropTypes.string,
    volume: PropTypes.number,
  }).isRequired,

  infusionTime: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  specialInstructions: PropTypes.string,
  strength: PropTypes.string,
};

MedicationSection.defaultProps = {
  specialInstructions: undefined,
  strength: undefined,
};

export default MedicationSection;
