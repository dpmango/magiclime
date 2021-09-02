import React, { FC, useState } from 'react';
import { Field, FieldProps } from 'formik';
import { IconCamera } from '@consta/uikit/IconCamera';
import FormikInput from '../../../../Common/Controls/Formik/Input';
import FormikTextarea from '../../../../Common/Controls/Formik/Textarea';
import PhotoField from '../../../../Common/Controls/PhotoField';
import Flex from '../../../../Common/Flex';
import useStyles from './styles';
import { UserIcon } from '../../../../../assets/icons';
import { ChangeType, SetStateType } from '../../../../../types/common';
import { uploadImage } from '../../../../../utils/api/routes/other';

const Additional: FC = () => {
  const styles = useStyles();

  const handleChange = (
    e: ChangeType,
    setValue: (name: string, message?: any) => void
  ) => {
    uploadImage(e.target!.files![0]).then((res) => {
      setValue('avatar_id', res.data);
    });
  };

  return (
    <Flex margin="0 0 40px">
      <div className={styles.photoField}>
        <Field name="avatar_id">
          {({ field: { value }, form: { setFieldValue } }: FieldProps) => (
            <PhotoField
              render={({ src, fieldId }) => (
                <>
                  {value ? <img src={src} alt="avatar" /> : <UserIcon />}
                  <label htmlFor={fieldId} className={styles.addPhoto}>
                    <IconCamera />
                    Загрузить фото
                  </label>
                </>
              )}
              onChangeCallback={(avatar) => {
                setFieldValue('avatar_id', avatar.id);
              }}
            />
          )}
        </Field>
      </div>
      <div className={styles.inputsWrapper}>
        <FormikInput label="Имя" name="name" placeholder="Ваше имя" />
        <FormikTextarea label="О себе" name="about" />
      </div>
    </Flex>
  );
};

export default Additional;
