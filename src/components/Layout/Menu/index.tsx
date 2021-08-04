import React, { FC, useEffect, useRef, useState } from 'react';
import { Avatar } from '@consta/uikit/Avatar';
import { IconCards } from '@consta/uikit/IconCards';
import { IconUser } from '@consta/uikit/IconUser';
import { IconChat } from '@consta/uikit/IconChat';
import { IconCalendar } from '@consta/uikit/IconCalendar';
import { IconBag } from '@consta/uikit/IconBag';
import { IconVideo } from '@consta/uikit/IconVideo';
import { IconTeam } from '@consta/uikit/IconTeam';
import { IconBook } from '@consta/uikit/IconBook';
import { IconFavorite } from '@consta/uikit/IconFavorite';
import { IconDinosaur } from '@consta/uikit/IconDinosaur';
import { v4 as uuid } from 'uuid';
import { NavLink, useLocation } from 'react-router-dom';
import { IconList } from '@consta/uikit/IconList';
import classNames from 'classnames';
import { useCheckDefaultTheme } from '../../../hooks/useCheckDefaultTheme';
import Flex from '../../Common/Flex';
import Typography from '../../Common/Typography';
import Container from '../../Common/Container';
import useStyles from './styles';
import icons from './icons';

interface IProps {
  isFull: boolean;
}

const Menu: FC<IProps> = ({ isFull }) => {
  const [activeLink, setActiveLink] = useState({
    path: '/profile',
    index: 1,
  });

  const isDefault = useCheckDefaultTheme();

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
    { name: 'ГЛАВНОЕ МЕНЮ' },
    {
      path: '/profile',
      name: 'Профиль',
      icon: icons.UserIcon,
    },
    {
      path: '/courses',
      name: 'Курсы',
      icon: icons.CardsIcon,
    },
    {
      path: '/chats',
      name: 'Чаты',
      icon: icons.ChatsIcon,
    },
    {
      path: '/calendar',
      name: 'Календарь',
      icon: icons.CalendarIcon,
    },
    { name: 'ОБУЧЕНИЕ' },
    {
      path: '/marketplace',
      name: 'Маркетплейс',
      icon: icons.MarketIcon,
    },
    {
      path: '/webinars',
      name: 'Вебинары',
      icon: icons.VideoIcon,
    },
    {
      path: '/forum',
      name: 'Форум',
      icon: icons.ForumIcon,
    },
    {
      path: '/programs',
      name: 'Программы',
      icon: icons.ProgramIcon,
    },
    { name: 'ДОПОЛНИТЕЛЬНО' },
    {
      path: '/faq',
      name: 'База знаний',
      icon: icons.KnowledgeIcon,
    },
    {
      path: '/rating',
      name: 'Рейтинг пользователей',
      icon: icons.RatingIcon,
    },
    {
      path: '/games',
      name: 'Игры',
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
                <link.icon view="ghost" size="s" />
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
