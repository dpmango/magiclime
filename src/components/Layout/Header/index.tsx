import React, { useRef, useState } from 'react';
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
import useResolution from '../../../hooks/useResolution';
import useStyles from './styles';
import { RootState } from '../../../store/reducers/rootReducer';
import { SetStateType } from '../../../types/common';
import bitcoin from '../../../assets/images/bitcoin.png';
import UserDropdown from './UserDropdown';
import Logo from '../../../assets/images/logo.svg';

interface IHeaderProps {
  theme: 'default' | 'dark';
  setTheme: SetStateType<'default' | 'dark'>;
  toggleMenu: VoidFunction;
}

const Header = ({ theme, setTheme, toggleMenu }: IHeaderProps) => {
  const styles = useStyles();
  const [isOpen, setOpen] = useState(false);
  const { isLogged, profile } = useSelector((state: RootState) => state.user);
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useResolution();

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
            <HeaderModule indent={'m'}>
              <HeaderLogo>
                <Link to={'/'}>
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
                personName={'3.130 mBTL'}
                personInfo={'Баланс'}
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
                  personName={profile.name + ' ' + profile.surname}
                  personInfo={'8 уровень'}
                  className={styles.clickBlock}
                />
              </div>
              {isOpen && (
                <UserDropdown
                  clickOutside={() => setOpen(false)}
                  targetRef={ref}
                  changeTheme={() =>
                    setTheme(theme !== 'dark' ? 'dark' : 'default')
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
