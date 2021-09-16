import React, { FC, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers/rootReducer';
import { Grid, GridItem } from '@consta/uikit/Grid';
import cns from 'classnames';

import Typography from 'components/Common/Typography';
import { ICategory } from 'types/interfaces/meta';

import useStyles from './styles';

const ProfileStep: FC = () => {
  const styles = useStyles();
  const categories = useSelector((state: RootState) => state.meta.categories);

  const [selected, setSelected] = useState<number[]>([]);

  const handleCardClick = useCallback(
    (id: number) => {
      if (selected.includes(id)) {
        setSelected([...selected.filter((x) => x !== id)]);
      } else {
        setSelected([...selected, id]);
      }
    },
    [selected]
  );

  return (
    <>
      <div className={styles.container}>
        <Grid cols="1" breakpoints={{ s: { cols: 3 } }} gap="xl">
          {categories &&
            categories.map((category: ICategory) => (
              <GridItem col="1" key={category.id}>
                <div
                  onClick={() => handleCardClick(category.id)}
                  className={cns(
                    styles.card,
                    selected.includes(category.id) && 'active'
                  )}
                >
                  <div className={styles.cardImage} />
                  <Typography
                    margin="16px 0 0"
                    size="s"
                    weight="semibold"
                    align="center"
                    transform="uppercase"
                    className={styles.cardTitle}
                  >
                    {category.title}
                  </Typography>
                </div>
              </GridItem>
            ))}
        </Grid>
      </div>
    </>
  );
};

export default ProfileStep;
