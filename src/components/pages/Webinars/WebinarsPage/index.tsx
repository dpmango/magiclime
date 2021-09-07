import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, GridItem } from '@consta/uikit/Grid';
import Typography from 'components/Common/Typography';
import Tags from 'components/Common/Tags';
import { Button } from '@consta/uikit/Button';
import { RootState } from 'store/reducers/rootReducer';
import { usePagination } from '../../../../hooks/usePagination';
import { getWebinarsList } from '../../../../utils/api/routes/webinars';
import List from './List';
import Filters from './Filters';
import { IWebinar } from '../types';
import useStyles from './styles';
import Flex from '../../../Common/Flex';

const WebinarsPage: FC = () => {
  const styles = useStyles();

  const [activeTags, setActiveTags] = useState<number[]>([]);
  const { data, PaginationButton } = usePagination<IWebinar>({
    getList: getWebinarsList,
    elName: 'вебинаров',
  });
  const { tags } = useSelector((state: RootState) => state.meta);

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
      <Flex margin="0 0 48px" align="stretch">
        <div>
          <img
            className={styles.banner}
            src="http://itd3.mycdn.me/image?id=903284457182&t=20&plc=MOBILE&tkn=*9rxsfuK2y4uAiBu_q9UfjJjZVn0"
            alt="Webinars banner"
          />
        </div>
        <Flex
          margin="0 0 0 48px"
          direction="column"
          align="center"
          justify="space-between"
        >
          <Typography size="xs" transform="uppercase" view="secondary">
            Мероприятие
          </Typography>
          <div>
            <Typography
              size="2xl"
              weight="semibold"
              margin="0 0 16px"
              align="center"
            >
              В Третьяковке открывается выставка немецкого и русского романтизма
            </Typography>
            <Typography size="s" view="secondary" align="center">
              В Новой Третьяковке открывается выставка немецкого и русского
              искусства Мечты о свободе.
            </Typography>
          </div>
          <Button label="Смотреть" form="round" view="primary" />
        </Flex>
      </Flex>
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
          <List items={data} button={PaginationButton} />
        </GridItem>

        <GridItem col="1">
          <Filters />
        </GridItem>
      </Grid>
    </div>
  );
};

export default WebinarsPage;
