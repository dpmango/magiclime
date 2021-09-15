import { IAxiosPaginatedResponse } from 'types/interfaces/common';
import {
  IForum,
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
