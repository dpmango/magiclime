import React, { FC } from 'react';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';
import useStylesRoot from '../styles';

const CourseMetrics: FC = () => {
  const styles = useStyles();
  const rootStyles = useStylesRoot();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <div className={rootStyles.container}>
        <Flex wrap="wrap" className={styles.row}>
          <div className={styles.item}>
            <Typography size="xs" view="ghost" weight="semibold" lineHeight="s">
              {t('course.page.format')}
            </Typography>
            <Typography
              margin="8px 0 0"
              size="m"
              weight="semibold"
              lineHeight="xs"
            >
              Видеолекции
            </Typography>
          </div>
          <div className={styles.item}>
            <Typography size="xs" view="ghost" weight="semibold" lineHeight="s">
              {t('course.page.matrixLevel')}
            </Typography>
            <Typography
              margin="8px 0 0"
              size="m"
              weight="semibold"
              lineHeight="xs"
            >
              2 уровень
            </Typography>
          </div>
          <div className={styles.item}>
            <Typography size="xs" view="ghost" weight="semibold" lineHeight="s">
              {t('course.page.price')}
            </Typography>
            <Typography
              margin="8px 0 0"
              size="m"
              weight="semibold"
              lineHeight="xs"
            >
              4 567 BTL
            </Typography>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default CourseMetrics;
