import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: 0,
  },
  section: {
    paddingTop: 24,
    paddingBottom: 24,
  },
  achievement: {
    padding: 24,
    border: '1px solid var(--color-bg-border)',
    borderRadius: 8,
  },
  achievementImage: {
    flex: '0 0 80px',
    fontSize: 0,
    '& img': {
      width: '100%',
    },
  },
  achievementRating: {
    marginTop: 16,
    padding: '6px 8px',
    borderRadius: 'var(--control-radius)',
    background: 'rgba(16, 144, 93, 0.1)',
  },
  achievementCta: {
    marginTop: 'auto',
  },
});

export default useStyles;
