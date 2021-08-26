import React, { FC } from 'react';
import Flex from 'components/Common/Flex';
import { Grid, GridItem } from '@consta/uikit/Grid';
import Typography from 'components/Common/Typography';

import { useTranslation } from 'react-i18next';
import { Button } from '@consta/uikit/Button';
import useStyles from './styles';
import useRootStyles from '../styles';

const content = [
  {
    id: 1,
    step: 'Найти спонсора',
    description:
      'Чтобы попасть на площадку вам нужно получить приглашение от одного из пользователей',
  },
  {
    id: 2,
    step: 'Оплатить вход',
    description:
      'Услуга оплачивается однократно: 40 bl за подписку на вебинары преподавателей',
  },
  {
    id: 3,
    step: 'Обучающий курс',
    description:
      'После регистрации необходимо пройти обучающий курс, который поможет освоиться',
  },
  {
    id: 4,
    step: 'Полный доступ',
    description:
      'Для получения полного доступа вам необходимо оплатить премиальный аккаунт',
  },
];

const Hero: FC = () => {
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
                <div className={styles.cardImage} />
                <Flex direction="column">
                  <Typography
                    size="m"
                    margin="24px 0 0"
                    weight="semibold"
                    className={styles.titlecard}
                  >
                    {x.step}
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
                    label="Зарегистрироваться"
                    className={styles.cardButton}
                    // onClick={() => setAuthOpen(true)}
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

export default Hero;
