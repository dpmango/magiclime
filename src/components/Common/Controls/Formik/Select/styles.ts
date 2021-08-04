import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  star: {
    color: 'var(--color-typo-alert)',
    marginLeft: '5px',
  },
  input: {
    width: '100%',
  },
  selectItemCustom: {
    display: 'inline-flex',
    alignItems: 'center',
    '& img': {
      maxWidth: 16,
      marginRight: 10,
      // TODO font-like fix
      transform: 'translateY(-1px)',
    },
  },
}));

export default useStyles;
