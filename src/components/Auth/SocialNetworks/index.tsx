import React from 'react';
import Flex from '../../Common/Flex';
import { FacebookLogo, GoogleLogo, VKLogo } from '../../../assets/icons';
import useStyles from './styles';

const SocialNetworks = () => {
  const styles = useStyles();

  return (
    <Flex justify={'center'}>
      <div className={styles.service}>
        <VKLogo />
      </div>
      <div className={styles.service}>
        <GoogleLogo />
      </div>
      <div className={styles.service}>
        <FacebookLogo />
      </div>
    </Flex>
  );
};

export default SocialNetworks;
