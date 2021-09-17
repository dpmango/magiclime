import React, { FC, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@consta/uikit/Badge';
import { useTranslation } from 'react-i18next';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { ICourse } from 'components/pages/Profile/types';

import useStyles from './styles';

interface IProps {
  course: ICourse;
  view?: string;
}

const CourseCard: FC<IProps> = ({ course, view }) => {
  const styles = useStyles({ view });
  const { t } = useTranslation();

  const getProgress = () => {
    if (!course.passed) {
      return t('profile.courses.process.notPassed');
    }
    return `${t('profile.courses.process.passed')} ${course.passed_chapters}`;
  };

  return (
    <Flex align="stretch" className={styles.root} key={course.id}>
      {view !== 'compact' && (
        <div className={styles.image}>
          {course.image && <img src={course.image.image} alt={course.title} />}
        </div>
      )}
      <Flex direction="column" className={styles.content}>
        {course.category && (
          <Badge view="filled" label={course.category.title} />
        )}

        <Link to={`/courses/${course.id}`}>
          <Typography margin="18px 0 0 0" weight="semibold" size="xl">
            {course.title}
          </Typography>
        </Link>

        {course.description && (
          <Typography margin="12px 0 20px 0 " size="m">
            {course.description}
          </Typography>
        )}

        <Flex align="flex-end" margin="auto 0 0 0">
          <Flex align="baseline">
            <Typography
              margin="0 8px 0 0"
              size="xs"
              lineHeight="2xs"
              view="secondary"
              weight="semibold"
            >
              {t('profile.courses.process.label')}
            </Typography>
            <Badge
              size="s"
              label={getProgress()}
              status="system"
              className={styles.customBadge}
            />
          </Flex>

          {course.rate && (
            <Flex align="baseline" margin="0 0 0 24px">
              <Typography
                margin="0 8px 0 0"
                size="xs"
                lineHeight="xs"
                view="secondary"
                weight="semibold"
              >
                {t('profile.courses.rate')}
              </Typography>
              <Typography
                margin="0 8px 0 0"
                size="m"
                lineHeight="xs"
                view="link"
                weight="semibold"
              >
                {course.rate[0]} {t('profile.courses.rateFrom')}{' '}
                {course.rate[1]}
              </Typography>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CourseCard;
