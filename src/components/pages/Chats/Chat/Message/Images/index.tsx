import React, { FC, memo, useState } from 'react';
import { IconClose } from '@consta/uikit/IconClose';
import cln from 'classnames';
import { Button } from '@consta/uikit/Button';
import { IconArrowLeft } from '@consta/uikit/IconArrowLeft';
import { IconArrowRight } from '@consta/uikit/IconArrowRight';
import Flex from '../../../../../Common/Flex';
import { IImageMessage } from '../../../types';
import useStyles from './styles';

const Images: FC<{ images: IImageMessage[] }> = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<number | null>(null);
  const styles = useStyles();

  return (
    <Flex direction="column">
      {images.map((img, index) => (
        <div
          key={img.id}
          onClick={() => {
            setOpen(true);
            setCurrentImage(index);
          }}
        >
          <img
            src={img.image}
            alt="chat_image"
            className={styles.messageImage}
          />
        </div>
      ))}
      {open && currentImage !== null && (
        <Flex align="center" justify="center" className={styles.gallery}>
          {currentImage !== 0 && (
            <Button
              iconLeft={IconArrowLeft}
              form="brick"
              className={cln(styles.button, styles.prev)}
              onClick={() => setCurrentImage((prev) => (prev as number) - 1)}
            />
          )}
          <img
            src={images[currentImage].image}
            alt={images[currentImage].name}
            className={styles.galleryImage}
          />
          {currentImage !== images.length - 1 && (
            <Button
              iconLeft={IconArrowRight}
              form="brick"
              className={cln(styles.button, styles.next)}
              onClick={() => setCurrentImage((prev) => (prev as number) + 1)}
            />
          )}
          <Button
            iconLeft={IconClose}
            className={styles.close}
            size="l"
            form="brick"
            onClick={() => setOpen(false)}
          />
        </Flex>
      )}
    </Flex>
  );
};

export default memo(Images, (prevProps, nextProps) => {
  return prevProps.images.length === nextProps.images.length;
});
