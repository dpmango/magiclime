import React, { FC, useMemo } from 'react';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Avatar } from '@consta/uikit/Avatar';
import { Button } from '@consta/uikit/Button';
import { Plurize } from 'utils/helpers/plurize';
import cns from 'classnames';

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

  const referalsTotalPlural = useMemo(() => {
    const plural = Plurize(
      data.referalsTotal,
      'реферал',
      'реферала',
      'рефералов'
    );

    return `${data.referalsTotal} ${plural}`;
  }, [data.referalsTotal]);

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
              + {data.profit} mBTL
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
            {data.matrixLevel} уровень матрицы
          </Typography>

          <div className={styles.meta}>
            <Typography weight="semibold">{data.level} уровень</Typography>
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
                {data.league} лига
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

          <div className={styles.referal}>
            {data.referalsTotal ? (
              <Flex align="center" justify="space-between">
                <Flex className={styles.referalUsers}>
                  {data.referals &&
                    data.referals.map((u) => (
                      <Avatar
                        key={u.id}
                        url={u.avatar}
                        size="s"
                        className={styles.referalUser}
                      />
                    ))}

                  {data.referalsTotal > 5 && (
                    <div
                      className={cns(
                        styles.referalUser,
                        styles.referalUserCount
                      )}
                    >
                      <span>+{data.referalsTotal - 5}</span>
                    </div>
                  )}
                </Flex>
                <Typography
                  view="secondary"
                  size="xs"
                  lineHeight="s"
                  weight="semibold"
                >
                  {referalsTotalPlural}
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
                Нет рефералов
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
            Недоступно
          </Typography>
          <Button size="s" label="Открыть Доступ" />
        </div>
      )}
    </Flex>
  );
};

export default ProgramCard;
