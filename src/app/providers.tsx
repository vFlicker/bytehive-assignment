import { Global, ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import type { Router } from '@remix-run/router/dist/router';
import { RouterProvider } from 'react-router-dom';

import { SpriteWithIcons } from '~/app/tokens';
import { FontType } from '~/shared/fonts';

import { globalFonts, globalResets } from './tokens';

type ProvidersProps = {
  router: Router;
};

const theme = createTheme({
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
    },
    h5: {
      fontFamily: FontType.PlusJakartaSans,
      fontWeight: 700,
    },
    h6: {
      fontFamily: FontType.PlusJakartaSans,
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      main: '#6366F1',
    },
    text: {
      primary: '#111927',
    },
  },
  components: {
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
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0px 6px 30px 0px rgba(0, 0, 0, 0.08)',
        },
      },
    },
  },
});

export function Providers({ router }: ProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Global styles={globalFonts} />
      <Global styles={globalResets} />

      <RouterProvider router={router} />

      <SpriteWithIcons />
    </ThemeProvider>
  );
}
