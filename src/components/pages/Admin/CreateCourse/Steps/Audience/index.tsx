import { IconCamera } from '@consta/uikit/IconCamera';
import cln from 'classnames';
import { Field, FieldProps } from 'formik';
import React, { FC } from 'react';
import FormikSelect from '../../../../../Common/Controls/Formik/Select';
import FormikTextarea from '../../../../../Common/Controls/Formik/Textarea';
import PhotoField from '../../../../../Common/Controls/PhotoField';
import Promo from './Promo';
import useStyles from './styles';

const Audience: FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <FormikSelect
        items={[
          { id: 1, label: 'Маркетинг' },
          { id: 2, label: 'Программирование' },
        ]}
        name="step_1.category"
        label="Категория"
        placeholder="Выберите категорию"
      />
      <FormikSelect
        items={[
          { id: 1, label: 'Маркетинг' },
          { id: 2, label: 'Программирование' },
        ]}
        name="step_1.subcategory"
        label="Подкатегория"
        placeholder="Выберите подкатегорию"
      />
      <FormikSelect
        items={[
          { id: 1, label: 'RUS' },
          { id: 2, label: 'ENG' },
        ]}
        name="step_1.language"
        label="Язык"
        placeholder="Выберите язык"
      />
      <FormikSelect
        items={[
          { id: 1, label: 'Для новичка' },
          { id: 2, label: 'Средний уровень' },
        ]}
        name="step_1.level"
        label="Уровень"
        placeholder="Выберите уровень"
      />
      <div className={styles.photoWrapper}>
        <Field name="step_1.banner">
          {({
            field: { value, name },
            form: { setFieldValue },
          }: FieldProps) => (
            <PhotoField
              render={({ fieldId }) => (
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
                setFieldValue(name, avatar);
              }}
            />
          )}
        </Field>
      </div>
      <div className={styles.photoWrapper}>
        <Field name="step_1.promo">
          {({
            field: { value, name },
            form: { setFieldValue },
          }: FieldProps) => (
            <PhotoField
              render={({ fieldId }) => (
                <Promo
                  // src={value ? value.src : null}
                  src="https://media.w3.org/2010/05/sintel/trailer.mp4"
                  fieldId={fieldId}
                />
              )}
              onChangeCallback={(avatar) => {
                setFieldValue(name, avatar);
              }}
            />
          )}
        </Field>
      </div>
      <div className={styles.textarea}>
        <FormikTextarea
          name="step_1.about_course"
          placeholder="Расскажите о курсе"
          label="Что студенты будут изучать на вашем курсе?"
        />
      </div>
      <div className={styles.textarea}>
        <FormikTextarea
          name="step_1.about_audience"
          placeholder="Расскажите о вашей аудитории"
          label="Какая ваша целевая аудитория?"
        />
      </div>
    </div>
  );
};

export default Audience;
