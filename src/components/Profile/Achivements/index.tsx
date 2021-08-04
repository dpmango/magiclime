import React, { FC } from 'react';
import cns from 'classnames';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Button } from '@consta/uikit/Button';
import { IconCheck } from '@consta/uikit/IconCheck';
import { IconArrowRight } from '@consta/uikit/IconArrowRight';
import { IActivementsGroups } from 'components/pages/ProfilePage/types';
import useStyles from './styles';

interface IProps {
  groups: IActivementsGroups[];
}

const Achivements: FC<IProps> = ({ groups }) => {
  const styles = useStyles();

  return (
    <Flex direction="column" className={styles.root}>
      <Typography weight="semibold" lineHeight="s" size="2xl">
        Достижения
      </Typography>

      <Flex direction="column" className={styles.box}>
        {groups && groups.length ? (
          <>
            <div className={styles.boxList}>
              {groups.map((group) => (
                <Flex className={styles.group} key={group.id}>
                  <div className={styles.groupImage}>
                    <img src={group.image} alt={group.title} />
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
                      group.list.map((achivement) => (
                        <Flex
                          align="center"
                          className={styles.achivement}
                          key={achivement.id}
                        >
                          <div
                            className={cns(
                              styles.achivementIcon,
                              achivement.compleated && 'compleated'
                            )}
                          >
                            <IconCheck />
                          </div>
                          <Typography view="secondary" lineHeight="s" size="s">
                            {achivement.title}
                          </Typography>
                        </Flex>
                      ))}
                  </div>
                </Flex>
              ))}
            </div>

            <Button
              label="Смотреть все"
              size="s"
              view="secondary"
              className={styles.boxCta}
              iconRight={IconArrowRight}
            />
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
