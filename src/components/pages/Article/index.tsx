/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/no-danger */
import React, { FC, useEffect, useState, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

import Flex from 'components/Common/Flex';
import Typography from 'components/Common/Typography';
import Content from 'components/Common/Content';
import { getArticles } from 'store/reducers/article';
import { getArticleByIdService } from 'utils/api/routes/article';
import { IArticle } from 'types/interfaces/article';
import { RootState } from 'store/reducers/rootReducer';

import useSharedStyles from 'assets/styles/Shared';

import useStyles from './styles';

const ArticlePage: FC = () => {
  const styles = useStyles();
  const sharedStyles = useSharedStyles({});
  const dispatch = useDispatch();
  const params: { id: string } = useParams();

  const articles = useSelector((state: RootState) => state.article.articles);
  const [data, setData] = useState<IArticle | Record<string, never>>({});

  // API && store
  const fetchArticle = useCallback(async (id: string) => {
    const [err, data] = await getArticleByIdService(id);

    if (err) {
      console.log({ err });
    }

    setData(data || {});
  }, []);

  const storeArticleShort = useMemo((): IArticle | Record<string, never> => {
    const article = articles.find((x) => x.id === parseInt(params.id, 10));

    return article || {};
  }, [articles]);

  // Effects
  useEffect(() => {
    fetchArticle(params.id);
  }, [params.id]);

  useEffect(() => {
    if (!articles || articles.length === 0) {
      dispatch(getArticles({}));
    }
  }, [articles]);

  // Memos
  const timestamp = useMemo((): string => {
    const date = data!.date || storeArticleShort!.date;
    const formatedDate = moment(date).format('DD-MM-YYYY, hh:mm A');

    return `•   ${formatedDate}`;
  }, [data, storeArticleShort]);

  const contentData = useMemo(
    () => ({
      author: data!.author || storeArticleShort!.author,
      author_image:
        (data!.author_image && data!.author_image.image) ||
        (storeArticleShort!.author_image &&
          storeArticleShort!.author_image.image),
      timestamp,
      title: data!.title || storeArticleShort!.title,
      text: data!.text,
    }),
    [data, storeArticleShort, timestamp]
  );

  return (
    <div className={styles.root}>
      <Flex>
        <div className={styles.content}>
          <Content data={contentData} />
        </div>
      </Flex>
    </div>
  );
};

export default ArticlePage;
