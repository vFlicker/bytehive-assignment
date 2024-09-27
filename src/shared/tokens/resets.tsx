import { css } from '@emotion/react';

import { Font } from './fonts';

export const globalResets = css`
  * {
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    font-size: 14px;
    line-height: 1.5;
    font-family: ${Font.InterDisplay};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${Font.PlusJakartaSans};
    font-weight: 700;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }

  #root {
    min-height: 100vh;
  }
`;
