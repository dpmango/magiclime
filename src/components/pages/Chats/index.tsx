import React, { FC } from 'react';
import Flex from '../../Common/Flex';
import { RouteComponentProps } from 'react-router-dom';

const Chats: FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const { id } = match.params;
  return (
    <Flex>
      <p>Hello</p>
    </Flex>
  );
};

export default Chats;
