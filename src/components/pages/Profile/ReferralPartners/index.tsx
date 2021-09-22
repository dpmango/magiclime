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
import { RootState } from 'store/reducers/rootReducer';
import { getReferrals, getClones } from 'store/reducers/referrals';
import { getBalance } from 'store/reducers/profile';
import { buyMatricesService } from 'utils/api/routes/referrals';
import { useQuery } from 'hooks/useQuery';
import { IReferralTree, IClone } from 'types/interfaces/referrals';
import { ISelectOption } from 'types/interfaces/common';

import useSharedStyles from 'assets/styles/Shared';
import ReferralUser from './ReferralUser';
import ReferralClone from './ReferralClone';
import Modals from './Modals';
import {
  programOptions,
  buildTree,
  buildMatrixLevels,
  getInitialLevel,
} from './functions';
import {
  IRequestPayload,
  ICrumbsPage,
  IMappedData,
  IModalProps,
} from './types';
import useStyles from './styles';

const Referrals: FC = () => {
  const styles = useStyles();
  const sharedStyles = useSharedStyles({});
  const history = useHistory();
  const location = useLocation();
  const query = useQuery();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [filterSearch, setFilterSearch] = useState<string | null>('');
  const [filterProgram, setFilterProgram] = useState<ISelectOption>(
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

  const [modalSuccess, setModalSuccess] = useState<Omit<IModalProps, 'id'>>({
    opened: false,
  });

  const referralsTree = useSelector(
    (state: RootState) => state.referrals.referralsTree
  );
  const loading = useSelector((state: RootState) => state.referrals.loading);
  const error = useSelector((state: RootState) => state.referrals.error);
  const clones = useSelector((state: RootState) => state.referrals.clones);

  const matrixLevels: number[] = useMemo(() => {
    return buildMatrixLevels(filterProgram.id);
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

        await dispatch(
          getClones({
            program,
            level,
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

      if (page.link !== '#') {
        setSavedUsedId(page.link);

        requestReferrals({
          id: page.link,
          program: filterProgram.id,
          level: selectedLevel,
        });
      }
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

  const handleFilterProgramChange = useCallback((program: ISelectOption) => {
    setFilterProgram(program);
    const initialLvl = getInitialLevel(program.id);
    setSelectedLevels(initialLvl);

    requestReferrals({
      program: program.id,
      level: initialLvl,
    });
  }, []);

  const handleBuyClick = useCallback(
    async (id?: number) => {
      if (buyProcessing) return;

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

      await dispatch(getBalance());

      setBuyProcessing(false);
    },
    [buyProcessing, selectedLevel, filterProgram, savedUserId]
  );

  // main data getter
  const mappedData = useMemo((): IMappedData => {
    return buildTree({
      referralsTree,
      level: selectedLevel,
    });
  }, [referralsTree, selectedLevel]);

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

              {clones && (
                <div className={styles.clones}>
                  <Typography
                    weight="semibold"
                    margin="0 0 24px"
                    lineHeight="s"
                    size="2xl"
                  >
                    {t('profile.referral.clones.title')}
                  </Typography>

                  {clones.map((clone: IClone) => (
                    <ReferralClone
                      key={clone.id}
                      onReferralClick={handleReferralClick}
                      data={clone}
                    />
                  ))}
                </div>
              )}
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
              <Typography view="link" size="s" align="center">
                Куда встанет клон?
              </Typography>
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

      <Modals
        modalConfirm={modalConfirm}
        setModalConfirm={setModalConfirm}
        handleBuyClick={handleBuyClick}
        modalSuccess={modalSuccess}
        setModalSuccess={setModalSuccess}
      />
    </div>
  );
};

export default Referrals;
