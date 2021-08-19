import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Button } from '@consta/uikit/Button';
import useStyles from './styles';

const Achievements: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <Typography weight="semibold" lineHeight="s" size="2xl">
        {t('profile.settings.navigation.achievements')}
      </Typography>

      <Grid cols="3" gap="2xl" className={styles.section}>
        <GridItem>
          <Flex direction="column" className={styles.achievement}>
            <Flex align="center">
              <div className={styles.achievementImage}>
                <img src="/images/achievement-image.png" alt="" />
              </div>
              <Typography margin="0 0 0 16px" view="ghost" lineHeight="xs">
                15 января <br />
                11:00
              </Typography>
            </Flex>
            <div className={styles.achievementRating}>
              <Typography view="brand" size="xs" lineHeight="2xs">
                +25 рейтинга
              </Typography>
            </div>
            <Typography margin="8px 0 0" weight="semibold">
              Лучший в своём деле
            </Typography>
            <Typography margin="8px 0 16px" view="ghost">
              Всероссийский чемпионат сочинений для школьников 9-11 классов.
            </Typography>
            <Button
              label={t('profile.settings.cta.open')}
              className={styles.achievementCta}
            />
          </Flex>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Achievements;
