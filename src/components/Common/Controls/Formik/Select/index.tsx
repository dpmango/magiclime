import React, { FC, SyntheticEvent, useCallback } from 'react';
import {
  Select,
  SelectProps,
  DefaultItem,
  PropRenderItem,
} from '@consta/uikit/Select';
import { Field, FieldProps } from 'formik';
import { withNaming } from '@bem-react/classname';
import cns from 'classnames';
import Typography from '../../../Typography';
import Flex from '../../../Flex';
import MemoWrapper from '../MemoWrapper';
import useStyles from './styles';
import { getNestedValue } from '../../../../../utils/formik/getNestedValue';

interface ISelectItem extends DefaultItem {
  icon?: string;
  title?: string;
}

interface IProps extends Omit<SelectProps<ISelectItem>, 'onChange'> {
  label?: string;
  isRequired?: boolean;
}

const cn = withNaming({ e: '-', m: '_', v: '_' });

const FormikSelectComponent = MemoWrapper(
  ({
    field: { value, onChange, ...field },
    form: { setFieldValue, errors, touched },
    label,
    isRequired = true,
    ...props
  }: IProps & FieldProps) => {
    const styles = useStyles();

    const handleChange = useCallback(
      ({ value: v }: { value: ISelectItem | null }) => {
        setFieldValue(field.name, v);
      },
      []
    );

    const fieldError = getNestedValue(errors, field.name);
    const fieldTouched = getNestedValue(touched, field.name);

    const cnSelectItem = cn('SelectItem');

    return (
      <Flex direction="column">
        {label && (
          <Typography size="s" margin="0 0 6px" view="secondary">
            {label}
            {isRequired && <span className={styles.star}>*</span>}
          </Typography>
        )}

        <Select
          className={cns(styles.input, fieldError && fieldTouched && 'alert')}
          value={value}
          onChange={handleChange}
          renderItem={({ item, active, hovered, ...renderProps }) => (
            <div
              className={cnSelectItem({
                active,
                hovered,
                disabled: item.disabled,
                size: props.size || 'm',
                indent: 'normal',
              })}
              role="option"
              aria-selected={active}
              {...renderProps}
            >
              <span className={styles.selectItemCustom}>
                {item.icon && <img src={item.icon} alt={item.title} />}
                <span>{item.label}</span>
              </span>
            </div>
          )}
          renderValue={({ item }) => (
            <span className={styles.selectItemCustom}>
              {item.icon && <img src={item.icon} alt={item.label} />}
              <span>{item.label}</span>
            </span>
          )}
          {...field}
          {...props}
        />

        {fieldError && fieldTouched && (
          <Typography margin="5px 0 0" size="xs" view="alert">
            {fieldError}
          </Typography>
        )}
      </Flex>
    );
  }
);

const FormikSelect: FC<IProps> = (props) => {
  return <Field {...props} component={FormikSelectComponent} />;
};

export default FormikSelect;
