import { Components } from '@mui/material/styles';

export const buttonComponents: Components = {
  MuiButton: {
    defaultProps: {
      variant: 'contained',
    },
    styleOverrides: {
      root: {
        textTransform: 'none',
        padding: '8px 20px',
        fontWeight: 400,
        boxShadow: 'none',
        lineHeight: '18px',
        fontSize: '13px',
        '&:hover': {
          boxShadow: 'none',
        },
      },
      sizeSmall: {
        padding: '4px 16px',
      },
      sizeMedium: {
        padding: '8px 20px',
      },
      sizeLarge: {
        padding: '12px 24px',
      },
    },
  },
}; 