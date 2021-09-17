import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-hot-toast';
import { Button } from '@consta/uikit/Button';
import { Loader } from '@consta/uikit/Loader';

import Typography from 'components/Common/Typography';
import { useCheckDefaultTheme } from 'hooks/useCheckDefaultTheme';
import { ICourseRecommended } from 'types/interfaces/courses';
import { getRecommendedCourseService } from 'utils/api/routes/courses';

import useStyles from './styles';

const FeaturedCourse: FC = () => {
  const isDefaultTheme = useCheckDefaultTheme();
  const styles = useStyles({ darkmode: !isDefaultTheme });
  const { t } = useTranslation();

  const [data, setData] = useState<ICourseRecommended>();

  useEffect(() => {
    const fetchCourse = async () => {
      const [err, data] = await getRecommendedCourseService();

      if (err) {
        toast.error('Error loading recommended course');
      }

      setData(data![0]);
    };

    fetchCourse();
  }, []);

  return data ? (
    <Grid cols="1" gap="xl" breakpoints={{ m: { cols: 2, gap: 'xl' } }}>
      <GridItem className={styles.left}>
        <Typography
          className={styles.recomended}
          weight="semibold"
          transform="uppercase"
        >
          {t('course.featured.tag')}
        </Typography>
        <Typography
          className={styles.title}
          as="h2"
          weight="bold"
          size="5xl"
          lineHeight="xs"
        >
          {data.title}
        </Typography>
        <Typography as="p" view="secondary" className={styles.description}>
          {data.description}
        </Typography>
        <Link to={`/courses/${data.id}/`}>
          <Button
            size="l"
            label={t('course.featured.cta')}
            className={styles.button}
          />
        </Link>
      </GridItem>
      <GridItem className={styles.right}>
        <div className={styles.panel}>
          <div className={styles.image}>
            {data.image && <img src={data.image.image} alt={data.title} />}
          </div>
          <Typography
            className={styles.secondTitle}
            size="xl"
            weight="semibold"
          >
            {data.subtitle}
          </Typography>
          <div className={styles.details}>
            <Typography size="m" as="span" view="ghost">
              3 модуля
            </Typography>
            <Typography size="m" as="span" view="ghost">
              24 задания
            </Typography>
          </div>
          <Button size="s" label="15 опыта" className={styles.button} />
        </div>
      </GridItem>
    </Grid>
  ) : (
    <Loader />
  );
};

export default FeaturedCourse;
