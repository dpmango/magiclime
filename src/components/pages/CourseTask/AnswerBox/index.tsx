/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/no-danger */
import React, { FC, useEffect, useState, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Button } from '@consta/uikit/Button';
import Typography from 'components/Common/Typography';
import FormikCheckboxGroup from 'components/Common/Controls/Formik/CheckboxGroup';
import FormikTextarea from 'components/Common/Controls/Formik/Textarea';
import { REQUIRED } from 'utils/formik/validation';

import useSharedStyles from 'assets/styles/Shared';
import { IMultipleSelect, ITask } from '../types';
import useStyles from './styles';

import {
  taskSchema1,
  taskSchema2,
  taskSchema3,
  taskSchema4,
  taskSchema5,
  taskSchema6,
  taskSchema7,
  taskSchema8,
  taskSchema9,
} from '../mockData';

interface IProps {
  activeSectionId: number;
  onContinue: () => void;
}

const AnswerBox: FC<IProps> = ({ activeSectionId, onContinue }) => {
  const styles = useStyles();
  const sharedStyles = useSharedStyles({});
  const { t } = useTranslation();

  // getter for dummy content (temp)
  const taskSchema = useMemo((): ITask => {
    switch (activeSectionId) {
      case 1:
        return taskSchema1;
      case 2:
        return taskSchema2;
      case 3:
        return taskSchema3;
      case 4:
        return taskSchema4;
      case 5:
        return taskSchema5;
      case 6:
        return taskSchema6;
      case 7:
        return taskSchema7;
      case 8:
        return taskSchema8;
      case 9:
        return taskSchema9;
      default:
        return { id: 99999, empty: true };
    }
  }, [activeSectionId]);

  const initialValues = {
    answer: '',
  };

  const handleSubmit = (
    values: typeof initialValues,
    { resetForm }: FormikHelpers<typeof initialValues>
  ) => {
    // TODO - api things

    onContinue();
    resetForm();
  };

  return (
    <>
      {taskSchema.empty ? (
        <div className={styles.continue}>
          {/* Continue button when no data provided */}
          <Button
            type="button"
            onClick={onContinue}
            label={t('course.task.answer.continue')}
          />
        </div>
      ) : (
        <div className={styles.taskBox}>
          {/* Title and wysiwg content (as description) */}
          <div className={sharedStyles.wysiwyg}>
            <h3>{t('course.task.answer.header')}</h3>
          </div>

          {taskSchema.text && (
            <div
              className={sharedStyles.wysiwyg}
              dangerouslySetInnerHTML={{ __html: taskSchema.text }}
            />
          )}

          {/* If something is required as input from user */}
          {/* TODO - only checkboxes for now based on sample data */}
          {taskSchema.multipleSelect ? (
            <div className={styles.answer}>
              <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ isValid, touched }) => (
                  <Form>
                    {taskSchema.multipleSelect?.map((cbx) => (
                      <div className={styles.uiGroup} key={cbx.id}>
                        <FormikCheckboxGroup
                          label={cbx.label}
                          name={`multipleSelect_${cbx.id}`}
                          items={cbx.options}
                          direction="column"
                          getLabel={(item) => (item as IMultipleSelect).label}
                          className={styles.checkboxGroup}
                          showAllValues
                          showCollapse={false}
                        />
                      </div>
                    ))}

                    <Button
                      disabled={
                        Object.keys(touched).length !==
                          taskSchema.multipleSelect?.length || !isValid
                      }
                      label={t('course.task.answer.cta')}
                      type="submit"
                    />
                  </Form>
                )}
              </Formik>
            </div>
          ) : (
            <div className={styles.continue}>
              {/* Continue button if non empty, but have no checkboxes */}
              <Button
                type="button"
                onClick={onContinue}
                label={t('course.task.answer.continue')}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AnswerBox;
