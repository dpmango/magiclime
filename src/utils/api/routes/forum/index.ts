import { IAxiosPaginatedResponse } from 'types/interfaces/common';
import {
  IAnswer,
  IForum,
  IQuestion,
  ITopic,
  ITopicListItem,
} from '../../../../components/pages/Forum/types';
import { AxiosPromise } from '../../../../types/common';
import { instance as $api } from '../../index';
import endpoints from '../endpoints';

export const getForums = async (): Promise<
  [Error | null, IAxiosPaginatedResponse<IForum> | null]
> => {
  try {
    const { data } = await $api.get(endpoints.forum.root);

    return [null, data];
  } catch (error) {
    return [error, null];
  }
};

export const getForumTopic = async (
  id: string
): Promise<[Error | null, ITopic]> => {
  try {
    const { data } = await $api.get(endpoints.forum.byId(id));

    return [null, data];
  } catch (error) {
    return [error, {} as ITopic];
  }
};

export const createTopic = (
  id: string,
  data: { name: string; description: string }
): AxiosPromise<ITopicListItem> => {
  return $api.post(endpoints.forum.createTopic(id), data);
};

export const getForumTopicList = (
  id: string,
  search: string
): AxiosPromise<ITopicListItem[]> => {
  return $api.get(endpoints.forum.getTopicList(id), {
    params: {
      name: search || null,
    },
  });
};

export const getQuestion = (id: string): AxiosPromise<IQuestion> => {
  return $api.get(endpoints.forum.getQuestion(id));
};

export const getAnswers = (id: string): AxiosPromise<IAnswer[]> => {
  return $api.get(endpoints.forum.getAnswers(id));
};

export const createAnswer = (
  questionId: string,
  text: string
): AxiosPromise<IAnswer> => {
  return $api.post(endpoints.forum.createAnswer(questionId), { text });
};
