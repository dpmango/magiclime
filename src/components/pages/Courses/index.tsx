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
import Pagination from 'components/Common/Pagination';
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
  const [filterRequest, setFilterRequest] = useState<any>({});
  const [activeTags, setActiveTags] = useState<number[]>([]);
  const { tags } = useSelector((state: RootState) => state.meta);

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

    const groupedSubCategories = groupBy(courses, (x) => x.subcategory.id);

    if (groupedSubCategories) {
      categories = Object.keys(groupedSubCategories).map((key) => {
        const { subcategory } = groupedSubCategories[key][0];

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
      level: ['Любой', 'JUNIOR', 'MIDDLE', 'SENIOR'],
      types: ['Профессия', 'Программа', 'Курс'],
      priceRange,
      levelRange,
    };
  }, [courses]);

  const handleFiltersChange = useCallback(
    async (filter) => {
      const params = filter
        ? {
            ...filter,
            tags: activeTags,
          }
        : null;

      setFilterRequest(params);
    },
    [activeTags]
  );

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
            <Pagination
              getList={getCoursesService}
              listComponent={CoursesList}
              queries={filterRequest}
            />
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
