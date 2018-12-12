'use strict';

const VERSION_NUMBER = 'a1';
const versionElement = document.getElementById('version');
versionElement.textContent = `Version ${VERSION_NUMBER}`;

const formElement = document.getElementsByTagName('form')[0];
const formControlElements = document.querySelectorAll('.form-control');

const labelElement = document.getElementById('label');
const labelFieldElements = document.querySelectorAll('.label-field');

let completedPrinting = true;

formElement.addEventListener('input', (event) => formInputHandler(event));
formElement.addEventListener('submit', (event) => formSubmitHandler(event));

window.onbeforeprint = preFlight;
window.onafterprint = postFlight;

function formInputHandler(event) {
  const eventTarget = event.target;
  updateLabel();
}

function updateLabel() {
  const patient = {
    name: {
      last: getElementValueById('patient-last-name'),
      first: getElementValueById('patient-first-name'),
      middleInitial: getElementValueById('patient-middle-initial')
    },

    dob: {
      full: new Date(getElementValueById('patient-dob') + 'T00:00:00'),
      get month() { return (this.full.getMonth() || this.full.getMonth() === 0) ? padLeadingZeros(this.full.getMonth() + 1, 2) : '' },
      get date() { return (this.full.getDate()) ? padLeadingZeros(this.full.getDate(), 2) : '' },
      get year() { return (this.full.getFullYear()) ? padLeadingZeros(this.full.getFullYear(), 4) : '' }
    },

    mrn: getElementValueById('patient-mrn'),
    visitId: getElementValueById('patient-visit-id')
  };

  const cyclophosphamide = {
    name: 'Cyclophosphamide',

    strength: {
      number: +getElementValueById('cyclophosphamide-strength'),
      units: 'mG'
    },

    concentration: {
      strength: {
        number: 20,
        units: 'mG'
      },

      volume: {
        number: 1,
        units: 'mL'
      }
    },

    volume: {
      get number() { return getDrugVolume(cyclophosphamide) },
      units: 'mL'
    },

    diluent: {
      name: '0.9% Sodium Chloride',

      volume: {
        get number() { return (cyclophosphamide.strength.number >= 1000) ? 250 : 100 },
        units: 'mL'
      }
    },

    totalVolume: {
      get number() { return getTotalVolume(cyclophosphamide) },
      units: 'mL'
    },

    infusionTime: {
      number: 1,
      units: 'hr'
    },

    rate: {
      get number() { return getDrugRate(cyclophosphamide) },
      units: 'mL/hr'
    }
  };

  const mesna = {
    name: 'Mesna',

    strength: {
      number: +getElementValueById('mesna-strength'),
      units: 'mG'
    },

    concentration: {
      strength: {
        number: 100,
        units: 'mG'
      },

      volume: {
        number: 1,
        units: 'mL'
      }
    },

    diluent: {
      name: '0.9% Sodium Chloride',

      volume: {
        number: 50,
        units: 'mL'
      }
    },

    totalVolume: {
      get number() { return getTotalVolume(mesna) },
      units: 'mL'
    },

    infusionTime: {
      number: .25,
      units: 'hr'
    },

    rate: {
      get number() { return getDrugRate(mesna) },
      units: 'mL/hr'
    }
  };

  const granisetron = {
    name: 'Granisetron',

    strength: {
      number: +getElementValueById('granisetron-strength'),
      units: 'mG'
    },

    concentration: {
      strength: {
        number: 1,
        units: 'mG'
      },

      volume: {
        number: 1,
        units: 'mL'
      }
    },

    diluent: {
      name: '0.9% Sodium Chloride',

      volume: {
        number: 50,
        units: 'mL'
      }
    },

    totalVolume: {
      get number() { return getTotalVolume(granisetron) },
      units: 'mL'
    },

    infusionTime: {
      number: .5,
      units: 'hr'
    },

    rate: {
      get number() { return getDrugRate(granisetron) },
      units: 'mL/hr'
    }
  };


  const preparationDate = {
    full: new Date(getElementValueById('preparation-datetime')),
    get month() { return (this.full.getMonth() || this.full.getMonth() === 0) ? padLeadingZeros(this.full.getMonth() + 1, 2) : '' },
    get date() { return (this.full.getDate()) ? padLeadingZeros(this.full.getDate(), 2) : '' },
    get year() { return (this.full.getFullYear()) ? padLeadingZeros(this.full.getFullYear(), 4) : '' },
    get hours() { return (this.full.getHours()) ? padLeadingZeros(this.full.getHours(), 2) : '' },
    get minutes() { return (this.full.getMinutes()) ? padLeadingZeros(this.full.getMinutes(), 2) : '' }
  }

  const expirationDate = {
    get full() { return new Date(new Date(preparationDate.full).setDate(preparationDate.full.getDate() + 1)); },
    get month() { return (this.full.getMonth() || this.full.getMonth() === 0) ? padLeadingZeros(this.full.getMonth() + 1, 2) : '' },
    get date() { return (this.full.getDate()) ? padLeadingZeros(this.full.getDate(), 2) : '' },
    get year() { return (this.full.getFullYear()) ? padLeadingZeros(this.full.getFullYear(), 4) : '' },
    get hours() { return (this.full.getHours()) ? padLeadingZeros(this.full.getHours(), 2) : '' },
    get minutes() { return (this.full.getMinutes()) ? padLeadingZeros(this.full.getMinutes(), 2) : '' }
  }

  const verifier = getElementValueById('verifier');

  const cyclophosphamideLabel = {
    parentElement: document.getElementById('cyclophosphamide-label'),

    get drug() { return this.parentElement.querySelector('.label-drug') },
    get drugVolume() { return this.parentElement.querySelector('.label-drug-volume') },
    get drugDiluentVolume() { return this.parentElement.querySelector('.label-drug-diluent-volume') },
    get totalVolume() { return this.parentElement.querySelector('.label-total-volume') },
    get rate() { return this.parentElement.querySelector('.label-drug-rate') }
  };

  const mesnaLabel = {
    parentElement: document.getElementById('mesna-label'),

    get drug() { return this.parentElement.querySelector('.label-drug') },
    get drugVolume() { return this.parentElement.querySelector('.label-drug-volume') },
    get totalVolume() { return this.parentElement.querySelector('.label-total-volume') },
    get rate() { return this.parentElement.querySelector('.label-drug-rate') }
  };

  const granisetronLabel = {
    parentElement: document.getElementById('granisetron-label'),

    get drug() { return this.parentElement.querySelector('.label-drug') },
    get drugVolume() { return this.parentElement.querySelector('.label-drug-volume') },
    get totalVolume() { return this.parentElement.querySelector('.label-total-volume') },
    get rate() { return this.parentElement.querySelector('.label-drug-rate') }
  };

  const patientNameLabelElements = document.querySelectorAll('.label-patient-name');
  const patientDobLabelElements = document.querySelectorAll('.label-patient-dob');
  const patientMrnLabelElements = document.querySelectorAll('.label-patient-mrn');
  const patientVisitIdLabelElements = document.querySelectorAll('.label-patient-visit-id');

  const expirationDateLabelElements = document.querySelectorAll('.label-expiration-datetime');
  const preparationDateLabelElements = document.querySelectorAll('.label-preparation-datetime');
  const verifierLabelElements = document.querySelectorAll('.label-verifier');

  cyclophosphamideLabel.drug.textContent = `Cyclophosphamide ${(cyclophosphamide.strength.number) ?
    `${formatNumberForMedicationSafety(cyclophosphamide.strength.number)} ${cyclophosphamide.strength.units}` :
    ''}`;

  cyclophosphamideLabel.drugVolume.textContent = (cyclophosphamide.strength.number) ?
    `${cyclophosphamide.volume.number} ${cyclophosphamide.volume.units}` :
    'Volume';

  cyclophosphamideLabel.drugDiluentVolume.textContent = (cyclophosphamide.strength.number) ?
    `${cyclophosphamide.diluent.volume.number} ${cyclophosphamide.diluent.volume.units}` :
    'Volume';

  cyclophosphamideLabel.totalVolume.textContent = (cyclophosphamide.strength.number) ?
    `${cyclophosphamide.totalVolume.number} ${cyclophosphamide.totalVolume.units}` :
    'Total volume';

  for (let element of patientNameLabelElements) {
    element.textContent = (!patient.name.last && !patient.name.first && !patient.name.middleInitial) ? 'Patient name' : `${patient.name.last}${(patient.name.last && patient.name.first) ? ',' : ''} ${patient.name.first} ${patient.name.middleInitial}${(patient.name.middleInitial) ? '.' : ''}`;
  }

  for (let element of patientDobLabelElements) {
    element.textContent = `DoB: ${patient.dob.month}${(patient.dob.month && patient.dob.date) ? '/' : ''}${patient.dob.date}${(patient.dob.date && patient.dob.year) ? '/' : ''}${patient.dob.year}`;
  }

  for (let element of patientMrnLabelElements) {
    element.textContent = `MRN: ${patient.mrn}`;
  }

  for (let element of patientVisitIdLabelElements) {
    element.textContent = `Visit: ${patient.visitId}`;
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
}

function formSubmitHandler(event) {
  event.preventDefault();
  window.print();
}

function getElementValueById(id) {
  return document.getElementById(id).value;
}

function padLeadingZeros(number, zeros) {
  return number.toString().padStart(zeros, '0');
}

function formatNumberForMedicationSafety(number) {
  return (number.toLocaleString()[0] === '0') ? number.toLocaleString().replace('0.', '.') : number.toLocaleString();
}

function getDrugVolume(drug) {
  return drug.strength.number / drug.concentration.strength.number;
}

function getTotalVolume(drug) {
  return drug.volume + drug.diluent.volume.number
}

function getDrugRate(drug) {
  return drug.totalVolume.number / drug.infusionTime.number;
}