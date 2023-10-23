import { Route, Routes } from "react-router-dom";
import { styled } from "styled-components";
import { routerType } from "../utilities";
import pagesData from "./Pages-Data";

const BodyDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  padding: 48px 80px;
`;

function Router() {
  const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return (
    <BodyDiv>
      <BodyContainer>
        <Routes>{pageRoutes}</Routes>
      </BodyContainer>
    </BodyDiv>
  );
}

export default Router;
