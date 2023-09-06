import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ColorThemeContext";
import Main from "./components/Main";
import Top from "./components/Top";

const App = (): JSX.Element => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Top />
        <Main />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
