import { makeStyles } from '@material-ui/core';
import React, { FC, useEffect, useState } from 'react';
import Flex from '../../Common/Flex';
import NewsItemCard from './NewsItemCard';

const useStyles = makeStyles({
  root: {
    maxWidth: '1210px',
    borderLeft: '1px solid #4247700f',
    borderRight: '1px solid #4247700f',
  },
});

const News: FC = () => {
  const [news, setNews] = useState([{ id: 1 }, { id: 2 }]);
  const styles = useStyles();

  useEffect(() => {}, []);

  return (
    <Flex
      direction="column"
      margin="0 auto"
      padding="48px 40px 50px"
      className={styles.root}
    >
      {news.map((item) => (
        <NewsItemCard key={item.id} newItem={item} />
      ))}
    </Flex>
  );
};

export default News;
