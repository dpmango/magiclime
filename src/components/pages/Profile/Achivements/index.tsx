/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, ReactElement, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { IconCheck } from '@consta/uikit/IconCheck';
// import { IconArrowRight } from '@consta/uikit/IconArrowRight';
import { RootState } from 'store/reducers/rootReducer';
import groupBy from 'lodash/groupBy';
import cns from 'classnames';
import {
  IAchivementGroup,
  IActivementsGrouped,
  IAchivement,
} from 'components/pages/Profile/types';

import useStyles from './styles';

const Achivements: FC = () => {
  const styles = useStyles();
  // const dispatch = useDispatch();
  const { profile } = useSelector((state: RootState) => state.user);
  const { t } = useTranslation();

  const groups: IActivementsGrouped[] = useMemo(() => {
    const grouped = groupBy(
      profile.achievements as IAchivement[],
      (x: any) => x.group.id
    );

    if (grouped) {
      return Object.keys(grouped)
        .slice(0, 3)
        .map((key) => {
          const groupIn: IAchivementGroup = grouped[key][0].group;

          const compleatedIds = grouped[key]
            .filter((x) => x.opened)
            .map((x) => x.id);

          return {
            id: groupIn.id,
            title: groupIn.title,
            image: groupIn.image,
            list: grouped[key].slice(0, 3),
            stats: {
              compleated: compleatedIds.length,
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
        {t('profile.achivements.title')}
      </Typography>

      <Flex direction="column" align="stretch" className={styles.box}>
        {groups && groups.length ? (
          <>
            <div className={styles.boxList}>
              {groups.map((group) => (
                <Flex className={styles.group} key={group.id}>
                  <div className={styles.groupImage}>
                    {group.image && <img src={group.image} alt={group.title} />}
                  </div>
                  <div className={styles.groupContent}>
                    <Flex align="center">
                      <Typography weight="semibold" lineHeight="s" size="m">
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
                          {group.stats.compleated}/{group.stats.total}
                        </Typography>
                      </div>
                    </Flex>

                    {group.list &&
                      group.list.map(
                        (achivement: IAchivement): ReactElement => (
                          <Flex
                            align="center"
                            className={styles.achivement}
                            key={achivement.id}
                          >
                            <div
                              className={cns(
                                styles.achivementIcon,
                                achivement.opened && 'compleated'
                              )}
                            >
                              <IconCheck />
                            </div>
                            <Typography
                              view="secondary"
                              lineHeight="s"
                              size="s"
                            >
                              {achivement.title}
                            </Typography>
                          </Flex>
                        )
                      )}
                  </div>
                </Flex>
              ))}
            </div>

            {/* <Button
              label="Смотреть все"
              size="s"
              view="secondary"
              className={styles.boxCta}
              iconRight={IconArrowRight}
            /> */}
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

export default Achivements;
