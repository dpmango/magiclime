import React, { FC } from 'react';
import Typography from 'components/Common/Typography';
import { useTranslation } from 'react-i18next';
import { useCheckDefaultTheme } from 'hooks/useCheckDefaultTheme';

import { ITab } from 'components/pages/Course/types';
import Tab from 'components/pages/Course/Program/Tab';
import useStyles from './styles';
import useStylesRoot from '../styles';

const tabs: ITab[] = [
  {
    id: 1,
    module: 'Модуль 1',
    title: 'Чем занимается финансовый аналитик',
    description:
      'Узнаем, как анализировать финансовые отчёты разных предприятий и интерпретировать результаты. Научимся понимать отличия отчётности по международным и локальным стандартам. Изучим анализ структуры и динамики показателей, анализ баланса, денежного потока',
    duration: '3 часа',
  },
  {
    id: 2,
    module: 'Модуль 2',
    title: 'Финансы и бизнес',
    description:
      'Узнаем, как анализировать финансовые отчёты разных предприятий и интерпретировать результаты. Научимся понимать отличия отчётности по международным и локальным стандартам. Изучим анализ структуры и динамики показателей, анализ баланса, денежного потока',
    duration: '3 часа',
  },
  {
    id: 3,
    module: 'Модуль 3',
    title: 'Финансовая отчётность',
    description:
      'Узнаем, как анализировать финансовые отчёты разных предприятий и интерпретировать результаты. Научимся понимать отличия отчётности по международным и локальным стандартам. Изучим анализ структуры и динамики показателей, анализ баланса, денежного потока',
    duration: '3 часа',
  },
  {
    id: 4,
    module: 'Модуль 4',
    title: 'Финансовое моделирование',
    description:
      'Узнаем, как анализировать финансовые отчёты разных предприятий и интерпретировать результаты. Научимся понимать отличия отчётности по международным и локальным стандартам. Изучим анализ структуры и динамики показателей, анализ баланса, денежного потока',
    duration: '3 часа',
  },
  {
    id: 5,
    module: 'Модуль 5',
    title: 'Финансовые и корпоративные риски',
    description:
      'Узнаем, как анализировать финансовые отчёты разных предприятий и интерпретировать результаты. Научимся понимать отличия отчётности по международным и локальным стандартам. Изучим анализ структуры и динамики показателей, анализ баланса, денежного потока',
    duration: '3 часа',
  },
  {
    id: 6,
    module: 'Модуль 6',
    title: 'Работа с инвестициями',
    description:
      'Узнаем, как анализировать финансовые отчёты разных предприятий и интерпретировать результаты. Научимся понимать отличия отчётности по международным и локальным стандартам. Изучим анализ структуры и динамики показателей, анализ баланса, денежного потока',
    duration: '3 часа',
  },
];

const CourseProgram: FC = () => {
  const isDefaultTheme = useCheckDefaultTheme();
  const styles = useStyles({ darkmode: !isDefaultTheme });
  const rootStyles = useStylesRoot();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <div className={rootStyles.container}>
        <Typography size="4xl" weight="semibold" lineHeight="s">
          {t('course.page.program.main')}
        </Typography>

        <Typography margin="24px 0 0" size="m" className={styles.description}>
          Курс состоит из видеолекций и онлайн‑воркшопов с преподавателем. Вы
          выполните 4 домашних работы с проверкой и комментариями эксперта
        </Typography>

        <div className={styles.tabs}>
          {tabs && tabs.map((tab) => <Tab key={tab.id} data={tab} />)}
        </div>
      </div>
    </div>
  );
};

export default CourseProgram;
