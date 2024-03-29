import React, {
  FC,
  useCallback,
  useMemo,
  ChangeEvent,
  useState,
  useRef,
  SyntheticEvent,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import { Button } from '@consta/uikit/Button';

import SvgIcon from 'assets/icons/ConstaIcons';
import { updateProfileAvatar, deleteProfileAvatar } from 'store/reducers/user';
import { RootState } from 'store/reducers/rootReducer';
import { bytesToMegaBytes } from 'utils/helpers/formatBytes';

import useStyles from './styles';

const uploader = {
  allowedMime: ['image'],
  maxSize: 5,
  includeReader: false,
};

const PorifleHeadUploader: FC = () => {
  const [avatarReader, setAvatarReader] = useState<
    string | ArrayBuffer | null
  >();

  const styles = useStyles();
  const dispatch = useDispatch();
  const { path } = useRouteMatch();
  const { t } = useTranslation();

  const uploadLabelRef = useRef<HTMLLabelElement>(null);

  const profile = useSelector((state: RootState) => state.user.profile);

  const clearInput = (target: any) => {
    // eslint-disable-next-line no-param-reassign
    target.value = '';
  };

  const handleFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

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
          toast.error(
            `${t('profile.head.uploader.limitSize')} ${uploader.maxSize}Мб`
          );
          clearInput(e.target);
          return false;
        }
      }

      if (uploader.includeReader) {
        const reader = new FileReader();
        reader.onload = (ev: ProgressEvent<FileReader>): void => {
          setAvatarReader(ev.target!.result);
        };
        reader.readAsDataURL(file);
      }

      dispatch(
        updateProfileAvatar({
          file,
          successCallback: () => {
            toast.success(t('profile.head.uploader.success'));
          },
          errorCallback: (message: string) => {
            toast.error(t('profile.head.uploader.error'));
          },
        })
      );

      clearInput(e.target);
    }

    return true;
  }, []);

  const handleDeleteClick = useCallback(() => {
    dispatch(
      deleteProfileAvatar({
        successCallback: () => {
          toast.success(t('profile.head.deleteAvatar.success'));
        },
        errorCallback: (message: string) => {
          toast.error(t('profile.head.deleteAvatar.error'));
        },
      })
    );
  }, []);

  const isActionsVisible = window.location.pathname.includes('/settings');

  return isActionsVisible ? (
    <>
      {profile.avatar && (
        <div className={styles.delete}>
          <Button
            iconLeft={SvgIcon.Close}
            form="round"
            size="xs"
            onClick={() => handleDeleteClick()}
          />
        </div>
      )}
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
        aria-label={t('profile.head.uploader.uploadAlt')}
      >
        <Button
          iconLeft={SvgIcon.Camera}
          form="round"
          size="xs"
          onClick={() => uploadLabelRef!.current!.click()}
        />
      </label>
    </>
  ) : null;
};

export default PorifleHeadUploader;
