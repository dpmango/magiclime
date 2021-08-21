import React, { FC, useMemo } from 'react';
import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import useResolution from 'hooks/useResolution';
import { Text } from '@consta/uikit/Text';
import { useResponsiveSize } from 'hooks/useResponsiveSize';

interface IProps extends React.ComponentProps<typeof Text> {
  margin?: string;
  size?: string;
}

const useStyle = makeStyles<null, IProps>(() => ({
  text: (props) => ({
    margin: props.margin || 0,
    '& a': {
      color: 'var(--color-typo-link) !important',
      textDecoration: 'underline',
      '&:hover': {
        color: 'var(--color-typo-link-hover) !important',
        textDecoration: 'none',
      },
    },
  }),
}));

const Typography: FC<IProps> = ({
  children,
  margin,
  className,
  size,
  ...props
}) => {
  const { width } = useResolution();
  const styles = useStyle({ margin });

  const responsiveSize = useResponsiveSize(size, width);

  return (
    <Text
      className={classNames(styles.text, className)}
      {...props}
      size={responsiveSize}
    >
      {children}
    </Text>
  );
};

export default Typography;
