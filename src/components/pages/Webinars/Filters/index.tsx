import React, { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from '@consta/uikit/TextField';
import FormikCheckboxGroup from 'components/Common/Controls/Formik/CheckboxGroup';
import FormikSelect from 'components/Common/Controls/Formik/Select';
import SvgIcon from 'components/Common/SvgIcon';

import useStyles from './styles';

interface ICategory {
  id: number;
  name: string;
}

type SelectItem = {
  label: string;
  id: number;
};

const Filters: FC = () => {
  const styles = useStyles();

  const categories: ICategory[] = [
    { id: 1, name: 'Маркетинг' },
    { id: 2, name: 'Финансы' },
    { id: 3, name: 'Управление' },
    { id: 4, name: 'Личный рост' },
    { id: 5, name: 'Бизнес' },
    { id: 6, name: 'Маркетинг1' },
    { id: 7, name: 'Маркетинг32' },
    { id: 8, name: 'Маркетинг4' },
    { id: 9, name: 'Маркетинг5' },
  ];

  const citySelectList: SelectItem[] = [
    {
      label: 'Город 1',
      id: 1,
    },
    {
      label: 'Город 2',
      id: 2,
    },
  ];

  return (
    <>
      <Formik
        validateOnChange
        initialValues={{
          categories: [],
          search: '',
          city: [],
        }}
        enableReinitialize
        onSubmit={(data) => {
          // eslint-disable-next-line no-console
          console.log(data);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className={styles.formBlock}>
              <Field
                placeholder="Поиск по вебинарам"
                name="search"
                component={TextField}
                rightSide={SvgIcon.Search}
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
              <FormikSelect
                items={citySelectList}
                label="Город"
                name="city"
                placeholder="Любой"
                isRequired={false}
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Filters;
