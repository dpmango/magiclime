import { AxiosPromise } from '../../../../types/common';
import {
  IAxiosPaginatedResponse,
  IPhoto,
} from '../../../../types/interfaces/common';
import { IUser } from '../../../../types/interfaces/user';
import { instance } from '../../index';
import {
  IChat,
  IChatDetail,
  IGroup,
  IMessage,
} from '../../../../components/pages/Chats/types';

export const getChatsList = (
  title: string,
  group: IGroup | null
): AxiosPromise<IAxiosPaginatedResponse<IChat>> => {
  return instance.get(`/chats/`, {
    params: {
      search: title || null,
      group_in: group ? group.id : null,
    },
  });
};

export const getChat = (id: number): AxiosPromise<IChatDetail> => {
  return instance.get(`/chats/${id}/`);
};

export const getUsers = (
  title: string
): AxiosPromise<IAxiosPaginatedResponse<IUser>> => {
  return instance.get(`/auth/users/`, {
    params: {
      search: title || null,
    },
  });
};

export const createChat = (data: {
  title: string;
  avatar: number | null;
  participants: number[];
}): AxiosPromise<IChat> => {
  return instance.post('/chats/', data);
};

export const getChatGroups = (): AxiosPromise<
  IAxiosPaginatedResponse<IGroup>
> => {
  return instance.get(`/groups/`);
};

export const sendFile = (
  file: File
): AxiosPromise<{ id: number; file: string }> => {
  const fakeForm = new FormData();
  fakeForm.append('file', file);
  return instance.post('/files/', fakeForm, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const readMessage = (id: number): AxiosPromise => {
  return instance.post(`/messages/${id}/read_message/`, {});
};

export const getChatMessages = (
  chatId: number,
  page?: number,
  limit?: number
): AxiosPromise<IAxiosPaginatedResponse<IMessage>> => {
  return instance.get('/messages/', {
    params: {
      chat_in: chatId,
      page: page || null,
      page_size: limit || null,
    },
  });
};
