import React from 'react';
import useStyles from './styles';
import Flex from '../../../Common/Flex';
import { useTranslation } from 'react-i18next';
import Typography from '../../../Common/Typography';
import { Button } from '@consta/uikit/Button';

const Header = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <Flex padding={'52px 20px'} margin={'0 auto 36px'} align={'center'}>
        <div>
          <Button
            form={'round'}
            label={'Маркетинг'}
            className={styles.signUp}
          />
          <Typography margin={'24px 24px 36px 0'} size={'4xl'} weight={'bold'}>
            Формулы и функции Excel, которые упростят вам жизнь
          </Typography>
          <Button
            size="l"
            label={t('webinar.signUp')}
            className={styles.signUp}
          />
        </div>
        <div className={styles.square}></div>
      </Flex>
    </div>
  );
};

export default Header;
