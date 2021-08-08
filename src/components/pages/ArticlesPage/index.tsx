import React, { FC, useState, useEffect } from 'react';
import { Grid, GridItem } from '@consta/uikit/Grid';
import Typography from 'components/Common/Typography';
import { Tags } from 'components/Courses';
import { getArticles } from 'store/reducers/article';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers/rootReducer';
import { IArticle } from 'types/interfaces/article';

import { ArticleCard } from 'components/Article';
import { tags } from './mockData';
import useStyles from './styles';

const ArticlePage: FC = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const { articles } = useSelector((state: RootState) => state.article);
  const [activeTags, setActiveTags] = useState<number[]>([]);

  const handleTagsToggle = (id: number) => {
    let newValues = [...activeTags];

    if (newValues.includes(id)) {
      newValues = newValues.filter((val) => val !== id);
    } else {
      newValues = [...newValues, id];
    }
    setActiveTags(newValues);
  };

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  return (
    <div className={styles.root}>
      <Typography weight="semibold" size="3xl" lineHeight="s">
        База знаний
      </Typography>
      <div className={styles.tags}>
        <Tags
          tags={tags}
          activeTags={activeTags}
          handleSelect={handleTagsToggle}
        />
      </div>
      <Grid cols="3" gap="xl" className={styles.main}>
        {articles &&
          articles.map((article: IArticle) => (
            <GridItem key={article.id}>
              <ArticleCard data={article} />
            </GridItem>
          ))}
      </Grid>
    </div>
  );
};

export default ArticlePage;