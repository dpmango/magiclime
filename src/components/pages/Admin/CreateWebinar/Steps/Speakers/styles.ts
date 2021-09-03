import { makeStyles } from '@material-ui/core';
import { COLORS } from '../../../../../../utils/constants/colors';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '650px',
  },
  speaker: {
    display: 'grid',
    gridTemplateColumns: '72px 1fr 1fr',
    gridGap: '24px',
    marginBottom: '48px',
    width: '100%',
    position: 'relative',
  },
  deleteBtn: {
    position: 'absolute',
    top: '-25px',
    right: '-15px',
  },
  textarea: {
    gridColumn: '1/4',
  },
  photoWrapper: {
    width: '64px',
    height: '64px',
    marginRight: '8px',
    position: 'relative',
    borderRadius: '50%',
    border: `1px solid ${COLORS.layoutBorderColor}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& > img': {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      objectFit: 'cover',
    },
    '& > span': {
      color: 'var(--color-bg-system)',
      width: '40px',
      height: '40px',
    },
  },
  addPhoto: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '26px',
    height: '26px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--color-bg-brand)',
    cursor: 'pointer',
    '& > span': {
      color: '#fff',
    },
  },
}));

export default useStyles;
