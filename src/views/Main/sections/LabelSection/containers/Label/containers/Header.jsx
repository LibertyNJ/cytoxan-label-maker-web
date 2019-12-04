import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import LabelRow from '../components/LabelRow';

export default connect(mapStateToProps, mapDispatchToProps)(LabelHeader);

function mapStateToProps(state) {
  return {
    city: state.facility.city,
    deaNumber: state.facility.deaNumber,
    name: state.facility.name,
    phone: state.facility.phone,
    state: state.facility.state,
    street: state.facility.street,
    zip: state.facility.zip,
  };
}

function mapDispatchToProps() {
  return {};
}

LabelHeader.propTypes = {
  city: PropTypes.string.isRequired,
  deaNumber: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
};

function LabelHeader({
  city,
  deaNumber,
  name,
  phone,
  state,
  street,
  zip,
  ...restProps
}) {
  return (
    <header {...restProps}>
      <LabelRow>
        <p className="font-weight-bold mx-auto text-center">
          {name || 'Facility name'}
        </p>
      </LabelRow>
      <LabelRow>
        <p>
          {street || '123 Some Street'} <br />
          {city || 'Anytown'}, {state || 'ST'} {zip || '12345'}
        </p>
        <p>
          DEA# {deaNumber || 'AB0123456'} <br />
          {phone || '(123)456-7890'}
        </p>
      </LabelRow>
    </header>
  );
}
