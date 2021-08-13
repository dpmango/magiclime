import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@consta/uikit/Button';
import { Grid, GridItem } from '@consta/uikit/Grid';
import Typography from 'components/Common/Typography';
import { useTranslation } from 'react-i18next';

import useStyles from './styles';
import useStylesRoot from '../styles';

const CourseHero: FC = () => {
  const styles = useStyles();
  const rootStyles = useStylesRoot();
  const { t } = useTranslation();

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
            <Link to="/courses/1/1">
              <Button size="l" label={t('course.page.buy')} />
            </Link>
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
