import React, { FC } from 'react';
import { Text } from '@consta/uikit/Text';
import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';

interface IProps extends React.ComponentProps<typeof Text> {
  margin?: string;
}

const useStyle = makeStyles<null, IProps>(() => ({
  text: (props) => ({
    margin: props.margin || 0,
  }),
}));

const Typography: FC<IProps> = ({ children, margin, className, ...props }) => {
  const styles = useStyle({ margin });
  return (
    <Text className={classNames(styles.text, className)} {...props}>
      {children}
    </Text>
  );
};

export default Typography;
