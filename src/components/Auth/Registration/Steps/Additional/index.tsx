import React, { FC, useState } from 'react';
import FormikInput from '../../../../Common/Controls/Formik/Input';
import FormikTextarea from '../../../../Common/Controls/Formik/Textarea';
import Flex from '../../../../Common/Flex';
import useStyles from './styles';
import { Field, FieldProps } from 'formik';
import { IconCamera } from '@consta/uikit/IconCamera';
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
    <Flex margin={'0 0 40px'}>
      <div className={styles.photoField}>
        <Field name={'avatar_id'}>
          {({ field: { value }, form: { setFieldValue } }: FieldProps) => (
            <>
              {!!value.id ? (
                <img src={value.image} alt={'avatar'} />
              ) : (
                <UserIcon />
              )}
              <input
                type={'file'}
                id={'user_photo_field'}
                onChange={(e) => handleChange(e, setFieldValue)}
                className={styles.hiddenInput}
              />
              <label htmlFor={'user_photo_field'} className={styles.addPhoto}>
                <IconCamera />
                Загрузить фото
              </label>
            </>
          )}
        </Field>
      </div>
      <div className={styles.inputsWrapper}>
        <FormikInput label={'Имя'} name={'name'} placeholder={'Ваше имя'} />
        <FormikTextarea label={'О себе'} name={'about'} />
      </div>
    </Flex>
  );
};

export default Additional;
