import React, { FC } from 'react';
import { Grid, GridItem } from '@consta/uikit/Grid';
import Typography from 'components/Common/Typography';
import { Button } from '@consta/uikit/Button';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';

const FeaturedCourse: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <Grid cols="1" gap="xl" breakpoints={{ m: { cols: 2, gap: 'xl' } }}>
      <GridItem className={styles.left}>
        <Typography
          className={styles.recomended}
          weight="semibold"
          transform="uppercase"
        >
          {t('course.featured.tag')}
        </Typography>
        <Typography
          className={styles.title}
          as="h2"
          weight="bold"
          size="5xl"
          lineHeight="xs"
        >
          Блокчейн и криптовалюты
        </Typography>
        <Typography as="p" view="secondary" className={styles.description}>
          Ваш универсальный путеводитель в мире криптовалют. Независимо от того,
          являетесь ли вы новичком, пытающимся разобраться в майнинге, или
          опытным пользователем, желающим разработать торговую стратегию, мы
          сможем вам помочь.
        </Typography>
        <Button
          size="l"
          label={t('course.featured.cta')}
          className={styles.button}
        />
      </GridItem>
      <GridItem className={styles.right}>
        <div className={styles.panel}>
          <div className={styles.image} />
          <Typography
            className={styles.secondTitle}
            size="xl"
            weight="semibold"
          >
            Что такое биткоин?
          </Typography>
          <div className={styles.details}>
            <Typography size="m" as="span" view="ghost">
              3 модуля
            </Typography>
            <Typography size="m" as="span" view="ghost">
              24 задания
            </Typography>
          </div>
          <Button size="s" label="15 опыта" className={styles.button} />
        </div>
      </GridItem>
    </Grid>
  );
};

export default FeaturedCourse;
