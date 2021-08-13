import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    margin: '140px 0',
  },
  grid: {
    display: 'grid',
    gridGap: '24px',
    gridTemplateColumns: '59.5fr 41.5fr',
    alignItems: 'center',
  },
  gridItem: {},
  list: {
    maxWidth: 552,
  },
  image: {
    width: 360,
    height: 360,
    background: '#DEE4E8',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    borderRadius: '50%',
  },
  icon: {
    flex: '0 0 36px',
    paddingRight: 12,
    textAlign: 'center',
  },
});

export default useStyles;
