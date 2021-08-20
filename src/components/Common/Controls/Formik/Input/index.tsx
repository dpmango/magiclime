import React, { FC, SyntheticEvent, useCallback } from 'react';
import { TextField, TextFieldProps } from '@consta/uikit/TextField';
import { Field, FieldHookConfig, FieldProps } from 'formik';
import Typography from '../../../Typography';
import PasswordInput from '../../PasswordInput';
import Flex from '../../../Flex';
import MemoWrapper from '../MemoWrapper';
import useStyles from './styles';
import { getNestedValue } from '../../../../../utils/formik/getNestedValue';

interface IProps extends TextFieldProps {
  label?: string;
  isRequired?: boolean;
  isPassword?: boolean;
}

const FormikInput = (props: IProps) => {
  return <Field {...props} component={FormikInputComponent} />;
};

const FormikInputComponent = MemoWrapper(
  ({
    field: { value, onChange, ...field },
    form: { setFieldValue, errors, touched },
    label,
    isRequired = true,
    isPassword = false,
    ...props
  }: IProps & FieldProps) => {
    const styles = useStyles();

    const handleChange = useCallback(({ value }: { value: string | null }) => {
      setFieldValue(field.name, value || '');
    }, []);

    const fieldError = getNestedValue(errors, field.name);
    const fieldTouched = getNestedValue(touched, field.name);

    return (
      <Flex direction="column">
        {label && (
          <Typography size="s" margin="0 0 6px" view="secondary">
            {label}
            {isRequired && <span className={styles.star}>*</span>}
          </Typography>
        )}
        {!isPassword ? (
          <TextField
            className={styles.input}
            value={value}
            state={fieldError && fieldTouched ? 'alert' : undefined}
            onChange={handleChange}
            {...field}
            {...props}
          />
        ) : (
          <PasswordInput
            className={styles.input}
            value={value}
            onChange={handleChange}
            state={fieldError && fieldTouched ? 'alert' : undefined}
            {...field}
            {...props}
          />
        )}
        {fieldError && fieldTouched && (
          <Typography margin="5px 0 0" size="xs" view="alert">
            {fieldError}
          </Typography>
        )}
      </Flex>
    );
  }
);

export default FormikInput;
