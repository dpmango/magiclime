import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    height: '100%',
  },
  course: {
    flex: '1 0 auto',
    width: '100%',
    position: 'relative',
    zIndex: 1,
    marginTop: 24,
    overflow: 'hidden',
    borderRadius: 10,
    background: 'white',
    padding: 24,
    border: '1px solid var(--color-control-bg-border-ghost)',
  },
  courseImage: {
    flex: '0 0 auto',
    position: 'relative',
    zIndex: 1,
    overflow: 'hidden',
    width: 160,
    borderRadius: 8,
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  courseContent: {
    paddingLeft: 24,
  },
  courseCustomBadge: {
    background: 'rgba(0, 120, 210, 0.15)',
    color: 'var(--color-bg-secondary)',
    textTransform: 'none',
  },
});

export default useStyles;
