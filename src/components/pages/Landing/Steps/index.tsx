import React, { FC } from 'react';
import Flex from 'components/Common/Flex';
import { Grid, GridItem } from '@consta/uikit/Grid';
import Typography from 'components/Common/Typography';

import { useTranslation } from 'react-i18next';

import useStyles from './styles';
import useRootStyles from '../styles';

const content = [
  {
    id: 1,
    step: 'Шаг 1',
    description:
      'At Hanzo, we are not driven by profit but rather a deep appreciation for great design',
  },
  {
    id: 2,
    step: 'Шаг 2',
    description:
      'At Hanzo, we are not driven by profit but rather a deep appreciation for great design',
  },
  {
    id: 3,
    step: 'Шаг 3',
    description:
      'At Hanzo, we are not driven by profit but rather a deep appreciation for great design',
  },
  {
    id: 4,
    step: 'Шаг 4',
    description:
      'At Hanzo, we are not driven by profit but rather a deep appreciation for great design',
  },
];

const Hero: FC = () => {
  const styles = useStyles();
  const rootStyles = useRootStyles();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <div className={rootStyles.container}>
        <Typography
          margin="0 0 36px"
          size="3xl"
          lineHeight="m"
          weight="semibold"
        >
          {t('landing.steps.title')}
        </Typography>

        <Grid cols="4" gap="xl" yAlign="center">
          {content.map((x) => (
            <GridItem col="1" key={x.id}>
              <div className={styles.card}>
                <div className={styles.cardImage} />
                <Flex direction="column">
                  <Typography size="m" margin="16px 0 0" weight="semibold">
                    {x.step}
                  </Typography>
                  <Typography
                    as="p"
                    view="secondary"
                    margin="16px 0 0"
                    size="m"
                    lineHeight="m"
                  >
                    {x.description}
                  </Typography>
                </Flex>
              </div>
            </GridItem>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Hero;
