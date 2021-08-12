import { makeStyles } from '@material-ui/core';
import { COLORS } from '../../../utils/constants/colors';

const useStyles = makeStyles(() => ({
  root: {
    height: '64px',
    minHeight: '64px',
    width: '100%',
    position: 'relative',
    zIndex: 2,
  },
  body: {
    height: '64px',
    width: '100%',
    padding: '0 15px',
    top: '0',
    left: '0',
    position: 'fixed',
    borderBottom: `1px solid ${COLORS.layoutBorderColor}`,
  },
  relative: {
    position: 'relative',
  },
  clickBlock: {
    cursor: 'pointer',
  },
  poorVision: {
    position: 'absolute',
    opacity: 0,
    top: 0,
    left: 0,
    width: '1px',
  },
  dropdownImage: {
    width: '24px',
    height: '24px',
  },
}));

export default useStyles;
