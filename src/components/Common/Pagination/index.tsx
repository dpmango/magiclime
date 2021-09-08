import React, { useMemo, FC, useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { Loader } from '@consta/uikit/Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
import { usePrevious } from '../../../hooks/usePrevious';
import { AxiosPromise } from '../../../types/common';
import { IAxiosPaginatedResponse } from '../../../types/interfaces/common';
import useStyles from './styles';

type ComponentProps<T> = {
  data: T[];
  [key: string]: any;
};

type DefaultQueries = {
  search?: string;
};

interface IProps<T, U> {
  getList: (
    page: number,
    limit: number,
    queries: U
  ) => AxiosPromise<IAxiosPaginatedResponse<T>>;
  listComponent: FC<ComponentProps<T>>;
  queries?: U;
  limit?: number;
  successCallback?: (data: any) => void;
  errorCallback?: (err?: AxiosError) => void;
}

const Pagination = <T extends object, U extends DefaultQueries>({
  getList,
  listComponent: Component,
  limit = 20,
  successCallback,
  errorCallback,
  queries = {} as U,
}: IProps<T, U>) => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState<{ count: number; data: T[] }>({
    count: 0,
    data: [],
  });
  const previousPage = usePrevious(page);
  const styles = useStyles();

  useEffect(() => {
    setLoading(true);

    getList(page, limit, queries)
      .then((res) => {
        setState((prev) => ({
          count: res.data.count,
          data:
            page === previousPage
              ? res.data.results
              : [...prev.data, ...res.data.results],
        }));
      })
      .catch((err) => {
        errorCallback && errorCallback(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, queries]);

  useEffect(() => {
    successCallback && successCallback(state.data);
  }, [state]);

  return (
    <div className={styles.root}>
      {loading ? (
        <Loader className={styles.loader} />
      ) : (
        <InfiniteScroll
          dataLength={state.count}
          next={() => setPage(page + 1)}
          hasMore={page * limit < state.count}
          loader={<Loader className={styles.loader} />}
        >
          <Component data={state.data} />
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Pagination;
