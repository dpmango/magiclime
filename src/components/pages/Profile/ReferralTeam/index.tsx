import React, {
  FC,
  useState,
  useCallback,
  useMemo,
  useEffect,
  MouseEvent,
} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Breadcrumbs } from '@consta/uikit/Breadcrumbs';
import { TextField } from '@consta/uikit/TextField';
import { Loader } from '@consta/uikit/Loader';
import { IconSearch } from '@consta/uikit/IconSearch';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { IReferralTree } from 'types/interfaces/referrals';
import { getTeam } from 'store/reducers/referrals';

import useSharedStyles from 'assets/styles/Shared';
import { useQuery } from 'hooks/useQuery';
import ReferralUser from './ReferralUser';
import { buildTree } from './functions';
import { ICrumbsPage, IRequestPayload, IMappedData } from './types';
import useStyles from './styles';

import { referralsTree } from './mockData';

const ReferralsTeam: FC = () => {
  const styles = useStyles();
  const sharedStyles = useSharedStyles({});
  const history = useHistory();
  const location = useLocation();
  const query = useQuery();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [filterSearch, setFilterSearch] = useState<string | null>('');

  const loading = false;
  const error = false;

  // api actions
  const requestTeam = useCallback(async ({ id }: { id?: number | string }) => {
    await dispatch(
      getTeam({
        id,
        successCallback: (res?: IReferralTree) => {
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
        },
      })
    );
  }, []);

  // initial request with url getters & setters
  useEffect(() => {
    const fetch = async () => {
      const id = query.get('id');

      const params = {
        id: undefined,
      } as IRequestPayload;

      if (id) {
        params.id = id;
      }

      await requestTeam(params);
    };

    fetch();
  }, []);

  // click handlers
  const handleBreadcrumbClick = useCallback(
    (page: ICrumbsPage, e: MouseEvent): void => {
      e.preventDefault();

      if (page.link !== '#') {
        requestTeam({
          id: page.link,
        });
      }
    },
    []
  );

  const handleReferralClick = useCallback((id: number): void => {
    requestTeam({
      id,
    });
  }, []);

  // main data getter
  const mappedData = useMemo((): IMappedData => {
    return buildTree({ referralsTree });
  }, [referralsTree]);

  console.log({ mappedData });
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

                {mappedData.childrens &&
                  mappedData.childrens.map((group: IReferralTree, idx) => (
                    <div key={group.id || idx} className={styles.referralGroup}>
                      <ReferralUser
                        data={group}
                        onReferralClick={handleReferralClick}
                      />
                      {group.children &&
                        group.children.map((referral: IReferralTree, cidx) => (
                          <div
                            key={group.id || idx}
                            className={styles.referralGroup}
                          >
                            <ReferralUser
                              data={referral}
                              key={referral.id || cidx}
                              onReferralClick={handleReferralClick}
                              nested
                            />
                            {referral.children &&
                              referral.children.map(
                                (referral2: IReferralTree, cidx) => (
                                  <ReferralUser
                                    data={referral2}
                                    key={referral2.id || cidx}
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
    </div>
  );
};

export default ReferralsTeam;
