import React, { FC, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { useCheckDefaultTheme } from '../../../hooks/useCheckDefaultTheme';
import Flex from '../../Common/Flex';
import Typography from '../../Common/Typography';
import Container from '../../Common/Container';
import useStyles from './styles';
import icons from './icons';
import { useTranslation } from 'react-i18next';

interface IProps {
  isFull: boolean;
}

const Menu: FC<IProps> = ({ isFull }) => {
  const [activeLink, setActiveLink] = useState({
    path: '/profile',
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
    const linkIndex = links.findIndex(
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

  const links = [
    { name: '' },
    {
      path: '/profile',
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
    {
      path: '/calendar',
      name: t('menu.calendar'),
      icon: icons.CalendarIcon,
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
  ];

  return (
    <Container className={styles.root}>
      {/* <Flex */}
      {/*  margin={isFull ? '0 0 30px' : '0 0 20px'} */}
      {/*  className={styles.animation} */}
      {/*  justify={'center'} */}
      {/* > */}
      {/*  <Avatar */}
      {/*    className={styles.avatar} */}
      {/*    form={'default'} */}
      {/*    url={ */}
      {/*      'https://cdn.pixabay.com/photo/2019/07/18/00/14/falcon-4345234_1280.jpg' */}
      {/*    } */}
      {/*    name={'Ростислав М.'} */}
      {/*  /> */}
      {/*  <Flex */}
      {/*    direction={'column'} */}
      {/*    margin={isFull ? '0 auto 0 0' : '0'} */}
      {/*    className={styles.transition} */}
      {/*  > */}
      {/*    <Typography size={'xl'} weight={'semibold'} className={styles.text}> */}
      {/*      Ростислав М. */}
      {/*    </Typography> */}
      {/*    <Typography view={'secondary'} size={'s'} className={styles.text}> */}
      {/*      Palo Alto, CA */}
      {/*    </Typography> */}
      {/*  </Flex> */}
      {/* </Flex> */}
      <Flex
        direction="column"
        margin="0 0 12px"
        className={classNames(styles.animation, styles.relative)}
      >
        {links.map((link) => (
          <React.Fragment key={uuid()}>
            {link.icon && link.path ? (
              <NavLink
                to={link.path}
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                <link.icon className={styles.icon}  size="s" />
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
