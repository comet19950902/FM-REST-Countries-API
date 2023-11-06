/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from "axios";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { FiArrowLeft } from "react-icons/fi";

import { countryType } from "utilities";
import { H1, H4, H5 } from "@features/resources/font";
import { useNavigate } from "react-router-dom";

const Main = styled.div`
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 80px;
  width: 100%;
`;

const FiArrowLeftIcon = styled(FiArrowLeft)`
  color: ${({ theme }) => theme.text};
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 32px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.background};
  border-radius: 4px;
  box-shadow: 0 0 6px 2px #00000050;

  &:hover ${FiArrowLeftIcon} {
    transform: translateX(-10px);
  }
`;

const Flag = styled.img`
  width: 560px;
  height: 400px;
  box-shadow: 0 0 2px 1px #00000020;
`;

const InfoPad = styled.div`
  display: flex;
  gap: 120px;
  align-items: center;
`;

const Info = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`;

const Pad = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const BorderPad = styled.div`
  margin-top: 48px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

const BorderCountry = styled.div`
  border-radius: 4px;
  padding: 4px 16px;
  box-shadow: 0 0 4px 2px #00000040;
`;

export const CountryInfo = ({ name }: { name: string }) => {
  const [info, setInfo] = useState<countryType>();
  const [commonName, setCommonName] = useState<string>("");
  const [currencie, setCurrencie] = useState<string>("");
  const [langList, setLangList] = useState<Array<string>>([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!name) return;
    const getCountryInfo = async () => {
      const data = await axios.get(`${import.meta.env.VITE_URL}/name/${name}`);
      const list = Object.keys(data.data[0].name.nativeName);
      if (data.data[0].currencies) {
        const currencieList = Object.keys(data.data[0].currencies);
        setCurrencie(data.data[0].currencies[currencieList[0]]["name"]);
      }
      setCommonName(data.data[0].name.nativeName[list[0]]["common"]);
      setLangList(Object.keys(data.data[0].languages));
      //@ts-ignore
      setInfo(data.data[0]);
    };

    getCountryInfo();
  }, [name]);

  return (
    <Main>
      <BackButton onClick={() => navigate("/FM-REST-Countries-API")}>
        <FiArrowLeft />
        <H5>Back</H5>
      </BackButton>
      <InfoPad>
        <Flag src={info?.flags.png}></Flag>
        <div>
          <H1 bold>{info?.name.common}</H1>
          <Info>
            <Pad>
              <H4 name bold>
                <strong>Native Name: </strong>
                {commonName}
              </H4>
              <H4 name bold>
                <strong>Population: </strong>
                {info?.population.toLocaleString("de-DE")}
              </H4>
              <H4 name bold>
                <strong>Region: </strong>
                {info?.region}
              </H4>
              <H4 name bold>
                <strong>Sub Region: </strong>
                {info?.subregion}
              </H4>
              <H4 name bold>
                <strong>Capital: </strong>
                {info?.capital}
              </H4>
            </Pad>
            <Pad>
              <H4 name bold>
                <strong>Top Level Domain: </strong>
                {info?.tld[0]}
              </H4>
              <H4 name bold>
                <strong>Currencies: </strong>
                {currencie}
              </H4>
              <H4 name bold>
                <strong>Languages: </strong>
                {langList.map((item, index) => (
                  //@ts-ignore
                  <span key={index}>{info?.languages[item]} </span>
                ))}
              </H4>
            </Pad>
          </Info>
          <BorderPad>
            {info?.borders && (
              <>
                <H4 bold>Border Countries: </H4>
                {info?.borders.map((border, index) => (
                  <BorderCountry key={index}>
                    <H4>{border}</H4>
                  </BorderCountry>
                ))}
              </>
            )}
          </BorderPad>
        </div>
      </InfoPad>
    </Main>
  );
};
