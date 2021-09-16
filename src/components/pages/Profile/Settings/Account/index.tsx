import React, { FC, useState, useCallback, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
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
import FormikSwitch from 'components/Common/Controls/Formik/Switch';
import { REQUIRED_STRING, EMAIL, PHONE } from 'utils/formik/validation';
import { RootState } from 'store/reducers/rootReducer';
import { updateProfile } from 'store/reducers/user';
import { getProfilePdf } from 'utils/api/routes/auth';
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
    const { login, phone, email } = values;
    dispatch(
      updateProfile({
        profile: {
          phone,
          email,
          username: login,
          // media_sponsor: sponsor,
        },
        successCallback: () => setErrorMessage(''),
        errorCallback: (message: string) => setErrorMessage(message),
      })
    );
  };

  const schema = Yup.object({
    sponsor: REQUIRED_STRING,
    login: REQUIRED_STRING,
    email: EMAIL,
    phone: PHONE,
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
      const newBlob = new Blob([blob], { type: 'application/pdf' });

      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob);
        return;
      }

      // Create a link pointing to the ObjectURL containing the blob.
      const data = window.URL.createObjectURL(newBlob);
      const link = document.createElement('a');
      link.href = data;
      link.download = 'myprofile.pdf';
      link.click();
      setTimeout(() => {
        window.URL.revokeObjectURL(data);
      }, 100);
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
                    placeholder={t(
                      'profile.settings.account.login.placeholder'
                    )}
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

            <div className={styles.section} style={{ opacity: 0.5 }}>
              <div className={styles.uiGroup}>
                <FormikSwitch
                  label="Lorem ipsum dolor sit amet"
                  name="switch1"
                />
              </div>
              <div className={styles.uiGroup}>
                <FormikSwitch label="Lorem ipsum" name="switch2" />
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
