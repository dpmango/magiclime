import { AxiosPromise } from 'types/common';
import { instance as $api } from '../../index';
import endpoints from '../endpoints';

interface IGovernamentFeedbackRequest {
  question: string;
  country: string;
  email: string;
  name: string;
  transaction: string;
  topic: string;
  description: string;
}

export const postGovernmentFeedback = async (
  request: IGovernamentFeedbackRequest
): Promise<[Error | null, any | null]> => {
  try {
    const { data } = await $api.post(endpoints.feedback.government, request);

    return [null, data];
  } catch (error) {
    return [error, null];
  }
};
