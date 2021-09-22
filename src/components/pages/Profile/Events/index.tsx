import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from '@consta/uikit/Button';
import { IconArrowRight } from '@consta/uikit/IconArrowRight';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { RootState } from 'store/reducers/rootReducer';

import useStyles from './styles';

const Events: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  const events = useSelector((state: RootState) => state.profile.events);

  return (
    <Flex direction="column" className={styles.root}>
      <Typography weight="semibold" lineHeight="s" size="2xl">
        {t('profile.events.title')}
      </Typography>

      <Flex direction="column" className={styles.box}>
        {events && events.length ? (
          <>
            <div className={styles.boxList}>
              {events.map((event) => (
                <Flex align="center" className={styles.event} key={event.id}>
                  <div className={styles.eventBox} />
                  <div className={styles.eventContent}>
                    <Typography size="s">{event.title}</Typography>
                  </div>
                </Flex>
              ))}
            </div>

            {/* <Button
              label={t('profile.events.more')}
              size="s"
              view="secondary"
              className={styles.boxCta}
              iconRight={IconArrowRight}
            /> */}
          </>
        ) : (
          <Typography
            view="secondary"
            weight="semibold"
            lineHeight="s"
            size="xl"
            align="center"
          >
            {t('profile.events.empty')}
          </Typography>
        )}
      </Flex>
    </Flex>
  );
};

export default Events;
