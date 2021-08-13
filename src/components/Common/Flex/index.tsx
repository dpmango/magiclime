import React, { FC, CSSProperties, HTMLProps, RefObject } from 'react';
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
  elRef?: RefObject<HTMLDivElement>;
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

const Flex: FC<IProps> = ({
  children,
  className,
  elRef,
  align,
  justify,
  direction,
  wrap,
  margin,
  padding,
  ...props
}) => {
  const styles = useStyles({
    align,
    justify,
    direction,
    wrap,
    margin,
    padding,
  });

  return (
    <div className={classNames(styles.flex, className)} ref={elRef} {...props}>
      {children}
    </div>
  );
};

export default Flex;
