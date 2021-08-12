import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: 22,
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
  speakers: {
    color: 'var(--color-typo-ghost)',
    marginRight: '5px',
  },
  cta: {
    marginTop: 32,
  },
  referalWrapper: {
    flex: '0 0 auto',
    width: 'auto',
    marginLeft: 'auto',
    paddingLeft: 12,
  },
  referalUsers: {
    paddingRight: 12,
  },
  date: {
    fontSize: '14px',
  },
  referalUser: {
    width: 28,
    height: 28,
    border: '1px solid var(--color-bg-secondary)',
    marginLeft: -12,
    '&:first-child': {
      marginLeft: 0,
    },
  },
  referalUserCount: {
    width: 28,
    height: 28,
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
  title: {
    fontSize: 20,
  },
  tagsContainer: {
    flex: 1,
    '& > div': {
      marginRight: '12px',
      // marginTop: '8px',
      background: 'rgba(255, 108, 71, .2)',
      color: '#FF6C47',
      textTransform: 'none',
    },
  },
});

export default useStyles;
