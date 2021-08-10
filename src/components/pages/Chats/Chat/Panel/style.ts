import { makeStyles } from '@material-ui/core';
import { COLORS } from '../../../../../utils/constants/colors';

const useStyles = makeStyles(() => ({
  root: {
    borderTop: `1px solid ${COLORS.layoutBorderColor}`,
    minHeight: '56px',
    height: 'auto',
  },
  messagePanel: {
    padding: '5px 15px',
    minHeight: '56px',
  },
  input: {
    border: 'none',
    background: 'none !important',
    flex: 1,
    marginLeft: '6px',
  },
  addFile: {
    '& path': {
      fill: 'var(--color-typo-ghost)',
    },
  },
}));

export default useStyles;
