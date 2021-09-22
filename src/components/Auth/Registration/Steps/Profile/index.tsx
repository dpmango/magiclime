import React, { FC } from 'react';
import { Button } from '@consta/uikit/Button';
import { IconForward } from '@consta/uikit/IconForward';
import useStyles from './styles';
import FormikInput from '../../../../Common/Controls/Formik/Input';
import FormikCheckbox from '../../../../Common/Controls/Formik/Checkbox';
import Flex from '../../../../Common/Flex';
import Typography from '../../../../Common/Typography';
// import SocialNetworks from '../../../SocialNetworks';

const ProfileStep: FC = () => {
  const styles = useStyles();
  return (
    <>
      <div className={styles.container}>
        <FormikInput label="Логин" name="username" placeholder="Ваш логин" />
        <FormikInput label="Email" name="email" placeholder="Ваша почта" />
        <FormikInput
          label="Пароль"
          name="password"
          isPassword
          placeholder="Введите пароль"
        />
        <FormikInput
          label="Повторите пароль"
          placeholder="Повторите пароль"
          name="passwordConfirm"
          isPassword
        />
        <FormikInput
          label="Рефедральный код"
          name="media_sponsor"
          isRequired={false}
          placeholder="Введите код"
        />
        {/* <FormikInput label="Телефон" name="phone" isRequired={false} /> */}
      </div>
      <Flex
        align="center"
        // margin="0 0 16px"
        margin="30px 0 24px"
      >
        <FormikCheckbox name="user_agreement" label="" />
        <Typography margin="0 0 0 8px" className={styles.userAgreement}>
          Я подтверждаю согласие на обработку персональных данных в соответствии
          с условиями <a href="/">Политики конфиденциальности</a> и{' '}
          <a href="/">Пользовательского соглашения</a>
        </Typography>
      </Flex>
      <Button
        type="submit"
        className={styles.next}
        label="Вперёд"
        iconRight={IconForward}
        width="full"
      />
      {/* <FormikCheckbox */}
      {/*  name="mailing_agree" */}
      {/*  label="Я согласен получать уведомления о новых продуктах и предложениях Lime" */}
      {/* /> */}
      {/* <Typography margin="25px 0 8px" align="center" size="l"> */}
      {/*  Через социальную сеть */}
      {/* </Typography> */}
      {/* <SocialNetworks /> */}
    </>
  );
};

export default ProfileStep;
