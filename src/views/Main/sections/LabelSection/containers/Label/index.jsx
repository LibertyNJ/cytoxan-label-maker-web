'use-strict';

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import LowerHalf from './LowerHalf';
import UpperHalf from './UpperHalf';
import { reduceClassNames } from '../../../../../../util';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Label);

function mapStateToProps(state, { medication: { name } }) {
  return {
    isEnabled: state.medications[name].isEnabled,
  };
}

function mapDispatchToProps() {
  return {};
}

Label.propTypes = {
  className: PropTypes.string,
  isEnabled: PropTypes.bool.isRequired,
  medication: PropTypes.shape({
    concentration: PropTypes.number,
    diluent: PropTypes.shape({
      getVolumeFromStrength: PropTypes.func,
      name: PropTypes.string,
      product: PropTypes.string,
    }),
    name: PropTypes.string,
    product: PropTypes.string,
  }).isRequired,
};

function Label({
  className, isEnabled, medication, ...restProps
}) {
  return isEnabled ? (
    <article className={reduceClassNames('label', className)} {...restProps}>
      <div className="label__body">
        <UpperHalf medication={medication} />
        <LowerHalf medication={medication} />
      </div>
    </article>
  ) : null;
}
