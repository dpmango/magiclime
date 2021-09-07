/* eslint-disable no-plusplus */
// 1000.00 -> 1 000.00
export const formatPrice = (num: number): string => {
  const spacesRegex = /\B(?=(\d{3})+(?!\d))/g;
  if (num === null || num === undefined) {
    return '0.00';
  }

  if (typeof num === 'number') {
    return num.toFixed(2).replace(spacesRegex, ' ');
  }

  if (typeof num === 'string') {
    return parseFloat(num).toFixed(2).replace(spacesRegex, ' ');
  }

  return '';
};

export const btlToRub = (num: number, rate: number) => {
  return formatPrice((num / 1000 / 100) * rate);
};

export const btlToBtc = (num: number, rate: number) => {
  return formatPrice(num / 100);
};

export const priceShort = (num: number, digits = 2) => {
  const si = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'т.' },
    { value: 1e6, symbol: 'М.' },
    { value: 1e9, symbol: 'Млр.' },
    { value: 1e12, symbol: 'Трл.' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
};
