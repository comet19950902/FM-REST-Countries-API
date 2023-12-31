import { styled } from "styled-components";

import { SearchBar, SelectBar } from "@features/search";
import { CountryList } from "@features/countries";

const Head = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Home() {
  return (
    <>
      <Head>
        <SearchBar />
        <SelectBar />
      </Head>
      <CountryList />
    </>
  );
}
