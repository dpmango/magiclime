import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Button } from '@consta/uikit/Button';
import { IAchievement } from 'types/interfaces/profile';

import { RootState } from 'store/reducers/rootReducer';

import useStyles from './styles';

const Achievements: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  const achivements = useSelector(
    (state: RootState) => state.profile.achivements as IAchievement[]
  );

  return (
    <div className={styles.root}>
      <Typography weight="semibold" lineHeight="s" size="2xl">
        {t('profile.settings.navigation.achievements')}
      </Typography>

      <Grid cols="3" gap="2xl" className={styles.section}>
        {achivements &&
          achivements.length > 0 &&
          achivements.map((achivement) => (
            <GridItem>
              <Flex direction="column" className={styles.achievement}>
                <Flex align="center">
                  <div className={styles.achievementImage}>
                    {achivement.group.image && (
                      <img
                        src={achivement.group.image.image}
                        alt={achivement.group.title}
                      />
                    )}
                  </div>
                  <Typography margin="0 0 0 16px" view="ghost" lineHeight="xs">
                    todo 15 января <br />
                    11:00
                  </Typography>
                </Flex>
                <div className={styles.achievementRating}>
                  <Typography view="brand" size="xs" lineHeight="2xs">
                    TODO - +25 рейтинга
                  </Typography>
                </div>
                <Typography margin="8px 0 0" weight="semibold">
                  {achivement.title}
                </Typography>
                <Typography margin="8px 0 16px" view="ghost">
                  todo
                </Typography>
                <Button
                  label={t('profile.settings.cta.open')}
                  className={styles.achievementCta}
                />
              </Flex>
            </GridItem>
          ))}
      </Grid>
    </div>
  );
};

export default Achievements;
