'use-strict';

export function extractKeyFromName(name) {
  return name.replace(/^[a-z]+[A-Z]/, sliceLastCharacterAndConvertToLowerCase);
}

function sliceLastCharacterAndConvertToLowerCase(string) {
  return string.slice(string.length - 1).toLowerCase();
}
