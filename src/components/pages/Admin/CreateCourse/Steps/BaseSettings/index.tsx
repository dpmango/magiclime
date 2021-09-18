import React, { FC } from 'react';
import FormikInput from '../../../../../Common/Controls/Formik/Input';
import FormikSelect from '../../../../../Common/Controls/Formik/Select';
import FormikTextarea from '../../../../../Common/Controls/Formik/Textarea';
import useStyles from '../Audience/styles';
import LimeIcon from './limeIcon.svg';

const BaseSettings: FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.textarea}>
        <FormikInput
          name="step_2.title"
          label="Название курса"
          placeholder="Введите заголовок"
        />
      </div>
      <div className={styles.textarea}>
        <FormikTextarea
          name="step_2.description"
          label="Краткое описание"
          placeholder="Расскажите о курсе"
        />
      </div>
      <FormikSelect
        items={[
          { id: 1, label: 'Видеолекции' },
          { id: 2, label: 'Аудиолекции' },
        ]}
        name="step_2.format"
        label="Формат обучения"
        placeholder="Выберите формат"
      />
      <FormikSelect
        items={[
          { id: 1, label: '1 неделя' },
          { id: 2, label: '2 недели' },
        ]}
        name="step_2.duration"
        label="Продолжительность"
        placeholder="Выберите продолжительность"
      />
      <FormikInput
        leftSide={LimeIcon}
        name="step_2.price"
        type="number"
        label="Стоимость курса"
        placeholder="000.00"
      />
      <FormikSelect
        items={[
          { id: 1, label: '1 уровень' },
          { id: 2, label: '2 уровень' },
          { id: 3, label: '3 уровень' },
        ]}
        name="step_2.matrix_level"
        label="Уровень матрицы"
        placeholder="Выберите уровень"
      />
    </div>
  );
};

export default BaseSettings;
