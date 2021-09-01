/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/no-danger */
import React, { FC, useEffect, useState, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { Avatar } from '@consta/uikit/Avatar';

import Flex from 'components/Common/Flex';
import Typography from 'components/Common/Typography';
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

  const { articles } = useSelector((state: RootState) => state.article);
  const [data, setData] = useState<IArticle | Record<string, never>>({});

  const storeArticleShort = useMemo((): IArticle | Record<string, never> => {
    const article = articles.find((x) => x.id === parseInt(params.id, 10));

    return article || {};
  }, [articles]);

  const timestamp = useMemo((): string => {
    const date = data!.date || storeArticleShort!.date;
    const formatedDate = moment(date).format('DD-MM-YYYY, hh:mm A');

    return `•   ${formatedDate}`;
  }, [data, storeArticleShort]);

  const fetchArticle = useCallback(async (id: string) => {
    const [err, data] = await getArticleByIdService(id);

    if (err) {
      console.log({ err });
    }

    setData(data || {});
  }, []);

  useEffect(() => {
    fetchArticle(params.id);
  }, [params.id]);

  useEffect(() => {
    if (!articles || articles.length === 0) {
      dispatch(getArticles({}));
    }
  }, [articles]);

  return (
    <div className={styles.root}>
      <Flex>
        <div className={styles.content}>
          <Flex align="center" wrap="wrap">
            <Flex align="center" className={styles.user}>
              <Avatar
                size="s"
                name={data!.author || storeArticleShort!.author}
                url={
                  (data!.author_image && data!.author_image.image) ||
                  (storeArticleShort!.author_image &&
                    storeArticleShort!.author_image.image)
                }
              />
              <Typography weight="semibold" margin="0 0 0 10px">
                {data!.author || storeArticleShort!.author}
              </Typography>
            </Flex>

            <Typography
              size="xs"
              margin="0 0 0 10px"
              view="secondary"
              className={styles.date}
            >
              {timestamp}
            </Typography>
          </Flex>

          <Typography
            as="h1"
            margin="16px 0 32px"
            size="4xl"
            weight="semibold"
            lineHeight="s"
          >
            {data!.title || storeArticleShort!.title}
          </Typography>
          <div
            className={sharedStyles.wysiwyg}
            dangerouslySetInnerHTML={{
              __html: storeArticleShort!.text,
            }}
          />
        </div>

        {/* <Navigation
          sections={sections}
          onSectionClick={handleSectionClick}
          activeSectionId={activeSectionId}
        /> */}
      </Flex>
    </div>
  );
};

export default ArticlePage;
