import React, { FC, useCallback, useMemo } from 'react';
import { Button } from '@consta/uikit/Button';
import { toast } from 'react-hot-toast';
import cln from 'classnames';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { getBalance } from '../../../../store/reducers/profile';
import { getProfile } from '../../../../store/reducers/user';
import { buyMatricesService } from '../../../../utils/api/routes/referrals';
import Flex from '../../../Common/Flex';
import Typography from '../../../Common/Typography';
import useStyles from './styles';

const Rates: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const buyRate = useCallback(async (level: number, program: number) => {
    const [err, res] = await buyMatricesService({
      level,
      program,
    });

    if (err || !res) {
      if (err && err!.status === 400) {
        toast.error(t('profile.referral.buy.toast.error400'));
      } else {
        toast.error(t('profile.referral.buy.toast.error500'));
      }
    } else {
      toast.success(t('profile.referral.buy.toast.success'));

      await dispatch(getBalance());

      await dispatch(getProfile({}));
    }
  }, []);

  const rates = useMemo(
    () => [
      {
        id: 1,
        title: 'Новичок',
        icon: 'images/premium/beginner.svg',
        price: 0,
        selected: true,
        disabled: true,
        buyFunc: () => {},
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
        title: 'Ученик',
        icon: 'images/premium/partner.svg',
        price: 0.0004,
        buyFunc: () => buyRate(1, 6),
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
        title: 'Партнёр',
        icon: 'images/premium/teacher.svg',
        price: 0.0011,
        buyFunc: () => buyRate(1, 1),
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
        title: 'Преподаватель',
        icon: 'images/premium/mentor.svg',
        price: 10,
        description: 'Развивай и поддерживай свою команду',
        availableDescription: 'Дополнительно',
        disabled: true,
        buyFunc: () => {},
        available: [
          { id: 1, name: 'Управляй своими командами через чаты' },
          { id: 2, name: 'Создавай вебинары для команд' },
          { id: 3, name: 'Чат "Лидеров"' },
          { id: 4, name: 'Создавай собственные курсы"' },
        ],
      },
    ],
    []
  );

  return (
    <>
      <div className={styles.header}>
        <Typography className={styles.headerItem}>
          Для новых учеников
        </Typography>
        <Typography className={styles.headerItem}>
          Для профессионалов
        </Typography>
      </div>
      <div className={styles.rates}>
        {rates.map((rate) => (
          <Flex direction="column" key={rate.id} className={styles.rate}>
            <img src={rate.icon} alt="rate_icon" />
            <Typography size="2xl">{rate.title}</Typography>
            <Typography weight="bold" size="3xl" margin="6px 0 21px">
              {rate.price} BTC
            </Typography>
            <Button
              label={rate.selected ? 'Выбрано' : 'Оплатить'}
              className={cln(styles.buy, {
                [styles.selected]: !!rate.selected,
              })}
              disabled={!!rate.disabled}
              onClick={rate.buyFunc}
            />
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
