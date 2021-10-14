import React, {
  FC,
  useEffect,
  useState,
  useCallback,
  useRef,
  useMemo,
  memo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from '@consta/uikit/Button';
import { Calendar } from '@consta/uikit/Calendar';
import { TextField } from '@consta/uikit/TextField';
import { IconCalendar } from '@consta/uikit/IconCalendar';
import moment from 'moment';
import cns from 'classnames';

import Typography from 'components/Common/Typography';
import Pagination from 'components/Common/Pagination';
import { getMatricesHistoryService } from 'utils/api/routes/referrals';
import { useClickOutside } from 'hooks/useClickOutside';

import HistoryOperations from 'components/pages/Profile/History/HistoryOperations';
import Filters from 'components/pages/Profile/History/Filter';
import useStyles from './styles';

const Operations: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  const [filterQueries, setFilterQueries] = useState({});

  return (
    <div className={styles.root}>
      <Typography margin="42px 0 0" weight="semibold" lineHeight="s" size="2xl">
        {t('profile.balance.history.titleOperations')}
      </Typography>

      <Filters setFilterQueries={setFilterQueries} />

      <Pagination
        getList={getMatricesHistoryService}
        listComponent={HistoryOperations}
        queries={filterQueries}
      />
    </div>
  );
};

export default memo(Operations);
