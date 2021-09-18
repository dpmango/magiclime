import { IconCamera } from '@consta/uikit/IconCamera';
import { Field, FieldProps } from 'formik';
import React, { FC } from 'react';
import cln from 'classnames';
import FormikDatePicker from '../../../../../Common/Controls/Formik/DatePicker';
import FormikInput from '../../../../../Common/Controls/Formik/Input';
import FormikSelect from '../../../../../Common/Controls/Formik/Select';
import PhotoField from '../../../../../Common/Controls/PhotoField';
import Flex from '../../../../../Common/Flex';
import useStyles from './styles';

const BasicSettings: FC = () => {
  const styles = useStyles();
  return (
    <Flex align="center" className={styles.container}>
      <div className={styles.banner}>
        <Field name="step_1.banner">
          {({ field: { value }, form: { setFieldValue } }: FieldProps) => (
            <PhotoField
              render={({ src, fieldId }) => (
                <>
                  {!!value && <img src={value.image} alt="banner" />}
                  <label
                    htmlFor={fieldId}
                    className={cln(styles.addPhoto, {
                      [styles.haveImage]: !!value,
                    })}
                  >
                    <IconCamera />
                    Загрузить фото
                  </label>
                </>
              )}
              onChangeCallback={(avatar) => {
                setFieldValue('step_1.banner', avatar);
              }}
            />
          )}
        </Field>
      </div>
      <div className={styles.fieldsWrapper}>
        <FormikSelect
          items={[
            { id: 1, label: 'Аудио лекция' },
            { id: 2, label: 'Видео лекция' },
          ]}
          name="step_1.type"
          placeholder="Выбрать тип вебинара"
          label="Тип вебинара"
        />
        <FormikDatePicker
          name="step_1.date"
          label="Дата"
          placeholder="Выберите дату"
        />
        <FormikInput
          name="step_1.title"
          label="Введите заголовок"
          placeholder="Заголовок вебинара"
        />
        <FormikInput
          name="step_1.zoom_url"
          label="Ссылка"
          placeholder="Вставьте ссылку"
        />
        <FormikSelect
          items={[
            { id: 1, label: 'Санкт-Петербург' },
            { id: 2, label: 'Вашингтон' },
            { id: 3, label: 'Москва' },
          ]}
          name="step_1.city"
          label="Город"
          placeholder="Выбрать город"
        />
      </div>
    </Flex>
  );
};

export default BasicSettings;
