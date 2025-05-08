import { Link, Outlet } from "react-router-dom";
import { CountriesList } from "./CountriesList";
import { FilterRegion } from "./FilterRegion";
import { Header } from "./Header";
import { SearchField } from "./SearchField";

export function MainLayout() {
  return (
    <>
      <Link to="/country">
        <button>Go</button>
      </Link>
      <div>
        <Header />
        <div className="flex-col md:flex-row max-w-[80rem] mx-auto flex justify-between items-start md:items-center px-4 my-8 md:my-10">
          <SearchField />
          <FilterRegion />
        </div>
        <CountriesList />
      </div>
      <Outlet />
    </>
  );
}
