import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    /* eslint-disable @typescript-eslint/naming-convention */
    '& > .infinite-scroll-component__outerdiv': {
      width: '100% !important',
    },
  },
  loader: {
    margin: '15px 0',
  },
});

export default useStyles;
