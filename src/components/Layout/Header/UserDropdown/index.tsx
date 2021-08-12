import React, { FC, MouseEvent, useCallback, useMemo } from 'react';
import i18n from 'i18next';
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
import { IconSettings } from '@consta/uikit/IconSettings';
import { IconQuestion } from '@consta/uikit/IconQuestion';
import { IconRouble } from '@consta/uikit/IconRouble';
import { IconEye } from '@consta/uikit/IconEye';
import { IconWorld } from '@consta/uikit/IconWorld';
import useStyles from '../styles';
import { Language } from '../../../../types/common';
import { setLanguage } from '../../../../store/reducers/settings';
import { useTranslation } from 'react-i18next';

const UserDropdown: FC<IUserDropdownProps> = ({
  clickOutside,
  targetRef,
  changeTheme,
  theme,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const styles = useStyles();
  const { t } = useTranslation();

  const redirectToPoorVision = () => {
    document.getElementById('specialButton')!.click();
  };

  const onLanguageChange = (value: Language) => {
    i18n.changeLanguage(value).then(() => {
      dispatch(setLanguage(value));
      history.push('/');
      window.location.reload();
    });
  };

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

  const items = useMemo(
    () => [
      { name: 'Профиль', icon: IconUser, path: '/profile', group: 1 },
      {
        name: 'Пополнить баланс',
        icon: IconRouble,
        path: '/balance',
        group: 1,
      },
      { name: 'Настройки', icon: IconSettings, path: '/settings', group: 1 },
      { name: 'Помощь', icon: IconQuestion, path: '/help', group: 1 },
      {
        name: 'Тёмная тема',
        switch: true,
        icon: IconMoon,
        clickCallback: changeTheme,
        group: 2,
      },
      {
        name: 'Версия для слабовидящих',
        switch: true,
        icon: IconEye,
        clickCallback: redirectToPoorVision,
        group: 2,
      },
      {
        name: 'Язык',
        icon: IconWorld,
        menu: [
          {
            name: 'Русский',
            image: '',
            clickCallback: () => onLanguageChange(Language.RU),
          },
          {
            name: 'English',
            image: '',
            clickCallback: () => onLanguageChange(Language.EN),
          },
        ],
        group: 2,
      },
      { name: 'Выход', icon: IconExit, group: 3 },
    ],
    []
  );

  const renderLeftSide = useCallback((item: UserDropdownItem) => {
    if (item.icon) {
      const Icon = item.icon;
      return <Icon size="s" />;
    } else if (item.image) {
      return <img src={item.image} className={styles.dropdownImage} />;
    } else return '';
  }, []);

  const renderRightSide = useCallback((item: UserDropdownItem) => {
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
  }, []);

  const onItemClick = useCallback((item: UserDropdownItem) => {
    return (e: MouseEvent<HTMLDivElement>) => {
      if (item.name === 'Выход') {
        Cookies.remove('access');
        Cookies.remove('refresh');
        deleteAuthHeader();
        dispatch(logout());
        history.push('/landing');
      } else if (item.path) {
        history.push(item.path);
      } else if (item.clickCallback) {
        item.clickCallback();
      } else return;
    };
  }, []);

  return (
    <ContextMenu
      items={items}
      getLabel={(item: UserDropdownItem) => item.name}
      getOnClick={onItemClick}
      getGroupId={(item: UserDropdownItem) => item.group}
      getGroupLabel={(id) => groups.find((group) => group.id === id)?.name}
      anchorRef={targetRef}
      getLeftSideBar={renderLeftSide}
      getRightSideBar={renderRightSide}
      direction="downStartRight"
      subMenuDirection="leftStartUp"
      getSubItems={(item: UserDropdownItem) => item.menu}
      onClickOutside={clickOutside}
    />
  );
};

export default UserDropdown;
