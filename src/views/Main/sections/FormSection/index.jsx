import PropTypes from 'prop-types';
import React from 'react';

import Form from './components/Form';
import { reduceClassNames } from '../../../../util';

FormSection.propTypes = {
  className: PropTypes.string,
};

const BASE_CLASS_NAME = 'd-flex d-print-none flex-column overflow-auto p-3';

export default function FormSection({ className, ...restProps }) {
  return (
    <section className={reduceClassNames(BASE_CLASS_NAME, className)} {...restProps}>
      <Form style={{ width: 500 }} />
    </section>
  );
}
