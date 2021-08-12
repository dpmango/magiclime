import React, { FC, useState, useEffect } from 'react';
import shuffle from 'lodash/shuffle';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { ICourse } from 'types/interfaces/courses';
import Typography from 'components/Common/Typography';
import { useTranslation } from 'react-i18next';

import Tags from 'components/Common/Tags';
import FeaturedCourse from './FeaturedCourse';
import CoursesList from './CoursesList';
import Filters from './Filters';

import { tags, mockCourses } from './mockData';
import useStyles from './styles';

const CoursesPage: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  const [courses, setCourses] = useState<ICourse[]>(mockCourses);
  const [activeTags, setActiveTags] = useState<number[]>([]);

  const getMore = () => {
    const newCourses = shuffle(
      mockCourses.map((x) => ({
        ...x,
        id: x.id + 1,
      }))
    );
    setCourses([...courses, ...newCourses]);
  };

  const handleTagsToggle = (id: number) => {
    let newValues = [...activeTags];

    if (newValues.includes(id)) {
      newValues = newValues.filter((val) => val !== id);
    } else {
      newValues = [...newValues, id];
    }
    setActiveTags(newValues);
  };

  return (
    <div className={styles.root}>
      <FeaturedCourse />

      <div className={styles.content}>
        <Typography weight="semibold" size="3xl" lineHeight="l">
          {t('course.list.title')}
        </Typography>
        <div className={styles.tags}>
          <Tags
            tags={tags}
            activeTags={activeTags}
            handleSelect={handleTagsToggle}
          />
        </div>

        <Grid cols="4" gap="xl" className={styles.main}>
          <GridItem col="3">
            <CoursesList items={courses} hasMore getMore={getMore} />
          </GridItem>

          <GridItem col="1">
            <Filters />
          </GridItem>
        </Grid>
      </div>
    </div>
  );
};

export default CoursesPage;
