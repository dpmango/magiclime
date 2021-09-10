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
      description: `Видеокурсы различной сложности (от новичка до профессионала)  с дополнительными материалами и тестовыми заданиями для усвоения и закрепления знаний.`,
    },
    {
      id: 2,
      title: 'Монетизация знаний',
      description: `Мы объединили теорию и практику в уникальную систему, благодаря которой наши ученики  начинают зарабатывать уже во время обучения!`,
    },
    {
      id: 3,
      title: 'Обучающие материалы',
      description: `Тысячи статей, лекций, заданий к вашим услугам. Библиотека Лайм содержит обучающие материалы по множеству тем.`,
    },
    {
      id: 4,
      title: 'Поддержка 24/7',
      description: `Команда опытных специалистов всегда на связи! Индивидуальный подход к решению ваших проблем.`,
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
                Tab 2
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
                Tab 3
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
                Tab 4å
              </Typography>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default How;
