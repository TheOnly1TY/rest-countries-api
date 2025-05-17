import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import Loader from "./loader";
import { formatNumber } from "../utils/helpers";
import { Border } from "./Border";

export function CountryDetails() {
  const navigate = useNavigate();
  const handleNavigateBack = () => {
    navigate("/");
  };
  const navigation = useNavigation();
  const countryData = useLoaderData();
  console.log(countryData);
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
  } = countryData[0];
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
  const isLoading = navigation.state === "loading";

  if (isLoading) return <Loader />;

  return (
    <div className="max-w-[80rem] mx-auto px-4">
      <button
        className="w-[6.5rem] md:w-[8.5rem] h-8 md:h-10 flex justify-center items-center gap-2 md:gap-3 bg-white shadow-[0_0_7px_0_rgba(0,0,0,0.2931)] text-base text-[#111517] leading-5 font-light font-display rounded-[2px] md:rounded-[6px] cursor-pointer my-8 md:my-10 "
        onClick={handleNavigateBack}
      >
        <img src="/back-icon.svg" /> Back
      </button>

      <div className="flex flex-col md:flex-row md:justify-between items-center font-display gap-10 mb-20">
        <figure className="w-full max-w-[560px]">
          <img src={flags.svg} className="rounded-xl" alt={flags.svg} />
        </figure>
        <aside className="w-full max-w-[598px] my-12 md:my-0">
          <h1 className="text-[2rem] text-[#111517] font-extrabold">
            {displayName}
          </h1>
          <div className="grid md:grid-cols-2 gap-x-32 text-base leading-8 mt-[1.5rem] mb-[2.5rem]">
            <div className="flex flex-col ">
              {details.slice(0, 5).map((detail) => (
                <p key={detail.data} className="font-bold">
                  {detail.name}:{" "}
                  <span className="font-light">{detail.data}</span>
                </p>
              ))}
            </div>
            <div className="flex flex-col mt-8 md:mt-0">
              {details.slice(5).map((detail) => (
                <p key={detail.data} className="font-bold">
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
