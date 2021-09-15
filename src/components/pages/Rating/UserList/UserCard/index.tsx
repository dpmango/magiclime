import React, { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Avatar } from '@consta/uikit/Avatar';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import ContaIcons from 'assets/icons/ConstaIcons';
import { IUserRating } from 'components/pages/Rating/types';
import { Plurize } from 'utils/helpers/plurize';

import useStyles from './styles';

interface IProps {
  data: IUserRating;
  view?: 'default' | 'featured';
}

const UserRatingCard: FC<IProps> = ({ data, view = 'default' }) => {
  const styles = useStyles({ rank: data.rank });
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
              {data.league} лига
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

      {view === 'featured' && (
        <div className={styles.featured}>
          <div className={styles.featuredNumber}>
            <span>{data.rank}</span>
          </div>
          <div className={styles.featuredCover} />
          <Flex
            direction="column"
            align="center"
            className={styles.featuredMain}
          >
            <Avatar
              url={data.avatar ? data.avatar.image : ''}
              name={data.name}
              className={styles.featuredAvatar}
            />
            <Typography
              size="xl"
              weight="semibold"
              margin="8px 0 0"
              className={styles.cardUserName}
            >
              {data.name}
            </Typography>
          </Flex>

          <Flex align="center" className={styles.featuredStats}>
            <Flex direction="column">
              <Typography
                view="ghost"
                size="xs"
                lineHeight="s"
                weight="semibold"
              >
                Лига
              </Typography>
              <Typography size="s">{data.league}</Typography>
            </Flex>

            <Flex direction="column" align="flex-end">
              <Typography
                view="ghost"
                size="xs"
                lineHeight="s"
                weight="semibold"
              >
                Опыт
              </Typography>
              <Typography size="s">
                {data.experience} {t('rating.card.experienceShort')}
              </Typography>
            </Flex>
          </Flex>
        </div>
      )}
    </>
  );
};

export default UserRatingCard;
