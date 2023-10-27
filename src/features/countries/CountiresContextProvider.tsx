import { createContext, ReactNode, useState } from "react";

import { countryType } from "utilities";

export const CountryContext = createContext<{
  countries: Array<countryType>;
  setCountires: (data: Array<countryType>) => void;
}>({
  countries: [],
  setCountires: () => {},
});

export const CountiresContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [countries, setCountires] = useState<Array<countryType>>([]);

  return (
    <CountryContext.Provider value={{ countries, setCountires }}>
      {children}
    </CountryContext.Provider>
  );
};
