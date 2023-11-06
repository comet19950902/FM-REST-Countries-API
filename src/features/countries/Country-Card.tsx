import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import { countryType } from "utilities";
import { H3, H5 } from "@features/resources/font";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 #00000040;
  overflow: hidden;
  background: ${({ theme }) => theme.background};
  cursor: pointer;
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
  const navigate = useNavigate();

  const setURL = () => {
    navigate(`/FM-REST-Countries-API/:${data.name.common}`);
  };

  return (
    <>
      <Card onClick={setURL}>
        <FlagCard src={data.flags.svg} />
        <CountryInfo>
          <H3 extra>{data.name.common}</H3>
          <Info>
            <H5>
              Population: <span>{data.population}</span>
            </H5>
            <H5>
              Region: <span>{data.region}</span>
            </H5>
            <H5>
              Capital: <span>{data.capital}</span>
            </H5>
          </Info>
        </CountryInfo>
      </Card>
    </>
  );
}
