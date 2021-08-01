import React, { ComponentProps, useState } from 'react';
import { Field, FieldHookConfig, FieldProps } from 'formik';
import { CheckboxGroup } from '@consta/uikit/CheckboxGroup';
// import { makeStyles } from '@material-ui/core';
import Flex from 'components/Common/Flex';
import { StyledTitle, StyledDetailsText } from '../components';

type CheckboxGroupProps = Omit<
  ComponentProps<typeof CheckboxGroup>,
  'onChange'
>;

type PropsType = CheckboxGroupProps & {
  label?: string;
  showAllValues?: boolean;
};

const CheckboxGroupComponent = ({
  field: { value, name },
  form: { setFieldValue },
  items = [],
  label,
  showAllValues = false,
  ...props
}: FieldProps & PropsType) => {
  const [showAllItems, setShow] = useState(showAllValues);

  const array = showAllItems ? items : items.slice(0, 5);

  return (
    <Flex direction="column">
      {label && <StyledTitle>{label}</StyledTitle>}
      <div>
        <CheckboxGroup
          value={value}
          items={array}
          onChange={({ value: v }) => setFieldValue(name, v)}
          {...props}
        />
      </div>
      {(items.length > 5 || showAllValues !== false) && (
        <button type="button" onClick={() => setShow(!showAllItems)}>
          <StyledDetailsText>
            {showAllItems ? 'Скрыть' : `Показать еще ${items.length - 5}`}
          </StyledDetailsText>
        </button>
      )}
    </Flex>
  );
};

const FormikCheckboxGroup = (
  props: PropsType & FieldHookConfig<typeof CheckboxGroup>
) => {
  return <Field {...props} component={CheckboxGroupComponent} />;
};

export default FormikCheckboxGroup;
