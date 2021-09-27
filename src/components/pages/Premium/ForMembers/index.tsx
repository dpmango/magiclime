import React, { FC } from 'react';
import Flex from '../../../Common/Flex';
import Typography from '../../../Common/Typography';
import useStyles from './styles';

const ForMembers: FC = () => {
  const styles = useStyles();
  return (
    <>
      <Typography size="3xl" weight="bold" align="center" margin="100px 0 70px">
        Только для участников
      </Typography>
      <div className={styles.container}>
        <Flex direction="column" align="center">
          <img src="images/premium/inside.svg" alt="banner" />
          <Typography
            weight="bold"
            size="l"
            align="center"
            margin="14px 0 10px"
          >
            Что внутри
          </Typography>
          <Typography view="secondary" size="s" align="center">
            Чтобы попасть на площадку вам нужно получить приглашение от одного
            из пользователей
          </Typography>
        </Flex>
        <Flex direction="column" align="center">
          <img src="images/premium/inside.svg" alt="banner" />
          <Typography
            weight="bold"
            size="l"
            align="center"
            margin="14px 0 10px"
          >
            Что внутри
          </Typography>
          <Typography view="secondary" size="s" align="center">
            Чтобы попасть на площадку вам нужно получить приглашение от одного
            из пользователей
          </Typography>
        </Flex>
        <Flex direction="column" align="center">
          <img src="images/premium/inside.svg" alt="banner" />
          <Typography
            weight="bold"
            size="l"
            align="center"
            margin="14px 0 10px"
          >
            Что внутри
          </Typography>
          <Typography view="secondary" size="s" align="center">
            Чтобы попасть на площадку вам нужно получить приглашение от одного
            из пользователей
          </Typography>
        </Flex>
      </div>
    </>
  );
};

export default ForMembers;
