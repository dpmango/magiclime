import React, { FC, useMemo } from 'react';
import { Avatar } from '@consta/uikit/Avatar';
import { IconForward } from '@consta/uikit/IconForward';
import moment from 'moment';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { IClone } from 'types/interfaces/referrals';

import useStyles from './styles';

interface IProps {
  data: IClone;
  onReferralClick?: (id: number) => void;
}

const ReferralClone: FC<IProps> = ({
  data: {
    id,
    username,
    avatar,
    created_at,
    created_from_username,
    creation_reason,
  },
  onReferralClick,
}) => {
  const styles = useStyles();

  const timestamp = useMemo(() => {
    if (!created_at) {
      return ' ';
    }
    return moment(created_at).format('DD.MM.YY, HH:mm:ss');
  }, [created_at]);

  return (
    <Flex
      align="center"
      className={styles.referral}
      onClick={() => onReferralClick && onReferralClick(id || 0)}
    >
      <Flex align="center" className={styles.referralUser}>
        <Avatar
          url={avatar && avatar.image ? avatar.image : ''}
          name={username}
          className={styles.referralAvatar}
        />

        <div className={styles.referralUserWrapper}>
          <Typography weight="semibold" lineHeight="s" size="m">
            {username} [{id}]
          </Typography>
        </div>
      </Flex>

      <div className={styles.referralDate}>
        <Typography size="s" view="primary" weight="regular">
          {timestamp}
        </Typography>
      </div>

      <a
        className={styles.referralId}
        target="_blank"
        href={`${process.env.REACT_APP_API_DOMAIN}/profile/me/partners/?${creation_reason}`}
        rel="noreferrer"
      >
        <Flex align="center" justify="flex-end">
          <Typography
            margin="0 6px 0 0"
            size="s"
            view="primary"
            weight="regular"
          >
            {id}
          </Typography>
          {creation_reason && <IconForward size="s" />}
        </Flex>
      </a>
    </Flex>
  );
};

export default ReferralClone;
