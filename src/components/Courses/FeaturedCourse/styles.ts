import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  left: {
    marginTop: '95px',
  },
  right: {},
  button: {
    background:
      'linear-gradient(90deg, #0F8F62 0%, #0F8F62 45.83%, #2BB47E 100%)',
  },
  image: {
    position: 'relative',
    overflow: 'hidden',
    // paddingBottom: '55.5%',
    height: '290px',
    wodth: '100%',
    fontSize: '0',
    background:
      'linear-gradient(90deg, #0F8F62 0%, #0F8F62 45.83%, #2BB47E 100%)',
    borderRadius: 'var(--control-radius)',
    '@media screen and (max-width: 768px)': {
      height: '195px',
    },
  },
  recomended: {
    marginBottom: '12px',
  },
  title: {
    paddingBottom: '16px',
    marginBottom: '32px',
    position: 'relative',
    '&::before': {
      content: "''",
      position: 'absolute',
      left: 0,
      bottom: 0,
      height: '2px',
      width: '40px',
      background: 'var(--color-typo-primary)',
    },
    '@media screen and (max-width: 1439px)': {
      fontSize: '40px',
    },
    '@media screen and (max-width: 768px)': {
      fontSize: '32px',
    },
  },
  description: {
    color: 'var(--color-typo-secondary)!important',
    marginBottom: '24px',
  },
  panel: {
    padding: '90px calc(((100vw - 1208px) / 2) + 274px + 40px) 28px 32px',
    marginRight: 'calc(((-100vw + 1208px) / 2) - 274px - 40px)',
    background: '#F7F7F7',
    '@media screen and (max-width: 1023px)': {
      paddingTop: '32px',
      paddingRight: '32px',
      marginRight: '0',
    },
  },
  secondTitle: {
    marginTop: '24px',
  },
  details: {
    margin: '16px 0 8px',
    display: 'flex',
    flexWrap: 'wrap',
    '& > span': {
      marginRight: '16px',
      marginBottom: '8px',
      '&:last-child': {
        marginRight: 0,
      },
    },
  },
});

export default useStyles;
