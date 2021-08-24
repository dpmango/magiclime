import React, { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import { useTranslation } from 'react-i18next';
import { TextField } from '@consta/uikit/TextField';
import FormikCheckboxGroup from 'components/Common/Controls/Formik/CheckboxGroup';
import ConstaIcons from '../../../../assets/icons/ConstaIcons';

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
                placeholder={t('rating.filter.searchPlaceholder')}
                name="search"
                component={TextField}
                rightSide={ConstaIcons.Search}
                value={values.search}
                onChange={({ value }: { value: string }) =>
                  setFieldValue('search', value)
                }
              />
            </div>

            <div className={styles.formBlock}>
              <FormikCheckboxGroup
                label={t('rating.filter.leagues')}
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
