import React, { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '@consta/uikit/Button';
import { toast } from 'react-hot-toast';
import cns from 'classnames';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { ICourse } from 'types/interfaces/courses';
import { useCheckDefaultTheme } from 'hooks/useCheckDefaultTheme';
import { formatPrice } from 'utils/helpers/formatPrice';
import { RootState } from 'store/reducers/rootReducer';

import useStyles from './styles';

interface IProps {
  item: ICourse;
  openModal: (id: number) => void;
}

const CourseCard: FC<IProps> = ({ item, openModal }) => {
  const isDefaultTheme = useCheckDefaultTheme();
  const styles = useStyles({
    category: item.subcategory.id,
    darkmode: !isDefaultTheme,
  });
  const history = useHistory();
  const { t } = useTranslation();

  const profile = useSelector((state: RootState) => state.user.profile);
  const balance = useSelector((state: RootState) => state.profile.balance);

  const handleCardClick = useCallback(() => {
    // else if (profile.level < item.level) {
    //   toast.error(t('course.buy.errorLevel'));
    // }

    if (item.is_bought) {
      history.push(`/courses/${item.id}`);
    } else if (balance.bitlimes < parseInt(item.price, 10)) {
      toast.error(t('course.buy.errorMoney'));
    } else {
      openModal(item.id);
    }
  }, [item]);

  const isBlurred = useMemo(() => {
    if (balance.bitlimes < parseInt(item.price, 10)) {
      return true;
    }
    if (profile.level < item.level && item.level !== 1) {
      return true;
    }

    return false;
  }, [balance.bitlimes, profile.level, item.price]);

  const ctaButtonLabel = useMemo(() => {
    if (item.is_bought) {
      return t('course.card.bought');
    }

    const priceNum = parseInt(item.price, 10);
    return `${formatPrice(priceNum) || '-'} Bl`;
  }, [item]);

  return (
    <div
      onClick={handleCardClick}
      className={cns(styles.root, isBlurred && 'blured')}
    >
      <div className={styles.content}>
        <div>
          <Typography as="p" size="s" className={styles.detail}>
            {item.subcategory.title}
          </Typography>
          <Typography
            as="p"
            size="xl"
            weight="semibold"
            className={styles.title}
          >
            {item.title}
          </Typography>
        </div>

        <div className={styles.contentMeta}>
          <Flex align="center" wrap="wrap">
            {item.level && (
              <Typography
                size="2xs"
                as="p"
                margin="0 0 8px"
                className={styles.detail}
              >
                {t('course.card.level')}: {item.level}
              </Typography>
            )}

            <Button
              size="xs"
              view={item.is_bought ? 'secondary' : 'primary'}
              label={ctaButtonLabel}
            />
          </Flex>
        </div>
      </div>

      {item.image && (
        <div className={styles.image}>
          <img src={item.image.image} alt={item.title} />
        </div>
      )}
    </div>
  );
};

export default CourseCard;
