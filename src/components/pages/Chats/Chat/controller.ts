import { Dispatch, RefObject } from 'react';
import { ClassNameMap } from '@material-ui/styles';
import { Socket } from 'socket.io-client';
import { DOMAIN } from '../../../../utils/api';
import { IMessage } from '../types';
import { ActionType, StateType } from './reducer';

export const renderNewMessage = (
  message: IMessage,
  dispatch: Dispatch<ActionType>,
  elem: HTMLDivElement | null
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
  /* eslint-disable no-param-reassign */
  if (elem) elem.scrollTop = elem.scrollHeight;
};

export const onReplyClick = (id: number, styles: ClassNameMap) => {
  const message = document.getElementById(`message_${id}`);
  message?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  message?.classList.add(styles.replyAnimation);
  setTimeout(() => {
    message?.classList.remove(styles.replyAnimation);
  }, 3000);
};

export const fixScroll = (
  elem: HTMLDivElement,
  mark: HTMLSpanElement,
  dispatch: Dispatch<ActionType>,
  state: StateType
) => {
  /* eslint-disable no-param-reassign */
  elem.scrollTop = elem.scrollHeight - state.prevBodyHeight + state.scroll!;
  mark.style.top = `${elem.scrollHeight - state.prevBodyHeight + 24}px`;
  dispatch({ type: 'SET_BODY_HEIGHT', payload: elem.scrollHeight });
};

export const checkMark = (
  mark: RefObject<HTMLSpanElement>,
  state: StateType
): boolean => {
  if (mark.current && state.lastPaginationDirection) {
    const top = mark.current.offsetTop;
    return (
      (state.scroll! <= top && state.lastPaginationDirection === 'bottom') ||
      (state.scroll! >= top && state.lastPaginationDirection === 'top')
    );
  }
  return false;
};

export const getFirstUnreadIndex = (
  limit: number,
  unreadCount: number,
  allCount: number
): number => {
  return allCount < limit
    ? allCount - unreadCount
    : limit * Math.ceil(unreadCount / limit) - unreadCount;
};
