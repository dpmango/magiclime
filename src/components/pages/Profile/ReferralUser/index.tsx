import React, { FC, useMemo } from 'react';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Avatar } from '@consta/uikit/Avatar';
import { Plurize } from 'utils/helpers/plurize';
import { useTranslation } from 'react-i18next';

import { IReferal } from 'components/pages/Profile/types';
import useStyles from './styles';

interface IProps {
  data: IReferal;
  nested?: boolean;
  root?: boolean;
}

const ReferralUser: FC<IProps> = ({ data, nested, root }) => {
  const styles = useStyles({ nested, root });
  const { t } = useTranslation();

  const referalsPlural = useMemo(() => {
    const plural = Plurize(
      data.referalsCount,
      t('profile.referalPlural.one'),
      t('profile.referalPlural.two'),
      t('profile.referalPlural.five')
    );

    return root ? data.referalsCount : `${data.referalsCount} ${plural}`;
  }, [data.referalsCount]);

  return (
    <Flex key={data.id} align="center" className={styles.referal}>
      <Flex align="center" className={styles.referalUser}>
        <Avatar
          url={data.avatar}
          name={data.username}
          className={styles.referalAvatar}
        />
        <div className={styles.referalUserWrapper}>
          <Typography weight="semibold" lineHeight="s" size={root ? 'xl' : 'm'}>
            {data.username}
          </Typography>
          {root && (
            <Typography
              size="xs"
              margin="2px 0 0 0px"
              weight="semibold"
              view="ghost"
            >
              {t('profile.referal.card.extraInfo')}
            </Typography>
          )}
        </div>
      </Flex>
      <div className={styles.referalBtl}>
        <Typography
          size={root ? 'l' : 's'}
          view={root ? 'brand' : 'primary'}
          weight={root ? 'semibold' : 'regular'}
        >
          {data.btl} BTL
        </Typography>
        {root && (
          <Typography size="xs" margin="6px 0 0" weight="semibold" view="ghost">
            {t('profile.referal.card.gain')}
          </Typography>
        )}
      </div>
      <div className={styles.referalLevel}>
        <Typography size={root ? 'l' : 's'}>{data.level}</Typography>
        {root && (
          <Typography size="xs" margin="6px 0 0" weight="semibold" view="ghost">
            {t('profile.referal.card.level')}
          </Typography>
        )}
      </div>
      <div className={styles.referalCount}>
        <Typography size={root ? 'l' : 's'} view="secondary">
          {referalsPlural}
        </Typography>
        {root && (
          <Typography size="xs" margin="6px 0 0" weight="semibold" view="ghost">
            {t('profile.referal.card.referals')}
          </Typography>
        )}
      </div>
    </Flex>
  );
};

export default ReferralUser;
