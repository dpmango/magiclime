import React, { FC } from 'react';
import { ICourse } from 'types/interfaces/courses';
import Typography from 'components/Common/Typography';
import { Link } from 'react-router-dom';

import useStyles from './styles';

interface IProps {
  item: ICourse;
}

const Course: FC<IProps> = ({ item }) => {
  const styles = useStyles({
    category: item.category,
  });

  return (
    <Link to={`/courses/${item.id}`} className={styles.root}>
      <div className={styles.content}>
        <div>
          <Typography as="p" size="s" className={styles.detail}>
            {item.type}
          </Typography>
          <Typography
            as="p"
            size="xl"
            weight="semibold"
            className={styles.title}
          >
            {item.title}
          </Typography>
        </div>
        <Typography size="s" as="p" className={styles.detail}>
          <span>{item.duration}&nbsp;</span>
          месяцев
        </Typography>
      </div>
      <div className={styles.image}>
        <img src={item.image} alt={item.title} />
      </div>
    </Link>
  );
};

export default Course;
