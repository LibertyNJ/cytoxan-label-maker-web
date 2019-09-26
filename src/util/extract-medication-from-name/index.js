'use-strict';

export function extractMedicationFromName(name) {
  return /^[a-z]+/.exec(name)[0];
}
