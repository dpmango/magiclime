import React, { FC } from 'react';
import { Field, FieldProps } from 'formik';
import { Checkbox, CheckboxProps } from '@consta/uikit/Checkbox';
import { makeStyles } from '@material-ui/core';
import Flex from '../../../Flex';
import MemoWrapper from '../MemoWrapper';
import { getNestedValue } from '../../../../../utils/formik/getNestedValue';

const useStyles = makeStyles(() => ({
  error: {
    background: 'rgba(235, 87, 87, .3)',
    borderRadius: 'var(--control-radius)',
    borderColor: 'var(--color-bg-alert)',
  },
}));

interface IProps extends Omit<CheckboxProps, 'checked'> {
  checked?: boolean;
}

const FormikCheckbox: FC<IProps> = (props) => {
  return <Field {...props} component={FormikCheckboxComponent} />;
};

const FormikCheckboxComponent = MemoWrapper(
  ({
    field: { value, onChange, ...field },
    form: { errors, touched, ...form },
    label,
    ...props
  }: IProps & FieldProps) => {
    const styles = useStyles();
    const fieldError = getNestedValue(errors, field.name);
    const fieldTouched = getNestedValue(touched, field.name);

    return (
      <div>
        <Checkbox
          label={label}
          checked={!!value}
          onClick={onChange}
          className={fieldError && fieldTouched ? styles.error : ''}
          {...field}
          {...props}
        />
      </div>
    );
  }
);

export default FormikCheckbox;
