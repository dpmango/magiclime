import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {},
  formBlock: {
    marginBottom: '24px',
    '& .TextField': {
      width: '100%',
    },
  },
  small: {
    marginBottom: '6px',
  },
  group: {
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
