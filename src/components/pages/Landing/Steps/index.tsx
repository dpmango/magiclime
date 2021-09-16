import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Button } from '@consta/uikit/Button';

import Flex from 'components/Common/Flex';
import Typography from 'components/Common/Typography';
import { setAuthOpen } from 'store/reducers/settings';

import useStyles from './styles';
import useRootStyles from '../styles';

const content = [
  {
    id: 1,
    title: 'Найти спонсора',
    icon: '/images/landing/step-1.svg',
    cta: 'Поиск спонсора',
    description:
      'Чтобы попасть на площадку вам нужно получить приглашение от одного из пользователей',
  },
  {
    id: 2,
    title: 'Оплатить вход',
    icon: '/images/landing/step-2.svg',
    cta: 'Перейти к оплате',
    description:
      'Услуга оплачивается однократно: 40 bl за подписку на вебинары преподавателей',
  },
  {
    id: 3,
    title: 'Обучающий курс',
    icon: '/images/landing/step-3.svg',
    cta: 'Начать обучение',
    description:
      'После регистрации необходимо пройти обучающий курс, который поможет освоиться',
  },
  {
    id: 4,
    title: 'Полный доступ',
    icon: '/images/landing/step-4.svg',
    cta: 'Премиальный акаунт',
    description:
      'Здесь вы сможете получить знания, заработать и найти друзей на всю жизнь',
  },
];

const Steps: FC = () => {
  const styles = useStyles();
  const rootStyles = useRootStyles();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <div className={rootStyles.container}>
        {/* <Typography
          margin="0 0 36px"
          size="3xl"
          lineHeight="m"
          weight="semibold"
        >
          {t('landing.steps.title')}
        </Typography> */}

        <Grid
          cols="1"
          breakpoints={{ s: { cols: 2 }, l: { cols: 4 } }}
          gap="0"
          yAlign="center"
        >
          {content.map((x) => (
            <GridItem col="1" key={x.id}>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <img src={x.icon} alt={x.title} />
                </div>
                <Flex direction="column">
                  <Typography
                    size="m"
                    margin="24px 0 0"
                    weight="semibold"
                    className={styles.titlecard}
                  >
                    {x.title}
                  </Typography>
                  <Typography
                    as="p"
                    view="secondary"
                    margin="16px 0 32px"
                    size="s"
                    lineHeight="m"
                    className={styles.cardDescription}
                  >
                    {x.description}
                  </Typography>
                  <Button
                    size="m"
                    form="default"
                    label={x.cta}
                    className={styles.cardButton}
                    onClick={() => setAuthOpen(true)}
                  />
                </Flex>
              </div>
            </GridItem>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Steps;
