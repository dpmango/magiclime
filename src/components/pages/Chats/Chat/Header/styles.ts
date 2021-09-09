import { makeStyles } from '@material-ui/core';
import { COLORS } from '../../../../../utils/constants/colors';

const useStyles = makeStyles(() => ({
  header: {
    width: 'calc(100% - 24px)',
    borderBottom: `1px solid ${COLORS.layoutBorderColor}`,
    paddingBottom: '26px',
    marginLeft: '24px',
  },
  avatarWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '56px',
    height: '56px',
    marginRight: '16px',
    border: `1px solid #E8E8E8`,
    borderRadius: '8px',
  },
}));

export default useStyles;
