import React from 'react';
import { styled } from '@material-ui/core';
import Typography from 'components/Common/Typography';

export const ErrorMessage = styled(Typography)({
  color: 'var(--color-typo-alert)',
});

export const StyledTitle = styled(Typography)({
  fontSize: '16px',
  lineHeight: '20px',
  fontWeight: 600,
  marginBottom: '12px',
});

export const StyledDetailsText = styled(Typography)({
  fontSize: '14px',
  lineHeight: '16px',
  marginTop: '14px',
  color: '#0078D2',
});
