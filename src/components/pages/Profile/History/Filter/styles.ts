import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  filters: {
    display: 'flex',
    alignItems: 'flex-end',
    marginTop: 36,
  },
  filtersGroup: {
    position: 'relative',
    marginRight: 16,
    '&.input': {
      width: '100%',
      maxWidth: '204px',
    },
    '& .Select': {
      // TODO - something wrong with bottom align
      transform: 'translateY(2px)',
    },
  },
  calendar: {
    position: 'absolute',
    top: 'calc(100% + 6px)',
    left: 0,
    zIndex: 2,
    opacity: 0,
    background: 'var(--color-bg-default)',
    padding: 16,
    border: '1px solid var(--color-bg-border)',
    borderRadius: 6,
    pointerEvents: 'none',
    '&.active': {
      opacity: 1,
      pointerEvents: 'all',
    },
  },
});

export default useStyles;
