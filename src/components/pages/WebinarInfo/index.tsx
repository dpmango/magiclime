import React, { FC } from 'react';
import useStyles from './styles';
import { useTranslation } from 'react-i18next';

const WebinarInfo: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <p>{t('webinar.hello')}</p>
    </div>
  );
};

export default WebinarInfo;
