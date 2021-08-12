import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: 24,
    borderRadius: 16,
    height: '100%',
    background: 'var(--color-bg-defaul)',
    border: '1px solid var(--color-bg-border)',
  },
  image: {
    position: 'relative',
    flex: '0 0 auto',
    zIndex: 1,
    borderRadius: 8,
    overflow: 'hidden',
    '& > img': {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    },
  },
  content: {
    height: '100%',
  },
  cta: {
    marginTop: 40,
  },
  referalWrapper: {
    flex: '0 0 auto',
    width: 'auto',
    marginLeft: 'auto',
    paddingLeft: 12,
  },
  referalUsers: {
    paddingRight: 16,
  },
  referalUser: {
    border: '1px solid var(--color-bg-secondary)',
    marginLeft: -12,
    '&:first-child': {
      marginLeft: 0,
    },
  },
  referalUserCount: {
    width: 24,
    height: 24,
    borderRadius: '50%',
    backgroundColor: '#ECF1F4',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    '& span': {
      fontSize: 9,
      fontWeight: 600,
      color: 'var(--color-typo-secondary)',
    },
  },
  author: {
    flex: '0 0 auto',
  },
  tagsContainer: {
    flex: 1,
    '& > div': {
      marginRight: '15px',
      marginTop: '8px',
    },
  },
});

export default useStyles;
