import React, { FC } from 'react';
import ForMembers from './ForMembers';
import Inside from './Inside';
import Rates from './Rates';
import useStyles from './styles';

const Premium: FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Rates />
      <Inside />
      <ForMembers />
    </div>
  );
};

export default Premium;
