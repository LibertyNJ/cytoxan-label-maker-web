'use-strict';

import React from 'react';

import FormSection from './sections/FormSection';
import LabelSection from './sections/LabelSection';

export default function Main() {
  return (
    <React.Fragment>
      <FormSection className="flex-grow-0 flex-shrink-0" />
      <LabelSection className="flex-grow-1 flex-shrink-1" />
    </React.Fragment>
  );
}
