// import { useDispatch, useSelector } from 'react-redux';
import Typography from 'components/Common/Typography';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import useRootStyles from '../styles';
import Apply from './Apply';
import IncomingApplications from './Incoming';

import OutcomingApplications from './Outcoming';

import useStyles from './styles';

const ProfileApplications: FC = () => {
  const styles = useStyles();
  const rootStyles = useRootStyles();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <div className={rootStyles.section}>
        <div className={styles.text}>
          <Typography weight="semibold" lineHeight="s" size="2xl">
            Что такое заявка?
          </Typography>

          <Typography margin="12px 0 0" lineHeight="m" size="s">
            Заявка это возможность доверить покупку места в матрице вашему
            пригласителю. Он сможет выбрать оптимальное место, чтобы поставить
            Вас. Деньги будут списаны с вашего счета. После открытия матрицы, Вы
            сможете самостоятельно выбирать порядок размещения дальнейших мест в
            ней.
          </Typography>
        </div>

        <Typography
          margin="24px 0 0"
          weight="semibold"
          lineHeight="s"
          size="2xl"
        >
          {t('profile.applications.title')}
        </Typography>

        <IncomingApplications />
      </div>

      {/* next section */}
      <div className={rootStyles.section}>
        <Apply />
      </div>

      <div className={rootStyles.section}>
        <Typography
          margin="24px 0 0"
          weight="semibold"
          lineHeight="s"
          size="2xl"
        >
          {t('profile.applications.my.title')}
        </Typography>

        <OutcomingApplications />
      </div>
    </div>
  );
};

export default ProfileApplications;
