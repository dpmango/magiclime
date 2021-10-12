import React, { FC } from 'react';
import Content from 'components/Common/Content';
import Flex from 'components/Common/Flex';
import useStyles from './styles';

const Agreement: FC = () => {
  const styles = useStyles();

  const contentData = {
    author: 'MagicLime',
    title: 'Пользовательское соглашение',
    timestamp: '2021-04-06',
    text: `
      <h3>Только для правительственных и правоохранительных органов:</h3>
      <p>Добро пожаловать в систему запросов Binance для правоохранительных органов (LERS). Государственные и правоохранительные органы могут использовать эту систему для отправки информационных запросов. Binance будет рассматривать каждый случай и осуществлять сотрудничество в рамках каждого запроса для раскрытия информации в соответствии со своими Условиями использования и применимого законодательства.</p>
      <p>Чтобы получить доступ к LERS, вы должны быть представителем правоохранительных органов или государственным должностным лицом, уполномоченным собирать доказательства в связи с расследованием или делать официальный запрос в правоохранительные органы.</p>
      `,
  };

  return (
    <div className={styles.root}>
      <Flex>
        <div className={styles.content}>
          <Content data={contentData} />
        </div>
      </Flex>
    </div>
  );
};

export default Agreement;
