function formatNumber(number) {
  const numberFormat = {
    useGrouping: true,
    maximumFractionDigits: 2,
  };

  return Number(number).toLocaleString('en-US', numberFormat);
}

export default formatNumber;
