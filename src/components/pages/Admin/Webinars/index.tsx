import React, { FC, useEffect, useState } from 'react';
import { TextField } from '@consta/uikit/TextField';
import { IconSearch } from '@consta/uikit/IconSearch';
import { Button } from '@consta/uikit/Button';
import { useTranslation } from 'react-i18next';
import { IconAdd } from '@consta/uikit/IconAdd';
import { useHistory } from 'react-router-dom';
import Typography from '../../../Common/Typography';
import Flex from '../../../Common/Flex';
import useStyles from '../Users/styles';
import { useDebounce } from '../../../../hooks/useDebounce';
import { IWebinar } from './types';
import WebinarsTable from './WebinarsTable';
import { getWebinars } from '../../../../utils/api/routes/admin';

const Webinars: FC = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [webinars, setWebinars] = useState<IWebinar[]>([]);
  const styles = useStyles();
  const { t } = useTranslation();
  const history = useHistory();

  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    setLoading(true);
    getWebinars(search)
      .then((res) => setWebinars(res.data.results))
      .finally(() => setLoading(false));
  }, [debouncedSearch]);

  return (
    <div className={styles.root}>
      <Typography weight="semibold" size="3xl" margin="0 0 24px">
        {t('admin.webinars.webinarsList')}
      </Typography>
      <Flex justify="space-between" align="center" margin="0 0 36px">
        <TextField
          value={search}
          onChange={({ value }) => setSearch(value || '')}
          size="s"
          placeholder={t('admin.webinars.searchWebinars')}
          rightSide={IconSearch}
        />
        <Button
          label={t('admin.webinars.addWebinar')}
          size="s"
          view="primary"
          iconLeft={IconAdd}
          onClick={() => history.push('/admin/webinars/create')}
        />
      </Flex>
      <WebinarsTable data={webinars} loading={loading} />
    </div>
  );
};

export default Webinars;
