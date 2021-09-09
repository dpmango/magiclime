import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  HeaderModule,
  HeaderButton,
  HeaderLogo,
  HeaderLogin,
  Header as ConstaHeader,
} from '@consta/uikit/Header';
import { IconHamburger } from '@consta/uikit/IconHamburger';

import { getBalance } from 'utils/api/routes/payment';

import useResolution from '../../../hooks/useResolution';
import { RootState } from '../../../store/reducers/rootReducer';
import { SetStateType, Theme } from '../../../types/common';
import bitcoin from '../../../assets/images/bitcoin.png';
import UserDropdown from './UserDropdown';
import Logo from '../../../assets/images/logo.svg';
import useStyles from './styles';

interface IHeaderProps {
  theme: Theme;
  setTheme: SetStateType<Theme>;
  toggleMenu: VoidFunction;
}

const Header = ({ theme, setTheme, toggleMenu }: IHeaderProps) => {
  const styles = useStyles();
  const [isOpen, setOpen] = useState(false);
  const { isLogged, profile } = useSelector((state: RootState) => state.user);
  const ref = useRef<HTMLDivElement>(null);
  const size = useResolution();
  const isMobile = size.width <= 480;

  useEffect(() => {
    const fetchFunc = async () => {
      const [err, data] = await getBalance();
      if (err) {
        console.log('error getting balance', err);
      }

      console.log(data);
    };

    fetchFunc();
  }, []);

  return (
    <div className={styles.root}>
      <ConstaHeader
        className={styles.body}
        leftSide={
          <>
            <HeaderModule>
              <HeaderButton
                onClick={toggleMenu}
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
                personName="3.130 mBL"
                personInfo="Баланс"
                personAvatarUrl={bitcoin}
                className={styles.clickBlock}
              />
            </HeaderModule>

            <HeaderModule indent="s" className={styles.relative}>
              <div ref={ref}>
                <HeaderLogin
                  isLogged={isLogged}
                  onClick={() => setOpen(!isOpen)}
                  isMinified={isMobile}
                  personName={profile.name}
                  personAvatarUrl={profile.avatar && profile.avatar.image}
                  personInfo="8 уровень"
                  className={styles.clickBlock}
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
