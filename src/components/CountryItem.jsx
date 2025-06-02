import { Link } from "react-router-dom";
import { formatNumber } from "../utils/helpers";

export function CountryItem({ countryData }) {
  const { name, region, population, capital, flags, cca3 } = countryData;
  const displayName = name?.common || name?.official;
  const displayCapital =
    capital?.length > 0 ? capital.join(", ") : "No record found";
  return (
    <li className="w-[264px] md:w-full h-[336px] bg-white dark:bg-[#2B3844] font-display shadow-[0_0_7px_2px_rgba(0,0,0,0.0294)] rounded-[5px]">
      <Link to={`${cca3}`}>
        <img
          src={flags.svg}
          className="h-[160px] w-full object-cover rounded-t-[5px]"
          alt={`${name.common} flag`}
        />
        <h2 className="text-lg leading-[26px] text-[#111517] dark:text-white font-extrabold m-6">
          {displayName}
        </h2>
        <div className="flex flex-col gap-2 mx-6">
          <p className="text-sm leading-4 text-[#111517] dark:text-white font-semibold">
            Population:{" "}
            <span className="font-light">{formatNumber(population)}</span>
          </p>
          <p className="text-sm leading-4 text-[#111517] dark:text-white font-semibold">
            Region: <span className="font-light">{region}</span>
          </p>
          <p className="text-sm leading-4 text-[#111517] dark:text-white font-semibold">
            Capital: <span className="font-light">{displayCapital}</span>
          </p>
        </div>
      </Link>
    </li>
  );
}
