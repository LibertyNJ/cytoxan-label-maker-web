import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import LabelRow from '../components/LabelRow';
import LabelSection from '../components/LabelSection';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpirationPreparationSection);

function mapStateToProps(state) {
  return {
    preparation: state.preparationDate,
  };
}

function mapDispatchToProps() {
  return {};
}

ExpirationPreparationSection.propTypes = {
  preparation: PropTypes.string.isRequired,
};

function ExpirationPreparationSection({ preparation, ...restProps }) {
  const preparationDate = new Date(preparation);
  const preparationDatetimeString = formatDateAsString(preparationDate);
  const expirationDate = getNextDayDate(preparationDate);
  const expirationDatetimeString = formatDateAsString(expirationDate);
  return (
    <LabelSection {...restProps}>
      <LabelRow>
        <p className="font-weight-bold">Exp: {expirationDatetimeString}</p>
        <p>Prep: {preparationDatetimeString}</p>
      </LabelRow>
    </LabelSection>
  );
}

function getNextDayDate(date) {
  const nextDayDate = new Date(date);
  const ONE_DAY = 1;
  nextDayDate.setDate(date.getDate() + ONE_DAY);
  return nextDayDate;
}

function isInvalidDate(date) {
  return date.toString() === 'Invalid Date';
}

function formatDateAsString(date) {
  if (isInvalidDate(date)) {
    return 'MM/DD/YYYY hh:mm';
  }
  const DATE_FORMAT = {
    day: '2-digit',
    hour: '2-digit',
    hour12: false,
    minute: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };
  return date.toLocaleString('en-US', DATE_FORMAT);
}
