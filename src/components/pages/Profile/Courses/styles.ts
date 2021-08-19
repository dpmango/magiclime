import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles<null, { view?: string }>(() => ({
  root: {
    position: 'relative',
    height: '100%',
    marginTop: ({ view }) => (view === 'compact' ? 36 : 0),
  },
  course: {
    flex: '1 0 auto',
    width: ({ view }) => (view === 'compact' ? '50%' : '100%'),
    position: 'relative',
    zIndex: 1,
    marginTop: 24,
    overflow: 'hidden',
    borderRadius: 10,
    background: 'var(--color-bg-default)',
    padding: ({ view }) => (view === 'compact' ? '24px 24px 24px 0' : '24px'),
    border: '1px solid var(--color-bg-border)',
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
}));

export default useStyles;
