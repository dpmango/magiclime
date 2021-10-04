import React, { FC, useState, useMemo } from 'react';
import { useHistory, useRouteMatch, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';

import Flex from 'components/Common/Flex';
import Typography from 'components/Common/Typography';
import Pagination from 'components/Common/Pagination';
import {
  getBonuseHistoryService,
  getBalanceHistoryService,
} from 'utils/api/routes/payment';
import { ITab } from 'types/interfaces/common';

import HistoryBalance from './HistoryBalance';
import HistoryBonuses from './HistoryBonuses';
import useStyles from './styles';

const ProfileHistory: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  const tabs: ITab[] = useMemo(() => {
    return [
      {
        id: 1,
        slug: `bonuses`,
        label: t('profile.history.tabs.bonuses'),
      },
      {
        id: 2,
        slug: `finance`,
        label: t('profile.history.tabs.finance'),
      },
    ];
  }, []);

  const [tab, setTab] = useState<string>('bonuses');

  return (
    <div className={styles.root}>
      <Flex align="center">
        <Typography
          margin="0 16px 0 0"
          weight="semibold"
          lineHeight="s"
          size="2xl"
        >
          {t('profile.balance.history.titleShort')}
        </Typography>

        <ChoiceGroup
          value={tabs.find((x) => x.slug === tab)}
          onChange={({ value }) => setTab(value.slug)}
          items={tabs}
          getLabel={(item) => item.label}
          size="m"
          multiple={false}
          className={styles.tabs}
          name="historyChoicegroup"
        />
      </Flex>

      {tab === 'finance' && (
        <Pagination
          getList={getBalanceHistoryService}
          listComponent={HistoryBalance}
          queries={{ search: '' }}
        />
      )}

      {tab === 'bonuses' && (
        <Pagination
          key="h2"
          getList={getBonuseHistoryService}
          listComponent={HistoryBonuses}
          queries={{ search: '' }}
        />
      )}
    </div>
  );
};

export default ProfileHistory;
