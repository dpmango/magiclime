import React, { useRef, useState, MouseEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  HeaderModule,
  HeaderButton,
  HeaderLogin,
  Header as ConstaHeader,
} from '@consta/uikit/Header';
import { IconHamburger } from '@consta/uikit/IconHamburger';
import { IconSettings } from '@consta/uikit/IconSettings';
import { IconMoon } from '@consta/uikit/IconMoon';
import useResolution from '../../../hooks/useResolution';
import useStyles from './styles';
import { RootState } from '../../../store/reducers/rootReducer';
import { ComponentType, SetStateType } from '../../../types/common';
import Typography from '../../Common/Typography';
import { ContextMenu } from '@consta/uikit/ContextMenu';
import { IconExit } from '@consta/uikit/IconExit';
import { IconUser } from '@consta/uikit/IconUser';
import { logout } from '../../../store/reducers/user';

interface IHeaderProps {
  theme: 'default' | 'dark';
  setTheme: SetStateType<'default' | 'dark'>;
  toggleMenu: VoidFunction;
}

type Item = {
  name: string;
  icon: ComponentType;
  path?: string;
};

const Header = ({ theme, setTheme, toggleMenu }: IHeaderProps) => {
  const styles = useStyles();
  const [isOpen, setOpen] = useState(false);
  const { isLogged, profile } = useSelector((state: RootState) => state.user);
  const ref = useRef(null);
  const isMobile = useResolution();
  const dispatch = useDispatch();
  const history = useHistory();

  const onItemClick = (item: Item) => {
    return (e: MouseEvent<HTMLDivElement>) => {
      if (item.name === 'Выход') {
        dispatch(logout());
        history.push('/landing');
      } else history.push(item.path as string);
    };
  };

  const items = [
    { name: 'Профиль', icon: IconUser, path: '/profile' },
    { name: 'Выход', icon: IconExit },
  ];

  const renderLeftSide = (item: Item) => {
    const Icon = item.icon;
    return <Icon size="s" />;
  };

  return (
    <div className={styles.root}>
      <ConstaHeader
        className={styles.body}
        leftSide={
          <>
            <HeaderModule>
              <HeaderButton
                onClick={toggleMenu}
                iconSize="m"
                iconLeft={IconHamburger}
              />
            </HeaderModule>
            <HeaderModule indent={'s'}>
              <Link to={'/'}>
                <Typography size={'xl'} weight={'bold'} view={'brand'}>
                  Lime
                </Typography>
              </Link>
            </HeaderModule>
          </>
        }
        rightSide={
          <>
            <HeaderModule indent="m">
              <HeaderButton
                iconSize="m"
                iconLeft={IconMoon}
                onClick={() => setTheme(theme !== 'dark' ? 'dark' : 'default')}
              />
            </HeaderModule>

            <HeaderModule indent="s">
              <HeaderButton iconSize="m" iconLeft={IconSettings} />
            </HeaderModule>

            <HeaderModule indent="s" className={styles.relative}>
              <div ref={ref}>
                <HeaderLogin
                  isLogged={isLogged}
                  onClick={() => setOpen(!isOpen)}
                  isMinified={isMobile}
                  personName={profile.name + ' ' + profile.surname}
                  personInfo={'8 уровень'}
                />
              </div>
              {isOpen && (
                <ContextMenu
                  items={items}
                  getLabel={(item: Item) => item.name}
                  getOnClick={onItemClick}
                  anchorRef={ref}
                  getLeftSideBar={renderLeftSide}
                  direction={'downStartRight'}
                  onClickOutside={() => setOpen(false)}
                />
              )}
            </HeaderModule>
          </>
        }
      />
    </div>
  );
};

export default Header;
