import React, { FC } from 'react';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Badge } from '@consta/uikit/Badge';

import { ICourse } from 'components/pages/ProfilePage/types';
import useStyles from './styles';

interface IProps {
  list: ICourse[];
}

const Courses: FC<IProps> = ({ list }) => {
  const styles = useStyles();

  return (
    <Flex direction="column" className={styles.root}>
      <Typography weight="semibold" lineHeight="s" size="2xl">
        Мои курсы
      </Typography>

      {list.map((course) => (
        <Flex align="stretch" className={styles.course} key={course.id}>
          <div className={styles.courseImage}>
            <img src={course.image} alt={course.title} />
          </div>
          <Flex direction="column" className={styles.courseContent}>
            <Badge view="stroked" label={course.tag} />
            <Typography margin="18px 0 0 0" weight="semibold" size="xl">
              {course.title}
            </Typography>

            <Typography margin="12px 0 0 0" size="m">
              {course.description}
            </Typography>

            <Flex align="flex-end" margin="auto 0 0 0">
              <Flex align="baseline">
                <Typography
                  margin="0 8px 0 0"
                  size="xs"
                  lineHeight="2xs"
                  view="secondary"
                  weight="semibold"
                >
                  Прогресс
                </Typography>
                <Badge
                  size="s"
                  label={course.progress}
                  status="system"
                  className={styles.courseCustomBadge}
                />
              </Flex>

              <Flex align="baseline" margin="0 0 0 24px">
                <Typography
                  margin="0 8px 0 0"
                  size="xs"
                  lineHeight="xs"
                  view="secondary"
                  weight="semibold"
                >
                  Оценка
                </Typography>
                <Typography
                  margin="0 8px 0 0"
                  size="m"
                  lineHeight="xs"
                  view="link"
                  weight="semibold"
                >
                  {course.rate[0]} из {course.rate[1]}
                </Typography>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default Courses;
