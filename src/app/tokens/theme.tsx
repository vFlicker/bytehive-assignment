import { createTheme } from '@mui/material';

import { FontType } from '~/shared/assets';

export const theme = createTheme({
  typography: {
    fontFamily: FontType.InterDisplay,
    h1: {
      fontFamily: FontType.PlusJakartaSans,
      fontWeight: 700,
    },
    h2: {
      fontFamily: FontType.PlusJakartaSans,
      fontWeight: 700,
    },
    h3: {
      fontFamily: FontType.PlusJakartaSans,
      fontWeight: 700,
    },
    h4: {
      fontFamily: FontType.PlusJakartaSans,
      fontWeight: 700,
      fontSize: '32px',
      lineHeight: '120%',
    },
    h5: {
      fontFamily: FontType.PlusJakartaSans,
      fontWeight: 700,
    },
    h6: {
      fontFamily: FontType.PlusJakartaSans,
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: '120%',
    },
  },
  palette: {
    primary: {
      main: '#6366F1',
    },
    text: {
      primary: '#111927',
      secondary: '#6C737F',
    },
    success: {
      main: '#15B79E',
    },
    divider: '#F2F4F7',
  },
  components: {
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: '32px 24px 16px',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px',

          '.MuiOutlinedInput-notchedOutline': {
            borderColor: '#f3f3f3',
          },

          '&:hover': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: '#e6e6e6',
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '8px 22px',
          borderRadius: '12px',
          fontWeight: 600,
          boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          boxShadow:
            '0px 0px 0px 0.5px rgba(0, 0, 0, 0.03), 0px 5px 22px 0px rgba(0, 0, 0, 0.04)',
        },
      },
    },
  },
});
