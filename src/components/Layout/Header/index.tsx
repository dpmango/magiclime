import React, {
  useContext,
  useRef,
  useState,
  useCallback,
  useMemo,
} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import {
  HeaderModule,
  HeaderButton,
  HeaderLogo,
  HeaderLogin,
  Header as ConstaHeader,
} from '@consta/uikit/Header';
import { IconHamburger } from '@consta/uikit/IconHamburger';
import { Button } from '@consta/uikit/Button';

import { RootState } from 'store/reducers/rootReducer';
import { SetStateType, Theme } from 'types/common';
import useResolution from 'hooks/useResolution';
import { formatPrice } from 'utils/helpers/formatPrice';
import { buyMatricesService } from 'utils/api/routes/referrals';
import { getBalance } from 'store/reducers/profile';
import { getProfile } from 'store/reducers/user';

import { MenuContext } from '../Menu/context';
import UserDropdown from './UserDropdown';
import bitcoin from '../../../assets/images/bitcoin.png';
import Logo from '../../../assets/images/logo.svg';
import useStyles from './styles';

interface IHeaderProps {
  theme: Theme;
  setTheme: SetStateType<Theme>;
}

const Header = ({ theme, setTheme }: IHeaderProps) => {
  const styles = useStyles();
  const { isFull, setFull } = useContext(MenuContext);
  const ref = useRef<HTMLDivElement>(null);
  const history = useHistory();
  const size = useResolution();
  const dispatch = useDispatch();
  const isMobile = size.width <= 480;
  const { t } = useTranslation();

  const [isOpen, setOpen] = useState(false);
  const [buyProcessing, setBuyProcessing] = useState<boolean>(false);
  const isLogged = useSelector((state: RootState) => state.user.isLogged);
  const profile = useSelector((state: RootState) => state.user.profile);
  const balance = useSelector((state: RootState) => state.profile.balance);

  const myBalance = useMemo(() => {
    return `${formatPrice(balance.bitlimes, 0) || `${0}`} Bl`;
  }, [balance]);

  const handleBuyClick = useCallback(async () => {
    history.push('/buy_premium');
    // if (buyProcessing) return;
    //
    // setBuyProcessing(true);
    //
    // const [err, res] = await buyMatricesService({
    //   level: 1,
    //   program: 1,
    // });
    //
    // if (err || !res) {
    //   if (err && err!.status === 400) {
    //     toast.error(t('profile.referral.buy.toast.error400'));
    //   } else {
    //     toast.error(t('profile.referral.buy.toast.error500'));
    //   }
    //
    //   setBuyProcessing(false);
    //   return;
    // }
    //
    // toast.success(t('profile.referral.buy.toast.success'));
    //
    // await dispatch(getBalance());
    //
    // await dispatch(getProfile({}));
    //
    // setBuyProcessing(false);
  }, [buyProcessing]);

  return (
    <div className={styles.root}>
      <ConstaHeader
        className={styles.body}
        leftSide={
          <>
            <HeaderModule>
              <HeaderButton
                onClick={() => setFull(!isFull)}
                iconSize="m"
                iconLeft={IconHamburger}
              />
            </HeaderModule>
            <HeaderModule indent="m">
              <HeaderLogo>
                <Link to="/">
                  <Logo />
                </Link>
              </HeaderLogo>
            </HeaderModule>
          </>
        }
        rightSide={
          <>
            {profile.is_bought_1level_bitlime ? (
              <>
                <HeaderModule indent="m">
                  <HeaderLogin
                    isLogged={isLogged}
                    isMinified={isMobile}
                    personName={`${formatPrice(
                      balance.bonus_points,
                      0
                    )} баллов`}
                    personInfo={`${profile.level} уровень`}
                    personAvatarUrl="/images/experience.svg"
                    className={styles.clickBlock}
                  />
                </HeaderModule>
                <HeaderModule indent="m">
                  <HeaderLogin
                    isLogged={isLogged}
                    isMinified={isMobile}
                    personName={myBalance}
                    personInfo="Баланс"
                    personAvatarUrl={bitcoin}
                    className={styles.clickBlock}
                    onClick={() => history.push('/profile/me/balance/')}
                  />
                </HeaderModule>
              </>
            ) : (
              <Button
                view="secondary"
                size="s"
                label="Купить премиум"
                onClick={handleBuyClick}
              />
            )}

            <HeaderModule indent="s" className={styles.relative}>
              <div ref={ref}>
                <HeaderLogin
                  isLogged={isLogged}
                  isMinified={isMobile}
                  personName={profile.username}
                  personAvatarUrl={profile.avatar ? profile.avatar.image : ''}
                  personInfo="127 место"
                  className={styles.clickBlock}
                  onClick={() => setOpen(!isOpen)}
                />
                <a id="specialButton" href="/" className={styles.poorVision}>
                  {' '}
                </a>
              </div>
              {isOpen && (
                <UserDropdown
                  clickOutside={() => setOpen(false)}
                  targetRef={ref}
                  changeTheme={() =>
                    setTheme(theme !== Theme.Dark ? Theme.Dark : Theme.Default)
                  }
                  theme={theme}
                />
              )}
            </HeaderModule>
          </>
        }
      />
    </div>
  );
};

export default Header;
