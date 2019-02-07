'use strict';

import React from '../scripts/react.development';

export default class AppVersion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>Version {this.props.version}.</span>
    );
  }
}