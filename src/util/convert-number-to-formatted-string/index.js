export function convertNumberToFormattedString(number) {
  const NUMBER_FORMAT = {
    maximumFractionDigits: 2,
    useGrouping: true,
  };
  return Number(number).toLocaleString('en-US', NUMBER_FORMAT);
}
