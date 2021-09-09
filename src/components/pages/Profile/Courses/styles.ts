import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles<null, { view?: string }>(() => ({
  root: {
    position: 'relative',
    height: '100%',
    marginTop: ({ view }) => (view === 'compact' ? 36 : 0),
  },
}));

export default useStyles;
