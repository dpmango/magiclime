import { Loader } from '@consta/uikit/Loader';
import moment from 'moment';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@consta/uikit/Button';
import { RouteComponentProps } from 'react-router-dom';
import { getWebinar } from '../../../../utils/api/routes/webinars';
import { IWebinar } from '../types';
import useStyles from './styles';
import Header from './Header';
import Flex from '../../../Common/Flex';
import Typography from '../../../Common/Typography';
import useResolution from '../../../../hooks/useResolution';
import Speaker from './Speaker';
import Members from '../../../Common/Members';

const Webinar: FC<RouteComponentProps<{ id: string }>> = ({
  match: {
    params: { id },
  },
  history,
}) => {
  const [webinar, setWebinar] = useState<IWebinar | null>(null);
  const styles = useStyles();
  const { t } = useTranslation();
  const size = useResolution();
  const isSmallLap = size.width <= 1300;

  useEffect(() => {
    getWebinar(+id)
      .then((res) => setWebinar(res.data))
      .catch(() => history.push('/webinars'));
  }, [id]);

  if (!webinar) return <Loader />;

  return (
    <div className={styles.root}>
      <Header webinar={webinar} />
      <div className={styles.content}>
        <div className={styles.details}>
          <div>
            <Typography view="ghost" size="xs" margin="0 0 8px">
              {t('webinar.dateTime')}
            </Typography>
            <Typography weight="semibold">
              {moment(webinar.date).format('D MMMM, HH:mm')}
            </Typography>
          </div>
          <div>
            <Typography view="ghost" size="xs" margin="0 0 8px">
              {t('webinar.eventType')}
            </Typography>
            <Typography weight="semibold">Online</Typography>
          </div>
          <div>
            <Typography view="ghost" size="xs" margin="0 0 8px">
              {t('webinar.city')}
            </Typography>
            <Typography weight="semibold">
              {webinar.city && webinar.city.title}
            </Typography>
          </div>
        </div>

        <Flex>
          <div className={styles.info}>
            <Typography
              weight="semibold"
              margin="0 0 24px"
              className={styles.title}
            >
              {t('webinar.aboutEvent')}
            </Typography>
            <Typography margin="0 0 44px">
              Excel - самая популярная программа для ведения отчётности. Поэтому
              необходимо обладать базовыми навыками работы в Excel. А есть ли у
              вас эти навыки? Ответ вы получите на вебинаре.
            </Typography>
            <Typography
              weight="semibold"
              size={isSmallLap ? '2xl' : '3xl'}
              margin="0 0 16px"
            >
              {t('webinar.youLearn')}:
            </Typography>
            <div>
              <ul>
                <Typography as="li">30 самых важных формул Excel</Typography>
                <Typography as="li">
                  Как приводить данные в нужный формат
                </Typography>
                <Typography as="li">
                  Как применять Excel в интернет-маркетинге
                </Typography>
              </ul>
            </div>
            <Typography
              weight="semibold"
              size={isSmallLap ? '2xl' : '3xl'}
              margin="44px 0 16px"
            >
              {t('webinar.aboutFormat')}:
            </Typography>
            <div>
              <ul>
                <Typography as="li">30 самых важных формул Excel</Typography>
                <Typography as="li">30 самых важных формул Excel</Typography>
                <Typography as="li">
                  Как приводить данные в нужный формат
                </Typography>
                <Typography as="li">
                  Как применять Excel в интернет-маркетинге
                </Typography>
              </ul>
            </div>
          </div>
          <div className={styles.peoples}>
            <Typography weight="semibold" margin="0 0 12px">
              {t('webinar.members')}
            </Typography>
            <Members members={webinar.participants} itemSize={44} />
            <Typography weight="semibold" margin="44px 0 12px">
              {t('webinar.speakers')}
            </Typography>
            {webinar.speakers.map((speaker) => (
              <Speaker key={speaker.id} speaker={speaker} short />
            ))}
            <Button
              size="l"
              label={t('webinar.signUp')}
              className={styles.signUp}
            />
          </div>
        </Flex>

        <div>
          <Typography
            weight="semibold"
            margin={`${isSmallLap ? '80px' : '140px'} 0 36px`}
            className={styles.title}
          >
            {t('webinar.aboutSpeakers')}
          </Typography>
          {webinar.speakers.map((speaker) => (
            <Speaker speaker={speaker} short={false} key={speaker.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Webinar;
