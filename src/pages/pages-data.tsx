import { routerType } from "../utilities";
import Country from "./Country";
import Home from "./Home";

const pagesData: routerType[] = [
  { path: "", element: <Home />, title: "" },
  { path: ":countryName", element: <Country />, title: "" },
];

export default pagesData;
