import React, { FC } from 'react';
import useStyles from './styles';
import { useTranslation } from 'react-i18next';
import Header from './Header';

const WebinarInfo: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <Header />
    </div>
  );
};

export default WebinarInfo;
