import React, { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@consta/uikit/Button';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import Members from 'components/Common/Members';
import { Plurize } from 'utils/helpers/plurize';

import { IProgram } from 'components/pages/Profile/types';
import useStyles from './styles';

interface IProps {
  data: IProgram;
}

const ProgramCard: FC<IProps> = ({ data }) => {
  const progressWidth = useMemo(() => {
    const percent = Math.round((data.progress[0] / data.progress[1]) * 100);

    return `${percent}%`;
  }, [data.progress]);

  const styles = useStyles({
    heroBackground: data.background,
    progressWidth,
    disabled: data.disabled,
  });
  const { t } = useTranslation();

  const referralsTotalPlural = useMemo(() => {
    const plural = Plurize(
      data.referralsTotal,
      t('profile.referralPlural.one'),
      t('profile.referralPlural.two'),
      t('profile.referralPlural.five')
    );

    return `${data.referralsTotal} ${plural}`;
  }, [data.referralsTotal]);

  const partnerLink = useMemo(() => {
    return `/profile/me/partners?program=${data.id}`;
  }, [data.id]);

  return (
    <Flex direction="column" className={styles.card}>
      <Flex direction="column" className={styles.wrapper}>
        <div className={styles.hero}>
          <div className={styles.profit}>
            <Typography
              weight="semibold"
              size="xs"
              lineHeight="s"
              view="secondary"
            >
              + {data.profit} mBL
            </Typography>
          </div>
          <div className={styles.image}>
            <img src={data.image} alt={data.title} />
          </div>
        </div>
        <Flex direction="column" align="stretch" className={styles.content}>
          <Typography
            weight="semibold"
            lineHeight="s"
            size="2xl"
            className={styles.title}
          >
            {data.title}
          </Typography>
          <Typography
            weight="semibold"
            size="xs"
            view="secondary"
            className={styles.matrixLevel}
          >
            {data.matrixLevel} {t('profile.programCard.matrixLevel')}
          </Typography>

          <div className={styles.meta}>
            <Typography weight="semibold">
              {data.level} {t('profile.programCard.level')}
            </Typography>
            <div className={styles.progress}>
              <div className={styles.progresInner} />
            </div>
            <Flex justify="space-between" margin="12px 0 0 0">
              <Typography
                view="ghost"
                size="xs"
                lineHeight="s"
                weight="semibold"
              >
                {data.league} {t('profile.programCard.league')}
              </Typography>
              <Typography
                view="ghost"
                size="xs"
                lineHeight="s"
                weight="semibold"
              >
                {data.progress[0]} / {data.progress[1]}
              </Typography>
            </Flex>
          </div>

          <div className={styles.referral}>
            {data.referralsTotal ? (
              <Flex align="center" justify="space-between">
                <Members members={data.referrals} />
                <Typography
                  view="secondary"
                  size="xs"
                  lineHeight="s"
                  weight="semibold"
                  className={styles.referralCount}
                >
                  {referralsTotalPlural}
                </Typography>
              </Flex>
            ) : (
              <Typography
                view="secondary"
                size="xs"
                align="center"
                lineHeight="s"
                weight="semibold"
              >
                {t('profile.programCard.noReferrals')}
              </Typography>
            )}
          </div>
        </Flex>
      </Flex>

      {data.disabled && (
        <div className={styles.context}>
          <Typography
            view="secondary"
            margin="0 0 12px"
            size="l"
            weight="semibold"
          >
            {t('profile.programCard.blocked.title')}
          </Typography>
          <Link to={partnerLink}>
            <Button size="m" label={t('profile.programCard.blocked.cta')} />
          </Link>
        </div>
      )}
    </Flex>
  );
};

export default ProgramCard;
