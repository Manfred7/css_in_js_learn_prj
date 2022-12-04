import { createGlobalStyle } from 'styled-components';
import commissioner from '../fonts/commissioner-regular.woff2';
import commissionerBold from '../fonts/commissioner-semi-bold.woff2';
import gothic from '../fonts/dela-gothic-one-regular.woff2';


export const Font = {
    COMMISSIONER: 'var(--font-commissionere)',
    GOTHIC : 'var(--font-gothic)',
};

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Commissionere';
    font-weight: 400;
    font-style: normal; 
    font-display: swap;
    src: url(${commissioner});
  }

  @font-face {
    font-family: 'Commissionere';
    font-weight: 600;
    font-style: normal;
    font-display: swap;
    src: url(${commissionerBold});
  }

  @font-face {
    font-family: 'gothic';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url(${gothic});
  }

  :root {    
    --font-commissionere: 'Commissionere', Arial, sans-serif;
    --font-gothic: 'gothic', Arial, sans-serif;
  }
`;
