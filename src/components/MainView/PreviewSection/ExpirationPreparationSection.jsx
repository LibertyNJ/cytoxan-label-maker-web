import PropTypes from 'prop-types';
import React from 'react';

import LabelRow from './LabelRow';
import LabelSection from './LabelSection';

const ExpirationPreparationSection = ({ preparation }) => {
  const preparationDate = new Date(preparation);
  const expirationDate = getNextDayDate(preparationDate);

  function getNextDayDate(date) {
    const ONE_DAY = 1;
    const nextDayDate = new Date(date);
    nextDayDate.setDate(date.getDate() + ONE_DAY);
    return nextDayDate;
  }

  const preparationDatetimeString = getDatetimeString(preparationDate);
  const expirationDatetimeString = getDatetimeString(expirationDate);

  function getDatetimeString(date) {
    if (isInvalidDate(date)) {
      return 'MM/DD/YYYY hh:mm';
    }

    const dateFormat = {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };

    return date.toLocaleString('en-US', dateFormat);
  }

  function isInvalidDate(date) {
    return date.toString() === 'Invalid Date';
  }

  return (
    <LabelSection>
      <LabelRow>
        <p className="font-weight-bold">Exp: {expirationDatetimeString}</p>
        <p>Prep: {preparationDatetimeString}</p>
      </LabelRow>
    </LabelSection>
  );
};

ExpirationPreparationSection.propTypes = {
  preparation: PropTypes.string,
};

ExpirationPreparationSection.defaultProps = {
  preparation: undefined,
};

export default ExpirationPreparationSection;
