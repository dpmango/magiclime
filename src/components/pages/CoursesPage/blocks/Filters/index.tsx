import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextField } from '@consta/uikit/TextField';
import FormikRadiobuttons from 'components/molecules/Controls/Formik/Radiobuttons';
import FormikCheckboxGroup from 'components/molecules/Controls/Formik/CheckboxGroup';
import icons from '../icons';
import SearchBlocks from './blocks/SearchBlocks';

const useStyles = makeStyles({
  root: {},
  formBlock: {
    marginBottom: '24px',
  },
  small: {
    marginBottom: '6px',
  },
  group: {
    '& .RadioGroup-Item:not(:last-child), & .Checkbox-Label:not(:last-child)': {
      marginBottom: '14px',
    },
    '& .Radio-Label, & .Checkbox-Label': {
      marginLeft: '12px',
      fontWeight: 300,
    },
  },
});

interface ICategory {
  id: number;
  name: string;
}

const Filters = () => {
  const styles = useStyles();
  const difficults = ['Любой', 'Для новичков', 'Для специалистов'];

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

  const educationTypes = ['Профессия', 'Программа', 'Курс'];

  return (
    <>
      <Formik
        validateOnChange={true}
        initialValues={{
          difficult: 'Любой',
          categories: [],
          education_types: [],
          search: '',
        }}
        enableReinitialize={true}
        onSubmit={(data, { setSubmitting }) => {
          console.log(data);
        }}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Form>
            <div className={styles.formBlock}>
              <Field
                placeholder="Поиск по курсам"
                name="search"
                component={TextField}
                rightSide={icons.SearchIcon}
              />
            </div>

            <div className={styles.formBlock}>
              <SearchBlocks title="Цена" placeholders={['0 ₽', '156 000 ₽']} />
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
              <SearchBlocks title="Lime уровень" placeholders={['1', '53']} />
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
