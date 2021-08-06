import React, { FC } from 'react';
import { Field, FieldProps } from 'formik';
import { Switch, SwitchProps } from '@consta/uikit/Switch';
import MemoWrapper from '../MemoWrapper';
import Flex from '../../../Flex';

interface IProps extends Omit<SwitchProps, 'checked'> {
  checked?: boolean;
}

const FormikSwitchComponent = MemoWrapper(
  ({
    field: { value, onChange, ...field },
    form,
    label,
    ...props
  }: IProps & FieldProps) => {
    return (
      <Flex>
        <Switch
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

const FormikSwitch: FC<IProps> = (props) => {
  return <Field {...props} component={FormikSwitchComponent} />;
};

export default FormikSwitch;
