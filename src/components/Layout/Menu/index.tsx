import React, { FC, useEffect, useState } from 'react';
import useStyles from './styles';
import Container from '../../Common/Container';
import { Avatar } from '@consta/uikit/Avatar';
import Typography from '../../Common/Typography';
import Flex from '../../Common/Flex';
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
import { ComponentType } from '../../../types/common';

interface IProps {
  isFull: boolean;
}

const Menu: FC<IProps> = ({ isFull }) => {
  const [activeLink, setActiveLink] = useState({
    path: '/profile',
    index: 0,
    isFirstRender: true,
  });

  const styles = useStyles({
    isFull,
    activeLinkIndex: activeLink.index,
    isFirstAnimationPlay: activeLink.isFirstRender,
  });
  const location = useLocation();

  useEffect(() => {
    let index = 0;
    for (let i = 0; i < sections.length; i++) {
      const linkIndex = sections[i].links.findIndex(
        (link) => link.path === location.pathname
      );
      if (linkIndex >= 0) {
        index = linkIndex;
        break;
      }
    }
    setActiveLink({
      path: location.pathname,
      index,
      isFirstRender: true,
    });
  }, []);

  const sections = [
    {
      name: 'ГЛАВНОЕ МЕНЮ',
      links: [
        {
          path: '/profile',
          text: 'Профиль',
          icon: IconUser,
        },
        {
          path: '/courses',
          text: 'Курсы',
          icon: IconCards,
        },
        {
          path: '/chats',
          text: 'Чаты',
          icon: IconChat,
        },
        {
          path: '/calendar',
          text: 'Календарь',
          icon: IconCalendar,
        },
      ],
    },
    {
      name: 'ОБУЧЕНИЕ',
      links: [
        {
          path: '/marketplace',
          text: 'Маркетплейс',
          icon: IconBag,
        },
        {
          path: '/webinars',
          text: 'Вебинары',
          icon: IconVideo,
        },
        {
          path: '/forum',
          text: 'Форум',
          icon: IconTeam,
        },
        {
          path: '/programs',
          text: 'Программы',
          icon: IconBook,
        },
      ],
    },
    {
      name: 'ДОПОЛНИТЕЛЬНО',
      links: [
        {
          path: '/faq',
          text: 'База знаний',
          icon: IconList,
        },
        {
          path: '/rating',
          text: 'Рейтинг пользователей',
          icon: IconFavorite,
        },
        {
          path: '/games',
          text: 'Игры',
          icon: IconDinosaur,
        },
      ],
    },
  ];

  const onLinkClick = (
    path: string,
    index: number,
    array: Array<{ path: string; text: string; icon: ComponentType }>
  ) => {
    const isFirstRender = !!array.find((link) => link.path === activeLink.path);
    setActiveLink({
      path,
      index,
      isFirstRender: !isFirstRender,
    });
  };

  return (
    <Container className={styles.root}>
      {/*<Flex*/}
      {/*  margin={isFull ? '0 0 30px' : '0 0 20px'}*/}
      {/*  className={styles.animation}*/}
      {/*  justify={'center'}*/}
      {/*>*/}
      {/*  <Avatar*/}
      {/*    className={styles.avatar}*/}
      {/*    form={'default'}*/}
      {/*    url={*/}
      {/*      'https://cdn.pixabay.com/photo/2019/07/18/00/14/falcon-4345234_1280.jpg'*/}
      {/*    }*/}
      {/*    name={'Ростислав М.'}*/}
      {/*  />*/}
      {/*  <Flex*/}
      {/*    direction={'column'}*/}
      {/*    margin={isFull ? '0 auto 0 0' : '0'}*/}
      {/*    className={styles.transition}*/}
      {/*  >*/}
      {/*    <Typography size={'xl'} weight={'semibold'} className={styles.text}>*/}
      {/*      Ростислав М.*/}
      {/*    </Typography>*/}
      {/*    <Typography view={'secondary'} size={'s'} className={styles.text}>*/}
      {/*      Palo Alto, CA*/}
      {/*    </Typography>*/}
      {/*  </Flex>*/}
      {/*</Flex>*/}
      {sections.map((section) => (
        <Flex
          direction={'column'}
          margin={isFull ? '0 0 27px' : '0 0 7px'}
          key={uuid()}
          className={styles.animation}
        >
          <Typography
            margin={'0 0 8px 24px'}
            view={'secondary'}
            size={'s'}
            weight={'light'}
            className={styles.text}
          >
            {section.name}
          </Typography>
          <div className={styles.linksContainer}>
            {section.links.find((link) => link.path === activeLink.path) && (
              <div className={styles.line}></div>
            )}
            {section.links.map((link, index, array) => (
              <NavLink
                key={uuid()}
                to={link.path}
                className={styles.link}
                activeClassName={styles.activeLink}
                onClick={() => onLinkClick(link.path, index, array)}
              >
                <link.icon view={'secondary'} />
                <Typography
                  margin={'0 0 0 18px'}
                  view={'secondary'}
                  size={'m'}
                  weight={'semibold'}
                  className={styles.text}
                >
                  {link.text}
                </Typography>
              </NavLink>
            ))}
          </div>
        </Flex>
      ))}
    </Container>
  );
};

export default Menu;
