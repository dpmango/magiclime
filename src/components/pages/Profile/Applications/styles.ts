/* eslint-disable @typescript-eslint/naming-convention */
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    marginTop: 42,
  },
  apply: {
    marginTop: 24,
  },
  applyProgram: {
    width: '100%',
    maxWidth: 160,
    marginRight: 16,
  },
  applyLevel: {
    width: '100%',
    maxWidth: 80,
    marginRight: 16,
  },
  table: {
    borderCollapse: 'collapse',
    borderSpacing: '0',
    marginTop: 24,
    width: '100%',
    '& th, & td': {
      padding: '8px 14px',
      borderBottom: '1px solid var(--color-bg-border)',
      borderLeft: '1px solid var(--color-bg-border)',
      '&:first-child': {
        borderLeft: 0,
      },
    },
  },

  thead: {
    '& th': {
      fontSize: 12,
      fontWeight: 700,
      textAlign: 'left',
      paddingTop: 16,
      paddingBottom: 16,
      '&:nth-child(5)': {
        borderLeft: 0,
      },
    },
  },
  tbody: {
    '& td': {
      fontSize: 14,
      verticalAlign: 'middle',
      '&:nth-child(2)': {
        // width: 150,
      },
      '&:nth-child(5)': {
        width: 160,
        borderLeft: 0,
        textAlign: 'right',
      },
    },
  },
  actions: {
    marginLeft: 'auto',
    maxWidth: 124,
    '& .Button': {
      marginBottom: 8,
      '&:last-child': {
        marginBottom: 0,
      },
    },
    '& .Button_view_secondary': {
      borderColor: 'var(--color-bg-alert)',
      color: 'var(--color-bg-alert)',
      '&:hover': {
        backgroundColor: 'rgba(var--color-bg-alert), .3)',
      },
    },
  },
  text: {
    maxWidth: 600,
  },
});

export default useStyles;
