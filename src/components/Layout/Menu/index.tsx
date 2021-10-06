import React, { FC, useEffect, useMemo, useState, useContext } from 'react';
import { IconLineAndBarChart } from '@consta/uikit/IconLineAndBarChart';
import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { NavLink, useLocation } from 'react-router-dom';
import cln from 'classnames';
import { useTranslation } from 'react-i18next';
import { useCheckDefaultTheme } from '../../../hooks/useCheckDefaultTheme';
import { RootState } from '../../../store/reducers/rootReducer';
import Flex from '../../Common/Flex';
import Typography from '../../Common/Typography';
import Container from '../../Common/Container';
import { MenuContext } from './context';
import useStyles from './styles';
import icons from './icons';

const Menu: FC<{ isAdmin: boolean }> = ({ isAdmin }) => {
  const [activeLink, setActiveLink] = useState({
    path: isAdmin ? '/admin/users' : '/profile/me',
    index: 1,
  });
  const { isFull } = useContext(MenuContext);
  const { has_bought_matrix_positions: havePremium } = useSelector(
    (state: RootState) => state.user.profile
  );

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
        path: '/faq',
        name: t('menu.faq'),
        icon: icons.KnowledgeIcon,
      },
      { name: t('menu.education') },
      {
        path: '/news',
        name: t('menu.news'),
        icon: IconLineAndBarChart,
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
        disabled: !havePremium,
      },
      {
        path: '/rating',
        name: t('menu.rating'),
        icon: icons.RatingIcon,
        disabled: !havePremium,
      },
      { name: t('menu.extra') },
      {
        path: '/marketplace',
        name: t('menu.marketplace'),
        icon: icons.MarketIcon,
        disabled: !havePremium,
      },
      {
        path: '/programs',
        name: t('menu.programs'),
        icon: icons.ProgramIcon,
        disabled: !havePremium,
      },
      {
        path: '/games',
        name: t('menu.games'),
        icon: icons.GameIcon,
        disabled: !havePremium,
      },
    ],
    [havePremium]
  );

  const adminLinks = useMemo(
    () => [
      { name: '' },
      {
        path: '/admin/users',
        name: t('admin.menu.users'),
        icon: icons.UserIcon,
      },
      {
        path: '/admin/transactions',
        name: t('admin.menu.transactions'),
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

  const linksArray = useMemo<
    Array<{ name: string; path?: string; icon?: FC<any>; disabled?: boolean }>
  >(() => (isAdmin ? adminLinks : links), [isAdmin, havePremium]);

  return (
    <Container className={styles.root}>
      <Flex
        direction="column"
        margin="0 0 12px"
        className={cln(styles.animation, styles.relative)}
      >
        {linksArray.map((link) => (
          <React.Fragment key={uuid()}>
            {link.icon && link.path ? (
              <NavLink
                to={link.path}
                className={cln(styles.link, {
                  [styles.disableLink]: !!link.disabled,
                })}
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
                className={cln(styles.text, styles.section)}
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

export default React.memo(Menu);
