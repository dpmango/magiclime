import { ContextMenu } from '@consta/uikit/ContextMenu';
import React, {
  FC,
  MouseEvent,
  RefObject,
  useCallback,
  useContext,
} from 'react';
import { useTranslation } from 'react-i18next';
import { SetStateType } from '../../../../../../types/common';
import { leaveChat } from '../../../../../../utils/api/routes/chat';
import { ChatContext } from '../../../context';

type DropdownItem = {
  name: string;
  clickCallback: VoidFunction;
};

interface IProps {
  buttonRef: RefObject<HTMLButtonElement>;
  setOpen: SetStateType<boolean>;
  chatId: number;
}

const Dropdown: FC<IProps> = ({ buttonRef, setOpen, chatId }) => {
  const { t } = useTranslation();
  const { chatContext, setChatContext } = useContext(ChatContext);

  const items: DropdownItem[] = [
    {
      name: 'Выйти из беседы',
      clickCallback: () => {
        leaveChat(chatId).then(() => {
          setChatContext({ ...chatContext, removedChatId: chatId });
        });
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
