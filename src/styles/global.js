import { createGlobalStyle } from "styled-components";
import { theme } from './theme';

export default createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  html, body{
    margin: 0px;
    padding: 0px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: clamp(14px, .9vw, 24px);
  }
  body {
    background: ${theme.color.background};
    color: ${theme.color.primary};
  }
`;