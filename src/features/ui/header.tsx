import { RiMoonLine } from "react-icons/ri";
import { styled } from "styled-components";

import { H1, H3 } from "@features/resources/font";

const Head = styled.div`
  background-color: #fafafa;
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
  return (
    <Head>
      <HeadContent>
        <H1>Where in the world?</H1>
        <ModeSet>
          <MoneIcon />
          <H3>Dark Mode</H3>
        </ModeSet>
      </HeadContent>
    </Head>
  );
}
