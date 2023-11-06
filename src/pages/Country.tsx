import { useState, useEffect } from "react";

import { CountryInfo } from "@features/countries";
import { useLocation } from "react-router-dom";

export default function Country() {
  const [countryName, setCountryName] = useState<string>("");
  const path = useLocation();

  useEffect(() => {
    setCountryName(path.pathname.split(":")[1]);
  }, []);

  return <CountryInfo name={countryName} />;
}
