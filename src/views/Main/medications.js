'use-strict';

export default [
  {
    concentration: 20,
    diluent: {
      name: '0.9% Sodium Chloride',
      product: '0.9% Sodium Chloride bag',
      volume: this.state.cyclophosphamideStrength >= 1000 ? 250 : 100,
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
      name: '0.9% Sodium Chloride',
      product: '0.9% Sodium Chloride bag',
      volume: 50,
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
      name: '0.9% Sodium Chloride',
      product: '0.9% Sodium Chloride bag',
      volume: 50,
    },
    name: 'granisetron',
    placeholders: {
      strength: '1…',
      infusionTime: '30…',
    },
    product: 'Granisetron 1 mG / 1 mL vial',
  },
];
