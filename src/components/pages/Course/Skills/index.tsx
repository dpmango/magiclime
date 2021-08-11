import React, { FC } from 'react';
import { Grid, GridItem } from '@consta/uikit/Grid';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';

import useStyles from './styles';
import useStylesRoot from '../styles';
import icons from '../icons';

const content = [
  {
    title: 'Анализировать финансовую отчётность',
    description:
      'Узнаете, как проводить анализ структуры и динамики показателей отчётности. Поймёте, как найти точки роста финансового результата и факторы устойчивости бизнеса',
  },
  {
    title: 'Оценивать финансовые риски',
    description:
      'Научитесь вовремя определять виды рисков, рассчитывать величину финансовых потерь компании и разрабатывать стратегию их минимизации',
  },
  {
    title: 'Строить финансовую модель',
    description:
      'Узнаете, как прогнозировать операционный бюджет, анализировать инвестиционную привлекательность компании и чувствительность финансовой модели к разным факторам',
  },
  {
    title: 'Формировать инвест-портфель',
    description:
      'Научитесь рассчитывать прибыль от инвестиций и правильно выбирать активы на рынке капитала. Поймёте, как учитывать факторы, влияющие на стоимость ценных бумаг',
  },
  {
    title: 'Строить систему анализа  информации',
    description:
      'Узнаете, как автоматизировать процесс сбора и обработки информации. Сможете выбрать подходящую систему под задачи компании и написать регламенты аналитической работы',
  },
  {
    title: 'Создавать финансовую стратегию',
    description:
      'Научитесь выбирать источники финансирования. Сможете рассчитать средневзвешенную стоимость капитала компании и определить эффективный план финансирования',
  },
];

const CourseSkills: FC = () => {
  const styles = useStyles();
  const rootStyles = useStylesRoot();

  return (
    <div className={styles.root}>
      <div className={rootStyles.container}>
        <Typography
          margin="0 0 44px"
          size="4xl"
          weight="semibold"
          lineHeight="s"
        >
          <Typography
            as="span"
            view="brand"
            size="4xl"
            weight="semibold"
            lineHeight="s"
          >
            Чему вы
          </Typography>
          &nbsp;научитесь
        </Typography>

        <Grid cols="3" colGap="xl" rowGap="2xl">
          {content.map((x) => (
            <GridItem key={x.title}>
              <Flex className={styles.item}>
                <div className={styles.icon}>
                  <icons.ServicesOutline size="l" />
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

export default CourseSkills;
