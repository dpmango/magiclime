import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@consta/uikit/Button';
import useStyles from './styles';
import Flex from '../../../Common/Flex';
import Typography from '../../../Common/Typography';

const Header = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <Flex padding="52px 40px" margin="0 auto 36px" align="center">
        <div>
          <Button form="round" label="Маркетинг" className={styles.signUp} />
          <Typography
            margin="24px 24px 36px 0"
            weight="semibold"
            className={styles.title}
          >
            Формулы и функции Excel, которые упростят вам жизнь
          </Typography>
          <Button
            size="l"
            label={t('webinar.signUp')}
            className={styles.signUp}
          />
        </div>
        <div className={styles.square} />
      </Flex>
    </div>
  );
};

export default Header;
