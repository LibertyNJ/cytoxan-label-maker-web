import React from 'react';

import TopicsSection from '../components/HelpView/TopicsSection';
import ContentSection from '../components/HelpView/ContentSection';
import ContactSection from '../components/HelpView/ContactSection';

const HelpView = () => (
  <React.Fragment>
    <div className="row flex-shrink-0">
      <Header />
    </div>
    <div className="row">
      <TopicsSection />
      <ContentSection />
      <ContactSection />
    </div>
  </React.Fragment>
);

const Header = () => (
  <header className="col text-primary">
    <h1 className="text-center">Help</h1>
  </header>
);

export default HelpView;
