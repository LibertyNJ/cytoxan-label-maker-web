import React, { Component } from 'react';

export default class HelpView extends Component {
  render() {
    return (
      <main className="container-fluid row">
        <HelpNav />
        <section className="col-8">
          <h2 className="text-primary">Content</h2>
          <section id="step-by-step-guide">
            <h3 className="text-primary">Step-by-step guide</h3>
            <ol>
              <li>Fill in each field of the “Label information” form as appropriate. Note that the “Label preview” will
            update in real time as you enter data.</li>
              <li>Use the “Labels needed” checkboxes to specify which labels you need, and “Override” switches to
            change the default infusion times.</li>
              <li>Enter the desired number of copies and press the “Print labels” button. If a required field is empty, the
                application
            will direct you to complete it.</li>
              <li>In the print menu, ensure that the “Destination” is the correct label printer for your label type. Click
                on the “Change…” button to adjust it if necessary. The application will print the number of
            copies you specified on the form. <strong>Do not change the “Copies” field in the print menu</strong>.</li>
              <li>Click on the “Print” button on this menu to print the label.</li>
            </ol>
          </section>
          <section id="installing-google-chrome">
            <h3 className="text-primary">Installing Google Chrome</h3>
            <p className="lead">The Cytoxan Label Creator works best with Google Chrome.</p>
            <p>Don’t have Chrome? Follow these steps to get Chrome.</p>
            <ol>
              <li><a href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer">Click on this link to navigate to the Google
              Chrome website</a>. This site will open in a new tab.</li>
              <li>Click on the button that says “Download Chrome”.</li>
              <li>If you <strong>do not</strong> want to use Chrome as your default browser on this computer, uncheck the
                box
            that says “Set Google Chrome as my default browser”.</li>
              <li>Click on the button that says “Accept and Install”.</li>
              <li>Run the downloaded “ChromeSetup.exe” file and follow the setup program instructions to complete the
            installation.</li>
            </ol>
          </section>
          <section id="installing-printers">
            <h3 className="text-primary">Installing printers</h3>
            <p className="lead">The Cytoxan Label Creator relies on having the appropriate label printers installed on
          your computer.</p>
            <p>Label printers not installed? Follow these steps to install your label printers.</p>
            <ol>
              <li>Click on the start button in the lower left-hand corner of the Windows taskbar.</li>
              <li>Click on “Devices and Printers” in the right pane of the start menu.</li>
              <li>Click on “Add a printer” at the top of the Devices and Printers window.</li>
              <li>Click on “Add a network, wireless or Bluetooth printer”.</li>
              <li>Click on “The printer that I want isn’t listed”.</li>
              <li>Ensure that the radio button for “Find a printer in the directory, based on location or feature” is
            selected, then press the “Next” button at the bottom of the window.</li>
              <li>Either press the “Stop” button to cancel the automatic search, or dismiss the alert that pops up to warn
            you about exceeding the maximum number of results.</li>
              <li>Enter the name of the printer in the “Name” field, then press the “Find Now” button.</li>
              <li>Double click on the name of the printer in the returned search results.</li>
              <li>After the automatic driver installation, press the “Next” button, and then the “Finish” button to complete
            the installation.</li>
            </ol>
          </section>
          <section id="further-help">
            <h3 className="text-primary">Further help</h3>
            <p>For further help, email <a
              href="mailto:nliberty@northwell.edu?subject=Cytoxan%20Label%20Creator">nliberty@northwell.edu</a>.</p>
          </section>
        </section>
      </main >
    );
  }
}

class HelpNav extends Component {
  render() {
    return (
      <nav
        id="help-navigation"
        className="col-4 sticky-top align-self-start">
        <h2 className="text-primary">Topics</h2>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a className="nav-link" href="#step-by-step-guide">Step-by-step guide</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#installing-google-chrome">Installing Google Chrome</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#installing-printers">Installing printers</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#further-help">Further help</a>
          </li>
        </ul>
      </nav>
    );
  }
}