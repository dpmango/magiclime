import React, { FC, useEffect, useState, useMemo } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Avatar } from '@consta/uikit/Avatar';
import { useTranslation } from 'react-i18next';

import useStyles from './styles';

const ForumDetailsAnswers: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  return <div className={styles.root}></div>;
};

export default ForumDetailsAnswers;
