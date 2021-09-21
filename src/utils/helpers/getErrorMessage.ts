interface IError {
  status: number;
  statusText: string;
  data: {
    [key: string]: string[];
  };
}

export const getErrorMessage = (err: IError) => {
  let errText = '';

  try {
    const errors = Object.keys(err.data);
    errors.forEach((key, idx) => {
      const postFix = idx + 1 !== errors.length ? '|| ' : '';
      errText += `${key}: ${err.data[key][0]} ${postFix}`;
    });
  } catch (e) {
    errText = 'Error';
  }

  return errText;
};
