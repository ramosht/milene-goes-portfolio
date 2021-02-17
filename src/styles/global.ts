import { createGlobalStyle } from 'styled-components';
import { colors } from '../../styles/variables';

const global = createGlobalStyle`
  // CSS Reset
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html, body, #__next {
    width: 100%;
    font-size: 16px;
    color: ${colors.black};
    overflow-x: hidden;
  }
  html, #__next {
    width: 100%;
    font-size: 16px;
    color: ${colors.black}
  }
  body{
    font-family: 'Open Sans', sans-serif;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;

export default global;
