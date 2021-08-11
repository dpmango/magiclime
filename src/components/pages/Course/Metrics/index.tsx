import React, { FC } from 'react';
import { Button } from '@consta/uikit/Button';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';

import useStyles from './styles';
import useStylesRoot from '../styles';

const CourseHero: FC = () => {
  const styles = useStyles();
  const rootStyles = useStylesRoot();

  return (
    <div className={styles.root}>
      <div className={rootStyles.container}>
        <Flex wrap="wrap" className={styles.row}>
          <div className={styles.item}>
            <Typography size="xs" view="ghost" weight="semibold" lineHeight="s">
              Формат обучения
            </Typography>
            <Typography
              margin="8px 0 0"
              size="m"
              weight="semibold"
              lineHeight="xs"
            >
              Видеолекции
            </Typography>
          </div>
          <div className={styles.item}>
            <Typography size="xs" view="ghost" weight="semibold" lineHeight="s">
              Уровень матрицы
            </Typography>
            <Typography
              margin="8px 0 0"
              size="m"
              weight="semibold"
              lineHeight="xs"
            >
              2 уровень
            </Typography>
          </div>
          <div className={styles.item}>
            <Typography size="xs" view="ghost" weight="semibold" lineHeight="s">
              Стоимость
            </Typography>
            <Typography
              margin="8px 0 0"
              size="m"
              weight="semibold"
              lineHeight="xs"
            >
              4 567 BTL
            </Typography>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default CourseHero;
