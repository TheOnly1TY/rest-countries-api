import { useNavigate, useParams } from "react-router-dom";
import { formatNumber } from "../utils/helpers";
import { Border } from "./Border";
import { useEffect } from "react";
import { useCountry } from "../context/countriesContext";
import Loader from "./loader";
import { useTheme } from "../context/themeContext";

export function CountryDetails() {
  const { dispatch, countryDetails } = useCountry();
  const { theme } = useTheme();
  const { cca3 } = useParams();

  useEffect(() => {
    async function fetchCountryByCCaCode() {
      try {
        dispatch({ type: "COUNTRIES/LOADING", payload: true });
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`);
        if (!res.ok) throw new Error("Failed to fetch Countries Data");
        const data = await res.json();
        dispatch({ type: "SET_COUNTRIES/DETAILS", payload: data });
      } catch (error) {
        console.error(error.message);
      } finally {
        dispatch({ type: "COUNTRIES/LOADING", payload: false });
      }
    }
    fetchCountryByCCaCode();
  }, [cca3, dispatch]);

  const navigate = useNavigate();
  const handleNavigateBack = () => {
    navigate(-1);
    dispatch({ type: "SET_COUNTRIES/DETAILS", payload: [] });
  };

  if (countryDetails.length === 0) return <Loader />;
  const {
    name,
    flags,
    region,
    population,
    subregion,
    tld,
    capital,
    languages,
    currencies,
    borders,
  } = countryDetails[0];
  const formattedCurrencies = Object.values(currencies)[0].name;
  const formattedLanguage = Object.values(languages).join(", ");
  const displayName = name?.common || name?.official;
  const formattedNaiveName = Object.values(name.nativeName)[0].common;

  const details = [
    { name: "Native Name", data: formattedNaiveName },
    { name: "Population", data: formatNumber(population) },
    { name: "Region", data: region },
    { name: "Sub Region", data: subregion },
    { name: "Capital", data: capital.join(", ") },
    { name: "Top Level Domain", data: tld.join(", ") },
    { name: "Currencies", data: formattedCurrencies },
    { name: "Languages", data: formattedLanguage },
  ];

  return (
    <div className="max-w-[80rem] mx-auto px-4">
      <button
        className="w-[6.5rem] md:w-[8.5rem] h-8 md:h-10 flex justify-center items-center gap-2 md:gap-3 bg-white dark:bg-[#2B3844] shadow-[0_0_7px_0_rgba(0,0,0,0.2931)] text-base text-[#111517] dark:text-white leading-5 font-light font-display rounded-[2px] md:rounded-[6px] cursor-pointer my-8 md:my-10 "
        onClick={handleNavigateBack}
      >
        <img src={`${theme ? "/back-icon-light.svg" : "/back-icon.svg"}`} />{" "}
        Back
      </button>

      <div className="flex flex-col md:flex-row md:justify-between items-center font-display gap-10 mb-20">
        <figure className="w-full max-w-[560px]">
          <img src={flags.svg} className="rounded-xl" alt={flags.svg} />
        </figure>
        <aside className="w-full max-w-[598px] my-12 md:my-0">
          <h1 className="text-[2rem] text-[#111517] dark:text-white font-extrabold">
            {displayName}
          </h1>
          <div className="grid md:grid-cols-2 gap-x-32 text-base leading-8 mt-[1.5rem] mb-[2.5rem]">
            <div className="flex flex-col ">
              {details.slice(0, 5).map((detail) => (
                <p
                  key={detail.data}
                  className="text-[#111517] dark:text-white font-bold"
                >
                  {detail.name}:{" "}
                  <span className="font-light">{detail.data}</span>
                </p>
              ))}
            </div>
            <div className="flex flex-col mt-8 md:mt-0">
              {details.slice(5).map((detail) => (
                <p
                  key={detail.data}
                  className="text-[#111517] dark:text-white font-bold"
                >
                  {detail.name}:{" "}
                  <span className="font-light">{detail.data}</span>
                </p>
              ))}
            </div>
          </div>
          <Border borders={borders} />
        </aside>
      </div>
    </div>
  );
}
