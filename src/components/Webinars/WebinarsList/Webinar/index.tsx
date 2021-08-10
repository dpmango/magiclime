import React, { FC } from 'react';
import { IWebinar } from 'components/pages/WebinarsPage/types';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Button } from '@consta/uikit/Button';
import { Avatar } from '@consta/uikit/Avatar';
import { useHistory } from 'react-router-dom';
import cns from 'classnames';

import useStyles from './styles';

interface IProps {
  item: IWebinar;
}

const Webinar: FC<IProps> = ({ item }) => {
  const styles = useStyles();
  const history = useHistory();

  return (
    <Flex direction="column" className={styles.root}>
      <div className={styles.image}>
        <img
          src={item.image || '/images/couse-placeholder.png'}
          alt={item.title}
        />
      </div>

      <Flex
        direction="column"
        justify="space-between"
        className={styles.content}
      >
        <Typography margin="16px 0 0" weight="semibold" size="xl">
          {item.title}
        </Typography>
        <Typography margin="8px 0 0" view="secondary" size="m">
          {item.description}
        </Typography>

        <Flex align="center" justify="space-between" className={styles.cta}>
          <Button
            onClick={() => history.push(`/webinars/${item.id}`)}
            form="round"
            size="s"
            label="Смотреть"
          />

          <Flex align="center" className={styles.referalWrapper}>
            <Flex className={styles.referalUsers}>
              {item.referals &&
                item.referals.map((u) => (
                  <Avatar
                    key={u.id}
                    url={u.avatar}
                    size="s"
                    className={styles.referalUser}
                  />
                ))}

              {item.referalsTotal > 5 && (
                <div
                  className={cns(styles.referalUser, styles.referalUserCount)}
                >
                  <span>+{item.referalsTotal - 5}</span>
                </div>
              )}
            </Flex>
            <Avatar
              className={styles.author}
              name={item.author.name}
              form="default"
              url={item.author.avatar}
              size="m"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Webinar;
