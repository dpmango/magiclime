import React, { FC, useCallback, ChangeEvent, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from '@consta/uikit/Button';

import SvgIcon from 'assets/icons/ConstaIcons';
import { updateProfileAvatar } from 'store/reducers/user';
import { RootState } from 'store/reducers/rootReducer';
import { bytesToMegaBytes } from 'utils/helpers/formatBytes';

import useStyles from './styles';

const uploader = {
  allowedMime: ['image'],
  maxSize: 5,
  includeReader: false,
};

const PorifleHeadUploader: FC = () => {
  const [avatarReader, setAvatarReader] = useState();

  const styles = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const uploadLabelRef = useRef<HTMLLabelElement>(null);

  const { profile } = useSelector((state: RootState) => state.user);

  const handleFileChange = useCallback(async (e: ChangeEvent): null => {
    const { files } = e.target;

    if (files && files[0]) {
      const file = files[0];

      // limit mime
      if (uploader.allowedMime) {
        if (!uploader.allowedMime.includes(file.type.split('/')[0])) {
          // await $toast.error({
          //   message: t('profile.head.uploader.mimeLocked'),
          // });

          console.log(t('profile.head.uploader.mimeLocked'));
          e.target.value = '';
          return null;
        }
      }

      // limit size
      if (uploader.maxSize) {
        const sizeInMb = bytesToMegaBytes(file.size);

        if (sizeInMb > uploader.maxSize) {
          // await this.$toast.global.error({
          //   message: `Размер файла превышает ${this.maxSize}Мб`,
          // });
          console.log(`Размер файла превышает ${uploader.maxSize}Мб`);
          e.target.value = '';
          return null;
        }
      }

      if (uploader.includeReader) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          setAvatarReader(ev.target.result);
        };
        reader.readAsDataURL(file);
      }

      await dispatch(
        updateProfileAvatar({
          file,
          successCallback: () => {},
          errorCallback: (message: string) => {},
        })
      );

      e.target.value = '';

      return null;
    }
  }, []);

  return (
    <>
      <input
        type="file"
        id="avatarUploader"
        name="avatarUploader"
        className={styles.input}
        onChange={handleFileChange}
      />
      <label
        htmlFor="avatarUploader"
        className={styles.avatarUploader}
        ref={uploadLabelRef}
        alt={t('profile.head.uploader.ctaAlt')}
      >
        <Button
          iconLeft={SvgIcon.Camera}
          form="round"
          size="xs"
          onClick={() => uploadLabelRef.current.click()}
        />
      </label>
    </>
  );
};

export default PorifleHeadUploader;
