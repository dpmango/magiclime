import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  taskBox: {
    marginTop: 34,
    padding: '32px 32px 24px',
    border: '1px solid var(--color-bg-border)',
    borderRadius: 4,
  },
  continue: {
    marginTop: 32,
  },
  answer: {
    marginTop: 24,
    '& .Button': {
      marginTop: 24,
    },
  },
  uiGroup: {
    marginTop: 24,
  },
  checkboxGroup: {
    '& .RadioGroup-Item:not(:last-child), & .CheckboxGroup-Item:not(:last-child)':
      {
        marginBottom: '14px',
      },
    '& .Radio-Label, & .Checkbox-Label': {
      marginLeft: '12px',
      fontSize: '16px',
      lineHeight: '1.2',
      fontWeight: '400',
    },
  },
});

export default useStyles;
