/* eslint-disable @typescript-eslint/no-shadow */
import React, { FC, SyntheticEvent, useCallback } from 'react';
import { TextField, TextFieldProps } from '@consta/uikit/TextField';
import { Field, FieldHookConfig, FieldProps } from 'formik';
import InputMask from 'react-input-mask';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { getNestedValue } from 'utils/formik/getNestedValue';
import { ChangeType } from 'types/common';
import PasswordInput from '../../PasswordInput';
import MemoWrapper from '../MemoWrapper';

import useStyles from './styles';

interface IProps extends TextFieldProps {
  label?: string;
  mask?: string | null;
  isRequired?: boolean;
  isPassword?: boolean;
  onlyNumbers?: boolean;
}

const FormikInput = (props: IProps) => {
  return <Field {...props} component={FormikInputComponent} />;
};

const FormikInputComponent = MemoWrapper(
  ({
    field: { value, onChange, ...field },
    form: { setFieldValue, errors, touched },
    label,
    mask = null,
    isRequired = true,
    isPassword = false,
    onlyNumbers = false,
    ...props
  }: IProps & FieldProps) => {
    const styles = useStyles();

    const handleChange = useCallback(({ value }: { value: string | null }) => {
      console.log('onchange event');
      setFieldValue(field.name, value || '');
    }, []);

    const handleKeyDown = (event: ChangeType) => {
      if (onlyNumbers) {
        const isNumber = !Number.isNaN(parseFloat(event.key));
        const isAllowedCharacter = [8, 13, 32].includes(event.keyCode); // backspace, enter, space
        if (!isNumber && !isAllowedCharacter) {
          event.preventDefault();
        }
      }
    };

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

        {isPassword && (
          <PasswordInput
            className={styles.input}
            state={fieldError && fieldTouched ? 'alert' : undefined}
            value={value}
            onChange={handleChange}
            {...field}
            {...props}
          />
        )}

        {mask ? (
          <InputMask
            mask={mask}
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            {...field}
            {...props}
          >
            {(inputProps) => {
              <TextField
                className={styles.input}
                state={fieldError && fieldTouched ? 'alert' : undefined}
                {...inputProps}
              />;
            }}
          </InputMask>
        ) : (
          <TextField
            className={styles.input}
            state={fieldError && fieldTouched ? 'alert' : undefined}
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
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
