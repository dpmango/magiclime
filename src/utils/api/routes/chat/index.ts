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

export const sendMessage = (data: {
  text: string;
  reply_to_id: number | null;
  chat: number;
}): AxiosPromise => {
  return instance.post('/messages/', data);
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
  image: number | null;
  participants: number[];
}): AxiosPromise<IChat> => {
  return instance.post('/chats/', data);
};

export const getChatGroups = (): AxiosPromise<
  IAxiosPaginatedResponse<IGroup>
> => {
  return instance.get(`/groups/`);
};

export const sendFile = (file: File): AxiosPromise => {
  const fakeForm = new FormData();
  fakeForm.append('file', file);
  return instance.post('/files/', fakeForm, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
