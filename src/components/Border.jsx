import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Border({ borders }) {
  const [borderNames, setBorderNames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!borders || borders.length === 0) {
      setBorderNames([]);
      return;
    }

    async function fetchBorderNames() {
      setIsLoading(true);
      try {
        const codes = borders.join(",");
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha?codes=${codes}`
        );
        if (!res.ok) throw new Error("Failed to fetch countries data");
        const data = await res.json();

        const formatted = data.map((country) => ({
          name: country.name.common,
          code: country.cca3,
        }));

        setBorderNames(formatted);
      } catch (error) {
        console.error(error.message);
        setBorderNames([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBorderNames();
  }, [borders]);

  if (!borders || borders.length === 0) return;

  return (
    <div className="flex items-start md:items-center flex-col md:flex-row flex-wrap text-base leading-6 font-bold text-[#111517] gap-4">
      Border Countries:
      {isLoading ? (
        <p className="font-light">Loading Borders...</p>
      ) : (
        <div className="flex gap-4 flex-wrap">
          {borderNames.map((border) => (
            <button key={border.code}>
              <Link
                to={`/${border.code}`}
                className="flex justify-center items-center min-w-24 min-h-7 p-1 shadow-[0_0_4px_1px_rgba(0,0,0,0.1049)] rounded-xs text-sm font-light text-[#111517]"
              >
                {border.name}
              </Link>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
