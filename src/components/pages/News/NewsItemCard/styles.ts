import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    marginBottom: '95px',
  },
  newsFlex: {
    gridGap: 25,
  },
  tag: {
    borderLeft: '1px solid #635bff',
    paddingLeft: '16px',
    fontSize: '14px',
    letterSpacing: '.2px',
    lineHeight: '16px',
    marginBottom: '16px',
  },
  author: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    marginRight: '16px',
  },
  text: {
    flex: 1,
    lineHeight: '28px',
    color: 'rgb(71, 77, 87)',
    fontSize: 17,
    '& > a': {
      fontSize: 15,
    },
  },
  banner: {
    width: '540px',
    height: '304px',
    boxShadow:
      '0 30px 60px -12px rgba(50,50,93,0.25),0 18px 36px -18px rgba(0,0,0,0.3)',
    borderRadius: '8px',
    '& > img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: 'inherit',
    },
  },
  readMore: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none !important',
    marginTop: '16px',
    fontWeight: 500,
    '& > svg': {
      marginLeft: '10px',
      '& > path': {
        fill: 'var(--color-typo-link)',
      },
    },
  },
  title: {
    fontSize: '38px',
    maxWidth: '80%',
    lineHeight: 1.26,
    fontWeight: 500,
  },
}));

export default useStyles;
