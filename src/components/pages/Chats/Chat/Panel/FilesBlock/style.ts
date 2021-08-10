import { makeStyles } from '@material-ui/core';
import { COLORS } from '../../../../../../utils/constants/colors';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    borderBottom: `1px solid ${COLORS.layoutBorderColor}`,
    overflowX: 'auto',
    padding: '15px',
  },
  file: {
    position: 'relative',
    width: '60px',
    height: '60px',
    '&:not(:last-of-type)': {
      marginRight: '20px',
    },
    '& > img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  delete: {
    position: 'absolute',
    background: 'var(--color-bg-default)',
    right: '-5px',
    border: '1px solid var(--color-typo-alert)',
    top: '-5px',
    width: '18px',
    height: '18px',
    '& path': {
      fill: 'var(--color-typo-alert)',
    },
  },
}));

export default useStyles;
