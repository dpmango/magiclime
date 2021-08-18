import React, { FC, useEffect, useState } from 'react';
import Typography from '../../../Common/Typography';
import Flex from '../../../Common/Flex';
import { TextField } from '@consta/uikit/TextField';
import { IconSearch } from '@consta/uikit/IconSearch';
import { Button } from '@consta/uikit/Button';
import useStyles from '../Users/styles';
import { useTranslation } from 'react-i18next';
import { useDebounce } from '../../../../hooks/useDebounce';
import { IconAdd } from '@consta/uikit/IconAdd';
import WebinarsTable from './WebinarsTable';
import { getWebinars } from '../../../../utils/api/routes/admin';
import { useHistory } from 'react-router-dom';

const Webinars: FC = () => {
  const [search, setSearch] = useState('');
  const [webinars, setWebinars] = useState<any[]>([]);
  const styles = useStyles();
  const { t } = useTranslation();
  const history = useHistory();

  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    //getWebinars(search).then((res) => setWebinars(res.data));
  }, [debouncedSearch]);

  return (
    <div className={styles.root}>
      <Typography weight={'semibold'} size={'3xl'} margin={'0 0 24px'}>
        {t('admin.webinarsList')}
      </Typography>
      <Flex justify={'space-between'} align={'center'} margin={'0 0 36px'}>
        <TextField
          value={search}
          onChange={({ value }) => setSearch(value || '')}
          size={'s'}
          placeholder={t('admin.searchWebinars')}
          rightSide={IconSearch}
        />
        <Button
          label={t('admin.addWebinar')}
          size={'s'}
          view={'primary'}
          iconLeft={IconAdd}
          onClick={() => history.push('/admin/webinars/create')}
        />
      </Flex>
      <WebinarsTable data={webinars} />
    </div>
  );
};

export default Webinars;
