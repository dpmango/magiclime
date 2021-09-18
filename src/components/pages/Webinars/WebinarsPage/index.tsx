import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Button } from '@consta/uikit/Button';

import Typography from 'components/Common/Typography';
import Tags from 'components/Common/Tags';
import Pagination from 'components/Common/Pagination';
import Flex from 'components/Common/Flex';
import { RootState } from 'store/reducers/rootReducer';
import { getWebinarsList } from 'utils/api/routes/webinars';

import { IFilters } from '../types';
import List from './List';
import Filters from './Filters';
import useStyles from './styles';

const WebinarsPage: FC = () => {
  const styles = useStyles();

  const [filters, setFilters] = useState<IFilters>({
    search: '',
    categories: [],
    city: 0,
  });
  const categories = useSelector((state: RootState) => state.meta.categories);

  const handleTagsToggle = (id: number) => {
    let newValues = [...filters.categories];

    if (newValues.includes(id)) {
      newValues = newValues.filter((val) => val !== id);
    } else {
      newValues = [...newValues, id];
    }
    setFilters({ ...filters, categories: newValues });
  };

  return (
    <div className={styles.root}>
      {/* <Flex margin="0 0 48px" align="stretch"> */}
      {/*  <div> */}
      {/*    <img */}
      {/*      className={styles.banner} */}
      {/*      src="http://itd3.mycdn.me/image?id=903284457182&t=20&plc=MOBILE&tkn=*9rxsfuK2y4uAiBu_q9UfjJjZVn0" */}
      {/*      alt="Webinars banner" */}
      {/*    /> */}
      {/*  </div> */}
      {/*  <Flex */}
      {/*    margin="0 0 0 48px" */}
      {/*    direction="column" */}
      {/*    align="center" */}
      {/*    justify="space-between" */}
      {/*  > */}
      {/*    <Typography size="xs" transform="uppercase" view="secondary"> */}
      {/*      Мероприятие */}
      {/*    </Typography> */}
      {/*    <div> */}
      {/*      <Typography */}
      {/*        size="2xl" */}
      {/*        weight="semibold" */}
      {/*        margin="0 0 16px" */}
      {/*        align="center" */}
      {/*      > */}
      {/*        В Третьяковке открывается выставка немецкого и русского романтизма */}
      {/*      </Typography> */}
      {/*      <Typography size="s" view="secondary" align="center"> */}
      {/*        В Новой Третьяковке открывается выставка немецкого и русского */}
      {/*        искусства Мечты о свободе. */}
      {/*      </Typography> */}
      {/*    </div> */}
      {/*    <Button label="Смотреть" form="round" view="primary" /> */}
      {/*  </Flex> */}
      {/* </Flex> */}
      <Typography weight="semibold" size="3xl" lineHeight="l">
        Все вебинары
      </Typography>
      <div className={styles.tags}>
        <Tags
          tags={categories}
          activeTags={filters.categories}
          handleSelect={handleTagsToggle}
        />
      </div>

      <Grid cols="4" gap="xl" className={styles.main}>
        <GridItem col="3">
          <Pagination
            getList={getWebinarsList}
            listComponent={List}
            queries={filters}
          />
        </GridItem>

        <GridItem col="1">
          <Filters setFilters={setFilters} />
        </GridItem>
      </Grid>
    </div>
  );
};

export default WebinarsPage;
