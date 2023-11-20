import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
*,
  *:before,
  *:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
}

html, body {
    width: 100vw;
    overflow-x: hidden;
}

body{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}


`

export default GlobalStyles;