import React, { FC, HTMLProps, RefObject } from 'react';
import { useCheckDefaultTheme } from '../../../hooks/useCheckDefaultTheme';
import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';

interface IProps extends HTMLProps<HTMLDivElement> {
  className?: string;
  divRef?: RefObject<HTMLDivElement>;
}

const useStyles = makeStyles<
  null,
  Omit<IProps, 'className'> & { isDefault: boolean }
>(() => ({
  block: (props) => ({
    background: props.isDefault ? 'rgb(255, 255, 255)' : '#212121',
    '& a, p': {
      color: props.isDefault ? '#1e2329' : '#e3e3e3',
    },
  }),
}));

const Container: FC<IProps> = ({ children, className, divRef, ...props }) => {
  const isDefault = useCheckDefaultTheme();
  const styles = useStyles({
    isDefault,
  });

  return (
    <div
      className={classNames(styles.block, className)}
      ref={divRef}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
