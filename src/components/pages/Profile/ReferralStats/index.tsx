import React, { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { TextField } from '@consta/uikit/TextField';
import { IconCopy } from '@consta/uikit/IconCopy';
import { IUser } from 'types/interfaces/user';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { RootState } from 'store/reducers/rootReducer';
import { copyToClipboard } from 'utils/helpers/clipboard';
import { formatPrice } from 'utils/helpers/formatPrice';
// import { Button } from '@consta/uikit/Button';

import useStyles from './styles';

interface IProps {
  profile: IUser;
  isMyProfile: boolean;
}

const Referrals: FC<IProps> = ({ profile, isMyProfile }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const balance = useSelector((state: RootState) => state.profile.balance);
  // const { referralsTree } = useSelector((state: RootState) => state.referrals);

  const handleCopyRefClick = useCallback(
    (e) => {
      e.preventDefault();

      // https://magiclime.academy/?ref=
      copyToClipboard(
        `${profile.referral_number}`,
        t('profile.head.copySuccess'),
        t('profile.head.copyError')
      );
    },
    [profile.referral_number]
  );

  return (
    <div className={styles.root}>
      <Grid
        cols="1"
        gap="xl"
        breakpoints={{
          s: { cols: 2 },
          l: { cols: 4 },
          xl: { cols: 5 },
        }}
      >
        {isMyProfile && (
          <>
            <GridItem col="2">
              <div className={styles.box}>
                <Typography
                  size="xs"
                  weight="semibold"
                  margin="0 0 4px"
                  view="secondary"
                >
                  {t('profile.referral.stats.link')}
                </Typography>
                {profile.is_bought_1level_bitlime ? (
                  <TextField
                    name="name"
                    size="s"
                    form="round"
                    value={`${profile.referral_number}`}
                    leftSide={IconCopy}
                    className={styles.input}
                    onClick={handleCopyRefClick}
                  />
                ) : (
                  <Typography
                    size="s"
                    weight="semibold"
                    margin="12px 0 0px"
                    view="primary"
                  >
                    {t('profile.referral.stats.linkEmpty')}
                  </Typography>
                )}
              </div>
            </GridItem>
          </>
        )}

        <GridItem>
          <div className={styles.box}>
            <Typography
              size="xs"
              weight="semibold"
              margin="0 0 4px"
              view="secondary"
            >
              {t('profile.referral.stats.bounspoints')}
            </Typography>
            <Flex align="baseline">
              <Typography size="xl" weight="semibold" view="brand">
                {formatPrice(balance.bonus_points, 0)}
              </Typography>
              {/* <Typography size="xl" weight="light" view="brand">
                &nbsp;B
              </Typography> */}
            </Flex>
          </div>
        </GridItem>
        <GridItem>
          <div className={styles.box}>
            <Typography
              size="xs"
              weight="semibold"
              margin="0 0 4px"
              view="secondary"
            >
              {t('profile.referral.stats.invited')}
            </Typography>

            <Typography size="xl" weight="semibold">
              0
            </Typography>
          </div>
        </GridItem>
        {/* <GridItem>
          <div className={styles.box}>
            <Typography
              size="xs"
              weight="semibold"
              margin="0 0 4px"
              view="secondary"
            >
              {t('profile.referral.stats.matrix')}
            </Typography>
            <Flex align="baseline">
              <Typography size="xl" weight="semibold">
                {profile.level}
              </Typography>
              <Typography size="xl">
                &nbsp;{t('profile.referral.stats.level')}
              </Typography>
            </Flex>
          </div>
        </GridItem> */}
        <GridItem>
          <div className={styles.box}>
            <Typography
              size="xs"
              weight="semibold"
              margin="0 0 4px"
              view="secondary"
            >
              {t('profile.referral.stats.invitee')}
            </Typography>
            <Typography size="xl" weight="light" view="brand">
              {profile.media_sponsor}
            </Typography>
          </div>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Referrals;
