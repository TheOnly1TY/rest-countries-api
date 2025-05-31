import { memo } from "react";
import { FilterRegion } from "./FilterRegion";
import { SearchField } from "./SearchField";

export const CountryControls = memo(() => {
  return (
    <div className="flex-col md:flex-row max-w-[80rem] mx-auto flex justify-between items-start md:items-center px-4 my-8 md:my-10">
      <SearchField />
      <FilterRegion />
    </div>
  );
});
