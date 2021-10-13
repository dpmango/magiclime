import { Avatar } from '@consta/uikit/Avatar';
import moment from 'moment';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getInvitedUsers } from '../../../../../utils/api/routes/profile';
import Flex from '../../../../Common/Flex';
import Typography from '../../../../Common/Typography';
import { IInvitedUser } from '../types';
import useStyles from './styles';

const InvitedUsers: FC = () => {
  const { t } = useTranslation();
  const styles = useStyles();
  const [users, setUsers] = useState<IInvitedUser[]>([]);

  useEffect(() => {
    getInvitedUsers().then((res) => setUsers(res.data));
  }, []);

  return (
    <div>
      <Typography
        weight="semibold"
        lineHeight="s"
        size="2xl"
        margin="40px 0 24px"
      >
        {t('profile.referral.team.invited')}
      </Typography>
      <div>
        {users.map((user) => (
          <Flex
            align="center"
            justify="space-between"
            key={user.id}
            className={styles.user}
          >
            <Flex align="center">
              <Avatar
                url={user.avatar ? user.avatar.image : ''}
                name={user.username}
              />
              <Typography
                weight="semibold"
                lineHeight="s"
                size="m"
                margin="0 15px"
              >
                {user.username} [{t('profile.referral.card.level')} {user.level}
                ]
              </Typography>
            </Flex>
            <Typography size="s" view="primary" weight="regular">
              {moment(user.date_joined).format('DD.MM.YY, HH:mm:ss')}
            </Typography>
          </Flex>
        ))}
      </div>
    </div>
  );
};

export default InvitedUsers;
