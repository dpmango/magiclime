import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    borderRadius: 'var(--control-radius)',
    border:
      'var(--control-border-width) solid var(--color-control-bg-border-default)',
    '& *': {
      fontFamily: 'Gotham Pro, sans-serif',
    },
  },
  editor: {
    background: 'var(--color-control-bg-default)',
    color: 'var(--color-control-typo-default)',
    padding: '48px 32px',
    margin: 0,
    '& .public-DraftStyleDefault-block': {
      margin: 0,
    },
    '& span[style*="font-family: monospace"]': {
      background: 'var(--color-bg-system) !important',
    },
  },
  toolbar: {
    margin: 0,
    background: 'var(--color-control-bg-default)',
    color: 'var(--color-control-typo-default)',
    border: 'none',
    '& div[aria-selected], .rdw-option-wrapper': {
      background: 'none',
      border: 'none',
      boxShadow: 'none !important',
      transition: 'all .2s linear',
      '&:hover': {
        background: 'var(--color-bg-system)',
      },
    },
    '& div[aria-selected=true], & div[aria-expanded=true]': {
      background: 'var(--color-bg-system)',
    },
  },
});

export default useStyles;
