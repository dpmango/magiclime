import React, { useContext, useRef, useState, useMemo } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector, useStore } from 'react-redux';
import {
  HeaderModule,
  HeaderButton,
  HeaderLogo,
  HeaderLogin,
  Header as ConstaHeader,
} from '@consta/uikit/Header';
import { IconHamburger } from '@consta/uikit/IconHamburger';

import { RootState } from 'store/reducers/rootReducer';
import { SetStateType, Theme } from 'types/common';
import useResolution from 'hooks/useResolution';
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
  const isMobile = size.width <= 480;

  const [isOpen, setOpen] = useState(false);
  const { isLogged, profile } = useSelector((state: RootState) => state.user);
  const { balance } = useSelector((state: RootState) => state.profile);

  const myBalance = useMemo(() => {
    return `${balance.bitlimes || `${0}`} Bl`;
  }, [balance]);

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
            <HeaderModule indent="m">
              <HeaderLogin
                isLogged={isLogged}
                isMinified={isMobile}
                personName={`${profile.experience} опыта`}
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

            <HeaderModule indent="s" className={styles.relative}>
              <div ref={ref}>
                <HeaderLogin
                  isLogged={isLogged}
                  isMinified={isMobile}
                  personName={profile.name}
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
