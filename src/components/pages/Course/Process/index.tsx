import React, { FC } from 'react';
import { Grid, GridItem } from '@consta/uikit/Grid';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { useTranslation } from 'react-i18next';
import { useCheckDefaultTheme } from 'hooks/useCheckDefaultTheme';

import useStyles from './styles';
import useStylesRoot from '../styles';

const content = [
  {
    title: 'Видеолекции',
    description:
      'Самое главное из теории разберём в видеолекциях. Записи хранятся в личном кабинете: вы сможете посмотреть занятия в любое удобное время',
  },
  {
    title: 'Онлайн-воркшопы',
    description:
      'Вместе с экспертами курса вы изучите лучшие практики финансового анализа и обменяетесь опытом с сокурсниками',
  },
  {
    title: 'Самостоятельная работа',
    description:
      'Вы будете выполнять упражнения, чтобы закрепить теорию. Например, рассчитаете финансовую модель компании и проведёте инвестиционный анализ',
  },
  {
    title: 'Итоговая работа',
    description:
      'После прохождения всех модулей подготовите итоговую работу — финансовую стратегию компании. Этот проект вы сможете добавить в своё портфолио',
  },
];

const CourseProcess: FC = () => {
  const isDefaultTheme = useCheckDefaultTheme();
  const styles = useStyles({ darkmode: !isDefaultTheme });
  const rootStyles = useStylesRoot();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <div className={rootStyles.container}>
        <Typography
          margin="0 0 44px"
          size="4xl"
          weight="semibold"
          lineHeight="s"
        >
          {t('course.page.process.main')}&nbsp;
          <Typography
            as="span"
            view="brand"
            size="4xl"
            weight="semibold"
            lineHeight="s"
          >
            {t('course.page.process.accent')}
          </Typography>
        </Typography>

        <Grid cols="2" gap="xl">
          {content.map((x) => (
            <GridItem key={x.title}>
              <Flex className={styles.item}>
                <div className={styles.image}>
                  <img src="/images/course-process.svg" alt="course-process" />
                </div>
                <div className={styles.content}>
                  <Typography size="2xl" weight="semibold" lineHeight="s">
                    {x.title}
                  </Typography>
                  <Typography
                    margin="12px 0 0"
                    size="s"
                    className={styles.description}
                  >
                    {x.description}
                  </Typography>
                </div>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default CourseProcess;
