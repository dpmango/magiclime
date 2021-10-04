import { makeStyles } from '@material-ui/core';
import { COLORS } from '../../../../utils/constants/colors';

const useStyles = makeStyles({
  header: {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '43px',
    marginBottom: '20px',
  },
  headerItem: {
    paddingBottom: '20px',
    borderBottom: `1px solid ${COLORS.layoutBorderColor}`,
  },
  rates: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '22px',
  },
  rate: {
    '& > ul': {
      color: 'var(--color-typo-secondary)',
      fontSize: '14px',
      lineHeight: '21px',
      listStyleImage: 'url("images/premium/check.svg")',
      listStylePosition: 'inside',
      '& > li': {
        marginBottom: '12px',
        '& > span': {
          marginLeft: '4px',
        },
      },
    },
  },
  buy: {
    transition: 'opacity .3s linear',
    background: 'var(--color-bg-brand)',
    color: '#fff',
    '&:hover': {
      opacity: 0.7,
    },
    '&:disabled': {
      background: 'var(--color-control-bg-disable)',
    },
  },
  selected: {
    background: 'var(--color-typo-normal) !important',
  },
});

export default useStyles;
