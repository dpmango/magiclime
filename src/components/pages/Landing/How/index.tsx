import React, { FC, useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Flex from 'components/Common/Flex';
import { Button } from '@consta/uikit/Button';
import { Grid, GridItem } from '@consta/uikit/Grid';
import Typography from 'components/Common/Typography';

import { useTranslation } from 'react-i18next';

import useStyles from './styles';
import useRootStyles from '../styles';

const How: FC = () => {
  const styles = useStyles();
  const rootStyles = useRootStyles();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <div className={rootStyles.container} />
    </div>
  );
};

export default How;
