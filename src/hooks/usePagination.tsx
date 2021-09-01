import React, { useMemo, FC, useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { Button } from '@consta/uikit/Button';
import { Loader } from '@consta/uikit/Loader';
import ConstaIcons from '../assets/icons/ConstaIcons';
import { AxiosPromise } from '../types/common';
import { IAxiosPaginatedResponse } from '../types/interfaces/common';

interface IProps<T> {
  getList: (
    page?: number,
    limit?: number
  ) => AxiosPromise<IAxiosPaginatedResponse<T>>;
  elName: string;
  limit?: number;
  successCallback?: VoidFunction;
  errorCallback?: (err?: AxiosError) => VoidFunction;
}

export interface IPaginationButtonProps {
  buttonClassName?: string;
  loaderClassName?: string;
}

interface ReturnedValues<T> {
  data: T[];
  PaginationButton: FC<IPaginationButtonProps>;
}

export const usePagination = <T extends object>({
  getList,
  elName,
  limit = 20,
  successCallback,
  errorCallback,
}: IProps<T>): ReturnedValues<T> => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState<{ count: number; data: T[] }>({
    count: 0,
    data: [],
  });

  useEffect(() => {
    setLoading(true);
    getList(page, limit)
      .then((res) => {
        setState({
          count: res.data.count,
          data: res.data.results,
        });
        successCallback && successCallback();
      })
      .catch((err) => {
        errorCallback && errorCallback(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  const residue = useMemo(() => {
    if (state.count - state.data.length >= limit) return limit;
    return state.count - state.data.length;
  }, [state.data.length]);

  const PaginationButton: FC<IPaginationButtonProps> = ({
    loaderClassName,
    buttonClassName,
  }) =>
    loading ? (
      <Loader className={loaderClassName} />
    ) : residue > 0 ? (
      <Button
        view="secondary"
        label={`Показать ещё ${residue} ${elName}`}
        onClick={() => setPage(page + 1)}
        iconLeft={ConstaIcons.Refresh}
        className={buttonClassName}
      />
    ) : (
      <></>
    );

  return {
    data: state.data,
    PaginationButton,
  };
};
