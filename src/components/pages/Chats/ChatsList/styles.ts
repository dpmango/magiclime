import { makeStyles } from '@material-ui/core';
import { COLORS } from '../../../../utils/constants/colors';

const useStyles = makeStyles(() => ({
  root: {
    width: '360px',
    minWidth: '310px',
    borderRight: `1px solid ${COLORS.layoutBorderColor}`,
    height: 'calc(100vh - 64px)',
    display: 'flex',
    flexDirection: 'column',
  },
  list: {
    flex: 1,
    overflowY: 'auto',
  },
  skeleton: {
    width: '100%',
    display: 'flex',
    padding: '12px 16px 5px 18px',
    '& > div:first-of-type': {
      marginRight: '12px',
      borderRadius: '50%',
      flex: 'none',
    },
  },
}));

export default useStyles;
