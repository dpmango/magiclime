import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import { ICourse } from 'types/interfaces/courses';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Button } from '@consta/uikit/Button';
import ConstaIcons from 'assets/icons/ConstaIcons';
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
  data: ICourse[];
}

const CoursesList: FC<IProps> = ({ data }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <Grid cols="1" gap="xl" breakpoints={{ m: { cols: 2, gap: 'xl' } }}>
        {data.map((item) => (
          <GridItem col="1" key={item.id}>
            <Course item={item} />
            {/* <SkeletonBrick height={180} /> */}
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default CoursesList;
