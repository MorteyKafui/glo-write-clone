import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`



*,*::before,*::after{
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

html{
  box-sizing: border-box;
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body{
  font-size: 1.6rem;
  font-family: 'Lato', sans-serif;
  line-height: 1.5;
  font-weight: 400;
}


.container{
  max-width: 144rem;
  margin: 0 auto;
  padding: 2rem;
}


a{
  text-decoration: none;
}

ul{
  list-style: none;
}

`;

export default GlobalStyles;

// #fec137
// #00395a
