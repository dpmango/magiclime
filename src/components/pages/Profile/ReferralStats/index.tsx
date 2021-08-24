import React, { FC } from 'react';
import Typography from 'components/Common/Typography';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { TextField } from '@consta/uikit/TextField';
import { IconCopy } from '@consta/uikit/IconCopy';
import Flex from 'components/Common/Flex';
// import { Button } from '@consta/uikit/Button';
// import cns from 'classnames';
import { useTranslation } from 'react-i18next';

import useStyles from './styles';

const Referrals: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

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
              value="UserLoginRefLink"
              leftSide={IconCopy}
              className={styles.input}
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
                153.130
              </Typography>
              <Typography size="xl" weight="light" view="brand">
                &nbsp;BTL
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
              26
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
                5
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
              UserLogin
            </Typography>
          </div>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Referrals;
