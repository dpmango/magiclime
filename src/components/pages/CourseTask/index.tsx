/* eslint-disable react/no-danger */
/* eslint-disable @typescript-eslint/naming-convention */
import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from '@consta/uikit/Button';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import FormikTextarea from 'components/Common/Controls/Formik/Textarea';
import { REQUIRED_STRING } from 'utils/formik/validation';

import useStyles from './styles';

const htmlContentIntro = `
<h1>Урок 2. Как устроена вводная часть</h1>
<p>Обучение будет проходить в образовательной среде Лайм. Сейчас ты уже в ней. </p>
<p>В вводной части ты познакомишься с нашим подходом и форматом обучения. На протяжении учёбы ты будешь изучать теорию в виде текста с интерактивными тестами. Для практики мы подготовили несколько форматов: разбор кейсов и несложные задания с самопроверкой.</p>
<p>В вводной части ты познакомишься с нашим подходом и форматом обучения. На протяжении учёбы ты будешь изучать теорию в виде текста с интерактивными тестами. Для практики мы подготовили несколько форматов: разбор кейсов и несложные задания с самопроверкой.</p>

<h3>Что мы разберём в вводной части:</h3>
<img src="/images/course-image-1.png" alt="alt" />
<blockquote>В вводной части ты познакомишься с нашим подходом и форматом обучения. На протяжении учёбы ты будешь изучать теорию в виде текста с интерактивными тестами. Для практики мы подготовили несколько форматов: разбор кейсов и несложные задания с самопроверкой.</blockquote>
`;

const htmlContentTask = `
<h3>Задание</h3>
<p>В вводной части ты познакомишься с нашим подходом и форматом обучения. На протяжении учёбы ты будешь изучать теорию в виде текста с интерактивными тестами. Для практики мы подготовили несколько форматов: разбор кейсов и несложные задания с самопроверкой.</p>
<img src="/images/course-image-2.png" alt="alt" />
`;

interface ITab {
  id: number;
  label: string;
}

const tabs: ITab[] = [
  { id: 1, label: '1. Первая часть' },
  { id: 2, label: '2. Вторая часть' },
];

const CoursePage: FC = () => {
  const [tab, setTab] = useState<ITab>(tabs[0]);

  const styles = useStyles({ activeTab: tab.id });
  const { course, id } = useParams();

  const initialValues = {
    answer: '',
  };

  const schema = Yup.object({
    answer: REQUIRED_STRING,
  });

  const handleSubmit = (values: typeof initialValues) => {
    // eslint-disable-next-line no-console
    console.log(values);
  };

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
            dangerouslySetInnerHTML={{ __html: htmlContentIntro }}
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
                <Form>
                  <FormikTextarea
                    label="Ваш ответ"
                    name="answer"
                    rows={5}
                    placeholder="Введите ответ"
                  />
                  <Button label="Узнать ответ" type="submit" />
                </Form>
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
            {tabs.map((t) => (
              <li key={t.id}>
                <span
                  className={styles.navLink}
                  role="link"
                  tabIndex={0}
                  onClick={() => setTab(t)}
                >
                  <Typography view={tab.id === t.id ? 'primary' : 'secondary'}>
                    {t.label}
                  </Typography>
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
