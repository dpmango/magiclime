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
}));

export default useStyles;
