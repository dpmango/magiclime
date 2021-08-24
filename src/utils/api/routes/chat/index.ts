import { AxiosPromise } from '../../../../types/common';
import { instance } from '../../index';
import {
  IChat,
  IChatDetail,
  IMessage,
} from '../../../../components/pages/Chats/types';

export const getChatsList = (
  id: number,
  title: string
): AxiosPromise<IChat[]> => {
  return instance.get(`/auth/users/${id}/chats/`, {
    params: {
      title: title || null,
    },
  });
};

export const getChat = (id: number): AxiosPromise<IChatDetail> => {
  return instance.get(`/chats/${id}/`);
};

export const sendMessage = (data: {
  text: string;
  reply_to_id: number | null;
  chat: number;
}): AxiosPromise => {
  return instance.post('/messages/', data);
};
