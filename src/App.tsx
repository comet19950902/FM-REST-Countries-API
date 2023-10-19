import { BrowserRouter } from "react-router-dom";
import { styled } from "styled-components";

import { Footer, Header } from "@features/ui";
import Router from "pages/router";

export const H1 = styled.h1`
  font-size: 24px;
  margin: 0;
  letter-spacing: -0.005rem;
`;

export const H3 = styled.h3`
  font-size: 16px;
  margin: 0;
  letter-spacing: -0.02rem;
`;

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
