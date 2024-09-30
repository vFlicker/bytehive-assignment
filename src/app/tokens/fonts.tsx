import { css } from '@emotion/react';

import {
  interDisplayMedium,
  interDisplayRegular,
  interDisplaySemiBold,
  plusJakartaSansBold,
} from '~/shared/fonts';

export const globalFonts = css`
  @font-face {
    font-family: 'Inter Display';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url(${interDisplayRegular});
  }

  @font-face {
    font-family: 'Inter Display';
    font-weight: 500;
    font-style: normal;
    font-display: swap;
    src: url(${interDisplayMedium});
  }

  @font-face {
    font-family: 'Inter Display';
    font-weight: 600;
    font-style: normal;
    font-display: swap;
    src: url(${interDisplaySemiBold});
  }

  @font-face {
    font-family: 'Plus Jakarta Sans';
    font-weight: 700;
    font-style: normal;
    font-display: swap;
    src: url(${plusJakartaSansBold});
  }

  :root {
    --font-inter-display: 'Inter Display', sans-serif;
    --font-plus-jakarta-sans: 'Plus Jakarta Sans', sans-serif;
  }
`;
