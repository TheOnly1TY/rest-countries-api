import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../context/countriesContext";

export function Border({ borders }) {
  const [borderNames, setBorderNames] = useState([]);
  const [borderLoading, setBorderLoading] = useState(false);

  useEffect(() => {
    if (!borders || borders.length === 0) {
      setBorderNames([]);
      return;
    }

    async function fetchBorderNames() {
      setBorderLoading(true);
      try {
        const codes = borders.join(",");
        const res = await fetch(`${BASE_URL}/alpha?codes=${codes}`);
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
        setBorderLoading(false);
      }
    }

    fetchBorderNames();
  }, [borders]);

  if (!borders || borders.length === 0) return;

  return (
    <div className="flex items-start md:items-center flex-col md:flex-row flex-wrap text-base leading-6 font-bold text-[#111517] dark:text-white gap-4">
      Border Countries:
      {borderLoading ? (
        <p className="font-light">Loading Borders...</p>
      ) : (
        <div className="flex gap-4 flex-wrap">
          {borderNames.map((border) => (
            <button key={border.code}>
              <Link
                to={`/${border.code}`}
                className="flex justify-center items-center min-w-24 min-h-7 p-1 shadow-[0_0_4px_1px_rgba(0,0,0,0.1049)] dark:bg-[#2B3844] rounded-xs text-sm font-light text-[#111517] dark:text-white"
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
