import React, { FC, HTMLProps, RefObject } from 'react';
import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import { useCheckDefaultTheme } from '../../../hooks/useCheckDefaultTheme';

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
    '& a, p, h1, h2, h3, h4, h5, h6, ul, ol, blockquote': {
      color: props.isDefault ? '#1e2329' : '#e3e3e3',
    },
    '& a': {
      textDecoration: 'underline',
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
