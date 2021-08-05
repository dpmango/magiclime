import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {},
  curBalance: {
    padding: '0 24px',
    margin: '16px -24px 0',
    // padding: '24px',
    // margin: '20px -24px 0',
    // borderTop: '1px solid var(--color-bg-stripe)',
    // borderBottom: '1px solid var(--color-bg-stripe)',
  },
  options: {
    marginTop: 16,
  },
  option: {},
  optionLabel: {
    padding: '14px 0',
    marginRight: 14,
    flex: '0 0 75px',
    borderBottom: '1px solid var(--color-bg-stripe)',
  },
});

export default useStyles;
