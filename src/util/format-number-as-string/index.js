'use-strict';

export function formatNumberAsString(number) {
  const NUMBER_FORMAT = {
    useGrouping: true,
    maximumFractionDigits: 2,
  };
  return Number(number).toLocaleString('en-US', NUMBER_FORMAT);
}
