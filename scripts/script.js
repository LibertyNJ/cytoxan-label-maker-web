'use strict';

const VERSION_NUMBER = 'b2';
const versionElement = document.getElementById('version');
versionElement.textContent = `Version ${VERSION_NUMBER}`;

const formElement = document.getElementsByTagName('form')[0];
const formControlElements = document.querySelectorAll('.form__control');
const labelElements = document.querySelectorAll('.label');

formElement.addEventListener('input', (event) => formInputHandler(event));
formElement.addEventListener('submit', (event) => formSubmitHandler(event));

window.addEventListener('beforeprint', (event) => preFlight(event));
window.addEventListener('afterprint', (event) => postFlight(event));

function getElementValueById(id) {
  return document.getElementById(id).value;
}

function formInputHandler(event) {
  const target = event.target;

  if (target.classList.contains('medication-selector')) {
    const selectedMedication = target.classList.item(1);

    if (target.checked === true) {
      labelElements.forEach((label) => {

        if (label.classList.contains(selectedMedication)) {
          label.classList.add('hidden');
        }
      })
    } else {
      
    }
  }
  updateLabel();
}

function formSubmitHandler(event) {
  event.preventDefault();
  window.print();
}

function updateLabel() {
  const patient = {
    name: {
      last: getElementValueById('patient-last-name'),
      first: getElementValueById('patient-first-name'),
      middleInitial: getElementValueById('patient-middle-initial')
    },

    mrn: getElementValueById('patient-mrn'),

    dob: {
      full: new Date(getElementValueById('patient-dob') + 'T00:00:00'),
      get month() { return (this.full.getMonth() || this.full.getMonth() === 0) ? padLeadingZeros(this.full.getMonth() + 1, 2) : '' },
      get date() { return (this.full.getDate()) ? padLeadingZeros(this.full.getDate(), 2) : '' },
      get year() { return (this.full.getFullYear()) ? padLeadingZeros(this.full.getFullYear(), 4) : '' }
    }
  };

  const cyclophosphamide = {
    name: 'cyclophosphamide',
    strength: +getElementValueById('cyclophosphamide-strength'),
    concentration: 20,
    get volume() { return getDrugVolume(this) },
    get diluentVolume() { return (this.strength >= 1000) ? 250 : 100 },
    get totalVolume() { return getTotalVolume(this) },
    infusionTime: 1,
    get rate() { return getDrugRate(this) },
  };

  const mesna = {
    name: 'mesna',
    strength: +getElementValueById('mesna-strength'),
    concentration: 100,
    get volume() { return getDrugVolume(this) },
    diluentVolume: 50,
    get totalVolume() { return getTotalVolume(this) },
    infusionTime: .25,
    get rate() { return getDrugRate(this) },
  };

  const granisetron = {
    name: 'granisetron',
    strength: +getElementValueById('granisetron-strength'),
    concentration: 1,
    get volume() { return getDrugVolume(this) },
    diluentVolume: 50,
    get totalVolume() { return getTotalVolume(this) },
    infusionTime: .5,
    get rate() { return getDrugRate(this) },
  };

  const preparationDate = {
    full: new Date(getElementValueById('preparation-datetime')),
    get month() { return (this.full.getMonth() || this.full.getMonth() === 0) ? padLeadingZeros(this.full.getMonth() + 1, 2) : '' },
    get date() { return (this.full.getDate()) ? padLeadingZeros(this.full.getDate(), 2) : '' },
    get year() { return (this.full.getFullYear()) ? padLeadingZeros(this.full.getFullYear(), 4) : '' },
    get hours() { return (this.full.getHours() || this.full.getHours() === 0) ? padLeadingZeros(this.full.getHours(), 2) : '' },
    get minutes() { return (this.full.getMinutes() || this.full.getMinutes() === 0) ? padLeadingZeros(this.full.getMinutes(), 2) : '' }
  };

  const expirationDate = {
    get full() { return new Date(new Date(preparationDate.full).setDate(preparationDate.full.getDate() + 1)); },
    get month() { return (this.full.getMonth() || this.full.getMonth() === 0) ? padLeadingZeros(this.full.getMonth() + 1, 2) : '' },
    get date() { return (this.full.getDate()) ? padLeadingZeros(this.full.getDate(), 2) : '' },
    get year() { return (this.full.getFullYear()) ? padLeadingZeros(this.full.getFullYear(), 4) : '' },
    get hours() { return (this.full.getHours() || this.full.getHours() === 0) ? padLeadingZeros(this.full.getHours(), 2) : '' },
    get minutes() { return (this.full.getMinutes() || this.full.getMinutes() === 0) ? padLeadingZeros(this.full.getMinutes(), 2) : '' }
  };

  const verifier = getElementValueById('verifier');

  const cyclophosphamideLabel = {
    element: document.getElementById('cyclophosphamide-label'),

    get drug() { return this.element.querySelector('.label-drug') },
    get drugVolume() { return this.element.querySelectorAll('.label-drug-volume') },
    get drugDiluentVolume() { return this.element.querySelectorAll('.label-drug-diluent-volume') },
    get totalVolume() { return this.element.querySelectorAll('.label-total-volume') },
    get rate() { return this.element.querySelector('.label-drug-rate') },
    get compoundingDiluent() { return this.element.querySelector('.label-drug-diluent.compounding') }
  };

  const mesnaLabel = {
    element: document.getElementById('mesna-label'),

    get drug() { return this.element.querySelector('.label-drug') },
    get drugVolume() { return this.element.querySelectorAll('.label-drug-volume') },
    get totalVolume() { return this.element.querySelectorAll('.label-total-volume') },
    get rate() { return this.element.querySelector('.label-drug-rate') }
  };

  const granisetronLabel = {
    element: document.getElementById('granisetron-label'),

    get drug() { return this.element.querySelector('.label-drug') },
    get drugVolume() { return this.element.querySelectorAll('.label-drug-volume') },
    get totalVolume() { return this.element.querySelectorAll('.label-total-volume') },
    get rate() { return this.element.querySelector('.label-drug-rate') }
  };

  const patientNameLabelElements = document.querySelectorAll('.label-patient-name');
  const patientMRNLabelElements = document.querySelectorAll('.label-patient-mrn');
  const patientDobLabelElements = document.querySelectorAll('.label-patient-dob');

  const expirationDateLabelElements = document.querySelectorAll('.label-expiration-datetime');
  const preparationDateLabelElements = document.querySelectorAll('.label-preparation-datetime');
  const verifierLabelElements = document.querySelectorAll('.label-verifier');

  cyclophosphamideLabel.drug.textContent = `Cyclophosphamide ${(cyclophosphamide.strength) ?
    `${formatNumberForMedicationSafety(cyclophosphamide.strength)} mG` :
    ''}`;

  for (let labelField of cyclophosphamideLabel.drugVolume) {
    labelField.textContent = (cyclophosphamide.strength) ?
      `${formatNumberForMedicationSafety(cyclophosphamide.volume)} mL` :
      'Volume';
  }

  for (let labelField of cyclophosphamideLabel.drugDiluentVolume) {
    labelField.textContent = (cyclophosphamide.strength) ?
      `${formatNumberForMedicationSafety(cyclophosphamide.diluentVolume)} mL` :
      'Volume';
  }

  for (let labelField of cyclophosphamideLabel.totalVolume) {
    labelField.textContent = (cyclophosphamide.strength) ?
      `Total volume: ${formatNumberForMedicationSafety(cyclophosphamide.totalVolume)} mL` :
      'Total volume';
  }

  cyclophosphamideLabel.rate.textContent = `Rate: ${(cyclophosphamide.strength) ?
    `${formatNumberForMedicationSafety(cyclophosphamide.rate)} mL/hr` :
    ''}`;

  cyclophosphamideLabel.compoundingDiluent.textContent = `0.9% Sodium Chloride${(cyclophosphamide.strength) ?
    ` ${cyclophosphamide.diluentVolume} mL` :
    ''} bag`;

  mesnaLabel.drug.textContent = `Mesna ${(mesna.strength) ?
    `${formatNumberForMedicationSafety(mesna.strength)} mG` :
    ''}`;

  for (let labelField of mesnaLabel.drugVolume) {
    labelField.textContent = (mesna.strength) ?
      `${formatNumberForMedicationSafety(mesna.volume)} mL` :
      'Volume';
  }

  for (let labelField of mesnaLabel.totalVolume) {
    labelField.textContent = (mesna.strength) ?
      `Total volume: ${formatNumberForMedicationSafety(mesna.totalVolume)} mL` :
      'Total volume';
  }

  mesnaLabel.rate.textContent = `Rate: ${(mesna.strength) ?
    `${formatNumberForMedicationSafety(mesna.rate)} mL/hr` :
    ''}`;

  granisetronLabel.drug.textContent = `Granisetron ${(granisetron.strength) ?
    `${formatNumberForMedicationSafety(granisetron.strength)} mG` :
    ''}`;

  for (let labelField of granisetronLabel.drugVolume) {
    labelField.textContent = (granisetron.strength) ?
      `${formatNumberForMedicationSafety(granisetron.volume)} mL` :
      'Volume';
  }

  for (let labelField of granisetronLabel.totalVolume) {
    labelField.textContent = (granisetron.strength) ?
      `Total volume: ${formatNumberForMedicationSafety(granisetron.totalVolume)} mL` :
      'Total volume';
  }

  granisetronLabel.rate.textContent = `Rate: ${(granisetron.strength) ?
    `${formatNumberForMedicationSafety(granisetron.rate)} mL/hr` :
    ''}`;

  for (let element of patientNameLabelElements) {
    element.textContent = (!patient.name.last && !patient.name.first && !patient.name.middleInitial) ? 'Patient name' : `${patient.name.last}${(patient.name.last && patient.name.first) ? ',' : ''} ${patient.name.first} ${patient.name.middleInitial}${(patient.name.middleInitial) ? '.' : ''}`;
  }

  for (let element of patientMRNLabelElements) {
    element.textContent = `MRN: ${patient.mrn}`;
  }

  for (let element of patientDobLabelElements) {
    element.textContent = `DoB: ${patient.dob.month}${(patient.dob.month && patient.dob.date) ? '/' : ''}${patient.dob.date}${(patient.dob.date && patient.dob.year) ? '/' : ''}${patient.dob.year}`;
  }

  for (let element of expirationDateLabelElements) {
    element.textContent = `Exp: ${expirationDate.month}${(expirationDate.month && expirationDate.date) ? '/' : ''}${expirationDate.date}${(expirationDate.date && expirationDate.year) ? '/' : ''}${expirationDate.year} ${expirationDate.hours}${(expirationDate.hours && expirationDate.minutes) ? ':' : ''}${expirationDate.minutes}`;
  }

  for (let element of preparationDateLabelElements) {
    element.textContent = `Prep: ${preparationDate.month}${(preparationDate.month && preparationDate.date) ? '/' : ''}${preparationDate.date}${(preparationDate.date && preparationDate.year) ? '/' : ''}${preparationDate.year} ${preparationDate.hours}${(preparationDate.hours && preparationDate.minutes) ? ':' : ''}${preparationDate.minutes}`;
  }

  for (let element of verifierLabelElements) {
    element.textContent = `Verify: ${verifier}`;
  }

  function getDrugVolume(drug) {
    return drug.strength / drug.concentration;
  }

  function getDrugRate(drug) {
    return drug.totalVolume / drug.infusionTime;
  }

  function getTotalVolume(drug) {
    return drug.volume + drug.diluentVolume;
  }

  function formatNumberForMedicationSafety(number) {
    return (number.toLocaleString()[0] === '0') ? number.toLocaleString().replace('0.', '.') : number.toLocaleString();
  }

  function padLeadingZeros(number, zeros) {
    return number.toString().padStart(zeros, '0');
  }
}

function postFlight() {
  const printCopies = document.querySelectorAll('.print-copy');
  for (let printCopy of printCopies) {
    printCopy.remove();
  }
}

function preFlight() {
  const labelPreviewElement = document.getElementById('label-preview');
  const labelRowElement = document.getElementById('label-row');
  let copiesToPrint = +getElementValueById('copies');

  while (copiesToPrint > 1) {
    let newPrintCopy = document.createElement('div');
    newPrintCopy.classList.add('print-copy');
    newPrintCopy.innerHTML = labelRowElement.innerHTML;
    labelPreviewElement.append(newPrintCopy);
    copiesToPrint--;
  }
}
