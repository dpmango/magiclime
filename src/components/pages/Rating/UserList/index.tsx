import React, { FC, ReactElement } from 'react';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Avatar } from '@consta/uikit/Avatar';
import { useTranslation } from 'react-i18next';

import useStyles from './styles';
import { list } from './mockData';

const RatingList: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      {list &&
        list.map(
          (x): ReactElement => (
            <Flex align="center" className={styles.card} key={x.id}>
              <Typography
                size="l"
                view="secondary"
                weight="semibold"
                className={styles.cardNumber}
              >
                №{x.id}
              </Typography>

              <Flex align="center" className={styles.cardUser}>
                <Avatar
                  url={x.avatar ? x.avatar.image : ''}
                  name={x.name}
                  className={styles.cardAvatar}
                />
                <Typography
                  margin="0 0 0 8px"
                  size="xl"
                  weight="semibold"
                  className={styles.cardUserName}
                >
                  {x.name}
                </Typography>
              </Flex>

              <Flex align="center" className={styles.cardLeague}>
                {x.league.icon && (
                  <img src={x.league.icon} alt={x.league.title} />
                )}

                <Typography margin="0 0 0 6px" size="s">
                  {x.league.title}
                </Typography>
              </Flex>

              <Typography
                view="secondary"
                size="s"
                align="right"
                className={styles.cardStat}
              >
                {x.stat}
              </Typography>
            </Flex>
          )
        )}
    </div>
  );
};

export default RatingList;
