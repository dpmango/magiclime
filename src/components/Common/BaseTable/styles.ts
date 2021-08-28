import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  table: {
    /* eslint-disable @typescript-eslint/naming-convention */
    '& .TableCell_isHeader': {
      textTransform: 'initial',
    },
  },
  loader: {
    margin: '20px 0',
    top: 'auto',
  },
}));

export default useStyles;
