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
// import { Button } from '@consta/uikit/Button';

import useStyles from './styles';

interface IProps {
  profile: IUser;
  isMyProfile: boolean;
}

const Referrals: FC<IProps> = ({ profile, isMyProfile }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const handleCopyRefClick = useCallback(
    (e) => {
      e.preventDefault();

      // TODO - should be changed to some library ?
      const textArea = document.createElement('textarea');
      textArea.value = `https://magiclime.academy/?ref=${profile.referral_number}`;
      textArea.style.opacity = '0';
      textArea.style.position = 'absolute';
      textArea.style.top = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        const successful = document.execCommand('copy');
        const msg = successful ? 'successful' : 'unsuccessful';
        toast(t('profile.head.copySuccess'));
      } catch (err) {
        console.log(`${t('profile.head.copyError')} : ${err.message}`);
      }

      document.body.removeChild(textArea);
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
          xl: { cols: 6 },
        }}
      >
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
            <TextField
              name="name"
              size="s"
              form="round"
              value={`https://magiclime.academy/?ref=${profile.referral_number}`}
              leftSide={IconCopy}
              className={styles.input}
              onClick={handleCopyRefClick}
            />
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
              {t('profile.referral.stats.gain')}
            </Typography>
            <Flex align="baseline">
              <Typography size="xl" weight="semibold" view="brand">
                0
              </Typography>
              <Typography size="xl" weight="light" view="brand">
                &nbsp;BL
              </Typography>
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
        <GridItem>
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
        </GridItem>
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
