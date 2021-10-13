import isObject from 'lodash/isObject';

interface IError {
  status: number;
  statusText: string;
  data: {
    [key: string]: string[] | string;
  };
}

export const getErrorMessage = (err: IError) => {
  let errText = '';

  // console.log('getting error message', err);
  try {
    if (!isObject(err.data)) {
      throw new Error();
    }

    const errors = Object.keys(err.data);

    if (errors.length && errors[0] === 'detail') {
      const detailErr = err.data.detail;
      if (!Array.isArray(detailErr)) {
        errText = detailErr;
      }
    } else {
      errors.forEach((key, idx) => {
        const postFix = idx + 1 !== errors.length ? '|| ' : '';
        errText += `${key}: ${err.data[key][0]} ${postFix}`;
      });
    }
  } catch (e) {
    errText = 'Error';
  }

  return errText;
};
