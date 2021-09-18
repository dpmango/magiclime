import React, { FC, useEffect, useState } from 'react';
import { IconSearch } from '@consta/uikit/IconSearch';
import { TextField } from '@consta/uikit/TextField';
import { useTranslation } from 'react-i18next';
import { useDebounce } from '../../../../hooks/useDebounce';
import { AxiosPromise } from '../../../../types/common';
import { IAxiosPaginatedResponse } from '../../../../types/interfaces/common';
import Flex from '../../../Common/Flex';
import Typography from '../../../Common/Typography';
import useStyles from './styles';

interface IProps<T> {
  title: string;
  apiFunc: (
    search: string,
    page?: number,
    limit?: number
  ) => AxiosPromise<IAxiosPaginatedResponse<T>>;
  button: JSX.Element;
  tableComponent: FC<{ data: T[]; loading: boolean }>;
}

const BaseAdminPage = <T extends object>({
  title,
  apiFunc,
  button,
  tableComponent: Table,
}: IProps<T>) => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T[]>([]);
  const styles = useStyles();
  const { t } = useTranslation();

  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    apiFunc(debouncedSearch)
      .then((res) => setData(res.data.results))
      .finally(() => {
        setLoading(false);
      });
  }, [debouncedSearch]);

  return (
    <div className={styles.root}>
      <Flex align="center" justify="space-between" margin="0 0 84px">
        <Typography weight="semibold" size="3xl">
          {title}
        </Typography>
        <Flex align="center" className={styles.buttonsWrapper}>
          <TextField
            value={search}
            onChange={({ value }) => setSearch(value || '')}
            size="s"
            placeholder={t('common.search')}
            rightSide={IconSearch}
          />
          {button}
        </Flex>
      </Flex>
      <Table data={data} loading={loading} />
    </div>
  );
};

export default BaseAdminPage;
