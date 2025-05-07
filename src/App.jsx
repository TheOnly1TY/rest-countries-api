import { FilterRegion } from "./components/FilterRegion";
import { Header } from "./components/Header";
import { SearchField } from "./components/SearchField";

export default function App() {
  return (
    <div>
      <Header />
      <div className="max-w-[80rem] mx-auto flex justify-between items-center px-4 my-10">
        <SearchField />
        <FilterRegion />
      </div>
    </div>
  );
}
