import React, { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from '@consta/uikit/TextField';
import FormikRadiobuttons from 'components/molecules/Controls/Formik/Radiobuttons';
import FormikCheckboxGroup from 'components/molecules/Controls/Formik/CheckboxGroup';
import FormikRangeBlock from 'components/molecules/Controls/Formik/RangeGroup';
import icons from '../icons';

import useStyles from './styles';

interface ICategory {
  id: number;
  name: string;
}

const Filters: FC = () => {
  const styles = useStyles();

  const difficults = ['Любой', 'Для новичков', 'Для специалистов'];
  const educationTypes = ['Профессия', 'Программа', 'Курс'];

  const categories = [
    { id: 1, name: 'Маркетинг' },
    { id: 2, name: 'Финансы' },
    { id: 3, name: 'Управление' },
    { id: 4, name: 'Личный рост' },
    { id: 5, name: 'Бизнес' },
    { id: 6, name: 'Маркетинг1' },
    { id: 7, name: 'Маркетинг32' },
    { id: 8, name: 'Маркетинг4' },
    { id: 9, name: 'Маркетинг5' },
  ] as ICategory[];

  return (
    <>
      <Formik
        validateOnChange
        initialValues={{
          difficult: 'Любой',
          categories: [],
          education_types: [],
          search: '',
          price: [null, null],
          lime: [null, null],
        }}
        enableReinitialize
        onSubmit={(data) => {
          // eslint-disable-next-line no-console
          console.log(data);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            {/* {JSON.stringify(values)} */}
            <div className={styles.formBlock}>
              <Field
                placeholder="Поиск по курсам"
                name="search"
                component={TextField}
                rightSide={icons.SearchIcon}
                value={values.search}
                onChange={({ value }: { value: string }) =>
                  setFieldValue('search', value)
                }
              />
            </div>

            <div className={styles.formBlock}>
              <FormikCheckboxGroup
                label="Категории"
                name="categories"
                items={categories}
                direction="column"
                getLabel={(item) => (item as ICategory).name}
                className={styles.group}
              />
            </div>

            <div className={styles.formBlock}>
              <FormikRangeBlock
                name="price"
                title="Цена"
                placeholders={['0 ₽', '156 000 ₽']}
              />
            </div>

            <div className={styles.formBlock}>
              <FormikRadiobuttons
                label="Уровень сложности"
                name="difficult"
                items={difficults}
                getLabel={(item) => item as string}
                direction="column"
                className={styles.group}
              />
            </div>

            <div className={styles.formBlock}>
              <FormikRangeBlock
                name="lime"
                title="Lime уровень"
                placeholders={['1', '53']}
              />
            </div>

            <div className={styles.formBlock}>
              <FormikCheckboxGroup
                label="Тип обучения"
                name="education_types"
                items={educationTypes}
                direction="column"
                getLabel={(item) => item as string}
                className={styles.group}
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Filters;
