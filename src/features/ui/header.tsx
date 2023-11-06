import { RiMoonLine } from "react-icons/ri";
import { styled } from "styled-components";
import { useContext, useEffect } from "react";

import { H2, H4 } from "@features/resources/font";
import { ThemeContext } from "./ThemeContextProvider";

const Head = styled.div`
  background-color: ${({ theme }) => theme.background};
  display: flex;
  justify-content: center;
  box-shadow: 0 5px 4px -3px rgb(0 0 24);
`;

const HeadContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  width: 100%;
  padding: 24px 80px;
`;

const ModeSet = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const MoneIcon = styled(RiMoonLine)`
  font-size: 20px;
`;

export function Header() {
  const { themeStyle, setThemeStyle } = useContext(ThemeContext);

  useEffect(() => {
    console.log("w3423423423423424", themeStyle);
  }, [themeStyle]);

  return (
    <Head>
      <HeadContent>
        <H2>Where in the world?</H2>
        <ModeSet onClick={() => setThemeStyle(!themeStyle)}>
          <MoneIcon />
          <H4>Dark Mode</H4>
        </ModeSet>
      </HeadContent>
    </Head>
  );
}
