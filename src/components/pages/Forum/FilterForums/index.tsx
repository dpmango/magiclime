import React, { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import { useTranslation } from 'react-i18next';
import { TextField } from '@consta/uikit/TextField';
import FormikCheckboxGroup from 'components/Common/Controls/Formik/CheckboxGroup';
import SvgIcon from 'components/Common/SvgIcon';

import useStyles from './styles';

interface ICategory {
  id: number;
  name: string;
}

const Filters: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

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
          search: '',
          categories: [],
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
                placeholder={t('forum.filter.searchPlaceholder')}
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
                label={t('forum.filter.categories')}
                name="categories"
                items={categories}
                direction="column"
                getLabel={(item) => (item as ICategory).name}
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
