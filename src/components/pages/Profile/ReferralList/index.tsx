import React, {
  FC,
  useState,
  useCallback,
  useMemo,
  useEffect,
  MouseEvent,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
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
import BaseModal from 'components/Common/BaseModal';
import { RootState } from 'store/reducers/rootReducer';
import { getReferrals } from 'store/reducers/referrals';
import { buyMatricesService } from 'utils/api/routes/referrals';
import { useQuery } from 'hooks/useQuery';
import { IReferralTree } from 'types/interfaces/referrals';

import ReferralUser from 'components/pages/Profile/ReferralUser';
import useSharedStyles from 'assets/styles/Shared';
import { buildTree } from './functions';
import {
  IRequestPayload,
  ICrumbsPage,
  IMappedData,
  IModalProps,
} from './types';
import useStyles from './styles';

interface IProgram {
  id: number;
  label: string;
}
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
  const history = useHistory();
  const location = useLocation();
  const query = useQuery();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [filterSearch, setFilterSearch] = useState<string | null>('');
  const [filterProgram, setFilterProgram] = useState<IProgram>(
    programOptions[0]
  );
  const [selectedLevel, setSelectedLevels] = useState<number>(1);
  const [buyProcessing, setBuyProcessing] = useState<boolean>(false);
  const [savedUserId, setSavedUsedId] = useState<number | string | undefined>(
    undefined
  );

  const [modalConfirm, setModalConfirm] = useState<IModalProps>({
    opened: false,
    id: 0,
  });

  const [modalSuccess, setModalSuccess] = useState<{ opened: boolean }>({
    opened: false,
  });

  const referralsTree = useSelector(
    (state: RootState) => state.referrals.referralsTree
  );
  const loading = useSelector((state: RootState) => state.referrals.loading);
  const error = useSelector((state: RootState) => state.referrals.error);

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

  // api actions
  const requestReferrals = useCallback(
    async ({ id, program, level }: IRequestPayload) => {
      if (!buyProcessing) {
        await dispatch(
          getReferrals({
            id,
            program,
            level,
            successCallback: (res?: IReferralTree) => {
              const params = new URLSearchParams({
                id: `${res!.id}`,
                level: `${level}`,
                program: `${program}`,
              });

              history.replace({
                pathname: location.pathname,
                search: params.toString(),
              });
            },
            errorCallback: () => {
              setSavedUsedId(undefined);

              history.replace({
                pathname: location.pathname,
                search: '',
              });
            },
          })
        );
      }
    },
    [buyProcessing]
  );

  // initial request with url getters & setters
  useEffect(() => {
    const fetch = async () => {
      const id = query.get('id');
      const program = query.get('program');
      const level = query.get('level');

      const params = {
        id: undefined,
        program: filterProgram.id,
        level: selectedLevel,
      } as IRequestPayload;

      if (id) {
        params.id = id;
      }

      if (program) {
        const targetProgramOption = programOptions.find(
          (x) => x.id === parseInt(program, 10)
        );

        if (targetProgramOption) {
          setFilterProgram(targetProgramOption);
          params.program = targetProgramOption.id;
        }
      }

      if (level) {
        setSelectedLevels(parseInt(level, 10));
        params.level = parseInt(level, 10);
      }

      await requestReferrals(params);
    };

    fetch();
  }, []);

  // click handlers
  const handleBreadcrumbClick = useCallback(
    (page: ICrumbsPage, e: MouseEvent): void => {
      e.preventDefault();

      setSavedUsedId(page.link);

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
      setSavedUsedId(id);

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

      requestReferrals({
        program: filterProgram.id,
        level: n,
      });
    },
    [filterProgram]
  );

  const handleFilterProgramChange = useCallback((program: IProgram) => {
    setFilterProgram(program);
    setSelectedLevels(1);

    requestReferrals({
      program: program.id,
      level: 1,
    });
  }, []);

  const handleBuyClick = useCallback(
    async (id?: number) => {
      setBuyProcessing(true);

      const [err, res] = await buyMatricesService({
        level: selectedLevel,
        program: filterProgram.id,
        matrixUserId: id,
      });

      if (err || !res) {
        if (err && err!.status === 400) {
          toast.error(t('profile.referral.buy.toast.error400'));
        } else {
          toast.error(t('profile.referral.buy.toast.error500'));
        }

        setBuyProcessing(false);
        return;
      }

      // toast.success(t('profile.referral.buy.toast.success'));
      setModalConfirm({ opened: false, id: 0 });
      setModalSuccess({ opened: true });

      await requestReferrals({
        id: savedUserId,
        program: filterProgram.id,
        level: selectedLevel,
      });

      setBuyProcessing(false);
    },
    [selectedLevel, filterProgram, savedUserId]
  );

  // main data getter
  const mappedData = useMemo((): IMappedData => {
    return buildTree({ referralsTree });
  }, [referralsTree]);

  return (
    <div className={styles.root}>
      <Typography weight="semibold" lineHeight="s" size="2xl">
        {t('profile.referral.list.title')}
      </Typography>

      <Grid
        cols="1"
        gap="xl"
        breakpoints={{ m: { cols: 4 } }}
        className={styles.grid}
      >
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
                  <ReferralUser
                    data={mappedData.root}
                    level={selectedLevel}
                    program={filterProgram.id}
                    root
                  />
                )}

                {mappedData.childrens &&
                  mappedData.childrens.map((group: IReferralTree, idx) => (
                    <div key={group.id || idx} className={styles.referralGroup}>
                      <ReferralUser
                        data={group}
                        level={selectedLevel}
                        program={filterProgram.id}
                        onReferralClick={handleReferralClick}
                        onBuyClick={(id) =>
                          setModalConfirm({ opened: true, id })
                        }
                      />
                      {group.children &&
                        group.children.map((referral: IReferralTree, cidx) => (
                          <ReferralUser
                            key={referral.id || cidx}
                            data={referral}
                            level={selectedLevel}
                            program={filterProgram.id}
                            onReferralClick={handleReferralClick}
                            onBuyClick={(id) =>
                              setModalConfirm({ opened: true, id })
                            }
                            nested
                          />
                        ))}
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

              <div className={styles.cta}>
                <Button
                  onClick={() => setModalConfirm({ id: 0, opened: true })}
                  label={t('profile.referral.buy.cta')}
                />
              </div>
            </>
          )}

          {(buyProcessing || loading) && (
            <div className={sharedStyles.loader}>
              <Loader />
            </div>
          )}
        </GridItem>

        {/* Filters */}
        <GridItem col="1">
          <div className={styles.filters}>
            <div className={styles.filtersGroup}>
              <Select
                items={programOptions}
                value={filterProgram}
                placeholder={t('profile.referral.filter.level')}
                onChange={({ value }) =>
                  handleFilterProgramChange(value || programOptions[0])
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
            <div className={styles.filtersGroup}>
              <Button
                width="full"
                onClick={() => setModalConfirm({ id: 0, opened: true })}
                label={t('profile.referral.buy.cta')}
              />
            </div>
            <div className={styles.filtersGroup}>
              <TextField
                value={filterSearch}
                placeholder={t('profile.referral.filter.search')}
                rightSide={IconSearch}
                onChange={({ value }) => setFilterSearch(value)}
              />
            </div>
          </div>
        </GridItem>
      </Grid>

      <BaseModal
        theme="narrow"
        isOpen={modalConfirm.opened}
        setModalOpen={(v) =>
          setModalConfirm({ id: v ? modalConfirm.id : 0, opened: v })
        }
        title={t('profile.referral.buy.modal.confirmTitle')}
      >
        <Typography margin="16px 0 0" size="l" lineHeight="s" align="center">
          Вы уверены? Деньги будут списаны с вашего счета. <br />
          Откатить операцию невозможно.
        </Typography>

        <Flex
          align="center"
          justify="center"
          margin="32px 0 0"
          className={styles.modalCta}
        >
          <Button
            label={t('common.actions.buy')}
            onClick={() => handleBuyClick(modalConfirm.id || undefined)}
          />
          <Button
            label={t('common.actions.cancel')}
            view="secondary"
            onClick={() => setModalConfirm({ id: 0, opened: false })}
          />
        </Flex>
      </BaseModal>

      <BaseModal
        theme="narrow"
        isOpen={modalSuccess.opened}
        setModalOpen={(v) =>
          setModalSuccess({
            opened: v,
          })
        }
        title={t('profile.referral.buy.modal.successTitle')}
      >
        <Flex
          align="center"
          justify="center"
          margin="32px 0 0"
          className={styles.modalCta}
        >
          <Button
            label={t('common.actions.ok')}
            onClick={() =>
              setModalSuccess({
                opened: false,
              })
            }
          />
        </Flex>
      </BaseModal>
    </div>
  );
};

export default Referrals;
