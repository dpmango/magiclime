import React, { FC } from 'react';
import { Button } from '@consta/uikit/Button';
import { Grid, GridItem } from '@consta/uikit/Grid';
import Typography from 'components/Common/Typography';

import useStyles from './styles';
import useStylesRoot from '../styles';

const CourseHero: FC = () => {
  const styles = useStyles();
  const rootStyles = useStylesRoot();

  return (
    <div className={styles.root}>
      <div className={rootStyles.container}>
        <Grid
          cols="1"
          gap="xl"
          yAlign="center"
          breakpoints={{ m: { cols: 2, gap: 'xl' } }}
        >
          <GridItem>
            <Button
              label="Финансы"
              size="s"
              form="round"
              className={styles.pseudoLabel}
            />
            <Typography
              className={styles.title}
              as="h2"
              weight="bold"
              size="5xl"
              lineHeight="xs"
            >
              Финансовая аналитика
            </Typography>
            <Typography margin="0 0 24px" as="p" view="secondary">
              Вы научитесь анализировать денежные потоки компании, управлять
              финансовыми рисками, влиять на инвестиционные решения и стратегию
              развития бизнеса
            </Typography>
            <Button size="l" label="Купить курс" />
          </GridItem>
          <GridItem>
            <div className={styles.image}>
              <img src="/images/course-analytics.png" alt="" />
            </div>
          </GridItem>
        </Grid>
      </div>
    </div>
  );
};

export default CourseHero;
