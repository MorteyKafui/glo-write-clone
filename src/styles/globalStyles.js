import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

*,*::before,*::after{
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

html{
  box-sizing: border-box;
  font-size: 62.5%;
}

body{
  font-size: 1.6rem;
  font-family: 'Poppins', sans-serif;
}

`;

export default GlobalStyles;
