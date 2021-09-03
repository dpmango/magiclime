import { makeStyles } from '@material-ui/core';
import { COLORS } from '../../../../../../utils/constants/colors';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    maxWidth: '745px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '24px',
  },
  textarea: {
    gridColumn: '1/3',
  },
  photoWrapper: {
    width: '100%',
    height: '200px',
    border: `1px solid ${COLORS.layoutBorderColor}`,
    borderRadius: '10px',
    marginRight: '24px',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
    '& img': {
      width: '100%',
      height: '200px',
      borderRadius: '10px',
      objectFit: 'cover',
    },
  },
  addPhoto: {
    position: 'absolute',
    bottom: '16px',
    left: '50%',
    transition: 'opacity .3s linear',
    transform: 'translateX(-50%)',
    background: 'var(--color-control-bg-ghost)',
    borderRadius: '4px',
    width: 'calc(100% - 36px)',
    height: '32px',
    color: 'var(--color-control-typo-ghost)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      color: 'var(--color-control-typo-ghost-hover)',
      opacity: 1,
    },
    '& > span': {
      marginRight: '5px',
    },
  },
  haveImage: {
    opacity: 0.6,
  },
}));

export default useStyles;
