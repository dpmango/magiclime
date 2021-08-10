import React, { FC, useMemo } from 'react';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Avatar } from '@consta/uikit/Avatar';
import { Plurize } from 'utils/helpers/plurize';
import cns from 'classnames';

import { IReferal } from 'components/pages/ProfilePage/types';
import useStyles from './styles';

interface IProps {
  data: IReferal;
  nested?: boolean;
}

const ReferralUser: FC<IProps> = ({ data, nested }) => {
  const styles = useStyles();

  const referalsPlural = useMemo(() => {
    const plural = Plurize(
      data.referalsCount,
      'реферал',
      'реферала',
      'рефералов'
    );

    return `${data.referalsCount} ${plural}`;
  }, [data.referalsCount]);

  return (
    <Flex
      key={data.id}
      align="center"
      className={cns(styles.referal, nested && 'nested')}
    >
      <Flex
        align="center"
        className={cns(styles.referalUser, nested && 'nested')}
      >
        <Avatar url={data.avatar} name={data.username} />
        <Typography margin="0 0 0 8px" weight="semibold" lineHeight="s">
          {data.username}
        </Typography>
      </Flex>
      <div className={styles.referalBtl}>
        <Typography size="s">{data.btl} BTL</Typography>
      </div>
      <div className={styles.referalLevel}>
        <Typography size="s">{data.level}</Typography>
      </div>
      <div className={styles.referalCount}>
        <Typography size="s" view="secondary">
          {referalsPlural}
        </Typography>
      </div>
    </Flex>
  );
};

export default ReferralUser;
