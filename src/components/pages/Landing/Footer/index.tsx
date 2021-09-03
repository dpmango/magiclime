import React, { FC, useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Flex from 'components/Common/Flex';
import { Grid, GridItem } from '@consta/uikit/Grid';
import Typography from 'components/Common/Typography';
import { useTranslation } from 'react-i18next';

import Subscribe from './Subscribe';
import Apps from './Apps';
import useStyles from './styles';
import useRootStyles from '../styles';

interface ILink {
  id: number;
  title: string;
  href: string;
}

interface IMenu {
  id: number;
  title: string;
  list: ILink[];
}

const menu: IMenu[] = [
  {
    id: 1,
    title: 'О нас',
    list: [
      { id: 1, title: 'О нас', href: '' },
      { id: 2, title: 'Сообщество', href: '' },
      // { id: 3, title: 'Список программ', href: '/courses' },
      { id: 4, title: 'Вебинары', href: '/webinars' },
      { id: 5, title: 'Анонсы и новости', href: '/articles' },
      { id: 6, title: 'Сертифакты легальности', href: '' },
    ],
  },
  {
    id: 2,
    title: 'Условия использования',
    list: [
      { id: 1, title: 'Пользовательское соглашение', href: '/' },
      { id: 2, title: 'Сертификаты', href: '/' },
      { id: 3, title: 'Конфеденциальность', href: '/' },
      { id: 4, title: 'Условия использования', href: '/' },
      { id: 5, title: 'Реферальная программа', href: '/' },
    ],
  },
  {
    id: 3,
    title: 'Служба поддержки',
    list: [
      { id: 1, title: 'Расписание занятий', href: '/' },
      { id: 2, title: 'Центр поддержки', href: '/' },
      {
        id: 3,
        title: 'Система запросов для правоохранительных органов',
        href: '/',
      },
    ],
  },
];

const Footer: FC = () => {
  const styles = useStyles();
  const rootStyles = useRootStyles();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <div className={rootStyles.container}>
        <div className={styles.wrapper}>
          <Grid gap="2xl" className={styles.mainGrid}>
            <div className={styles.first}>
              <Typography
                size="3xl"
                view="brand"
                weight="semibold"
                className={styles.logo}
              >
                {t('landing.footer.logo')}
              </Typography>

              <Subscribe />
            </div>

            <Grid cols="3" gap="4xl">
              {menu.map((g) => (
                <GridItem col="1" key={g.id} className={styles.menu}>
                  <Typography margin="0 0 16px" size="s" weight="semibold">
                    {g.title}
                  </Typography>
                  {g.list.map((link) => (
                    <Link key={link.id} to={link.href}>
                      <Typography
                        margin="14px 0"
                        size="xs"
                        className={styles.link}
                      >
                        {link.title}
                      </Typography>
                    </Link>
                  ))}
                </GridItem>
              ))}
            </Grid>
          </Grid>

          <Apps />
        </div>
      </div>
    </div>
  );
};

export default Footer;
