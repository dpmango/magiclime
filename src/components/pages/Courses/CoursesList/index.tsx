import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import { ICourse } from 'types/interfaces/courses';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Button } from '@consta/uikit/Button';
import SvgIcon from 'components/Common/SvgIcon';
// import { SkeletonBrick } from '@consta/uikit/Skeleton';
import { useTranslation } from 'react-i18next';
import Course from './Course';

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  button: {
    margin: '40px auto 0',
    display: 'flex',
  },
});

interface IProps {
  items: ICourse[];
  getMore: () => void;
  hasMore?: boolean;
}

const CoursesList: FC<IProps> = ({ items, hasMore = false, getMore }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <Grid cols="1" gap="xl" breakpoints={{ m: { cols: 2, gap: 'xl' } }}>
        {items.map((item) => (
          <GridItem col="1" key={item.id}>
            <Course item={item} />
            {/* <SkeletonBrick height={180} /> */}
          </GridItem>
        ))}
      </Grid>

      {hasMore && (
        <Button
          label={t('course.list.more')}
          view="secondary"
          onClick={getMore}
          className={styles.button}
          iconLeft={SvgIcon.Refresh}
        />
      )}
    </div>
  );
};

export default CoursesList;
