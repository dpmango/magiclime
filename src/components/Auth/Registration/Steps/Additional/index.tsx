import React from 'react';
import FormikInput from '../../../../Common/Controls/Formik/Input';
import FormikTextarea from '../../../../Common/Controls/Formik/Textarea';
import Flex from '../../../../Common/Flex';
import useStyles from './styles';
import { Field, FieldProps } from 'formik';
import { Button } from '@consta/uikit/Button';
import { IconCamera } from '@consta/uikit/IconCamera';
import Typography from '../../../../Common/Typography';
import { UserIcon } from '../../../../../assets/icons';

const Additional = () => {
  const styles = useStyles();
  return (
    <Flex margin={'0 0 40px'}>
      <div className={styles.photoField}>
        <Field name={'avatar'}>
          {({
            field: { value, ...field },
            form: { touched, errors, setFieldValue },
          }: FieldProps) => (
            <>
              {!!value ? <img src={value} alt={'avatar'} /> : <UserIcon />}
              <input
                type={'file'}
                id={'user_photo_field'}
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
