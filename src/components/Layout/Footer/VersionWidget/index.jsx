'use-strict';

import React from 'react';

import { version } from '../../../../../package.json';

export default function VersionWidget({ ...restProps }) {
  return <p {...restProps}>Version: {version}</p>;
}
