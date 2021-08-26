import React, { FC, useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Flex from 'components/Common/Flex';
import { Button } from '@consta/uikit/Button';
import Typography from 'components/Common/Typography';
import SvgIcon from 'assets/icons/ConstaIcons';
import { useTranslation } from 'react-i18next';

import useStyles from './styles';
import useRootStyles from '../styles';

interface IProps {
  setAuthOpen: (v: boolean) => void;
}

const Header: FC<IProps> = ({ setAuthOpen }) => {
  const styles = useStyles();
  const rootStyles = useRootStyles();
  const { t } = useTranslation();

  const changeLocale = () => {};

  return (
    <div className={styles.root}>
      <div className={rootStyles.container}>
        <Flex align="center">
          <div className={styles.logo}>
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
                fill="#fafafa"
              />
              <path
                d="M9.62476 12.7525C9.62476 11.0251 11.0251 9.62476 12.7525 9.62476V9.62476C14.4799 9.62476 15.8802 11.0251 15.8802 12.7525V21.0931C15.8802 22.8205 14.4799 24.2208 12.7525 24.2208V24.2208C11.0251 24.2208 9.62476 22.8205 9.62476 21.0931V12.7525Z"
                fill="#fafafa"
              />
              <rect
                x="9.62476"
                y="1.37488"
                width="6.25544"
                height="7.29801"
                rx="3.12772"
                fill="#FFA832"
              />
              <rect
                x="18.7445"
                y="11.3131"
                width="6.25544"
                height="7.29801"
                rx="3.12772"
                fill="#FFA832"
              />
            </svg>
          </div>
          <div className={styles.logo}>MagicLime</div>
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
              <Link to="/webinars" className={styles.menuLink}>
                {t('landing.header.menu.articles')}
              </Link>
            </li>
          </Flex>
          <Flex align="center" className={styles.cta}>
            <div
              className={styles.global}
              role="button"
              tabIndex={0}
              onClick={() => changeLocale()}
            >
              <SvgIcon.Globe size="s" />
            </div>
            <div
              className={styles.global}
              role="button"
              tabIndex={0}
              onClick={() => changeLocale()}
            >
              <SvgIcon.Moon size="s" />
            </div>
            <Button
              className={styles.enterbutton}
              form="round"
              size="s"
              iconRight={SvgIcon.ChevronRight}
              label={t('landing.header.login')}
              onClick={() => setAuthOpen(true)}
            />
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default Header;
