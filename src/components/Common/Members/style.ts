import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles<null, { itemSize: number }>({
  container: {},
  member: {
    border: '1px solid var(--color-bg-secondary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -12,
    '&:first-child': {
      marginLeft: 0,
    },
    width: ({ itemSize }) => `${itemSize}px`,
    height: ({ itemSize }) => `${itemSize}px`,
    fontSize: ({ itemSize }) => Math.floor(itemSize / 2.8),
  },
  membersCount: {
    width: ({ itemSize }) => `${itemSize}px`,
    height: ({ itemSize }) => `${itemSize}px`,
    borderRadius: '50%',
    backgroundColor: '#ECF1F4',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    '& span': {
      fontSize: ({ itemSize }) => Math.floor(itemSize / 2.8),
      fontWeight: 600,
      color: 'var(--color-typo-secondary)',
    },
  },
});

export default useStyles;
