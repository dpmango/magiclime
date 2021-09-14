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
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Breadcrumbs } from '@consta/uikit/Breadcrumbs';
import { TextField } from '@consta/uikit/TextField';
import { Button } from '@consta/uikit/Button';
import { Select } from '@consta/uikit/Select';
import { Loader } from '@consta/uikit/Loader';
import { IconSearch } from '@consta/uikit/IconSearch';
import isEmpty from 'lodash/isEmpty';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import ConstaIcons from 'assets/icons/ConstaIcons';
import { IReferralTree } from 'types/interfaces/referrals';
import ReferralUser from 'components/pages/Profile/ReferralUser';
import { RootState } from 'store/reducers/rootReducer';
import { getReferrals } from 'store/reducers/referrals';
import { IUser } from 'types/interfaces/user';
import { buyMatricesService } from 'utils/api/routes/referrals';

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

  const [filterSearch, setFilterSearch] = useState<string | null>('');
  const [filterProgram, setFilterProgram] = useState<IProgram>(
    programOptions[0]
  );
  const [selectedLevel, setSelectedLevels] = useState<number>(1);
  const [buyProcessing, setBuyProcessing] = useState<boolean>(false);
  const { referralsTree, loading, error } = useSelector(
    (state: RootState) => state.referrals
  );

  const matrixLevels: number[] = useMemo(() => {
    let levels = 0;
    switch (filterProgram.id) {
      case 1:
        levels = 17;
        break;
      case 2:
        levels = 5;
        break;
      case 3:
        levels = 5;
        break;
      case 4:
        levels = 5;
        break;
      case 5:
        levels = 6;
        break;
      case 6:
        levels = 7;
        break;
      default:
        break;
    }

    return [...Array(levels).keys()].map((x) => x + 1);
  }, [filterProgram]);

  // reset level when program changed
  useEffect(() => {
    setSelectedLevels(1);
  }, [filterProgram]);

  // get & set program from initial url params
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const program = urlParams.get('program');

    if (program) {
      const targetProgramOption = programOptions.find(
        (x) => x.id === parseInt(program, 10)
      );

      if (targetProgramOption) {
        setFilterProgram(targetProgramOption);
      }
    }
  }, []);

  // api actions
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

  useEffect(() => {
    requestReferrals({
      id: params.id,
      program: filterProgram.id,
      level: selectedLevel,
    });
  }, [selectedLevel, filterProgram, params.id]);

  // click handlers
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

  const handleBuyClick = useCallback(async () => {
    setBuyProcessing(true);

    const [err, res] = await buyMatricesService({
      level: selectedLevel,
      program: filterProgram.id,
    });

    if (err) {
      if (err!.response!.status === 400) {
        toast.error(t('profile.referral.buy.toast.error400'));
      } else {
        toast.error(t('profile.referral.buy.toast.error500'));
      }

      setBuyProcessing(false);

      return;
    }

    toast.success(t('profile.referral.buy.toast.success'));
    requestReferrals({
      id: params.id,
      program: filterProgram.id,
      level: selectedLevel,
    });

    setBuyProcessing(false);
  }, [selectedLevel, filterProgram, params.id]);

  // main data getter
  const mappedData = useMemo(() => {
    return {
      root: isEmpty(referralsTree) ? null : referralsTree,
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
                maxCount={8}
                getLabel={(x) => x.label}
                getLink={(x) => x.link}
                getIcon={(x) => x.icon}
                getIsActive={(x) => !!x.isActive}
                onlyIconRoot
                onClick={handleBreadcrumbClick}
              />
              <div className={styles.referrals}>
                {mappedData.root && (
                  <ReferralUser data={mappedData.root} root />
                )}

                {mappedData.childrens &&
                  mappedData.childrens.map((group: IReferralTree, idx) => (
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

                      {idx === 0 && (
                        <Button
                          onClick={handleBuyClick}
                          label={t('profile.referral.buy.cta')}
                        />
                      )}
                    </div>
                  ))}
              </div>
            </>
          ) : (
            <>
              <Typography
                view="alert"
                align="center"
                weight="semibold"
                margin="0 0 12px"
              >
                {error}
              </Typography>
              <Button
                onClick={handleBuyClick}
                label={t('profile.referral.buy.cta')}
              />
            </>
          )}

          {loading && (
            <div className={sharedStyles.loader}>
              <Loader />
            </div>
          )}

          {buyProcessing && (
            <div className={sharedStyles.loader}>
              <Loader />
              <Typography size="l" margin="32px 0 0" align="center">
                {t('profile.referral.buy.service.longawait')}
              </Typography>
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
