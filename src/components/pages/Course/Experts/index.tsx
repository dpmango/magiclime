import React, { FC, useRef, useCallback } from 'react';
import SwiperCore, { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Tooltip } from '@consta/uikit/Tooltip';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import SvgIcon from 'components/Common/SvgIcon';
import cns from 'classnames';
import { useTranslation } from 'react-i18next';
import { useCheckDefaultTheme } from 'hooks/useCheckDefaultTheme';

import useStyles from './styles';
import useStylesRoot from '../styles';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

// install Swiper modules
SwiperCore.use([Navigation, A11y]);

const slides = [
  {
    id: 1,
    avatar: '/images/expert-avatar.png',
    title: 'Дмитрий Орлов',
    description: 'Руководитель проектов в “Транснефть Финанс”',
  },
  {
    id: 2,
    avatar: '/images/expert-avatar.png',
    title: 'Иван Петров',
    description: 'Руководитель проектов в “Транснефть Финанс”',
  },
  {
    id: 3,
    avatar: '/images/expert-avatar.png',
    title: 'Константин Констанинопольский ',
    description: '“Транснефть Финанс”',
  },
  {
    id: 4,
    avatar: '/images/expert-avatar.png',
    title: 'Дмитрий Орлов',
    description: 'Руководитель проектов в “Транснефть Финанс”',
  },
  {
    id: 5,
    avatar: '/images/expert-avatar.png',
    title: 'Дмитрий Орлов',
    description: 'Руководитель проектов в “Транснефть Финанс”',
  },
];

const CourseExperts: FC = () => {
  const isDefaultTheme = useCheckDefaultTheme();
  const styles = useStyles({ darkmode: !isDefaultTheme });
  const rootStyles = useStylesRoot();
  const { t } = useTranslation();

  const swiperRef = useRef(null);

  const handlePrevClick = useCallback(() => {
    if (swiperRef && swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  }, [swiperRef]);

  const handleNextClick = useCallback(() => {
    if (swiperRef && swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  }, [swiperRef]);

  return (
    <div className={styles.root}>
      <div className={rootStyles.container}>
        <Typography
          margin="0 0 44px"
          size="4xl"
          weight="semibold"
          lineHeight="s"
        >
          <Typography
            as="span"
            view="brand"
            size="4xl"
            weight="semibold"
            lineHeight="s"
          >
            {t('course.page.experts.accent')}
          </Typography>
          <br />
          {t('course.page.experts.main')}
        </Typography>

        <div className={styles.slider}>
          <Swiper
            spaceBetween={24}
            slidesPerView={1}
            loop
            setWrapperSize={false}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1440: {
                slidesPerView: 4,
              },
            }}
            ref={swiperRef}
          >
            {slides.map((x) => (
              <SwiperSlide key={x.id} className={styles.slide}>
                <Flex direction="column" className={styles.item}>
                  <div className={styles.info}>
                    <SvgIcon.Info view="brand" />
                  </div>

                  <div className={styles.image}>
                    <img src={x.avatar} alt={x.title} />
                  </div>
                  <div className={styles.content}>
                    <Typography
                      size="2xl"
                      weight="semibold"
                      lineHeight="s"
                      className={styles.title}
                    >
                      {x.title}
                    </Typography>
                    <Typography
                      margin="8px 0 0"
                      size="s"
                      className={styles.description}
                    >
                      {x.description}
                    </Typography>
                  </div>
                </Flex>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className={cns(styles.navIcon, 'left')}
            role="button"
            tabIndex={0}
            onClick={handlePrevClick}
          >
            <SvgIcon.ChevronLeft size="s" />
          </div>
          <div
            className={cns(styles.navIcon, 'right')}
            role="button"
            tabIndex={0}
            onClick={handleNextClick}
          >
            <SvgIcon.ChevronRight size="s" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseExperts;
