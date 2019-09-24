'use-strict';

import PropTypes from 'prop-types';
import React from 'react';

import LabelRow from '../components/LabelRow';
import LabelSection from '../components/LabelSection';
import { formatNumberAsString } from '../../../../../../util';

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
  strength: '0',
};

export default function MedicationSection({
  concentration,
  diluent,
  infusionTime,
  name,
  specialInstructions,
  strength,
  ...restProps
}) {
  const medicationVolume = calculateVolume(strength, concentration);
  const totalInfusionVolume = calculateTotalInfusionVolume(medicationVolume, diluent.volume);
  const infusionRate = calculateInfusionRate(totalInfusionVolume, infusionTime);
  const infusionTimeUnits = calculateInfusionTimeUnits(infusionTime);
  const convertedInfusionTime = isHours(infusionTimeUnits)
    ? convertMinutesToHours(infusionTime)
    : infusionTime;
  return (
    <LabelSection {...restProps}>
      <LabelRow>
        <p className="font-weight-bold">
          <span className="text-capitalize">{name}</span> {formatNumberAsString(strength)} mG
        </p>
        <p>{formatNumberAsString(medicationVolume)} mL</p>
      </LabelRow>
      <LabelRow>
        <p className="font-weight-bold">in {diluent.name}</p>
        <p>{diluent.volume} mL</p>
      </LabelRow>
      <LabelRow>
        <p className="ml-auto">Total volume: {formatNumberAsString(totalInfusionVolume)} mL</p>
      </LabelRow>
      <LabelRow>
        <p className="font-weight-bold">Rate: {formatNumberAsString(infusionRate)} mL / hr</p>
        <p className="font-weight-bold">
          Infuse over {formatNumberAsString(convertedInfusionTime)} {infusionTimeUnits}
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
