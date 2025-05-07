import { CountriesList } from "./components/CountriesList";
import { CountryItem } from "./components/CountryItem";
import { FilterRegion } from "./components/FilterRegion";
import { Header } from "./components/Header";
import { SearchField } from "./components/SearchField";

export default function App() {
  return (
    <div>
      <Header />
      <div className="flex-col md:flex-row max-w-[80rem] mx-auto flex justify-between items-start md:items-center px-4 my-8 md:my-10">
        <SearchField />
        <FilterRegion />
      </div>
      <CountriesList />
    </div>
  );
}
