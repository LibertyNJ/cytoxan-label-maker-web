import React from 'react';

import FacilityInput from './containers/FacilityInput';
import Section from '../../components/Section';
import Column from '../../../../../../../../components/Column';
import FormRow from '../../../../../../../../components/FormRow';

export default function FacilitySection({ ...restProps }) {
  return (
    <Section heading="Facility" {...restProps}>
      <FormRow>
        <Column>
          <FacilityInput
            label="Name"
            name="name"
            placeholder="Facility name…"
            required
            type="text"
          />
        </Column>
      </FormRow>
      <fieldset className="form-group">
        <legend>Address</legend>
        <FormRow>
          <Column>
            <FacilityInput
              label="Street"
              name="street"
              placeholder="123 Some Street…"
              required
              type="text"
            />
          </Column>
        </FormRow>
        <FormRow>
          <Column span={7}>
            <FacilityInput
              label="City"
              name="city"
              placeholder="Anytown…"
              required
              type="text"
            />
          </Column>
          <Column span={2}>
            <FacilityInput
              label="State"
              maxLength={2}
              name="state"
              pattern="^\w{2}$"
              placeholder="ST…"
              required
              type="text"
            />
          </Column>
          <Column span={3}>
            <FacilityInput
              label="Zip"
              name="zip"
              pattern="^\d{5}$"
              placeholder="12345…"
              required
              type="text"
            />
          </Column>
        </FormRow>
      </fieldset>
      <FormRow>
        <Column span={6}>
          <FacilityInput
            label="DEA number"
            maxLength={9}
            name="deaNumber"
            pattern="^[A-X][A-Z9]\d{7}$"
            placeholder="AB0123456…"
            required
            type="text"
          />
        </Column>
        <Column span={6}>
          <FacilityInput
            label="Phone number"
            maxLength={13}
            name="phone"
            pattern="^(\(\d{3}\)|\d{3}-)\d{3}-\d{4}$"
            placeholder="(123)456-7890…"
            required
            type="tel"
          />
        </Column>
      </FormRow>
    </Section>
  );
}
