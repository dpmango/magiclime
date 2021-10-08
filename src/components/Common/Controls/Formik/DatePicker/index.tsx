import React, { useCallback, useEffect, useRef, useState } from 'react';
import { TextField, TextFieldProps } from '@consta/uikit/TextField';
import { Field, FieldProps } from 'formik';
import moment from 'moment';
import { Calendar } from '@consta/uikit/Calendar';
import { IconCalendar } from '@consta/uikit/IconCalendar';
import ruLocale from 'date-fns/locale/ru';
import enLocale from 'date-fns/locale/en-GB';
import { useSelector } from 'react-redux';
import MemoWrapper from '../MemoWrapper';
import useStyles from './styles';
import { getNestedValue } from '../../../../../utils/formik/getNestedValue';
import Flex from '../../../Flex';
import Typography from '../../../Typography';
import { useClickOutside } from '../../../../../hooks/useClickOutside';
import { RootState } from '../../../../../store/reducers/rootReducer';
import { Language } from '../../../../../types/common';

interface IProps extends Omit<TextFieldProps<string>, 'onChange'> {
  label?: string;
  isRequired?: boolean;
  dateFormat?: string;
}

const FormikDatePicker = (props: IProps) => {
  return <Field {...props} component={FormikDatePickerComponent} />;
};

const FormikDatePickerComponent = MemoWrapper(
  ({
    field: { value, onChange, ...field },
    form: { setFieldValue, errors, touched },
    label,
    isRequired = true,
    dateFormat = 'L',
    ...props
  }: IProps & FieldProps) => {
    const [open, setOpen] = useState(false);
    const [position, setPosition] = useState<'top' | 'bottom'>('bottom');
    const ref = useRef<HTMLDivElement>(null);
    const calendarRef = useRef<HTMLDivElement>(null);
    const language = useSelector((state: RootState) => state.settings.language);
    const styles = useStyles({ position });

    useClickOutside(ref, () => setOpen(false));

    useEffect(() => {
      // Если не сделать этого, то при нажатии на стрелки смены месяца постоянно будет отправлятся форма
      if (open) {
        const buttons = Array.from(
          calendarRef.current!.querySelectorAll('button')
        );
        buttons.forEach((button) => {
          button.type = 'button';
        });
      }
    }, [open]);

    useEffect(() => {
      // Смена положения в зависимости от размеров экрана
      const div = ref.current!;
      if (
        document.body.clientHeight - (div.offsetTop + div.clientHeight) <
        265
      ) {
        setPosition('top');
      }
    }, [open]);

    const handleChange = useCallback((value: Date) => {
      setFieldValue(field.name, value || '');
      setOpen(false);
    }, []);

    const getLocale = useCallback(() => {
      switch (language) {
        case Language.RU:
          return ruLocale;
        case Language.EN:
          return enLocale;
        default:
          return ruLocale;
      }
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
        <div ref={ref} className={styles.container}>
          <TextField
            value={value ? moment(value).format(dateFormat) : ''}
            onChange={() => false}
            onFocus={() => setOpen(true)}
            rightSide={IconCalendar}
            className={styles.input}
            {...field}
            {...props}
          />
          {open && (
            <Calendar
              locale={getLocale()}
              value={value}
              ref={calendarRef}
              onChange={({ value }) => handleChange(value as Date)}
              className={styles.calendar}
            />
          )}
        </div>
        {fieldError && fieldTouched && (
          <Typography margin="5px 0 0" size="xs" view="alert">
            {fieldError}
          </Typography>
        )}
      </Flex>
    );
  }
);

export default FormikDatePicker;
