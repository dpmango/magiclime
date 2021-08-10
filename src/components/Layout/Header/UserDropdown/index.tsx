import React, { FC, MouseEvent, RefObject } from 'react';
import { ContextMenu } from '@consta/uikit/ContextMenu';
import { IconUser } from '@consta/uikit/IconUser';
import { IconExit } from '@consta/uikit/IconExit';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Switch } from '@consta/uikit/Switch';
import { IconMoon } from '@consta/uikit/IconMoon';
import { IUserDropdownProps, UserDropdownItem } from './types';
import { logout } from '../../../../store/reducers/user';
import Cookies from 'js-cookie';
import { deleteAuthHeader } from '../../../../utils/api';

const UserDropdown: FC<IUserDropdownProps> = ({
  clickOutside,
  targetRef,
  changeTheme,
  theme,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const groups = [
    {
      name: '',
      id: 1,
    },
    {
      name: 'Настройки',
      id: 2,
    },
    {
      name: '',
      id: 3,
    },
  ] as const;

  const items = [
    { name: 'Профиль', icon: IconUser, path: '/profile', group: 1 },
    {
      name: 'Тёмная тема',
      switch: true,
      icon: IconMoon,
      clickCallback: changeTheme,
      group: 2,
    },
    { name: 'Выход', icon: IconExit, group: 3 },
  ];

  const renderLeftSide = (item: UserDropdownItem) => {
    const Icon = item.icon;
    return <Icon size="s" />;
  };

  const renderRightSide = (item: UserDropdownItem) => {
    return (
      item.switch && (
        <Switch
          size="m"
          checked={theme === 'dark'}
          onChange={() => item.clickCallback && item.clickCallback()}
          key="Switch"
        />
      )
    );
  };

  const onItemClick = (item: UserDropdownItem) => {
    return (e: MouseEvent<HTMLDivElement>) => {
      if (item.name === 'Выход') {
        Cookies.remove('access');
        Cookies.remove('refresh');
        deleteAuthHeader();
        dispatch(logout());
        history.push('/landing');
      } else if (item.path) {
        history.push(item.path);
      } else return;
    };
  };

  return (
    <ContextMenu
      items={items}
      getLabel={(item: UserDropdownItem) => item.name}
      getOnClick={onItemClick}
      getGroupId={(item) => item.group}
      getGroupLabel={(id) => groups.find((group) => group.id === id)?.name}
      anchorRef={targetRef}
      getLeftSideBar={renderLeftSide}
      getRightSideBar={renderRightSide}
      direction="downStartRight"
      onClickOutside={clickOutside}
    />
  );
};

export default UserDropdown;
