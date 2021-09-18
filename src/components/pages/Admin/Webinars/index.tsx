import React, { FC, useMemo } from 'react';
import { Button } from '@consta/uikit/Button';
import { useTranslation } from 'react-i18next';
import { IconAdd } from '@consta/uikit/IconAdd';
import { useHistory } from 'react-router-dom';
import BaseAdminPage from '../BaseAdminPage';
import WebinarsTable from './WebinarsTable';
import { getWebinars } from '../../../../utils/api/routes/admin';

const Webinars: FC = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const button = useMemo(
    () => (
      <Button
        label={t('admin.webinars.addWebinar')}
        size="s"
        view="primary"
        iconLeft={IconAdd}
        onClick={() => history.push('/admin/webinars/create')}
      />
    ),
    []
  );

  return (
    <BaseAdminPage
      title={t('admin.webinars.webinarsList')}
      apiFunc={getWebinars}
      button={button}
      tableComponent={WebinarsTable}
    />
  );
};

export default Webinars;
