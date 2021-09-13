import React, {
  FC,
  useState,
  useCallback,
  useMemo,
  useEffect,
  MouseEvent,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Breadcrumbs } from '@consta/uikit/Breadcrumbs';
import { TextField } from '@consta/uikit/TextField';
import { Button } from '@consta/uikit/Button';
import { Select } from '@consta/uikit/Select';
import { Loader } from '@consta/uikit/Loader';
import { IconSearch } from '@consta/uikit/IconSearch';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import ConstaIcons from 'assets/icons/ConstaIcons';
import { IReferralTree } from 'types/interfaces/referrals';
import ReferralUser from 'components/pages/Profile/ReferralUser';
import { RootState } from 'store/reducers/rootReducer';
import { getReferrals } from 'store/reducers/referrals';
import { IUser } from 'types/interfaces/user';

import useSharedStyles from 'assets/styles/Shared';
import useStyles from './styles';

interface IProgram {
  id: number;
  label: string;
}
interface ICrumbsPage {
  icon?: FC;
  link: string;
  label: string;
  isActive?: boolean;
}

const defaultCrumbs: ICrumbsPage[] = [
  {
    icon: ConstaIcons.Lime,
    label: 'Home',
    link: '#',
  },
];

const programOptions: IProgram[] = [
  { id: 1, label: 'BITLIME' },
  { id: 2, label: 'AUTO_STANDARD' },
  { id: 3, label: 'AUTO_BUSINESS' },
  { id: 4, label: 'AUTO_PREMIUM' },
  { id: 5, label: 'HOUSE' },
  { id: 6, label: 'LIME' },
];

const Referrals: FC = () => {
  const styles = useStyles();
  const sharedStyles = useSharedStyles({});
  const params: { id: string } = useParams();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { referralsTree, loading, error } = useSelector(
    (state: RootState) => state.referrals
  );

  const matrixLevels: number[] = [...Array(17).keys()].map((x) => x + 1);

  const [filterSearch, setFilterSearch] = useState<string | null>('');
  const [filterProgram, setFilterProgram] = useState<IProgram>(
    programOptions[0]
  );
  const [selectedLevel, setSelectedLevels] = useState<number>(1);

  const requestReferrals = useCallback(
    ({
      id,
      program,
      level,
    }: {
      id: number | string;
      program: number;
      level: number;
    }) => {
      dispatch(
        getReferrals({
          id,
          program,
          level,
        })
      );
    },
    []
  );

  const handleBreadcrumbClick = useCallback(
    (page: ICrumbsPage, e: MouseEvent): void => {
      e.preventDefault();

      requestReferrals({
        id: page.link,
        program: filterProgram.id,
        level: selectedLevel,
      });
    },
    [selectedLevel, filterProgram]
  );

  const handleReferralClick = useCallback(
    (id: number): void => {
      requestReferrals({
        id,
        program: filterProgram.id,
        level: selectedLevel,
      });
    },
    [selectedLevel, filterProgram]
  );

  const handleMatrixLevelClick = useCallback(
    (n: number) => {
      setSelectedLevels(n);
    },
    [selectedLevel]
  );

  useEffect(() => {
    requestReferrals({
      id: params.id,
      program: filterProgram.id,
      level: selectedLevel,
    });
  }, [selectedLevel, filterProgram, params.id]);

  const mappedData = useMemo(() => {
    return {
      root: referralsTree,
      childrens: referralsTree.children,
      crumbs: [
        ...defaultCrumbs,
        ...(referralsTree.ancestors
          ? referralsTree.ancestors.map((a) => ({
              label: a.username || 'unknown',
              link: `${a.id}`,
            }))
          : []),
        ...[
          {
            label: referralsTree.username,
            link: `${referralsTree.id}`,
            isActive: true,
          },
        ],
      ],
    };
  }, [referralsTree]);

  return (
    <div className={styles.root}>
      <Typography weight="semibold" lineHeight="s" size="2xl">
        {t('profile.referral.list.title')}
      </Typography>

      <Grid cols="4" gap="xl" className={styles.grid}>
        <GridItem col="3" className={styles.gridColMain}>
          {!error ? (
            <>
              <Breadcrumbs
                className={styles.breadcrumbs}
                pages={mappedData.crumbs}
                maxCount={999}
                getLabel={(x) => x.label}
                getLink={(x) => x.link}
                getIcon={(x) => x.icon}
                getIsActive={(x) => !!x.isActive}
                onlyIconRoot
                onClick={handleBreadcrumbClick}
              />
              <div className={styles.referrals}>
                <ReferralUser data={mappedData.root} root />

                {mappedData.childrens &&
                  mappedData.childrens.map((group: IReferralTree) => (
                    <div key={group.id} className={styles.referralGroup}>
                      <ReferralUser
                        onReferralClick={handleReferralClick}
                        key={group.id}
                        data={group}
                      />
                      {group.children &&
                        group.children.map((referral: IReferralTree) => (
                          <ReferralUser
                            key={referral.id}
                            onReferralClick={handleReferralClick}
                            data={referral}
                            nested
                          />
                        ))}
                    </div>
                  ))}
              </div>
            </>
          ) : (
            <Typography
              view="alert"
              align="center"
              weight="semibold"
              margin="0 0 12px"
            >
              {error}
            </Typography>
          )}

          {loading && (
            <div className={sharedStyles.loader}>
              <Loader />
            </div>
          )}
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
                onChange={({ value }) =>
                  setFilterProgram(value || programOptions[0])
                }
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
                    view={selectedLevel === lvl ? 'primary' : 'ghost'}
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
