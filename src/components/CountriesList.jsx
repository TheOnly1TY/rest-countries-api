import { useLoaderData } from "react-router-dom";
import { CountryItem } from "./CountryItem";
import { Home } from "./Home";
import { fetchAllCountries } from "../services/apiFetchCountries";
export function CountriesList() {
  const CountriesData = useLoaderData();

  return (
    <>
      <Home />
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[75px] max-w-[80rem] mx-auto px-4 justify-items-center md:justify-items-start mb-10">
        {CountriesData.map((countryData) => (
          <CountryItem countryData={countryData} key={countryData.cca3} />
        ))}
      </ul>
    </>
  );
}
export default async function countriesLoader() {
  return await fetchAllCountries();
}
