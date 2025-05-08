export function FilterRegion() {
  return (
    <select
      className="bg-white w-[200px] h-14 rounded-[5px] text-[12px] md:text-sm leading-5 font-display shadow-[0_2px_9px_0_rgba(0,0,0,0.0532)] mt-10 md:mt-0 px-6 outline-0"
      aria-label="Filter by region"
    >
      <option value="all">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
}
