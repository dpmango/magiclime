/* eslint-disable @typescript-eslint/naming-convention */
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    padding: '135px 0 60px',
    marginBottom: 135,
  },
  background: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  body: {
    position: 'relative',
    zIndex: 2,
  },
  backgroundPosition: {
    position: 'absolute',
    minWidth: 1000,
    height: 840,
    top: -335,
    left: 0,
    right: 0,
    transformOrigin: '200px 100%',
    transform: 'skewY(-6deg)',
    overflow: 'hidden',
  },
  backgroundCanvas: {
    width: '100%',
    height: '100%',
    '--gradient-color-1': '#ffd848',
    '--gradient-color-2': '#00a600',
    '--gradient-color-3': '#ffa832',
    '--gradient-color-4': '#1dcb5d',
  },
  content: {
    // paddingTop: 20,
    paddingRight: 140,
    '@media screen and (max-width: 1280px)': {
      maxWidth: 640,
      paddingRight: 0,
    },
  },
  title: {
    fontSize: 91,
    color: "#fbfbfb",
    opacity: 0.95,
    letterSpacing: '-0.5px',
    lineHeight: 1.3,
    fontWeight: 900,
    textShadow: "0 0 #fcfcfc",
    mixBlendMode: 'color-burn',
  },
  blockquote: {
    top: 75,
    position: 'relative',
    fontSize: 18,
    maxWidth: 620,
    marginTop: 40,
    padding: '0px 0 0px 24px',
    mixBlendMode: 'color-burn',
    '&::after': {
      display: 'block',
      content: "''",
      position: 'absolute',
      left: 0,
      width: 4,
      top: 0,
      bottom: 0,
      border: '1px solid #6e6e6e',
      borderRadius: 1,
    },
  },
  cta: {
    marginBottom: -16,
    '& .Button': {
      top: 75,
      marginRight: 16,
      // minWidth: 245,
      marginBottom: 16,
      // '&.Button_view_primary': {
      //   backgroundImage:
      //     'linear-gradient(120deg, #0F8F62 0%, #0F8F62 45.83%, #2BB47E 100%)',
      //   textShadow: '0 0 #b3b3b3',
      // },
      '&.Button_view_secondary': {
        color: 'var(--color-typo-primary)',
        border: '1px solid #6e6e6e',
      },
    },
  },
  panel: {
    padding: '0px calc(((100vw - 1208px) / 2) + 274px + 40px) 0px 40px',
    marginRight: 'calc(((-100vw + 1208px) / 2) - 274px - 40px)',
    background:
      'linear-gradient(hsla(0,0%,100%,.4),hsla(0,0%,100%,.3) 25%,rgba(246,249,252,.3) 50%,#f6f9fc 60%)',
    boxShadow:
      'inset 0 1px 1px 0 hsl(0deg 0% 100% / 10%), 0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%)',
    minHeight: 530,
    borderRadius: 8,
    marginLeft: 60,
    '@media screen and (max-width: 1280px)': {
      marginTop: '32px',
      paddingRight: '32px',
      marginRight: '0',
      maxWidth: 600,
      marginLeft: 132,
    },
  },
  frame: {
    width: '100%',
    transform: 'translate(-132px, 60px)',
    maxWidth: 264,
    height: 530,
    background: '#fff',
    border: '8px solid #f6f9fc',
    borderRadius: 36,
  },
});

export default useStyles;
