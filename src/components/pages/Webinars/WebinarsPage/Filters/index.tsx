import { Button } from '@consta/uikit/Button';
import React, { FC, useCallback } from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from '@consta/uikit/TextField';
import FormikCheckboxGroup from 'components/Common/Controls/Formik/CheckboxGroup';
import FormikSelect from 'components/Common/Controls/Formik/Select';
import ConstaIcons from 'assets/icons/ConstaIcons';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store/reducers/rootReducer';
import { SetStateType } from '../../../../../types/common';
import { ICategory, ICity } from '../../../../../types/interfaces/meta';
import { IFilters } from '../../types';
import useStyles from './styles';

type FormValues = {
  search: string;
  city: ICity;
  categories: ICategory[];
};

const Filters: FC<{ setFilters: SetStateType<IFilters> }> = ({
  setFilters,
}) => {
  const styles = useStyles();
  const { cities, categories } = useSelector((state: RootState) => state.meta);

  const handleSubmit = useCallback((values: FormValues) => {
    const categories = values.categories.map((item) => item.id);
    setFilters({ search: values.search, city: values.city.id, categories });
  }, []);

  return (
    <>
      <Formik
        validateOnChange
        initialValues={{
          categories: [],
          search: '',
          city: {} as ICity,
        }}
        enableReinitialize
        onSubmit={(data: FormValues) => {
          handleSubmit(data);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className={styles.formBlock}>
              <Field
                placeholder="Поиск по вебинарам"
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
                label="Категории"
                name="categories"
                items={categories}
                direction="column"
                getLabel={(item) => (item as ICategory).title}
                className={styles.group}
              />
            </div>

            <div className={styles.formBlock}>
              <FormikSelect
                items={cities.map((city) => ({
                  id: city.id,
                  label: city.title,
                }))}
                label="Город"
                name="city"
                placeholder="Любой"
                isRequired={false}
              />
            </div>
            <Button label="Искать" view="primary" type="submit" width="full" />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Filters;
