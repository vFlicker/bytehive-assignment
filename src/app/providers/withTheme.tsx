import { Global, ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ComponentType } from 'react';

import { globalFonts, globalResets, SpriteWithIcons, theme } from '../tokens';

export const withTheme = (Component: ComponentType) => () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Global styles={globalFonts} />
    <Global styles={globalResets} />
    <Component />
    <SpriteWithIcons />
  </ThemeProvider>
);
