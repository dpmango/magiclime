import React, { FC } from 'react';
import MemoWrapper from '../MemoWrapper';
import { Field, FieldProps } from 'formik';
import { Checkbox, CheckboxProps } from '@consta/uikit/Checkbox';
import Flex from '../../../Flex';

interface IProps extends Omit<CheckboxProps, 'checked'> {
  checked?: boolean;
}

const FormikCheckbox: FC<IProps> = (props) => {
  return <Field {...props} component={FormikCheckboxComponent} />;
};

const FormikCheckboxComponent = MemoWrapper(
  ({
    field: { value, onChange, ...field },
    form,
    label,
    ...props
  }: IProps & FieldProps) => {
    return (
      <Flex>
        <Checkbox
          label={label}
          checked={!!value}
          onClick={onChange}
          {...field}
          {...props}
        />
      </Flex>
    );
  }
);

export default FormikCheckbox;
