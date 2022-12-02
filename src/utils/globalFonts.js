import { createGlobalStyle } from 'styled-components';
import manropeMedium from '../fonts/Manrope-Medium.woff2';
import manropeBold from '../fonts/Manrope-Bold.woff2';

export const Font = {
    MANROPE: 'var(--font-manrope)'
};

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Manrope';
    font-weight: 500;
    font-style: normal;
    font-display: swap;
    src: url(${manropeMedium});
  }

  @font-face {
    font-family: 'Manrope';
    font-weight: 700;
    font-style: normal;
    font-display: swap;
    src: url(${manropeBold});
  }

  :root {
    --font-manrope: 'Manrope', Arial, sans-serif;
  }
`;
