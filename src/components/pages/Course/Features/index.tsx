import React, { FC } from 'react';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';

import useStyles from './styles';
import useStylesRoot from '../styles';
import icons from '../icons';

const list = [
  {
    id: 1,
    content:
      'Преподаватели курса — эксперты-практики с опытом финансового анализа крупных компаний и личного бизнеса',
  },
  {
    id: 2,
    content:
      'Разбор кейсов на воркшопах в малых группах и индивидуально с экспертом',
  },
  {
    id: 3,
    content: 'Сопровождение и обратная связь в закрытой группе Facebook',
  },
  { id: 4, content: 'Практическая работа для личного проекта' },
  {
    id: 5,
    content: 'Шаблоны и чеклисты по финансовой аналитике для самопроверки',
  },
  {
    id: 6,
    content:
      'Помощь с трудоустройством: оформление резюме, поиск вакансий и подготовка к собеседованию',
  },
];

const CourseFeatures: FC = () => {
  const styles = useStyles();
  const rootStyles = useStylesRoot();

  return (
    <div className={styles.root}>
      <div className={rootStyles.container}>
        <Typography
          margin="0 0 12px"
          size="3xl"
          weight="semibold"
          lineHeight="s"
        >
          Польза на каждом этапе
        </Typography>

        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <div className={styles.list}>
              {list &&
                list.map((x) => (
                  <Flex margin="24px 0 0" align="center" key={x.id}>
                    <div className={styles.icon}>
                      <icons.Done view="brand" />
                    </div>
                    <Typography lineHeight="xs">{x.content}</Typography>
                  </Flex>
                ))}
            </div>
          </div>
          <div className={styles.gridItem}>
            <div className={styles.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseFeatures;
