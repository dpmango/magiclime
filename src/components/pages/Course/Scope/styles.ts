import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    padding: '70px 0',
  },
  grid: {
    display: 'grid',
    gridGap: '24px',
    gridTemplateColumns: '59.5fr 41.5fr',
    alignItems: 'center',
  },
  gridItem: {},
  image: {
    paddingBottom: '61%',
    background:
      'linear-gradient(90deg, #0F8F62 0%, #0F8F62 45.83%, #2BB47E 100%)',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    borderRadius: 10,
  },
  description: {
    color: '#474D57 !important',
    maxWidth: '552px',
  },
  quote: {
    marginTop: 70,
    padding: 52,
    border: '2px dashed var(--color-bg-brand)',
    borderRadius: 10,
  },
});

export default useStyles;
