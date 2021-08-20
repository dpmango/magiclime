import React, { useMemo } from 'react';
import { FC, useEffect, useState } from 'react';
import { AxiosPromise } from '../types/common';
import { AxiosError } from 'axios';
import { Button } from '@consta/uikit/Button';
import ConstaIcons from '../assets/icons/ConstaIcons';
import { Loader } from '@consta/uikit/Loader';

interface IProps<T> {
  getList: (page: number) => AxiosPromise<{ count: number; results: T[] }>;
  elName: string;
  limit?: number;
  successCallback?: VoidFunction;
  errorCallback?: (err?: AxiosError) => VoidFunction;
}

export const usePagination = <T extends object>({
  getList,
  elName,
  limit = 20,
  successCallback,
  errorCallback,
}: IProps<T>) => {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState<{ count: number; data: T[] }>({
    count: 0,
    data: [],
  });

  useEffect(() => {
    setLoading(true);
    getList(page)
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
    else return state.count - state.data.length;
  }, [state.data.length]);

  const PaginationButton = loading ? (
    <Loader />
  ) : residue > 0 ? (
    <Button
      view={'secondary'}
      label={`Показать ещё ${residue} ${elName}`}
      onClick={() => setPage(page + 1)}
      iconLeft={ConstaIcons.Refresh}
    />
  ) : (
    <></>
  );

  return {
    data: state.data,
    PaginationButton,
  };
};
