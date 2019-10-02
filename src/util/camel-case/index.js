'use-strict';

export const camelCase = {
  removeFirstWord,
  sliceFirstWord,
};

function removeFirstWord(string) {
  return string.replace(/^[a-z]+[A-Z]/, sliceLastCharacterAndConvertToLowerCase);
}

function sliceLastCharacterAndConvertToLowerCase(string) {
  return string.slice(string.length - 1).toLowerCase();
}

function sliceFirstWord(string) {
  return /^[a-z]+/.exec(string)[0];
}
