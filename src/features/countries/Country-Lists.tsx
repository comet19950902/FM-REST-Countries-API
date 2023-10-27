import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { countryType } from "utilities";
import { CountryCard } from "./Country-Card";

const CountryBord = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 74px;
`;

export function CountryList() {
  const [lists, setLists] = useState<countryType[]>([]);

  useEffect(() => {
    const getCountryList = async () => {
      const lists = await axios.get(`${import.meta.env.VITE_URL}/all`);
      setLists(lists.data);
    };

    getCountryList();
  }, []);

  return (
    <CountryBord>
      {lists.map((list, index) => (
        <CountryCard data={list} key={index} />
      ))}
    </CountryBord>
  );
}
