import { useContext } from "react";
import { styled } from "styled-components";

import { CountryContext } from "./CountiresContextProvider";
import { CountryCard } from "./Country-Card";

const CountryBord = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 74px;
`;

export function CountryList() {
  const { countries } = useContext(CountryContext);

  return (
    <CountryBord>
      {countries.map((country, index) => (
        <CountryCard data={country} key={index} />
      ))}
    </CountryBord>
  );
}
