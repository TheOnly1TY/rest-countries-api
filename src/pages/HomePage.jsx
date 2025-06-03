import { Outlet } from "react-router-dom";
import { CountriesList } from "../components/CountriesList";
import { CountryControls } from "../components/CountryControls";
import { Error } from "../components/Error";
import { useCountry } from "../context/countriesContext";
import { Loader } from "../components/Loader";

export function HomePage() {
  const { isLoading, error } = useCountry();
  return (
    <div>
      <main>
        <CountryControls />
        <>
          {isLoading && <Loader />}
          {error && <Error />}
          {!isLoading && !error && <CountriesList />}
          {/* {isLoading ? <Loader /> : error ? <Error /> : <CountriesList />} */}
        </>
      </main>

      <Outlet />
    </div>
  );
}
