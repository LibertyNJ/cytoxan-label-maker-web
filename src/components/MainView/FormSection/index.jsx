import React from 'react';

import Form from './Form';

const FormSection = props => (
  <section className="col-4 d-flex flex-column d-print-none">
    <Header />
    <Form {...props} />
  </section>
);

const Header = () => (
  <header>
    <h2 className="text-primary">Form</h2>
  </header>
);

export default FormSection;
