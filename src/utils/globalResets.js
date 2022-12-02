import {createGlobalStyle} from "styled-components";
import {Font} from "./globalFonts";

export const GlobalResets = createGlobalStyle`
  * {
    box-sizing: border-box;

    margin: 0;
    padding: 0;

    border: none;
    border-radius: 0;

    background: none;
    box-shadow: none;
  }

  body {
    /*font-family: Arial, sans-serif;*/
/*/!*    font-family: ${Font.MANROPE};
    font-weight: 500;*!/*/
  }

  button,
  input,
  select {
    font: inherit;
  }

  a {
    text-decoration: none;
  }

  ol,
  ul {
    list-style: none;
  }
`;
