export interface routerType {
  title: string;
  path: string;
  element: JSX.Element;
}

export interface regionType {
  title: string;
  id: string;
}

export interface countryType {
  altSpellings: Array<string>;
  area: number;
  borders: Array<string>;
  capital: Array<string>;
  ccn3: string;
  coatOfArms: { png: string; svg: string };
  currencies: object;
  flags: {
    alt: string;
    svg: string;
  };
  languages: object;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  name: {
    common: string;
    official: string;
  };
  region: string;
  subregion: string;
  timezones: Array<string>;
}

export const retionList = [
  { title: "Africa", id: "Africa" },
  { title: "America", id: "America" },
  { title: "Asia", id: "Asia" },
  { title: "Europe", id: "Europe" },
  { title: "Oceania", id: "Oceania" },
];
