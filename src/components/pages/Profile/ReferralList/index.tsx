import React, { FC, useState, useCallback, MouseEvent } from 'react';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import ConstaIcons from 'assets/icons/ConstaIcons';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Breadcrumbs } from '@consta/uikit/Breadcrumbs';
import { TextField } from '@consta/uikit/TextField';
import { Button } from '@consta/uikit/Button';
import { Select } from '@consta/uikit/Select';
import { IconSearch } from '@consta/uikit/IconSearch';
import { IReferralGroup, IReferral } from 'components/pages/Profile/types';
import ReferralUser from 'components/pages/Profile/ReferralUser';
import { useTranslation } from 'react-i18next';

import { referralRoot, referralsList } from './mockData';
import useStyles from './styles';

interface IProgram {
  id: number;
  label: string;
}

interface IPage {
  icon?: FC;
  link: string;
  label: string;
  isActive?: boolean;
}

const Referrals: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  const breadcrumbs: IPage[] = [
    {
      icon: ConstaIcons.Lime,
      label: 'Home',
      link: '#',
    },
    {
      label: 'User 1',
      link: '#',
    },
    {
      label: 'User 2',
      link: '#',
    },
    {
      label: 'AnotherUser 1',
      link: '#',
    },
    {
      label: 'AnotherUser 2',
      link: '#',
    },
    {
      label: 'Page3',
      link: 'https://url.com/page-3',
      isActive: true,
    },
  ];

  const programOptions: IProgram[] = [
    { id: 1, label: ' Программа BitLime' },
    { id: 2, label: 'Программа Bitbox' },
  ];

  const matrixLevels: number[] = [...Array(17).keys()].map((x) => x + 1);

  const [filterSearch, setFilterSearch] = useState<string | null>('');
  const [filterProgram, setFilterProgram] = useState<IProgram | null>(null);
  const [selectedLeveles, setSelectedLevels] = useState<number[]>([]);

  const handleBreadcrumbClick = useCallback(
    (page: IPage, e: MouseEvent): void => {
      e.preventDefault();
      // console.log(page);
    },
    []
  );

  const handleMatrixLevelClick = useCallback(
    (n: number) => {
      if (selectedLeveles.includes(n)) {
        setSelectedLevels([...selectedLeveles.filter((x) => x !== n)]);
      } else {
        setSelectedLevels([...selectedLeveles, n]);
      }
    },
    [selectedLeveles]
  );

  return (
    <div className={styles.root}>
      <Typography weight="semibold" lineHeight="s" size="2xl">
        {t('profile.referral.list.title')}
      </Typography>

      <Grid cols="4" gap="xl" className={styles.grid}>
        <GridItem col="3">
          <Breadcrumbs
            className={styles.breadcrumbs}
            pages={breadcrumbs}
            maxCount={5}
            getLabel={(x) => x.label}
            getLink={(x) => x.link}
            getIcon={(x) => x.icon}
            getIsActive={(x) => !!x.isActive}
            onlyIconRoot
            onClick={handleBreadcrumbClick}
          />

          <div className={styles.referrals}>
            <ReferralUser data={referralRoot} root />

            {referralsList.map((group: IReferralGroup) => (
              <div key={group.id} className={styles.referralGroup}>
                <ReferralUser key={group.referral.id} data={group.referral} />
                {group.referrals &&
                  group.referrals.map((referral: IReferral) => (
                    <ReferralUser key={referral.id} data={referral} nested />
                  ))}
              </div>
            ))}
          </div>
        </GridItem>

        {/* Filters */}
        <GridItem col="1">
          <div className={styles.filters}>
            <div className={styles.filtersGroup}>
              <TextField
                value={filterSearch}
                placeholder={t('profile.referral.filter.search')}
                rightSide={IconSearch}
                onChange={({ value }) => setFilterSearch(value)}
              />
            </div>
            <div className={styles.filtersGroup}>
              <Select
                items={programOptions}
                value={filterProgram}
                placeholder={t('profile.referral.filter.level')}
                onChange={({ value }) => setFilterProgram(value)}
              />
            </div>
            <div className={styles.filtersGroup}>
              <Typography weight="semibold" margin="0 0 12px" lineHeight="s">
                {t('profile.referral.filter.matrix')}
              </Typography>
              <Flex wrap="wrap" justify="center">
                {matrixLevels.map((lvl) => (
                  <Button
                    key={lvl}
                    label={lvl}
                    form="round"
                    size="s"
                    view={selectedLeveles.includes(lvl) ? 'primary' : 'ghost'}
                    onClick={() => handleMatrixLevelClick(lvl)}
                    className={styles.filtersMatrixBtn}
                  />
                ))}
              </Flex>
            </div>
          </div>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Referrals;
