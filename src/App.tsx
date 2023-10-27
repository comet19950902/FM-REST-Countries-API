import { BrowserRouter } from "react-router-dom";

import { Footer, Header } from "@features/ui";
import Router from "pages/Router";

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
