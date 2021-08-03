import { makeStyles } from '@material-ui/core';
import { COLORS } from '../../../../utils/constants/colors';

const useStyles = makeStyles(() => ({
  root: {
    width: '360px',
    minWidth: '310px',
    borderRight: `1px solid ${COLORS.layoutBorderColor}`,
    height: 'calc(100vh - 64px)',
    padding: '24px 0',
    display: 'flex',
    flexDirection: 'column',
  },
  search: {
    width: 'calc(100% - 48px)',
    paddingBottom: '16px',
    borderBottom: `1px solid ${COLORS.layoutBorderColor}`,
    margin: '0 24px 16px',
    height: 'min-content',
    '& > div': {
      width: '100%',
    },
  },
  list: {
    flex: 1,
    overflowY: 'auto',
  },
}));

export default useStyles;
