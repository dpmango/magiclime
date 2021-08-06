import React, { FC, CSSProperties, HTMLProps } from 'react';
import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';

interface IProps extends HTMLProps<HTMLDivElement> {
  direction?: CSSProperties['flexDirection'];
  margin?: string;
  padding?: string;
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  wrap?: CSSProperties['flexWrap'];
  className?: string;
}

const useStyles = makeStyles<null, Omit<IProps, 'className'>>(() => ({
  flex: (props) => ({
    display: 'flex',
    width: '100%',
    flexDirection: props.direction || 'row',
    alignItems: props.align || 'flex-start',
    justifyContent: props.justify || 'flex-start',
    flexWrap: props.wrap || 'nowrap',
    margin: props.margin || 0,
    padding: props.padding || 0,
  }),
}));

const Flex: FC<IProps> = ({ children, className, ...props }) => {
  const styles = useStyles(props);
  return <div className={classNames(styles.flex, className)}>{children}</div>;
};

export default Flex;
