import React, { FC, useEffect, useState, useMemo, ReactElement } from 'react';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Avatar } from '@consta/uikit/Avatar';
import { useTranslation } from 'react-i18next';
import ConstaIcons from 'assets/icons/ConstaIcons';
import useStyles from './styles';
import { list } from './mockData';

interface IProps {
  sort?: string;
}

const ForumList: FC<IProps> = ({ sort }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      {list &&
        list.map(
          (x): ReactElement => (
            <Flex className={styles.card} key={x.id}>
              <div className={styles.cardAvatar}>
                <Avatar url={x.author.avatar || ''} name={x.author.name} />
              </div>
              <div className={styles.cardContent}>
                <Typography size="xl" weight="semibold">
                  {x.title}
                </Typography>
                <Flex align="center" wrap="wrap" margin="8px 0 0">
                  <Typography size="m" view="ghost">
                    {x.timestamp}
                  </Typography>

                  <Typography margin="0 0 0 12px" size="m" view="ghost">
                    {t('forum.card.from')} {x.author.name}
                  </Typography>
                </Flex>
              </div>
              <div className={styles.cardMeta}>
                <Flex align="baseline">
                  <ConstaIcons.Comment size="s" />
                  <Typography margin="0 0 0 6px" size="m" view="ghost">
                    {x.unread}
                  </Typography>
                </Flex>
              </div>
            </Flex>
          )
        )}
    </div>
  );
};

export default ForumList;
