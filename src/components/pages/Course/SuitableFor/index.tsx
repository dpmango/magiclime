import React, { FC } from 'react';
import Typography from 'components/Common/Typography';
import cns from 'classnames';
import { useTranslation } from 'react-i18next';
import { useCheckDefaultTheme } from 'hooks/useCheckDefaultTheme';

import useStyles from './styles';
import useStylesRoot from '../styles';

const CourseSuitable: FC = () => {
  const isDefaultTheme = useCheckDefaultTheme();
  const styles = useStyles({ darkmode: !isDefaultTheme });
  const rootStyles = useStylesRoot();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <div className={rootStyles.container}>
        <Typography size="4xl" weight="semibold" lineHeight="s">
          <Typography
            as="span"
            view="brand"
            size="4xl"
            weight="semibold"
            lineHeight="s"
          >
            {t('course.page.suitableFor.accent')}
          </Typography>
          &nbsp;{t('course.page.suitableFor.main')}
        </Typography>

        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <Typography as="h2" weight="semibold" size="3xl" lineHeight="xs">
              Финансистам в смежных областях
            </Typography>
            <Typography
              margin="16px 0 0px"
              as="p"
              view="secondary"
              className={styles.description}
            >
              Если вы работаете бухгалтером, казначеем, аудитором или
              специалистом в банке — мы поможем систематизировать знания и
              подготовить к успешному входу в смежную профессию
            </Typography>
          </div>
          <div className={styles.gridItem}>
            <div className={styles.image} />
          </div>
        </div>

        <div className={cns(styles.grid, 'reverse')}>
          <div className={styles.gridItem}>
            <div className={styles.image} />
          </div>
          <div className={styles.gridItem}>
            <Typography as="h2" weight="semibold" size="3xl" lineHeight="xs">
              Начинающим финансовым аналитикам
            </Typography>
            <Typography
              margin="16px 0 0px"
              as="p"
              view="secondary"
              className={styles.description}
            >
              Если хотите систематизировать знания по управлению финансовыми
              ресурсами бизнеса и расширить компетенции для профессионального
              роста
            </Typography>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <Typography as="h2" weight="semibold" size="3xl" lineHeight="xs">
              Выпускникам финансовых вузов
            </Typography>
            <Typography
              margin="16px 0 0px"
              as="p"
              view="secondary"
              className={styles.description}
            >
              Если хотите подробно узнать, как устроен бизнес изнутри, получить
              практические навыки для старта в карьере и успешной работы с
              реальными кейсами
            </Typography>
          </div>
          <div className={styles.gridItem}>
            <div className={styles.image} />
          </div>
        </div>

        <div className={cns(styles.grid, 'reverse')}>
          <div className={styles.gridItem}>
            <div className={styles.image} />
          </div>
          <div className={styles.gridItem}>
            <Typography as="h2" weight="semibold" size="3xl" lineHeight="xs">
              Начинающим инвесторам
            </Typography>
            <Typography
              margin="16px 0 0px"
              as="p"
              view="secondary"
              className={styles.description}
            >
              Если хотите научиться читать финансовую отчётность компании, чтобы
              понять стоит ли вкладывать деньги
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSuitable;
