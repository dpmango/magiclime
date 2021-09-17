import React, { FC } from 'react';
import { Grid, GridItem } from '@consta/uikit/Grid';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { useTranslation } from 'react-i18next';
import { useCheckDefaultTheme } from 'hooks/useCheckDefaultTheme';

import useStyles from './styles';
import useStylesRoot from '../styles';

interface IProps {
  content?: { title: string; description: string }[];
}

const CourseProcess: FC<IProps> = ({ content }) => {
  const isDefaultTheme = useCheckDefaultTheme();
  const styles = useStyles({ darkmode: !isDefaultTheme });
  const rootStyles = useStylesRoot();
  const { t } = useTranslation();

  return content && content.length ? (
    <div className={styles.root}>
      <div className={rootStyles.container}>
        <Typography
          margin="0 0 44px"
          size="4xl"
          weight="semibold"
          lineHeight="s"
        >
          {t('course.page.process.main')}&nbsp;
          <Typography
            as="span"
            view="brand"
            size="4xl"
            weight="semibold"
            lineHeight="s"
          >
            {t('course.page.process.accent')}
          </Typography>
        </Typography>

        <Grid cols="2" gap="xl">
          {content.map((x) => (
            <GridItem key={x.title}>
              <Flex className={styles.item}>
                <div className={styles.image}>
                  <img src="/images/course-process.svg" alt="course-process" />
                </div>
                <div className={styles.content}>
                  <Typography size="l m:xl" weight="semibold" lineHeight="s">
                    {x.title}
                  </Typography>
                  <Typography
                    margin="12px 0 0"
                    size="xs m:s"
                    view="secondary"
                    className={styles.description}
                  >
                    {x.description}
                  </Typography>
                </div>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </div>
    </div>
  ) : null;
};

export default CourseProcess;
