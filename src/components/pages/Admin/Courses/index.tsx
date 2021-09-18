import React, { FC, useMemo } from 'react';
import { Button } from '@consta/uikit/Button';
import { IconAdd } from '@consta/uikit/IconAdd';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { getCourses } from '../../../../utils/api/routes/admin';
import BaseAdminPage from '../BaseAdminPage';
import CoursesTable from './CoursesTable';

const Courses: FC = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const button = useMemo(
    () => (
      <Button
        label="Добавить курс"
        size="s"
        view="primary"
        iconLeft={IconAdd}
        onClick={() => history.push('/admin/courses/create')}
      />
    ),
    []
  );

  return (
    <BaseAdminPage
      title="Список курсов"
      apiFunc={getCourses}
      button={button}
      tableComponent={CoursesTable}
    />
  );
};

export default Courses;
