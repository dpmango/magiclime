import React, { FC, useMemo } from 'react';
import cln from 'classnames';
import Typography from '../../../Common/Typography';
import useStyles from './styles';

const Inside: FC = () => {
  const styles = useStyles();

  const items = useMemo(
    () => [
      {
        id: 1,
        icon: 'images/premium/inside.svg',
        title: 'Что внутри',
        description:
          'Чтобы попасть на площадку вам нужно получить приглашение от одного из пользователей',
        className: styles.topLeft,
      },
      {
        id: 2,
        icon: 'images/premium/inside.svg',
        title: 'Что внутри',
        description:
          'Чтобы попасть на площадку вам нужно получить приглашение от одного из пользователей',
        className: styles.topRight,
      },
      {
        id: 3,
        icon: 'images/premium/inside.svg',
        title: 'Что внутри',
        description:
          'Чтобы попасть на площадку вам нужно получить приглашение от одного из пользователей',
        className: styles.bottomLeft,
      },
      {
        id: 4,
        icon: 'images/premium/inside.svg',
        title: 'Что внутри',
        description:
          'Чтобы попасть на площадку вам нужно получить приглашение от одного из пользователей',
        className: styles.bottomRight,
      },
    ],
    []
  );

  return (
    <>
      <Typography size="3xl" weight="bold" align="center" margin="100px 0 70px">
        Что нового
      </Typography>
      <div className={styles.container}>
        <img
          src="https://uprostim.com/wp-content/uploads/2021/05/image032-6.jpg"
          alt="banner"
          className={styles.image}
        />
        {items.map((item) => (
          <div className={cln(styles.item, item.className)}>
            <img src={item.icon} alt="inside" />
            <Typography
              weight="bold"
              size="l"
              align="center"
              margin="14px 0 10px"
            >
              {item.title}
            </Typography>
            <Typography view="secondary" size="s" align="center">
              {item.description}
            </Typography>
            <span className={styles.line} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Inside;
