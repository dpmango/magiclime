import React, { FC, useState } from 'react';
import shuffle from 'lodash/shuffle';
import { Grid, GridItem } from '@consta/uikit/Grid';
import Typography from 'components/Common/Typography';
import Tags from 'components/Common/Tags';
import WebinarsList from './WebinarsList';
import Filters from './Filters';
import { IWebinar } from './types';

import { tags, mockWebinars } from './mockData';
import useStyles from './styles';

const WebinarsPage: FC = () => {
  const styles = useStyles();

  const [webinars, setCourses] = useState<IWebinar[]>(mockWebinars);
  const [activeTags, setActiveTags] = useState<number[]>([]);

  const getMore = () => {
    const newWebinars = shuffle(
      mockWebinars.map((x) => ({
        ...x,
        id: x.id + 1,
      }))
    );
    setCourses([...webinars, ...newWebinars]);
  };

  const handleTagsToggle = (id: number) => {
    let newValues = [...activeTags];

    if (newValues.includes(id)) {
      newValues = newValues.filter((val) => val !== id);
    } else {
      newValues = [...newValues, id];
    }
    setActiveTags(newValues);
  };

  return (
    <div className={styles.root}>
      <Typography weight="semibold" size="3xl" lineHeight="l">
        Все вебинары
      </Typography>
      <div className={styles.tags}>
        <Tags
          tags={tags}
          activeTags={activeTags}
          handleSelect={handleTagsToggle}
        />
      </div>

      <Grid cols="4" gap="xl" className={styles.main}>
        <GridItem col="3">
          <WebinarsList items={webinars} hasMore getMore={getMore} />
        </GridItem>

        <GridItem col="1">
          <Filters />
        </GridItem>
      </Grid>
    </div>
  );
};

export default WebinarsPage;
