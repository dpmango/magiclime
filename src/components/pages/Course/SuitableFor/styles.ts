import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles<null, { darkmode: boolean }>(() => ({
  root: {
    position: 'relative',
    margin: '70px 0',
  },
  grid: {
    display: 'grid',
    gridGap: '76px',
    gridTemplateColumns: '52.5fr 47.5fr',
    margin: '54px 0',
    alignItems: 'center',
    '&.reverse': {
      gridTemplateColumns: '47.5fr 52.5fr',
    },
    '&:last-child': {
      marginBottom: 0,
    },
  },
  gridItem: {},
  image: {
    paddingBottom: '48%',
    background: '#DEE4E8',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    borderRadius: '200px',
  },
  description: {
    color: ({ darkmode }) =>
      !darkmode ? '#474d57!important' : '#b8b2a8!important',
  },
}));

export default useStyles;
