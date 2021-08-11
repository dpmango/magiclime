import React, { FC, MouseEvent, useCallback, useContext } from 'react';
import { ContextMenu } from '@consta/uikit/ContextMenu';
import { DropdownItem, IProps } from './types';
import { IconEdit } from '@consta/uikit/IconEdit';
import { ChatContext } from '../../../context';

const Dropdown: FC<IProps> = ({ clickOutside, targetRef }) => {
  const { chatContext, setChatContext } = useContext(ChatContext);
  const items = [{ name: 'Создать беседу', icon: IconEdit }];

  const renderLeftSide = useCallback((item: DropdownItem) => {
    const Icon = item.icon;
    return <Icon size="s" />;
  }, []);

  const onItemClick = useCallback(
    (item: DropdownItem) => {
      return (e: MouseEvent<HTMLDivElement>) => {
        setChatContext({ ...chatContext, mode: 'creation' });
      };
    },
    [chatContext]
  );

  return (
    <ContextMenu
      items={items}
      size={'s'}
      getLabel={(item: DropdownItem) => item.name}
      getOnClick={onItemClick}
      anchorRef={targetRef}
      getLeftSideBar={renderLeftSide}
      direction="downStartRight"
      onClickOutside={clickOutside}
    />
  );
};

export default Dropdown;
