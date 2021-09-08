import { ReactNode, memo, ComponentType } from 'react';
import { FieldProps } from 'formik';
import { getNestedValue } from 'utils/formik/getNestedValue';

type MemoPropsType<T> = Readonly<
  FieldProps<any, any> & T & { children?: ReactNode }
>;

type DefaultProps = {
  items: any[];
};

const MemoWrapper = <T extends DefaultProps>(Component: ComponentType<any>) =>
  memo(
    Component,
    (prevProps: MemoPropsType<T>, nextProps: MemoPropsType<T>) => {
      const containsNestedErrorPrev = getNestedValue(
        prevProps.form.errors,
        prevProps.field.name
      );
      const containsNestedErrorNext = getNestedValue(
        nextProps.form.errors,
        nextProps.field.name
      );
      const containsNestedTouchedPrev = getNestedValue(
        prevProps.form.touched,
        prevProps.field.name
      );
      const containsNestedTouchedNext = getNestedValue(
        nextProps.form.touched,
        nextProps.field.name
      );

      return (
        prevProps.field.value === nextProps.field.value &&
        (prevProps.items && prevProps.items.length) ===
          (nextProps.items && nextProps.items.length) &&
        containsNestedErrorPrev === containsNestedErrorNext &&
        containsNestedTouchedPrev === containsNestedTouchedNext
      );
    }
  );

export default MemoWrapper;
