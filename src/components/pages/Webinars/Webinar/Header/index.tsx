import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@consta/uikit/Button';
import { IWebinar } from '../../types';
import useStyles from './styles';
import Flex from '../../../../Common/Flex';
import Typography from '../../../../Common/Typography';

const Header: FC<{ webinar: IWebinar }> = ({ webinar }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <Flex padding="52px 40px" margin="0 auto 36px" align="center">
        <div className={styles.w100}>
          <Flex wrap="wrap" className={styles.tagsContainer}>
            {webinar.categories.map((tag) => (
              <Button
                key={tag.id}
                form="round"
                label={tag.title}
                size="xs"
                className={styles.signUp}
              />
            ))}
          </Flex>
          <Typography
            margin="24px 24px 36px 0"
            weight="semibold"
            className={styles.title}
          >
            {webinar.title}
          </Typography>
          <Button
            as="a"
            target="_blank"
            href={webinar.connect_url}
            size="l"
            label={t('webinar.signUp')}
            className={styles.signUp}
          />
        </div>
        <div className={styles.square} />
      </Flex>
    </div>
  );
};

export default Header;
