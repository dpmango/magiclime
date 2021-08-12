/* eslint-disable react/no-danger */
/* eslint-disable @typescript-eslint/naming-convention */
import React, { FC, useEffect, useState, useCallback, useMemo } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from '@consta/uikit/Button';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import FormikTextarea from 'components/Common/Controls/Formik/Textarea';
import { REQUIRED_STRING } from 'utils/formik/validation';
import { ScrollTo } from 'utils/helpers/scroll';
import cns from 'classnames';
import useStyles from './styles';

const htmlContentIntro1 = `
<h1>Урок 1. Как устроена вводная часть</h1>
<p>Обучение будет проходить в образовательной среде Лайм. Сейчас ты уже в ней. </p>
<p>В вводной части ты познакомишься с нашим подходом и форматом обучения. На протяжении учёбы ты будешь изучать теорию в виде текста с интерактивными тестами. Для практики мы подготовили несколько форматов: разбор кейсов и несложные задания с самопроверкой.</p>
<p>В вводной части ты познакомишься с нашим подходом и форматом обучения. На протяжении учёбы ты будешь изучать теорию в виде текста с интерактивными тестами. Для практики мы подготовили несколько форматов: разбор кейсов и несложные задания с самопроверкой.</p>

<h3>Что мы разберём в вводной части:</h3>
<img src="/images/course-image-1.png" alt="alt" />
<blockquote>В вводной части ты познакомишься с нашим подходом и форматом обучения. На протяжении учёбы ты будешь изучать теорию в виде текста с интерактивными тестами. Для практики мы подготовили несколько форматов: разбор кейсов и несложные задания с самопроверкой.</blockquote>
`;

const htmlContentIntro2 = `
<h1>Урок 2. Вторая часть</h1>
<p>Обучение будет проходить в образовательной среде Лайм. Сейчас ты уже в ней. </p>
<blockquote>В вводной части ты познакомишься с нашим подходом и форматом обучения. На протяжении учёбы ты будешь изучать теорию в виде текста с интерактивными тестами. Для практики мы подготовили несколько форматов: разбор кейсов и несложные задания с самопроверкой.</blockquote>

<h3>Что мы разберём в вводной части:</h3>
<img src="/images/course-image-1.png" alt="alt" />
`;

const htmlContentIntro3 = `
<h1>Урок 3. Третья часть</h1>
<img src="/images/course-image-1.png" alt="alt" />

<h3>Что мы разберём в вводной части:</h3>
`;

const htmlContentTask = `
<h3>Задание</h3>
<p>В вводной части ты познакомишься с нашим подходом и форматом обучения. На протяжении учёбы ты будешь изучать теорию в виде текста с интерактивными тестами. Для практики мы подготовили несколько форматов: разбор кейсов и несложные задания с самопроверкой.</p>
<img src="/images/course-image-2.png" alt="alt" />
`;

interface ISection {
  id: number;
  compleated: boolean;
  available: boolean;
  current: boolean;
  label: string;
}

const CoursePage: FC = () => {
  const [sections, setSections] = useState<ISection[]>([
    {
      id: 1,
      compleated: false,
      available: true,
      current: true,
      label: '1. Первая часть',
    },
    {
      id: 2,
      compleated: false,
      available: false,
      current: false,
      label: '2. Вторая часть',
    },
    {
      id: 3,
      compleated: false,
      available: false,
      current: false,
      label: '3. Третья часть',
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
      default:
        return '';
    }
  }, [activeSectionId]);

  const styles = useStyles({ activeTab: activeSectionId });
  const { course, id } = useParams();
  const history = useHistory();
  const { t } = useTranslation();

  const initialValues = {
    answer: '',
  };

  const schema = Yup.object({
    answer: REQUIRED_STRING,
  });

  const handleSubmit = (values: typeof initialValues, { resetForm }) => {
    // TODO - api things

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

    resetForm();
  };

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
    // eslint-disable-next-line no-console
    console.log(`should fetch course ${course} : ${id}`);
  }, [id]);

  return (
    <div className={styles.root}>
      <Flex>
        <div className={styles.content}>
          <div
            className={styles.wysiwyg}
            dangerouslySetInnerHTML={{ __html: getContent }}
          />
          <div className={styles.taskBox}>
            <div
              className={styles.wysiwyg}
              dangerouslySetInnerHTML={{ __html: htmlContentTask }}
            />

            <div className={styles.answer}>
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={schema}
              >
                {({ isValid, touched }) => (
                  <Form>
                    <FormikTextarea
                      label={t('course.task.answer.label')}
                      name="answer"
                      rows={5}
                      placeholder={t('course.task.answer.placeholder')}
                    />
                    <Button
                      disabled={Object.keys(touched).length === 0 || !isValid}
                      label={t('course.task.answer.cta')}
                      type="submit"
                    />
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>

        <div className={styles.nav}>
          <Typography
            view="ghost"
            lineHeight="s"
            size="xs"
            transform="uppercase"
          >
            Навигация
          </Typography>
          <ul className={styles.navList}>
            {sections.map((section) => (
              <li key={section.id}>
                <span
                  className={cns(
                    styles.navLink,
                    section.compleated && 'compleated',
                    section.available && 'available',
                    section.current && 'current'
                  )}
                  role="link"
                  tabIndex={0}
                  onClick={() => handleSectionClick(section)}
                >
                  <Typography>{section.label}</Typography>
                </span>
              </li>
            ))}
            <div className={styles.navLine} />
          </ul>
        </div>
      </Flex>
    </div>
  );
};

export default CoursePage;
