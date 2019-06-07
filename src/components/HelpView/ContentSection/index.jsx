import React from 'react';

import StepByStepGuide from './StepByStepGuide';
import InstallingPrinters from './InstallingPrinters';

const ContentSection = () => (
  <section className="col-6 overflow-auto">
    <StepByStepGuide />
    <InstallingPrinters />
  </section>
);

export default ContentSection;
