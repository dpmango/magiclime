import React, { FC } from 'react';
import { Grid, GridItem } from '@consta/uikit/Grid';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import ConstaIcons from 'assets/icons/ConstaIcons';
import { useTranslation } from 'react-i18next';
import { useCheckDefaultTheme } from 'hooks/useCheckDefaultTheme';

import useStyles from './styles';
import useStylesRoot from '../styles';

interface IProps {
  content?: { title: string; description: string }[];
}

const CourseSkills: FC<IProps> = ({ content }) => {
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
          {t('course.page.skills.main')}&nbsp;
          <Typography
            as="span"
            view="brand"
            size="4xl"
            weight="semibold"
            lineHeight="s"
          >
            {t('course.page.skills.accent')}
          </Typography>
        </Typography>

        <Grid cols="3" colGap="xl" rowGap="2xl">
          {content.map((x) => (
            <GridItem key={x.title}>
              <Flex className={styles.item}>
                <div className={styles.icon}>
                  <ConstaIcons.ServicesOutline view="success" />
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

export default CourseSkills;
