import { IconLineAndBarChart } from '@consta/uikit/IconLineAndBarChart';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { Collapse } from '@consta/uikit/Collapse';
import { useTranslation } from 'react-i18next';
import { useCheckDefaultTheme } from '../../../hooks/useCheckDefaultTheme';
import Flex from '../../Common/Flex';
import Typography from '../../Common/Typography';
import Container from '../../Common/Container';
import useStyles from './styles';
import icons from './icons';

interface IProps {
  isFull: boolean;
  isAdmin: boolean;
}

const Menu: FC<IProps> = ({ isFull, isAdmin }) => {
  const [activeLink, setActiveLink] = useState({
    path: isAdmin ? '/admin/users' : '/profile/me',
    index: 1,
  });

  const isDefault = useCheckDefaultTheme();
  const { t } = useTranslation();

  const styles = useStyles({
    isFull,
    isDefault,
    activeLinkIndex: activeLink.index,
  });
  const location = useLocation();

  useEffect(() => {
    let index = 1;
    const linkIndex = linksArray.findIndex(
      (link) => link.path && location.pathname.indexOf(link.path) === 0
    );
    if (linkIndex >= 0) {
      index = linkIndex;
    }
    setActiveLink({
      path: location.pathname,
      index,
    });
  }, [location.pathname]);

  const links = useMemo(
    () => [
      { name: '' },
      {
        path: '/profile/me',
        name: t('menu.profile'),
        icon: icons.UserIcon,
      },
      {
        path: '/courses',
        name: t('menu.courses'),
        icon: icons.CardsIcon,
      },
      {
        path: '/chats',
        name: t('menu.chats'),
        icon: icons.ChatsIcon,
      },
      // {
      //   path: '/calendar',
      //   name: t('menu.calendar'),
      //   icon: icons.CalendarIcon,
      // },
      {
        path: '/news',
        name: t('menu.news'),
        icon: IconLineAndBarChart,
      },
      { name: t('menu.education') },
      {
        path: '/marketplace',
        name: t('menu.marketplace'),
        icon: icons.MarketIcon,
      },
      {
        path: '/webinars',
        name: t('menu.webinars'),
        icon: icons.VideoIcon,
      },
      {
        path: '/forum',
        name: t('menu.forum'),
        icon: icons.ForumIcon,
      },
      {
        path: '/programs',
        name: t('menu.programs'),
        icon: icons.ProgramIcon,
      },
      { name: t('menu.extra') },
      {
        path: '/faq',
        name: t('menu.faq'),
        icon: icons.KnowledgeIcon,
      },
      {
        path: '/rating',
        name: t('menu.rating'),
        icon: icons.RatingIcon,
      },
      {
        path: '/games',
        name: t('menu.games'),
        icon: icons.GameIcon,
      },
    ],
    []
  );

  const adminLinks = useMemo(
    () => [
      { name: '' },
      {
        path: '/admin/users',
        name: t('admin.users'),
        icon: icons.UserIcon,
      },
      {
        path: '/admin/transactions',
        name: t('admin.transactions'),
        icon: icons.MarketIcon,
      },
      {
        path: '/admin/courses',
        name: t('menu.courses'),
        icon: icons.CardsIcon,
      },
      {
        path: '/admin/webinars',
        name: t('menu.webinars'),
        icon: icons.VideoIcon,
      },
    ],
    []
  );

  const linksArray = useMemo(() => (isAdmin ? adminLinks : links), [isAdmin]);

  return (
    <Container className={styles.root}>
      <Flex
        direction="column"
        margin="0 0 12px"
        className={classNames(styles.animation, styles.relative)}
      >
        {linksArray.map((link) => (
          <React.Fragment key={uuid()}>
            {link.icon && link.path ? (
              <NavLink
                to={link.path}
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                <link.icon className={styles.icon} size="s" />
                <Typography
                  margin="0 0 0 18px"
                  view="primary"
                  size="s"
                  weight="regular"
                  className={styles.text}
                >
                  {link.name}
                </Typography>
              </NavLink>
            ) : (
              <Typography
                margin="0 0 0 24px"
                view="secondary"
                size="xs"
                weight="regular"
                className={classNames(styles.text, styles.section)}
              >
                {link.name}
              </Typography>
            )}
            <div className={styles.line} />
          </React.Fragment>
        ))}
      </Flex>
    </Container>
  );
};

export default Menu;
