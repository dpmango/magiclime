/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, ReactElement, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import groupBy from 'lodash/groupBy';
import cns from 'classnames';
import { IconCheck } from '@consta/uikit/IconCheck';
import { IconArrowRight } from '@consta/uikit/IconArrowRight';
import { Button } from '@consta/uikit/Button';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { IUser } from 'types/interfaces/user';
import {
  IAchievementGroup,
  IActivementsGrouped,
  IAchievement,
} from 'types/interfaces/profile';

import useStyles from './styles';

interface IProps {
  profile: IUser;
  isMyProfile: boolean;
}

const Achievements: FC<IProps> = ({ profile, isMyProfile }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const groups: IActivementsGrouped[] = useMemo(() => {
    const grouped = groupBy(
      profile.achievements as IAchievement[],
      (x: any) => x.group.id
    );

    if (grouped) {
      return Object.keys(grouped)
        .slice(0, 3)
        .map((key) => {
          const groupIn: IAchievementGroup = grouped[key][0]
            .group as IAchievementGroup;

          const compleatedIds = grouped[key]
            .filter((x) => x.opened)
            .map((x) => x.id);

          return {
            id: groupIn.id,
            title: groupIn.title,
            image: groupIn.image,
            list: grouped[key].slice(0, 3),
            stats: {
              completed: compleatedIds.length,
              total: grouped[key].length,
            },
          };
        });
    }

    return [];
  }, [profile.achievements]);

  return (
    <Flex direction="column" className={styles.root}>
      <Typography weight="semibold" lineHeight="s" size="2xl">
        {t('profile.achievements.title')}
      </Typography>

      <Flex direction="column" align="stretch" className={styles.box}>
        {groups && groups.length ? (
          <>
            <div className={styles.boxList}>
              {groups.map((group) => (
                <Flex className={styles.group} key={group.id}>
                  <div className={styles.groupImage}>
                    {group.image && (
                      <img src={group.image.image} alt={group.title} />
                    )}
                  </div>
                  <div className={styles.groupContent}>
                    <Flex align="center" justify="space-between">
                      <Typography
                        weight="semibold"
                        lineHeight="s"
                        size="m"
                        className={styles.groupTitle}
                      >
                        {group.title}
                      </Typography>
                      <div className={styles.groupStats}>
                        <Typography
                          as="span"
                          view="secondary"
                          weight="semibold"
                          lineHeight="2xs"
                          size="2xs"
                        >
                          {group.stats.completed}/{group.stats.total}
                        </Typography>
                      </div>
                    </Flex>

                    {group.list &&
                      group.list.map(
                        (achievement: IAchievement): ReactElement => (
                          <Flex
                            align="center"
                            className={styles.achievement}
                            key={achievement.id}
                          >
                            <div
                              className={cns(
                                styles.achievementIcon,
                                achievement.opened && 'compleated'
                              )}
                            >
                              <IconCheck />
                            </div>
                            <Typography
                              view="secondary"
                              lineHeight="s"
                              size="s"
                            >
                              {achievement.title}
                            </Typography>
                          </Flex>
                        )
                      )}
                  </div>
                </Flex>
              ))}
            </div>
            <Link to="/profile/me/settings/achievements">
              <Button
                label="Смотреть все"
                size="s"
                view="secondary"
                className={styles.boxCta}
                iconRight={IconArrowRight}
              />
            </Link>
          </>
        ) : (
          <Typography
            view="secondary"
            weight="semibold"
            lineHeight="s"
            size="xl"
            align="center"
          >
            Достижения еще не открыты
          </Typography>
        )}
      </Flex>
    </Flex>
  );
};

export default Achievements;
