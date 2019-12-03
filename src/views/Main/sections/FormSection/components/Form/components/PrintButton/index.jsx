import PropTypes from 'prop-types';
import React from 'react';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { reduceClassNames } from '../../../../../../../../util';

PrintButton.propTypes = {
  className: PropTypes.string,
};

export const BASE_CLASS_NAME = 'btn btn-lg btn-primary';

export default function PrintButton({ className, ...restProps }) {
  return (
    <button className={reduceClassNames(BASE_CLASS_NAME, className)} type="submit" {...restProps}>
      <FontAwesomeIcon icon={faPrint} /> Print
    </button>
  );
}
