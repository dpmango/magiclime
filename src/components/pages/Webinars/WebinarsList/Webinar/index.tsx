import React, { FC, useCallback, useRef, useState } from 'react';
import { IWebinar } from 'components/pages/Webinars/types';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Button } from '@consta/uikit/Button';
import { Avatar } from '@consta/uikit/Avatar';
import { useHistory } from 'react-router-dom';
import cns from 'classnames';
import { v4 as uuid } from 'uuid';
import useStyles from './styles';
import { IconKebab } from '@consta/uikit/IconKebab';
import { Badge } from '@consta/uikit/Badge';
import { IconWarning } from '@consta/uikit/IconWarning';
import { ComponentType } from '../../../../../types/common';
import { ContextMenu } from '@consta/uikit/ContextMenu';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

interface IProps {
  item: IWebinar;
}

type DropdownItem = {
  name: string;
  icon: ComponentType;
};

const Webinar: FC<IProps> = ({ item }) => {
  const styles = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);
  const { t } = useTranslation();

  const items = [{ name: t('common.complain'), icon: IconWarning }];

  const renderLeftSide = useCallback((item: DropdownItem) => {
    const Icon = item.icon;
    return <Icon size="s" />;
  }, []);

  return (
    <Flex direction="column" className={styles.root}>
      <div className={styles.image}>
        <img
          src={item.image || '/images/couse-placeholder.png'}
          alt={item.title}
        />
      </div>

      <Flex justify={'space-between'} align={'center'} margin={'6px 0'}>
        <Flex className={styles.tagsContainer} wrap={'wrap'}>
          {item.tags.map((tag) => (
            <Badge label={tag} status="warning" key={uuid()} />
          ))}
        </Flex>
        <Button
          onlyIcon
          ref={ref}
          view={'clear'}
          iconLeft={IconKebab}
          onClick={() => setOpen(!open)}
        />
        {open && (
          <ContextMenu
            items={items}
            getLabel={(item: DropdownItem) => item.name}
            anchorRef={ref}
            size={'s'}
            getLeftSideBar={renderLeftSide}
            direction="downStartRight"
            onClickOutside={() => setOpen(false)}
          />
        )}
      </Flex>

      <Flex
        direction="column"
        justify="space-between"
        className={styles.content}
      >
        <div>
          <Typography className={styles.title} weight="semibold" size="xl">
            {item.title}
          </Typography>
          <Typography margin="8px 0 0" view="brand" weight="semibold">
            {'10 августа, 12:00'}
          </Typography>
          <Typography margin="8px 0 0">
            <span className={styles.speakers}>{t('webinar.speakers')}:</span>
            Елена Анатольевна, Анна Ахматова
          </Typography>
        </div>

        <Flex align="center" justify="space-between" className={styles.cta}>
          <Button
            onClick={() => history.push(`/webinars/${item.id}/`)}
            form="round"
            size="s"
            label={t('common.moreDetails')}
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
