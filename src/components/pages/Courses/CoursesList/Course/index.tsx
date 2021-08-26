import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { ICourse } from 'types/interfaces/courses';
import Typography from 'components/Common/Typography';
import { Plurize } from 'utils/helpers/plurize';
import { useCheckDefaultTheme } from 'hooks/useCheckDefaultTheme';

import useStyles from './styles';

interface IProps {
  item: ICourse;
}

const Course: FC<IProps> = ({ item }) => {
  const isDefaultTheme = useCheckDefaultTheme();
  const styles = useStyles({
    category: item.subcategory.id,
    darkmode: !isDefaultTheme,
  });
  const { t } = useTranslation();

  return (
    <Link to={`/courses/${item.id}`} className={styles.root}>
      <div className={styles.content}>
        <div>
          <Typography as="p" size="s" className={styles.detail}>
            {item.subcategory.title}
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
          {/* <span>{item.duration}&nbsp;</span> */}
          TODO &nbsp;
          {t('course.card.month')}
        </Typography>
      </div>
      {item.image && (
        <div className={styles.image}>
          <img src={item.image.image} alt={item.title} />
        </div>
      )}
    </Link>
  );
};

export default Course;
