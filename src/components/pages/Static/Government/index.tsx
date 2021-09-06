/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/no-danger */
import React, { FC, useEffect, useState, useCallback, useMemo } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Checkbox } from '@consta/uikit/Checkbox';
import { Button } from '@consta/uikit/Button';
import moment from 'moment';

import Flex from 'components/Common/Flex';
import Typography from 'components/Common/Typography';
import Content from 'components/Common/Content';

import useStyles from './styles';

const GovernmentPage: FC = () => {
  const styles = useStyles();
  const history = useHistory();

  const [agreement, setAgreement] = useState(false);

  const contentData = {
    author: 'MagicLime',
    title: 'Система запросов Binance для правоохранительных органов',
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

          <div className={styles.checkbox}>
            <Checkbox
              align="top"
              label="Настоящим я заявляю, что являюсь представителем правоохранительных органов или государственным должностным лицом и у меня есть полномочия отправлять запросы для правоохранительных органов или запросы информации от Binance, а доступ к информации предоставляется в рамках профессиональной деятельности. Я понимаю, что в случае несанкционированного запроса это может повлечь за собой судебное преследование. Для получения дополнительной информации см. Руководство Binance для правоохранительных органов."
              checked={agreement}
              onClick={() => setAgreement(!agreement)}
            />
          </div>

          <div className={styles.cta}>
            <Button
              label="Запросить доступ"
              disabled={!agreement}
              onClick={() => history.push('/home/info/government/request')}
            />
          </div>
        </div>
      </Flex>
    </div>
  );
};

export default GovernmentPage;
