import React, { FC, useState } from 'react';
import { Tabs } from '@consta/uikit/Tabs';
import { Grid, GridItem } from '@consta/uikit/Grid';
import {
  Head,
  ProgramList,
  Achivements,
  Events,
  Courses,
} from 'components/Profile';

import useStyles from './styles';
import {
  mockPrograms,
  mockAchivements,
  mockEvents,
  mockCourses,
} from './mockData';

interface ITabs {
  id: number;
  slug: string;
  label: string;
}

const tabs: ITabs[] = [
  { id: 1, slug: '/', label: 'Основное' },
  { id: 2, slug: '/balance', label: 'Баланс' },
  { id: 3, slug: '/referal', label: 'Рефералы' },
  { id: 4, slug: '/settings', label: 'Настройки' },
];

const ProfilePage: FC = () => {
  const styles = useStyles();

  const [tab, setTab] = useState<ITabs>(tabs[0]);

  return (
    <div className={styles.root}>
      <Head />

      <Tabs
        value={tab}
        onChange={({ value }) => setTab(value)}
        items={tabs}
        getLabel={(item) => item.label}
        size="m"
        className={styles.tabs}
      />

      {/* TODO - should be refactored to Router Switch ? */}
      {tab.id === 1 && (
        <>
          <div className={styles.section}>
            <ProgramList list={mockPrograms} />
          </div>
          <div className={styles.section}>
            <Grid
              cols="1"
              gap="xl"
              breakpoints={{
                m: {
                  cols: 2,
                },
              }}
            >
              <GridItem>
                <Achivements groups={mockAchivements} />
              </GridItem>
              <GridItem>
                <Events list={mockEvents} />
              </GridItem>
            </Grid>
          </div>
          <div className={styles.section}>
            <Courses list={mockCourses} />
          </div>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
