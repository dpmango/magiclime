import React, { FC, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { useTranslation } from 'react-i18next';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { ICourse } from 'components/pages/Profile/types';

import CourseCard from './CourseCard';
import useStyles from './styles';

interface IProps {
  list: ICourse[] | null;
  view?: string;
}

const Courses: FC<IProps> = ({ list, view }) => {
  const styles = useStyles({ view });
  const { t } = useTranslation();

  return (
    <Flex direction="column" className={styles.root}>
      <Typography weight="semibold" lineHeight="s" size="3xl">
        {t('profile.courses.title')}
      </Typography>

      <Grid cols={view === 'compact' ? 2 : 1} gap="xl">
        {list &&
          list.map((course: ICourse) => (
            <GridItem col="1" key={course.id}>
              <CourseCard course={course} view={view} />
            </GridItem>
          ))}
      </Grid>
    </Flex>
  );
};

export default Courses;
