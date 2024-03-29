import { AxiosPromise } from 'types/common';
import { IAxiosPaginatedResponse } from 'types/interfaces/common';
import {
  IReferralTree,
  IReferralTeam,
  IRererralHistory,
  IClone,
} from 'types/interfaces/referrals';
import { instance as $api } from '../../index';
import endpoints from '../endpoints';

export const getReferralsService = (data: {
  id?: number | string;
  level: number;
  program: number;
}): AxiosPromise<IReferralTree> => {
  let params: {
    matrixUserId?: number | string;
    level: number;
    program: number;
  } = {
    level: data.level,
    program: data.program,
  };

  if (data.id && data.id !== 'me') {
    params = {
      ...params,
      matrixUserId: data.id,
    };
  }

  return $api.get(endpoints.referrals.list, {
    params,
  });
};

export const getClonesService = (data: {
  level: number;
  program: number;
  page?: number;
  limit?: number;
}): AxiosPromise<IAxiosPaginatedResponse<IClone>> => {
  const params = {
    level: data.level,
    program: data.program,
    page: data.page || null,
    page_size: data.limit || null,
  };

  return $api.get(endpoints.referrals.clones, {
    params,
  });
};

export const getTeamService = (data: {
  id: string | number;
  program: number;
  search: string;
}): AxiosPromise<IReferralTeam> => {
  const params = {
    user_id: data.id,
    username: data.search || null,
    program: data.program,
    max_deep: 5,
  };

  return $api.get(endpoints.referrals.team, {
    params,
  });
};

export const buyMatricesService = async ({
  level,
  program,
  matrixUserId,
  positionRequestId,
}: {
  level: number;
  program: number;
  matrixUserId?: number;
  positionRequestId?: number;
}): Promise<[{ status: number } | null, any | null]> => {
  try {
    const { data } = await $api.post(endpoints.referrals.buy, null, {
      params: {
        level,
        program,
        matrixUserId,
        positionRequestId,
      },
    });
    return [null, data];
  } catch (error: any) {
    return [error, null];
  }
};

export const getMatricesHistoryService = (
  page: number,
  limit: number,
  queries: any
): AxiosPromise<IAxiosPaginatedResponse<IRererralHistory>> => {
  return $api.get(endpoints.referrals.history, {
    params: {
      page: page || null,
      page_size: limit || null,
      from_date: queries.from_date || null,
      to_date: queries.to_date || null,
      program: queries.program || null,
    },
  });
};

export const getClonePositionService = async ({
  level,
  program,
  matrixUserId,
}: {
  level: number;
  program: number;
  matrixUserId?: number;
}): Promise<[any | null, any | null]> => {
  try {
    const { data } = await $api.get(endpoints.referrals.clonePlace, {
      params: {
        level,
        program,
        matrixUserId,
      },
    });
    return [null, data];
  } catch (error: any) {
    return [error, null];
  }
};
