'use-strict';

export const facility = {
  address: {
    line1: '123 Some Street',
    line2: 'Anytown, ST 12345',
  },
  deaNumber: 'AB0123456',
  name: 'Facility Name',
  phoneNumber: '(012)345-6789',
};

export const medications = [
  {
    concentration: 20,
    diluent: {
      getVolumeFromStrength: strength => (strength >= 1000 ? 250 : 100),
      name: '0.9% Sodium Chloride',
      product: '0.9% Sodium Chloride bag',
    },
    name: 'cyclophosphamide',
    placeholders: {
      strength: '500…',
      infusionTime: '60…',
    },
    product: 'Cyclophosphamide 500 mG / 25 mL vial',
  },
  {
    concentration: 100,
    diluent: {
      getVolumeFromStrength: () => 50,
      name: '0.9% Sodium Chloride',
      product: '0.9% Sodium Chloride bag',
    },
    name: 'mesna',
    placeholders: {
      strength: '250…',
      infusionTime: '15…',
    },
    product: 'Mesna 1,000 mG / 10 mL vial',
  },
  {
    concentration: 1,
    diluent: {
      getVolumeFromStrength: () => 50,
      name: '0.9% Sodium Chloride',
      product: '0.9% Sodium Chloride bag',
    },
    name: 'granisetron',
    placeholders: {
      strength: '1…',
      infusionTime: '30…',
    },
    product: 'Granisetron 1 mG / 1 mL vial',
  },
];
