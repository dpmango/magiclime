import React, { FC, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Button } from '@consta/uikit/Button';
import { toast } from 'react-hot-toast';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import BaseModal from 'components/Common/BaseModal';
import { ICourse } from 'types/interfaces/courses';
import { buyCourseService } from 'utils/api/routes/courses';

import Course from './Course';

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  modalCta: {
    '& .Button': {
      marginRight: 16,
    },
  },
});

interface IProps {
  data: ICourse[];
}

interface IModalProps {
  opened: boolean;
  id: number | string;
  loading: boolean;
}

const CoursesList: FC<IProps> = ({ data }) => {
  const styles = useStyles();
  const history = useHistory();
  const { t } = useTranslation();

  const [modalState, setModalState] = useState<IModalProps>({
    opened: false,
    id: 0,
    loading: false,
  }); // todo - useReducer?

  const handleBuyCourse = useCallback(async () => {
    setModalState({
      ...modalState,
      loading: true,
    });

    const [err, data] = await buyCourseService(modalState.id);

    if (err) {
      console.log('todo - err handling money/already bought', err);
      toast.error(t('course.buy.error'));
      return;
    }
    toast(t('course.buy.success'));
    history.push(`/courses/${modalState.id}`);

    setModalState({
      id: 0,
      opened: false,
      loading: false,
    });
  }, [modalState]);

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

      <BaseModal
        theme="narrow"
        isOpen={modalState.opened}
        setModalOpen={(v) => setModalState({ ...modalState, opened: v })}
        title="Купить курс ?"
      >
        <Typography margin="16px 0 0" size="l" lineHeight="s" align="center">
          После покупки курса вам начисляться бонусные баллы. За прохождение
          курса вы сможете получить очки рейтинга, благодаря которым можно
          прокачивать своего аватара.
        </Typography>

        <Flex
          align="center"
          justify="center"
          margin="32px 0 0"
          className={styles.modalCta}
        >
          <Button label={t('common.actions.buy')} onClick={handleBuyCourse} />
          <Button
            label={t('common.actions.cancel')}
            view="secondary"
            onClick={() => setModalState({ ...modalState, opened: false })}
          />
        </Flex>
      </BaseModal>
    </div>
  );
};

export default CoursesList;
