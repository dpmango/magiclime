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
    transition: 'all .3s linear',
    color: 'rgba(235, 87, 87, 1)',
    background: 'rgba(253, 245, 242, 1)',
    '&:hover': {
      background: 'rgba(235, 87, 87, 1)',
      color: '#fff',
    },
  },
});

export default useStyles;
