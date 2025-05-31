import { useCountry } from "../context/countriesContext";

export function Error() {
  const { errMessage } = useCountry();

  return (
    <div className="flex justify-center items-center flex-col">
      <p>
        {errMessage === "continent"
          ? "⛔COUNTRY NOT FOUND IN THIS REGION!!!!"
          : "⛔COUNTRY NOT FOUND!!!!"}
      </p>
      <p>Check your spelling😒and try again.</p>
    </div>
  );
}
