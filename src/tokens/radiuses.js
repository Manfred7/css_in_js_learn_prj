import {createGlobalStyle} from "styled-components";

export const GlobalRadiuses = createGlobalStyle`
  :root {
    --radius-4: 4px
  }
`;

export const Radius = {
    RADIUS_4: 'var(--radius-4)',
};
