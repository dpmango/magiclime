import React, { FC, useEffect } from 'react';
import { useFormikContext } from 'formik';

export const ChangeTracker: FC = () => {
  const { values, submitForm, dirty } = useFormikContext();

  useEffect(() => {
    if (dirty) submitForm();
  }, [values, dirty]);

  return null;
};
