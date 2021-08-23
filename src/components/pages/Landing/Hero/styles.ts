/* eslint-disable @typescript-eslint/naming-convention */
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    padding: '0px 0 60px',
    marginBottom: 135,
  },
  content: {
    paddingRight: 140,
    '@media screen and (max-width: 1280px)': {
      maxWidth: 640,
      paddingRight: 0,
    },
  },
  title: {
    fontSize: 52,
  },
  blockquote: {
    position: 'relative',
    fontSize: 20,
    padding: '0px 0 0px 24px',
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
      marginRight: 16,
      minWidth: 255,
      height: 55,
      marginBottom: 16,
      '&.Button_view_primary': {
        backgroundImage:
          'linear-gradient(120deg, #0F8F62 0%, #0F8F62 45.83%, #2BB47E 100%)',
      },
    },
  },
  panel: {
    padding: '0px calc(((100vw - 1208px) / 2) + 274px + 40px) 0px 40px',
    marginRight: 'calc(((-100vw + 1208px) / 2) - 274px - 40px)',
    background: 'linear-gradient(hsla(0,0%,100%,.4),hsla(0,0%,100%,.3) 25%,rgba(246,249,252,.3) 50%,#f6f9fc 60%)',
    boxShadow: 'inset 0 1px 1px 0 hsl(0deg 0% 100% / 10%), 0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%)',
    minHeight: 530,
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
