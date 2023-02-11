import React from "react";
import { BrowserRouter } from "react-router-dom";

import history from "./services/history";
import MainRoutes from "./routes";
import ScrollFixer from "./ScrollFixer";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter history={history}>
        <ScrollFixer />
        <MainRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
