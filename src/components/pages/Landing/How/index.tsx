import React, { FC, useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import cns from 'classnames';

import Flex from 'components/Common/Flex';
import Typography from 'components/Common/Typography';

import useStyles from './styles';
import useRootStyles from '../styles';

interface Itab {
  id: number;
  title: string;
  description: string;
}

const How: FC = () => {
  const styles = useStyles();
  const rootStyles = useRootStyles();
  const { t } = useTranslation();

  const tabs: Itab[] = [
    {
      id: 1,
      title: 'Видеокурсы',
      description: `Видеокурсы для самостоятельного изучения, которые систематизированы по принципу от простого к сложному
      Вебинары и мастер-классы в online-режиме (доступны после оплаты навсегда)`,
    },
    {
      id: 2,
      title: 'Монетизация знаний',
      description: `Мы объединили теорию и практику в уникальную систему, благодаря которой наши партнёры ОБУЧАЯСЬ ЗАРАБАТЫВАЮТ!`,
    },
    {
      id: 3,
      title: 'Обучающие материалы',
      description: `Тысячи книг, лекций, методических пособий к вашим услугам. Библиотека Лайм содержит обучающие материалы по множеству тем.`,
    },
    {
      id: 4,
      title: 'Поддержка 24/7',
      description: `Опытные кураторы, доказавшие свою эффективность опытом и результатом, и дружная команда всегда на связи! Индивидуальный подход.`,
    },
  ];

  const [tab, setTab] = useState<number>(1);

  return (
    <div className={styles.root}>
      <div className={rootStyles.container}>
        <Typography size="3xl" weight="semibold">
          {t('landing.how.title')}
        </Typography>
        <Typography as="p" margin="16px 25% 0px 0" size="m">
          {t('landing.how.description')}
        </Typography>

        <div className={styles.grid}>
          <div className={styles.tabList}>
            {tabs.map((tb) => (
              <div
                className={cns(styles.tab, tb.id === tab && 'active')}
                role="button"
                tabIndex={0}
                key={tb.id}
                onClick={() => setTab(tb.id)}
              >
                <Typography size="xl" className={styles.tabTitle}>
                  {tb.title}
                </Typography>
                <Typography
                  margin="8px 0 0"
                  size="s"
                  lineHeight="m"
                  className={styles.tabDescription}
                >
                  {tb.description}
                </Typography>
              </div>
            ))}
          </div>

          {/* tab view */}

          {tab === 1 && (
            <div className={styles.tabContent}>
              <Typography
                view="brand"
                size="xl"
                weight="semibold"
                lineHeight="m"
              >
                Tab 1
              </Typography>

              <Typography as="p" margin="12px 0 0" size="m" lineHeight="m">
                All information about projects, tasks, financial transactions
                and team progress is available in a single workspace. This
                allows you to better navigate the processes, faster make
                decisions and complete work on time.
              </Typography>
              <Typography as="p" margin="12px 0 0" size="m" lineHeight="m">
                All information about projects, tasks, financial transactions
                and team progress is available in a single workspace. This
                allows you to better navigate the processes, faster make
                decisions and complete work on time.
              </Typography>
            </div>
          )}

          {tab === 2 && (
            <div className={styles.tabContent}>
              <Typography
                view="brand"
                size="xl"
                weight="semibold"
                lineHeight="m"
              >
                Tab 2:: All information abou
              </Typography>
            </div>
          )}

          {tab === 3 && (
            <div className={styles.tabContent}>
              <Typography
                view="brand"
                size="xl"
                weight="semibold"
                lineHeight="m"
              >
                Tab 3:: All information abou
              </Typography>
            </div>
          )}

          {tab === 4 && (
            <div className={styles.tabContent}>
              <Typography
                view="brand"
                size="xl"
                weight="semibold"
                lineHeight="m"
              >
                Tab 4:: All information abou
              </Typography>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default How;
