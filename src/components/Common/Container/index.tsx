import React, { CSSProperties, FC } from 'react';
import { useCheckDefaultTheme } from '../../../hooks/useCheckDefaultTheme';
import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';

interface IProps {
  className?: string;
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

const Container: FC<IProps> = ({ children, className }) => {
  const isDefault = useCheckDefaultTheme();
  const styles = useStyles({
    isDefault,
  });
  return <div className={classNames(styles.block, className)}>{children}</div>;
};

export default Container;
