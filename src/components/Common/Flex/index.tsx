import React, { FC, CSSProperties } from 'react';
import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';

interface IProps {
  direction?: CSSProperties['flexDirection'];
  margin?: string;
  padding?: string;
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  className?: string;
}

const useStyles = makeStyles<null, IProps>(() => ({
  flex: (props) => ({
    display: 'flex',
    flexDirection: props.direction || 'row',
    alignItems: props.align || 'flex-start',
    justifyContent: props.justify || 'flex-start',
    margin: props.margin || 0,
    padding: props.padding || 0,
  }),
}));

const Flex: FC<IProps> = ({ children, className, ...props }) => {
  const styles = useStyles(props);
  return <div className={classNames(styles.flex, className)}>{children}</div>;
};

export default Flex;
