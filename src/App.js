import React from "react";
import { ThemeProvider  } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import history from "./services/history";
import MainRoutes from "./routes";
import ScrollFixer from "./ScrollFixer";

import theme from "./styles/theme";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter history={history}>
        <ThemeProvider  theme={theme}>
          <ScrollFixer />
          <MainRoutes />
        </ThemeProvider >
      </BrowserRouter>
    </>
  );
}

export default App;
