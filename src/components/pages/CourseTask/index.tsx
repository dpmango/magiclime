/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/no-danger */
import React, { FC, useEffect, useState, useCallback, useMemo } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Loader } from '@consta/uikit/Loader';

// import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import {
  getCourseService,
  getCourseChapterService,
  completeCourseService,
  completeChapterService,
  completeExerciseService,
} from 'utils/api/routes/courses';
import { ScrollTo } from 'utils/helpers/scroll';
import {
  ISection,
  ICourseFull,
  IChapter,
  IExercis,
} from 'components/pages/CourseTask/types';

import useSharedStyles from 'assets/styles/Shared';
import Navigation from './Navigation';
import AnswerBox from './AnswerBox';
import useStyles from './styles';

const CoursePage: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [course, setCourse] = useState<ICourseFull | null>(null);
  const [chapter, setChapter] = useState<IChapter | null>(null);
  const [sections, setSections] = useState<ISection[]>([]);
  const { id }: { id: string } = useParams();
  const history = useHistory();

  const styles = useStyles();
  const sharedStyles = useSharedStyles({});

  // fetch actions
  const setSectionsFromCourse = useCallback(
    (course) => {
      const returnable: ISection[] = [];

      if (course && course.chapters) {
        course.chapters.forEach((chapter: IChapter, chapterIdx: number) => {
          if (chapter.exercises && chapter.exercises.length) {
            chapter.exercises.forEach(
              (exercis: IExercis, exercisIdx: number) => {
                returnable.push({
                  id: exercis.id,
                  chapter: chapter.id,
                  chapterLabel: chapter.content,
                  label: exercis.title,
                  compleated: exercis.is_completed,
                  available: exercis.is_available,
                  current: chapterIdx === 0 && exercisIdx === 0,
                });
              }
            );
          }
        });
      }

      setSections(returnable);
    },
    [setSections]
  );

  const fetchCourse = useCallback(async (id: string) => {
    setLoading(true);

    const [errCourse, course] = await getCourseService(id);

    if (errCourse) {
      toast.error('Error getting course');
    }

    setCourse(course || null);
    setSectionsFromCourse(course || null);

    if (course) {
      const [errChapter, chapter] = await getCourseChapterService(course!.id);

      if (errChapter) {
        toast.error('Error getting Exercis');
      }

      setChapter(chapter || null);
    }

    setLoading(false);
  }, []);

  // memos and getters
  const activeSectionId = useMemo(() => {
    return sections.find((s) => s.current)?.id || 0;
  }, [sections]);

  const nextSectionId = useMemo(() => {
    const activeIndex = sections.findIndex((x) => x.id === activeSectionId);
    const nextSection = sections[activeIndex + 1];

    return nextSection ? nextSection.id : null;
  }, [sections]);

  const getExercis = useMemo(() => {
    if (course && course.chapters) {
      if (chapter && chapter.exercises) {
        const exercis = chapter.exercises.find((x) => x.id === activeSectionId);
        return exercis || null;
      }
    }

    return null;
  }, [activeSectionId, course, chapter]);

  const getContent = useMemo(() => {
    return getExercis?.content || '';
  }, [getExercis]);

  const getFile = useMemo(() => {
    return getExercis?.file || '';
  }, [getExercis]);

  const handleContinue = useCallback(async () => {
    const [err, data] = await completeExerciseService(activeSectionId);
    // const [err, data] = await completeCourseService(22);

    if (!err && nextSectionId) {
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
    } else if (!nextSectionId) {
      const [err, data] = await completeCourseService(course!.id);

      if (!err) {
        toast.success('курс завершен');
        history.push('/courses');
      }
    }

    ScrollTo(0);
  }, [nextSectionId, activeSectionId, sections, course]);

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

  useEffect(() => {
    fetchCourse(id);
  }, [id]);

  return (
    <div className={styles.root}>
      <Flex>
        <div className={styles.content}>
          {!loading ? (
            <>
              <div
                className={sharedStyles.wysiwyg}
                dangerouslySetInnerHTML={{ __html: getContent }}
              />
              {getFile && (
                <div className={sharedStyles.wysiwyg}>
                  <div className="scaler" data-ar="16:9">
                    <video controls>
                      <source src={getFile} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              )}
              <AnswerBox
                onContinue={handleContinue}
                activeSectionId={activeSectionId}
              />
            </>
          ) : (
            <Loader />
          )}
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
