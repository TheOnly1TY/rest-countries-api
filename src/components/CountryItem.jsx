export function CountryItem({ countryData }) {
  const { name, capital, region, population, flag } = countryData;
  const formattedPopulation = population
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <div className="w-[264px] md:w-full h-[336px] bg-white font-display shadow-[0_0_7px_2px_rgba(0,0,0,0.0294)] rounded-[5px]">
      <img
        src={flag}
        className="h-[160px] w-full object-cover rounded-t-[5px]"
        alt={`${name} flag`}
      />
      <h2 className="text-lg leading-[26px] text-[#111517] font-extrabold m-6">
        {name}
      </h2>
      <div className="flex flex-col gap-2 mx-6">
        <p className="text-sm leading-4 text-[#111517] font-semibold">
          Population: <span className="font-light">{formattedPopulation}</span>
        </p>
        <p className="text-sm leading-4 text-[#111517] font-semibold">
          Region: <span className="font-light">{region}</span>
        </p>
        <p className="text-sm leading-4 text-[#111517] font-semibold">
          Capital: <span className="font-light">{capital}</span>
        </p>
      </div>
    </div>
  );
}
