import { styled } from "styled-components";

import { countryType } from "utilities";
import { H2, H4 } from "@features/resources/font";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 #00000040;
  overflow: hidden;
  background: white;
`;

const FlagCard = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  box-shadow: 0 2px 6px 1px rgba(0, 0, 0, 0.6);
`;

const CountryInfo = styled.div`
  padding: 26px 26px 44px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export function CountryCard({ data }: { data: countryType }) {
  return (
    <Card>
      <FlagCard src={data.flags.svg} />
      <CountryInfo>
        <H2 extra>{data.name.common}</H2>
        <Info>
          <H4>
            Population: <span>{data.population}</span>
          </H4>
          <H4>
            Region: <span>{data.region}</span>
          </H4>
          <H4>
            Capital: <span>{data.capital}</span>
          </H4>
        </Info>
      </CountryInfo>
    </Card>
  );
}
