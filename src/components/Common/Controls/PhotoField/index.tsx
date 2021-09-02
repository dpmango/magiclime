import { ProgressSpin } from '@consta/uikit/ProgressSpin';
import React, { FC, useMemo, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { ChangeType } from '../../../../types/common';
import { IPhoto } from '../../../../types/interfaces/common';
import { uploadImage } from '../../../../utils/api/routes/other';
import useStyles from './styles';

type RenderFuncProps = {
  src: string;
  fieldId: string;
};

interface IProps {
  render: (props: RenderFuncProps) => JSX.Element;
  onChangeCallback?: (avatar: IPhoto) => void;
}

const PhotoField: FC<IProps> = ({ render, onChangeCallback }) => {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const styles = useStyles();

  const handleChange = (e: ChangeType) => {
    setLoading(true);
    uploadImage(e.target!.files![0])
      .then((res) => {
        setImage(res.data.image);
        onChangeCallback && onChangeCallback(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const id = useMemo(() => `${uuid()}_photo_field`, []);

  return (
    <>
      {loading ? (
        <ProgressSpin size="m" className={styles.spinner} />
      ) : (
        render({ src: image, fieldId: id })
      )}
      <input
        type="file"
        id={id}
        onChange={handleChange}
        className={styles.hiddenInput}
      />
    </>
  );
};

export default PhotoField;
