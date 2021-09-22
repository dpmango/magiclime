import { ContextMenu } from '@consta/uikit/ContextMenu';
import React, { FC, MouseEvent, RefObject, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SetStateType } from '../../../../../../types/common';

type DropdownItem = {
  name: string;
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
      name: 'Выйти из беседы',
      clickCallback: () => {
        console.log('Log out');
      },
    },
  ];

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
      direction="downStartLeft"
      onClickOutside={() => setOpen(false)}
    />
  );
};

export default Dropdown;
