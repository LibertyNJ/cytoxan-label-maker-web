'use strict';

import React from '../scripts/react.development';

import Label from './label.component';

export default class Preview extends React.Component {
  render() {
    return (
      <div id="label-container">
        <Label />
        <Label />
        <Label />
      </div>
    );
  }
}