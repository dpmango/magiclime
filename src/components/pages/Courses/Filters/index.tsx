import React, { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import { useTranslation } from 'react-i18next';
import { TextField } from '@consta/uikit/TextField';
import { Button } from '@consta/uikit/Button';

import FormikRadiobuttons from 'components/Common/Controls/Formik/Radiobuttons';
import FormikCheckboxGroup from 'components/Common/Controls/Formik/CheckboxGroup';
import FormikRangeBlock from 'components/Common/Controls/Formik/RangeGroup';
import ConstaIcons from 'assets/icons/ConstaIcons';
import { IFilter, ICategory } from 'components/pages/Courses/types';

import useStyles from './styles';

interface IProps {
  filter: IFilter;
  onUpdate: (f: any) => void;
}

const Filters: FC<IProps> = ({ filter, onUpdate }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Formik
        validateOnChange
        initialValues={{
          difficult: 'Любой',
          categories: [],
          search: '',
          price: [null, null],
          lime: [null, null],
        }}
        enableReinitialize
        onSubmit={(data) => onUpdate(data)}
      >
        {({ values, setFieldValue }) => (
          <Form>
            {/* {JSON.stringify(values)} */}
            <div className={styles.formBlock}>
              <Field
                placeholder={t('course.filter.searchPlaceholder')}
                name="search"
                component={TextField}
                rightSide={ConstaIcons.Search}
                value={values.search}
                onChange={({ value }: { value: string }) =>
                  setFieldValue('search', value)
                }
              />
            </div>

            <div className={styles.ctaBlock}>
              <Button
                type="submit"
                view="secondary"
                size="s"
                label={t('course.filter.cta')}
              />
            </div>

            <div className={styles.formBlock}>
              <FormikCheckboxGroup
                label={t('course.filter.categories')}
                name="categories"
                items={filter.categories}
                direction="column"
                getLabel={(item) => (item as ICategory).title}
                className={styles.group}
              />
            </div>

            <div className={styles.formBlock}>
              <FormikRangeBlock
                name="price"
                title={t('course.filter.price')}
                placeholders={filter.priceRange}
              />
            </div>

            {/* <div className={styles.formBlock}>
              <FormikRadiobuttons
                label={t('course.filter.difficulty')}
                name="difficult"
                items={filter.level}
                getLabel={(item) => item as string}
                direction="column"
                className={styles.group}
              />
            </div> */}

            <div className={styles.formBlock}>
              <FormikRangeBlock
                name="lime"
                title={t('course.filter.limeLevel')}
                placeholders={filter.levelRange}
              />
            </div>

            <div className={styles.ctaBlock}>
              <Button
                type="submit"
                width="full"
                label={t('course.filter.cta')}
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Filters;
