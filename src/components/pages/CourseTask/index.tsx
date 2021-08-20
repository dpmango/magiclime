/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/no-danger */
import React, { FC, useEffect, useState, useCallback, useMemo } from 'react';
import { useParams, useHistory } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { ScrollTo } from 'utils/helpers/scroll';
import { ISection } from 'components/pages/CourseTask/types';

import useSharedStyles from 'assets/styles/Shared';
import Navigation from './Navigation';
import AnswerBox from './AnswerBox';

import useStyles from './styles';
import {
  htmlContentIntro1,
  htmlContentIntro2,
  htmlContentIntro3,
  htmlContentIntro4,
  htmlContentIntro5,
  htmlContentIntro6,
  htmlContentIntro7,
  htmlContentIntro8,
  htmlContentIntro9,
} from './mockData';

const CoursePage: FC = () => {
  const [sections, setSections] = useState<ISection[]>([
    {
      id: 1,
      module: 1,
      compleated: false,
      available: true,
      current: true,
      label: '1. Как запустить продажи и масштабировать бизнес',
    },
    {
      id: 2,
      module: 1,
      compleated: false,
      available: false,
      current: false,
      label: '2. Вторичные выгоды',
    },
    {
      id: 3,
      module: 1,
      compleated: false,
      available: false,
      current: false,
      label: '3. Как привести покупателя в ресурс. Каналы восприятия',
    },

    {
      id: 4,
      module: 2,
      compleated: false,
      available: false,
      current: false,
      label: '4. Пирамида успеха',
    },
    {
      id: 5,
      module: 2,
      compleated: false,
      available: false,
      current: false,
      label: '5. Как воздействовать на покупателя',
    },

    {
      id: 6,
      module: 3,
      compleated: false,
      available: false,
      current: false,
      label: '6. Уровень нормы. Как «‎пробить потолок»',
    },
    {
      id: 7,
      module: 3,
      compleated: false,
      available: false,
      current: false,
      label: '7. Повышаем уровень нормы',
    },

    {
      id: 8,
      module: 4,
      compleated: false,
      available: false,
      current: false,
      label: '8. Эффект заражения. Формула ресурсности',
    },
    {
      id: 9,
      module: 4,
      compleated: false,
      available: false,
      current: false,
      label: '9. Ошибки и выводы',
    },
  ]);

  const activeSectionId = useMemo(() => {
    return sections.find((s) => s.current)?.id || 0;
  }, [sections]);

  const nextSectionId = useMemo(() => {
    const activeIndex = sections.findIndex((x) => x.id === activeSectionId);
    const nextSection = sections[activeIndex + 1];

    return nextSection ? nextSection.id : null;
  }, [sections]);

  // getter for dummy content (temp)
  // might be a good idea to change on router-based navigation
  const getContent = useMemo(() => {
    switch (activeSectionId) {
      case 1:
        return htmlContentIntro1;
      case 2:
        return htmlContentIntro2;
      case 3:
        return htmlContentIntro3;
      case 4:
        return htmlContentIntro4;
      case 5:
        return htmlContentIntro5;
      case 6:
        return htmlContentIntro6;
      case 7:
        return htmlContentIntro7;
      case 8:
        return htmlContentIntro8;
      case 9:
        return htmlContentIntro9;
      default:
        return '';
    }
  }, [activeSectionId]);

  const styles = useStyles();
  const sharedStyles = useSharedStyles();
  // const { course, id } = useParams();
  const history = useHistory();

  const handleContinue = useCallback(() => {
    if (nextSectionId) {
      // move to next section (compleate current, make next available and set current to next)
      setSections([
        ...sections.map((s) => ({
          ...s,
          ...{
            compleated: s.id === activeSectionId || s.compleated,
            available: s.id === nextSectionId || s.available,
            current: s.id === nextSectionId,
          },
        })),
      ]);

      ScrollTo(0);
    } else {
      alert('you are done here - moving to next course');
      history.push('/courses');
    }
  }, [nextSectionId, activeSectionId, sections]);

  const handleSectionClick = useCallback(
    (section) => {
      // allow moving to available sections only when using manual navigation
      if (section.available) {
        setSections([
          ...sections.map((s) => ({
            ...s,
            current: s.id === section.id,
          })),
        ]);
      }
    },
    [sections]
  );

  // useEffect(() => {
  //   // eslint-disable-next-line no-console
  //   console.log(`should fetch course ${course} : ${id}`);
  // }, [id]);

  return (
    <div className={styles.root}>
      <Flex>
        <div className={styles.content}>
          <div
            className={sharedStyles.wysiwyg}
            dangerouslySetInnerHTML={{ __html: getContent }}
          />

          <AnswerBox
            onContinue={handleContinue}
            activeSectionId={activeSectionId}
          />
        </div>

        <Navigation
          sections={sections}
          onSectionClick={handleSectionClick}
          activeSectionId={activeSectionId}
        />
      </Flex>
    </div>
  );
};

export default CoursePage;
