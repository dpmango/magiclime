import React, { FC } from 'react';
import EmptyChat from '../../../../../assets/images/empty-chat.svg';
import Typography from '../../../../Common/Typography';
import useStyles from '../styles';

const Empty: FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.empty}>
      <EmptyChat />
      <Typography
        lineHeight="l"
        align="center"
        className={styles.chooseChat}
        size="xl"
        margin="30px auto 0"
      >
        Выберите чат, чтобы начать переписку или создайте новую беседу
      </Typography>
    </div>
  );
};

export default Empty;
