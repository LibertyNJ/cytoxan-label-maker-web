import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class PreviewSection extends Component {
  render() {
    let copies = this.props.copies;
    let printOnlyLabelSets = [];

    while (copies > 1) {
      printOnlyLabelSets.push(
        <>
          <Label
            patient={this.props.patient}
            medication={this.props.medications.cyclophosphamide}
            preparation={this.props.preparation}
            verifier={this.props.verifier}
            printOnly={true}
          />
          <Label
            patient={this.props.patient}
            medication={this.props.medications.mesna}
            preparation={this.props.preparation}
            verifier={this.props.verifier}
            printOnly={true}
          />
          <Label
            patient={this.props.patient}
            medication={this.props.medications.granisetron}
            preparation={this.props.preparation}
            verifier={this.props.verifier}
            printOnly={true}
          />
        </>
      );

      copies--;
    }

    const printOnlyLabels = printOnlyLabelSets.map((printOnlyLabelSet, index) =>
      <React.Fragment key={index}>
        {printOnlyLabelSet}
      </React.Fragment>
    );

    return (
      <section
        id="preview-section"
        className="col-8 align-self-start sticky-top">
        <h2 className="d-print-none text-primary">Preview</h2>
        <div className="d-flex d-print-block justify-content-between">
          <Label
            patient={this.props.patient}
            medication={this.props.medications.cyclophosphamide}
            preparation={this.props.preparation}
            verifier={this.props.verifier}
          />
          <Label
            patient={this.props.patient}
            medication={this.props.medications.mesna}
            preparation={this.props.preparation}
            verifier={this.props.verifier}
          />
          <Label
            patient={this.props.patient}
            medication={this.props.medications.granisetron}
            preparation={this.props.preparation}
            verifier={this.props.verifier}
          />
          {printOnlyLabels}
        </div>
      </section>
    );
  }
}


PreviewSection.propTypes = {
  copies: PropTypes.string.isRequired,
  patient: PropTypes.object.isRequired,
  medications: PropTypes.object.isRequired,
  preparation: PropTypes.string.isRequired,
  verifier: PropTypes.string.isRequired
};

class Label extends Component {
  render() {
    if (this.props.medication.isEnabled) {
      return (
        <article className={this.props.printOnly ? 'label d-none d-print-block' : 'label'}>
          <div className="label__body">
            <div className="label__upper-half">
              <header>
                <p className="text-center font-weight-bold">North Shore University Hospital — Pharmacy Department</p>
                <div className="d-flex justify-content-between m-0">
                  <p>
                    300 Community Drive<br />
                    Manhasset, NY 11030
                  </p>
                  <p>
                    DEA# AN0768917<br />
                    (516)562-4700
                  </p>
                </div>
              </header>
              <PatientLabelSection {...this.props.patient} />
              <MedicationLabelSection {...this.props.medication} />
              <ExpirationPreparationLabelSection preparation={this.props.preparation} />
              <VerifyFillCheckLabelSection verifier={this.props.verifier} />
            </div>
            <div className="label__lower-half">
              <p className="label__compounding-notice text-center font-weight-bold mt-3">* * * FOR COMPOUNDING ONLY * * *</p>
              <PatientLabelSection {...this.props.patient} />
              <CompoundingLabelSection {...this.props.medication} />
              <ExpirationPreparationLabelSection preparation={this.props.preparation} />
              <VerifyFillCheckLabelSection verifier={this.props.verifier} />
            </div>
          </div>
        </article>
      );
    } else {
      return (
        <></>
      );
    }
  }
}

class PatientLabelSection extends Component {
  render() {
    const name = {
      last: this.props.name.last ? this.props.name.last : 'Last name',
      first: this.props.name.first ? this.props.name.first : 'First name',
      mi: this.props.name.mi ? `${this.props.name.mi}.` : ''
    };

    const mrn = this.props.mrn ? this.props.mrn : '########';

    const dateFormat = {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    };

    const dob = this.props.dob ? new Date(`${this.props.dob}T00:00:00`).toLocaleString('en-US', dateFormat) : 'MM/DD/YYYY';

    return (
      <section className="my-1">
        <div className="d-flex justify-content-between m-0">
          <p className="font-weight-bold">{name.last}, {name.first} {name.mi}</p>
        </div>
        <div className="d-flex justify-content-between m-0">
          <p>MRN: {mrn}</p>
          <p>DoB: {dob}</p>
        </div>
      </section>
    );
  }
}

PatientLabelSection.propTypes = {
  name: PropTypes.shape({
    last: PropTypes.string,
    first: PropTypes.string,
    mi: PropTypes.string
  }).isRequired,
  mrn: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired
};

class MedicationLabelSection extends Component {
  render() {
    const medication = {
      name: this.props.name ? this.props.name : 'Medication',
      strength: this.props.strength ? this.props.strength : 0,
      volume: this.props.strength && this.props.concentration ? this.props.strength / this.props.concentration : 0,
    };

    const diluent = {
      name: this.props.diluent.name ? this.props.diluent.name : 'Diluent',
      volume: this.props.diluent.volume ? this.props.diluent.volume : '#'
    };
    let infusionTime = this.props.infusionTime;
    const totalVolume = typeof (medication.volume + diluent.volume) === 'number' ? medication.volume + diluent.volume : 0;
    const rate = (totalVolume / infusionTime) * 60;
    let infusionTimeUnits = 'minute(s)';

    if (this.props.infusionTime % 60 === 0) {
      infusionTime /= 60;
      infusionTimeUnits = 'hour(s)';
    }

    const specialInstructions = this.props.specialInstructions;

    const numberFormat = {
      useGrouping: true,
      maximumFractionDigits: 2
    };

    return (
      <section className="my-1">
        <div className="d-flex justify-content-between m-0">
          <p className="font-weight-bold">{medication.name} {Number(medication.strength).toLocaleString('en-US', numberFormat)} mG</p>
          <p>{Number(medication.volume).toLocaleString('en-US', numberFormat)} mL</p>
        </div>
        <div className="d-flex justify-content-between m-0">
          <p className="font-weight-bold">in {diluent.name}</p>
          <p>{Number(diluent.volume).toLocaleString('en-US', numberFormat)} mL</p>
        </div>
        <p className="text-right">Total volume: {Number(totalVolume).toLocaleString('en-US', numberFormat)} mL</p>
        <div className="d-flex justify-content-between m-0">
          <p className="font-weight-bold">Rate: {Number(rate).toLocaleString('en-US', numberFormat)} mL / hr</p>
          <p className="font-weight-bold">Infuse over {Number(infusionTime).toLocaleString('en-US', numberFormat)} {infusionTimeUnits}</p>
        </div>
        <p className="font-italic">{specialInstructions}</p>
      </section>
    );
  }
}

MedicationLabelSection.propTypes = {
  name: PropTypes.string.isRequired,
  strength: PropTypes.string.isRequired,
  concentration: PropTypes.number.isRequired,
  diluent: PropTypes.shape({
    name: PropTypes.string,
    volume: PropTypes.number
  }).isRequired,
  infusionTime: PropTypes.string.isRequired,
  specialInstructions: PropTypes.string.isRequired
};

class ExpirationPreparationLabelSection extends Component {
  getTomorrow(date) {
    return new Date(date.setDate(date.getDate() + 1));
  }

  render() {
    const dateFormat = {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    };

    const preparation = this.props.preparation ? new Date(this.props.preparation).toLocaleString('en-US', dateFormat) : 'MM/DD/YYYY hh:mm';
    const expiration = this.props.preparation ? this.getTomorrow(new Date(this.props.preparation)).toLocaleString('en-US', dateFormat) : 'MM/DD/YYYY hh:mm';

    return (
      <section className="my-1">
        <div className="d-flex justify-content-between m-0">
          <p className="font-weight-bold">Exp: {expiration}</p>
          <p>Prep: {preparation}</p>
        </div>
      </section>
    );
  }
}

ExpirationPreparationLabelSection.propTypes = {
  preparation: PropTypes.string.isRequired
};

class VerifyFillCheckLabelSection extends Component {
  render() {
    const verifier = this.props.verifier ? this.props.verifier : '____';

    return (
      <section className="mt-3">
        <div className="d-flex justify-content-between m-0">
          <p>Verify: {verifier}</p>
          <p>Fill: ____</p>
          <p>Check: ____</p>
        </div>
      </section>
    );
  }
}

VerifyFillCheckLabelSection.propTypes = {
  verifier: PropTypes.string.isRequired
};

class CompoundingLabelSection extends Component {
  render() {
    const medication = {
      product: this.props.product ? this.props.product : 'Medication product',
      strength: this.props.strength,
      concentration: this.props.concentration,
      volume: this.props.strength && this.props.concentration ? this.props.strength / this.props.concentration : 0,
    };

    const diluent = {
      product: this.props.diluent.product ? this.props.diluent.product : 'Diluent product',
      volume: this.props.diluent.volume ? this.props.diluent.volume : '#'
    };

    const totalVolume = typeof (medication.volume + diluent.volume) === 'number' ? medication.volume + diluent.volume : 0;

    const numberFormat = {
      useGrouping: true,
      maximumFractionDigits: 2
    };

    return (
      <section className="my-1">
        <div className="d-flex justify-content-between m-0">
          <p>{medication.product}</p>
          <p>{Number(medication.volume).toLocaleString('en-US', numberFormat)} mL</p>
        </div>
        <div className="d-flex justify-content-between m-0">
          <p>{diluent.product}</p>
          <p>{Number(diluent.volume).toLocaleString('en-US', numberFormat)} mL</p>
        </div>
        <p className="text-right">Total volume: {Number(totalVolume).toLocaleString('en-US', numberFormat)} mL</p>
      </section>
    );
  }
}

CompoundingLabelSection.propTypes = {
  product: PropTypes.string.isRequired,
  strength: PropTypes.string.isRequired,
  concentration: PropTypes.number.isRequired,
  diluent: PropTypes.shape({
    product: PropTypes.string,
    volume: PropTypes.number
  }).isRequired
};
