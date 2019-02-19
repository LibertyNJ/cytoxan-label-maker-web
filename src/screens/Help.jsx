import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/UI/Header';
import Footer from '../components/UI/Footer/Footer';

function Help(props) {
  return (
    <div className="vh-100 d-flex flex-column" >
      <Header heading="Cytoxan Label Maker Help" />
      <main className="container-fluid row">
        <Nav />
        <section className="col-8 overflow-auto" data-spy="scroll" data-target="#nav" data-offset="0">
          <h2 className="text-primary">Content</h2>
          <HelpSection heading="Step-by-step guide">
            <ol>
              <li>Fill in each field of the form as appropriate. Note that the
                  preview will update in real time as you enter data.</li>
              <li>Use the “Labels needed” checkboxes to specify which labels you need, and
                  “Override” switches to change the default infusion times.</li>
              <li>Press the “Print labels” button. If a required field is empty, the application
                  will direct you to complete it.</li>
            </ol>
          </HelpSection>
          <HelpSection heading="Installing printers">
            <p className="lead">The Cytoxan Label Maker relies on having the appropriate label
                printers installed on your computer.</p>
            <p>Label printers not installed? Follow these steps to install your label
                printers.</p>
            <ol>
              <li>Click on the start button in the lower left-hand corner of the Windows
                  taskbar.</li>
              <li>Click on “Devices and Printers” in the right pane of the start menu.</li>
              <li>Click on “Add a printer” at the top of the Devices and Printers window.</li>
              <li>Click on “Add a network, wireless or Bluetooth printer”.</li>
              <li>Click on “The printer that I want isn’t listed”.</li>
              <li>Ensure that the radio button for “Find a printer in the directory, based on
                location or feature” is selected, then press the “Next” button at the bottom of
                  the window.</li>
              <li>Either press the “Stop” button to cancel the automatic search, or dismiss the
                  alert that pops up to warn you about exceeding the maximum number of results.</li>
              <li>Enter the name of the printer in the “Name” field, then press the “Find Now”
                  button.</li>
              <li>Double click on the name of the printer in the returned search results.</li>
              <li>After the automatic driver installation, press the “Next” button, and then the
                  “Finish” button to complete the installation.</li>
            </ol>
          </HelpSection>
          <HelpSection heading="Further help">
            <p>For further help, email <a href="mailto:nliberty@northwell.edu?subject=Cytoxan%20Label%20Creator">nliberty@northwell.edu</a>.</p>
          </HelpSection>
        </section>
      </main >
      <Footer version={props.version} />
    </div >
  );
}

Help.propTypes = {
  version: PropTypes.string.isRequired,
};

function Nav() {
  return (
    <nav id="nav" className="col-4 sticky-top align-self-start">
      <h2 className="text-primary">Topics</h2>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <FragmentLink
            className="nav-link"
            href="#step-by-step-guide"
          >
            Step-by-step guide
          </FragmentLink>
        </li >
        <li className="nav-item">
          <FragmentLink
            className="nav-link"
            href="#installing-printers"
          >
            Installing printers
          </FragmentLink>
        </li >
        <li className="nav-item">
          <FragmentLink
            className="nav-link"
            href="#further-help"
          >
            Further help
          </FragmentLink>
        </li >
      </ul >
    </nav >
  );
}

function HelpSection(props) {
  const id = props.heading.replace(' ', '-').toLowerCase();

  return (
    <section id={id}>
      <h3 className="text-primary">{props.heading}</h3>
      {props.children}
    </section>
  );
}

HelpSection.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

class FragmentLink extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    const fragment = document.querySelector(this.props.href);
    fragment.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  render() {
    return (
      <a
        className={this.props.className}
        href={this.props.href}
        onClick={this.handleClick}
      >
        {this.props.children}
      </a >
    );
  }
}

FragmentLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

FragmentLink.defaultProps = {
  className: undefined,
};

export default Help;
