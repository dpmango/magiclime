import React, { FC, useMemo } from 'react';
import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import useResolution from 'hooks/useResolution';
import { Text } from '@consta/uikit/Text';
import { useResponsiveSize } from 'hooks/useResponsiveSize';
import { SizeType } from 'types/common';

type CustomText = Omit<React.ComponentProps<typeof Text>, 'size'>;

interface IProps extends CustomText {
  margin?: string;
  size?: string | SizeType;
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

  const responsiveSize = useResponsiveSize(width, size);

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
