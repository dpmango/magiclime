import { ContextMenu } from '@consta/uikit/ContextMenu';
import { IconWarning } from '@consta/uikit/IconWarning';
import React, { FC, MouseEvent, RefObject, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ComponentType, SetStateType } from '../../../../../../types/common';

type DropdownItem = {
  name: string;
  icon: ComponentType;
  clickCallback: VoidFunction;
};

interface IProps {
  buttonRef: RefObject<HTMLButtonElement>;
  setOpen: SetStateType<boolean>;
}

const Dropdown: FC<IProps> = ({ buttonRef, setOpen }) => {
  const { t } = useTranslation();

  const items: DropdownItem[] = [
    {
      name: t('common.complain'),
      icon: IconWarning,
      clickCallback: () => {
        window.location.href = 'mailto:test@mail.ru?subject=Жалоба';
      },
    },
  ];

  const renderLeftSide = useCallback((item: DropdownItem) => {
    const Icon = item.icon;
    return <Icon size="s" />;
  }, []);

  const onItemClick = useCallback((item: DropdownItem) => {
    return (e: MouseEvent<HTMLDivElement>) => {
      item.clickCallback();
    };
  }, []);

  return (
    <ContextMenu
      items={items}
      getLabel={(item: DropdownItem) => item.name}
      getOnClick={onItemClick}
      anchorRef={buttonRef}
      size="s"
      getLeftSideBar={renderLeftSide}
      direction="downStartLeft"
      onClickOutside={() => setOpen(false)}
    />
  );
};

export default Dropdown;
