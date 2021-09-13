import React, { FC, useMemo, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { IUserRating } from 'types/interfaces/rating';

import UserRatingCard from './UserCard';
import useStyles from './styles';
import { list } from './mockData';

const RatingList: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  // todo - sorting should be backed based
  const listSorted = useMemo(() => {
    if (list && list.length) {
      return list.sort((a, b) => a.rank - b.rank);
    }

    return [];
  }, [list]);

  return (
    <div className={styles.root}>
      <UserRatingCard data={listSorted[0]} view="primary" />

      {listSorted &&
        listSorted.map(
          (x: IUserRating): ReactElement => (
            <UserRatingCard key={x.id} data={x} view="default" />
          )
        )}
    </div>
  );
};

export default RatingList;
