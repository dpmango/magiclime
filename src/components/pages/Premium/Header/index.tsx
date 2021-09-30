import { IconCheck } from '@consta/uikit/IconCheck';
import React, { FC } from 'react';
import cln from 'classnames';
import Flex from '../../../Common/Flex';
import Typography from '../../../Common/Typography';
import useStyles from './styles';
import {
  Cube,
  CenterCube,
  Shadow,
  Border,
  BorderShadow,
  Spiderweb1,
  Spiderweb2,
} from './cube';

const Header: FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Typography size="4xl" weight="bold" margin="0 0 25px">
        Цифровой университет
      </Typography>
      <Typography size="xl" margin="0 0 95px">
        Мы не стремимся изменить образование, мы стремимся
        <br />
        сделать образование доступнее и удобнее.
      </Typography>
      <Flex align="stretch">
        <div className={styles.block}>
          <div className={styles.card}>
            {Spiderweb1}
            <Typography view="link" size="xs">
              Университет ИТМО
              <IconCheck size="xs" className={styles.checkIcon} />
            </Typography>
            <Typography size="xl">Цифровизация ИТМО</Typography>
            <Typography view="ghost" size="s">
              Новая инфраструктура Университета ИТМО
            </Typography>
          </div>
          <div className={styles.card}>
            {Spiderweb2}
            <Typography view="link" size="xs">
              Университет ИТМО
              <IconCheck size="xs" className={styles.checkIcon} />
            </Typography>
            <Typography size="xl">Цифровизация ИТМО</Typography>
            <Typography view="ghost" size="s">
              Новая инфраструктура Университета ИТМО
            </Typography>
          </div>
        </div>
        <div className={cln(styles.cubeContainer, styles.block)}>
          <Shadow className={styles.shadow} />
          <Border className={styles.border} />
          <BorderShadow className={styles.borderShadow} />
          <div className={styles.basement}>
            <Cube className={cln(styles.cube, styles.cube_1)} />
            <Cube className={cln(styles.cube, styles.cube_2)} />
            <Cube className={cln(styles.cube, styles.cube_3)} />
            <Cube className={cln(styles.cube, styles.cube_4)} />
            <Cube className={cln(styles.cube, styles.cube_5)} />
            <Cube className={cln(styles.cube, styles.cube_6)} />
            <CenterCube className={cln(styles.cube, styles.centerCube)} />
          </div>
        </div>
      </Flex>
      {/* </div> */}
      {/* <div className={style.banner_bottom}> */}
      {/*    <p> Цифровой университет  — это больше, чем <a className={style.banner_bottom__link}>онлайн</a>.</p> */}
      {/*    <p>Это проект, который позволит университетам выйти в онлайн. Мир все больше стремится к цифровизации процессов, и учебные заведения не исключение. Мы делаем проект не для университета, а для российского образования.</p> */}
      {/* </div> */}
    </div>
  );
};

export default Header;
