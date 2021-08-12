import React, { ComponentProps, useState } from 'react';
import { Field, FieldHookConfig, FieldProps } from 'formik';
import { CheckboxGroup } from '@consta/uikit/CheckboxGroup';
import { makeStyles } from '@material-ui/core';
import Flex from 'components/Common/Flex';
import { StyledTitle, StyledDetailsText } from '../components';

type CheckboxGroupProps = Omit<
  ComponentProps<typeof CheckboxGroup>,
  'onChange'
>;

type PropsType = CheckboxGroupProps & {
  label?: string;
  showAllValues?: boolean;
  showCollapse?: boolean;
};

const FormikCheckboxGroup = (
  props: PropsType & FieldHookConfig<typeof CheckboxGroup>
) => {
  return <Field {...props} component={CheckboxGroupComponent} />;
};

const CheckboxGroupComponent = ({
  field: { value, name, ...field },
  form: { setFieldValue, setFieldTouched },
  items = [],
  label,
  showAllValues = false,
  showCollapse = true,
  ...props
}: FieldProps & PropsType) => {
  const [showAllItems, setShow] = useState(showAllValues);

  const array = showCollapse && showAllItems ? items : items.slice(0, 5);

  return (
    <Flex direction="column">
      {label && <StyledTitle>{label}</StyledTitle>}
      <div>
        <CheckboxGroup
          value={value}
          items={array}
          onChange={({ value }) => {

            setFieldValue(name, value);
            setFieldTouched(name, true);
          }}
          {...props}
        />
      </div>
      {showCollapse && (items.length > 5 || showAllValues !== false) && (
        <button onClick={() => setShow(!showAllItems)}>
          <StyledDetailsText>
            {showAllItems ? 'Скрыть' : 'Ещё'}
          </StyledDetailsText>
        </button>
      )}
    </Flex>
  );
};

export default FormikCheckboxGroup;
