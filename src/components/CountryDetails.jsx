import { useNavigate } from "react-router-dom";

export function CountryDetails() {
  const navigate = useNavigate();
  const handleNavigateBack = () => {
    navigate("/");
  };
  const Dummydata = {
    name: "Algeria",
    topLevelDomain: [".dz"],
    alpha2Code: "DZ",
    alpha3Code: "DZA",
    callingCodes: ["213"],
    capital: "Algiers",
    altSpellings: ["DZ", "Dzayer", "Algérie"],
    subregion: "Northern Africa",
    region: "Africa",
    population: 44700000,
    latlng: [28, 3],
    demonym: "Algerian",
    area: 2381741,
    gini: 27.6,
    timezones: ["UTC+01:00"],
    borders: ["TUN", "LBY", "NER", "ESH", "MRT", "MLI", "MAR"],
    nativeName: "الجزائر",
    numericCode: "012",
    flags: {
      svg: "https://flagcdn.com/dz.svg",
      png: "https://flagcdn.com/w320/dz.png",
    },
    currencies: [
      {
        code: "DZD",
        name: "Algerian dinar",
        symbol: "د.ج",
      },
    ],
    languages: [
      {
        iso639_1: "ar",
        iso639_2: "ara",
        name: "Arabic",
        nativeName: "العربية",
      },
    ],
    translations: {
      br: "Aljeria",
      pt: "Argélia",
      nl: "Algerije",
      hr: "Alžir",
      fa: "الجزایر",
      de: "Algerien",
      es: "Argelia",
      fr: "Algérie",
      ja: "アルジェリア",
      it: "Algeria",
      hu: "Algéria",
    },
    flag: "https://flagcdn.com/dz.svg",
    regionalBlocs: [
      {
        acronym: "AU",
        name: "African Union",
        otherNames: [
          "الاتحاد الأفريقي",
          "Union africaine",
          "União Africana",
          "Unión Africana",
          "Umoja wa Afrika",
        ],
      },
      {
        acronym: "AL",
        name: "Arab League",
        otherNames: [
          "جامعة الدول العربية",
          "Jāmiʻat ad-Duwal al-ʻArabīyah",
          "League of Arab States",
        ],
      },
    ],
    cioc: "ALG",
    independent: true,
  };

  const { nativeName, population, region, subregion, capital } = Dummydata;
  return (
    <div className="max-w-[80rem] mx-auto px-4">
      <button
        className="w-[6.5rem] md:w-[8.5rem] h-8 md:h-10 flex justify-center items-center gap-2 md:gap-3 bg-white shadow-[0_0_7px_0_rgba(0,0,0,0.2931)] text-base text-[#111517] leading-5 font-light font-display rounded-[2px] md:rounded-[6px] cursor-pointer my-8 md:my-10 "
        onClick={handleNavigateBack}
      >
        <img src="/back-icon.svg" /> Back
      </button>
      <div className="flex justify-between items-center font-display">
        <figure className="max-w-[560px] h-[401px]">
          <img src={Dummydata.flag} className="rounded-xl" />
        </figure>
        <aside className="max-w-[598px]">
          <h1 className="text-[2rem] text-[#111517] font-extrabold">
            {Dummydata.name}
          </h1>
          <div className="grid grid-cols-2 gap-x-32 text-base leading-8 mt-[1.5rem] mb-[2.5rem]">
            <div className="flex flex-col ">
              <p className="font-bold">
                Native Name: <span className="font-light">{nativeName}</span>
              </p>
              <p className="font-bold">
                Population: <span className="font-light">{population}</span>
              </p>
              <p className="font-bold">
                Region: <span className="font-light">{region}</span>
              </p>
              <p className="font-bold">
                Sub Region: <span className="font-light">{subregion}</span>
              </p>
              <p className="font-bold">
                Capital: <span className="font-light">{capital}</span>
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold">Top Level Domain:</p>
              <p className="font-bold">Currencies:</p>
              <p className="font-bold">Languages:</p>
            </div>
          </div>
          <div className="flex items-center flex-wrap text-base leading-6 font-bold text-[#111517]  gap-4">
            Border Countries:
            <button className="flex  justify-center items-center w-24 h-7 shadow-[0_0_4px_1px_rgba(0,0,0,0.1049)] rounded-xs text-sm font-light text-[#111517]">
              France
            </button>
            <button className="flex justify-center items-center w-24 h-7 shadow-[0_0_4px_1px_rgba(0,0,0,0.1049)] rounded-xs text-sm font-light text-[#111517]">
              Germany
            </button>
            <button className="flex justify-center items-center w-24 h-7 shadow-[0_0_4px_1px_rgba(0,0,0,0.1049)] rounded-xs text-sm font-light text-[#111517]">
              Netherlands
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
