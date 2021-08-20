import React, { FC, useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@consta/uikit/Button';
import { Grid, GridItem } from '@consta/uikit/Grid';
import cns from 'classnames';

import Flex from 'components/Common/Flex';
import Typography from 'components/Common/Typography';

import useStyles from './styles';
import useRootStyles from '../styles';

const How: FC = () => {
  const styles = useStyles();
  const rootStyles = useRootStyles();
  const { t } = useTranslation();

  const [tab, setTab] = useState<number>(1);

  return (
    <div className={styles.root}>
      <div className={rootStyles.container}>
        <Typography size="3xl" weight="semibold">
          {t('landing.how.title')}
        </Typography>
        <Typography as="p" margin="24px 0 0px" size="xl">
          {t('landing.how.description')}
        </Typography>

        <Grid cols="3" gap="xl" className={styles.tabs}>
          <GridItem col="1">
            <div className={styles.tabList}>
              <div
                className={cns(styles.tab, tab === 1 && 'active')}
                role="button"
                tabIndex={0}
                onClick={() => setTab(1)}
              >
                <Typography size="xl" weight="semibold">
                  Specialisation 1
                </Typography>
                <Typography
                  margin="8px 0 0"
                  size="s"
                  lineHeight="m"
                  className={styles.tabContent}
                >
                  All information about projects, tasks, financial transactions
                  and team progress is available in a single workspace. This
                  allows you to better navigate the processes, faster make
                  decisions and complete work on time.
                </Typography>
              </div>

              <div
                className={cns(styles.tab, tab === 2 && 'active')}
                role="button"
                tabIndex={0}
                onClick={() => setTab(2)}
              >
                <Typography size="xl" weight="semibold">
                  Specialisation 2
                </Typography>
                <Typography
                  margin="8px 0 0"
                  size="s"
                  lineHeight="m"
                  className={styles.tabContent}
                >
                  All information about projects, tasks, financial transactions
                  and team progress is available in a single workspace. This
                  allows you to better navigate the processes, faster make
                  decisions and complete work on time.
                </Typography>
              </div>

              <div
                className={cns(styles.tab, tab === 3 && 'active')}
                role="button"
                tabIndex={0}
                onClick={() => setTab(3)}
              >
                <Typography size="xl" weight="semibold">
                  Specialisation 3
                </Typography>
                <Typography
                  margin="8px 0 0"
                  size="s"
                  lineHeight="m"
                  className={styles.tabContent}
                >
                  All information about projects, tasks, financial transactions
                  and team progress is available in a single workspace. This
                  allows you to better navigate the processes, faster make
                  decisions and complete work on time.
                </Typography>
              </div>

              <div
                className={cns(styles.tab, tab === 4 && 'active')}
                role="button"
                tabIndex={0}
                onClick={() => setTab(4)}
              >
                <Typography size="xl" weight="semibold">
                  Specialisation 4
                </Typography>
                <Typography
                  margin="8px 0 0"
                  size="s"
                  lineHeight="m"
                  className={styles.tabContent}
                >
                  All information about projects, tasks, financial transactions
                  and team progress is available in a single workspace. This
                  allows you to better navigate the processes, faster make
                  decisions and complete work on time.
                </Typography>
              </div>
            </div>
          </GridItem>
          <GridItem col="2">
            {tab === 1 && (
              <div className={styles.tabView}>
                <Typography
                  view="brand"
                  size="xl"
                  weight="semibold"
                  lineHeight="m"
                >
                  Tab 1
                </Typography>

                <Typography as="p" margin="12px 0 0" size="m" lineHeight="m">
                  All information about projects, tasks, financial transactions
                  and team progress is available in a single workspace. This
                  allows you to better navigate the processes, faster make
                  decisions and complete work on time.
                </Typography>
                <Typography as="p" margin="12px 0 0" size="m" lineHeight="m">
                  All information about projects, tasks, financial transactions
                  and team progress is available in a single workspace. This
                  allows you to better navigate the processes, faster make
                  decisions and complete work on time.
                </Typography>
              </div>
            )}

            {tab === 2 && (
              <div className={styles.tabView}>
                <Typography
                  view="brand"
                  size="xl"
                  weight="semibold"
                  lineHeight="m"
                >
                  Tab 2:: All information abou
                </Typography>
              </div>
            )}

            {tab === 3 && (
              <div className={styles.tabView}>
                <Typography
                  view="brand"
                  size="xl"
                  weight="semibold"
                  lineHeight="m"
                >
                  Tab 3:: All information abou
                </Typography>
              </div>
            )}

            {tab === 4 && (
              <div className={styles.tabView}>
                <Typography
                  view="brand"
                  size="xl"
                  weight="semibold"
                  lineHeight="m"
                >
                  Tab 4:: All information abou
                </Typography>
              </div>
            )}
          </GridItem>
        </Grid>
      </div>
    </div>
  );
};

export default How;
