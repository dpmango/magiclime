import React, { FC, useState, useCallback, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import groupBy from 'lodash/groupBy';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { ICourse } from 'types/interfaces/courses';
import { getCoursesService } from 'utils/api/routes/courses';
import { IFilter, ICategory } from 'components/pages/Courses/types';
import { RootState } from 'store/reducers/rootReducer';

import Typography from 'components/Common/Typography';
import Tags from 'components/Common/Tags';
import ProfileCourses from 'components/pages/Profile/Courses';
import FeaturedCourse from './FeaturedCourse';
import CoursesList from './CoursesList';
import Filters from './Filters';

import { mockProfileCourses } from './mockData';
import useStyles from './styles';

const CoursesPage: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  const [courses, setCourses] = useState<ICourse[]>([]);
  const [activeTags, setActiveTags] = useState<number[]>([]);
  const { tags } = useSelector((state: RootState) => state.meta);

  const fetchCourses = useCallback(async () => {
    const [err, data] = await getCoursesService();

    if (err) {
      console.log({ err });
    }

    setCourses(data!.results || []);
  }, []);

  const getMore = () => {
    // const newCourses = [];
    // setCourses([...courses, ...newCourses]);
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

  const filterData = useMemo((): IFilter => {
    let categories: ICategory[] = [];
    let priceRange: [string, string] = ['0 ₽', '0 ₽'];
    let levelRange: [string, string] = ['1', '1'];

    const groupedCategories = groupBy(courses, (x) => x.subcategory.id);

    if (groupedCategories) {
      categories = Object.keys(groupedCategories).map((key) => {
        const { subcategory } = groupedCategories[key][0];

        return subcategory;
      });
    }

    if (courses && courses.length) {
      const prices = courses.map((x) => parseInt(x.price, 10));
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);

      priceRange = [`${minPrice} ₽`, `${maxPrice} ₽`];

      const levels = courses.map((x) => x.level);
      const minLevel = Math.min(...levels);
      const maxLevel = Math.max(...levels);

      levelRange = [`${minLevel}`, `${maxLevel}`];
    }

    return {
      categories,
      level: ['Любой', 'Для новичков', 'Для специалистов'],
      types: ['Профессия', 'Программа', 'Курс'],
      priceRange,
      levelRange,
    };
  }, [courses]);

  const handleFiltersChange = useCallback((filter) => {
    console.log({ filter });
  }, []);

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className={styles.root}>
      <FeaturedCourse />

      <ProfileCourses view="compact" list={mockProfileCourses} />

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
            <Filters filter={filterData} onUpdate={handleFiltersChange} />
          </GridItem>
        </Grid>
      </div>
    </div>
  );
};

export default CoursesPage;
