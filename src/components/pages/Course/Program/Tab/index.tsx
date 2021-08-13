import React, { FC, useState, useCallback, useRef } from 'react';
import { Badge } from '@consta/uikit/Badge';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';

import { ITab } from 'components/pages/Course/types';
import icons from 'components/pages/Course/icons';
import useStyles from './styles';

interface IProps {
  data: ITab;
}

const Tab: FC<IProps> = ({ data }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const contentRef = useRef(null);

  const styles = useStyles({
    isOpened,
    height: '100%', // todo get initial height
  });

  const handleToggle = useCallback(() => {
    setIsOpened(!isOpened);
  }, [isOpened]);

  return (
    <div className={styles.root}>
      <div
        className={styles.toggle}
        role="button"
        tabIndex={0}
        onClick={handleToggle}
      >
        <Typography size="xs" weight="semibold" view="ghost" lineHeight="s">
          {data.module}
        </Typography>
        <Flex margin="8px 0 0" align="center">
          <Typography
            margin="0 16px 0 0"
            size="l"
            weight="semibold"
            lineHeight="s"
            className={styles.title}
          >
            {data.title}
          </Typography>
          <Badge
            size="s"
            status="system"
            form="round"
            label={`${data.duration}`}
          />
        </Flex>
        <div className={styles.toggleIcon}>
          <icons.ChevronLeft size="s" />
        </div>
      </div>

      <div className={styles.content} ref={contentRef}>
        <Typography className={styles.description}>
          {data.description}
        </Typography>
      </div>
    </div>
  );
};

export default Tab;
