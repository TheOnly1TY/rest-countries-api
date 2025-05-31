import { CountriesList } from "../components/CountriesList";
import { CountryControls } from "../components/CountryControls";
import { CountryItem } from "../components/CountryItem";
import { Error } from "../components/Error";
import { Header } from "../components/Header";
import Loader from "../components/loader";
import { useCountry } from "../context/countriesContext";

export default function HomePage() {
  const { isLoading, error } = useCountry();
  return (
    <div>
      <Header />
      <main>
        <CountryControls />
        <>
          {isLoading && <Loader />}
          {error && <Error />}
          {!isLoading && !error && <CountriesList />}
          {/* {isLoading ? <Loader /> : error ? <Error /> : <CountriesList />} */}
        </>
      </main>
    </div>
  );
}
