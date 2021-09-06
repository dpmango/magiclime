/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/no-danger */
import React, { FC, useEffect, useState, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Checkbox } from '@consta/uikit/Checkbox';
import { Button } from '@consta/uikit/Button';
import moment from 'moment';

import Flex from 'components/Common/Flex';
import Typography from 'components/Common/Typography';
import Content from 'components/Common/Content';

import useStyles from './styles';

const GovernmentRequest: FC = () => {
  const styles = useStyles();
  const [agreement, setAgreement] = useState(false);

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Typography size="4xl" weight="semibold">
          Отправить запрос
        </Typography>
      </div>
    </div>
  );
};

export default GovernmentRequest;
