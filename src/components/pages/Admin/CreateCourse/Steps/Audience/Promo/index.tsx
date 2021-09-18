import { IconVideo } from '@consta/uikit/IconVideo';
import cln from 'classnames';
import React, { FC, useCallback, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import useStyles from '../styles';

interface IProps {
  src: string | null;
  fieldId: string;
}

const Promo: FC<IProps> = ({ src, fieldId }) => {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<ReactPlayer>(null);
  const styles = useStyles();

  const endPlaying = useCallback(() => {
    ref.current!.showPreview();
  }, [ref.current]);

  return (
    <>
      {src && (
        <ReactPlayer
          url={src}
          ref={ref}
          width="100%"
          height="100%"
          light
          controls
          playing={playing}
          onPause={() => setPlaying(false)}
          onPlay={() => setPlaying(true)}
          onClickPreview={() => setPlaying(true)}
          onEnded={endPlaying}
        />
      )}
      {!playing && (
        <label
          htmlFor={fieldId}
          className={cln(styles.addPhoto, {
            [styles.haveImage]: !!src,
          })}
        >
          <IconVideo />
          Загрузить промовидео
        </label>
      )}
    </>
  );
};

export default Promo;
