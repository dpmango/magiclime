import React, { FC } from 'react';
import cln from 'classnames';
import Typography from '../../../Common/Typography';
import { ConstructorBase, HorizontalEdge, VerticalEdge } from './cube';
import useStyles from './styles';

const Header: FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Typography
        align="center"
        weight="bold"
        size="3xl"
        margin="0 0 11px"
        className={styles.text}
      >
        Что внутри
      </Typography>
      <Typography align="center" className={styles.text}>
        Получите безлимитный доступ к образовательным курсам, сообществу и
        бонусной программе
      </Typography>
      <div className={styles.cubeContainer}>
        <ConstructorBase className={styles.base} />
        <HorizontalEdge className={cln(styles.edge, styles.h_1)} />
        <HorizontalEdge className={cln(styles.edge, styles.h_2)} />
        <HorizontalEdge className={cln(styles.edge, styles.h_3)} />
        <VerticalEdge className={cln(styles.edge, styles.v_1)} />
        <VerticalEdge className={cln(styles.edge, styles.v_2)} />
        <VerticalEdge
          className={cln(styles.edge, styles.v_3, styles.isScale)}
        />
        <VerticalEdge
          className={cln(styles.edge, styles.v_4, styles.isScale)}
        />
        <VerticalEdge className={cln(styles.edge, styles.v_5)} />
      </div>
    </div>
  );
};

export default Header;
