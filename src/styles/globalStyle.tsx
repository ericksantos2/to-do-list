import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #333333;
    font-family: var(--font-family);
  }
  :root {
    --font-family: 'Rubik', sans-serif;
  }
`

export default GlobalStyle;