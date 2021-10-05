import { Select } from '@consta/uikit/Select';
import React, {
  FC,
  useState,
  useCallback,
  useMemo,
  useEffect,
  MouseEvent,
} from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Breadcrumbs } from '@consta/uikit/Breadcrumbs';
import { TextField } from '@consta/uikit/TextField';
import { Loader } from '@consta/uikit/Loader';
import { IconSearch } from '@consta/uikit/IconSearch';

import Typography from 'components/Common/Typography';
import { RootState } from 'store/reducers/rootReducer';
import { IReferralTeam } from 'types/interfaces/referrals';
import { getTeam } from 'store/reducers/referrals';

import useSharedStyles from 'assets/styles/Shared';
import { useQuery } from 'hooks/useQuery';
import { useDebounce } from '../../../../hooks/useDebounce';
import { programOptions } from '../ReferralPartners/functions';
import ReferralUser from './ReferralUser';
import { buildTree } from './functions';
import { ICrumbsPage, IRequestPayload, IMappedData } from './types';
import useStyles from './styles';

const ReferralsTeam: FC = () => {
  const styles = useStyles();
  const sharedStyles = useSharedStyles({});
  const history = useHistory();
  const location = useLocation();
  const query = useQuery();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [filterSearch, setFilterSearch] = useState('');
  const [program, setProgram] = useState(programOptions[0]);

  const teamTree = useSelector((state: RootState) => state.referrals.team);
  const { id } = useSelector((state: RootState) => state.user.profile);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const debouncedSearch = useDebounce(filterSearch, 300);

  // api actions
  const requestTeam = useCallback(
    async (id: string | number) => {
      setLoading(true);
      error && setError('');

      await dispatch(
        getTeam({
          id,
          search: debouncedSearch,
          program: program.id,
          successCallback: (res?: IReferralTeam) => {
            const params = new URLSearchParams({
              id: `${res!.id}`,
            });

            history.replace({
              pathname: location.pathname,
              search: params.toString(),
            });
          },
          errorCallback: () => {
            history.replace({
              pathname: location.pathname,
              search: '',
            });

            setError('Ошибка при получении команды');
          },
        })
      );

      setLoading(false);
    },
    [debouncedSearch, program]
  );

  // initial request with url getters & setters
  useEffect(() => {
    requestTeam(id);
  }, [debouncedSearch, program]);

  // click handlers
  const handleBreadcrumbClick = useCallback(
    (page: ICrumbsPage, e: MouseEvent): void => {
      e.preventDefault();

      if (page.link !== '#') {
        requestTeam(page.link);
      }
    },
    []
  );

  const handleReferralClick = useCallback((id: number): void => {
    requestTeam(id);
  }, []);

  // main data getter
  const mappedData = useMemo((): IMappedData => {
    return buildTree({ teamTree });
  }, [teamTree]);

  return (
    <div className={styles.root}>
      <Typography weight="semibold" lineHeight="s" size="2xl">
        {t('profile.referral.team.title')}
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
                  <ReferralUser data={mappedData.root} root />
                )}

                {mappedData.children &&
                  mappedData.children.map((group: IReferralTeam, idx) => (
                    <div key={group.id || idx} className={styles.referralGroup}>
                      <ReferralUser
                        data={group}
                        onReferralClick={handleReferralClick}
                      />
                      {group.children &&
                        group.children.map((referral: IReferralTeam) => (
                          <div
                            key={group.id || uuid()}
                            className={styles.referralGroup}
                          >
                            <ReferralUser
                              data={referral}
                              onReferralClick={handleReferralClick}
                              nested
                            />
                            {referral.children &&
                              referral.children.map(
                                (referral2: IReferralTeam) => (
                                  <ReferralUser
                                    data={referral2}
                                    key={referral2.id || uuid()}
                                    onReferralClick={handleReferralClick}
                                    nested2
                                  />
                                )
                              )}
                          </div>
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
            </>
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
              <Select
                items={programOptions}
                value={program}
                placeholder={t('profile.referral.filter.level')}
                onChange={({ value }) => setProgram(value!)}
              />
            </div>
            <div className={styles.filtersGroup}>
              <TextField
                value={filterSearch}
                placeholder={t('profile.referral.filter.search')}
                rightSide={IconSearch}
                onChange={({ value }) => setFilterSearch(value || '')}
              />
            </div>
          </div>
        </GridItem>
      </Grid>
    </div>
  );
};

export default ReferralsTeam;
