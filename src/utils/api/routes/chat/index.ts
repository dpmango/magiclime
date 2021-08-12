import { AxiosPromise } from '../../../../types/common';
import { instance } from '../../index';
import { IChat, IMessage } from '../../../../components/pages/Chats/types';

export const getChatsList = (id: number): AxiosPromise<IChat[]> => {
  return instance.get(`/auth/users/${id}/chats/`);
};

export const getChatMessages = (id: number): AxiosPromise<IMessage[]> => {
  return instance.get(`/chats/${id}`);
};

export const sendMessage = (data: {
  text: string;
  reply_to_id: number;
  chat: number;
}): AxiosPromise => {
  return instance.post('/messages', data);
};
