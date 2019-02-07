'use strict';

import React from '../scripts/react.development';

export default class Label extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article id={this.props.id} className="label mx-1">
        <LabelUpperHalf
          {...this.props}
        />
        <LabelLowerHalf
          {...this.props}
        />
      </article>
    );
  }
}

class LabelUpperHalf extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="label__upper-half">
        <LabelHeader />
        <LabelPatientSection
          name={this.props.patient.name}
          mrn={this.props.patient.mrn}
          dob={this.props.patient.dob}
        />
        <section>
          <div className="label__row">
            <p className="font-weight-bold">{this.props.medication.name}</p>
            <p>{this.props.medication.volume}</p>
          </div>
          <div className="label__row">
            <p className="font-weight-bold">in {this.props.diluent.name}</p>
            <p>{this.props.diluent.volume}</p>
          </div>
          <p>Total volume: </p>
          <p className="font-weight-bold">Rate: {this.props.rate}</p>
          <p className="font-weight-bold">Infuse once, over {this.props.duration}</p>
        </section>
        <LabelExpirationAndPreparationSection
          preparation={this.props.preparation}
          expiration={this.props.expiration}
        />
        <VerifyFillCheckSection
          verifier={this.props.verifier}
        />
      </div>
    );
  }
}

class LabelLowerHalf extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="label__lower-half">
        <footer>
          <p className="label__compounding-notice">* * * FOR COMPOUNDING ONLY * * *</p>
          <LabelPatientSection
            name={this.props.patient.name}
            mrn={this.props.patient.mrn}
            dob={this.props.patient.dob}
          />
          <section>
            <div className="label__row">
              <p className="font-weight-bold">{this.props.medication.product}</p>
              <p>{this.props.medication.volume}</p>
            </div>
            <div className="label__row">
              <p className="font-weight-bold">{this.props.diluent.product}</p>
              <p>{this.props.diluent.volume}</p>
            </div>
            <p>Total volume: {this.props.totalVolume}</p>
          </section>
          <LabelExpirationAndPreparationSection
            preparation={this.props.preparation}
            expiration={this.props.expiration}
          />
          <VerifyFillCheckSection
            verifier={this.props.verifier}
          />
        </footer>
      </div>
    );
  }
}

class LabelHeader extends React.Component {
  render() {
    return (
      <header>
        <p className="font-weight-bold">North Shore University Hospital — Pharmacy Department</p>
        <div className="label__row">
          <p>300 Community Drive <br />
            Manhasset, NY 11030</p>
          <p>DEA# AN0768917 <br />
            (516)562-4700</p>
        </div>
      </header>
    );
  }
}

class LabelPatientSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <div className="label__row">
          <p className="font-weight-bold">{this.props.name}</p>
        </div>
        <div className="label__row">
          <p>MRN: {this.props.mrn}</p>
          <p>DoB: {this.props.dob}</p>
        </div>
      </section>
    );
  }
}

class LabelExpirationAndPreparationSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <div className="label__row">
          <p>Exp: {this.props.expiration}</p>
          <p>Prep: {this.props.preparation}</p>
        </div>
      </section>
    );
  }
}


class VerifyFillCheckSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <div className="label__row">
          <p>Verify: {this.props.verifier}</p>
          <p>Fill: ____</p>
          <p>Check: ____ </p>
        </div>
      </section>
    );
  }
}
