import { Button } from '@consta/uikit/Button';
import moment from 'moment';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cns from 'classnames';
import { blockUser } from '../../../../../utils/api/routes/admin';
import Flex from '../../../../Common/Flex';
import Typography from '../../../../Common/Typography';
import { IUserListItem } from '../types';
import useStyles from './styles';

const UserInfo: FC<{ user: IUserListItem }> = ({ user }) => {
  const { t } = useTranslation();
  const styles = useStyles();

  const banUser = () => {
    blockUser(user.id).then(() => {});
  };

  const editUser = () => {};

  const resetPassword = () => {};

  return (
    <>
      <div className={styles.root}>
        <div>
          <Typography view="secondary" size="xs" margin="0 0 2px">
            {t('admin.users.registrationDate')}
          </Typography>
          <Typography size="s">
            {moment(user.date_joined).format('L')}
          </Typography>
        </div>
        <div>
          <Typography view="secondary" size="xs" margin="0 0 2px">
            {t('admin.users.lastLogin')}
          </Typography>
          <Typography size="s">
            {moment(user.last_login).format('L')}
          </Typography>
        </div>
        <div />
        <div>
          <Typography view="secondary" size="xs" margin="0 0 2px">
            {t('admin.users.email')}
          </Typography>
          <Typography size="s">{user.email}</Typography>
        </div>
        <div>
          <Typography view="secondary" size="xs" margin="0 0 2px">
            {t('admin.users.inviting')}
          </Typography>
          <Typography size="s">{user.parent_username}</Typography>
        </div>
        <div />
        <div>
          <Typography view="secondary" size="xs" margin="0 0 2px">
            {t('admin.users.profileLink')}
          </Typography>
          <Typography size="s">{user.balance}</Typography>
        </div>
        <div>
          <Typography view="secondary" size="xs" margin="0 0 2px">
            {t('admin.users.finances')}
          </Typography>
          <Typography size="s">{user.balance}</Typography>
        </div>
        <div>
          <Typography view="secondary" size="xs" margin="0 0 2px">
            {t('admin.users.actions')}
          </Typography>
          <Typography size="s">{user.balance}</Typography>
        </div>
        <div className={styles.referral}>
          <Typography view="secondary" size="xs" margin="0 0 2px">
            {t('admin.users.referralCode')}
          </Typography>
          <Typography size="s">{user.referral_number}</Typography>
        </div>
      </div>
      <Flex margin="35px auto 0" className={styles.buttonsWrapper}>
        <Button
          view="secondary"
          label={t('admin.users.ban')}
          className={cns(styles.button, styles.red)}
          onClick={banUser}
        />
        <Button
          view="secondary"
          label={t('admin.users.edit')}
          className={cns(styles.button, styles.green)}
          onClick={editUser}
        />
        <Button
          view="secondary"
          label={t('admin.users.resetPass')}
          className={cns(styles.button, styles.green)}
          onClick={resetPassword}
        />
      </Flex>
    </>
  );
};

export default UserInfo;
