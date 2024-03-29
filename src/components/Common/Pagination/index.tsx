import React, { FC, useEffect, useState, memo } from 'react';
import { AxiosError } from 'axios';
import { Loader } from '@consta/uikit/Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDebounce } from '../../../hooks/useDebounce';
import { usePrevious } from '../../../hooks/usePrevious';
import { AxiosPromise } from '../../../types/common';
import { IAxiosPaginatedResponse } from '../../../types/interfaces/common';
import useStyles from './styles';

type ComponentProps<T> = {
  data: T[];
  [key: string]: any;
  onReferralClick?: (id: number) => void;
};

type DefaultQueries = {
  search?: string;
  [key: string]: any;
};

interface IProps<T, U> {
  getList: (
    page: number,
    limit: number,
    queries: U
  ) => AxiosPromise<IAxiosPaginatedResponse<T>>;
  listComponent: FC<ComponentProps<any>>;
  listProps?: any;
  queries?: U;
  limit?: number;
  onStartCallback?: () => void;
  successCallback?: (data: any) => void;
  errorCallback?: (err?: AxiosError) => void;
}

// eslint-disable-next-line @typescript-eslint/ban-types
const Pagination = <T extends object, U extends DefaultQueries>({
  getList,
  listComponent: Component,
  listProps,
  limit = 10,
  onStartCallback,
  successCallback,
  errorCallback,
  queries = {} as U,
}: IProps<T, U>) => {
  const [page, setPage] = useState(1);
  const [initialLoading, setInitialLoading] = useState(false);
  const [state, setState] = useState<{ count: number; data: T[] }>({
    count: 0,
    data: [],
  });
  const previousPage = usePrevious(page);
  const styles = useStyles();

  const debouncedQueries = useDebounce(queries, 300);

  // useEffect(() => {
  //   setState({
  //     count: 0,
  //     data: [],
  //   });
  // }, []);

  useEffect(() => {
    setPage(1);
    setState({
      count: 0,
      data: [],
    });
  }, [queries]);

  useEffect(() => {
    onStartCallback && onStartCallback();
    page === 1 && setInitialLoading(true);

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
        page === 1 && setInitialLoading(false);
      });
  }, [page, debouncedQueries]);

  useEffect(() => {
    successCallback && successCallback(state.data);
  }, [state]);

  return (
    <div className={styles.root}>
      {initialLoading ? (
        <Loader className={styles.loader} />
      ) : (
        <InfiniteScroll
          dataLength={state.data.length}
          next={() => setPage(page + 1)}
          className={styles.scroll}
          hasMore={page * limit < state.count}
          scrollThreshold={0.9}
          loader={<Loader className={styles.loader} />}
        >
          <Component data={state.data} {...listProps} />
        </InfiniteScroll>
      )}
    </div>
  );
};

export default memo(Pagination);
