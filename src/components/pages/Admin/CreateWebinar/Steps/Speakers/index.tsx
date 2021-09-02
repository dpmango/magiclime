import { Button } from '@consta/uikit/Button';
import { IconCamera } from '@consta/uikit/IconCamera';
import { IconClose } from '@consta/uikit/IconClose';
import { IconUser } from '@consta/uikit/IconUser';
import React, { FC } from 'react';
import { Field, FieldArray, FieldProps } from 'formik';
import FormikInput from '../../../../../Common/Controls/Formik/Input';
import FormikTextarea from '../../../../../Common/Controls/Formik/Textarea';
import PhotoField from '../../../../../Common/Controls/PhotoField';
import Flex from '../../../../../Common/Flex';
import { IFormSpeaker } from '../../types';
import useStyles from './styles';

const Speakers: FC<{ speakers: IFormSpeaker[] }> = ({ speakers }) => {
  const styles = useStyles();

  return (
    <FieldArray
      name="step_2.speakers"
      render={(arrayHelpers) => (
        <Flex direction="column">
          {speakers.map((speaker, index) => (
            <div key={`speaker_${index}`} className={styles.speaker}>
              <Button
                view="clear"
                size="l"
                type="button"
                iconLeft={IconClose}
                className={styles.deleteBtn}
                onClick={() => arrayHelpers.remove(index)}
              />
              <div className={styles.photoWrapper}>
                <Field name={`step_2.speakers.${index}.avatar`}>
                  {({
                    field: { value, name },
                    form: { setFieldValue },
                  }: FieldProps) => (
                    <PhotoField
                      render={({ src, fieldId }) => (
                        <>
                          {value ? (
                            <img src={value.image} alt="avatar" />
                          ) : (
                            <IconUser />
                          )}
                          <label htmlFor={fieldId} className={styles.addPhoto}>
                            <IconCamera size="s" />
                          </label>
                        </>
                      )}
                      onChangeCallback={(avatar) => {
                        setFieldValue(name, avatar);
                      }}
                    />
                  )}
                </Field>
              </div>
              <FormikInput
                name={`step_2.speakers.${index}.name`}
                label="Имя спикера"
                placeholder="Введите имя"
              />
              <FormikInput
                name={`step_2.speakers.${index}.position`}
                label="Должность"
                placeholder="Должность спикера"
              />
              <div className={styles.textarea}>
                <FormikTextarea
                  name={`step_2.speakers.${index}.description`}
                  label="Краткое описание"
                  placeholder="Расскажите о спикере"
                />
              </div>
            </div>
          ))}
          <Button
            view="secondary"
            label="Добавить нового"
            type="button"
            onClick={() =>
              arrayHelpers.push({
                avatar: null,
                name: '',
                position: '',
                description: '',
              })
            }
          />
        </Flex>
      )}
    />
  );
};

export default Speakers;
