'use-strict';

import React from 'react';

import LabelRow from './LabelRow';
import { facility } from '../../../../../../../config';

const {
  address, deaNumber, name, phoneNumber,
} = facility;

export default function LabelHeader({ ...restProps }) {
  return (
    <header {...restProps}>
      <LabelRow>
        <p className="font-weight-bold mx-auto text-center">{name}</p>
      </LabelRow>
      <LabelRow>
        <p>
          {address.line1} <br />
          {address.line2}
        </p>
        <p>
          DEA# {deaNumber} <br />
          {phoneNumber}
        </p>
      </LabelRow>
    </header>
  );
}
