import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
export const GlobalStyles = createGlobalStyle`

${normalize}


@font-face {
  font-display: swap; 
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  src: url('../fonts/montserrat-v25-latin-500.woff2') format('woff2'); 
}

@font-face {
  font-display: swap; 
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  src: url('../fonts/montserrat-v25-latin-600.woff2') format('woff2'); 


}

body {
    font-family: "Montserrat",sans-serif;
    font-weight: 600;
}


ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

h1,
h2,
p {
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  color: inherit;
}

`;
