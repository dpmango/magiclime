import { Loader } from '@consta/uikit/Loader';
import { Table, TableColumn, TableRow } from '@consta/uikit/Table';
import React from 'react';
import { useTranslation } from 'react-i18next';
import cln from 'classnames';
import Typography from '../Typography';
import useStyles from './styles';

interface IProps<T extends TableRow> {
  data: T[];
  loading?: boolean;
  columns: TableColumn<T>[];
  className?: string;
}

const BaseTable = <T extends TableRow>({
  data,
  columns,
  className,
  loading,
}: IProps<T>) => {
  const { t } = useTranslation();
  const styles = useStyles();

  return (
    <Table
      columns={columns}
      className={cln(styles.table, className)}
      borderBetweenColumns
      borderBetweenRows
      emptyRowsPlaceholder={
        loading ? (
          <Loader className={styles.loader} size="m" />
        ) : (
          <Typography>{t('admin.emptyData')}</Typography>
        )
      }
      verticalAlign="center"
      rows={data}
    />
  );
};

export default BaseTable;
