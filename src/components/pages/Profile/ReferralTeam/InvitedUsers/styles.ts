import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  user: {
    position: 'relative',
    border: '1px solid var(--color-bg-border)',
    padding: '13px 26px 12px 12px',
    // cursor: 'pointer',
    transition: 'background .25s ease-in-out',
    '& > div': {
      width: 'auto',
    },
    '&:hover': {
      background: 'var(--color-bg-stripe)',
    },
  },
});

export default useStyles;
