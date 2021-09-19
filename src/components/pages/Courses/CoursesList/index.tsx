import React, { FC, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Grid, GridItem } from '@consta/uikit/Grid';

import { ICourse } from 'types/interfaces/courses';

import Course from './Course';
import CourseBuyModal from './CourseBuyModal';

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
});

interface IProps {
  data: ICourse[];
}

export interface IModalProps {
  opened: boolean;
  id: number | string;
  loading: boolean;
}

const CoursesList: FC<IProps> = ({ data }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const [modalState, setModalState] = useState<IModalProps>({
    opened: false,
    id: 0,
    loading: false,
  });

  return (
    <div className={styles.root}>
      <Grid cols="1" gap="xl" breakpoints={{ m: { cols: 2, gap: 'xl' } }}>
        {data.map((item) => (
          <GridItem col="1" key={item.id}>
            <Course
              item={item}
              openModal={(id) =>
                setModalState({ ...modalState, ...{ opened: true, id } })
              }
            />
            {/* <SkeletonBrick height={180} /> */}
          </GridItem>
        ))}
      </Grid>

      <CourseBuyModal modalState={modalState} setModalState={setModalState} />
    </div>
  );
};

export default CoursesList;
