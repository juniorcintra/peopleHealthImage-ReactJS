import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&family=Roboto:wght@400;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}
html,
body,
#root {
  height: 100%;
  scroll-behavior: smooth;
}
body {
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  background:#fff;
  color:#2B2B2B;
  font-family: "Roboto", sans-serif;
  overflow-x: hidden;
}
a {
  text-decoration: none;
}
div {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
button {
  font-family: "Roboto", sans-serif;
  border: 0;
  cursor: pointer;
}
input {
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Roboto', sans-serif;
  font-weight: unset;
}
ul {
  list-style: none;
}

@media screen and (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

#home {
  scroll-margin-top: 10em;
}
section  {
  scroll-margin-top: 0em;
}

`;

export default GlobalStyle;
