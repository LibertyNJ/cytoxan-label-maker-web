import React from 'react';

import ContentSubsection from './ContentSubsection';

const StepByStepGuide = () => (
  <ContentSubsection heading="Step-by-step guide">
    <ol>
      <li>
        Fill in each form field as appropriate. The preview will update in real time as you enter
        data.
      </li>
      <li>
        Use the “Labels needed” checkboxes to specify which labels you need, and “Override” switches
        to change the default infusion times.
      </li>
      <li>
        Press the “Print labels” button. If a required field is empty, the application will direct
        you to complete it.
      </li>
    </ol>
  </ContentSubsection>
);

export default StepByStepGuide;
