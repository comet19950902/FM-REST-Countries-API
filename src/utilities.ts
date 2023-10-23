export interface routerType {
  title: string;
  path: string;
  element: JSX.Element;
}

export interface regionType {
  title: string;
  id: string;
}

export const retionList = [
  { title: "Africa", id: "Africa" },
  { title: "America", id: "America" },
  { title: "Asia", id: "Asia" },
  { title: "Europe", id: "Europe" },
  { title: "Oceania", id: "Oceania" },
];
