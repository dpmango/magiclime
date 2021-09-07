import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    marginBottom: '95px',
  },
  tag: {
    borderLeft: '1px solid var(--color-typo-link)',
    paddingLeft: '16px',
    fontSize: '15px',
    marginBottom: '16px',
  },
  author: {
    width: '48px',
    height: '48px',
    marginRight: '16px',
  },
  text: {
    flex: 1,
  },
  banner: {
    width: '540px',
    height: '350px',
    boxShadow: '0px 30px 60px rgba(50, 50, 93, 0.25)',
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
    '& > svg': {
      marginLeft: '10px',
      marginTop: '2px',
      '& > path': {
        fill: 'var(--color-typo-link)',
      },
    },
  },
  title: {
    fontSize: '37px',
  },
}));

export default useStyles;
