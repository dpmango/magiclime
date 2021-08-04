import React, { FC } from 'react';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';

import useStyles from './styles';

const Events: FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Typography size="xl" weight="semibold">
        Мой счет
      </Typography>
      <div className={styles.curBalance}>
        <Typography>Текущий баланс</Typography>
        <Flex margin="8px 0 0 0" align="baseline">
          <Typography size="3xl">62.393</Typography>
          <Typography view="ghost" size="xl">
            &nbsp;BTL
          </Typography>
        </Flex>
      </div>
      <div className={styles.options}>
        <Flex align="center" className={styles.option}>
          <Typography
            view="ghost"
            lineHeight="s"
            size="xs"
            className={styles.optionLabel}
          >
            Доступно для вывода
          </Typography>
          <Flex align="baseline">
            <Typography size="2xl">567</Typography>
            <Typography view="ghost">&nbsp;BTL</Typography>
          </Flex>
        </Flex>

        <Flex align="center" className={styles.option}>
          <Typography
            view="ghost"
            lineHeight="s"
            size="xs"
            className={styles.optionLabel}
          >
            Всего заработано
          </Typography>
          <Flex align="baseline">
            <Typography size="2xl">4 567</Typography>
            <Typography view="ghost">&nbsp;BTL</Typography>
          </Flex>
        </Flex>

        <Flex align="center" className={styles.option}>
          <Typography
            view="ghost"
            lineHeight="s"
            size="xs"
            className={styles.optionLabel}
          >
            Всего выведено
          </Typography>
          <Flex align="baseline">
            <Typography size="2xl">12 567</Typography>
            <Typography view="ghost">&nbsp;BTL</Typography>
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default Events;
