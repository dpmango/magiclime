import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  referal: {
    position: 'relative',
    background: 'var(--color-bg-stripe)',
    border: '1px solid var(--color-bg-border)',
    padding: '13px 26px 12px 12px',
    '&:first-child': {
      borderTopWidth: 0,
    },
    '&::before, &::after': {
      display: 'block',
      content: "''",
      position: 'absolute',
      zIndex: 2,
      top: '50%',
      transform: 'translateY(-50%)',
    },
    '&::after': {
      width: 9,
      height: 9,
      left: -24,
      background: 'linear-gradient(41.87deg, #58CC01 0%, #57D4F6 102.92%)',
      borderRadius: '50%',
    },
    '&::before': {
      width: 30,
      height: 1,
      left: -52,
      borderBottom: '1px dashed var(--color-bg-border)',
    },
    '&.nested': {
      background: 'var(--color-bg-default)',
      '&::after': {
        left: 20,
      },
      '&::before': {
        width: 37,
        left: -18,
      },
    },
  },
  referalUser: {
    flex: '0 0 50%',
    minWidth: 1,
    paddingRight: 12,
    '&.nested': {
      paddingLeft: 30,
    },
    '& .Avatar': {
      flexShrink: 0,
    },
    '& .Text': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  },
  referalBtl: {
    flex: '0 0 23%',
    paddingRight: 12,
  },
  referalLevel: {
    flex: '0 0 10%',
    paddingRight: 12,
  },
  referalCount: {
    flex: '0 0 17%',
    textAlign: 'right',
  },
});

export default useStyles;
