import { IconAlert } from '@consta/uikit/IconAlert';
import React, { FC, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import { useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { FileField } from '@consta/uikit/FileField';
import { Button } from '@consta/uikit/Button';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Attach } from '@consta/uikit/Attach';
import cns from 'classnames';
import moment from 'moment';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import FormikInput from 'components/Common/Controls/Formik/Input';
import { REQUIRED, EMAIL, PHONE } from 'utils/formik/validation';
import { RootState } from 'store/reducers/rootReducer';
import { updateProfile } from 'store/reducers/user';
import { getProfilePdf, sendEmail } from 'utils/api/routes/auth';
import { logoutFunc } from 'utils/helpers/logout';
import { bytesToMegaBytes } from 'utils/helpers/formatBytes';

import useStyles from './styles';

const uploader = {
  allowedMime: ['image'],
  maxSize: 5,
  includeReader: false,
};

const Account: FC = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const [files, setFiles] = useState<File[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const profile = useSelector((state: RootState) => state.user.profile);

  const initialValues = {
    login: profile.username,
    sponsor: profile.media_sponsor,
    email: profile.email,
    phone: profile.phone,
    switch1: false,
    switch2: true,
  };

  const handleSubmit = (values: typeof initialValues) => {
    const { phone, email } = values;
    dispatch(
      updateProfile({
        profile: {
          phone,
          email,
          // username: login,
          // media_sponsor: sponsor,
        },
        successCallback: () => setErrorMessage(''),
        errorCallback: (message: string) => setErrorMessage(message),
      })
    );
  };

  const confirmEmail = useCallback(() => {
    sendEmail(pathname)
      .then(() => {
        toast.success(t('profile.settings.confirmationSuccess'));
      })
      .catch(() => {
        toast.error(t('profile.settings.confirmationError'));
      });
  }, []);

  const schema = Yup.object({
    sponsor: REQUIRED,
    login: REQUIRED,
    email: EMAIL,
    phone: PHONE.required('Обязательное поле'),
  });

  // actions
  const handleLogoutClick = () => {
    logoutFunc();
  };

  const clearInput = (target: any) => {
    // eslint-disable-next-line no-param-reassign
    target.value = '';
  };

  const handleKYCUpload = useCallback(
    (e: DragEvent | React.ChangeEvent<Element>) => {
      const { files } = e.target as HTMLInputElement;

      if (files && files[0]) {
        const file = files[0];

        // limit mime
        if (uploader.allowedMime) {
          if (!uploader.allowedMime.includes(file.type.split('/')[0])) {
            toast.error(t('profile.head.uploader.mimeLocked'));
            clearInput(e.target);
            return false;
          }
        }

        // limit size
        if (uploader.maxSize) {
          const sizeInMb = bytesToMegaBytes(file.size);

          if (sizeInMb > uploader.maxSize) {
            toast.error(`${t('profile.head.uploader')} ${uploader.maxSize}Мб`);
            clearInput(e.target);
            return false;
          }
        }

        if (file) setFiles([file]);

        clearInput(e.target);
      }

      return true;
    },
    []
  );

  const handleExportClick = useCallback(async () => {
    const [err, data] = await getProfilePdf();

    if (err) {
      toast.error(t('profile.settings.export.error'));
    }

    const showFile = (blob: Blob) => {
      // Я удалил тело функции, т.к. там используется window.navigator.msSaveOrOpenBlob
      // , а в новой спецификации это свойство было удалено + всё равно это нужно будет делать через api
    };

    showFile(data);
  }, []);

  return (
    <div className={styles.root}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ touched }) => (
          <Form>
            <Flex align="center" justify="space-between">
              <Typography
                margin="0 24px 0 0"
                weight="semibold"
                lineHeight="s"
                size="2xl"
              >
                {t('profile.settings.navigation.account')}
              </Typography>

              <Button
                view="primary"
                type="submit"
                disabled={Object.keys(touched).length === 0}
                label={t('profile.settings.cta.save')}
              />
            </Flex>

            {errorMessage && (
              <Typography
                view="alert"
                margin="16px 0 16px"
                align="center"
                weight="semibold"
                size="l"
              >
                {errorMessage}
              </Typography>
            )}

            <div className={styles.section}>
              <Grid
                cols="1"
                gap="xl"
                breakpoints={{ s: { cols: 2 } }}
                className={styles.inputs}
              >
                <GridItem>
                  <FormikInput
                    label={t('profile.settings.account.login.label')}
                    name="login"
                    readOnly
                    placeholder={t(
                      'profile.settings.account.login.placeholder'
                    )}
                    isRequired={false}
                  />
                </GridItem>
                <GridItem>
                  <FormikInput
                    label={t('profile.settings.account.sponsor.label')}
                    name="sponsor"
                    readOnly
                    placeholder={t(
                      'profile.settings.account.sponsor.placeholder'
                    )}
                    isRequired={false}
                  />
                </GridItem>
                <GridItem>
                  <FormikInput
                    label={t('profile.settings.account.email.label')}
                    name="email"
                    placeholder={t(
                      'profile.settings.account.email.placeholder'
                    )}
                  />
                  {!profile.email_confirmed && (
                    <div>
                      <Typography
                        size="xs"
                        view="alert"
                        margin="8px 0"
                        className={styles.needConfirm}
                      >
                        <IconAlert view="alert" size="s" />
                        {t('profile.settings.needConfirm')}
                      </Typography>
                      <Button
                        view="primary"
                        type="button"
                        size="xs"
                        label={t('profile.settings.confirm')}
                        onClick={confirmEmail}
                      />
                    </div>
                  )}
                </GridItem>
                <GridItem>
                  <FormikInput
                    label={t('profile.settings.account.phone.label')}
                    name="phone"
                    placeholder={t(
                      'profile.settings.account.phone.placeholder'
                    )}
                  />
                </GridItem>
              </Grid>
            </div>

            <div className={styles.section}>
              <div className={styles.uiGroup}>
                <Typography size="s" margin="0 0 6px" view="secondary">
                  {t('profile.settings.account.upload.label')}
                </Typography>
                {files &&
                  files.map((file) => {
                    const desc = `${bytesToMegaBytes(file.size)}Мб, ${moment(
                      file.lastModified
                    ).format('DD.MM.YYYY, hh:mm')}`;

                    const extension = file.type.split('/')[1];

                    return (
                      <Attach
                        key={file.name}
                        fileName={file.name}
                        fileDescription={desc}
                        fileExtension={extension}
                      />
                    );
                  })}

                <FileField id="kyc" onChange={handleKYCUpload}>
                  {(props) => (
                    <Button
                      {...props}
                      label={
                        files.length
                          ? t('profile.settings.account.upload.ctaAlt')
                          : t('profile.settings.account.upload.cta')
                      }
                    />
                  )}
                </FileField>
              </div>
            </div>

            <div className={cns(styles.section, 'is-last')}>
              <div className={styles.uiButton}>
                <Button
                  view="clear"
                  size="s"
                  label={t('profile.settings.account.export')}
                  onClick={handleExportClick}
                />
              </div>
              <div className={styles.uiButton}>
                <Button
                  view="clear"
                  size="s"
                  label={t('profile.settings.account.logout')}
                  className={styles.dangerBtn}
                  onClick={handleLogoutClick}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Account;
