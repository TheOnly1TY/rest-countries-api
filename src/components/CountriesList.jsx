import CountriesData from "../../data.json";
import { CountryItem } from "./CountryItem";
import { Home } from "./Home";
export function CountriesList() {
  return (
    <>
      <Home />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[75px] max-w-[80rem] mx-auto px-4 justify-items-center md:justify-items-start mb-10">
        {CountriesData.map((countryData) => (
          <CountryItem countryData={countryData} key={countryData.alpha3Code} />
        ))}
      </div>
    </>
  );
}
