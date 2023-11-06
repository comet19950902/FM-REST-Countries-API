import { BrowserRouter } from "react-router-dom";
import { useContext } from "react";

import Router from "pages/Router";
import { Footer, Header } from "@features/ui";
import { ThemeContext } from "@features/ui/ThemeContextProvider";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "@features/ui/themes";
import { GlobalStyles } from "@features/styles/globalStyles";

function App() {
  const { themeStyle } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={themeStyle ? darkTheme : lightTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
