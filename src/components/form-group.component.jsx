'use strict';

import React from '../scripts/react.development';

export default class FormGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.type === 'checkbox') {
      return (
        <div className="custom-control custom-checkbox">
          <input
            id={this.props.id}
            className="custom-control-input"
            type={this.props.type}
            name={this.props.id}
            value={}
            onChange={this.props.handleChange}
            placeholder={this.props.placeholder}
          />
          <label htmlFor={this.props.id}>
            {this.props.label}
          </label>
        </div>
      );
    } else if (this.props.type === 'switch') {
      return (

      );
    } else {
      return (
        <div className="form-group">
          <label htmlFor={this.props.id}>
            {this.props.label}
          </label>
          <input
            id={this.props.id}
            className="form-control"
            type={this.props.type}
            name={this.props.id}
            value={}
            onChange={this.props.handleChange}
            placeholder={this.props.placeholder}
          />
        </div>
      );
    }
  }
}