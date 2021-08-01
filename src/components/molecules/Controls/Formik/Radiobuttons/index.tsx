import React, { Component, ComponentProps } from 'react';
import { Field, FieldProps, FieldHookConfig } from 'formik';
import { RadioGroup } from '@consta/uikit/RadioGroup';
import { getNestedValue } from 'utils/formik/getNestedValue';
import { ErrorMessage, StyledTitle } from '../components';
import MemoWrapper from '../MemoWrapper';

type RadiobuttonsProps = Omit<
  ComponentProps<typeof RadioGroup>,
  'value' | 'onChange'
>;

type PropsType = RadiobuttonsProps & {
  label?: string;
  Component?: Component | any;
};

const FormikRadiobuttonsBase = MemoWrapper((props: PropsType & FieldProps) => {
  const {
    field: { onChange, value, ...field },
    form: { errors, touched, setFieldError, setFieldValue },
    label,
    items,
    Component = RadioGroup,
    ...restProps
  } = props;

  const fieldError = getNestedValue(errors, field.name);
  const fieldTouched = getNestedValue(touched, field.name);
  const isCorrectValue = value != null && value != undefined && value !== '';

  return (
    <div>
      {props.label && <StyledTitle>{props.label}</StyledTitle>}

      <Component
        {...field}
        {...restProps}
        error={fieldError && fieldTouched}
        id={`${field.name}_${label || ''}`}
        value={isCorrectValue ? value : false}
        onChange={({ value: v }) => {
          setFieldValue(field.name, v);
        }}
        onFocus={() => setFieldError(field.name, '')}
        items={items}
      />
      {fieldError && fieldTouched && <ErrorMessage>{fieldError}</ErrorMessage>}
    </div>
  );
});

const FormikRadiobuttons = (
  props: PropsType & FieldHookConfig<typeof RadioGroup>
) => {
  return <Field {...props} component={FormikRadiobuttonsBase} />;
};

export default FormikRadiobuttons;
