import React from 'react';
import PropTypes from 'prop-types';

import SVGIcon from '../components/SVGIcon';

const Help = props => {
  return (
    <React.Fragment>
      <div className="row flex-shrink-0">
        <header className="col text-primary">
          <h1 className="text-center">Help</h1>
        </header>
      </div>
      <div className="row">
        <Nav />
        <section className="col-6 overflow-auto">
          <h2 className="text-primary">Content</h2>
          <HelpSection heading="Step-by-step guide">
            <ol>
              <li>
                Fill in each field of the form as appropriate. Note that the
                preview will update in real time as you enter data.
              </li>
              <li>
                Use the “Labels needed” checkboxes to specify which labels you
                need, and “Override” switches to change the default infusion
                times.
              </li>
              <li>
                Press the “Print labels” button. If a required field is empty,
                the application will direct you to complete it.
              </li>
            </ol>
          </HelpSection>
          <HelpSection heading="Installing printers">
            <p className="lead">
              The Cytoxan Label Maker relies on having the appropriate label
              printers installed on your computer.
            </p>
            <p>
              Label printers not installed? Follow these steps to install your
              label printers.
            </p>
            <ol>
              <li>
                Click on the start button in the lower left-hand corner of the
                Windows taskbar.
              </li>
              <li>
                Click on “Devices and Printers” in the right pane of the start
                menu.
              </li>
              <li>
                Click on “Add a printer” at the top of the Devices and Printers
                window.
              </li>
              <li>Click on “Add a network, wireless or Bluetooth printer”.</li>
              <li>Click on “The printer that I want isn’t listed”.</li>
              <li>
                Ensure that the radio button for “Find a printer in the
                directory, based on location or feature” is selected, then press
                the “Next” button at the bottom of the window.
              </li>
              <li>
                Either press the “Stop” button to cancel the automatic search,
                or dismiss the alert that pops up to warn you about exceeding
                the maximum number of results.
              </li>
              <li>
                Enter the name of the printer in the “Name” field, then press
                the “Find Now” button.
              </li>
              <li>
                Double click on the name of the printer in the returned search
                results.
              </li>
              <li>
                After the automatic driver installation, press the “Next”
                button, and then the “Finish” button to complete the
                installation.
              </li>
            </ol>
          </HelpSection>
        </section>
        <section className="col-3">
          <h2 className="text-primary">Contact</h2>
          <p className="lead">Nathaniel J. Liberty</p>
          <ul className="list-unstyled">
            <li>
              <SVGIcon
                type="phone"
                width="1em"
                height="1em"
                className="align-middle"
                fill="#003ca5"
              />{' '}
              Telephone: <a href="tel:15165621588">(516)562-1588</a>
            </li>
            <li>
              <SVGIcon
                type="mail"
                width="1em"
                height="1em"
                className="align-middle"
                fill="#003ca5"
              />{' '}
              Email:{' '}
              <a href="mailto:nliberty@northwell.edu?subject=Study Drug%20Label%20Maker">
                nliberty@northwell.edu
              </a>
            </li>
          </ul>
        </section>
      </div>
    </React.Fragment>
  );
};

const Nav = () => {
  return (
    <nav id="nav" className="col-3 sticky-top align-self-start">
      <h2 className="text-primary">Topics</h2>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <FragmentLink className="nav-link" href="#step-by-step-guide">
            Step-by-step guide
          </FragmentLink>
        </li>
        <li className="nav-item">
          <FragmentLink className="nav-link" href="#installing-printers">
            Installing printers
          </FragmentLink>
        </li>
      </ul>
    </nav>
  );
};

const HelpSection = props => (
  <section id={props.heading.replace(' ', '-').toLowerCase()}>
    <h3 className="text-primary">{props.heading}</h3>
    {props.children}
  </section>
);

HelpSection.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

class FragmentLink extends React.PureComponent {
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
      </a>
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
