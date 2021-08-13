import React, { FC } from 'react';
import Typography from 'components/Common/Typography';

import useStyles from './styles';
import useStylesRoot from '../styles';

const CourseScope: FC = () => {
  const styles = useStyles();
  const rootStyles = useStylesRoot();

  return (
    <div className={styles.root}>
      <div className={rootStyles.container}>
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <Typography size="4xl" weight="semibold" lineHeight="s">
              <span>Финансовая аналитика — </span>
              <Typography
                size="4xl"
                weight="semibold"
                lineHeight="s"
                view="brand"
              >
                фундамент прибыльности
              </Typography>
              <span>любого бизнеса</span>
            </Typography>
            <Typography
              margin="24px 0 0"
              size="m"
              className={styles.description}
            >
              Снизить издержки компании, привлечь инвестиции в бизнес,
              оптимизировать рабочий капитал — всё это можно сделать, если в
              компании есть хороший финансовый аналитик.
            </Typography>
          </div>
          <div className={styles.gridItem}>
            <div className={styles.image} />
          </div>
        </div>

        <div className={styles.quote}>
          <Typography size="xl">
            По данным исследования{' '}
            <a href="https://google.com" target="_blank" rel="noreferrer">
              Hays
            </a>
          </Typography>
          <Typography
            margin="16px 0 0"
            size="3xl"
            weight="semibold"
            lineHeight="xs"
          >
            70–80 тысяч рублей — средняя зарплата финансового аналитика с опытом
            работы от года до четырёх лет. А со стажем более четырёх лет —
            100–150 тысяч рублей
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default CourseScope;
