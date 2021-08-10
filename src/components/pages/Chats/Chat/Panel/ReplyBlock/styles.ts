import { makeStyles } from '@material-ui/core';
import { COLORS } from '../../../../../../utils/constants/colors';

const useStyles = makeStyles(() => ({
  root: {
    borderBottom: `1px solid ${COLORS.layoutBorderColor}`,
    padding: '10px 15px',
  },
  text: {
    whiteSpace: 'nowrap',
    maxWidth: '100%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  replyMessage: {
    flex: 1,
    overflow: 'hidden',
    marginLeft: '15px',
  },
  icon: {
    color: 'var(--color-typo-brand)',
  },
}));

export default useStyles;
