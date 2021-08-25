import React, { FC, useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Flex from 'components/Common/Flex';
import { Button } from '@consta/uikit/Button';
import { Modal } from '@consta/uikit/Modal';
import Typography from 'components/Common/Typography';
import SvgIcon from 'assets/icons/ConstaIcons';
import { useTranslation } from 'react-i18next';
import Auth from 'components/Auth';

import useStyles from './styles';
import useRootStyles from '../styles';

const Header: FC = () => {
  const styles = useStyles();
  const rootStyles = useRootStyles();
  const { t } = useTranslation();

  const [isAuthOpen, setAuthOpen] = useState(false);

  const closeModal = useCallback(() => {
    setAuthOpen(false);
  }, []);

  const changeLocale = () => {};

  return (
    <div className={styles.root}>
      <div className={rootStyles.container}>
        <Flex align="center">
          <div className={styles.logo}>Lime</div>
          <Flex as="ul" className={styles.menu}>
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
              form="round"
              size="s"
              iconRight={SvgIcon.ChevronRight}
              label={t('landing.header.login')}
              onClick={() => setAuthOpen(true)}
            />
          </Flex>
        </Flex>
      </div>

      <Modal isOpen={isAuthOpen} hasOverlay onOverlayClick={closeModal}>
        <Auth closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default Header;
