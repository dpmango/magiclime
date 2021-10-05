/* eslint-disable @typescript-eslint/naming-convention */
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  apply: {
    marginTop: 24,
    width: '100%',
  },
  applyProgram: {
    width: '100%',
    maxWidth: 160,
    marginRight: 16,
  },
  applyLevel: {
    width: '100%',
    maxWidth: 80,
    marginRight: 16,
  },

  text: {
    maxWidth: 600,
  },
  link: {
    marginTop: '20px',
    color: 'var(--color-typo-alert) !important',
  },
});

export default useStyles;
