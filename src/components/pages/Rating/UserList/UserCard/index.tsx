import React, { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Avatar } from '@consta/uikit/Avatar';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import ContaIcons from 'assets/icons/ConstaIcons';
import { IUserRating } from 'types/interfaces/rating';
import { Plurize } from 'utils/helpers/plurize';

import useStyles from './styles';

interface IProps {
  data: IUserRating;
  view?: string;
}

const UserRatingCard: FC<IProps> = ({ data, view = 'default' }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const positionPlural = useMemo(() => {
    const plural = Plurize(
      data.rank_change,
      t('rating.card.rankChangePlural.one'),
      t('rating.card.rankChangePlural.two'),
      t('rating.card.rankChangePlural.five')
    );

    return `${data.rank_change} ${plural}`;
  }, [data.rank_change]);

  const positionIcon = useMemo(() => {
    const change = data.rank_change;

    if (change > 0) {
      return <ContaIcons.Upwards />;
    }
    if (change < 0) {
      return <ContaIcons.Downwards />;
    }
    return '';
  }, [data.rank_change]);

  return (
    <>
      {view === 'default' && (
        <Flex align="center" className={styles.card} key={data.id}>
          <Typography
            size="2xl"
            view="secondary"
            weight="semibold"
            className={styles.cardNumber}
          >
            {data.rank}
          </Typography>

          <Flex align="center" className={styles.cardUser}>
            <Avatar
              url={data.avatar ? data.avatar.image : ''}
              name={data.name}
              className={styles.cardAvatar}
            />
            <div className={styles.cardUserMain}>
              <Typography
                size="xl"
                weight="semibold"
                className={styles.cardUserName}
              >
                {data.name}
              </Typography>
              <Typography margin="4px 0 0" size="xs" view="ghost">
                {data.experience} {t('rating.card.experience')}
              </Typography>
            </div>
          </Flex>

          <Flex align="center" className={styles.cardLeague}>
            {data.league && <img src="/images/program-gold.svg" alt="лига" />}

            <Typography margin="0 0 0 6px" size="s">
              {data.league} TODO лига
            </Typography>
          </Flex>

          <Flex align="center" justify="flex-end" className={styles.cardStat}>
            {positionIcon}

            <Typography
              view="secondary"
              size="s"
              align="right"
              margin="0 0 0 6px"
            >
              {positionPlural}
            </Typography>
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default UserRatingCard;
