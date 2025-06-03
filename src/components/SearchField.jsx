import { useCountry } from "../context/countriesContext";
import { useTheme } from "../context/themeContext";

export function SearchField() {
  const { query, dispatch } = useCountry();
  const { theme } = useTheme();

  const handleQuerySearch = (e) => {
    e.preventDefault();
    dispatch({ type: "COUNTRIES/ERROR", payload: false });
    dispatch({ type: "COUNTRIES/SEARCH", payload: e.target.value });
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search for a country..."
        value={query}
        onChange={(e) => handleQuerySearch(e)}
        className="md:w-[30rem] w-full h-12 md:h-14 bg-white dark:bg-[#2B3844] dark:text-white placeholder-[#C4C4C4] dark:placeholder-white  outline-0 text-[12px] md:text-sm leading-5 font-display shadow-[0_2px_9px_0_rgba(0,0,0,0.0532)] rounded-[5px] px-15"
      />
      <img
        src={`${theme ? "/search-icon-light.svg" : "/search-icon-dark.svg"}`}
        alt="search-icon"
        className="absolute top-1/2 left-6 -translate-y-1/2"
      />
    </div>
  );
}
