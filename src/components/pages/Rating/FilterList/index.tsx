import React, { FC } from 'react';
import debounce from 'lodash/debounce';
import { Formik, Form } from 'formik';
import { useTranslation } from 'react-i18next';
import FormikCheckboxGroup from 'components/Common/Controls/Formik/CheckboxGroup';
import ConstaIcons from '../../../../assets/icons/ConstaIcons';
import { SetStateType } from '../../../../types/common';
import { ChangeTracker } from '../../../Common/Controls/Formik/ChangeTracker';
import FormikInput from '../../../Common/Controls/Formik/Input';

import useStyles from './styles';

interface ICategory {
  id: number;
  name: string;
}

const Filters: FC<{
  setFilters: SetStateType<{ username: string; league: number[] }>;
}> = ({ setFilters }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const categories = [
    { id: 1, name: 'Маркетинг' },
    { id: 2, name: 'Финансы' },
    { id: 3, name: 'Управление' },
  ] as ICategory[];

  const handleSubmit = debounce(
    (values: { username: string; league: number[] }) => {
      setFilters(values);
    },
    400
  );

  return (
    <>
      <Formik
        validateOnChange
        initialValues={{
          username: '',
          league: [],
        }}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        <Form>
          <ChangeTracker />
          <div className={styles.formBlock}>
            <FormikInput
              placeholder={t('rating.filter.searchPlaceholder')}
              name="username"
              rightSide={ConstaIcons.Search}
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
      </Formik>
    </>
  );
};

export default Filters;
