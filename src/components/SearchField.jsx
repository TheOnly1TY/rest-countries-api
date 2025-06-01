import { useCountry } from "../context/countriesContext";

export function SearchField() {
  const { query, dispatch } = useCountry();

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
        aria-label="Search for a country..."
        className="md:w-[30rem] w-full h-12 md:h-14 bg-white outline-0 text-[12px] md:text-sm leading-5 font-display shadow-[0_2px_9px_0_rgba(0,0,0,0.0532)] rounded-[5px] px-15"
      />
      <img
        src="/searchIcon.svg"
        alt="search-icon"
        className="absolute top-1/2 left-6 -translate-y-1/2"
      />
    </div>
  );
}
