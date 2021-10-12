import React, { FC, useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { Button } from '@consta/uikit/Button';

import Flex from 'components/Common/Flex';
import Typography from 'components/Common/Typography';
import SvgIcon from 'assets/icons/ConstaIcons';
import { setLanguage, setTheme, setAuth } from 'store/reducers/settings';
import { Language, Theme } from 'types/common';
import { RootState } from 'store/reducers/rootReducer';

import useStyles from './styles';
import useRootStyles from '../../pages/Landing/styles';

interface IProps {
  isWhite: boolean;
}

const Header: FC<IProps> = ({ isWhite = false }) => {
  const styles = useStyles({
    isWhite,
  });
  const rootStyles = useRootStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const language = useSelector((state: RootState) => state.settings.language);
  const theme = useSelector((state: RootState) => state.settings.theme);

  const switchLocale = useCallback(() => {
    const newLang: Language = language !== 'ru' ? Language.RU : Language.EN;

    i18n.changeLanguage(newLang).then(() => {
      dispatch(setLanguage(newLang));
    });
  }, [language]);

  const switchTheme = useCallback(() => {
    const newTheme: Theme = theme !== Theme.Dark ? Theme.Dark : Theme.Default;

    dispatch(setTheme(newTheme));
  }, [theme]);

  return (
    <div className={styles.root}>
      <div className={rootStyles.container}>
        <Flex align="center">
          <Link to="/home" className={styles.logo}>
            <svg
              width="25"
              height="31"
              viewBox="0 0 25 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="6.8747"
                height="30.2487"
                rx="3.43735"
                fill={isWhite ? '"#fafafa"' : '#1e2329'}
              />
              <path
                d="M9.62476 12.7525C9.62476 11.0251 11.0251 9.62476 12.7525 9.62476V9.62476C14.4799 9.62476 15.8802 11.0251 15.8802 12.7525V21.0931C15.8802 22.8205 14.4799 24.2208 12.7525 24.2208V24.2208C11.0251 24.2208 9.62476 22.8205 9.62476 21.0931V12.7525Z"
                fill={isWhite ? '"#fafafa"' : '#1e2329'}
              />
              <rect
                x="9.62476"
                y="1.37488"
                width="6.25544"
                height="7.29801"
                rx="3.12772"
                fill={isWhite ? '"#FFA832"' : '#FFA832'}
              />
              <rect
                x="18.7445"
                y="11.3131"
                width="6.25544"
                height="7.29801"
                rx="3.12772"
                fill={isWhite ? '"#FFA832"' : '#FFA832'}
              />
            </svg>

            <div className={styles.logoText}>MagicLime</div>
          </Link>

          <Flex as="ul" className={styles.menu}>
            <li>
              <Link to="/courses" className={styles.menuLink}>
                {t('landing.header.menu.about')}
              </Link>
            </li>
            <li>
              <Link to="/courses" className={styles.menuLink}>
                {t('landing.header.menu.courses')}
              </Link>
            </li>
            <li>
              <Link to="/webinars" className={styles.menuLink}>
                {t('landing.header.menu.webinar')}
              </Link>
            </li>
            <li>
              <Link to="/faq" className={styles.menuLink}>
                {t('landing.header.menu.articles')}
              </Link>
            </li>
          </Flex>
          <Flex align="center" className={styles.cta}>
            <div
              className={styles.global}
              role="button"
              tabIndex={0}
              onClick={switchLocale}
            >
              <SvgIcon.Globe size="s" />
            </div>
            <div
              className={styles.global}
              role="button"
              tabIndex={0}
              onClick={switchTheme}
            >
              <SvgIcon.Moon
                size="s"
                view={theme === Theme.Dark ? 'success' : 'primary'}
              />
            </div>
            <Button
              className={styles.enterbutton}
              form="round"
              size="s"
              iconRight={SvgIcon.ChevronRight}
              label={t('landing.header.login')}
              onClick={() =>
                dispatch(setAuth({ opened: true, type: 'sign_in' }))
              }
            />
            <Button
              className={styles.enterbutton}
              form="round"
              size="s"
              iconRight={SvgIcon.ChevronRight}
              label={t('landing.header.registration')}
              onClick={() =>
                dispatch(setAuth({ opened: true, type: 'sign_up' }))
              }
            />
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default Header;
