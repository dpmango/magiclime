import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    height: '100%',
    opacity: 0.5,
  },
  box: {
    flex: '1 0 auto',
    width: '100%',
    position: 'relative',
    zIndex: 1,
    marginTop: 20,
    overflow: 'hidden',
    borderRadius: 10,
    background: 'var(--color-bg-default)',
    padding: 24,
    border: '1px solid var(--color-bg-border)',
  },
  boxList: {
    flex: '1 0 auto',
    paddingBottom: 24,
  },
  boxCta: {},

  event: {
    marginBottom: 15,
    '&:last-child': {
      marginBottom: 0,
    },
  },
  eventBox: {
    flex: '0 0 30px',
    width: 30,
    height: 30,
    borderRadius: 6,
    background: 'var(--color-bg-secondary)',
    fontSize: 0,
    '& img': {
      width: '100%',
    },
  },
  eventContent: {
    paddingLeft: 16,
    '& .Text': {
      fontSize: 14,
    },
  },
});

export default useStyles;
