import React, { FC, useCallback, useRef, useState } from 'react';
import { IWebinar } from 'components/pages/Webinars/types';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Button } from '@consta/uikit/Button';
import { Avatar } from '@consta/uikit/Avatar';
import { useHistory } from 'react-router-dom';
import cns from 'classnames';
import { v4 as uuid } from 'uuid';
import { IconKebab } from '@consta/uikit/IconKebab';
import { Badge } from '@consta/uikit/Badge';
import { IconWarning } from '@consta/uikit/IconWarning';
import { ContextMenu } from '@consta/uikit/ContextMenu';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { ComponentType } from '../../../../../../types/common';
import useStyles from './styles';
import Members from '../../../../../Common/Members';

interface IProps {
  item: IWebinar;
}

type DropdownItem = {
  name: string;
  icon: ComponentType;
};

const WebinarCard: FC<IProps> = ({ item }) => {
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

      <Flex justify="space-between" align="center" margin="6px 0">
        <Flex className={styles.tagsContainer} wrap="wrap">
          {item.categories.map((tag) => (
            <Badge label={tag.title} status="warning" key={tag.id} />
          ))}
        </Flex>
        <Button
          onlyIcon
          ref={ref}
          view="clear"
          iconLeft={IconKebab}
          onClick={() => setOpen(!open)}
        />
        {open && (
          <ContextMenu
            items={items}
            getLabel={(item: DropdownItem) => item.name}
            anchorRef={ref}
            size="s"
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
          <Typography
            className={styles.date}
            margin="8px 0 0"
            view="brand"
            weight="semibold"
          >
            {moment(item.date).format('D MMMM, HH:mm')}
          </Typography>
          <Typography size="s" margin="8px 0 0">
            <span className={styles.speakers}>{t('webinar.speakers')}:</span>
            {item.speakers.map((speaker, index, array) => (
              <span key={speaker.id}>
                {speaker.name}{' '}
                {`${speaker.surname}${index === array.length - 1 ? '' : ' ,'}`}
              </span>
            ))}
          </Typography>
        </div>

        <Flex align="center" justify="space-between" className={styles.cta}>
          <Button
            onClick={() => history.push(`/webinars/${item.id}/`)}
            form="round"
            size="s"
            label={t('common.moreDetails')}
          />

          {/* <Flex align="center" className={styles.referralWrapper}> */}
          {/*  {item.referrals && ( */}
          {/*    <Members */}
          {/*      members={item.referrals} */}
          {/*      className={styles.referralUsers} */}
          {/*    /> */}
          {/*  )} */}
          {/*  <Avatar */}
          {/*    className={styles.author} */}
          {/*    name={item.author.name} */}
          {/*    form="default" */}
          {/*    url={item.author.avatar} */}
          {/*    size="m" */}
          {/*  /> */}
          {/* </Flex> */}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default WebinarCard;
