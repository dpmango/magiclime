import { Dispatch } from 'react';
import { ClassNameMap } from '@material-ui/styles';
import { DOMAIN } from '../../../../utils/api';
import { IMessage } from '../types';
import { ActionType } from './reducer';

export const renderNewMessage = (
  message: IMessage,
  dispatch: Dispatch<ActionType>
) => {
  const avatar = message.creator.avatar
    ? {
        ...message.creator.avatar,
        image: DOMAIN + message.creator.avatar.image,
      }
    : null;

  const attached_images = message.attached_images.map((img) => ({
    ...img,
    image: DOMAIN + img.image,
  }));

  const newMessage = {
    ...message,
    creator: { ...message.creator, avatar },
    attached_images,
  };
  dispatch({ type: 'ADD_MESSAGE', message: newMessage });
};

export const onReplyClick = (id: number, styles: ClassNameMap) => {
  const message = document.getElementById(`message_${id}`);
  message?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  message?.classList.add(styles.replyAnimation);
  setTimeout(() => {
    message?.classList.remove(styles.replyAnimation);
  }, 3000);
};

export const scrollToBottom = () => {};
