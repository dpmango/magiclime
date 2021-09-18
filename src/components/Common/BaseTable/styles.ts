import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  table: {
    /* eslint-disable @typescript-eslint/naming-convention */
    '& .TableCell_isHeader': {
      textTransform: 'initial',
      fontSize: '12px',
    },
    '& p': {
      fontSize: '14px',
    },
  },
  loader: {
    margin: '20px 0',
    top: 'auto',
  },
}));

export default useStyles;
