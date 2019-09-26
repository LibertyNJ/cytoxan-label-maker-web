'use-strict';

import PropTypes from 'prop-types';
import React from 'react';

import Form from './components/Form';
import { reduceClassName } from '../../../../util';

FormSection.propTypes = {
  className: PropTypes.string,
};

export default function FormSection({ className, ...restProps }) {
  return (
    <section
      className={reduceClassName('d-flex d-print-none flex-column overflow-auto p-3', className)}
      {...restProps}
    >
      <Form style={{ width: 500 }} />
    </section>
  );
}
