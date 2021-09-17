import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles<null, { short: boolean }>(() => ({
  root: {
    width: '100%',
    marginBottom: ({ short }) => (short ? '8px' : '44px'),
  },
  avatar: {
    width: ({ short }) => (short ? '68px' : '90px'),
    height: ({ short }) => (short ? '68px' : '90px'),
    marginRight: ({ short }) => (short ? '8px' : '16px'),
  },
  description: {
    maxWidth: '745px',
  },
}));

export default useStyles;
