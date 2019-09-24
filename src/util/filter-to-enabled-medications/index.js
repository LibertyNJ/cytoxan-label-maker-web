'use-strict';

export function filterToEnabledMedications(medications) {
  return medications.filter(({ isEnabled }) => isEnabled);
}
