import { ICourse } from 'types/interfaces/courses';
import { IForum, ITopic } from 'types/interfaces/forum';
import { IAxiosPaginatedResponse } from 'types/interfaces/common';
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
): Promise<[Error | null, ITopic | null]> => {
  try {
    const { data } = await $api.get(endpoints.forum.byId(id));

    return [null, data];
  } catch (error) {
    return [error, null];
  }
};
