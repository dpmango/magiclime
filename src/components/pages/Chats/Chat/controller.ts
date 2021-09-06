import { ClassNameMap } from '@material-ui/styles';
import { SetStateType } from '../../../../types/common';
import { DOMAIN } from '../../../../utils/api';
import { IMessage } from '../types';

export const renderNewMessage = (
  message: IMessage,
  increaseCount: SetStateType<number>,
  setMessages: SetStateType<{
    array: IMessage[];
    needScroll: boolean;
  }>
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
  increaseCount((prev) => prev + 1);
  setMessages((prev) => ({
    array: [
      ...prev.array,
      { ...message, creator: { ...message.creator, avatar }, attached_images },
    ],
    needScroll: true,
  }));
};

export const onReplyClick = (id: number, styles: ClassNameMap) => {
  const message = document.getElementById(`message_${id}`);
  message?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  message?.classList.add(styles.replyAnimation);
  setTimeout(() => {
    message?.classList.remove(styles.replyAnimation);
  }, 3000);
};
