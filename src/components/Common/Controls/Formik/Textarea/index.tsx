import { Field, FieldProps } from 'formik';
import React, { useCallback } from 'react';
import MemoWrapper from '../MemoWrapper';
import Flex from '../../../Flex';
import Typography from '../../../Typography';
import { TextField, TextFieldProps } from '@consta/uikit/TextField';
import useStyles from '../Input/styles';
import { getNestedValue } from '../../../../../utils/formik/getNestedValue';

interface IProps extends TextFieldProps {
  label?: string;
}

const FormikTextarea = (props: IProps) => {
  return <Field {...props} component={FormikTextareaComponent} />;
};

const FormikTextareaComponent = MemoWrapper(
  ({
    field: { value, onChange, ...field },
    form: { setFieldValue, errors, touched },
    label,
    ...props
  }: FieldProps & IProps) => {
    const styles = useStyles();
    const fieldError = getNestedValue(errors, field.name);
    const fieldTouched = getNestedValue(touched, field.name);

    const handleChange = useCallback(({ value }: { value: string | null }) => {
      setFieldValue(field.name, value);
    }, []);

    return (
      <Flex direction={'column'}>
        {label && (
          <Typography margin={'0 0 6px'} view={'secondary'}>
            {label}
          </Typography>
        )}
        <TextField
          type={'textarea'}
          rows={3}
          className={styles.input}
          value={value}
          state={fieldError && fieldTouched ? 'alert' : undefined}
          onChange={handleChange}
          {...field}
          {...props}
        />
        {fieldError && fieldTouched && (
          <Typography margin={'5px 0 0'} size={'xs'} view={'alert'}>
            {fieldError}
          </Typography>
        )}
      </Flex>
    );
  }
);

export default FormikTextarea;
