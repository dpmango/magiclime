import { Button } from '@consta/uikit/Button';
import React, { FC, useMemo } from 'react';
import Flex from '../../../Common/Flex';
import Typography from '../../../Common/Typography';
import useStyles from './styles';

const Rates: FC = () => {
  const styles = useStyles();

  const rates = useMemo(
    () => [
      {
        id: 1,
        title: 'Новичок',
        icon: 'images/premium/beginner.svg',
        price: 0,
        description: 'Регистрируйся и узнай о новой платформе',
        availableDescription: 'Для тебя доступно',
        available: [
          { id: 1, name: 'Вступительный курс' },
          { id: 2, name: 'Чат "Новичок"' },
          { id: 3, name: 'База знаний' },
          { id: 4, name: 'Узнавай всё первым в разделе "Новости"' },
        ],
      },
      {
        id: 2,
        title: 'Партнёр',
        icon: 'images/premium/partner.svg',
        price: 4,
        description: 'Для опытных пользователей, которые хотят большего',
        availableDescription: 'Дополнительно к "Новичку"',
        available: [
          { id: 1, name: 'Курсы по различным тематикам' },
          { id: 2, name: 'Учавствуй в программах и зарабатывай вместе с нами' },
          { id: 3, name: 'Общайся с коллегами в чатах' },
          { id: 4, name: 'Собирай свою команду' },
          { id: 5, name: 'Делись опытом на форуме' },
          { id: 6, name: 'Учавствуй в рейтинге пользователей' },
        ],
      },
      {
        id: 3,
        title: 'Преподаватель',
        icon: 'images/premium/teacher.svg',
        price: 8,
        description: 'Для тех, кто готов делиться опытом',
        availableDescription: 'Дополнительно к "Новичку" и "Партнёру"',
        available: [
          { id: 1, name: 'Сооздавай свои курсы' },
          { id: 2, name: 'Делись знаниями в своём собственном чате' },
          { id: 3, name: 'Монетизируй свой опыт' },
          { id: 4, name: 'Управляй своим контентом' },
        ],
      },
      {
        id: 4,
        title: 'Наставник',
        icon: 'images/premium/mentor.svg',
        price: 10,
        description: 'Развивай и поддерживай свою команду',
        availableDescription: 'Дополнительно',
        available: [
          { id: 1, name: 'Управляй своими командами через чаты' },
          { id: 2, name: 'Создавай вебинары для команд' },
          { id: 3, name: 'Чат "Лидеров"' },
        ],
      },
    ],
    []
  );

  return (
    <>
      <div className={styles.header}>
        <Typography className={styles.headerItem}>Для начинающик</Typography>
        <Typography className={styles.headerItem}>
          Для команд и бизнеса
        </Typography>
      </div>
      <div className={styles.rates}>
        {rates.map((rate) => (
          <Flex direction="column" key={rate.id} className={styles.rate}>
            <img src={rate.icon} alt="rate_icon" />
            <Typography size="2xl">{rate.title}</Typography>
            <Typography weight="bold" size="3xl" margin="6px 0 21px">
              ${rate.price}
            </Typography>
            <Button label="Оплатить" className={styles.buy} />
            <Typography margin="19px 0 15px" view="secondary" size="s">
              {rate.description}
            </Typography>
            <Typography margin="0 0 12px" view="secondary" size="s">
              {rate.availableDescription}
            </Typography>
            <ul>
              {rate.available.map((item) => (
                <li key={item.id}>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </Flex>
        ))}
      </div>
    </>
  );
};

export default Rates;
