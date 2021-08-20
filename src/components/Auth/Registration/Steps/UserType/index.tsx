import React from 'react';
import { Field, FieldProps } from 'formik';

const UserType = () => {
  return (
    <Field name="user_type">
      {({
        field: { value, ...field },
        form: { touched, errors, setFieldValue },
      }: FieldProps) => <div />}
    </Field>
  );
};

export default UserType;
