import React from 'react';

import ContentSubsection from './ContentSubsection';

const InstallingPrinters = () => (
  <ContentSubsection heading="Installing printers">
    <p className="lead">
      The Cytoxan Label Maker relies on having the appropriate label printers installed on your
      computer.
    </p>
    <p>Label printers not installed? Follow these steps to install your label printers.</p>
    <ol>
      <li>Click on the start button in the lower left-hand corner of the Windows taskbar.</li>
      <li>Click on “Devices and Printers” in the right pane of the start menu.</li>
      <li>Click on “Add a printer” at the top of the Devices and Printers window.</li>
      <li>Click on “Add a network, wireless or Bluetooth printer”.</li>
      <li>Click on “The printer that I want isn’t listed”.</li>
      <li>
        Ensure that the radio button for “Find a printer in the directory, based on location or
        feature” is selected, then press the “Next” button at the bottom of the window.
      </li>
      <li>
        Either press the “Stop” button to cancel the automatic search, or dismiss the alert that
        pops up to warn you about exceeding the maximum number of results.
      </li>
      <li>Enter the name of the printer in the “Name” field, then press the “Find Now” button.</li>
      <li>Double click on the name of the printer in the returned search results.</li>
      <li>
        After the automatic driver installation, press the “Next” button, and then the “Finish”
        button to complete the installation.
      </li>
    </ol>
  </ContentSubsection>
);

export default InstallingPrinters;
