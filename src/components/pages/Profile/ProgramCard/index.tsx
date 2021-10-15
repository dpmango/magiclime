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
  const level = useMemo(() => {
    return data.all_levels[0] === 0 ? data.matrix_level : data.matrix_level;
  }, []);

  const progressWidth = useMemo(() => {
    const percent = Math.round((level / data.all_levels.length) * 100);

    return `${percent}%`;
  }, []);

  const randomBackground = useMemo(() => {
    const colors = ['green', 'lime', 'blue', 'violet'];
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }, []);

  const styles = useStyles({
    heroBackground: randomBackground,
    progressWidth,
    disabled: data.is_closed,
  });
  const { t } = useTranslation();

  const referralsTotalPlural = useMemo(() => {
    const plural = Plurize(
      data.referrals.length,
      t('profile.referralPlural.one'),
      t('profile.referralPlural.two'),
      t('profile.referralPlural.five')
    );

    return `${data.referrals.length} ${plural}`;
  }, [data.referrals.length]);

  const partnerLink = useMemo(() => {
    return `/profile/me/partners?program=${data.program}`;
  }, [data.program]);

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
              + 3.130 mBL
            </Typography>
          </div>
          <div className={styles.image}>
            <img src="/images/program-silver.svg" alt={data.program_label} />
          </div>
        </div>
        <Flex direction="column" align="stretch" className={styles.content}>
          <Typography
            weight="semibold"
            lineHeight="s"
            size="2xl"
            className={styles.title}
          >
            {data.program_label}
          </Typography>
          <Typography
            weight="semibold"
            size="xs"
            view="secondary"
            className={styles.matrixLevel}
          >
            {level} {t('profile.programCard.matrixLevel')}
          </Typography>

          <div className={styles.meta}>
            <Typography weight="semibold">
              {level} {t('profile.programCard.level')}
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
                Серебрянная {t('profile.programCard.league')}
              </Typography>
              <Typography
                view="ghost"
                size="xs"
                lineHeight="s"
                weight="semibold"
              >
                {level} / {data.all_levels.length}
              </Typography>
            </Flex>
          </div>

          <div className={styles.referral}>
            {data.referrals.length ? (
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

      {data.is_closed && (
        <div className={styles.context}>
          <Typography
            view="secondary"
            margin="0 0 12px"
            size="l"
            weight="semibold"
          >
            {data.program_label}
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
